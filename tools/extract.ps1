$ErrorActionPreference = "Continue"
$root = "C:\Users\OS\.gemini\antigravity\scratch\csdl-on-thi"
$src  = Join-Path $root "tai-lieu"
$out  = Join-Path $root "tai-lieu-text"
New-Item -ItemType Directory -Force $out | Out-Null

$pp = New-Object -ComObject PowerPoint.Application
Get-ChildItem $src -Recurse -Include *.ppt,*.pptx | ForEach-Object {
  $f = $_
  try {
    $pres = $pp.Presentations.Open($f.FullName, $true, $false, $false)
    $sb = New-Object System.Text.StringBuilder
    $i = 0
    foreach ($s in $pres.Slides) {
      $i++
      [void]$sb.AppendLine("=== SLIDE $i ===")
      foreach ($sh in $s.Shapes) {
        try {
          if ($sh.HasTextFrame -and $sh.TextFrame.HasText) {
            [void]$sb.AppendLine($sh.TextFrame.TextRange.Text.Replace("`r", "`n"))
          }
          if ($sh.HasTable) {
            $t = $sh.Table
            for ($r = 1; $r -le $t.Rows.Count; $r++) {
              $cells = @()
              for ($c = 1; $c -le $t.Columns.Count; $c++) { $cells += $t.Cell($r, $c).Shape.TextFrame.TextRange.Text }
              [void]$sb.AppendLine("| " + ($cells -join " | ") + " |")
            }
          }
          if ($sh.Type -eq 6) { # group
            foreach ($g in $sh.GroupItems) { if ($g.HasTextFrame -and $g.TextFrame.HasText) { [void]$sb.AppendLine("[grp] " + $g.TextFrame.TextRange.Text.Replace("`r", " ")) } }
          }
        } catch {}
      }
      try { $notes = $s.NotesPage.Shapes.Placeholders(2).TextFrame.TextRange.Text; if ($notes.Trim()) { [void]$sb.AppendLine("[NOTES] " + $notes) } } catch {}
    }
    $name = [IO.Path]::GetFileNameWithoutExtension($f.Name) + ".txt"
    [IO.File]::WriteAllText((Join-Path $out $name), $sb.ToString(), [Text.Encoding]::UTF8)
    # export slide images for diagram reference
    $imgDir = Join-Path $out ([IO.Path]::GetFileNameWithoutExtension($f.Name))
    New-Item -ItemType Directory -Force $imgDir | Out-Null
    $pres.Export($imgDir, "PNG", 960, 720)
    "OK  $($f.Name)  slides=$i"
    $pres.Close()
  } catch { "ERR $($f.Name): $($_.Exception.Message)" }
}
$pp.Quit()

$w = New-Object -ComObject Word.Application
$w.Visible = $false
Get-ChildItem $src -Recurse -Include *.docx,*.doc | ForEach-Object {
  $f = $_
  try {
    $d = $w.Documents.Open($f.FullName, $false, $true)
    $txt = $d.Content.Text.Replace("`r", "`n")
    $name = [IO.Path]::GetFileNameWithoutExtension($f.Name) + ".txt"
    [IO.File]::WriteAllText((Join-Path $out $name), $txt, [Text.Encoding]::UTF8)
    "OK  $($f.Name)  chars=$($txt.Length) inlineShapes=$($d.InlineShapes.Count) shapes=$($d.Shapes.Count)"
    $d.Close($false)
  } catch { "ERR $($f.Name): $($_.Exception.Message)" }
}
$w.Quit()
Copy-Item (Join-Path $src "BT CHƯƠNG 2.txt") $out -Force
