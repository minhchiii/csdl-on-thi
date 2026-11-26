/* Giữa kì 2021–2022 (K17) – nguồn: tai-lieu-text/de/giuaki-1.md */
DB.questions.push(
{
  id: 'giuaki-1-01', exam: 'giuaki-1', no: 1, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào **đúng**?',
  figure: null,
  options: [
    { key: 'A', text: 'Tổng quát hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng biệt nào đó của các thực thể trong kiểu cha.' },
    { key: 'B', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down).' },
    { key: 'C', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' },
    { key: 'D', text: 'Kỹ thuật chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là Generalization' }
  ],
  answer: 'B', marked: 'A', outside: true, incomplete: null,
  note: 'Chữ cuối ở phương án D ("Generalization") bị cắt nhẹ phần mép phải của chữ "n" trong ảnh gốc (hiển thị gần giống "Generalizatior"). Nút radio khoanh A là lựa chọn của người làm bài trên form, không phải đáp án chính thức.',
  explanation: 'Trong mô hình EER:\n1. **Chuyên biệt hóa (*Specialization*)** là quá trình thiết kế **từ trên xuống (*Top-down*)**: xuất phát từ một kiểu thực thể cha, tách thành các kiểu thực thể con dựa trên một số đặc tính riêng biệt $\\Rightarrow$ **B đúng**.\n2. **Tổng quát hóa (*Generalization*)** là quá trình thiết kế **từ dưới lên (*Bottom-up*)**: gom nhiều kiểu thực thể có đặc điểm chung thành một kiểu thực thể cha.\n- **A sai** vì gán định nghĩa của *chuyên biệt hóa* cho *tổng quát hóa* (bẫy rất dễ chọn nhầm như dấu chọn A trên ảnh).\n- **C sai** vì mô tả ngược thành *tổng quát hóa*.\n- **D sai** vì chuyên biệt hóa là *Specialization*, còn *Generalization* là tổng quát hóa.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề cương môn học 2023 (mục 2.4.3–2.4.4)']
},
{
  id: 'giuaki-1-02', exam: 'giuaki-1', no: 2, chapter: 'ch1', topic: '1.1',
  stem: 'Cơ sở dữ liệu là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tập hợp dữ liệu được lưu trên các thiết bị lưu trữ thông tin nhằm đáp ứng nhu cầu khai thác của một hoặc nhiều người dùng.' },
    { key: 'B', text: 'Tập hợp các dữ liệu có liên quan với nhau, được lưu trữ trên các thiết bị nhớ để đáp ứng nhu cầu khai thác thông tin của nhiều người sử dụng với nhiều mục đích khác nhau' },
    { key: 'C', text: 'Tập hợp các dữ liệu không liên quan với nhau, được lưu trữ trên các thiết bị nhớ để đáp ứng nhu cầu khai thác thông tin của nhiều người sử dụng với nhiều mục đích khác nhau.' },
    { key: 'D', text: 'Tập hợp các dữ liệu được lưu trữ trong kho dữ liệu, được người quản trị sưu tập và lưu trữ trên các bộ nhớ của máy tính.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null,
  note: 'Chữ "thông" ở cuối dòng 1 phương án B và "nhiều" ở phương án A bị cắt nhẹ ở mép phải ảnh gốc nhưng vẫn đọc được rõ.',
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.10–11, **cơ sở dữ liệu (Database)** là hệ thống / tập hợp các thông tin (dữ liệu) có cấu trúc và **có liên quan với nhau**, được lưu trữ trên bộ nhớ ngoài (các thiết bị nhớ) nhằm thỏa mãn yêu cầu khai thác thông tin đồng thời của **nhiều người sử dụng với nhiều mục đích khác nhau**.\n- **A thiếu** ý dữ liệu *có liên quan với nhau* và *nhiều mục đích khác nhau*.\n- **C sai** vì nói dữ liệu *không liên quan với nhau*.\n- **D sai** vì đồng nhất với *kho dữ liệu* (Data Warehouse chỉ là một mô hình chuyên biệt).\nChọn **B**.',
  source: ['Slide Ch.1 Tổng quan – tr.10–11']
},
{
  id: 'giuaki-1-03', exam: 'giuaki-1', no: 3, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính nguyên tố (nguyên tử) là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' },
    { key: 'B', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' },
    { key: 'C', text: 'Thuộc tính có thể phân chia thành các thành phần nhỏ hơn, có ý nghĩa độc lập.' },
    { key: 'D', text: 'Thuộc tính không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa.' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.9, **thuộc tính đơn (hay nguyên tử / nguyên tố)** là thuộc tính **không thể chia nhỏ thành các phần riêng biệt nhỏ hơn**, độc lập và có ý nghĩa (VD: `MaSV`, `Giới tính`, `Điểm`, `Tuổi`).\n- **A** là định nghĩa *thuộc tính đơn trị* (tr.10).\n- **B** là định nghĩa *thuộc tính lưu trữ* (tr.11).\n- **C** là định nghĩa *thuộc tính phức hợp* (tr.9).\nChọn **D**.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–11']
},
{
  id: 'giuaki-1-04', exam: 'giuaki-1', no: 4, chapter: 'ch1', topic: '1.1',
  stem: 'Trong quá trình cập nhật dữ liệu, dữ liệu được hệ quản trị CSDL kiểm soát để đảm bảo tính chất nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Tính nhất quán.' },
    { key: 'B', text: 'Tính ràng buộc toàn vẹn.' },
    { key: 'C', text: 'Tính độc lập.' },
    { key: 'D', text: 'Tính bảo mật.' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.14 (*Các tiêu chuẩn của CSDL*): **Tính nhất quán** yêu cầu *"sau các thao tác cập nhật dữ liệu và ngay cả khi có sự cố xảy ra $\\Rightarrow$ dữ liệu trong CSDL phải đảm bảo được tính đúng đắn"* $\\Rightarrow$ chọn **A**.\n- **Tính toàn vẹn** (Slide Ch.1 tr.14 không gọi là "Tính ràng buộc toàn vẹn") kiểm tra giá trị lưu trữ thỏa mãn ràng buộc miền/khóa/tham chiếu.\n- **C** (*Tính độc lập*) là dữ liệu độc lập với ứng dụng và lưu trữ; **D** (*Tính bảo mật*) là ngăn truy xuất trái phép.',
  source: ['Slide Ch.1 Tổng quan – tr.14']
},
{
  id: 'giuaki-1-05', exam: 'giuaki-1', no: 5, chapter: 'ch4', topic: '1.7',
  stem: 'Chọn khẳng định đúng nhất về khái niệm phụ thuộc hàm.',
  figure: null,
  options: [
    { key: 'A', text: 'X xác định hàm Y nếu các giá trị của X xác định các giá trị của Y.' },
    { key: 'B', text: 'X xác định hàm Y nếu với mọi t1 và t2 bất kỳ thuộc R mà t1[X] = t2[X] thì t1[Y] = t2[Y]' },
    { key: 'C', text: 'X xác định hàm Y nếu t1 và t2 trùng nhau trên Y thì cũng trùng nhau trên X' },
    { key: 'D', text: '[Ảnh gốc bị cắt]' }
  ],
  answer: null, marked: 'B', outside: false,
  incomplete: 'Ảnh gốc bị cắt hoàn toàn phương án D ở mép dưới (không loại trừ khả năng D là "Cả A và B đều đúng" hoặc phát biểu đầy đủ hơn)',
  note: 'Trong ảnh gốc chỉ thấy mép trên nút radio của phương án D. Nút radio B được người làm bài chọn.',
  explanation: 'Theo định nghĩa phụ thuộc hàm (Slide Ch.4 Phụ thuộc hàm – tr.4): $X$ xác định hàm $Y$ ($X \\to Y$) nếu với mọi quan hệ $r$ xác định trên $R(U)$ và với mọi cặp bộ $t_1, t_2$ bất kỳ mà $t_1[X] = t_2[X]$ thì $t_1[Y] = t_2[Y]$.\n- Trong 3 phương án đọc được: **B** khớp gần như nguyên văn định nghĩa hình thức; **A** diễn đạt nôm na (chưa chặt chẽ bằng B); **C** đảo ngược thành $Y \\to X$ nên sai.\n- Tuy nhiên, vì câu hỏi yêu cầu chọn khẳng định *"đúng nhất"* và phương án **D** bị cắt hoàn toàn ở mép dưới ảnh nên không thể loại trừ khả năng D là *"Cả A và B đều đúng"* hoặc bản phát biểu đầy đủ có nhắc *"với mọi quan hệ $r$ trên $R(U)$"*, do đó chưa chốt đáp án.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.4']
},
{
  id: 'giuaki-1-06', exam: 'giuaki-1', no: 6, chapter: 'ch4', topic: '3.1',
  stem: 'Suy diễn nào dưới đây áp dụng quy tắc tách trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$' },
    { key: 'B', text: 'Nếu $A\\to B$ và $BC \\to D$ thì $AC \\to D$' },
    { key: 'C', text: 'Nếu $A \\to B$ và $B\\to C$ thì $A \\to C$' },
    { key: 'D', text: 'Nếu $A \\to BC$ thì $A \\to C$ và $A\\to B$' }
  ],
  answer: 'D', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.9–10 (*Hệ tiên đề Armstrong và các luật mở rộng*):\n- **Luật tách (*Decomposition*)**: Nếu $X \\to Y$ và $Z \\subseteq Y$ thì $X \\to Z$. Áp dụng với $A \\to BC$: tách vế phải $BC$ thành hai PTH có vế phải 1 thuộc tính là $A \\to C$ và $A \\to B$ $\\Rightarrow$ **D đúng**.\n- **A** là *luật hợp* (tr.10).\n- **B** là *luật tựa bắc cầu* (tr.10 — đây là phương án người làm bài chọn nhầm).\n- **C** là *luật bắc cầu* (tr.9).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10']
},
{
  id: 'giuaki-1-07', exam: 'giuaki-1', no: 7, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: KHACH(MaKhach, Hoten,Diachi, DienThoai); HOADON(SoHD,NgaylapHD,Ngayban, MaKhach); HANG(Mahang,TenHang, DonGia, Donvitinh); ChitietHD(SoHD,MaHang, SLBan). Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Lấy thông tin gồm số hóa đơn, tên hàng, số lượng hàng đã bán được cho khách hàng KH007 trong năm 2020"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{Hoten,\\; DienThoai}(\\sigma_{(month(ngaylapHD)=5\\text{ OR }month(ngaylapHD)=7))\\text{AND }year(ngaylapHD)=2020}(HoaDon*Khach))$' },
    { key: 'B', text: '$\\pi_{Hoten,\\; DienThoai}(\\sigma_{month(ngaylapHD)=5\\text{ OR }month(ngaylapHD)=7)\\text{AND }year(ngaylapHD)=2020}(HoaDon*Khach))$' },
    { key: 'C', text: '$\\pi_{Hoten,\\; DienThoai}(\\sigma_{month(ngaylapHD)=5\\text{ OR }month(ngaylapHD)=7)\\text{ OR }year(ngaylapHD)=2020}(HoaDon*Khach))$' },
    { key: 'D', text: '$\\pi_{Hoten,\\; DienThoai}(\\sigma_{(month(ngaylapHD)=5\\cup month(ngaylapHD)=7)\\cap year(ngaylapHD)=2020}(HoaDon*Khach))$' }
  ],
  answer: null, marked: 'A', outside: false,
  incomplete: 'Đề gốc ghép nhầm phương án của câu hỏi khác (câu hỏi yêu cầu KH007 năm 2020 nhưng cả 4 phương án A–D đều lọc tháng 5 hoặc 7 và chiếu Hoten, DienThoai trên HoaDon*Khach)',
  note: 'Lỗi biên tập từ ảnh đề gốc MS Forms: phần đề bài hỏi hóa đơn của khách hàng `KH007` năm `2020`, nhưng 4 biểu thức A–D trong ảnh lại thuộc câu truy vấn khách hàng mua hàng vào tháng 5 hoặc tháng 7 năm 2020; ngoài ra ngoặc đơn trong chỉ số dưới của A–C cũng không cân. Nút radio C, D bị cắt ở đáy ảnh nhưng toàn bộ chữ A–D trong ảnh chèn đều đọc được.',
  explanation: '1. Theo đề bài (*lấy số hóa đơn, tên hàng, số lượng đã bán cho khách hàng KH007 năm 2020*), biểu thức đại số quan hệ đúng phải kết nối `ChitietHD * HOADON * HANG`, chọn điều kiện `MaKhach = \'KH007\' AND year(NgaylapHD) = 2020`, rồi chiếu lên `(SoHD, TenHang, SLBan)`:\n$$\\pi_{SoHD,\\; TenHang,\\; SLBan}(\\sigma_{MaKhach=\\text{\'KH007\'} \\land year(NgaylapHD)=2020}(ChitietHD * HOADON * HANG))$$\n2. Cả 4 phương án A–D trong ảnh gốc lại thực hiện trên `HoaDon * Khach`, lọc `month(ngaylapHD) = 5` / `7` và chiếu `Hoten, DienThoai` — hoàn toàn không khớp với yêu cầu của đề nên không có đáp án đúng.\n3. Lưu ý thêm về cú pháp: ngay cả khi xét theo câu tháng 5/7 bị ghép nhầm, D dùng sai ký hiệu tập hợp $\\cup, \\cap$ thay cho phép logic `OR`/`AND`, C dùng sai `OR` trước `year`, còn A và B đều viết thiếu/thừa dấu ngoặc đơn ở chỉ số dưới.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'giuaki-1-08', exam: 'giuaki-1', no: 8, chapter: 'ch1', topic: '1.1',
  stem: 'Chọn phát biểu đúng nhất: Thiết kế CSDL là ...',
  figure: null,
  options: [
    { key: 'A', text: 'quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' },
    { key: 'B', text: 'quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'C', text: 'quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' },
    { key: 'D', text: 'quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null,
  note: 'Ô số thứ tự câu 8 bị cắt ở mép trên ảnh gốc; xác định là Câu 8 do nằm ngay sau Câu 7 và trước Câu 9.',
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.29–30 (*Các bước xây dựng một hệ CSDL*), xây dựng CSDL đi từ mô tả thế giới thực ở mức khái niệm (mô hình ER) sang mức logic (biểu diễn thành các quan hệ trong CSDL quan hệ) rồi cài đặt mức vật lý. Do đó phát biểu **đúng nhất** mô tả trọn vẹn bản chất thiết kế CSDL trong ngân hàng câu hỏi là **B** (*quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ...*).\n- **A** chỉ mới nhắc phần *chọn tập lược đồ phù hợp* (ý ở đầu Slide Ch.4 Tổng quan tr.3 về thiết kế lược đồ quan hệ), chưa nêu bước mô hình hóa từ thế giới thực.\n- **C sai** vì chuẩn hóa là đưa từ dạng chuẩn *thấp* lên dạng chuẩn *cao*.\n- **D** phiến diện, không phải mọi thiết kế đều chỉ là chia nhỏ quan hệ.',
  source: ['Slide Ch.1 Tổng quan – tr.29–30']
},
{
  id: 'giuaki-1-09', exam: 'giuaki-1', no: 9, chapter: 'ch2', topic: '2.4',
  stem: 'Mô hình thực thể liên kết (ER) nào biểu diễn chính xác mô tả sau: "Mỗi nhân viên của công ty có một mã số nhân viên duy nhất, mã số nhân viên xác định các thông tin như: họ tên, ngày sinh, giới tính. Mỗi nhân viên chịu sự quản lý hành chính của một phòng ban. Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban"?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 95, attrs: [
          { label: 'Ngày sinh', dx: 0, dy: -62 },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 62 },
          { label: 'Họ tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -68, dy: -42 }, { label: 'Tên', dx: -68, dy: 42 }] }
        ] },
        { id: 'pb', label: 'PHÒNG', x: 475, y: 95, attrs: [
          { label: 'Tên phòng', dx: 0, dy: -62 },
          { label: 'Mã Phòng', kind: 'key', dx: 0, dy: 62 }
        ] }
      ],
      rels: [{ id: 'th', label: 'Thuộc', x: 345, y: 95, links: [{ to: 'nv', card: 'n', total: true }, { to: 'pb', card: '1', total: true }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 95, attrs: [
          { label: 'Ngày sinh', dx: 0, dy: -62 },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 62 },
          { label: 'Họ tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -68, dy: -42 }, { label: 'Tên', dx: -68, dy: 42 }] }
        ] },
        { id: 'pb', label: 'PHÒNG', x: 475, y: 95, attrs: [
          { label: 'Tên phòng', dx: 0, dy: -62 },
          { label: 'Mã Phòng', kind: 'key', dx: 0, dy: 62 }
        ] }
      ],
      rels: [{ id: 'th', label: 'Thuộc', x: 345, y: 95, links: [{ to: 'nv', card: 'n', total: false }, { to: 'pb', card: '1', total: false }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 95, attrs: [
          { label: 'Ngày sinh', dx: 0, dy: -62 },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 62 },
          { label: 'Họ tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -68, dy: -42 }, { label: 'Tên', dx: -68, dy: 42 }] }
        ] },
        { id: 'pb', label: 'PHÒNG', x: 475, y: 95, attrs: [
          { label: 'Tên phòng', dx: 0, dy: -62 },
          { label: 'Mã Phòng', kind: 'key', dx: 0, dy: 62 }
        ] }
      ],
      rels: [{ id: 'th', label: 'Thuộc', x: 345, y: 95, links: [{ to: 'nv', card: '1', total: false }, { to: 'pb', card: '1', total: true }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 95, attrs: [
          { label: 'Ngày sinh', dx: 0, dy: -62 },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 62 },
          { label: 'Họ tên', side: 'left', dx: -115, dy: 0, parts: [{ label: 'Họ', dx: -68, dy: -42 }, { label: 'Tên', dx: -68, dy: 42 }] }
        ] },
        { id: 'pb', label: 'PHÒNG', x: 475, y: 95, attrs: [
          { label: 'Tên phòng', dx: 0, dy: -62 },
          { label: 'Mã Phòng', kind: 'key', dx: 0, dy: 62 }
        ] }
      ],
      rels: [{ id: 'th', label: 'Thuộc', x: 345, y: 95, links: [{ to: 'nv', card: '1', total: false }, { to: 'pb', card: '1', total: false }] }]
    } } }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Ảnh gốc có độ phân giải thấp: các đường tham gia toàn bộ ở A (hai phía của `Thuộc`) và ở C (phía `PHÒNG`) hiển thị thành nét đậm/dày hơn so với nét đơn mảnh ở B và D nên được hiểu là nét đôi (tương tự cách vẽ ở các đề ngân hàng cùng đợt như K17). Cả 4 sơ đồ đều thiếu thuộc tính `Giới tính` được nhắc trong đề; mép dưới sơ đồ D và nút radio C, D bị cắt nhẹ ở đáy ảnh.',
  explanation: '1. **Bản số liên kết** (Slide Ch.2 Mô hình ER – tr.20): Một nhân viên chỉ chịu sự quản lý hành chính của **1** phòng ban, còn một phòng ban có **nhiều ($n$)** nhân viên $\\Rightarrow$ liên kết `Thuộc` có bản số **`n` phía `NHÂN VIÊN` và `1` phía `PHÒNG`**. Loại **C** và **D** vì ghi sai thành `1:1`.\n2. **Ràng buộc tham gia** (Slide Ch.2 – tr.22–23): *"Mỗi nhân viên chịu sự quản lý hành chính của một phòng ban"* nghĩa là mọi nhân viên đều bắt buộc thuộc một phòng ban (**tham gia toàn bộ = nét đôi/đậm** phía `NHÂN VIÊN`), còn **B** chỉ vẽ nét đơn mảnh (tham gia bộ phận) ở cả hai phía. Do đó chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–23']
},
{
  id: 'giuaki-1-10', exam: 'giuaki-1', no: 10, chapter: 'ch2', topic: null,
  stem: '[Ảnh gốc bị cắt hoàn toàn phần đề bài và phương án A]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: 'B (nội dung nằm trong ảnh đề bị cắt)' },
    { key: 'C', text: 'C (nội dung nằm trong ảnh đề bị cắt)' },
    { key: 'D', text: 'D (nội dung nằm trong ảnh đề bị cắt)' }
  ],
  answer: null, marked: 'B', outside: false,
  incomplete: 'Ảnh gốc bị cắt hoàn toàn phần đề bài (ảnh chèn) và nút chọn A; chỉ thấy 3 nút chọn B, C, D ngay trước Câu 11',
  note: 'Số thứ tự 10 suy ra từ vị trí ngay trước Câu 11. Vì mất toàn bộ phần câu hỏi nên không xác định được chương/chủ đề thực tế (tạm đặt `chapter: ch2` và `topic: null` để hợp lệ lược đồ dữ liệu). Nút radio B được người làm bài chọn.',
  explanation: 'Trong ảnh chụp gốc (`277290698_...`), phần khung câu hỏi và toàn bộ nội dung 4 phương án A–D (vốn nằm trong ảnh chèn trên MS Forms) cùng nút radio A đều bị cắt mất phía trên khung hình; chỉ thấy 3 nút chọn `B`, `C`, `D` (trong đó `B` được tô xanh) nằm ngay phía trên Câu 11. Không đủ dữ liệu để xác định chương, nội dung câu hỏi và đáp án.',
  source: ['Ảnh chụp đề giữa kỳ 1 (thiếu dữ liệu)']
}
);

DB.questions.push(
{
  id: 'giuaki-1-11', exam: 'giuaki-1', no: 11, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào biểu diễn chính xác mô tả sau: "Một sinh viên học tập nhiều giảng viên và một giảng viên giảng dạy nhiều sinh viên"?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: 'GIẢNG VIÊN', x: 75, y: 80 }, { id: 'sv', label: 'SINH VIÊN', x: 455, y: 80 }],
      rels: [{ id: 'gd', label: 'Giảng dạy/ Học tập', x: 265, y: 80, links: [{ to: 'gv', card: '1' }, { to: 'sv', card: 'n' }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: 'GIẢNG VIÊN', x: 75, y: 80 }, { id: 'sv', label: 'SINH VIÊN', x: 455, y: 80 }],
      rels: [{ id: 'gd', label: 'Giảng dạy/ Học tập', x: 265, y: 80, links: [{ to: 'gv', card: 'm' }, { to: 'sv', card: 'n' }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: 'GIẢNG VIÊN', x: 75, y: 80 }, { id: 'sv', label: 'SINH VIÊN', x: 455, y: 80 }],
      rels: [{ id: 'gd', label: 'Giảng dạy/ Học tập', x: 265, y: 80, links: [{ to: 'gv', card: 'n' }, { to: 'sv', card: '1' }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: 'GIẢNG VIÊN', x: 75, y: 80 }, { id: 'sv', label: 'SINH VIÊN', x: 455, y: 80 }],
      rels: [{ id: 'gd', label: 'Giảng dạy/ Học tập', x: 265, y: 80, attrs: [{ label: 'Điểm', dx: 0, dy: -62 }],
        links: [{ to: 'gv', card: 'm' }, { to: 'sv', card: 'n' }] }]
    } } }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.21 (*Kiểu liên kết M–N*): khi 1 thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, ta ký hiệu **`m` và `n`** ở hai đầu liên kết.\n- Một sinh viên học nhiều giảng viên và một giảng viên dạy nhiều sinh viên $\\Rightarrow$ quan hệ **nhiều–nhiều (`m : n`)**, loại **A** (`1:n`) và **C** (`n:1`).\n- Mô tả đề bài **không** nhắc tới thuộc tính `Điểm` nên loại **D** (thêm thừa thuộc tính `Điểm` vào liên kết).\nChọn **B**.',
  source: ['Slide Ch.2 Mô hình ER – tr.17, 21']
},
{
  id: 'giuaki-1-12', exam: 'giuaki-1', no: 12, chapter: 'ch3', topic: '1.5',
  stem: 'Hai bảng trong một CSDL quan hệ liên kết với nhau thông qua:',
  figure: null,
  options: [
    { key: 'A', text: 'địa chỉ của các bảng.' },
    { key: 'B', text: 'các trường dữ liệu cùng tên.' },
    { key: 'C', text: 'thuộc tính khóa chính và khóa ngoại.' },
    { key: 'D', text: 'các thuộc tính cùng tên.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null,
  note: 'Ô số thứ tự câu 12 bị cắt ở mép trên ảnh `277076412_...`, nhưng thấy số "12" ở đáy ảnh `277290698_...` ngay trước đó.',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.13 (*Khóa ngoại*): *"Khóa ngoại dùng để thể hiện mối quan hệ giữa các bảng, giúp tham chiếu dữ liệu hay kết nối các quan hệ trong một cơ sở dữ liệu với nhau."* Đặc biệt, khóa ngoại **không cần cùng tên** với khóa chính mà chỉ cần cùng kiểu dữ liệu và tham chiếu tới giá trị của **khóa chính** bảng kia (nên loại B và D; loại A vì không liên kết bằng địa chỉ vật lý). Chọn **C**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.13']
},
{
  id: 'giuaki-1-13', exam: 'giuaki-1', no: 13, chapter: 'ch3', topic: '1.6',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: "Trong biểu thức đại số quan hệ, các toán hạng là ... trong CSDL quan hệ".',
  figure: null,
  options: [
    { key: 'A', text: 'các phần tử' },
    { key: 'B', text: 'các phụ thuộc hàm' },
    { key: 'C', text: 'các quan hệ' },
    { key: 'D', text: 'các thuộc tính' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9–35: đại số quan hệ là tập các phép toán tác động lên **các quan hệ** ($r \\cup s$, $r \\cap s$, $r - s$, $r \\times s$, $\\pi_X(r)$, $\\sigma_F(r)$, $r \\div s$, $r \\bowtie s$), nhận đầu vào là một hoặc hai quan hệ và trả về một quan hệ mới. Vậy các toán hạng là **các quan hệ** $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24']
},
{
  id: 'giuaki-1-14', exam: 'giuaki-1', no: 14, chapter: 'ch3', topic: '2.7',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển kiểu thực thể KHÁCH HÀNG từ mô hình thực thể liên kết (ER) sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 230, y: 55, attrs: [
      { label: 'Họ tên', dx: -135, dy: 0 },
      { label: 'Mã Khách', kind: 'key', dx: 135, dy: 0 }
    ] }],
    notes: [{ text: '… (phần dưới sơ đồ ER bị cắt trong ảnh gốc) …', x: 230, y: 115 }]
  } },
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: '[Ảnh gốc bị cắt]' },
    { key: 'D', text: 'KH...(MaKhach, Ho, Ten, ...) [Ảnh gốc bị cắt nửa trên chữ]' }
  ],
  answer: null, marked: 'C', outside: false,
  incomplete: 'Ảnh gốc bị cắt phần dưới sơ đồ ER, toàn bộ phương án A–C và nửa trên dòng chữ phương án D',
  note: 'Trong ảnh `277076412_...` chỉ thấy phần trên sơ đồ (`Họ tên` – `KHÁCH HÀNG` – `Mã Khách` gạch chân, kèm các nét đi xuống bị cắt); trong ảnh `277364208_...` chỉ thấy nửa dưới dòng chữ phương án D và 4 nút radio (khoanh C).',
  explanation: 'Theo quy tắc chuyển kiểu thực thể mạnh sang lược đồ quan hệ (Slide Ch.3 Mô hình quan hệ P1 – tr.17): giữ nguyên thuộc tính khóa (`Mã Khách`), liệt kê các thuộc tính đơn lưu trữ và tách thuộc tính phức hợp (nếu `Họ tên` phân rã thành `Họ`, `Tên` ở phần dưới bị cắt), còn nếu có thuộc tính đa trị ở phần dưới sẽ tách thành bảng riêng (tr.27).\nTuy nhiên, do phần dưới của sơ đồ ER cùng toàn bộ phương án A, B, C bị cắt mất và phương án D bị cắt nửa trên dòng chữ nên không đủ dữ kiện để xác định đáp án.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.17, 27']
},
{
  id: 'giuaki-1-15', exam: 'giuaki-1', no: 15, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F = \\{A\\to B,\\; C\\to X,\\; BX \\to Z\\}$. Khi đó:',
  figure: null,
  options: [
    { key: 'A', text: '$AB \\to C$ thuộc $F^+$' },
    { key: 'B', text: '$A \\to Z$ thuộc $F^+$' },
    { key: 'C', text: '$AC \\to Z$ thuộc $F^+$' },
    { key: 'D', text: '$CX \\to Z$ thuộc $F^+$' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng bài toán thành viên (tính bao đóng vế trái theo Slide Ch.4 Phụ thuộc hàm – tr.16–18):\n- **C** ($AC \\to Z$): tính $(AC)^+$:\n  - $X_0 = AC$.\n  - Dùng $A \\to B$: $X_1 = ABC$.\n  - Dùng $C \\to X$: $X_2 = ABCX$.\n  - Dùng $BX \\to Z$: $X_3 = ABCXZ$.\n  - Vì $Z \\in (AC)^+$ nên **$AC \\to Z \\in F^+$** (có thể suy diễn trực tiếp bằng Armstrong: $A\\to B \\Rightarrow AC\\to BC$, kết hợp $C\\to X$ được $AC\\to BX$, bắc cầu với $BX\\to Z$ ra $AC\\to Z$). **C đúng**.\n- Kiểm tra các phương án khác: $(AB)^+ = AB$ (không chứa $C$, loại A); $A^+ = AB$ (không chứa $Z$, loại B); $(CX)^+ = CX$ (không chứa $Z$, loại D).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10, 16–18']
},
{
  id: 'giuaki-1-16', exam: 'giuaki-1', no: 16, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm không đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: 'Mã tài sản, Mã phòng, Ngày phân phối $\\to$ Tên phòng' },
    { key: 'B', text: 'Mã sinh viên, Mã môn học, Lần thi $\\to$ Điểm thi' },
    { key: 'C', text: 'Mã tài sản, Mã phòng, Ngày phân phối $\\to$ Số lượng phân phối' },
    { key: 'D', text: 'Số phiếu, Mã dịch vụ $\\to$ Số lượng' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL – tr.6: $Y$ phụ thuộc hàm **đầy đủ** vào $X$ nếu $X \\to Y \\in F^+$ và với mọi tập con thực sự $X\' \\subset X$ thì $X\' \\to Y \\notin F^+$. Ngược lại, **không đầy đủ** nếu đã có tập con thực sự $X\' \\subset X$ xác định được $Y$.\n- Xét **A**: chỉ cần tập con `{Mã phòng}` $\\subset$ `{Mã tài sản, Mã phòng, Ngày phân phối}` đã xác định duy nhất `Tên phòng` (`Mã phòng` $\\to$ `Tên phòng`), nên đây là **phụ thuộc hàm không đầy đủ** $\\Rightarrow$ **A đúng**.\n- B (`Điểm thi` phụ thuộc đủ cả SV, môn và lần thi), C (`Số lượng phân phối` phụ thuộc đủ tài sản, phòng và ngày phân phối), D (`Số lượng` phụ thuộc đủ số phiếu và mã dịch vụ) đều là phụ thuộc hàm đầy đủ.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6']
},
{
  id: 'giuaki-1-17', exam: 'giuaki-1', no: 17, chapter: 'ch4', topic: '3.4',
  stem: 'Cho $R(U,F)$ với $F=\\{AB\\to C\\text{ và }A\\to B\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Không dư thừa thuộc tính $A$ ở vế trái của $AB\\to C$' },
    { key: 'B', text: 'Dư thừa thuộc tính $B$ ở vế trái của $AB\\to C$' },
    { key: 'C', text: 'Dư thừa thuộc tính $A$ ở vế trái của $AB\\to C$' },
    { key: 'D', text: 'Dư thừa thuộc tính $C$ trong $AB\\to C$' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null,
  note: 'Lưu ý đề gốc: về mặt toán học, phương án A ("Không dư thừa thuộc tính A ở vế trái của AB->C") cũng đúng vì $B^+ = B$ không chứa $C$; tuy nhiên câu hỏi kiểm tra việc nhận diện thuộc tính bị dư thừa ở vế trái theo bước 2 tìm phủ tối thiểu nên đáp án trọng tâm là B (dư thừa $B$). Nút radio C là lựa chọn nhầm của người làm bài.',
  explanation: 'Áp dụng quy tắc kiểm tra thuộc tính dư thừa ở vế trái (Slide Ch.4 Phụ thuộc hàm – tr.26):\n1. Thử bỏ $B$ ở vế trái của $AB \\to C$, tính bao đóng $A^+$ theo $F$: $X_0 = A \\xrightarrow{A\\to B} X_1 = AB \\xrightarrow{AB\\to C} X_2 = ABC \\supseteq \\{C\\}$. Vì $A \\to C \\in F^+$ nên **thuộc tính $B$ dư thừa ở vế trái của $AB \\to C$** ($F_{tt} = \\{A\\to B,\\; A\\to C\\}$) $\\Rightarrow$ **B đúng**.\n2. Thử bỏ $A$: $B^+ = B$ không chứa $C$, nên **$A$ không dư thừa** (loại C; ghi nhận A cũng là mệnh đề đúng về $A$).\n3. Loại **D** vì $C$ nằm ở vế phải, không xét dư thừa theo vế trái.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26']
},
{
  id: 'giuaki-1-18', exam: 'giuaki-1', no: 18, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{ C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '1NF' },
    { key: 'B', text: '2NF' },
    { key: 'C', text: '3NF' },
    { key: 'D', text: 'BCNF' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Thực hiện theo thuật toán xác định dạng chuẩn cao nhất (Slide Ch.4 Chuẩn hóa CSDL – tr.8, 15, 37):\n1. **Tìm khóa** (Slide Ch.4 PTH – tr.41–42): tập nguồn $TN = \\{C, E\\}$ (chỉ xuất hiện ở vế trái), tập trung gian $TG = \\{B\\}$ ($A,D,G,H,K$ chỉ ở vế phải). Tính $(CE)^+$:\n   - $X_0 = CE \\xrightarrow{C\\to AD} ACDE \\xrightarrow{E\\to BH} ABCDEH \\xrightarrow{B\\to K} ABCDEHK \\xrightarrow{CE\\to G} ABCDEGHK = U$.\n   Vậy $R$ có **khóa duy nhất $K = CE$**. Thuộc tính khóa: $C, E$; thuộc tính không khóa: $A, B, D, G, H, K$.\n2. **Kiểm tra 2NF**: xét các tập con thực sự của khóa $CE$:\n   - $C^+ = \\{A, C, D\\}$ chứa thuộc tính không khóa $A, D$.\n   - $E^+ = \\{B, E, H, K\\}$ chứa thuộc tính không khóa $B, H, K$.\n   Vì tồn tại thuộc tính không khóa phụ thuộc bộ phận vào khóa ($C \\to AD$, $E \\to BHK$), $R$ **không đạt 2NF**.\n3. Theo quy ước mặc định (tr.8), dạng chuẩn cao nhất của $R$ là **1NF** $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.8, 13–15, 37', 'Slide Ch.4 Phụ thuộc hàm – tr.41–42']
}
);

DB.questions.push(
{
  id: 'giuaki-1-19', exam: 'giuaki-1', no: 19, chapter: 'ch2', topic: '2.2',
  stem: '[Ảnh gốc bị cắt hoàn toàn phần đề bài và sơ đồ phương án A, B]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'top', label: '… (phần trên bị cắt)', x: 160, y: 25, attrs: [
        { label: 'Ngày', kind: 'derived', dx: -85, dy: 58 },
        { label: 'Tháng', kind: 'derived', dx: 0, dy: 58 },
        { label: 'Năm', kind: 'derived', dx: 85, dy: 58 }
      ] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'sv', label: 'SINH VIÊN', x: 280, y: 60, attrs: [
        { label: 'Mã SV', kind: 'key', dx: 115, dy: 0 },
        { label: 'Ngày sinh', kind: 'derived', side: 'bottom', dx: -130, dy: 0, parts: [
          { label: 'Ngày', dx: -75, dy: 58 },
          { label: 'Tháng', dx: 0, dy: 58 },
          { label: 'Năm', dx: 75, dy: 58 }
        ] }
      ] }]
    } } }
  ],
  answer: null, marked: 'A', outside: false,
  incomplete: 'Ảnh gốc bị cắt toàn bộ đề bài, sơ đồ phương án A, B và phần trên sơ đồ C',
  note: 'Ở đáy ảnh `277187699_...` thấy số "19"; đầu ảnh `277252993_...` chỉ còn thấy 3 hình elip nét đứt `Ngày`, `Tháng`, `Năm` của C, toàn bộ sơ đồ D (`SINH VIÊN` có `Mã SV` gạch chân và `Ngày sinh` nét đứt phức hợp) cùng 4 nút radio (khoanh A).',
  explanation: 'Quan sát phần sơ đồ còn đọc được ở **C** và **D**:\n- **D** vẽ `SINH VIÊN` với khóa `Mã SV` (elip nét liền, gạch chân), còn `Ngày sinh` vẽ bằng **elip nét đứt** (ký hiệu *thuộc tính suy dẫn*, Slide Ch.2 Mô hình ER – tr.11) kèm 3 thuộc tính con `Ngày`, `Tháng`, `Năm` (elip nét liền).\n- **C** vẽ 3 thuộc tính con `Ngày`, `Tháng`, `Năm` bằng **elip nét đứt**.\n- Nếu đề hỏi biểu diễn thực thể `SINH VIÊN` với khóa `Mã SV` và thuộc tính phức hợp `Ngày sinh` (`Ngày`, `Tháng`, `Năm`) thì cả C và D đều vẽ sai ký hiệu nét đứt (phải dùng elip nét liền cho thuộc tính lưu trữ/phức hợp); tuy nhiên do đề bài cùng toàn bộ phương án A, B bị cắt mất nên không thể xác định đáp án.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–12']
},
{
  id: 'giuaki-1-20', exam: 'giuaki-1', no: 20, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{ C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. Các siêu khóa có thể của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BC,\\; BCG$' },
    { key: 'B', text: '$CE,\\; BCE$' },
    { key: 'C', text: '$EB,\\; EBA$' },
    { key: 'D', text: '$AD,\\; BA$' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42: tập $K \\subseteq U$ là **siêu khóa** của $R$ khi $K^+ = U = ABCDEGHK$.\n1. Tìm tập nguồn $TN = \\{C, E\\}$ (chỉ ở vế trái). Tính $(CE)^+$:\n   - $X_0 = CE \\xrightarrow{C\\to AD} ACDE \\xrightarrow{E\\to BH} ABCDEH \\xrightarrow{B\\to K} ABCDEHK \\xrightarrow{CE\\to G} ABCDEGHK = U$.\n   Vậy $CE$ là khóa duy nhất, và mọi tập chứa $CE$ như $BCE$ đều có $(BCE)^+ = U$ $\\Rightarrow$ **B đúng**.\n2. Kiểm tra các phương án khác:\n   - **A**: $(BC)^+ = ABCDK$, $(BCG)^+ = ABCDGK$ (đều thiếu $E, H$).\n   - **C**: $(EB)^+ = BEHK$, $(EBA)^+ = ABEHK$ (đều thiếu $C, D, G$).\n   - **D**: $(AD)^+ = AD$, $(BA)^+ = ABK$ (thiếu nhiều thuộc tính).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42']
},
{
  id: 'giuaki-1-21', exam: 'giuaki-1', no: 21, chapter: 'ch3', topic: '1.6',
  stem: 'Phép kết nối là phép toán được dùng để kết hợp:',
  figure: null,
  options: [
    { key: 'A', text: 'các cột thỏa mãn điều kiện cho trước với nhau từ hai quan hệ.' },
    { key: 'B', text: 'các bộ thỏa mãn điều kiện cho trước với nhau từ hai quan hệ.' },
    { key: 'C', text: 'các bộ không thỏa mãn điều kiện cho trước với nhau từ hai quan hệ.' },
    { key: 'D', text: 'các cột không thỏa mãn điều kiện cho trước với nhau từ hai quan hệ.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.35 (*Phép kết nối – Join*): *"Phép nối được ký hiệu là $\\bowtie$ và được dùng để **kết hợp các bộ có liên hệ với nhau từ hai quan hệ thành một bộ**... Mỗi bộ của $q$ là tổ hợp của 2 bộ trong $r$ và $s$, **thỏa mãn điều kiện nối** có dạng $A_i \\theta B_j$."* Do đó phép kết nối ghép **các bộ thỏa mãn điều kiện cho trước** từ hai quan hệ $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.35']
},
{
  id: 'giuaki-1-22', exam: 'giuaki-1', no: 22, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{AB\\to CD,\\; B\\to C,\\; C\\to D\\}$. Phủ tối thiểu của $F$ là?',
  figure: null,
  options: [
    { key: 'A', text: '$F_{tt}= \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'B', text: '$F_{tt}= \\{A\\to C,\\; C\\to D\\}$' },
    { key: 'C', text: '$F_{tt}= \\{B\\to C,\\; A\\to D\\}$' },
    { key: 'D', text: '$F_{tt}= \\{B\\to D,\\; C\\to D\\}$' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm phủ tối thiểu (chính là Ví dụ 1 ở Slide Ch.4 Phụ thuộc hàm – tr.26–28):\n1. **Bước 1 (tách vế phải về 1 thuộc tính)**:\n   $F_1 = \\{AB \\to C,\\; AB \\to D,\\; B \\to C,\\; C \\to D\\}$.\n2. **Bước 2 (loại thuộc tính dư thừa ở vế trái)**:\n   - Xét $AB \\to C$: bỏ $A$ còn $B$, tính $B^+ = BCD \\supseteq \\{C\\}$ $\\Rightarrow$ dư $A$, thay bằng $B \\to C$ (trùng với $B \\to C$ sẵn có).\n   - Xét $AB \\to D$: bỏ $A$ còn $B$, tính $B^+ = BCD \\supseteq \\{D\\}$ $\\Rightarrow$ dư $A$, thay bằng $B \\to D$.\n   - Tập còn: $F_2 = \\{B \\to C,\\; B \\to D,\\; C \\to D\\}$.\n3. **Bước 3 (loại phụ thuộc hàm dư thừa)**:\n   - Xét $B \\to D$: trên $F_2 \\setminus \\{B \\to D\\} = \\{B \\to C,\\; C \\to D\\}$ có $B^+ = BCD \\supseteq \\{D\\}$ $\\Rightarrow$ loại $B \\to D$.\n   - Hai PTH còn lại $B \\to C$ và $C \\to D$ đều không suy ra được từ phần còn lại.\nVậy phủ tối thiểu là **$F_{tt} = \\{B\\to C,\\; C\\to D\\}$** $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.25–28']
},
{
  id: 'giuaki-1-23', exam: 'giuaki-1', no: 23, chapter: 'ch1', topic: '1.1',
  stem: '[Ảnh gốc bị cắt hoàn toàn phần đề bài và phương án A]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: 'Chia sẻ dữ liệu bị hạn chế, khó khăn trong việc truy xuất đồng thời.' },
    { key: 'C', text: 'Không có cơ chế về an toàn bảo mật dữ liệu và phân quyền.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: null, marked: 'D', outside: true,
  incomplete: 'Ảnh gốc bị cắt hoàn toàn đề bài và phương án A (số thứ tự 23 suy ra từ vị trí ngay trước Câu 24)',
  note: 'Dựa vào các phương án B, C có thể đây là câu hỏi về nhược điểm của lưu trữ dữ liệu bằng hệ thống tệp tin truyền thống (mở rộng từ Slide Ch.1 tr.8); nút radio D được người làm bài chọn.',
  explanation: 'Hai phương án B (*chia sẻ hạn chế, khó truy xuất đồng thời*) và C (*không có cơ chế an toàn bảo mật và phân quyền*) là các nhược điểm kinh điển của hệ quản lý dữ liệu bằng tập tin (mở rộng ngoài Slide Ch.1 Tổng quan – tr.8).\nTuy nhiên, vì toàn bộ câu hỏi và phương án A bị cắt mất ở mép trên ảnh nên không thể xác nhận câu hỏi có hỏi phủ định hay nội dung của A có đúng hay không, do đó chưa chốt được đáp án.',
  source: ['Slide Ch.1 Tổng quan – tr.8', 'Kiến thức bổ sung (ngoài slide) – Nhược điểm lưu trữ bằng tập tin']
},
{
  id: 'giuaki-1-24', exam: 'giuaki-1', no: 24, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng (EER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mối liên kết một cách rõ ràng và chính xác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệp vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null,
  note: 'Chữ "một" ở cuối dòng 1 phương án B bị cắt nhẹ chữ "t" ở mép phải ảnh gốc (hiển thị "mộ...") nhưng vẫn đọc được rõ ngữ cảnh.',
  explanation: 'Mô hình thực thể liên kết mở rộng (**EER** – *Enhanced Entity-Relationship*) kế thừa toàn bộ mô hình ER cơ bản và bổ sung thêm **một số khái niệm ngữ nghĩa mới** (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) để tăng khả năng mô tả đối tượng rõ ràng và chính xác hơn $\\Rightarrow$ **C đúng**.\n- **A** chỉ nhắc riêng ràng buộc `(min, max)` nên quá hẹp.\n- **B** chỉ nhắc quy tắc nghiệp vụ cho mối quan hệ, bỏ qua phần mở rộng khái niệm về lớp thực thể và kế thừa.',
  sameAs: ['de-mau-720-03'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề cương môn học 2023 (mục 2.4)']
},
{
  id: 'giuaki-1-25', exam: 'giuaki-1', no: 25, chapter: 'ch1', topic: '1.2',
  stem: 'Các loại liên kết trong mô hình dữ liệu mạng bao gồm?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết một - một, một - nhiều và nhiều - nhiều' },
    { key: 'B', text: 'Liên kết một - một và một - nhiều' },
    { key: 'C', text: 'Liên kết nhiều - một và một - nhiều.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'A', marked: 'A', outside: true, incomplete: null,
  note: 'Slide Ch.1 tr.17 và tr.19 có nhắc tên mô hình mạng nhưng không nêu chi tiết các loại liên kết biểu diễn được.',
  explanation: 'Trong **mô hình dữ liệu mạng** (dữ liệu tổ chức thành các bản ghi và liên kết chủ–thành viên tạo thành đồ thị có hướng, trong đó một bản ghi thành viên có thể có nhiều bản ghi chủ), mô hình hỗ trợ biểu diễn đầy đủ cả ba loại liên kết: **một–một ($1-1$), một–nhiều ($1-n$) và nhiều–nhiều ($m-n$)** (qua bản ghi liên kết trung gian) $\\Rightarrow$ chọn **A**.\n(Phân biệt với *mô hình phân cấp* dạng cây chỉ biểu diễn trực tiếp $1-1$ và $1-n$ ở phương án B.)',
  source: ['Kiến thức bổ sung (ngoài slide) – Mô hình dữ liệu mạng', 'Slide Ch.1 Tổng quan – tr.19']
}
);
