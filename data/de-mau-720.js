/* Đề thi mẫu 2023 – Mã đề 720 – nguồn: tai-lieu/Đề mẫu mới nhất.pdf & tai-lieu-text/de/de-mau-720.md */
DB.questions.push(
{
  id: 'de-mau-720-01', exam: 'de-mau-720', no: 1, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả **đúng nhất** về thực thể giáo viên với các thuộc tính Mã giáo viên, lương, hệ số lương? Biết rằng, các giáo viên được phân biệt với nhau thông qua Mã giáo viên và lương được tính theo hệ số lương.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 140, y: 80, side: 'top', attrs: [
      { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
      { label: 'HSL', kind: 'derived', dx: 0, dy: -60 },
      { label: 'Mã GV', kind: 'key', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 140, y: 80, side: 'top', attrs: [
      { label: 'Lương', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã GV', kind: 'key', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 140, y: 80, side: 'top', attrs: [
      { label: 'Lương', kind: 'multi', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã GV', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 140, y: 80, side: 'top', attrs: [
      { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã GV', kind: 'key', dx: 130, dy: 0 }
    ] }] } } }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo đề bài:\n1. Giáo viên phân biệt nhau qua `Mã GV` $\\Rightarrow$ `Mã GV` là **thuộc tính khoá** (hình elip nét liền và gạch chân). Phương án C không gạch chân `Mã GV` là sai.\n2. `Lương` được tính theo `HSL` $\\Rightarrow$ `Lương` là **thuộc tính dẫn xuất / suy dẫn** (vẽ bằng elip nét đứt), còn `HSL` là thuộc tính lưu trữ bình thường (elip nét liền).\n- A sai vì vẽ cả `HSL` nét đứt.\n- B sai vì vẽ `Lương` nét liền.\n- D đúng cả 3 ký hiệu.',
  source: ['Slide Ch.2 Mô hình ER – tr.11–12', 'Đề mẫu 720 – câu 1']
},
{
  id: 'de-mau-720-02', exam: 'de-mau-720', no: 2, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F = \\{AC \\to BD,\\; D \\to C,\\; AD \\to B\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$R$ đạt chuẩn 3NF' },
    { key: 'B', text: '$R$ đạt chuẩn là 1NF' },
    { key: 'C', text: '$R$ đạt chuẩn 2NF' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khoá: tập nguồn $TN = \\{A\\}$ (chỉ ở vế trái), tập trung gian $TG = \\{C, D\\}$ ($B$ chỉ ở vế phải nên không có trong khoá). Ta có $A^+ = A$, $(AC)^+ = ABCD$, $(AD)^+ = ABCD$. Vậy $R$ có hai khoá: $AC$ và $AD$. Thuộc tính khoá: $A, C, D$; thuộc tính không khoá: $B$.\n2. Kiểm tra dạng chuẩn: $B$ phụ thuộc đầy đủ vào khoá (vì $A^+=A$, $C^+=C$, $D^+=CD$ đều không chứa $B$), nên $R$ đạt **2NF**. Với 3 PTH trong $F$: $AC \\to BD$ ($AC$ là siêu khoá), $AD \\to B$ ($AD$ là siêu khoá), $D \\to C$ ($C$ là thuộc tính khoá). Vậy $R$ đạt **3NF** (chưa đạt BCNF vì $D$ không là siêu khoá).\n3. Theo thứ tự phân cấp chuẩn hóa (BCNF $\\subset$ 3NF $\\subset$ 2NF $\\subset$ 1NF), lược đồ đã đạt 3NF thì đương nhiên cũng thỏa 1NF và 2NF. Đề hỏi "khẳng định đúng" chứ không hỏi "dạng chuẩn cao nhất", nên D đúng.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.7, 21, 23', 'Đề mẫu 720 – câu 2']
},
{
  id: 'de-mau-720-03', exam: 'de-mau-720', no: 3, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng (EER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mối liên kết một cách rõ ràng và chính xác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệp vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm và các biểu diễn về quy tắc nghiệp vụ để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Mô hình thực thể liên kết mở rộng (EER – Enhanced Entity-Relationship) kế thừa toàn bộ mô hình ER cơ bản và bổ sung thêm các khái niệm ngữ nghĩa mới (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) cùng cách biểu diễn các quy tắc nghiệp vụ/ràng buộc (`d`/`o`, toàn phần/bộ phận…) để mô tả miền dữ liệu rõ ràng và chính xác hơn.\n- A chỉ nhắc đến min-max nên thiếu.\n- B thiếu các khái niệm mở rộng về thực thể/kế thừa.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, EER Model', 'Đề mẫu 720 – câu 3']
},
{
  id: 'de-mau-720-04', exam: 'de-mau-720', no: 4, chapter: 'ch2', topic: '2.4',
  stem: 'Mô hình thực thể liên kết (ER) nào biểu diễn chính xác mô tả sau: “Mỗi độc giả được cấp cho một thẻ thư viện, trong đó có ghi rõ mã độc giả cùng các thông tin như họ tên, ngày sinh, địa chỉ. Mỗi đầu sách trong thư viện có một mã sách để quản lý các thông tin: Tên sách, nhà xuất bản. Khi mượn sách thư viện lưu ngày mượn, ngày trả của độc giả”?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'dg', label: 'THẺ ĐG', x: 165, y: 120, attrs: [
          { label: 'Địa chỉ', dx: -95, dy: -80 }, { label: 'Ngày sinh', dx: 5, dy: -65 },
          { label: 'Họ Tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -60, dy: -45 }, { label: 'Tên', dx: -60, dy: 45 }] },
          { label: 'Mã ĐG', kind: 'key', dx: -15, dy: 65 }
        ] },
        { id: 's', label: 'SÁCH', x: 520, y: 120, attrs: [
          { label: 'Tên sách', dx: 0, dy: -65 }, { label: 'Mã sách', kind: 'key', dx: -45, dy: 65 }, { label: 'NXB', dx: 65, dy: 65 }
        ] }
      ],
      rels: [{ id: 'm', label: 'Mượn sách', x: 345, y: 120, attrs: [{ label: 'Ngày mượn', dx: 0, dy: -68 }, { label: 'Ngày trả', dx: 0, dy: 68 }],
        links: [{ to: 'dg', card: '1' }, { to: 's', card: 'n', total: true }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'dg', label: 'THẺ ĐG', x: 165, y: 120, attrs: [
          { label: 'Địa chỉ', dx: -95, dy: -80 }, { label: 'Ngày sinh', dx: 5, dy: -65 },
          { label: 'Họ Tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -60, dy: -45 }, { label: 'Tên', dx: -60, dy: 45 }] },
          { label: 'Mã ĐG', kind: 'key', dx: -15, dy: 65 }
        ] },
        { id: 's', label: 'SÁCH', x: 510, y: 120, attrs: [
          { label: 'Tên sách', dx: -40, dy: -65 }, { label: 'Ngày mượn', dx: 85, dy: -65 },
          { label: 'NXB', dx: 115, dy: 0 }, { label: 'Mã sách', kind: 'key', dx: -40, dy: 65 }, { label: 'Ngày trả', dx: 85, dy: 65 }
        ] }
      ],
      rels: [{ id: 'm', label: 'Mượn sách', x: 340, y: 120, links: [{ to: 'dg', card: '1' }, { to: 's', card: 'n', total: true }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'dg', label: 'THẺ ĐG', x: 165, y: 120, attrs: [
          { label: 'Địa chỉ', dx: -95, dy: -80 }, { label: 'Ngày sinh', dx: 5, dy: -65 },
          { label: 'Họ Tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -60, dy: -45 }, { label: 'Tên', dx: -60, dy: 45 }] },
          { label: 'Mã ĐG', kind: 'key', dx: -15, dy: 65 }
        ] },
        { id: 's', label: 'SÁCH', x: 510, y: 120, attrs: [
          { label: 'Tên sách', dx: -40, dy: -65 }, { label: 'Ngày mượn', dx: 85, dy: -65 },
          { label: 'NXB', dx: 115, dy: 0 }, { label: 'Mã sách', kind: 'key', dx: -40, dy: 65 }, { label: 'Ngày trả', dx: 85, dy: 65 }
        ] }
      ],
      rels: [{ id: 'm', label: 'Mượn sách', x: 340, y: 120, links: [{ to: 'dg', card: 'n' }, { to: 's', card: 'n' }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'dg', label: 'THẺ ĐG', x: 165, y: 120, attrs: [
          { label: 'Địa chỉ', dx: -95, dy: -80 }, { label: 'Ngày sinh', dx: 5, dy: -65 },
          { label: 'Họ Tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -60, dy: -45 }, { label: 'Tên', dx: -60, dy: 45 }] },
          { label: 'Mã ĐG', kind: 'key', dx: -15, dy: 65 }
        ] },
        { id: 's', label: 'SÁCH', x: 520, y: 120, attrs: [
          { label: 'Tên sách', dx: 0, dy: -65 }, { label: 'Mã sách', kind: 'key', dx: -45, dy: 65 }, { label: 'NXB', dx: 65, dy: 65 }
        ] }
      ],
      rels: [{ id: 'm', label: 'Mượn sách', x: 345, y: 120, attrs: [{ label: 'Ngày mượn', dx: 0, dy: -68 }, { label: 'Ngày trả', dx: 0, dy: 68 }],
        links: [{ to: 'dg', card: 'n' }, { to: 's', card: 'n', total: true }] }]
    } } }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. `Ngày mượn`, `Ngày trả` phát sinh **khi độc giả mượn sách** nên phải là thuộc tính của mối liên kết `Mượn sách` (loại B và C vì gắn vào thực thể `SÁCH`).\n2. Một độc giả (`THẺ ĐG`) có thể mượn nhiều đầu sách, và một đầu sách (`SÁCH`) cũng có thể được nhiều độc giả mượn $\\Rightarrow$ bản số liên kết là **nhiều–nhiều ($n:n$)** (cũng tương ứng với việc khi chuyển sang mô hình quan hệ ở Câu 14/41/43 ta có bảng `PHIEUMUON(MaBD, MaSH, Ngaymuon, TraSach)`). Loại A vì ghi `1` ở phía `THẺ ĐG`.',
  source: ['Slide Ch.2 Mô hình ER – tr.17, 21', 'Đề mẫu 720 – câu 4']
},
{
  id: 'de-mau-720-05', exam: 'de-mau-720', no: 5, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to G,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D,\\; A\\to C\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc tính $A$ trong $AC\\to D$' },
    { key: 'B', text: 'Dư thừa thuộc tính $D$ trong $AC\\to D$' },
    { key: 'C', text: 'Dư thừa thuộc tính $B$ trong $BG\\to H$' },
    { key: 'D', text: 'Dư thừa thuộc tính $C$ trong $AC\\to D$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng phương án theo quy tắc loại bỏ thuộc tính dư thừa ở vế trái (Slide Ch.4 PTH tr.26):\n- Xét $AC \\to D$: bỏ thử $C$ ở vế trái, tính $A^+$ theo $F$: có $A \\to C$, suy ra $A^+ = \\{A, C, D\\} \\supseteq \\{D\\}$, tức $A \\to D \\in F^+$. Do đó thuộc tính **$C$ dư thừa trong $AC \\to D$** $\\Rightarrow$ **D đúng**.\n- Kiểm tra lại: bỏ $A$ trong $AC \\to D$ còn $C^+ = \\{C\\}$ (không chứa $D$); bỏ $B$ trong $BG \\to H$ còn $G^+ = \\{G\\}$ (không chứa $H$). $D$ nằm ở vế phải chứ không ở vế trái.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề mẫu 720 – câu 5']
},
{
  id: 'de-mau-720-06', exam: 'de-mau-720', no: 6, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai lược đồ quan hệ $A(\\underline{ID}, \\text{Name}, \\text{Age})$ và $B(\\underline{ID}, \\text{Salary})$. Hãy viết biểu thức đại số quan hệ để lấy ra tất cả các bản ghi có $ID$ chung trên hai bảng.',
  figure: null,
  options: [
    { key: 'A', text: '$\\Pi_{ID}(A) \\cap \\Pi_{ID}(B)$' },
    { key: 'B', text: '$\\Pi_{ID}(A \\cup B)$' },
    { key: 'C', text: '$\\Pi_{ID}(A) \\cup \\Pi_{ID}(B)$' },
    { key: 'D', text: '$\\Pi_{ID}(A \\cap B)$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Phép giao ($\\cap$) chỉ thực hiện được trên **hai quan hệ có cùng lược đồ** (Slide Ch.3 P2 tr.9, 12). Hai bảng $A$ và $B$ khác lược đồ nên không thể viết $A \\cup B$ hay $A \\cap B$ trực tiếp (loại B, D). Chiếu mỗi bảng lên cột chung `ID` thu được hai quan hệ cùng lược đồ $(ID)$, rồi lấy giao $\\Pi_{ID}(A) \\cap \\Pi_{ID}(B)$ sẽ ra các `ID` xuất hiện ở cả hai bảng (loại C vì $\\cup$ là phép hợp).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 12', 'Đề mẫu 720 – câu 6']
},
{
  id: 'de-mau-720-07', exam: 'de-mau-720', no: 7, chapter: 'ch3', topic: '2.7',
  stem: 'Chọn khẳng định **đúng nhất** khi chuyển đổi mối liên kết giữa kiểu cha và kiểu con trong mô hình thực thể liên kết mở rộng sang mô hình dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyển kiểu cha và kiểu con thành các lược đồ quan hệ mới, các kiểu con bổ sung thêm thuộc tính khóa của kiểu cha.' },
    { key: 'B', text: 'Chuyển các kiểu con thành các lược đồ, đưa các thuộc tính của kiểu cha về làm thuộc tính của các kiểu con' },
    { key: 'C', text: 'Chuyển kiểu cha và kiểu con thành một lược đồ quan hệ, bổ sung thêm thuộc tính xác định kiểu con.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi chuyển chuyên biệt hóa / tổng quát hóa trong mô hình EER sang mô hình quan hệ có nhiều cách áp dụng tùy theo ràng buộc phủ lấp/tách biệt và toàn phần/bộ phận:\n- Cách 1 (A): Tạo 1 quan hệ cho lớp cha và 1 quan hệ cho mỗi lớp con, thêm khoá chính của lớp cha vào từng lớp con (áp dụng được cho mọi trường hợp).\n- Cách 2 (B): Chỉ tạo quan hệ cho các lớp con, chép toàn bộ thuộc tính của lớp cha xuống từng lớp con (dùng khi chuyên biệt hóa toàn phần và tách biệt).\n- Cách 3 (C): Gom cha và các con vào 1 quan hệ duy nhất kèm thuộc tính phân loại (dùng khi tách biệt).\nVì cả ba đều là các quy tắc chuyển đổi hợp lệ nên chọn D.',
  source: ['Kiến thức bổ sung (ngoài slide) – Chuyển đổi EER sang quan hệ (Elmasri & Navathe)', 'Đề mẫu 720 – câu 7']
},
{
  id: 'de-mau-720-08', exam: 'de-mau-720', no: 8, chapter: 'ch3', topic: '2.9',
  stem: 'Cho quan hệ $R(\\underline{\\text{MaCB}}, \\text{HoTen}, \\text{NgaySinh}, \\text{GioiTinh})$. Lệnh nào sau đây cho phép thay đổi bộ $t(\\text{001}, \\text{Mai Thị Hoa}, \\text{11/12/2005}, \\text{Nữ})$ trong $R$ thành $t\'(\\text{001}, \\text{Mai Thị Hoa}, \\text{21/12/2005}, \\text{Nữ})$?',
  figure: null,
  options: [
    { key: 'A', text: '`CH (R; MaCB = 001; ngaysinh= 11/12/2005; Ngaysinh= 21/12/2005)`' },
    { key: 'B', text: '`CH (R, MaCB = 001, NgaySinh= 21/12/2005)`' },
    { key: 'C', text: '`CH (R; MaCB= 001; HoTen= Mai Thị Hoa, NgaySinh= 11/12/2005, Gioitinh=Nữ; NgaySinh = 21/12/2005)`' },
    { key: 'D', text: 'Cả B và C đều đúng.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 P2 tr.8, phép thay đổi (`CH`) có đúng 3 phần ngăn cách bởi dấu chấm phẩy `;`:\n- Dạng đầy đủ: `CH(r; A1=d1, ..., An=dn; C1=e1, ...)` $\\to$ khớp chính xác với **C**.\n- Dạng rút gọn theo khoá $K$: `CH(r; K=d1; C1=e1)` $\\to$ B sai vì dùng dấu phẩy `,` thay cho dấu `;` nên không phân biệt đâu là điều kiện khoá, đâu là giá trị sửa; A sai vì dư phần `ngaysinh=11/12/2005` thành 4 vế.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.8', 'Đề mẫu 720 – câu 8']
},
{
  id: 'de-mau-720-09', exam: 'de-mau-720', no: 9, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Khóa của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BC$' },
    { key: 'B', text: '$CD$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Tìm khoá theo thuật toán TN/TG (Slide Ch.4 PTH tr.42):\n- Tập nguồn $TN = \\{C\\}$ ($C$ chỉ ở vế trái).\n- Tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không nằm trong khoá).\n- Thử $C^+ = CA \\neq ABCD$. Thử bổ sung từng tập con của $TG$:\n  - $(BC)^+ = BCAD = ABCD$ ($C\\to A, B\\to AD$).\n  - $(CD)^+ = CDAB = ABCD$ ($C\\to A, D\\to B, B\\to A$).\nVậy $R$ có hai khoá là $BC$ và $CD$ $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42', 'Đề mẫu 720 – câu 9']
},
{
  id: 'de-mau-720-10', exam: 'de-mau-720', no: 10, chapter: 'ch3', topic: '1.6',
  stem: 'Trong đại số quan hệ, phép toán nào sau đây được sử dụng để tạo ra một bảng mới từ các bảng đã có bằng cách kết hợp các bảng có liên quan và giới hạn kết quả bởi một điều kiện nhất định:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép chọn' },
    { key: 'B', text: 'Phép chiếu' },
    { key: 'C', text: 'Phép kết nối' },
    { key: 'D', text: 'Phép tích Descartes' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 P2 tr.35: **Phép kết nối** (Join, $\\bowtie$) dùng để kết hợp các bộ có liên hệ với nhau từ hai quan hệ thành một bộ thỏa mãn điều kiện nối $A_i \\theta B_j$.\n- A (chọn) và B (chiếu) chỉ thao tác trên một quan hệ.\n- D (tích Descartes) ghép mọi cặp bộ mà không giới hạn bởi điều kiện.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.35', 'Đề mẫu 720 – câu 10']
},
{
  id: 'de-mau-720-11', exam: 'de-mau-720', no: 11, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ $R(U,G)$; $U = \\{A, B, C, D, E, F\\}$ và $G = \\{AB \\to C,\\; CD \\to FE,\\; E \\to A\\}$. Phép tách $R$ thành các lược đồ con nào sau đây là phép tách bảo toàn phụ thuộc hàm?',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{AEF\\},\\; R_2 = \\{BCDE\\},\\; R_3 = \\{AF\\}$' },
    { key: 'B', text: '$R_1 = \\{ABC\\},\\; R_2 = \\{CDEF\\},\\; R_3 = \\{EA\\}$' },
    { key: 'C', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{ABEF\\},\\; R_3 = \\{EA\\}$' },
    { key: 'D', text: '$R_1 = \\{ABE\\},\\; R_2 = \\{ACD\\},\\; R_3 = \\{DEF\\}$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Phép tách $D = \\{R_1, R_2, R_3\\}$ bảo toàn PTH khi $\\left(\\bigcup \\Pi_{R_i}(G)\\right)^+ = G^+$, tức là mọi PTH trong $G$ đều suy diễn được từ các hình chiếu trên từng $R_i$ (Slide Ch.4 Chuẩn hóa tr.43).\n- Xét **B**: $AB \\to C$ nằm gọn trong $R_1 = \\{ABC\\}$; $CD \\to FE$ nằm gọn trong $R_2 = \\{CDEF\\}$; $E \\to A$ nằm gọn trong $R_3 = \\{EA\\}$. Cả 3 PTH của $G$ đều được giữ nguyên nên bảo toàn PTH.\n- Ở A, C, D đều không có lược đồ con nào chứa đủ $\\{A,B,C\\}$ và/hoặc $\\{C,D,E,F\\}$ nên mất $AB \\to C$ và $CD \\to FE$.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.41–43', 'Đề mẫu 720 – câu 11']
},
{
  id: 'de-mau-720-12', exam: 'de-mau-720', no: 12, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$; $U=\\{A,B,C,D,E\\}$ và $F=\\{AB \\to CD,\\; BC \\to E,\\; DE \\to A,\\; B \\to D,\\; E \\to C,\\; CD \\to E\\}$. Bao đóng của $ED$ là?',
  figure: null,
  options: [
    { key: 'A', text: '$ABCDE$' },
    { key: 'B', text: '$EDCA$' },
    { key: 'C', text: '$EDCB$' },
    { key: 'D', text: '$EDAB$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm bao đóng $(ED)^+$ (Slide Ch.4 PTH tr.16):\n- $X_0 = \\{E, D\\}$.\n- Dùng $DE \\to A$: $X_1 = \\{A, D, E\\}$.\n- Dùng $E \\to C$: $X_2 = \\{A, C, D, E\\}$.\n- Không còn PTH nào có vế trái nằm trong $\\{A, C, D, E\\}$ ($AB, BC, B$ đều cần $B$). Vậy $(ED)^+ = \\{A, C, D, E\\}$ (hay `EDCA`) $\\Rightarrow$ **B đúng**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề mẫu 720 – câu 12']
},
{
  id: 'de-mau-720-13', exam: 'de-mau-720', no: 13, chapter: 'ch3', topic: '2.13',
  stem: 'Cho lược đồ quan hệ sau: $\\text{HANG}(\\underline{\\text{Mahang}}, \\text{TenHang}, \\text{TheLoai}, \\text{DonGia}, \\text{SoLuong}, \\text{Ngay})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Thống kê mỗi thể loại có bao nhiêu mặt hàng*”?',
  figure: null,
  options: [
    { key: 'A', text: '$_{\\text{TenHang}} F_{\\text{Sum}(\\text{SoLuong})}(\\text{HANG})$' },
    { key: 'B', text: '$_{\\text{TenHang}} F_{\\text{Count}(\\text{MaHang})}(\\text{HANG})$' },
    { key: 'C', text: '$_{\\text{TheLoai}} F_{\\text{Sum}(\\text{SoLuong})}(\\text{HANG})$' },
    { key: 'D', text: '$_{\\text{TheLoai}} F_{\\text{Count}(\\text{Mahang})}(\\text{HANG})$' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: 'Đề gốc dùng chữ $F$ (hoặc $\\mathcal{F}$) cho ký hiệu hàm gộp.',
  explanation: 'Hàm gom nhóm $_G\\mathcal{F}_{f(A)}(r)$ nhóm các bộ theo tập thuộc tính $G$ ở bên trái và tính hàm tổng hợp $f(A)$ ở bên phải:\n- "Mỗi thể loại" $\\Rightarrow$ nhóm theo `TheLoai` (loại A, B vì nhóm theo `TenHang`).\n- "Có bao nhiêu mặt hàng" $\\Rightarrow$ đếm số mã mặt hàng `Count(Mahang)` (loại C vì `Sum(SoLuong)` là tính tổng số lượng hàng chứ không phải đếm số loại mặt hàng).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.30 (bài tập gom nhóm)', 'Kiến thức bổ sung (ngoài slide) – Hàm gộp ĐSQH', 'Đề mẫu 720 – câu 13']
},
{
  id: 'de-mau-720-14', exam: 'de-mau-720', no: 14, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\underline{\\text{MaBD}}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\underline{\\text{MaSH}}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\underline{\\text{MaBD}}, \\underline{\\text{MaSH}}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, NgayTra là ngày hẹn trả và TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “*Liệt kê mã và tên những quyển sách xuất bản năm 2015 mà bạn đọc đã trả*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maSH},\\text{tenSach}}(\\sigma_{\\text{namXB}=2015}(\\text{SACH}) * \\pi_{\\text{maSH}}\\sigma_{\\text{TraSach}=\\text{Yes}}(\\text{PHIEUMUON}))$' },
    { key: 'B', text: '$\\pi\\text{maSH},\\text{tenSach}(\\sigma\\text{namXB}=2015(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'C', text: '$\\sigma_{\\text{year}(\\text{namXB})=2015}(\\pi_{\\text{maSH},\\text{tenSach}}(\\text{SACH}) * \\pi_{\\text{maSH}}\\sigma_{\\text{TraSach}=\\text{Yes}}(\\text{PHIEUMUON}))$' },
    { key: 'D', text: 'Cả ba phương án đều sai' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: 'Phương án A trong bản in thiếu cặp ngoặc quanh biểu thức trong của $\\pi_{maSH}$, và dùng tên rút gọn namXB cho NamXuatBan.',
  explanation: '1. Lọc sách đã trả (`TraSach = Yes`) từ `PHIEUMUON` rồi chiếu lấy `maSH` (loại B vì không có điều kiện `TraSach = Yes`).\n2. Lọc sách năm 2015 trên `SACH` trước rồi kết nối tự nhiên (`*`) với danh sách `maSH` đã trả, sau đó mới chiếu `maSH, tenSach` $\\Rightarrow$ **A đúng**.\n- C sai vì chiếu $\\pi_{maSH, tenSach}(\\text{SACH})$ trước làm mất cột `namXB`, sau đó $\\sigma_{year(namXB)=2015}$ sẽ không có thuộc tính để lọc.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề mẫu 720 – câu 14']
},
{
  id: 'de-mau-720-15', exam: 'de-mau-720', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết ER, thuộc tính của một thực thể là?',
  figure: null,
  options: [
    { key: 'A', text: 'Các tính chất để mô tả đặc trưng của thực thể.' },
    { key: 'B', text: 'Các yếu tố thông tin cho biết rõ hơn về thực thể.' },
    { key: 'C', text: 'Các thông tin về thực thể cần lưu trữ để quản lý.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Slide Ch.2 Mô hình ER tr.7 định nghĩa: thuộc tính là yếu tố thông tin cho biết rõ hơn về thực thể, dùng để mô tả đặc trưng và lưu trữ các thông tin cần quản lý của thực thể. Cả A, B, C đều đúng $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.2 Mô hình ER – tr.7', 'Đề mẫu 720 – câu 15']
},
{
  id: 'de-mau-720-16', exam: 'de-mau-720', no: 16, chapter: 'ch3', topic: '2.11',
  stem: 'Chọn khẳng định **đúng nhất** khi nói về tối ưu theo nghĩa biến đổi một biểu thức đại số quan hệ.',
  figure: null,
  options: [
    { key: 'A', text: 'Cho cùng một kết quả với chi phí thời gian thực hiện và sử dụng bộ nhớ ít hơn.' },
    { key: 'B', text: 'Cho cùng một kết quả, không tổn thất thông tin.' },
    { key: 'C', text: 'Cho cùng một kết quả với chi phí bộ nhớ không nhiều.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Tối ưu hóa truy vấn (query optimization) ở mức đại số quan hệ là biến đổi một biểu thức truy vấn sang biểu thức tương đương (cho **cùng một kết quả**) sao cho **chi phí thực hiện về thời gian và bộ nhớ trung gian là ít nhất**.\n- B thiếu tiêu chí chi phí thực hiện; C bỏ qua thời gian thực hiện và dùng từ "không nhiều" chưa chuẩn.',
  source: ['Kiến thức bổ sung (ngoài slide) – Tối ưu hóa truy vấn ĐSQH', 'Đề mẫu 720 – câu 16']
},
{
  id: 'de-mau-720-17', exam: 'de-mau-720', no: 17, chapter: 'ch3', topic: '2.11',
  stem: 'Để tối ưu biểu thức đại số quan hệ, chúng ta nên thực hiện các phép toán theo thứ tự sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép kết nối, phép chọn, phép chiếu.' },
    { key: 'B', text: 'Phép chọn, phép chiếu, phép kết nối.' },
    { key: 'C', text: 'Phép chọn, phép kết nối, phép chiếu' },
    { key: 'D', text: 'Phép chiếu, phép kết nối, phép chọn.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo quy tắc tối ưu hóa heuristic trong đại số quan hệ:\n1. Thực hiện **phép chọn** ($\\sigma$) sớm nhất có thể để giảm số lượng dòng (bộ).\n2. Thực hiện **phép chiếu** ($\\pi$) để loại bỏ các cột không cần thiết (vẫn giữ lại thuộc tính dùng để kết nối), giảm kích thước bộ.\n3. Sau cùng mới thực hiện **phép kết nối** ($\\bowtie$ / `*`) trên các quan hệ trung gian đã thu gọn.',
  source: ['Kiến thức bổ sung (ngoài slide) – Heuristic tối ưu biểu thức ĐSQH', 'Đề mẫu 720 – câu 17']
}
);

DB.questions.push(
{
  id: 'de-mau-720-18', exam: 'de-mau-720', no: 18, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G)$ và tập các phụ thuộc hàm $F=\\{A\\to B,\\; BC\\to D,\\; CE\\to D,\\; AE\\to G,\\; CD\\to A\\}$. Khóa của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '$CE$' },
    { key: 'B', text: '$CE$ và $ACE$' },
    { key: 'C', text: '$AE$' },
    { key: 'D', text: '$BC$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Tìm tập nguồn $TN$: $C$ và $E$ không xuất hiện ở vế phải của bất kỳ PTH nào trong $F$, nên $TN = \\{C, E\\}$ bắt buộc phải có mặt trong mọi khoá (Slide Ch.4 PTH tr.35, 41).\nTính bao đóng $(CE)^+$:\n- $X_0 = \\{C, E\\}$.\n- $CE \\to D \\Rightarrow \\{C, D, E\\}$.\n- $CD \\to A \\Rightarrow \\{A, C, D, E\\}$.\n- $A \\to B \\Rightarrow \\{A, B, C, D, E\\}$.\n- $AE \\to G \\Rightarrow \\{A, B, C, D, E, G\\} = U$.\nVì $TN^+ = U$ nên $CE$ là khoá duy nhất của $R$ ($ACE$ chỉ là siêu khoá vì chứa thừa $A$). Chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.35, 41–42', 'Đề mẫu 720 – câu 18']
},
{
  id: 'de-mau-720-19', exam: 'de-mau-720', no: 19, chapter: 'ch2', topic: '2.1',
  stem: 'Trong mô hình thực thể liên kết (ER), cách xác định tập thực thể của một bài toán như sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Xác định thực thể cụ thể bằng giác quan.' },
    { key: 'B', text: 'Xác định thực thể trừu tượng bằng nhận thức.' },
    { key: 'C', text: 'Cả A và B đều sai.' },
    { key: 'D', text: 'Cả A và B đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.4 ("Cách xác định tập thực thể của bài toán"):\n- Thực thể cụ thể: cảm nhận được bằng giác quan (ví dụ: sinh viên, giảng viên, nhân viên…).\n- Thực thể trừu tượng: không cảm nhận được bằng giác quan nhưng nhận biết được bằng nhận thức (ví dụ: môn học, đơn vị, khoa, điểm…).\nDo đó cả A và B đều đúng $\\Rightarrow$ **D**.',
  source: ['Slide Ch.2 Mô hình ER – tr.4', 'Đề mẫu 720 – câu 19']
},
{
  id: 'de-mau-720-20', exam: 'de-mau-720', no: 20, chapter: 'ch1', topic: '1.1',
  stem: 'Chọn khẳng định đúng nhất khi trình bày về “*nhược điểm của việc quản lý dữ liệu bằng file*”',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa và thiếu tính nhất quán giữa các dữ liệu.' },
    { key: 'B', text: 'Khó khăn trong việc truy xuất dữ liệu đồng thời.' },
    { key: 'C', text: 'Không có cơ chế về an toàn bảo mật dữ liệu và phân quyền.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: 'Slide Ch.1 tr.8 nêu ý A (dư thừa, không nhất quán, thiếu chia sẻ); các ý B và C bổ sung từ kiến thức tổng quan HQT CSDL.',
  explanation: 'Lưu trữ truyền thống bằng tệp tin riêng lẻ gây ra hàng loạt nhược điểm:\n- Thông tin trùng lặp, dư thừa và dễ mất nhất quán khi cập nhật (Slide Ch.1 tr.8).\n- Tổ chức riêng rẽ phục vụ từng ứng dụng nên khó chia sẻ, khó kiểm soát truy xuất đồng thời.\n- Hệ tệp thông thường không có cơ chế quản lý quyền truy cập, bảo mật dữ liệu mức bản ghi/cột như HQT CSDL.\nCả A, B, C đều đúng $\\Rightarrow$ **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.8', 'Kiến thức bổ sung (ngoài slide) – Nhược điểm hệ tập tin', 'Đề mẫu 720 – câu 20']
},
{
  id: 'de-mau-720-21', exam: 'de-mau-720', no: 21, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{HANG}(\\underline{\\text{Mahang}}, \\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$, $\\text{ChitietHD}(\\underline{\\text{SoHD}}, \\underline{\\text{MaHang}}, \\text{Giaban}, \\text{SLBan})$. Chọn khẳng định đúng cho yêu cầu sau: “*Viết biểu thức ĐSQH liệt kê tên hàng và số lượng bán của các mặt hàng có trong hoá đơn số HD123*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{tenhang},\\text{Slban}}(\\sigma_{\\text{soHD}=\\text{‘HD132’}}(\\text{ChitietHD}) * \\text{HANG})$' },
    { key: 'B', text: '$\\pi_{\\text{tenhang},\\text{Slban}}(\\sigma_{\\text{soHD}=\\text{‘HD123’}}(\\text{ChitietHD} * \\text{HANG}))$' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: 'Phương án A trong đề gốc in nhầm số hoá đơn là `HD132` thay vì `HD123`.',
  explanation: 'Yêu cầu lấy `TenHang` (trong `HANG`) và `SLBan` (trong `ChitietHD`) của hoá đơn `HD123`.\n- Cả hai bảng kết nối tự nhiên qua thuộc tính chung `MaHang` (`ChitietHD * HANG`), lọc `soHD = \'HD123\'` rồi chiếu `tenhang, Slban`.\n- Phương án A viết nhầm thành `\'HD132\'` nên sai với yêu cầu đề bài; phương án B đúng cả điều kiện lẫn thuộc tính chiếu $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề mẫu 720 – câu 21']
},
{
  id: 'de-mau-720-22', exam: 'de-mau-720', no: 22, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '2NF' },
    { key: 'B', text: 'BCNF' },
    { key: 'C', text: '1NF' },
    { key: 'D', text: '3NF' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khoá của $R(A,B,C,D,E)$: $E$ không xuất hiện trong $F$ và $C$ chỉ ở vế trái nên tập nguồn $TN = \\{C, E\\}$, $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải). Tính thử: $(CE)^+ = ACE \\neq U$; $(BCE)^+ = ABCDE$; $(CDE)^+ = ABCDE$. Vậy $R$ có hai khoá: $BCE$ và $CDE$.\n2. Thuộc tính khoá: $B, C, D, E$. Thuộc tính không khoá: $A$.\n3. Kiểm tra 2NF: xét tập con thực sự $S = \\{C\\}$ của khoá $CDE$, ta có $C^+ = \\{A, C\\}$ chứa thuộc tính không khoá $A$ (tức $A$ phụ thuộc bộ phận vào khoá $CDE$). Vì vậy $R$ vi phạm 2NF, dạng chuẩn cao nhất chỉ là **1NF** $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 15, 37', 'Đề mẫu 720 – câu 22']
},
{
  id: 'de-mau-720-23', exam: 'de-mau-720', no: 23, chapter: 'ch4', topic: '1.8',
  stem: 'Quan hệ ở dạng chuẩn 1NF không sử dụng được vì khi thực hiện các phép toán thao tác trên quan hệ thường gây ra:',
  figure: null,
  options: [
    { key: 'A', text: 'Các nhập nhằng về dữ liệu.' },
    { key: 'B', text: 'Các dị thường dữ liệu.' },
    { key: 'C', text: 'Không đảm bảo tính toàn vẹn dữ liệu.' },
    { key: 'D', text: 'Các sai sót khi nhập dữ liệu.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan tr.6, 8 và Slide Ch.4 Chuẩn hóa tr.3: quan hệ thiết kế chưa tốt (mới ở 1NF, còn phụ thuộc bộ phận và bắc cầu) làm dữ liệu lặp lại và gây ra **các dị thường dữ liệu** (dị thường khi thêm, dị thường khi sửa đổi, dị thường khi xoá).',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.6, 8', 'Slide Ch.4 Chuẩn hóa CSDL – tr.3', 'Đề mẫu 720 – câu 23']
},
{
  id: 'de-mau-720-24', exam: 'de-mau-720', no: 24, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SINHVIEN}(\\underline{\\text{MaSV}}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{MONHOC}(\\underline{\\text{MaMon}}, \\text{TenMon}, \\text{SoTC})$; $\\text{KETQUA}(\\underline{\\text{MaSV}}, \\underline{\\text{MaMon}}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn **không chính xác** yêu cầu: “*Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KETQUA}) * \\text{SINHVIEN})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KETQUA}*\\text{SINHVIEN})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{‘T11’}}(\\text{KETQUA}*\\text{SINHVIEN}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{‘T11’}}(\\text{KETQUA}) * \\text{SINHVIEN})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KETQUA}*\\text{SINHVIEN}))$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: 'Đề gốc có 2 lỗi đáng chú ý: C sai cú pháp lẫn dấu ngoặc (`((` mở mà chỉ 1 `)` đóng); ngoài ra B cũng sai ngữ nghĩa khi chiếu `MaSV, HoTen` trước phép giao `∩` (lấy nhầm SV thi môn khác >=5 và trượt T11).',
  explanation: '1. A và D đều biểu diễn đúng (chỉ khác thứ tự lọc trước hay nối trước).\n2. **C sai hoàn toàn về cú pháp ĐSQH**: trong biểu thức điều kiện của phép chọn $\\sigma$ chỉ dùng phép logic ($\\land$/`AND`, $\\lor$/`OR`, $\\neg$), **không được dùng phép toán tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời C thừa một dấu ngoặc mở `((`.\n3. Lưu ý thêm về B: B chiếu `MaSV, HoTen` trước khi giao $\\cap$ nên về mặt ngữ nghĩa cũng không tương đương hoàn toàn (nếu một SV có điểm $\\ge 5$ ở môn khác và $< 5$ ở môn T11 vẫn bị lọt vào kết quả); khi gặp câu hỏi tương tự trong đề, cần xét kỹ cả hai bẫy này.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề mẫu 720 – câu 24']
},
{
  id: 'de-mau-720-25', exam: 'de-mau-720', no: 25, chapter: 'ch4', topic: '1.8',
  stem: 'Một mô hình CSDL được coi là mô hình chuẩn hoá tốt, nếu:',
  figure: null,
  options: [
    { key: 'A', text: 'Các thuộc tính không khoá không phụ thuộc bắc cầu vào một khóa bất kỳ của $R$' },
    { key: 'B', text: 'Các thuộc tính không khoá phụ thuộc bắc cầu vào khoá' },
    { key: 'C', text: 'Mô hình đảm bảo được tính độc lập và toàn vẹn dữ liệu.' },
    { key: 'D', text: 'Mỗi một thuộc tính được biểu diễn dưới dạng duy nhất.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 tr.3 và Slide Ch.4 Chuẩn hóa tr.21: một lược đồ CSDL quan hệ chuẩn hóa tốt phải đạt ít nhất **dạng chuẩn 3 (3NF)**, nghĩa là mọi thuộc tính không khoá đều **không phụ thuộc bắc cầu vào một khoá bất kỳ của $R$** (nội dung phương án A, trái ngược với B). C nói về tiêu chuẩn chung của CSDL, không phải định nghĩa mô hình chuẩn hóa.',
  source: ['Slide Ch.1 Tổng quan – tr.3', 'Slide Ch.4 Chuẩn hóa CSDL – tr.21', 'Đề mẫu 720 – câu 25']
},
{
  id: 'de-mau-720-26', exam: 'de-mau-720', no: 26, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là **SAI**?',
  figure: null,
  options: [
    { key: 'A', text: '$D$ được gọi là phụ thuộc hàm đầy đủ vào $C$' },
    { key: 'B', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'C', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'D', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Tìm phủ tối thiểu cho $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$ (chính là Ví dụ 2 ở Slide Ch.4 PTH tr.29):\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Loại thuộc tính thừa vế trái: trong $AB\\to C$, nếu bỏ $A$ còn $B\\to C$ đã có sẵn trong tập (nên $B^+ = BCD \\supseteq C$). Vậy **thuộc tính $A$ DƯ THỪA trong $AB\\to C$**. Do đó khẳng định C ("$A$ không dư thừa") là **SAI** $\\Rightarrow$ chọn **C**.\n3. Sau khi bỏ $A$ (và gộp $B\\to C$ trùng), bỏ $B\\to D$ vì suy ra được từ $B\\to C$ và $C\\to D$. Phủ tối thiểu còn $F_{tt}=\\{B\\to C,\\; C\\to D\\}$ (B, D đúng; A đúng vì vế trái chỉ có 1 thuộc tính $C$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề mẫu 720 – câu 26']
},
{
  id: 'de-mau-720-27', exam: 'de-mau-720', no: 27, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.16 (phần ghi chú phân loại người sử dụng trực tiếp):\n- **Phát triển ứng dụng và lập trình**: người chuyên nghiệp về máy tính, có trách nhiệm thiết kế, tạo dựng và bảo trì hệ thống chương trình ứng dụng.\n- Người quản trị CSDL (DBA) quản lý và bảo trì CSDL, cấp quyền.\n- Người dùng cuối khai thác thông tin qua phần mềm.',
  source: ['Slide Ch.1 Tổng quan – tr.16', 'Đề mẫu 720 – câu 27']
},
{
  id: 'de-mau-720-28', exam: 'de-mau-720', no: 28, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{AB\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1, R_2\\}$ tách $R$ thành hai lược đồ $R_1\\{B,C\\}$ và $R_2\\{A,C\\}$. Chọn khẳng định **đúng nhất**.',
  figure: null,
  options: [
    { key: 'A', text: '$D$ là phép tách bảo toàn phụ thuộc hàm.' },
    { key: 'B', text: '$D$ là phép tách không bảo toàn phụ thuộc hàm.' },
    { key: 'C', text: '$D$ là phép tách kết nối mất mát thông tin.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây chính là ví dụ ở Slide Ch.4 Chuẩn hóa tr.44:\n1. Chiếu $F$ lên $R_1\\{B,C\\}$: các bao đóng con trong $\\{B,C\\}$ là $B^+=B, C^+=AC \\to$ chỉ giữ được PTH tầm thường (không có PTH không tầm thường nào giữa $B, C$): $\\Pi_{R_1}(F) = \\emptyset$.\n2. Chiếu $F$ lên $R_2\\{A,C\\}$: có $C \\to A$, nên $\\Pi_{R_2}(F) = \\{C \\to A\\}$.\n3. Hợp lại $G = \\Pi_{R_1}(F) \\cup \\Pi_{R_2}(F) = \\{C \\to A\\}$. Tính $(AB)^+$ trên $G$ chỉ bằng $AB$, không suy ra được $C$, tức $AB \\to C \\notin G^+$. Do đó **$D$ không bảo toàn phụ thuộc hàm** (**B đúng**, A sai).\n4. Kiểm tra mất mát thông tin: $R_1 \\cap R_2 = \\{C\\}$, và $C \\to A$ là siêu khoá của $R_2\\{A,C\\}$ nên phép tách này **không mất mát thông tin** (C sai).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.43–47', 'Đề mẫu 720 – câu 28']
},
{
  id: 'de-mau-720-29', exam: 'de-mau-720', no: 29, chapter: 'ch2', topic: '2.6',
  stem: 'Mô hình thực thể liên kết mở rộng (EER) mô tả chính xác quy tắc nghiệp vụ: “Một người chỉ có thể thuê xe nếu người đó có bằng lái xe”.',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc `R` nét liền, không có đầu mũi tên chạm `Có`; đường `Ô TÔ === Thuê` nét đôi.',
      figure: { type: 'er', spec: {
        entities: [{ id: 'oto', label: 'Ô TÔ', x: 60, y: 20 }, { id: 'ng', label: 'NGƯỜI', x: 275, y: 110 }, { id: 'bl', label: 'BẰNG LÁI', x: 490, y: 20 }],
        rels: [{ id: 'thue', label: 'Thuê', x: 60, y: 110, links: [{ to: 'oto', total: true }, { to: 'ng' }] },
               { id: 'co', label: 'Có', x: 490, y: 110, links: [{ to: 'ng' }, { to: 'bl' }] }],
        notes: [{ text: 'Thuê ──▶ R ── Có (liền, không mũi tên cuối)', x: 275, y: 40 }]
      } } },
    { key: 'B', text: 'Ràng buộc `R` nét đứt có đầu mũi tên chỉ vào `Có`; đường `Ô TÔ — Thuê` nét đơn.',
      figure: { type: 'er', spec: {
        entities: [{ id: 'oto', label: 'Ô TÔ', x: 60, y: 20 }, { id: 'ng', label: 'NGƯỜI', x: 275, y: 110 }, { id: 'bl', label: 'BẰNG LÁI', x: 490, y: 20 }],
        rels: [{ id: 'thue', label: 'Thuê', x: 60, y: 110, links: [{ to: 'oto', total: false }, { to: 'ng' }] },
               { id: 'co', label: 'Có', x: 490, y: 110, links: [{ to: 'ng' }, { to: 'bl' }] }],
        notes: [{ text: 'Thuê - -▶ R - -▶ Có (đứt, mũi tên vào Có)', x: 275, y: 40 }]
      } } },
    { key: 'C', text: 'Ràng buộc `R` nét liền có đầu mũi tên chỉ vào `Có`; đường `Ô TÔ === Thuê` nét đôi.',
      figure: { type: 'er', spec: {
        entities: [{ id: 'oto', label: 'Ô TÔ', x: 60, y: 20 }, { id: 'ng', label: 'NGƯỜI', x: 275, y: 110 }, { id: 'bl', label: 'BẰNG LÁI', x: 490, y: 20 }],
        rels: [{ id: 'thue', label: 'Thuê', x: 60, y: 110, links: [{ to: 'oto', total: true }, { to: 'ng' }] },
               { id: 'co', label: 'Có', x: 490, y: 110, links: [{ to: 'ng' }, { to: 'bl' }] }],
        notes: [{ text: 'Thuê ──▶ R ──▶ Có (liền, mũi tên vào Có)', x: 275, y: 40 }]
      } } },
    { key: 'D', text: 'Ràng buộc `R` nét đứt, không có đầu mũi tên chạm `Có`; đường `Ô TÔ === Thuê` nét đôi.',
      figure: { type: 'er', spec: {
        entities: [{ id: 'oto', label: 'Ô TÔ', x: 60, y: 20 }, { id: 'ng', label: 'NGƯỜI', x: 275, y: 110 }, { id: 'bl', label: 'BẰNG LÁI', x: 490, y: 20 }],
        rels: [{ id: 'thue', label: 'Thuê', x: 60, y: 110, links: [{ to: 'oto', total: true }, { to: 'ng' }] },
               { id: 'co', label: 'Có', x: 490, y: 110, links: [{ to: 'ng' }, { to: 'bl' }] }],
        notes: [{ text: 'Thuê - -▶ R - - Có (đứt, không mũi tên cuối)', x: 275, y: 40 }]
      } } }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Hình gốc dùng đường cong có ký hiệu `> R >` giữa hai thoi `Thuê` và `Có` (bộ vẽ SVG hiện minh họa ký hiệu này bằng dòng chú thích). Đường `Ô TÔ – Thuê` ở A, C, D là nét đôi còn ở B là nét đơn.',
  explanation: 'Quy tắc "Một người chỉ có thể thuê xe nếu người đó có bằng lái xe" là **ràng buộc kéo theo (requires)** giữa hai mối liên kết: sự tham gia của `NGƯỜI` vào `Thuê` kéo theo `NGƯỜI` phải tham gia vào `Có` (Bằng lái):\n1. Ràng buộc phụ thuộc/kéo theo giữa hai liên kết được vẽ bằng **mũi tên nét đứt** đi từ liên kết phụ thuộc (`Thuê`) trỏ mũi tên vào liên kết điều kiện (`Có`), để phân biệt với đường nét liền nối thực thể–liên kết và xác định đúng chiều suy diễn (loại A, C vì nét liền; loại A, D vì thiếu đầu mũi tên ở `Có`).\n2. Đề không quy định mọi `Ô TÔ` đều phải được thuê (xe có thể còn ở bãi) nên `Ô TÔ – Thuê` dùng nét đơn như phương án B.',
  source: ['Kiến thức bổ sung (ngoài slide) – Ràng buộc kéo theo giữa các liên kết EER', 'Đề mẫu 720 – câu 29']
},
{
  id: 'de-mau-720-30', exam: 'de-mau-720', no: 30, chapter: 'ch4', topic: '3.7',
  stem: 'Cho tập phụ thuộc hàm $F=\\{A \\to B,\\; B \\to C,\\; A \\to D,\\; B \\to D\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$C \\to A$ thuộc $F^+$' },
    { key: 'B', text: '$C \\to D$ thuộc $F^+$' },
    { key: 'C', text: '$D \\to A$ thuộc $F^+$' },
    { key: 'D', text: '$A \\to C$ thuộc $F^+$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo luật bắc cầu trong hệ tiên đề Armstrong (Slide Ch.4 PTH tr.9): từ $A \\to B$ và $B \\to C$ suy ra $A \\to C \\in F^+$. Kiểm tra bao đóng: $A^+ = ABCD$ (chứa $C$), còn $C^+ = C$ và $D^+ = D$ nên A, B, C đều sai.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9, 18', 'Đề mẫu 720 – câu 30']
},
{
  id: 'de-mau-720-31', exam: 'de-mau-720', no: 31, chapter: 'ch3', topic: '1.6',
  stem: 'Các toán hạng trong các phép toán đại số quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Các biểu thức.' },
    { key: 'B', text: 'Các bộ $n$ giá trị.' },
    { key: 'C', text: 'Các quan hệ.' },
    { key: 'D', text: 'Các thuộc tính.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đại số quan hệ thao tác trên các **quan hệ** (toán hạng đầu vào là một hoặc hai quan hệ, và kết quả trả về cũng là một quan hệ — Slide Ch.3 P2 tr.9, 17, 19, 24, 35).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9–35', 'Đề mẫu 720 – câu 31']
},
{
  id: 'de-mau-720-32', exam: 'de-mau-720', no: 32, chapter: 'ch4', topic: '3.9',
  stem: 'Cho tập $F = \\{A \\to BD,\\; C \\to EA,\\; B \\to CE\\}$ và tập $G = \\{AC \\to ED,\\; AB \\to CE\\}$. Khẳng định nào sau đây là **đúng nhất**?',
  figure: null,
  options: [
    { key: 'A', text: 'Tập $G$ phủ lên tập $F$' },
    { key: 'B', text: 'Tập $F$ phủ lên tập $G$' },
    { key: 'C', text: 'Hai tập phụ thuộc hàm là tương đương' },
    { key: 'D', text: 'Cả ba phương án đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra phép phủ (Slide Ch.4 PTH tr.21–22):\n1. Kiểm tra $F$ có phủ $G$ không (tính bao đóng vế trái của $G$ theo $F$):\n   - $(AC)^+_F$: có $A\\to BD$, $C\\to EA$ $\\Rightarrow (AC)^+_F = ABCDE \\supseteq ED$.\n   - $(AB)^+_F$: có $A\\to BD$, $B\\to CE$ $\\Rightarrow (AB)^+_F = ABCDE \\supseteq CE$.\n   Vậy mọi PTH của $G$ đều nằm trong $F^+ \\Rightarrow$ **tập $F$ phủ lên tập $G$**.\n2. Kiểm tra $G$ có phủ $F$ không: với $A\\to BD \\in F$, tính $A^+_G = A$ (vì các vế trái trong $G$ đều có 2 thuộc tính $AC, AB$), không chứa $BD$. Vậy $G$ không phủ $F$ (loại A và C). Chọn **B**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.21–22', 'Đề mẫu 720 – câu 32']
},
{
  id: 'de-mau-720-33', exam: 'de-mau-720', no: 33, chapter: 'ch3', topic: '1.5',
  stem: 'Đặc điểm của mô hình CSDL quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ.' },
    { key: 'B', text: 'Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp.' },
    { key: 'C', text: 'Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Mô hình quan hệ (P1) tr.2: mô hình dữ liệu quan hệ (E. F. Codd, 1970) cung cấp cấu trúc dữ liệu đơn giản, đồng bộ; có nền tảng lý thuyết tập hợp vững chắc; và là cơ sở của các HQT CSDL thương mại hiện nay (Oracle, MySQL, SQL Server…). Chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.2', 'Đề mẫu 720 – câu 33']
},
{
  id: 'de-mau-720-34', exam: 'de-mau-720', no: 34, chapter: 'ch4', topic: '3.2',
  stem: 'Có thể kết luận quan hệ $R$ đạt chuẩn 2NF khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Tất cả các khóa của $R$ đều chỉ có một thuộc tính.' },
    { key: 'B', text: 'Tất cả các phụ thuộc hàm của $R$ đều có vế trái là siêu khóa' },
    { key: 'C', text: 'Tất cả các thuộc tính của $R$ đều là thuộc tính khóa.' },
    { key: 'D', text: 'Cả ba phương án đều đúng' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: '(Giả thiết $R$ đã ở 1NF như quy ước Slide Ch.4 Chuẩn hóa tr.8.) Xét cả 3 điều kiện:\n- **A**: Slide Ch.4 Chuẩn hóa tr.15: nếu mọi khoá chỉ có 1 thuộc tính thì không có tập con thực sự khác rỗng của khoá để tạo phụ thuộc bộ phận $\\Rightarrow$ đạt 2NF.\n- **B**: Mọi PTH không tầm thường đều có vế trái là siêu khoá chính là BCNF, mà BCNF $\\subset$ 3NF $\\subset$ 2NF $\\Rightarrow$ chắc chắn đạt 2NF.\n- **C**: Tất cả thuộc tính đều là thuộc tính khoá tức không có thuộc tính không khoá nào, nên đạt 3NF (Slide tr.23) $\\Rightarrow$ đương nhiên đạt 2NF.\nDo cả A, B, C đều kéo theo $R$ đạt 2NF nên chọn **D**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.7–8, 15, 23, 29', 'Đề mẫu 720 – câu 34']
}
);

DB.questions.push(
{
  id: 'de-mau-720-35', exam: 'de-mau-720', no: 35, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F=\\{AB\\to C,\\; AD\\to G,\\; BC\\to G,\\; C\\to D,\\; GD\\to E\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$BC\\to A$' },
    { key: 'B', text: '$AD \\to C$' },
    { key: 'C', text: '$AB\\to DE$' },
    { key: 'D', text: '$GD \\to C$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng PTH bằng bài toán thành viên (tính bao đóng vế trái):\n- $(AB)^+ = \\{A, B, C, G, D, E\\}$ (dùng $AB\\to C$, $BC\\to G$, $C\\to D$, $GD\\to E$). Vì $DE \\subseteq (AB)^+$ nên **$AB \\to DE \\in F^+$** (**C đúng**).\n- $(BC)^+ = \\{B, C, G, D, E\\}$ (không chứa $A$, loại A).\n- $(AD)^+ = \\{A, D, G, E\\}$ (không chứa $C$, loại B).\n- $(GD)^+ = \\{G, D, E\\}$ (không chứa $C$, loại D).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18', 'Đề mẫu 720 – câu 35']
},
{
  id: 'de-mau-720-36', exam: 'de-mau-720', no: 36, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SINHVIEN}(\\underline{\\text{MaSV}}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{MONHOC}(\\underline{\\text{MaMon}}, \\text{TenMon}, \\text{SoTC})$; $\\text{KETQUA}(\\underline{\\text{MaSV}}, \\underline{\\text{MaMon}}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Cho biết mã số và tên những sinh viên phải thi lại một trong hai môn Lập trình C và Toán cao cấp*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}((\\sigma_{\\text{Diem}<5\\text{AND } \\text{TenMon}=\\text{‘Lập trình C’ OR } \\text{TenMon}=\\text{‘Toán Cao cấp’}}(\\text{MONHOC})*\\text{KETQUA}*\\text{SINHVIEN})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}<5,\\; \\text{TenMon}=\\text{‘Lập trình C’},\\; \\text{TenMon}=\\text{‘Toán Cao cấp’})}(\\text{MONHOC} * \\text{KETQUA} * \\text{SINHVIEN}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}((\\sigma_{\\text{Diem}<5 \\text{ AND } (\\text{TenMon}=\\text{‘Lập trình C’AND } \\text{TenMon}=\\text{‘Toán Cao cấp’})}(\\text{MONHOC})* \\text{KETQUA} * \\text{SINHVIEN})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}<5 \\text{ AND } (\\text{TenMon}=\\text{‘Lập trình C’ OR } \\text{TenMon}=\\text{‘Toán Cao cấp’})} (\\text{MONHOC}*\\text{KETQUA}*\\text{SINHVIEN}))$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: 'Đề gốc đặt một số dấu ngoặc ở A, B, C, D chưa chuẩn xác (ở D dấu `)` đóng nhóm OR bị rớt ra ngoài chỉ số dưới, các phương án A/C thừa dấu `(` mở).',
  explanation: 'Yêu cầu gồm 2 điều kiện kết hợp bằng `AND`: `Diem < 5` (thi lại) VÀ thuộc một trong hai môn (`TenMon = \'Lập trình C\' OR TenMon = \'Toán Cao cấp\'`).\n- Phép `AND` ưu tiên hơn `OR` nên phải **đóng ngoặc quanh biểu thức `OR`** (loại A vì thiếu ngoặc, dẫn tới hiểu thành `(Diem<5 AND Lập trình C) OR Toán Cao cấp`).\n- Loại B vì dùng dấu phẩy `,` thay cho `AND`/`OR`.\n- Loại C vì dùng `AND` giữa hai tên môn (một dòng trong `MONHOC` không thể có đồng thời hai tên môn).\n- **D đúng** cả về điều kiện logic lẫn trình tự kết nối `MONHOC * KETQUA * SINHVIEN` trước khi lọc `Diem` và `TenMon`.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24, 38', 'Đề mẫu 720 – câu 36']
},
{
  id: 'de-mau-720-37', exam: 'de-mau-720', no: 37, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án **đúng nhất** khi thực hiện chuyển mối quan hệ có bậc lớn hơn 2 trong mô hình ER sau sang mô hình CSDL quan hệ.',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'bh', label: 'Bài hát', x: 90, y: 20, side: 'bottom', attrs: [{ label: 'Mã BH', kind: 'key' }, { label: 'Tên BH' }] },
      { id: 'bn', label: 'BAN NHẠC', x: 265, y: 120, side: 'bottom', attrs: [{ label: 'Mã BN', kind: 'key' }, { label: 'Tên BN' }] },
      { id: 'tg', label: 'TÁC GIẢ', x: 440, y: 20, side: 'bottom', attrs: [{ label: 'Mã TG', kind: 'key' }, { label: 'Tên TG' }] }
    ],
    rels: [{ id: 'st', label: 'Sáng tác', x: 265, y: 20, links: [{ to: 'bh' }, { to: 'bn' }, { to: 'tg' }] }]
  } },
  options: [
    { key: 'A', text: '`BH_BN_TG` ($\\text{MaBH}, \\underline{\\text{TenBH}}, \\text{MaBN}$)' },
    { key: 'B', text: '`BH_BN_TG` ($\\text{MaBH}, \\text{MaTG}, \\text{MaBN}$)' },
    { key: 'C', text: '`BH_BN_TG` ($\\underline{\\text{MaBH}}, \\text{TenBH}, \\text{MaBN}$)' },
    { key: 'D', text: '`BH_BN_TG` ($\\text{MaBH}, \\text{TenBH}, \\underline{\\text{MaBN}}$)' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: 'Phương án B trong đề gốc quên gạch chân 3 thuộc tính khoá, nhưng là phương án duy nhất lấy đúng 3 khoá của 3 thực thể tham gia.',
  explanation: 'Theo Quy tắc 6 (Slide Ch.3 P1 tr.26 – Chuyển mối liên kết có bậc > 2): tạo ra một lược đồ quan hệ mới gồm **thuộc tính khoá của tất cả các thực thể tham gia liên kết** (ở đây là `MaBH`, `MaTG`, `MaBN`) và thuộc tính riêng của liên kết (nếu có).\n- A, C, D đều thiếu `MaTG` và đưa nhầm `TenBH` (không phải khoá) vào.\n- **B** chứa đủ 3 khoá `MaBH, MaTG, MaBN` $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.26', 'Đề mẫu 720 – câu 37']
},
{
  id: 'de-mau-720-38', exam: 'de-mau-720', no: 38, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Các siêu khóa có thể của $R$ gồm:',
  figure: null,
  options: [
    { key: 'A', text: '$BC, CD, BCD$' },
    { key: 'B', text: '$AB, AC, ABC$' },
    { key: 'C', text: '$AB, BD, ABD$' },
    { key: 'D', text: '$AD, AC, ADC$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Từ Câu 9, $R(A,B,C,D)$ với $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$ có hai khoá là $BC$ và $CD$. Mọi siêu khoá đều phải chứa ít nhất một khoá ($BC$ hoặc $CD$). Tập tất cả các siêu khoá của $R$ gồm: $BC, CD, ABC, ACD, BCD, ABCD$.\n- Chỉ có **A** ($BC, CD, BCD$) mà cả 3 tập đều có bao đóng bằng $ABCD$.\n- Ở B, C, D đều có các tập không chứa $C$ hoặc thiếu $B, D$ nên không phải siêu khoá (ví dụ $(AB)^+=ABD$, $(AC)^+=AC$, $(AD)^+=ABD$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 38', 'Đề mẫu 720 – câu 38']
},
{
  id: 'de-mau-720-39', exam: 'de-mau-720', no: 39, chapter: 'ch2', topic: '2.6',
  stem: 'Cho mô tả: “Một công ty có 3 kiểu nhân viên khác nhau: nhân viên làm theo giờ, nhân viên cơ hữu và chuyên gia tư vấn. Thông tin về nhân viên gồm: mã nhân viên, họ tên, ngày sinh, giới tính, lương, số giờ làm (với nhân viên hợp đồng làm theo giờ), hệ số lương (với nhân viên cơ hữu), doanh số và mã hợp đồng (với chuyên gia tư vấn)”. Theo mô tả, khi xây dựng mô hình thực thể liên kết mở rộng (EER), ta có các kiểu thực thể cha và kiểu thực thể con như sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Kiểu cha là NHÂN VIÊN với các thuộc tính: mã nhân viên, họ tên, ngày sinh, giới tính. Các kiểu con: CƠ HỮU với thuộc tính: lương, hệ số lương, HỢP ĐỒNG với thuộc tính số giờ làm; CHUYÊN GIA với thuộc tính: doanh số và mã hợp đồng.' },
    { key: 'B', text: 'Kiểu cha là NHÂN VIÊN với các thuộc tính: mã nhân viên, họ tên, ngày sinh, giới tính, loại nhân viên. Các kiểu con: CƠ HỮU với thuộc tính hệ số lương, HỢP ĐỒNG với thuộc tính: số giờ làm, lương; CHUYÊN GIA với thuộc tính: lương, doanh số và mã hợp đồng.' },
    { key: 'C', text: 'Kiểu cha là NHÂN VIÊN với các thuộc tính: mã nhân viên, họ tên, ngày sinh, giới tính, lương, loại nhân viên. Các kiểu con: CƠ HỮU với thuộc tính hệ số lương, HỢP ĐỒNG với thuộc tính số giờ làm; CHUYÊN GIA với thuộc tính: doanh số và mã hợp đồng' },
    { key: 'D', text: 'Kiểu cha là NHÂN VIÊN với các thuộc tính: mã nhân viên, họ tên, ngày sinh, giới tính, lương. Các kiểu con: CƠ HỮU với thuộc tính hệ số lương, HỢP ĐỒNG với thuộc tính số giờ làm; CHUYÊN GIA với thuộc tính: doanh số và mã hợp đồng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc kế thừa của EER, các thuộc tính chung cho mọi nhân viên đặt ở kiểu cha `NHÂN VIÊN`, còn các thuộc tính đặc thù đặt ở từng kiểu con:\n- Đề bài liệt kê thông tin chung của nhân viên gồm 5 thuộc tính: `mã nhân viên, họ tên, ngày sinh, giới tính, lương` (không nhắc đến `loại nhân viên` như ở Câu 50).\n- Thuộc tính riêng: `CƠ HỮU` (`hệ số lương`), `HỢP ĐỒNG` (`số giờ làm`), `CHUYÊN GIA` (`doanh số, mã hợp đồng`).\n- A thiếu `lương` ở kiểu cha; B đặt sai `lương` và thêm `loại nhân viên`; C thêm `loại nhân viên` không có trong đề. **D** khớp chính xác với mô tả.',
  source: ['Kiến thức bổ sung (ngoài slide) – Lớp cha, lớp con & kế thừa EER', 'Đề mẫu 720 – câu 39']
},
{
  id: 'de-mau-720-40', exam: 'de-mau-720', no: 40, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BEH\\},\\; R_3 = \\{CEG\\},\\; R_4= \\{CEK\\}$' },
    { key: 'B', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BK\\},\\; R_3 = \\{BEH\\},\\; R_4= \\{CEG\\}$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa tr.50):\n- Khoá duy nhất của $R$ là $CE$ (vì $C, E$ không nằm ở vế phải và $(CE)^+ = ABCDEGHK$).\n- Tách lần lượt theo các PTH vi phạm BCNF:\n  1. Xét $C\\to AD$ ($C$ không là siêu khoá): tách $R_1 = \\{ACD\\}$, còn lại $\\{BCEGHK\\}$.\n  2. Xét $B\\to K$ ($B$ không là siêu khoá): tách $R_2 = \\{BK\\}$, còn lại $\\{BCEGH\\}$.\n  3. Xét $E\\to BH$ ($E$ không là siêu khoá): tách $R_3 = \\{BEH\\}$, còn lại $R_4 = \\{CEG\\}$.\n- Kiểm tra cả 4 lược đồ ở **B**: mọi PTH không tầm thường chiếu lên từng $R_i$ ($C\\to AD$ trên $R_1$, $B\\to K$ trên $R_2$, $E\\to BH$ trên $R_3$, $CE\\to G$ trên $R_4$) đều có vế trái là khoá $\\Rightarrow$ đều đạt BCNF và kết nối không mất mát thông tin.\n- A sai vì trên $R_4=\\{CEK\\}$, từ $E\\to B$ và $B\\to K$ suy ra $E\\to K$ nhưng $E$ không là siêu khoá của $\\{CEK\\}$ (khoá là $CE$), nên $\\{CEK\\}$ vi phạm BCNF.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 50', 'Đề mẫu 720 – câu 40']
},
{
  id: 'de-mau-720-41', exam: 'de-mau-720', no: 41, chapter: 'ch3', topic: '2.12',
  stem: 'Cho lược đồ quan hệ sau: $\\text{BANDOC}(\\underline{\\text{MaBD}}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\underline{\\text{MaSH}}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\underline{\\text{MaBD}}, \\underline{\\text{MaSH}}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Chọn phương án **đúng nhất** cho yêu cầu: “*Viết biểu thức ĐSQH thống kê số lượng bạn đọc đã mượn sách (nhưng chưa trả) theo lớp*”?',
  figure: null,
  options: [
    { key: 'A', text: '$_{\\text{Lop}}\\mathcal{F}_{\\text{Count}(\\text{MaBD})}(\\text{BANDOC} * \\sigma_{\\text{TraSach}=\\text{No}}(\\text{PHIEUMUON}))$' },
    { key: 'B', text: '$_{\\text{Lop}}\\mathcal{F}_{\\text{Count}(\\text{MaBD})}(\\sigma_{\\text{TraSach}=\\text{No}}(\\text{BANDOC}*\\text{PHIEUMUON}))$' },
    { key: 'C', text: '$_{\\text{Lop}}\\mathcal{F}_{\\text{Count}(\\text{MaBD})}(\\sigma_{\\text{TraSach}=\\text{No}}(\\text{BANDOC})*\\text{PHIEUMUON})$' },
    { key: 'D', text: 'Cả A và B đều đúng' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: 'Đề gốc dùng ký hiệu `Ϝ` (tương tự $\\mathcal{F}$).',
  explanation: '- Để thống kê theo lớp những phiếu mượn chưa trả (`TraSach = No`), cần nối `BANDOC` (chứa `Lop`) với `PHIEUMUON` (chứa `TraSach`), lọc `TraSach = No`, rồi nhóm theo `Lop` và đếm `Count(MaBD)`.\n- Phương án A đẩy phép chọn `TraSach = No` vào `PHIEUMUON` trước khi nối; phương án B nối `BANDOC * PHIEUMUON` rồi mới lọc `TraSach = No`. Hai biểu thức tương đương nhau và đều cho kết quả đúng (A chỉ tối ưu hơn về chi phí thực hiện).\n- C sai vì đặt điều kiện `TraSach = No` trên bảng `BANDOC` (không có cột `TraSach`). Vậy **D đúng**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24, 30, 38', 'Kiến thức bổ sung (ngoài slide) – Hàm gộp ĐSQH', 'Đề mẫu 720 – câu 41']
},
{
  id: 'de-mau-720-42', exam: 'de-mau-720', no: 42, chapter: 'ch4', topic: '1.8',
  stem: 'Khẳng định nào sau đây là **đúng nhất** khi nói về quá trình chuẩn hoá dữ liệu?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuẩn hóa là quá trình tách lược đồ quan hệ không làm tổn thất thông tin.' },
    { key: 'B', text: 'Chuẩn hóa là quá trình tách lược đồ quan hệ hạn chế thấp nhất tổn thất thông tin .' },
    { key: 'C', text: 'Chuẩn hóa là quá trình chuyển đổi biểu diễn thông tin trong các dạng khác nhau.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.38: "Chuẩn hóa quan hệ là việc phân rã một lược đồ quan hệ thành các lược đồ con về các dạng chuẩn sao cho vẫn bảo toàn sự phụ thuộc và **không mất mát dữ liệu** (không tổn thất thông tin)". Vì tính chất bắt buộc là không mất mát thông tin (chứ không phải "hạn chế thấp nhất" ở B), nên **A đúng nhất**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.3, 38', 'Đề mẫu 720 – câu 42']
},
{
  id: 'de-mau-720-43', exam: 'de-mau-720', no: 43, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\underline{\\text{MaBD}}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\underline{\\text{MaSH}}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\underline{\\text{MaBD}}, \\underline{\\text{MaSH}}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Chọn khẳng định đúng nhất cho yêu cầu sau: “*Viết biểu thức ĐSQH đưa ra danh sách thông tin về các bạn đọc đã đăng ký thẻ bạn đọc, nhưng chưa lần nào mượn sách ở thư viện*”?',
  figure: null,
  options: [
    { key: 'A', text: '$(\\pi_{\\text{maBD}}(\\text{BANDOC}) - \\pi_{\\text{maBD}}(\\text{PHIEUMUON})) * \\text{BANDOC}$' },
    { key: 'B', text: '$\\pi_{\\text{maBD}}(\\text{BANDOC}) - \\pi_{\\text{maBD}}(\\text{PHIEUMUON}) * \\text{BANDOC}$' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Để tìm bạn đọc chưa mượn sách lần nào, ta lấy hiệu tập `MaBD` trong `BANDOC` trừ đi tập `MaBD` đã xuất hiện trong `PHIEUMUON`, sau đó kết nối tự nhiên với `BANDOC` để lấy đầy đủ thông tin bạn đọc.\n- **A đúng** vì có ngoặc `(...)` bảo đảm phép trừ `-` được thực hiện trước (hai vế đều có lược đồ 1 cột `MaBD`).\n- B không có ngoặc nên phép kết nối `*` thực hiện trước thành $\\pi_{\\text{maBD}}(\\text{BANDOC}) - (\\pi_{\\text{maBD}}(\\text{PHIEUMUON}) * \\text{BANDOC})$, hai vế khác lược đồ nên không thực hiện được phép trừ.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 14, 38', 'Đề mẫu 720 – câu 43']
},
{
  id: 'de-mau-720-44', exam: 'de-mau-720', no: 44, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(U,F)$, $U = \\{A,B,C,D,E\\}$ và $F = \\{AB \\to CD,\\; CD \\to E,\\; E \\to A\\}$. Các siêu khóa có thể có của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '$\\{CD,\\; E\\}$' },
    { key: 'B', text: '$\\{CD,\\; AE\\}$' },
    { key: 'C', text: '$\\{AB,\\; CBD\\}$' },
    { key: 'D', text: '$\\{AB,\\; EA\\}$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Một tập $K \\subseteq U$ là siêu khoá khi $K^+ = U = ABCDE$ (Slide Ch.4 PTH tr.30).\n- Xét $AB$: $(AB)^+ = ABCDE = U$ (dùng $AB\\to CD$, $CD\\to E$) $\\Rightarrow AB$ là siêu khoá.\n- Xét $CBD$: $(CBD)^+ = CBDAE = U$ (dùng $CD\\to E$, $E\\to A$) $\\Rightarrow CBD$ là siêu khoá.\n- Kiểm tra các phương án khác: $(CD)^+ = ACDE$ (thiếu $B$), $(E)^+ = AE$, $(AE)^+ = AE$ đều không bằng $U$. Vậy chỉ **C** có cả hai tập đều là siêu khoá.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề mẫu 720 – câu 44']
},
{
  id: 'de-mau-720-45', exam: 'de-mau-720', no: 45, chapter: 'ch1', topic: '1.2',
  stem: 'Mô hình dữ liệu mạng là mô hình dữ liệu mà trong đó dữ liệu được biểu diễn dưới dạng:',
  figure: null,
  options: [
    { key: 'A', text: 'các bản ghi (record) và tổ chức thành một đồ thị vô hướng.' },
    { key: 'B', text: 'các bản ghi (record) và tổ chức thành một đồ thị có hướng.' },
    { key: 'C', text: 'các bản ghi (record) và tổ chức thành một cấu trúc cây.' },
    { key: 'D', text: 'các thực thể, các thuộc tính và các mối liên kết.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: 'Slide Ch.1 tr.17 và tr.19 có nhắc tên mô hình mạng nhưng không mô tả cấu trúc đồ thị.',
  explanation: '- Mô hình dữ liệu mạng (Network model): dữ liệu biểu diễn bằng các bản ghi (record) và liên kết kiểu chủ–thành viên tạo thành một **đồ thị có hướng** (khác với mô hình phân cấp ở phương án C là cấu trúc cây, và mô hình ER ở phương án D là thực thể–thuộc tính–liên kết).',
  source: ['Kiến thức bổ sung (ngoài slide) – Mô hình dữ liệu mạng', 'Đề mẫu 720 – câu 45']
},
{
  id: 'de-mau-720-46', exam: 'de-mau-720', no: 46, chapter: 'ch1', topic: '1.1',
  stem: 'Chọn khẳng định đúng nhất khi mô tả về dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Dữ liệu là các thông tin của đối tượng được lưu trữ trên máy tính.' },
    { key: 'B', text: 'Dữ liệu khác nhau được lưu trữ dưới nhiều dạng khác nhau.' },
    { key: 'C', text: 'Dữ liệu về một đối tượng có thể khác nhau, tùy thuộc vào ngữ cảnh.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.10–11: dữ liệu (dữ kiện về đối tượng) được mã hóa, lưu trữ trên bộ nhớ máy tính dưới nhiều dạng khác nhau (văn bản, âm thanh, hình ảnh…), và cùng một đối tượng có thể được mô tả bằng các thuộc tính khác nhau tùy theo ngữ cảnh bài toán quản lý. Chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.10–11', 'Đề mẫu 720 – câu 46']
},
{
  id: 'de-mau-720-47', exam: 'de-mau-720', no: 47, chapter: 'ch4', topic: '1.8',
  stem: 'Một thuộc tính được gọi là thuộc tính khóa khi:',
  figure: null,
  options: [
    { key: 'A', text: 'nó không được chứa trong tất cả các khóa của quan hệ.' },
    { key: 'B', text: 'nó được chứa trong một khóa bất kỳ của quan hệ.' },
    { key: 'C', text: 'nó được chứa trong một siêu khóa bất kỳ của quan hệ.' },
    { key: 'D', text: 'nó được chứa trong tất cả các khoá của quan hệ.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.4 Chuẩn hóa CSDL tr.5: "$A$ được gọi là thuộc tính khoá nếu $A$ là một thành phần thuộc **một khoá nào đó** của $R$, ngược lại $A$ được gọi là thuộc tính không khoá". Không đòi hỏi phải có mặt trong *mọi* khoá (loại D), và cũng không tính thuộc tính thừa trong siêu khoá (loại C).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.5', 'Đề mẫu 720 – câu 47']
},
{
  id: 'de-mau-720-48', exam: 'de-mau-720', no: 48, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào biểu diễn chính xác mô tả sau: “Một khách hàng có nhiều hóa đơn và ngược lại một hóa đơn chỉ thuộc về một khách hàng”?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 75, y: 30 }, { id: 'hd', label: 'HÓA ĐƠN', x: 385, y: 30 }],
      rels: [{ id: 'co', label: 'Có', x: 230, y: 30, links: [{ to: 'kh', card: '1', total: true }, { to: 'hd', card: 'n', total: false }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 75, y: 30 }, { id: 'hd', label: 'HÓA ĐƠN', x: 385, y: 30 }],
      rels: [{ id: 'co', label: 'Có', x: 230, y: 30, links: [{ to: 'kh', card: 'n', total: false }, { to: 'hd', card: '1', total: true }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 75, y: 30 }, { id: 'hd', label: 'HÓA ĐƠN', x: 385, y: 30 }],
      rels: [{ id: 'co', label: 'Có', x: 230, y: 30, links: [{ to: 'kh', card: '1', total: false }, { to: 'hd', card: 'n', total: true }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 75, y: 30 }, { id: 'hd', label: 'HÓA ĐƠN', x: 385, y: 30 }],
      rels: [{ id: 'co', label: 'Có', x: 230, y: 30, links: [{ to: 'kh', card: '1', total: true }, { to: 'hd', card: '1', total: false }] }]
    } } }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Về bản số (Slide Ch.2 tr.20): 1 `KHÁCH HÀNG` có nhiều (`n`) `HÓA ĐƠN`, và 1 `HÓA ĐƠN` chỉ thuộc về `1` `KHÁCH HÀNG` $\\Rightarrow$ phía `KHÁCH HÀNG` ghi `1`, phía `HÓA ĐƠN` ghi `n` (loại B, D).\n2. Về ràng buộc tham gia (Slide Ch.2 tr.22–23): mọi `HÓA ĐƠN` bắt buộc phải thuộc về một khách hàng (tham gia **toàn bộ = nét đôi** bên phía `HÓA ĐƠN`), còn một `KHÁCH HÀNG` có thể chưa lập hóa đơn nào (tham gia **bộ phận = nét đơn** bên phía `KHÁCH HÀNG`). Loại A (đặt nét đôi ngược sang `KHÁCH HÀNG`), chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.20, 22–23', 'Đề mẫu 720 – câu 48']
},
{
  id: 'de-mau-720-49', exam: 'de-mau-720', no: 49, chapter: 'ch4', topic: '3.10',
  stem: 'Dạng chuẩn cao nhất của lược đồ $(\\underline{\\text{Mã số}}, \\text{Họ tên}, \\text{địa chỉ})$ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Dạng chuẩn 2NF' },
    { key: 'B', text: 'Dạng chuẩn 3NF' },
    { key: 'C', text: 'Dạng chuẩn 1NF' },
    { key: 'D', text: 'Dạng chuẩn BCNF.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Khoá của lược đồ là `Mã số` (chỉ có 1 thuộc tính) và các phụ thuộc hàm duy nhất là $\\text{Mã số} \\to \\text{Họ tên}, \\text{địa chỉ}$ (không có phụ thuộc giữa `Họ tên` và `địa chỉ`). Vì mọi PTH không tầm thường đều có vế trái là siêu khoá `Mã số`, lược đồ đạt dạng chuẩn cao nhất là **BCNF** (Slide Ch.4 Chuẩn hóa tr.29, 31).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29, 31', 'Đề mẫu 720 – câu 49']
},
{
  id: 'de-mau-720-50', exam: 'de-mau-720', no: 50, chapter: 'ch3', topic: '2.7',
  stem: 'Chọn phương án đúng khi thực hiện chuyển mối liên kết giữa kiểu cha và kiểu con trong mô hình thực thể liên kết mở rộng (EER) sang mô hình dữ liệu quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 260, y: 70, attrs: [
        { label: 'Mã NV', kind: 'key', dx: -145, dy: 0 },
        { label: 'Họ tên', dx: -105, dy: -55 },
        { label: 'Địa chỉ', dx: 0, dy: -65 },
        { label: 'Ngày sinh', dx: 105, dy: -55 },
        { label: 'Loại NV', dx: 150, dy: 0 }
      ] },
      { id: 'tg', label: 'NV theo giờ', x: 75, y: 220, side: 'bottom', attrs: [{ label: 'Giờ làm' }] },
      { id: 'ch', label: 'NV cơ hữu', x: 260, y: 220, side: 'bottom', attrs: [{ label: 'Lương' }] },
      { id: 'cg', label: 'CHUYÊN GIA', x: 445, y: 220, side: 'bottom', attrs: [{ label: 'Số HĐ' }, { label: 'Doanh số' }] }
    ],
    specs: [{ id: 's1', x: 260, y: 135, kind: 'd', parent: 'nv', total: false, children: ['tg', 'ch', 'cg'] }],
    notes: [
      { text: '“TG”', x: 136, y: 170 },
      { text: '“CH”', x: 288, y: 178 },
      { text: '“CG”', x: 386, y: 170 }
    ]
  } },
  options: [
    { key: 'A', text: '`NHANVIEN` ($\\underline{\\text{MaNV}}$, HoTen, DiaChi, Ngay Sinh); `NV_TG` ($\\underline{\\text{LoaiNV}}$, GioLam); `NV_CH` ($\\underline{\\text{LoaiNV}}$, Luong); `CGTV` ($\\underline{\\text{LoaiNV}}$, SoHD, DoanhSo)' },
    { key: 'B', text: '`NHANVIEN` ($\\underline{\\text{MaNV}}$, HoTen, DiaChi, Ngay Sinh, GioLam, Luong, SoHD, DoanhSo)' },
    { key: 'C', text: '`NHANVIEN` ($\\underline{\\text{MaNV}}$, HoTen, DiaChi, Ngay Sinh); `NV_TG` ($\\underline{\\text{MaNV}}$, GioLam); `NV_CH` ($\\underline{\\text{MaNV}}$, Luong); `CGTV` ($\\underline{\\text{MaNV}}$, SoHD, DoanhSo)' },
    { key: 'D', text: '`NHANVIEN` ($\\underline{\\text{MaNV}}$, HoTen, DiaChi, Ngay Sinh, LoaiNV); `NV_TG` ($\\underline{\\text{MaNV}}$, GioLam); `NV_CH` ($\\underline{\\text{MaNV}}$, Luong); `CGTV` ($\\underline{\\text{MaNV}}$, SoHD, DoanhSo)' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong sơ đồ EER: `NHÂN VIÊN` có đầy đủ các thuộc tính `Mã NV` (khoá), `Họ tên`, `Địa chỉ`, `Ngày sinh`, và `Loại NV` (thuộc tính phân loại cho chuyên biệt hóa tách biệt `d` với 3 giá trị `"TG"`, `"CH"`, `"CG"`). Khi chuyển theo cách tạo 1 quan hệ cha + 3 quan hệ con:\n- Quan hệ cha `NHANVIEN` giữ nguyên **tất cả** thuộc tính của kiểu cha (bao gồm cả `LoaiNV`).\n- Mỗi quan hệ con (`NV_TG`, `NV_CH`, `CGTV`) nhận **khoá chính `MaNV` của kiểu cha** làm khoá chính/khoá ngoại cùng các thuộc tính riêng của nó.\n- Loại A vì lấy `LoaiNV` làm khoá của các bảng con; loại B vì chuyên biệt hóa là bộ phận (nét đơn) và không phải 1 bảng có thuộc tính phân biệt; loại C vì làm mất thuộc tính `LoaiNV` của `NHÂN VIÊN`. Chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Chuyển EER (chuyên biệt hóa theo thuộc tính) sang quan hệ', 'Đề mẫu 720 – câu 50']
}
);
