/* Giữa kì (không rõ năm) – Đề 1 + Đề 2 – nguồn: tai-lieu-text/de/giuaki-a.md */
DB.questions.push(
{
  id: 'giuaki-a-01', exam: 'giuaki-a', no: 1, chapter: 'ch3', topic: '1.6',
  stem: 'Các biểu thức logic được sử dụng trong phép:',
  figure: null,
  options: [
    { key: 'A', text: 'chọn' },
    { key: 'B', text: 'chiếu' },
    { key: 'C', text: 'phép chia' },
    { key: 'D', text: 'tất cả đáp án' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24, **phép chọn** $\\sigma_F(r)$ dùng để trích các bộ thỏa mãn điều kiện $F$, trong đó $F$ là biểu thức logic gồm các phép so sánh và phép toán logic ($\\neg$, $\\land$, $\\lor$).\n- **B sai** vì phép chiếu $\\pi_X(r)$ chỉ liệt kê danh sách thuộc tính $X$ (cột), không dùng biểu thức logic.\n- **C sai** vì phép chia $r \\div s$ đối chiếu theo hai quan hệ.\nChọn **A**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 29']
},
{
  id: 'giuaki-a-02', exam: 'giuaki-a', no: 2, chapter: 'ch3', topic: '1.6',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Phép chiếu quan hệ, tức là từ quan hệ nguồn ........',
  figure: null,
  options: [
    { key: 'A', text: 'Bỏ đi một số bộ' },
    { key: 'B', text: 'Bỏ đi một số bộ thoả mãn biểu thức logic' },
    { key: 'C', text: 'Bỏ đi một số thuộc tính' },
    { key: 'D', text: 'Bỏ đi một số bộ không thoả mãn biểu thức logic' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Chữ "từ" ngay trước "quan hệ nguồn" hơi mờ trong ảnh gốc (302×403 px).',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, **phép chiếu** $\\pi_X(r)$ trên lược đồ $Q$ là thao tác loại bỏ một số thuộc tính (cột) không thuộc $X$ và giữ lại các thuộc tính trong $X$ (**C đúng**).\n- **A, B, D sai** vì bỏ hoặc giữ lại *các bộ (hàng)* theo biểu thức logic là đặc trưng của phép chọn $\\sigma_F(r)$ (tr.24).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24']
},
{
  id: 'giuaki-a-03', exam: 'giuaki-a', no: 3, chapter: 'ch3', topic: '2.9',
  stem: 'Cho quan hệ $R$ gồm các thuộc tính: $K\\#$ mã thuê bao, $TB$ tên thuê bao, $SDT$ số điện thoại, $DC$ địa chỉ. Chọn câu đúng sau đây khi lấy tất cả các mã thuê bao có địa chỉ ở Hà Nội',
  figure: null,
  options: [
    { key: 'A', text: '[Ký hiệu và chỉ số dưới không đọc được]$(R)$' },
    { key: 'B', text: '[Ký hiệu và chỉ số dưới không đọc được]$(R)$' },
    { key: 'C', text: '[Ký hiệu và chỉ số dưới không đọc được]$(R)$' },
    { key: 'D', text: '[Ký hiệu và chỉ số dưới không đọc được]$([\\dots](R))$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc độ phân giải rất thấp (302×403 px), toàn bộ ký hiệu phép toán và chỉ số dưới của cả 4 phương án A–D đều bị nhòe không đọc được',
  note: 'Cả 4 phương án đều kết thúc bằng `(R)`, riêng D dài hơn và có dấu ngoặc lồng `...(R))` (dạng biểu thức lồng $\\pi_{\\dots}(\\sigma_{\\dots}(R))$), nhưng không đọc được danh sách cột chiếu hay điều kiện chọn bên trong nên không thể khẳng định đáp án.',
  explanation: '1. Theo yêu cầu *"lấy tất cả các mã thuê bao có địa chỉ ở Hà Nội"*, cần thực hiện phép chọn theo địa chỉ rồi chiếu lấy cột mã thuê bao `K#`:\n$$\\pi_{K\\#}\\big(\\sigma_{DC=\\text{‘Hà Nội’}}(R)\\big)$$\n2. Về hình thức ngoài, **D** có dạng lồng hai phép toán `...(R))` giống $\\pi(\\sigma(R))$, còn A–C chỉ có một dấu ngoặc đơn cuối `(R)`.\n3. Tuy nhiên vì toàn bộ chữ ở chỉ số dưới của A–D không đọc được trong ảnh gốc (không loại trừ khả năng sai tên thuộc tính như `TB` hay sai phép so sánh), câu hỏi được đánh dấu thiếu dữ liệu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24']
},
{
  id: 'giuaki-a-04', exam: 'giuaki-a', no: 4, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các kiểu thực thể của bài toán quản lý điểm của sinh viên:',
  figure: null,
  options: [
    { key: 'A', text: 'Sinh viên, Môn học, Điểm thi.' },
    { key: 'B', text: 'Sinh viên, Giảng viên, Lớp.' },
    { key: 'C', text: 'Sinh viên, Môn học, Giảng viên.' },
    { key: 'D', text: 'Sinh viên, Lớp, Điểm thi.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.11 (*CSDL quản lý học tập gồm thông tin về sinh viên, môn học, điểm*) và Slide Ch.2 Mô hình ER – tr.4 (*thực thể cụ thể: sinh viên, giảng viên…; thực thể trừu tượng: môn học, đơn vị, khoa, điểm…*):\n- Bài toán trọng tâm là **quản lý điểm của sinh viên**, nên ba kiểu thực thể cốt lõi hợp lý nhất là **Sinh viên, Môn học, Điểm thi** (**A đúng**).\n- **B và C sai** vì thiếu đối tượng *Điểm thi* (C còn thiếu ngữ cảnh môn học/điểm, B thiếu cả *Môn học* lẫn *Điểm thi*).\n- **D sai** vì thiếu *Môn học* (điểm thi gắn với từng môn học).',
  source: ['Slide Ch.1 Tổng quan – tr.11', 'Slide Ch.2 Mô hình ER – tr.4']
},
{
  id: 'giuaki-a-05', exam: 'giuaki-a', no: 5, chapter: 'ch2', topic: '2.4',
  stem: 'Mô hình thực thể liên kết ER nào biểu diễn chính xác mô tả sau: "Một lớp có một sinh viên làm lớp trưởng và ngược lại mỗi sinh viên chỉ làm lớp trưởng một lớp"?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'sv', label: 'SINH VIÊN', x: 75, y: 115 }, { id: 'lop', label: 'LỚP', x: 425, y: 115 }],
      rels: [{ id: 'lt', label: 'Làm LT', x: 250, y: 115,
        attrs: [{ label: 'Ngày bắt đầu LT (?)', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: '1', total: false }, { to: 'lop', card: '1', total: true }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'sv', label: 'SINH VIÊN', x: 75, y: 115, weak: true }, { id: 'lop', label: 'LỚP', x: 425, y: 115 }],
      rels: [{ id: 'lt', label: 'Làm LT', x: 250, y: 115, ident: true,
        attrs: [{ label: 'Ngày bắt đầu LT (?)', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: '1', total: true }, { to: 'lop', card: '1', total: false }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'sv', label: 'SINH VIÊN', x: 75, y: 115 }, { id: 'lop', label: 'LỚP', x: 425, y: 115 }],
      rels: [{ id: 'lt', label: 'Làm LT', x: 250, y: 115,
        links: [{ to: 'sv', card: '1', total: false }, { to: 'lop', card: '1', total: true }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'sv', label: 'SINH VIÊN', x: 75, y: 115 }, { id: 'lop', label: 'LỚP', x: 425, y: 115 }],
      rels: [{ id: 'lt', label: 'Làm LT', x: 250, y: 115,
        links: [{ to: 'sv', card: '1', total: true }, { to: 'lop', card: '1', total: false }] }]
    } } }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc (302×403 px), các đường tham gia toàn bộ và viền kép ở B hiện thành nét đậm hơn nét thường: đoạn nối bên phải (`Làm LT` – `LỚP`) ở A và C đậm hơn đoạn bên trái; đoạn bên trái (`SINH VIÊN` – `Làm LT`) ở B và D đậm hơn đoạn bên phải; nhãn oval phía trên `Làm LT` ở A và B rất mờ (đọc phỏng đoán dạng "Ngày bắt đầu LT").',
  explanation: '1. **Bản số liên kết** (Slide Ch.2 Mô hình ER – tr.20): 1 lớp có 1 lớp trưởng và 1 sinh viên chỉ làm lớp trưởng tối đa 1 lớp $\\Rightarrow$ liên kết `1 : 1`.\n2. **Ràng buộc tham gia** (Slide Ch.2 – tr.22–23): Mỗi `LỚP` bắt buộc có một sinh viên làm lớp trưởng $\\Rightarrow$ `LỚP` **tham gia toàn bộ (nét đôi/đậm)**; còn không phải mọi `SINH VIÊN` đều làm lớp trưởng $\\Rightarrow$ `SINH VIÊN` **tham gia bộ phận (nét đơn)**. Do đó loại **B** và **D** (vẽ nét đậm sai sang phía `SINH VIÊN`; B còn vẽ nhầm `SINH VIÊN` và `Làm LT` thành viền đậm/kép).\n3. **Thuộc tính liên kết**: Mô tả đề bài không hề nhắc ngày bắt đầu làm lớp trưởng nên loại **A** (thừa oval thuộc tính). Chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.20, 22–23']
},
{
  id: 'giuaki-a-06', exam: 'giuaki-a', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất về ràng buộc bộ phận trong kiểu cha trong mô hình thực thể liên kết mở rộng EER.',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là cho phép một số thực thể kiểu cha không thuộc bất kỳ một kiểu con nào.' },
    { key: 'B', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là tất cả các thực thể trong kiểu cha phải là thành viên của ít nhất một kiểu con nào đó.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  sameAs: ['giuaki-a-43'],
  note: 'Mép phải ảnh 169968341 cắt mất chữ "iên" trong "l[iên]" ở đề, "t kỳ" trong "bấ[t kỳ]" ở A và "của" ở cuối B (đối chiếu khớp hoàn toàn với Đề 2 – Câu 3, id `giuaki-a-43`).',
  explanation: 'Trong mô hình EER, ràng buộc tính đầy đủ (*completeness*) gồm hai loại:\n- **Ràng buộc bộ phận (*partial*)**: cho phép một số thực thể của kiểu cha **không thuộc bất kỳ kiểu con nào** (biểu diễn bằng nét đơn từ lớp cha tới vòng tròn chuyên biệt hóa) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc toàn phần (*total*)**: bắt buộc mọi thực thể kiểu cha phải thuộc ít nhất một kiểu con (nét đôi) $\\Rightarrow$ **B sai** (mô tả ràng buộc toàn phần).',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề cương môn học 2023 (mục 2.4.5)']
},
{
  id: 'giuaki-a-07', exam: 'giuaki-a', no: 7, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ `DUAN(MaDA, TenDA, DiaDiem, MaNV)` và `THANNHAN(TenTN, NgaySinh, GioiTinh, MaNV)`. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu "Lấy danh sách các mã nhân viên của các nhân viên có tham gia dự án và có thân nhân"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaNV}}(\\text{DUAN}) \\cup \\pi_{\\text{MaNV}}(\\text{THANNHAN})$' },
    { key: 'B', text: '$\\pi_{\\text{MaNV}}(\\text{DUAN} \\cup \\text{THANNHAN})$' },
    { key: 'C', text: '$\\pi_{\\text{MaNV}}(\\text{DUAN}) \\cap \\pi_{\\text{MaNV}}(\\text{THANNHAN})$' },
    { key: 'D', text: '$\\pi_{\\text{MaNV}}(\\text{DUAN} \\cap \\text{THANNHAN})$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Mép phải ảnh gốc cắt nhẹ một phần chữ "TenTN" và "sách"; chỉ số dưới `MaNV` và dấu $\\cup$ (A, B), $\\cap$ (C, D) rất nhỏ nhưng phân biệt được qua hình dạng nét cong (khớp nguyên văn Ví dụ Slide Ch.3 P2 – tr.23).',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 12, 23:\n1. Yêu cầu lấy nhân viên **vừa** tham gia dự án **vừa** có thân nhân $\\Rightarrow$ dùng **phép giao** ($\\cap$) (loại A, B dùng phép hợp $\\cup$ tương ứng với *hoặc*).\n2. Phép giao và phép hợp chỉ áp dụng trên các quan hệ **cùng lược đồ**. Vì `DUAN` và `THANNHAN` khác tập thuộc tính nên phải chiếu từng bảng về cột chung `MaNV` **trước khi** giao (loại D).\nChọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 12, 23']
},
{
  id: 'giuaki-a-08', exam: 'giuaki-a', no: 8, chapter: 'ch1', topic: '1.1',
  stem: 'Chọn khẳng định đúng nhất khi nói về dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Dữ liệu là các thông tin của đối tượng được lưu trữ trên máy tính.' },
    { key: 'B', text: 'Dữ liệu khác nhau được lưu trữ dưới nhiều dạng khác nhau.' },
    { key: 'C', text: 'Dữ liệu về một đối tượng có thể khác nhau, tùy thuộc vào ngữ cảnh.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.10–11: dữ liệu phản ánh thông tin về các đối tượng được mã hóa lưu trữ trên máy tính dưới nhiều dạng khác nhau (văn bản, âm thanh, hình ảnh…), và cùng một đối tượng có thể được biểu diễn bằng các thuộc tính khác nhau tùy ngữ cảnh bài toán quản lý.\nVì cả A, B, C đều đúng nên chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.10–11']
},
{
  id: 'giuaki-a-09', exam: 'giuaki-a', no: 9, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  sameAs: ['giuaki-a-41'],
  note: 'Câu này trùng nội dung với Đề 2 – Câu 1 (id `giuaki-a-41`).',
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.16 (*Phân loại đối tượng trực tiếp sử dụng CSDL*):\n- **Người phát triển ứng dụng và lập trình**: người chuyên nghiệp về máy tính, chịu trách nhiệm thiết kế, xây dựng và bảo trì các chương trình ứng dụng khai thác CSDL (**B đúng**).\n- Người quản trị CSDL (DBA) quản lý, bảo trì hệ CSDL và cấp quyền; người dùng cuối chỉ sử dụng phần mềm đã xây dựng.',
  source: ['Slide Ch.1 Tổng quan – tr.16']
},
{
  id: 'giuaki-a-10', exam: 'giuaki-a', no: 10, chapter: 'ch2', topic: '2.2',
  stem: 'Cho thực thể `Sinhvien` có các thuộc tính: $\\underline{\\text{Masv}}$, tên sv, mã lớp (mỗi sinh viên chỉ có trong một danh sách lớp theo tổ chức hành chính) và thực thể `Lop` có các thuộc tính: $\\underline{\\text{mã lớp}}$, tenlop, số SV (thuộc tính in đậm, gạch chân là khóa của quan hệ). Mối liên kết giữa hai thực thể `Sinhvien` và `Lop` có kiểu là:',
  figure: null,
  options: [
    { key: 'A', text: '1-1' },
    { key: 'B', text: '1-n' },
    { key: 'C', text: 'n-1' },
    { key: 'D', text: 'n-n' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong câu hỏi tách riêng hai phương án `1-n` (B) và `n-1` (C) nên xét đúng thứ tự hai thực thể được nêu là `Sinhvien` trước – `Lop` sau.',
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.20:\n- Một lớp hành chính (`Lop`) gồm nhiều (`n`) sinh viên.\n- Ngược lại, theo đề bài mỗi sinh viên (`Sinhvien`) chỉ thuộc **một** lớp duy nhất.\n- Xét đúng thứ tự nêu trong câu hỏi (*giữa `Sinhvien` và `Lop`*), phía `Sinhvien` là `n` và phía `Lop` là `1` $\\Rightarrow$ kiểu liên kết **`n-1`** (**C đúng**; B đảo ngược thứ tự thành `1-n`).',
  source: ['Slide Ch.2 Mô hình ER – tr.20']
},
{
  id: 'giuaki-a-11', exam: 'giuaki-a', no: 11, chapter: 'ch3', topic: '1.5',
  stem: 'Chọn một phát biểu đúng trong các phát biểu sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong một quan hệ, tên của một cột được gọi là một thuộc tính hay trường' },
    { key: 'B', text: 'Trong một quan hệ, một dòng được gọi là một thuộc tính hay trường' },
    { key: 'C', text: 'Trong một quan hệ, tên cột tương ứng với tên thực thể trong mô hình thực thể -liên kết' },
    { key: 'D', text: 'Phát biểu nào cũng sai' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.4, 8, 17:\n- Một quan hệ tương ứng với một bảng gồm các cột và các dòng: **mỗi cột gọi là một thuộc tính (hay trường)** $\\Rightarrow$ **A đúng**.\n- **B sai** vì mỗi dòng là một *bộ (tuple / bản ghi)*.\n- **C sai** vì *tên bảng (tên quan hệ)* mới tương ứng với tên kiểu thực thể, còn tên cột tương ứng với tên thuộc tính.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.4, 8, 17']
},
{
  id: 'giuaki-a-12', exam: 'giuaki-a', no: 12, chapter: 'ch3', topic: '1.5',
  stem: 'Cho Thực thể `Sinhvien` có các thuộc tính: Mã sinh viên, Họ tên, Năm sinh, quê quán. Mỗi Mã sinh viên xác định duy nhất một sinh viên. Chọn một phát biểu sai trong các phát biểu sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã sinh viên là khóa chính' },
    { key: 'B', text: 'Mã sinh viên là khóa tối thiểu' },
    { key: 'C', text: 'Họ tên là khóa' },
    { key: 'D', text: 'Mã sinh viên là khóa đơn.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Chữ "Mỗi M[ã]" ở cuối dòng 1 hơi bị cắt nhẹ ở mép phải ảnh gốc.',
  explanation: '1. Từ giả thiết `Mã sinh viên → Họ tên, Năm sinh, quê quán` (kiểm chứng bằng `fd.js`: tập nguồn `TN = {MaSV}`, `TG = {}`), khóa duy nhất của quan hệ là `{Mã sinh viên}`.\n2. Vì chỉ gồm 1 thuộc tính nên `Mã sinh viên` vừa là **khóa đơn**, không chứa tập con thực sự nhỏ hơn nào là siêu khóa (**khóa tối thiểu**) và được chọn làm **khóa chính** (A, B, D đều đúng).\n3. Nhiều sinh viên có thể trùng họ tên nên `Họ tên` không xác định duy nhất từng sinh viên (Slide Ch.4 PTH tr.7) $\\Rightarrow$ phát biểu **C sai**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.9', 'Slide Ch.4 Phụ thuộc hàm – tr.7, 30']
},
{
  id: 'giuaki-a-13', exam: 'giuaki-a', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể - liên kết có các thành phần:',
  figure: null,
  options: [
    { key: 'A', text: 'Thực thể và mối quan hệ' },
    { key: 'B', text: 'Thực thể, mối quan hệ và thuộc tính.' },
    { key: 'C', text: 'Thực thể và thuộc tính.' },
    { key: 'D', text: 'Các mối quan hệ.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.2 (*Định nghĩa*) và Ch.1 Tổng quan – tr.23, mô hình thực thể liên kết ER gồm các thành phần cơ bản: **Thực thể** (*Entity Sets*), **Thuộc tính** (*Attributes*), và **Mối liên kết / quan hệ** (*Relationship*) cùng các ràng buộc.\nCác phương án A, C, D đều liệt kê thiếu thành phần. Chọn **B**.',
  source: ['Slide Ch.2 Mô hình ER – tr.2', 'Slide Ch.1 Tổng quan – tr.23']
},
{
  id: 'giuaki-a-14', exam: 'giuaki-a', no: 14, chapter: 'ch3', topic: '1.5',
  stem: 'Cho quan hệ `Sinh viên` có các thuộc tính: Mã sinh viên, Họ tên, Năm sinh, quê quán. Chọn một phát biểu sai trong các phát biểu sau:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã sinh viên là khóa ngoại của quan hệ sinh viên' },
    { key: 'B', text: 'Mã sinh viên là khóa của quan hệ sinh viên' },
    { key: 'C', text: 'Mã sinh viên là siêu khóa của quan hệ sinh viên' },
    { key: 'D', text: 'Mã sinh viên, Họ tên là siêu khóa của quan hệ sinh viên' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Mép phải ảnh gốc cắt phần chữ "ọn một" trong "Ch[ọn một]" ở đề bài và ngón tay che nhẹ chữ "A." đầu phương án A.',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.9, 13 và Slide Ch.4 PTH – tr.30:\n- `Mã sinh viên` xác định duy nhất mọi thuộc tính của `Sinh viên` (kiểm chứng `fd.js` cho khóa duy nhất `{MaSV}` và tập 8 siêu khóa đều chứa `MaSV`). Vì vậy `Mã sinh viên` là **khóa** (B đúng), cũng là **siêu khóa** (C đúng), và mọi tập cha chứa nó như `{Mã sinh viên, Họ tên}` đều là **siêu khóa** (D đúng).\n- **A sai** vì **khóa ngoại** là thuộc tính của quan hệ này tham chiếu tới khóa chính của một *quan hệ khác*, không phải khóa chính nội tại của chính `Sinh viên`.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.9, 13', 'Slide Ch.4 Phụ thuộc hàm – tr.30']
},
{
  id: 'giuaki-a-15', exam: 'giuaki-a', no: 15, chapter: 'ch3', topic: '1.5',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: Giá trị các thành phần khoá ........',
  figure: null,
  options: [
    { key: 'A', text: 'Có thể nhận giá trị null hay các giá trị không xác định.' },
    { key: 'B', text: 'Có thể nhận giá trị các giá trị không xác định.' },
    { key: 'C', text: 'Không thể nhận giá trị null và chấp nhận các giá trị không xác định.' },
    { key: 'D', text: 'Không thể nhận giá trị null hay các giá trị không xác định.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Mép phải ảnh gốc cắt nhẹ chữ "n" ở cuối "thành phầ[n]"; cuối dòng đề sau chữ "khoá" không có dấu chấm lửng trên ảnh.',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.12 (*Ràng buộc thuộc tính khóa – khóa chính*): các giá trị trong thành phần khóa chính không được trùng nhau và **bắt buộc phải khác `null`** (không thể nhận giá trị rỗng hay không xác định để đảm bảo định danh duy nhất từng bộ).\nDo đó A, B, C đều sai vì cho phép `null` hoặc giá trị không xác định. Chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.12']
},
{
  id: 'giuaki-a-16', exam: 'giuaki-a', no: 16, chapter: 'ch3', topic: '2.9',
  stem: 'Cho quan hệ $R$ gồm các thuộc tính: $K\\#$ mã thuê bao, $TB$ tên thuê bao, $SDT$ số điện thoại, $DC$ địa chỉ. Đưa ra mã thuê bao và tên thuê bao có địa chỉ Hòa Bình hoặc Hải Phòng',
  figure: null,
  options: [
    { key: 'A', text: '[Biểu thức ĐSQH lồng nhau không đọc được chỉ số dưới]((R))' },
    { key: 'B', text: '[Biểu thức ĐSQH lồng nhau không đọc được chỉ số dưới]((R))' },
    { key: 'C', text: '[Biểu thức ĐSQH lồng nhau không đọc được chỉ số dưới]((R))' },
    { key: 'D', text: '[Biểu thức ĐSQH lồng nhau không đọc được chỉ số dưới]((R))' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc độ phân giải thấp (302×403 px), vùng đầu trang quá mờ nên không đọc được ký hiệu và chỉ số dưới của cả 4 phương án A–D',
  note: 'Phần đề nằm ở đáy ảnh `170346623` (bị cắt chữ "hoại" ở cuối "số điện t[hoại]"); 4 phương án nằm ở mép trên ảnh `170094019` / `169070246`, cả 4 đều kết thúc bằng `...(R))` nhưng hoàn toàn không đọc được nội dung bên trong.',
  explanation: '1. Biểu thức ĐSQH đúng cho yêu cầu *"đưa ra mã thuê bao và tên thuê bao có địa chỉ Hòa Bình hoặc Hải Phòng"* là chọn điều kiện `OR` ($\\lor$) rồi chiếu 2 cột `K#, TB` (Slide Ch.3 P2 – tr.19, 24):\n$$\\pi_{K\\#,\\; TB}\\big(\\sigma_{DC=\\text{‘Hòa Bình’} \\lor DC=\\text{‘Hải Phòng’}}(R)\\big)$$\n2. Khi giải dạng bài này cần tránh bẫy dùng `AND` ($\\land$) hay ký hiệu hợp $\\cup$ thay cho `OR` ($\\lor$) trong điều kiện chọn $\\sigma$, hoặc chiếu thiếu/thừa cột.\n3. Vì cả 4 phương án trong ảnh gốc đều nhòe không đọc được nên đánh dấu thiếu dữ liệu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24']
},
{
  id: 'giuaki-a-17', exam: 'giuaki-a', no: 17, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'Thứ tự của các cột là quan trọng' },
    { key: 'B', text: 'Thứ tự của các hàng là quan trọng' },
    { key: 'C', text: 'Thứ tự của các cột là quan trọng' },
    { key: 'D', text: 'Thứ tự của các hàng là không quan trọng' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc mờ, phương án A và C đọc giống hệt nhau là "Thứ tự của các cột là quan trọng" (có thể một phương án khác bị mất chữ "không" nhưng không thấy trên ảnh); dù vậy cả hai đều không ảnh hưởng đến đáp án đúng duy nhất là D.',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.10 (*Các đặc trưng của quan hệ*):\n- Một quan hệ là tập hợp các bộ (hàng) nên **thứ tự của các hàng (bộ) là không quan trọng** $\\Rightarrow$ **D đúng** (loại B).\n- Khi viết bộ giá trị theo vị trí cột của lược đồ $R(A_1, \\dots, A_n)$, thứ tự giữa các giá trị (vị trí cột) trong một bộ là quan trọng theo quy ước của slide (còn nếu định danh theo tên cột thì thứ tự cột không làm thay đổi bản chất quan hệ); trong câu này phương án chuẩn khớp slide là **D**.',
  sameAs: ['de-2021-2-25'],
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10']
},
{
  id: 'giuaki-a-18', exam: 'giuaki-a', no: 18, chapter: 'ch3', topic: '2.9',
  stem: 'Quan hệ `NHÂNVIÊN(MãsốNV, Họtên, Ngàysinh, Địachỉ, Giớitính, Lương, MãsốNGS, MãsốĐV)`. Cho biết danh sách các nhân viên của đơn vị có mã số là 3 và lương >500',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{[chỉ số dưới không đọc được]}}(\\text{NHÂNVIÊN})$' },
    { key: 'B', text: '$\\pi_{\\text{[\\dots]}}(\\sigma_{\\text{[\\dots]}}(\\text{NHÂNVIÊN}))$' },
    { key: 'C', text: '$\\pi_{\\text{[\\dots]}}(\\sigma_{\\text{[\\dots]}}(\\text{NHÂNVIÊN}))$' },
    { key: 'D', text: '$\\sigma_{\\text{[chỉ số dưới không đọc được]}}(\\text{NHÂNVIÊN})$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc độ phân giải thấp, toàn bộ chỉ số dưới (điều kiện chọn và danh sách chiếu) của cả 4 phương án A–D đều bị nhòe không đọc chắc chắn',
  note: 'Ở ảnh gốc, A và D kết thúc bằng `(NHÂNVIÊN)` (chỉ một phép toán $\\sigma$); B và C kết thúc bằng `(NHÂNVIÊN))` (ngoặc lồng) và trong chỉ số dưới thoáng thấy chữ ngắn dạng `OR`/`DF`, nhưng không đọc rõ từng chữ để chọn.',
  explanation: '1. Theo yêu cầu *"danh sách các nhân viên của đơn vị có mã số là 3 và lương >500"*, cần lấy toàn bộ các cột của `NHÂNVIÊN` với hai điều kiện nối bằng phép `AND` ($\\land$, Slide Ch.3 P2 – tr.24):\n$$\\sigma_{\\text{MãsốĐV}=3 \\land \\text{Lương}>500}(\\text{NHÂNVIÊN})$$\n2. Về cấu trúc ngoặc, A và D đều có dạng $\\sigma_{\\dots}(\\text{NHÂNVIÊN})$ (khớp phép chọn đơn), còn B và C là dạng lồng `((NHÂNVIÊN))`; tuy nhiên vì các chỉ số dưới ở A và D nhòe không phân biệt được tên cột (`MãsốĐV` vs `MãsốNV`) và phép logic (`AND` vs `OR`/`,`) nên chưa chốt đáp án.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'giuaki-a-19', exam: 'giuaki-a', no: 19, chapter: 'ch3', topic: '1.5',
  stem: 'Liên kết giữa các bảng dựa trên',
  figure: null,
  options: [
    { key: 'A', text: 'Các thuộc tính trùng tên giữa các bảng' },
    { key: 'B', text: 'Thuộc tính khoá' },
    { key: 'C', text: 'Ý định của người quản trị hệ CSDL' },
    { key: 'D', text: 'Tất cả các ý trên' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.13 (*Khóa ngoại*) và Slide Ch.4 Tổng quan TKCSDL – tr.10–12 (*Nguyên tắc 4*):\n- Liên kết giữa các bảng trong mô hình quan hệ dựa trên cặp **khóa chính – khóa ngoại** (**Thuộc tính khoá**, **B đúng**).\n- **A sai** vì Slide Ch.3 tr.13 nêu rõ khóa ngoại *không nhất thiết phải trùng tên* với khóa chính, đồng thời Slide Ch.4 tr.10–12 cảnh báo kết nối theo thuộc tính trùng tên không phải khóa sẽ sinh ra **bộ giả**.\n- **C sai** vì mối liên kết phản ánh ngữ nghĩa dữ liệu của hệ thống, không phụ thuộc ý muốn chủ quan của người quản trị.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.13', 'Slide Ch.4 Tổng quan TKCSDL – tr.10–12']
},
{
  id: 'giuaki-a-20', exam: 'giuaki-a', no: 20, chapter: 'ch2', topic: '1.4',
  stem: 'Thực thể là',
  figure: null,
  options: [
    { key: 'A', text: 'Các đối tượng dữ liệu' },
    { key: 'B', text: 'Các mối liên kết giữa các đối tượng' },
    { key: 'C', text: 'Các quan hệ' },
    { key: 'D', text: 'Các đối tượng và mối liên kết giữa các đối tượng' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Ảnh chụp trùng `169070246` ghi thêm dấu hai chấm "Thực thể là :".',
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.3–4 (*Thực thể - Kiểu thực thể*), **thực thể** là một vật hoặc **đối tượng** (cụ thể hay trừu tượng) trong thế giới thực, tồn tại độc lập và phân biệt được với các đối tượng khác (**A đúng**).\n- **B sai** vì đó là khái niệm *liên kết (Relationship)*.\n- **C sai** vì *quan hệ* là bảng trong mô hình quan hệ ở Chương 3.\n- **D sai** vì gộp cả mối liên kết vào định nghĩa thực thể.',
  source: ['Slide Ch.2 Mô hình ER – tr.3–4']
},
{
  id: 'giuaki-a-21', exam: 'giuaki-a', no: 21, chapter: 'ch4', topic: '3.1',
  stem: 'Nếu $A\\to B$ và $A\\to C$ thì',
  figure: null,
  options: [
    { key: 'A', text: '$A\\to AB$' },
    { key: 'B', text: '$A\\to BC$' },
    { key: 'C', text: '$A\\to AB$' },
    { key: 'D', text: '$AA\\to C$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc mờ ở cả hai ảnh (`170094019` và `169070246`), phương án A và C đều đọc là "$A \\to AB$"; dù vậy áp dụng trực tiếp luật hợp cho cả hai tiền đề cho đáp án duy nhất là B ($A \\to BC$).',
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.10 (*Luật hợp / Union trong hệ luật mở rộng Armstrong*): Nếu $X \\to Y$ và $X \\to Z$ thì $X \\to YZ$.\n- Áp dụng với $A \\to B$ và $A \\to C$ suy ra trực tiếp **$A \\to BC$** (kiểm chứng bằng `fd.js`: $A^+ = ABC \\supseteq BC$) $\\Rightarrow$ **B đúng**.\n- A, C ($A \\to AB$) chỉ phản ánh phản xạ + bổ sung một tiền đề $A \\to B$ chứ không kết hợp $A \\to C$; D ($AA \\to C$ tức $A \\to C$) chỉ lặp lại giả thiết ban đầu.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.10']
},
{
  id: 'giuaki-a-22', exam: 'giuaki-a', no: 22, chapter: 'ch3', topic: '2.15',
  stem: 'Bảng quan hệ `Mônhọc(Mamon, tenmon, Sotiet)` cho biết thông tin về các môn học của một Trung tâm giảng dạy Tin học, bảng quan hệ `Giáoviên(TênGV, Mamon)` cho biết danh sách các giáo viên có thể giảng dạy được các môn',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{Giáoviên} \\div \\pi_{\\text{[không đọc được]}}(\\text{Mônhọc})$' },
    { key: 'B', text: '$\\text{Giáoviên} \\div \\pi_{\\text{[không đọc được]}}(\\text{Mônhọc})$' },
    { key: 'C', text: '$\\text{Giáoviên} \\div \\pi_{\\text{[không đọc được]}}(\\text{Mônhọc})$' },
    { key: 'D', text: '$\\text{Giáoviên} \\div \\pi_{\\text{[không đọc được]}}(\\text{Mônhọc})$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị nhòe toàn bộ chỉ số dưới của phép chiếu $\\pi$ ở cả 4 phương án A–D, đồng thời mép phải đề bài cắt phần yêu cầu truy vấn cuối câu',
  note: 'Mép phải ảnh cắt nhẹ sau "danh sách các giá[o]" ở dòng 2 đề bài và thiếu câu hỏi truy vấn (thường là tìm giáo viên dạy được *tất cả* các môn); phép chia $\\div$ giữa `Giáoviên` và $\\pi$ khá mờ nhưng các chỉ số dưới của $\\pi$ ở A–D đều không đọc chắc chắn được.',
  explanation: '1. Theo Ví dụ 3 phép chia trên Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29, 32, để tìm tên các giáo viên có thể giảng dạy **tất cả** các môn học, ta lấy `Giáoviên(TênGV, Mamon)` chia cho hình chiếu của `Mônhọc` lên đúng thuộc tính đối chiếu chung `Mamon`:\n$$\\text{Giáoviên} \\div \\pi_{\\text{Mamon}}(\\text{Mônhọc})$$\n2. Không được chiếu `tenmon`, `Sotiet` hay `TênGV` ở số chia vì không khớp tập thuộc tính cần triệt tiêu của `Giáoviên`.\n3. Do chỉ số dưới của $\\pi$ ở cả 4 phương án A–D đều nhòe không phân biệt được nên đánh dấu thiếu dữ liệu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29, 32']
},
{
  id: 'giuaki-a-23', exam: 'giuaki-a', no: 23, chapter: 'ch2', topic: '2.2',
  stem: 'Thuộc tính của thực thể được biểu diễn trong mô hình thực thể là hình:',
  figure: null,
  options: [
    { key: 'A', text: 'Hình vuông' },
    { key: 'B', text: 'Hình thoi' },
    { key: 'C', text: 'Hình oval' },
    { key: 'D', text: 'Hình chữ nhật' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.7 & tr.25 (*Ký hiệu các thành phần ER*):\n- **Thuộc tính**: biểu diễn bằng **hình elip / hình oval** gắn với thực thể (hoặc liên kết) $\\Rightarrow$ **C đúng**.\n- **B sai** vì hình thoi biểu diễn *kiểu liên kết*.\n- **D sai** vì hình chữ nhật biểu diễn *kiểu thực thể*.',
  source: ['Slide Ch.2 Mô hình ER – tr.7, 25']
},
{
  id: 'giuaki-a-24', exam: 'giuaki-a', no: 24, chapter: 'ch4', topic: '3.1',
  stem: 'Nếu $A\\to B$ và $B\\to C$ thì',
  figure: null,
  options: [
    { key: 'A', text: '$AB\\to C$' },
    { key: 'B', text: '$A\\to BC$' },
    { key: 'C', text: '$B\\to AB$' },
    { key: 'D', text: '$A\\to C$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo **Luật bắc cầu** trong hệ tiên đề Armstrong (Slide Ch.4 Phụ thuộc hàm – tr.9): Nếu $X \\to Y$ và $Y \\to Z$ thì $X \\to Z$.\n- Áp dụng với $A \\to B$ và $B \\to C$ ta suy ra **$A \\to C$** (kiểm chứng `fd.js`: $A^+ = ABC \\supseteq C$) $\\Rightarrow$ **D đúng**.\n- A chỉ tăng cường vế trái yếu hơn, B và C đều không suy ra được từ $A \\to B,\\; B \\to C$ (khi không giả sử $A$ phụ thuộc $B$ ở C hay $A \\to B$ ghép $C$ không có cơ sở suy từ $B$ cho B: thực ra $A^+ = ABC$ nên B cũng đúng theo luật hợp, nhưng phát biểu trực tiếp của luật bắc cầu chuẩn trong đề là **D** $A \\to C$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9']
},
{
  id: 'giuaki-a-25', exam: 'giuaki-a', no: 25, chapter: 'ch4', topic: '3.1',
  stem: 'Nếu $A\\to B$ và $C\\subseteq B$ thì',
  figure: null,
  options: [
    { key: 'A', text: '$AB\\to C$' },
    { key: 'B', text: '$A\\to BC$' },
    { key: 'C', text: '$A\\to C$' },
    { key: 'D', text: '$B\\to C$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo **Luật tách** (*Decomposition*) trong hệ tiên đề mở rộng Armstrong (Slide Ch.4 Phụ thuộc hàm – tr.10): Nếu $X \\to Y$ và $Z \\subseteq Y$ thì $X \\to Z$.\n- Với $A \\to B$ và $C \\subseteq B$, áp dụng luật tách thu được **$A \\to C$** (kiểm chứng `fd.js` với $A \\to BC$: $A^+ = ABC \\supseteq C$) $\\Rightarrow$ **C đúng**.\n- B là hệ quả phụ ($A \\to BC$ khi $C \\subseteq B$ chỉ là viết lặp tập hợp $B \\cup C = B$), còn D ($B \\to C$) là phản xạ từ $C \\subseteq B$ không dùng đến $A \\to B$.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.10']
},
{
  id: 'giuaki-a-26', exam: 'giuaki-a', no: 26, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ACDIHG\\}$ và $F=\\{ C\\to DI,\\; GC\\to A,\\; GH\\to \\dots,\\; HI\\to G \\}$. $R(U,F)$ có bao nhiêu khóa?',
  figure: null,
  options: [
    { key: 'A', text: '1' },
    { key: 'B', text: '3.' },
    { key: 'C', text: '2.' },
    { key: 'D', text: '4.' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị cắt mép phải làm mất vế phải của phụ thuộc hàm $GH \\to \\dots$ (và có thể còn phụ thuộc hàm khác trước $HI \\to G$)',
  note: 'Thứ tự ký tự trong $U$ đọc là `{ACDIHG}` (có thể là `{ACDHIG}` nhưng cùng tập 6 thuộc tính); dòng 1 của $F$ bị cắt ngay sau `GH→`.',
  explanation: '1. Kiểm chứng bằng `fd.js` trên $U = \\{A,C,D,G,H,I\\}$ cho thấy phần vế phải bị cắt của $GH \\to \\dots$ làm thay đổi trực tiếp số lượng khóa của lược đồ:\n   - Nếu $GH \\to A$: tập nguồn $TN = \\{C,H\\}$, $TG = \\{G,I\\}$, chỉ có **1 khóa** là $\\{C,H\\}$ (ứng với A).\n   - Nếu $GH \\to C$ (hoặc $GH \\to AC$): $TN = \\{H\\}$, $TG = \\{C,G,I\\}$, sinh ra **3 khóa** là $\\{C,H\\}$, $\\{I,H\\}$, $\\{H,G\\}$ (ứng với B).\n2. Ngoài ra có thể còn PTH khác bị cắt ở cuối dòng 1, làm thay đổi thêm bao đóng và số khóa (2 hoặc 4 khóa). Vì thiếu dữ liệu ở $F$ nên không thể chốt đáp án.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.38–42']
},
{
  id: 'giuaki-a-27', exam: 'giuaki-a', no: 27, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R=\\{A,B,C,D,E,G,H,I\\}$ và tập các phụ thuộc hàm $F=\\{AC\\to \\dots,\\; BI\\to ACD,\\; ABC\\to D,\\; H\\to I,\\; ACE\\to BCG,\\; CG\\to AE\\}$. Khóa của $R$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$\\{C,H\\}$' },
    { key: 'B', text: '$\\{C,G,H\\}$' },
    { key: 'C', text: '$\\{C,E,H\\}$' },
    { key: 'D', text: '$\\{C,B,H\\}$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị cắt vế phải của phụ thuộc hàm $AC \\to \\dots$ ở mép phải (nên không biết vế phải có chứa $H$ hay còn PTH nào bị cắt ở cuối dòng đầu của $F$)',
  note: 'Cả hai ảnh `170094019` và `169070246` đều cắt mép phải ngay sau dấu mũi tên `AC→`.',
  explanation: '1. Kiểm tra bao đóng bằng `fd.js` chỉ với 5 PTH đọc được $\\{BI\\to ACD,\\; ABC\\to D,\\; H\\to I,\\; ACE\\to BCG,\\; CG\\to AE\\}$:\n   - $\\{C,H\\}^+ = \\{C,H,I\\}$ (thiếu $A,B,D,E,G$);\n   - $\\{C,E,H\\}^+ = \\{C,E,H,I\\}$ (thiếu $A,B,D,G$);\n   - $\\{C,B,H\\}^+ = \\{A,B,C,D,H,I\\}$ (thiếu $E,G$);\n   - $\\{C,G,H\\}^+ = \\{A,B,C,D,E,G,H,I\\} = U$.\n2. Khi thử mọi tập con $Y \\subseteq U$ cho $AC \\to Y$ bằng `fd.js`: với 127 trường hợp $H \\notin Y$ thì $\\{C,G,H\\}$ là một khóa (trong số nhiều khóa như $\\{B,E,H\\}, \\{B,G,H\\}, \\{C,G,H\\}$…), nhưng nếu $H \\in Y$ (VD $AC \\to H$) thì $\\{C,G\\}^+ = U$ khiến $\\{C,G,H\\}$ dư $H$ và **không còn là khóa** (không phương án nào đúng). Do chưa biết phần bị cắt sau `AC→`, câu hỏi để trống đáp án.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.15–16, 30, 41–42']
},
{
  id: 'giuaki-a-28', exam: 'giuaki-a', no: 28, chapter: 'ch3', topic: '1.5',
  stem: 'Cho CSDL có quan hệ `SV(Mã Sv, tên SV, NS, Mã lớp)` khóa là `Mã SV` và quan hệ `Lớp(Mã lớp, tên lớp, số SV)` khóa là `Mã lớp`. Khóa ngoại của quan hệ `SV` là:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã SV' },
    { key: 'B', text: 'Mã lớp' },
    { key: 'C', text: 'Tên lớp' },
    { key: 'D', text: '(Mã lớp, Mã SV)' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Mép phải ảnh `170094019` cắt nhẹ chữ "ớp" trong "quan hệ L[ớp]" và chữ "V)" ở cuối phương án D "(Mã lớp, Mã S[V])", không ảnh hưởng nội dung câu hỏi.',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.9, 13 (*Khóa ngoại*): **khóa ngoại** là thuộc tính của quan hệ này nhưng là khóa chính của một quan hệ khác dùng để tham chiếu/liên kết dữ liệu.\n- Trong quan hệ `SV`, `Mã lớp` không phải khóa chính của `SV` (khóa chính của `SV` là `Mã SV`, kiểm chứng `fd.js` cho `SV`: khóa là `{Mã Sv}`), mà tham chiếu tới khóa chính `Mã lớp` của quan hệ `Lớp` $\\Rightarrow$ **`Mã lớp` là khóa ngoại của `SV`** (**B đúng**).\n- A là khóa chính của `SV`; C (`Tên lớp`) không nằm trong `SV`; D là siêu khóa của `SV`.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.9, 13']
},
{
  id: 'giuaki-a-29', exam: 'giuaki-a', no: 29, chapter: 'ch2', topic: '1.4',
  stem: 'Tiêu chí nào sau đây được chọn làm khóa chính',
  figure: null,
  options: [
    { key: 'A', text: 'Khóa có ít thuộc tính nhất' },
    { key: 'B', text: 'Khóa bất kỳ' },
    { key: 'C', text: 'Không chứa các thuộc tính thay đổi theo thời gian' },
    { key: 'D', text: 'Thuộc tính suy dẫn' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.13 (*Gợi ý để lựa chọn thuộc tính khóa*), tiêu chí hàng đầu khi chọn thuộc tính làm khóa là **giá trị của nó không bị thay đổi theo thời gian** (ổn định, bên cạnh yêu cầu không `null` và tránh mang thông tin phân loại) $\\Rightarrow$ **C đúng**.\n- **A chưa đủ** (một thuộc tính đơn như số điện thoại hoặc địa chỉ có giá trị thay đổi theo thời gian thì không nên chọn làm khóa chính; slide chỉ khuyên nên chọn thuộc tính đơn thay vì kết hợp nhiều thuộc tính khi đã thỏa tính ổn định).\n- **B sai** vì phải cân nhắc tính ổn định và tối ưu, không chọn tùy tiện; **D sai** vì thuộc tính suy dẫn tính từ thuộc tính khác.',
  source: ['Slide Ch.2 Mô hình ER – tr.13']
},
{
  id: 'giuaki-a-30', exam: 'giuaki-a', no: 30, chapter: 'ch2', topic: '2.2',
  stem: 'Mối quan hệ biểu diễn trong mô hình thực thể là hình:',
  figure: null,
  options: [
    { key: 'A', text: 'Hình vuông' },
    { key: 'B', text: 'Hình thoi' },
    { key: 'C', text: 'Hình oval' },
    { key: 'D', text: 'Hình chữ nhật' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.16 & tr.25 (*Liên kết - Kiểu liên kết*):\n- **Mối liên kết (quan hệ giữa các kiểu thực thể)** được biểu diễn bằng **hình thoi** chứa tên liên kết (thường là động từ) và nối trực tiếp với các kiểu thực thể $\\Rightarrow$ **B đúng**.\n- **C sai** vì hình oval biểu diễn *thuộc tính*; **D sai** vì hình chữ nhật biểu diễn *kiểu thực thể*.',
  source: ['Slide Ch.2 Mô hình ER – tr.16, 25']
},
{
  id: 'giuaki-a-31', exam: 'giuaki-a', no: 31, chapter: 'ch3', topic: '2.9',
  stem: 'Quan hệ `NHÂNVIÊN(MãsốNV, Họtên, Ngàysinh, Địachỉ, Giớitính, Lương, MãsốNGS, MãsốĐV)`. Cho biết danh sách các nhân viên của đơn vị có mã số là 4 hoặc lương >500',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{[chỉ số dưới không đọc được]}}(\\text{NHÂNVIÊN})$' },
    { key: 'B', text: '$\\pi_{\\text{[\\dots]}}(\\sigma_{\\text{[\\dots]}}(\\text{NHÂNVIÊN}))$' },
    { key: 'C', text: '$\\pi_{\\text{[\\dots]}}(\\sigma_{\\text{[\\dots]}}(\\text{NHÂNVIÊN}))$' },
    { key: 'D', text: '$\\sigma_{\\text{[chỉ số dưới không đọc được]}}(\\text{NHÂNVIÊN})$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc có độ phân giải thấp khiến chỉ số dưới biểu thức ĐSQH ở cả 4 phương án A–D không đọc chắc chắn được (và ngưỡng lương trong đề cũng nhòe giữa `>500` và `>300`)',
  note: 'Trong đề, ngưỡng lương ở ảnh `169565781` trông giống `>500` còn ở `169426887` giống `>300`; ở 4 phương án, A và D kết thúc `(NHÂNVIÊN)` (một phép toán $\\sigma$), B và C kết thúc `(NHÂNVIÊN))` (lồng hai phép toán, ký hiệu đầu mờ giữa $\\sigma$ và $\\pi$); chỉ số dưới của D có từ ngắn dạng `OR`, còn A mờ toàn bộ phép nối logic.',
  explanation: '1. Theo yêu cầu *"danh sách các nhân viên của đơn vị có mã số là 4 hoặc lương >500"*, biểu thức ĐSQH đúng là phép chọn đơn dùng phép logic `OR` ($\\lor$, Slide Ch.3 P2 – tr.24):\n$$\\sigma_{\\text{MãsốĐV}=4 \\lor \\text{Lương}>500}(\\text{NHÂNVIÊN})$$\n2. Về cấu trúc ngoặc, A và D đều có dạng $\\sigma_{\\dots}(\\text{NHÂNVIÊN})$ phù hợp nhất (loại B, C có ngoặc lồng); tuy nhiên do ảnh gốc quá mờ không đọc chắc chắn tên thuộc tính và toán tử trong chỉ số dưới của A và D (cũng như giá trị `>500` hay `>300`), câu hỏi được đánh dấu thiếu dữ liệu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'giuaki-a-32', exam: 'giuaki-a', no: 32, chapter: 'ch3', topic: '2.9',
  stem: 'Cho câu truy vấn $\\pi_{\\text{MãsốNV},\\; \\text{Họtên}}(\\text{NHÂNVIÊN})$ kết quả là :',
  figure: null,
  options: [
    { key: 'A', text: 'Đưa danh sách có 1 cột' },
    { key: 'B', text: 'Đưa ra danh sách 3 cột,' },
    { key: 'C', text: 'Đưa ra danh sách 4 cột' },
    { key: 'D', text: 'Đưa ra danh sách 2 cột' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Chỉ số dưới của phép chiếu $\\pi$ trong ảnh gốc khá nhỏ và nhòe, nhưng khi phóng to quan sát rõ cấu trúc gồm đúng 2 thuộc tính ngăn cách bởi một dấu phẩy (dạng `MãsốNV, Họtên`).',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19 (*Phép chiếu* $\\pi_X(r)$), kết quả của phép chiếu là một quan hệ chỉ chứa các thuộc tính (cột) được liệt kê trong tập $X$.\n- Ở đây chỉ số dưới của $\\pi$ liệt kê đúng **2 thuộc tính** (`MãsốNV` và `Họtên`), nên bảng kết quả có **2 cột** (**D đúng**).\n- Các phương án A (1 cột), B (3 cột), C (4 cột) đều sai số lượng cột.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19']
},
{
  id: 'giuaki-a-33', exam: 'giuaki-a', no: 33, chapter: 'ch3', topic: '2.9',
  stem: 'Quan hệ `NHÂNVIÊN(MãsốNV,Họtên,Ngàysinh,Địachỉ,Giớitính,Lương, MãsốNGS, MãsốĐV)`. Cho biết danh sách các nhân viên của đơn vị có lương từ 300 đến 500',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{300<\\text{Lương}<500}(\\text{NHÂNVIÊN})$' },
    { key: 'B', text: '$\\sigma_{300<\\text{Lương},\\; \\text{Lương}<500}(\\text{NHÂNVIÊN})$' },
    { key: 'C', text: '$\\sigma_{(300<\\text{Lương})\\text{ OR }(\\text{Lương}<500)}(\\text{NHÂNVIÊN})$' },
    { key: 'D', text: '$\\sigma_{(300<\\text{Lương})\\text{ AND }(\\text{Lương}<500)}(\\text{NHÂNVIÊN})$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Ảnh gốc độ phân giải thấp khiến chỉ số dưới nhỏ: không phân biệt rõ dấu `<` với `≤` (ý nghĩa "từ 300 đến 500" thường viết `≤`, cả 4 phương án đều dùng cùng một ký hiệu so sánh) và dấu phân cách ở B trông như dấu phẩy; tuy nhiên chỉ có phương án D dùng đúng phép logic `AND`.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24, biểu thức điều kiện trong phép chọn $\\sigma_F(r)$ chỉ ghép các điều kiện thành phần bằng các phép toán logic **$\\land$ (`AND`), $\\lor$ (`OR`), $\\neg$ (`NOT`)**:\n- Để lương nằm trong đoạn từ 300 đến 500, cần thỏa mãn **đồng thời** hai vế nên phải dùng phép **`AND`** (**D đúng**).\n- **A sai** vì viết gộp bất đẳng thức kép không hợp lệ trong biểu thức logic ĐSQH.\n- **B sai** vì dùng dấu phẩy `,` thay cho phép `AND`.\n- **C sai** vì dùng `OR` (khiến mọi mức lương bất kỳ đều thỏa một trong hai vế `>300` hoặc `<500`).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'giuaki-a-34', exam: 'giuaki-a', no: 34, chapter: 'ch3', topic: '2.9',
  stem: 'Quan hệ `NHÂNVIÊN(MãsốNV,Họtên,Ngàysinh,Địachỉ,Giớitính,Lương, MãsốNGS, MãsốĐV)`. Câu truy vấn $\\sigma_{\\text{Lương}>500}(\\text{NHÂNVIÊN})$ cho kết quả là:',
  figure: null,
  options: [
    { key: 'A', text: 'Đưa danh sách có 6 cột' },
    { key: 'B', text: 'Đưa ra danh sách 7 cột' },
    { key: 'C', text: 'Đưa ra danh sách 5 cột' },
    { key: 'D', text: 'Đưa ra danh sách 8 cột' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Chỉ số dưới của $\\sigma$ trong ảnh gốc khá nhỏ (đọc phỏng đoán là `Lương >500`), nhưng vì toán tử là phép chọn $\\sigma$ nên số cột kết quả luôn bằng số cột của `NHÂNVIÊN`.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24, **phép chọn $\\sigma_F(r)$** chỉ lọc các bộ (hàng) thỏa mãn điều kiện $F$, còn tập thuộc tính (các cột) của quan hệ kết quả **giữ nguyên toàn bộ như quan hệ nguồn**.\n- Đếm số thuộc tính của `NHÂNVIÊN`: `MãsốNV`, `Họtên`, `Ngàysinh`, `Địachỉ`, `Giớitính`, `Lương`, `MãsốNGS`, `MãsốĐV` $\\Rightarrow$ gồm **8 cột** (**D đúng**).\n- A, B, C sai số lượng cột.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'giuaki-a-35', exam: 'giuaki-a', no: 35, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu đưa ra danh sách.......của bảng',
  figure: null,
  options: [
    { key: 'A', text: 'Các cột' },
    { key: 'B', text: 'Các dòng' },
    { key: 'C', text: 'Cả cột và dòng' },
    { key: 'D', text: 'Một phần' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19: *"Phép chiếu chính là phép rút trích dữ liệu theo cột (chiều dọc)"*, giữ lại các thuộc tính được chỉ định trong danh sách chiếu (**A đúng**).\n- **B sai** vì rút trích các dòng là chức năng của *phép chọn* $\\sigma$.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19']
},
{
  id: 'giuaki-a-36', exam: 'giuaki-a', no: 36, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chọn đưa ra danh sách........của bảng',
  figure: null,
  options: [
    { key: 'A', text: 'Các cột' },
    { key: 'B', text: 'Các dòng' },
    { key: 'C', text: 'Cả cột và dòng' },
    { key: 'D', text: 'Một phần' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24: *"Phép chọn trích ra các hàng trong quan hệ thỏa mãn điều kiện"* (rút trích theo chiều ngang, giữ nguyên mọi cột) (**B đúng**).\n- **A sai** vì rút trích các cột là *phép chiếu* $\\pi$.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'giuaki-a-37', exam: 'giuaki-a', no: 37, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ:',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{MaSV} \\to \\text{hoten}$' },
    { key: 'B', text: '$\\text{MaSV},\\; \\text{Hoten} \\to \\text{diachi}$' },
    { key: 'C', text: '$\\text{MaSV},\\; \\text{Hoten} \\to \\text{ngaysinh}$' },
    { key: 'D', text: '$\\text{MaSV},\\; \\text{ngaysinh} \\to \\text{hoten}$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL – tr.6 và Slide Ch.4 PTH – tr.26:\n- $X \\to Y$ là **phụ thuộc hàm đầy đủ** nếu không thể bỏ bất kỳ thuộc tính nào khỏi vế trái $X$ mà vẫn suy ra được $Y$ (mọi PTH có vế trái gồm **1 thuộc tính** đều là PTH đầy đủ).\n- Trong thực tế quản lý sinh viên, `MaSV` đã xác định duy nhất `hoten`, `diachi`, `ngaysinh` (kiểm chứng `fd.js` cho phủ tối thiểu $\\{\\text{MaSV}\\to\\text{hoten},\\; \\text{MaSV}\\to\\text{ngaysinh},\\; \\text{MaSV}\\to\\text{diachi}\\}$).\n- Do đó B, C dư thừa `Hoten` và D dư thừa `ngaysinh` ở vế trái; chỉ **A** là phụ thuộc hàm đầy đủ.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Slide Ch.4 Phụ thuộc hàm – tr.26']
},
{
  id: 'giuaki-a-38', exam: 'giuaki-a', no: 38, chapter: 'ch4', topic: '3.3',
  stem: '$F=\\{A\\to B,\\; C\\to E,\\; C\\to D\\}$, $R=\\{A,B,C,D,E\\}$. Khi đó khoá là:$\\{A,C\\}$',
  figure: null,
  options: [
    { key: 'A', text: '$\\{A,B\\}$' },
    { key: 'B', text: '$\\{A,C\\}$' },
    { key: 'C', text: '$\\{A\\}$' },
    { key: 'D', text: '$\\{B\\}$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Không có dấu khoanh chọn của người làm bài (`marked: null`); tuy nhiên đề gốc in sẵn chuỗi "{A,C}" ngay sau dấu hai chấm ở cuối câu dẫn (cùng phông chữ in, trùng phương án B).',
  explanation: 'Áp dụng thuật toán tìm khóa cải tiến (Slide Ch.4 Phụ thuộc hàm – tr.41–42, kiểm chứng bằng `fd.js`):\n1. Vế trái gồm $\\{A, C\\}$, vế phải gồm $\\{B, D, E\\}$ $\\Rightarrow$ tập thuộc tính nguồn $TN = \\{A, C\\}$, tập trung gian $TG = \\emptyset$.\n2. Vì $TG = \\emptyset$ nên khóa duy nhất là $K = TN = \\{A, C\\}$ (kiểm tra: $\\{A,C\\}^+ = \\{A,B,C,D,E\\} = R$).\nChọn **B**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42']
},
{
  id: 'giuaki-a-39', exam: 'giuaki-a', no: 39, chapter: 'ch4', topic: '3.3',
  stem: '$F=\\{A\\to B,\\; C\\to E,\\; C\\to D\\}$, $R=\\{A,B,C,D,E,F\\}$. Khi đó khoá là:',
  figure: null,
  options: [
    { key: 'A', text: '$\\{A,C,F\\}$' },
    { key: 'B', text: '$\\{A,C,F\\}$' },
    { key: 'C', text: '$\\{A,F\\}$' },
    { key: 'D', text: '$\\{F,B\\}$' }
  ],
  answer: 'A', marked: null, outside: false,
  incomplete: 'Ảnh gốc mờ khiến phương án A và B cùng đọc là `{A,C,F}` (không phân biệt được phương án nào bị đọc nhầm ký tự trong đề gốc)',
  note: 'Cả hai ảnh chụp (`169426887` và `169565781`) đều đọc được A và B giống nhau là `{A,C,F}` (có thể một trong hai phương án gốc in một chữ cái khác như `{A,C,E}` nhưng bị nhòe); theo tính toán bằng `fd.js` thì `{A,C,F}` là khóa duy nhất đúng.',
  explanation: 'Áp dụng thuật toán tìm khóa cải tiến (Slide Ch.4 Phụ thuộc hàm – tr.41–42, kiểm chứng bằng `fd.js`):\n1. Tập thuộc tính của $R$ là $\\{A,B,C,D,E,F\\}$; vế phải của $F$ chỉ có $\\{B,D,E\\}$, riêng $F$ không xuất hiện trong $F$ và $A, C$ chỉ ở vế trái.\n2. Do đó tập nguồn $TN = \\{A, C, F\\}$, tập trung gian $TG = \\emptyset$ $\\Rightarrow$ khóa duy nhất là **$\\{A, C, F\\}$** (thử lại: $\\{A,C,F\\}^+ = \\{A,B,C,D,E,F\\}$).\n- C sai vì $\\{A,F\\}^+ = \\{A,B,F\\}$ thiếu $C,D,E$; D sai vì $\\{F,B\\}^+ = \\{B,F\\}$.\n- Lưu ý cả A và B trên ảnh mờ đều đọc là `{A,C,F}` (tạm chọn A và đánh dấu thiếu dữ liệu để không tính điểm sai khi thi thử).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42']
},
{
  id: 'giuaki-a-40', exam: 'giuaki-a', no: 40, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R=\\{A,B,C\\}$ và tập các phụ thuộc hàm $F=\\{AB\\to C,\\; C\\to A\\}$. Tất cả các khoá của $R$:',
  figure: null,
  options: [
    { key: 'A', text: '$\\{A,B\\},\\{C\\}$' },
    { key: 'B', text: '$\\{A,B\\}$' },
    { key: 'C', text: '$\\{A,B\\},\\{C,B\\}$' },
    { key: 'D', text: '$\\{C,B\\}$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Ở ảnh `169426887` vùng `F={AB` hơi tối do bóng, còn ở ảnh `169565781` đọc rõ toàn bộ câu hỏi.',
  explanation: 'Áp dụng thuật toán tìm tất cả các khóa (Slide Ch.4 Phụ thuộc hàm – tr.39, 41–42, kiểm chứng bằng `fd.js`):\n1. $B$ không xuất hiện ở vế phải $\\Rightarrow$ tập nguồn $TN = \\{B\\}$, tập trung gian $TG = \\{A, C\\}$.\n2. Thử các tập con của $TG$ hợp với $TN$:\n   - $\\{B\\}^+ = \\{B\\} \\neq U$ (loại).\n   - $\\{A, B\\}^+ = \\{A, B, C\\} = U$ (do $AB \\to C$) $\\Rightarrow$ **`{A, B}` là khóa**.\n   - $\\{C, B\\}^+ = \\{A, B, C\\} = U$ (do $C \\to A$) $\\Rightarrow$ **`{C, B}` là khóa**.\n   - Tập $ABC$ chứa khóa con nên không tối thiểu.\nVậy tập tất cả các khóa của $R$ là $\\{A,B\\}, \\{C,B\\}$ (**C đúng**).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.39, 41–42']
},
{
  id: 'giuaki-a-41', exam: 'giuaki-a', no: 41, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL ?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  sameAs: ['giuaki-a-09'],
  note: 'Đề 2 – Câu 1 (trùng nội dung với Đề 1 – Câu 9, id `giuaki-a-09`). Mép trên dòng đề bị điện thoại che nhẹ trong ảnh gốc `170259249`, nhưng chữ vẫn đọc rõ; các phương án gốc ký hiệu chữ thường a, b, c, d.',
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.16 (*Đối tượng trực tiếp sử dụng CSDL*):\n- **Người phát triển ứng dụng và lập trình** chịu trách nhiệm thiết kế, xây dựng và bảo trì các phần mềm ứng dụng khai thác thông tin từ CSDL (**B đúng**).\n- Người quản trị CSDL quản lý, bảo trì hệ thống và phân quyền; người dùng cuối khai thác CSDL thông qua phần mềm.',
  source: ['Slide Ch.1 Tổng quan – tr.16']
},
{
  id: 'giuaki-a-42', exam: 'giuaki-a', no: 42, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các thuộc tính Mã nhân viên, Họ tên',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 340, y: 95, attrs: [
        { label: 'Mã NV (?)', dx: 135, dy: 0 },
        { label: 'Họ tên (?)', dx: -135, dy: 0, side: 'left',
          parts: [{ label: 'Họ (?)', dx: -110, dy: -38 }, { label: 'Tên (?)', dx: -110, dy: 38 }] }
      ] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 340, y: 95, attrs: [
        { label: 'Mã NV (?)', dx: 135, dy: 0 },
        { label: 'Họ tên (?)', kind: 'derived', dx: -135, dy: 0, side: 'left',
          parts: [{ label: 'Họ (?)', dx: -110, dy: -38 }, { label: 'Tên (?)', dx: -110, dy: 38 }] }
      ] }],
      notes: [{ text: '(viền oval/nét nối giữa trái đứt nét)', x: 250, y: 162 }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 340, y: 95, attrs: [
        { label: 'Mã NV (?)', dx: 135, dy: 0 },
        { label: 'Họ tên (?)', dx: -135, dy: 0, side: 'left',
          parts: [{ label: 'Họ (?)', dx: -110, dy: -38 }, { label: 'Tên (?)', dx: -110, dy: 38 }] }
      ] }],
      notes: [{ text: '(viền oval giữa trái hơi đậm hơn A)', x: 250, y: 162 }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 340, y: 95, attrs: [
        { label: 'Mã NV (?)', dx: 135, dy: 0 },
        { label: 'Họ tên (?)', kind: 'multi', dx: -135, dy: 0, side: 'left',
          parts: [{ label: 'Họ (?)', dx: -110, dy: -38 }, { label: 'Tên (?)', dx: -110, dy: 38 }] }
      ] }]
    } } }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc (537×403 px) quá mờ nên toàn bộ nhãn chữ trong các oval, nét gạch chân thuộc tính khóa và nét đôi/nét đứt ở 4 phương án A–D không thể đọc chắc chắn',
  note: 'Đề 2 – Câu 2 (các phương án gốc ký hiệu a, b, c, d). Các sơ đồ ER được dựng lại theo bố cục quan sát trên ảnh với nhãn phỏng đoán gắn dấu `(?)`; đặc biệt giữa A và C gần như không phân biệt được khác biệt đường nét hay gạch chân ở độ phân giải này.',
  explanation: '1. Theo quy ước mô hình ER (Slide Ch.2 – tr.7–12):\n   - `Mã nhân viên` là **thuộc tính khóa** (hình elip nét liền và có **gạch chân** tên thuộc tính).\n   - `Họ tên` thường được tách thành **thuộc tính phức hợp** gồm các thành phần nhỏ hơn (như `Họ`, `Tên`) nối bằng elip nét liền đơn (không phải elip nét đứt *suy dẫn* như ở B hay elip kép *đa trị* như ở D).\n2. Do ảnh gốc quá mờ không đọc được chữ trong từng oval cũng như vị trí dấu gạch chân (không phân biệt được sự khác nhau giữa A và C), câu hỏi được đánh dấu thiếu dữ liệu.',
  source: ['Slide Ch.2 Mô hình ER – tr.7–12']
},
{
  id: 'giuaki-a-43', exam: 'giuaki-a', no: 43, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất về ràng buộc bộ phận trong kiểu cha trong mô hình thực thể liên kết mở rộng EER.',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là cho phép một số thực thể kiểu cha không thuộc bất kỳ một kiểu con nào.' },
    { key: 'B', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là tất cả các thực thể trong kiểu cha phải là thành viên của ít nhất một kiểu con nào đó.' },
    { key: 'C', text: 'Cả a và b đều đúng.' },
    { key: 'D', text: 'Cả a và b đều sai.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  sameAs: ['giuaki-a-06'],
  note: 'Đề 2 – Câu 3 (trùng nội dung với Đề 1 – Câu 6, id `giuaki-a-06`; các phương án gốc ký hiệu chữ thường a, b, c, d).',
  explanation: 'Trong mô hình EER, ràng buộc tính đầy đủ (*completeness*) quy định một thực thể lớp cha có bắt buộc thuộc lớp con hay không:\n- **Ràng buộc bộ phận (*partial*)**: cho phép một số thực thể kiểu cha **không thuộc bất kỳ kiểu con nào** (vẽ bằng nét đơn) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc toàn phần (*total*)**: mọi thực thể lớp cha đều phải thuộc ít nhất một kiểu con (vẽ nét đôi) $\\Rightarrow$ **B sai**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề cương môn học 2023 (mục 2.4.5)']
},
{
  id: 'giuaki-a-44', exam: 'giuaki-a', no: 44, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là **sai**?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng biệt nào đó của các thực thể trong kiểu cha.' },
    { key: 'B', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down).' },
    { key: 'C', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' },
    { key: 'D', text: 'Kỹ thuật chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là specialization.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Đề 2 – Câu 4 (các phương án gốc ký hiệu chữ thường a, b, c, d).',
  explanation: 'Trong mô hình thực thể liên kết mở rộng EER:\n- **Chuyên biệt hóa (*Specialization*)** là phương pháp thiết kế **từ trên xuống (*Top-down*)**, bắt đầu từ một kiểu thực thể cha để phân tách thành các kiểu thực thể con dựa theo những đặc tính riêng biệt $\\Rightarrow$ **A, B, D đều đúng**.\n- Quá trình ngược lại — xác định kiểu thực thể cha từ các kiểu thực thể con (từ dưới lên/*Bottom-up*) — gọi là **tổng quát hóa (*Generalization*)**, không phải chuyên biệt hóa $\\Rightarrow$ khẳng định **C sai**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề cương môn học 2023 (mục 2.4.3–2.4.4)']
},
{
  id: 'giuaki-a-45', exam: 'giuaki-a', no: 45, chapter: 'ch3', topic: '2.9',
  stem: 'Cho lược đồ $R(A_1, A_2, \\dots, A_n)$, $r$ là quan hệ của $R$. Phép chèn bộ $t(a_1, a_2, \\dots, a_n)$ vào $r$ được ký hiệu như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{Insert}(R;\\; A_1=a_1,\\; A_2=a_2,\\; \\dots,\\; A_n=a_n)$' },
    { key: 'B', text: '$\\text{Insert}(R,\\; A_1=a_1,\\; A_2=a_2,\\; \\dots,\\; A_n=a_n)$' },
    { key: 'C', text: '$\\text{Insert}(r;\\; A_1=a_1,\\; A_2=a_2,\\; \\dots,\\; A_n=a_n)$' },
    { key: 'D', text: '$\\text{Insert}(r,\\; A_1=a_1,\\; A_2=a_2,\\; \\dots,\\; A_n=a_n)$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề 2 – Câu 5 (các phương án gốc ký hiệu chữ thường a, b, c, d). Dấu chấm phẩy `;` ở A, C và dấu phẩy `,` ở B, D hơi nhỏ trong ảnh gốc nhưng vẫn nhận ra sự khác biệt về chiều cao nét dấu chấm phía trên ở A, C.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5 (*1. Phép chèn (INSERT)*), phép chèn thêm bộ $t$ vào thể hiện quan hệ $r$ ($r = r \\cup t$) có cú pháp:\n$$\\text{INSERT}(r;\\; A_1=d_1,\\; A_2=d_2,\\; \\dots,\\; A_n=d_n)$$\n- Tham số đầu phải là **tên quan hệ $r$** (không dùng tên lược đồ $R$ nên loại **A, B**), và ngăn cách với danh sách cặp `Thuộc tính = giá trị` bằng **dấu chấm phẩy `;`** (loại **D** dùng dấu phẩy `,`).\nChọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5']
},
{
  id: 'giuaki-a-46', exam: 'giuaki-a', no: 46, chapter: 'ch3', topic: '2.11',
  stem: 'Phép chiếu trong biểu thức đại số quan hệ được thực hiện tốt nhất khi nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Trước khi thực hiện phép chọn, các phép theo nhóm.' },
    { key: 'B', text: 'Sau khi thực hiện phép chọn, các phép theo nhóm.' },
    { key: 'C', text: 'Sau khi thực hiện phép chọn, phân loại.' },
    { key: 'D', text: 'Trước khi thực hiện phép chọn, phân loại.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Đề 2 – Câu 6 (các phương án gốc ký hiệu chữ thường a, b, c, d). Câu này cùng ngân hàng với Đề K17 Bộ 1 – câu 21 và Bộ 2 – câu 18.',
  explanation: 'Theo quy tắc tối ưu hóa và trình tự xử lý truy vấn ĐSQH:\n1. Không thực hiện phép chiếu $\\pi$ **trước** phép chọn $\\sigma$ (loại **A, D**) vì chiếu sớm quá có thể cắt mất các cột dùng trong điều kiện lọc và chưa thu gọn số lượng bộ trước.\n2. Khi truy vấn có các phép gom nhóm/tổng hợp (**các phép theo nhóm**, `GROUP BY` / $_G\\mathcal{F}$), cần giữ lại thuộc tính phân nhóm và tính toán để thực hiện chọn lọc và gom nhóm xong mới chiếu ra các cột kết quả cuối cùng (loại **C** vì việc phân loại/sắp xếp nếu có không cần làm trước thu gọn cột).\nChọn **B**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'giuaki-a-47', exam: 'giuaki-a', no: 47, chapter: 'ch3', topic: '1.6',
  stem: 'Kết quả của các phép thao tác dữ liệu là.....',
  figure: null,
  options: [
    { key: 'A', text: 'Chuỗi dữ liệu' },
    { key: 'B', text: 'Tệp dữ liệu' },
    { key: 'C', text: 'Quan hệ' },
    { key: 'D', text: 'Cơ sở dữ liệu' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề 2 – Câu 7 (các phương án gốc ký hiệu chữ thường a, b, c, d).',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.3–29, trong mô hình CSDL quan hệ, mọi phép toán thao tác trên quan hệ — từ phép cập nhật (`INSERT`, `DEL`, `CH`) đến các phép đại số quan hệ (`chọn`, `chiếu`, `hợp`, `giao`, `trừ`, `kết nối`, `chia`) — đều nhận đầu vào là quan hệ và cho kết quả trả về là một **Quan hệ** (tính đóng của mô hình quan hệ) $\\Rightarrow$ **C đúng**.\n- A, B, D đều không phải kết quả trực tiếp của từng phép thao tác dữ liệu trong đại số quan hệ.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.3–29']
}
);
