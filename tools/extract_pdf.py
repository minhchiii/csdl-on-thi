import pymupdf, os
src = r"C:\Users\OS\.gemini\antigravity\scratch\csdl-on-thi\tai-lieu"
out = r"C:\Users\OS\.gemini\antigravity\scratch\csdl-on-thi\tai-lieu-text"
for name in ["Ma trận đề thi cơ sở dữ liệu.pdf", "Đề mẫu mới nhất.pdf"]:
    doc = pymupdf.open(os.path.join(src, name))
    base = os.path.splitext(name)[0]
    d = os.path.join(out, base); os.makedirs(d, exist_ok=True)
    txt = []
    for i, p in enumerate(doc, 1):
        t = p.get_text()
        txt.append(f"=== PAGE {i} ===\n{t}")
        p.get_pixmap(dpi=110).save(os.path.join(d, f"p{i:02d}.png"))
    open(os.path.join(out, base + ".txt"), "w", encoding="utf-8").write("\n".join(txt))
    print(name, "pages", len(doc), "chars", sum(len(x) for x in txt))
