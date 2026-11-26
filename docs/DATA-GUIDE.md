# Hướng dẫn viết dữ liệu – Web ôn thi Lý thuyết CSDL

Thư mục dự án: `C:\Users\OS\.gemini\antigravity\scratch\csdl-on-thi`. Web mở trực tiếp `index.html` (file://), dữ liệu là các file JS trong `data/` đẩy vào biến toàn cục `DB`.

## 1. Nguồn kiến thức (CHỈ dùng các nguồn này)
- Chữ trích từ slide: `tai-lieu-text/*.txt` (mỗi slide có dòng `=== SLIDE n ===`), ảnh từng slide: `tai-lieu-text/<tên slide>/SlideN.PNG` (xem bằng read_file khi chữ trích bị mất ký hiệu σ π ⋈ → hoặc slide chỉ có hình).
- Bản chép đề: `tai-lieu-text/de/<mã>.md`. Bài tập: `tai-lieu-text/BT_*.txt`, `Bài tập tổng hợp.txt`, `BT CHƯƠNG 2.txt`.
- Ma trận đề + đề cương 2023: `tai-lieu-text/Ma trận đề thi cơ sở dữ liệu.txt`.
- Tên nguồn để ghi vào `source` (dùng đúng chữ này):
  `Slide Ch.1 Tổng quan – tr.N`, `Slide Ch.2 Mô hình ER – tr.N`, `Slide Ch.3 Mô hình quan hệ (P1) – tr.N`, `Slide Ch.3 Các phép toán ĐSQH (P2) – tr.N`,
  `Slide Ch.4 Tổng quan TKCSDL – tr.N`, `Slide Ch.4 Phụ thuộc hàm – tr.N`, `Slide Ch.4 Chuẩn hóa CSDL – tr.N`, `Đề cương môn học 2023 (mục x.y)`,
  `Bài tập Ch.2 (Google Form)`, `Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems`.
- **Không bịa kiến thức.** Phần nào slide không có (EER, kiến trúc 3 mức, tối ưu truy vấn, hàm gộp…) thì dùng mục 6 bên dưới và đặt `outside: true`.

## 2. Cú pháp chuỗi (rất quan trọng)
- Viết chuỗi JS bằng **nháy đơn** `'...'`. Trong chuỗi: `\\` cho LaTeX (vd `'$\\pi_{A}(\\sigma_{B=1}(r))$'`), `\'` cho dấu nháy đơn, `\n` xuống dòng. KHÔNG dùng template literal.
- Công thức: `$...$` (cùng dòng) hoặc `$$...$$` (riêng dòng) – KaTeX. Dấu đô-la thật viết `\\$`.
- Định dạng: `**đậm**`, `==bút dạ quang==` (tô ý quan trọng), `` `code` ``, dòng bắt đầu `- ` là gạch đầu dòng, `1. ` là danh sách số, dòng trống = đoạn mới. KHÔNG viết thẻ HTML thô như `<u>`, `<b>`, `<i>`, `<br>` (vì trình hiển thị sẽ escape `<` thành chữ thường); gạch chân khoá phải dùng KaTeX `$\\underline{\\text{MaSV}}$`.
- Ký hiệu chuẩn: PTH `$X \\to Y$`, bao đóng `$X^+$`, `$F^+$`, chiếu `$\\pi_{A,B}(r)$`, chọn `$\\sigma_{D>5 \\land M=\'T11\'}(r)$`, kết nối tự nhiên viết như slide `$r * s$` (có thể ghi thêm `$\\bowtie$`), kết nối theo điều kiện `$r \\bowtie_{C=B} s$`, chia `$r \\div s$`, hợp/giao/trừ/tích `$\\cup$ $\\cap$ $-$ $\\times$`, đặt tên `$\\rho$` hoặc `$\\leftarrow$`, hàm gộp `$_{Lop}\\mathcal{F}_{Count(MaBD)}(r)$`. Thuộc tính khóa trong lược đồ: `$\\underline{MaSV}$`.
- Văn phong: tiếng Việt tự nhiên, ngắn gọn như sinh viên giảng cho nhau. Không sáo rỗng, không emoji.

## 3. Câu trắc nghiệm (`data/de-<mã>.js`)
```js
/* <Nhãn đề> – nguồn: tai-lieu-text/de/<mã>.md */
DB.questions.push(
{
  id: 'k16-ca1-07', exam: 'k16-ca1', no: 7,            // id = <mã đề>-<số câu 2 chữ số>
  chapter: 'ch2', topic: '2.2',                        // topic = mã dòng trong ma trận (DB.matrix trong data/meta.js)
  stem: 'Đề bài nguyên văn (giữ dấu, giữ lỗi chính tả gốc nếu không làm sai nghĩa).',
  figure: null,                                        // hoặc { type:'er', spec:{...} } | { type:'table', caption:'r', head:['A','B'], rows:[['a1','1']] } | { type:'text', text:'...' } | mảng các figure
  options: [
    { key: 'A', text: '...' },
    { key: 'B', text: '', figure: { type: 'er', spec: { ... } } }   // phương án là sơ đồ
  ],
  answer: 'B',                 // đáp án TỰ GIẢI (không có đáp án chính thức). null chỉ khi incomplete và không thể xác định
  marked: 'C',                 // dấu chọn/khoanh trong ảnh gốc (từ dòng "Marked answer"), không có thì null
  explanation: 'Lập luận từng bước...',
  source: ['Slide Ch.2 Mô hình ER – tr.10'],
  outside: false,              // true nếu kiến thức ngoài slide
  incomplete: null,            // vd 'Ảnh gốc thiếu phương án C' – câu sẽ không tính điểm khi thi thử
  note: null                   // ghi chú phụ, vd 'Phương án B và D trong đề gốc giống hệt nhau'
},
...
);
```
- Ghi file theo từng đợt ≤ ~300 dòng: đợt đầu tạo file, các đợt sau **append** thêm một khối `DB.questions.push(...);` mới.
- Mỗi câu chép trong .md phải có đúng một object (kể cả câu thiếu dữ liệu). Câu hoàn toàn không có trong ảnh thì không thêm.
- `explanation` bắt buộc, 3–12 dòng: nêu kiến thức/định nghĩa liên quan (trích ý slide), các bước giải, vì sao chọn đáp án, vì sao phương án khác sai (ngắn). Bài tính toán (khóa, bao đóng, phủ tối thiểu, dạng chuẩn, tách) phải trình bày từng bước như slide (TN/TG, $X_0, X_1,…$, bảng aj/bij…).
- Bài tính toán Ch.4: **bắt buộc kiểm tra bằng** `node tools/fd.js <U> "<F>" <lệnh>` (xem `node tools/fd.js`). Nếu không phương án nào đúng theo tính toán, chọn phương án gần đúng nhất, nói rõ trong explanation và ghi `note`.
- Phương án "Cả A và B đều đúng"… vẫn để nguyên chữ.
- Nếu ảnh mờ khiến đọc không chắc (chỉ số dưới, dấu so sánh) → nói trong `note`; nếu ảnh hưởng đến đáp án → đặt `incomplete`.

## 4. Sơ đồ ER/EER (`spec`, vẽ bằng `assets/js/er-svg.js`)
```js
{ entities: [ { id:'nv', label:'NHÂN VIÊN', x:0, y:0, weak:false, side:'top',
                attrs:[ {label:'MaNV', kind:'key'}, {label:'Họ tên', kind:'composite', parts:[{label:'Họ'},{label:'Tên'}]},
                        {label:'Điện thoại', kind:'multi'}, {label:'Tuổi', kind:'derived'}, {label:'Tên TN', kind:'partial'} ] } ],
  rels:     [ { id:'lv', label:'Làm việc', x:180, y:0, ident:false, attrs:[{label:'Số giờ'}],
                links:[ {to:'nv', card:'N', total:true}, {to:'da', card:'M'}, {to:'nv', card:'1', role:'giám sát'} ] } ],
  specs:    [ { id:'s1', x:0, y:80, kind:'d', parent:'nv', total:true, children:['xt','xc'] } ],   // kind: 'd' | 'o' | 'U' | null
  notes:    [ { text:'ghi chú', x:0, y:120 } ] }
```
- Ký hiệu: thực thể yếu `weak:true` (chữ nhật kép), liên kết định danh `ident:true` (thoi kép), khóa `key` (gạch chân), khóa bộ phận `partial` (gạch chân nét đứt), đa trị `multi` (oval kép), dẫn xuất `derived` (oval nét đứt), phức hợp `composite` + `parts`. `total:true` = tham gia toàn phần (nét đôi), mặc định bộ phận (nét đơn). `card` ghi '1', 'N', 'M', 'n', '(0,3)'… đặt ở phía thực thể. Chuyên biệt hóa: vòng tròn chữ d/o, `total:true` = nét đôi từ lớp cha tới vòng; ký hiệu ⊂ tự vẽ trên nhánh lớp con.
- Toạ độ (px) là tâm hình; bố trí: thực thể cách nhau ≥ 170px theo ngang, ≥ 130px theo dọc; liên kết đặt giữa hai thực thể. `side` (top/bottom/left/right) là phía xếp thuộc tính để không đè lên đường nối. Có thể đặt vị trí thuộc tính thủ công bằng `dx, dy`.
- Phương án là sơ đồ nhỏ: giữ ≤ 3 thực thể, toạ độ gọn.
- **Kiểm tra hình**: `node tools/preview.js data/<file>.js [id,...]` rồi mở ảnh PNG in ra bằng read_file. Sửa đến khi không có chữ/hình chồng nhau.

## 5. Kiểm tra trước khi báo xong
`node tools/validate.js data/<file>.js` phải in "Không có lỗi" và số câu khớp số câu trong bản chép. Đọc cả phần CẢNH BÁO (thiếu dấu `\\`).

## 6. Kiến thức bổ sung (ngoài slide) – dùng khi slide không có, đặt `outside: true`
- **Kiến trúc 3 mức ANSI/SPARC** (đề hay hỏi "các mức biểu diễn CSDL"): mức ngoài (external – khung nhìn của từng nhóm người dùng) → mức quan niệm/khái niệm (conceptual – mô tả toàn bộ CSDL: thực thể, kiểu dữ liệu, liên kết, ràng buộc) → mức trong/vật lý (internal – cách lưu trữ thật). Thứ tự từ người dùng xuống: ngoài, quan niệm, trong. Độc lập dữ liệu logic (đổi mức quan niệm không ảnh hưởng mức ngoài) và độc lập vật lý (đổi mức trong không ảnh hưởng mức quan niệm).
- **Dữ liệu, siêu dữ liệu**: siêu dữ liệu (metadata) là dữ liệu mô tả dữ liệu (cấu trúc, kiểu, ràng buộc), lưu trong từ điển dữ liệu/catalog.
- **Chức năng HQT CSDL**: môi trường tạo lập CSDL (DDL), môi trường cập nhật và khai thác (DML/truy vấn), công cụ kiểm soát, điều khiển truy cập (bảo mật, toàn vẹn, đồng thời, khôi phục). "Quản lý bộ nhớ" là việc của hệ điều hành, không phải chức năng của HQT CSDL. Người dùng truy cập dữ liệu tùy theo quyền được cấp.
- **Người dùng**: người quản trị CSDL (DBA) cấp quyền, bảo trì; người lập trình ứng dụng viết phần mềm khai thác CSDL; người dùng cuối dùng phần mềm.
- **Mô hình dữ liệu khác**: phân cấp = bản ghi tổ chức thành cây; mạng = bản ghi + đồ thị có hướng (bản ghi chủ – thành viên); quan hệ = bảng.
- **EER (mô hình thực thể liên kết mở rộng)**: ER bổ sung lớp cha/lớp con (superclass/subclass), quan hệ "là một" (IS-A), kế thừa (lớp con kế thừa mọi thuộc tính và liên kết của lớp cha, có thêm thuộc tính/liên kết riêng; khóa lớp con = khóa lớp cha).
  - Chuyên biệt hóa (specialization): từ trên xuống, tách lớp cha thành các lớp con theo đặc trưng. Tổng quát hóa (generalization): từ dưới lên, gộp các lớp có đặc điểm chung thành lớp cha.
  - Ràng buộc tách biệt **d (disjoint)**: một thực thể thuộc tối đa một lớp con. Chồng lấn/phủ lấp **o (overlapping)**: có thể thuộc nhiều lớp con.
  - Ràng buộc đầy đủ: **toàn phần (total)** – mọi thực thể lớp cha phải thuộc ít nhất một lớp con – nét đôi từ lớp cha tới vòng tròn; **bộ phận (partial)** – có thể không thuộc lớp con nào – nét đơn. Ký hiệu ⊂ trên đường nối lớp con (phía mở hướng về lớp cha).
  - Chuyên biệt hóa theo thuộc tính định nghĩa (vd Loại_NV) thường là tách biệt. Kiểu hợp (category/union, vòng chữ U): lớp con là tập con của hợp nhiều lớp cha khác loại. Đa kế thừa: lớp con dùng chung có nhiều lớp cha.
  - Ràng buộc min–max (min,max) ghi trên đường nối: số lần tối thiểu/tối đa một thực thể tham gia liên kết.
- **Chuyển EER → quan hệ** (4 cách): (1) mỗi lớp cha và mỗi lớp con thành một lược đồ, lớp con thêm khóa của lớp cha làm khóa chính (đồng thời khóa ngoại) – dùng được mọi trường hợp; (2) chỉ tạo lược đồ cho lớp con, mỗi lớp con nhận toàn bộ thuộc tính lớp cha – chỉ hợp lý khi toàn phần và tách biệt; (3) một lược đồ duy nhất gồm thuộc tính cha + mọi thuộc tính con + một thuộc tính phân loại (type) – cho tách biệt; (4) một lược đồ với nhiều cờ Boolean cho từng lớp con – cho chồng lấn.
- **Tối ưu biểu thức ĐSQH**: biến đổi thành biểu thức tương đương cho **cùng kết quả** nhưng tốn ít thời gian và bộ nhớ hơn. Heuristic: thực hiện **phép chọn sớm nhất** (giảm số bộ), rồi **phép chiếu** (giảm số cột), sau đó mới **kết nối/tích**; tách $\\sigma_{c_1 \\land c_2}$ thành $\\sigma_{c_1}(\\sigma_{c_2})$ để đẩy xuống từng quan hệ; tránh tích Đề-các khi có thể kết nối.
- **Hàm gộp, gom nhóm**: $_{G}\\mathcal{F}_{f(A)}(r)$ – nhóm các bộ theo tập thuộc tính G rồi tính hàm Count, Sum, Avg, Min, Max trên mỗi nhóm (slide Ch.3 P2 chỉ nhắc "các phép toán gom nhóm" ở bài tập về nhà).
- **Dữ liệu dạng file** (slide Ch.1 tr.8 có một phần): dư thừa, không nhất quán, khó chia sẻ/truy xuất đồng thời, thiếu cơ chế bảo mật phân quyền.

## 7. Tóm tắt + flashcard theo chương (`data/ch1.js`, `ch2.js`, `ch3.js`, `ch4-tongquan.js`, `ch4-pth.js`, `ch4-chuanhoa.js`)
```js
/* Ch.4 – Phụ thuộc hàm – nguồn: Slide Ch.4 Phụ thuộc hàm */
DB.summary.push({
  id: 'ch4-pth', chapter: 'ch4', order: 2, title: 'Phụ thuộc hàm, bao đóng, phủ, khóa',
  sections: [
    { id: 'ch4-pth-dn', title: 'Định nghĩa phụ thuộc hàm', source: 'Slide Ch.4 Phụ thuộc hàm – tr.4–7', outside: false,
      blocks: [
        { t: 'p', text: '...' },
        { t: 'def', term: 'Phụ thuộc hàm', text: '$X \\to Y$ nếu với mọi $t_1, t_2 \\in r$: $t_1[X]=t_2[X] \\Rightarrow t_1[Y]=t_2[Y]$' },
        { t: 'list', items: ['...', '...'] },
        { t: 'table', caption: 'Hệ tiên đề Armstrong', head: ['Luật', 'Phát biểu', 'Ví dụ'], rows: [['Phản xạ', '$Y \\subseteq X \\Rightarrow X \\to Y$', '...']] },
        { t: 'steps', title: 'Thuật toán tính $X^+$', items: ['B1: ...', 'B2: ...'] },
        { t: 'tip', title: 'Mẹo', text: 'Ghi chú bên lề, ngắn, thực dụng – chỉ dựa trên slide/đề.' },
        { t: 'example', title: 'Ví dụ (slide tr.17)', prompt: 'Đề ví dụ', solution: 'Lời giải từng bước' },
        { t: 'figure', spec: { /* sơ đồ ER */ }, caption: 'Chú thích' },
        { t: 'note', text: 'Ghi chú phụ (vd: phần này ngoài slide)' }
      ] }
  ]
});
DB.flashcards.push(
  { id: 'ch4-pth-fc-01', chapter: 'ch4', front: 'Câu hỏi/khái niệm ngắn', back: 'Định nghĩa / công thức / ví dụ ngắn', source: 'Slide Ch.4 Phụ thuộc hàm – tr.4' },
  ...
);
```
- Bao phủ **toàn bộ** nội dung slide của phần đó (mỗi slide có chữ đều phải được phản ánh), sắp xếp lại cho dễ ôn: định nghĩa → công thức/quy tắc (dạng bảng như sách) → thuật toán (steps) → ví dụ có lời giải (dùng ví dụ trong slide, tự giải và ghi "lời giải tự làm" nếu slide không có lời giải) → mẹo.
- Mỗi dạng bài khó có ít nhất một khối `tip` "Mẹo làm bài" (tìm khóa, bao đóng, phủ tối thiểu, chuẩn hóa 2NF/3NF/BCNF, tách, ĐSQH, chuyển ER→quan hệ, đọc ký hiệu ER/EER). Mẹo phải suy ra từ slide/đề, không bịa.
- Dùng `==...==` để tô vài cụm thật sự quan trọng (≤ 2 cụm mỗi mục).
- Flashcard: 25–45 thẻ mỗi file, bao định nghĩa, ký hiệu, quy tắc, thuật toán, bẫy hay gặp trong đề. Mặt sau ngắn (≤ 6 dòng).

## 8. Bài tự luận (`data/tuluan-er.js`, `tuluan-dsqh.js`, `tuluan-ch4.js`)
```js
DB.essays.push({
  id: 'er-ktx', kind: 'er',            // er | eer | dsqh | ch4
  title: 'Quản lý ký túc xá', source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 1', answerStatus: 'tu-giai',   // 'co-san' nếu lời giải lấy từ slide
  prompt: 'Đề bài nguyên văn',
  answer: {
    diagram: { /* spec ER */ },       // với er/eer
    steps: ['Bước 1: xác định thực thể ...', 'Bước 2: ...'],
    relations: [ { name: 'PHONG', attrs: [ {n:'MaPhong', pk:true}, {n:'TenPhong'}, {n:'MaNha', fk:'NHA'} ] } ],   // lược đồ quan hệ sau khi chuyển
    parts: [ { q: 'a) ...', a: 'Lời giải ...' } ]   // với dsqh / ch4 nhiều ý
  }
});
```
