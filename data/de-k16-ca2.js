/* KTHP 2020–2021 (K16) – Ca 2 – nguồn: tai-lieu/Đề k16/Đề ca 2 & tai-lieu-text/de/k16-ca2.md */
DB.questions.push(
{
  id: 'k16-ca2-01', exam: 'k16-ca2', no: 1, chapter: 'ch1', topic: '1.2',
  stem: 'Trong mô hình kiến trúc ba mức của hệ CSDL, mô hình dữ liệu quan niệm là:',
  figure: null,
  options: [
    { key: 'A', text: 'Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng.' },
    { key: 'B', text: 'Cách nhìn dữ liệu một cách tổng quát của người sử dụng.' },
    { key: 'C', text: 'Nội dung thông tin của toàn bộ cơ sở dữ liệu dưới cách nhìn của người sử dụng.' },
    { key: 'D', text: 'Cách nhìn dữ liệu ở mức ngoài.' }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null, note: null,
  explanation: 'Trong kiến trúc ba mức ANSI/SPARC:\n- **Mức quan niệm (conceptual)** mô tả cấu trúc logic và nội dung thông tin của **toàn bộ cơ sở dữ liệu** (các thực thể, kiểu dữ liệu, liên kết, ràng buộc) tách biệt khỏi chi tiết lưu trữ vật lý $\\Rightarrow$ **C đúng**.\n- A và D mô tả **mức ngoài (external)** (chỉ xét một phần dữ liệu/khung nhìn của từng nhóm người dùng); B diễn đạt chung chung, không nêu rõ phạm vi toàn bộ CSDL.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 1']
},
{
  id: 'k16-ca2-02', exam: 'k16-ca2', no: 2, chapter: 'ch1', topic: '1.3',
  stem: 'Ưu điểm của hệ quản trị Cơ sở dữ liệu là:',
  figure: null,
  options: [
    { key: 'A', text: 'Quản lý được dữ liệu dư thừa.' },
    { key: 'B', text: 'Cung cấp khả năng chia sẻ dữ liệu.' },
    { key: 'C', text: 'Đảm bảo tính toàn vẹn và tính nhất quán cho dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.18 (*Ưu điểm của HQT CSDL*), hệ quản trị CSDL có cả 4 ưu điểm chính: quản lý được dữ liệu dư thừa (A), tạo khả năng chia sẻ dữ liệu nhiều hơn (B), đảm bảo tính nhất quán và cải tiến tính toàn vẹn cho dữ liệu (C). Vì cả A, B, C đều đúng nên chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.18', 'Đề K16 – Ca 2 – câu 2']
},
{
  id: 'k16-ca2-03', exam: 'k16-ca2', no: 3, chapter: 'ch1', topic: '1.1',
  stem: 'Trong quá trình cập nhật dữ liệu, dữ liệu được hệ quản trị CSDL kiểm soát để đảm bảo tính chất nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Tính nhất quán.' },
    { key: 'B', text: 'Tính độc lập.' },
    { key: 'C', text: 'Tính ràng buộc toàn vẹn.' },
    { key: 'D', text: 'Tính bảo mật.' }
  ],
  answer: 'A', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan tr.14 (*Các tiêu chuẩn của CSDL*): **Tính nhất quán** yêu cầu *"sau các thao tác cập nhật dữ liệu và ngay cả khi có sự cố xảy ra $\\Rightarrow$ dữ liệu trong CSDL phải đảm bảo được tính đúng đắn"* (**A đúng**).\n- Slide Ch.1 tr.14 gọi tiêu chuẩn thỏa mãn các ràng buộc là *Tính toàn vẹn* (không gọi là "Tính ràng buộc toàn vẹn" như ở C); B là độc lập với ứng dụng/lưu trữ; D là ngăn truy xuất trái phép.',
  source: ['Slide Ch.1 Tổng quan – tr.14', 'Đề K16 – Ca 2 – câu 3']
},
{
  id: 'k16-ca2-04', exam: 'k16-ca2', no: 4, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' },
    { key: 'B', text: 'Cung cấp môi trường tạo lập CSDL.' },
    { key: 'C', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' },
    { key: 'D', text: 'Cung cấp công cụ quản lý bộ nhớ.' }
  ],
  answer: 'D', marked: 'D', outside: true, incomplete: null, note: null,
  explanation: 'Ba nhóm chức năng chính của HQT CSDL gồm: tạo lập CSDL (DDL – B), cập nhật và khai thác dữ liệu (DML/SQL – C), và kiểm soát, điều khiển truy cập, bảo mật, toàn vẹn (DCL – A).\n- **Quản lý bộ nhớ** là nhiệm vụ của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 4']
},
{
  id: 'k16-ca2-05', exam: 'k16-ca2', no: 5, chapter: 'ch1', topic: '1.1',
  stem: 'Hệ cơ sở dữ liệu gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu và phần mềm ứng dụng.' },
    { key: 'B', text: 'Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu tương ứng, phần mềm ứng dụng, người dùng.' },
    { key: 'C', text: 'Cơ sở dữ liệu, phần mềm ứng dụng, người dùng.' },
    { key: 'D', text: 'Phần mềm ứng dụng, hệ quản trị cơ sở dữ liệu, người dùng.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.10, 20, một hệ cơ sở dữ liệu hoàn chỉnh gồm đầy đủ các thành phần tương tác: **Cơ sở dữ liệu**, **Hệ quản trị CSDL tương ứng**, **Phần mềm ứng dụng** và **Người dùng** (**B đúng**).\n- A thiếu người dùng; C thiếu hệ quản trị CSDL; D thiếu cơ sở dữ liệu.',
  source: ['Slide Ch.1 Tổng quan – tr.10, 20', 'Đề K16 – Ca 2 – câu 5']
},
{
  id: 'k16-ca2-06', exam: 'k16-ca2', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' },
    { key: 'B', text: 'Kỹ thuật chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là specialization.' },
    { key: 'C', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng b... thể trong kiểu cha.' },
    { key: 'D', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down).' }
  ],
  answer: 'A', marked: 'A', outside: true, incomplete: null,
  note: 'Mép phải ảnh 2.jpg cắt mất một đoạn ở phương án C ("riêng b... thể trong kiểu cha"); đối chiếu câu cùng ngân hàng (ltcsdl-de1 câu 13, ltcsdl-de2 câu 13) đọc đầy đủ là "riêng biệt nào đó của các thực thể trong kiểu cha.".',
  explanation: 'Trong mô hình EER (Đề cương 2023 mục 2.4.3–2.4.4):\n- **Chuyên biệt hóa (specialization)** là phương pháp thiết kế **từ trên xuống (Top-down)** (B, D đúng): tách các **kiểu thực thể con** từ một **kiểu thực thể cha** dựa trên đặc tính riêng biệt (C đúng).\n- Quá trình ngược lại — xác định **kiểu thực thể cha từ các thực thể con** (từ dưới lên) — là **Tổng quát hóa (generalization)**, không phải chuyên biệt hóa $\\Rightarrow$ khẳng định **A sai**.',
  source: ['Đề cương môn học 2023 (mục 2.4.3–2.4.4)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 6']
},
{
  id: 'k16-ca2-07', exam: 'k16-ca2', no: 7, chapter: 'ch2', topic: '2.6',
  stem: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của mình. Tài liệu có thể là sách, bao gồm các thuộc tính: tác giả, tựa đề, năm xuất bản. Tài liệu có thể là ... tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp chí, số volume, số trang. Kiểu thực thể con cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tài liệu với các thuộc tính: tác giả, tựa đề, năm xuất bản, tên tạp chí, số volume, số trang.' },
    { key: 'B', text: 'Tài liệu và các thuộc tính: tác giả, tựa đề.' },
    { key: 'C', text: 'Sách gồm các thuộc tính: Tác giả, tựa đề, năm xuất bản và bài báo khoa học với các thuộc tính tác giả, tựa đề, số volume, số trang.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'D', marked: 'B', outside: true, incomplete: null,
  note: 'Mép phải ảnh 2.jpg cắt mất cụm từ giữa "Tài liệu có thể là" và "tạp chí"; đối chiếu câu cùng ngân hàng (ltcsdl-de2 câu 12, de-2021-1 câu 13) đọc đầy đủ là "bài báo khoa học từ".',
  explanation: 'Đề hỏi **kiểu thực thể con** cùng các thuộc tính tương ứng:\n- Kiểu thực thể **cha** là `Tài liệu` (mang hai thuộc tính chung `tác giả, tựa đề` — nên B nêu kiểu cha chứ không phải kiểu con; A gộp nhầm toàn bộ thuộc tính riêng lên kiểu cha).\n- Hai kiểu thực thể **con** là `Sách` (có thêm `năm xuất bản`) và `Bài báo khoa học` (có thêm `tên tạp chí, số volume, số trang`). Phương án C liệt kê `bài báo khoa học` nhưng **bỏ sót thuộc tính `tên tạp chí`** (đồng thời lặp lại thuộc tính kế thừa).\nDo A, B, C đều không chính xác nên chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 7']
},
{
  id: 'k16-ca2-08', exam: 'k16-ca2', no: 8, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng (EER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mối liên kết một cách rõ ràng và chính xác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệp vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null,
  note: 'Phương án D bị thanh taskbar che một phần ở đáy ảnh 2.jpg (chỉ thấy phần trên dòng chữ và không thấy nút radio của D); đối chiếu câu cùng ngân hàng (ltcsdl-de1 câu 9, ltcsdl-de2 câu 7) đọc đầy đủ là "Tất cả các phương án trên đều sai.".',
  explanation: 'Mô hình thực thể liên kết mở rộng (**EER – Enhanced ER**) kế thừa toàn bộ mô hình ER cơ bản và bổ sung thêm các khái niệm ngữ nghĩa mới (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn (**C đúng**).\n- A chỉ nhắc riêng khái niệm min–max; B bỏ qua các khái niệm mở rộng về thực thể/kế thừa.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 8']
},
{
  id: 'k16-ca2-09', exam: 'k16-ca2', no: 9, chapter: 'ch2', topic: '2.2',
  stem: '[Ảnh gốc bị cắt mất đề bài Câu 9 – chỉ thấy phần đáy của một sơ đồ phương án ở đỉnh ảnh 3.jpg]',
  figure: { type: 'er', spec: {
    entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 240, y: 80, attrs: [
      { label: 'Lương', kind: 'derived', dx: -145, dy: 0 },
      { label: 'Mã GV', kind: 'key', dx: 145, dy: 0 }
    ] }],
    notes: [{ text: '(nhánh lên thuộc tính phía trên bị cắt)', x: 240, y: 20 }]
  } },
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: '[Ảnh gốc bị cắt]' },
    { key: 'D', text: '[Ảnh gốc bị cắt]' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc không chụp đề bài và 4 phương án A–D; chỉ thấy phần đáy của một sơ đồ phương án (`GIÁO VIÊN` với `Lương`, `Mã GV`) ở mép trên ảnh 3.jpg/4.jpg.',
  note: 'Đối chiếu câu cùng ngân hàng (Đề mẫu 720 – câu 1, ltcsdl-de1 câu 11, ltcsdl-de3 câu 7), phần bị cắt phía trên thực thể `GIÁO VIÊN` là thuộc tính `HSL`, tuy nhiên ảnh không thấy ký hiệu của `HSL` (nét liền hay nét đứt) và thiếu toàn bộ đề bài cùng các phương án nên không thể xác định đáp án.',
  explanation: 'Trên mảnh sơ đồ còn thấy được ở đỉnh ảnh 3.jpg/4.jpg: thực thể `GIÁO VIÊN` (hình chữ nhật đơn) có `Mã GV` được gạch chân trong elip nét liền (**thuộc tính khóa**), `Lương` vẽ bằng elip nét đứt (**thuộc tính dẫn xuất/suy dẫn**), và còn một nhánh đi lên thuộc tính phía trên đã bị cắt. Vì thiếu đề bài, thiếu nhãn phương án và thiếu các phương án A–D nên chưa thể chọn đáp án.',
  source: ['Slide Ch.2 Mô hình ER – tr.11–12', 'Đề K16 – Ca 2 – câu 9']
},
{
  id: 'k16-ca2-10', exam: 'k16-ca2', no: 10, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: "Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên ... thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty". Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc t... gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Điện thoại.' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh 3.jpg/4.jpg cắt mất vài từ ở hai dòng đề bài ("xác định tên ... thoại" và "các thuộc t... gồm:"); đối chiếu câu cùng ngân hàng (ltcsdl-de2 câu 14, ltcsdl-de3 câu 10) là "tên phòng ban và có số điện thoại để liên hệ" và "các thuộc tính của thực thể PHÒNG gồm:". Ngoài ra trên ảnh 3.jpg nút (A) được tô xanh nhạt, còn trên ảnh 4.jpg (chụp trùng) nút (A) không được tô.',
  explanation: 'Theo quy trình xây dựng mô hình ER (Slide Ch.2 tr.15–17, 27), mối quan hệ "mỗi phòng có một người quản lý là nhân viên" được biểu diễn bằng **hình thoi liên kết** `Quản lý` giữa `PHÒNG` và `NHÂN VIÊN`, **không** đưa khóa ngoại `Mã người quản lý` vào làm thuộc tính của thực thể `PHÒNG` ở mức ER (chỉ bổ sung khóa ngoại khi chuyển sang mô hình quan hệ ở Chương 3).\n- Loại B, D vì chứa `Mã người quản lý` (khóa ngoại) hoặc `ngày quản lý` (thuộc tính của liên kết `Quản lý`).\n- Loại C vì mô tả không đề cập `Địa chỉ`. Chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–17, 27', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.21–22', 'Đề K16 – Ca 2 – câu 10']
},
{
  id: 'k16-ca2-11', exam: 'k16-ca2', no: 11, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết n-m giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' },
    { key: 'B', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Trên ảnh 3.jpg nút (B) có chấm sẫm kèm nhãn "(B)" tô vàng, còn trên ảnh 4.jpg nút (B) được tô xanh nhạt. Con trỏ chuột che nhẹ chữ "A" ở đầu phương án D.',
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.21: **kiểu liên kết M–N (nhiều–nhiều)** là liên kết mà trong đó một thực thể kiểu $A$ liên kết với nhiều thực thể kiểu $B$ và ngược lại, một thực thể kiểu $B$ liên kết với nhiều thực thể kiểu $A$ (**A đúng**).\n- B là định nghĩa liên kết 1–1 (Slide tr.20); C là liên kết 1–N; D là liên kết 1–1 có tham gia bộ phận.',
  source: ['Slide Ch.2 Mô hình ER – tr.20–21', 'Đề K16 – Ca 2 – câu 11']
},
{
  id: 'k16-ca2-12', exam: 'k16-ca2', no: 12, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo mô hình EER (Đề cương 2023 mục 2.4.5):\n- **Ràng buộc tách biệt (`d` – disjoint)**: một thực thể kiểu cha thuộc **tối đa một** kiểu con, không thể đồng thời thuộc hai hoặc nhiều kiểu con (**A đúng**).\n- **Ràng buộc phủ lấp / chồng lấn (`o` – overlapping)**: một thực thể kiểu cha **có thể đồng thời** là thành viên của hai hoặc nhiều kiểu con (**B đúng**).\nVì cả hai đều đúng nên chọn **C**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 12']
},
{
  id: 'k16-ca2-13', exam: 'k16-ca2', no: 13, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có thể c...',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 240, y: 55, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -155, dy: 0 },
      { label: 'Mã Khách', kind: 'key', dx: 155, dy: 0 }
    ] }] } } },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: '[Ảnh gốc bị cắt]' },
    { key: 'D', text: '[Ảnh gốc bị cắt]' }
  ],
  answer: null, marked: 'A', outside: false,
  incomplete: 'Ảnh gốc bị cắt mất các phương án B, C, D (ở đáy ảnh 3.jpg/4.jpg chỉ thấy phần đầu phương án A; ở đỉnh ảnh 5.jpg chỉ thấy một mảnh mờ của phương án cuối có 3 thuộc tính con "Xã", "Phường", "Tỉnh") và cắt cuối đề bài ("có thể c...").',
  note: 'Đối chiếu câu cùng ngân hàng (k16-ca1 câu 15, ltcsdl-de3 câu 14), phần đề bài bị cắt là "có nhiều địa chỉ liên lạc.". Viền đậm của elip `Địa chỉ` ở phương án A thể hiện thuộc tính đa trị (elip kép); do ảnh không chụp các phương án B, C, D nên không thể đối chiếu để chọn đáp án cuối cùng.',
  explanation: 'Từ phần nhìn thấy được: `Mã Khách` có gạch chân (**thuộc tính khóa**) và `Địa chỉ` có viền đậm/kép (**thuộc tính đa trị** vì một khách hàng có thể có nhiều địa chỉ liên lạc — Slide Ch.2 tr.10, 12). Tuy nhiên ở đỉnh ảnh 5.jpg còn thấy một mảnh sơ đồ khác tách `Địa chỉ` thành 3 thuộc tính con `Xã`, `Phường`, `Tỉnh` (**thuộc tính phức hợp**). Do không chụp đủ các phương án B, C, D nên không thể xác định được phương án nào đúng nhất.',
  sameAs: ['k16-ca1-15'],
  source: ['Slide Ch.2 Mô hình ER – tr.9–10, 12', 'Đề K16 – Ca 2 – câu 13']
}
);

DB.questions.push(
{
  id: 'k16-ca2-14', exam: 'k16-ca2', no: 14, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc tách biệt trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 195, y: 95, attrs: [
          { label: 'Giá', dx: -130, dy: -45 },
          { label: 'Mã PT', dx: -130, dy: 45 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 440, y: 45, attrs: [{ label: 'Tốc độ tối đa', dx: 145, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 440, y: 145, attrs: [{ label: 'Trọng tải', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 95, kind: 'o', parent: 'pt', total: true, children: ['oto', 'xt'] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 195, y: 95, attrs: [
          { label: 'Giá', dx: -130, dy: -45 },
          { label: 'Mã PT', dx: -130, dy: 45 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 440, y: 45, attrs: [{ label: 'Tốc độ tối đa', dx: 145, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 440, y: 145, attrs: [{ label: 'Trọng tải', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 95, kind: 'd', parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 195, y: 95, attrs: [
          { label: 'Giá', dx: -130, dy: -45 },
          { label: 'Mã PT', dx: -130, dy: 45 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 440, y: 45, attrs: [{ label: 'Tốc độ tối đa', dx: 145, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 440, y: 145, attrs: [{ label: 'Trọng tải', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 95, kind: 'o', parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 195, y: 95, attrs: [
          { label: 'Giá', dx: -130, dy: -45 },
          { label: 'Mã PT', dx: -130, dy: 45 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 440, y: 45, attrs: [{ label: 'Tốc độ tối đa', dx: 145, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 440, y: 145, attrs: [{ label: 'Trọng tải', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 95, kind: 'd', parent: 'pt', total: true, children: ['oto', 'xt'] }]
    } } }
  ],
  answer: 'B', marked: 'B', outside: true, incomplete: null,
  note: 'Ảnh 5.jpg hơi mờ (riêng phương án D thấy rõ hơn ở đỉnh ảnh 6.jpg); đường nét đôi hay nét đơn từ `PHƯƠNG TIỆN GT` tới vòng tròn được nhận diện qua độ đậm nét vẽ (A, D nét đậm/đôi; B, C nét đơn), còn nét gạch chân dưới `Mã PT` không nhìn rõ ở độ phân giải ảnh.',
  explanation: '1. Đề bài yêu cầu biểu diễn **ràng buộc tách biệt** (*disjoint*) trong mô hình EER $\\Rightarrow$ vòng tròn chuyên biệt hóa phải ghi chữ **`d`** (một phương tiện giao thông không thể đồng thời vừa là `Ô tô 4 chỗ` vừa là `Xe tải`). Loại **A** và **C** vì ghi chữ **`o`** (*overlapping* – phủ lấp).\n2. Xét ràng buộc đầy đủ trên `PHƯƠNG TIỆN GT`: không phải mọi phương tiện giao thông đều thuộc một trong hai lớp con `Ô tô 4 chỗ` hoặc `Xe tải` (còn có xe máy, xe đạp, xe buýt, ô tô 7 chỗ…), nên đây là chuyên biệt hóa **bộ phận (nét đơn)** nối từ `PHƯƠNG TIỆN GT` tới vòng tròn `d`. Loại **D** vì vẽ nét đôi toàn phần $\\Rightarrow$ chọn **B**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 14']
},
{
  id: 'k16-ca2-15', exam: 'k16-ca2', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính nguyên tố (nguyên tử) là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính có thể phân chia thành các thành phần nhỏ hơn, có ý nghĩa độc lập.' },
    { key: 'B', text: 'Thuộc tính không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa.' },
    { key: 'C', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' },
    { key: 'D', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Trích định nghĩa Slide Ch.2 Mô hình ER tr.9: **thuộc tính đơn (hay nguyên tử)** là thuộc tính **không thể chia nhỏ thành các phần riêng biệt nhỏ hơn** (độc lập và có ý nghĩa) (**B đúng**).\n- A là định nghĩa thuộc tính phức hợp (tr.9); C là thuộc tính đơn trị (tr.10); D là thuộc tính lưu trữ (tr.11).',
  source: ['Slide Ch.2 Mô hình ER – tr.9–11', 'Đề K16 – Ca 2 – câu 15']
},
{
  id: 'k16-ca2-16', exam: 'k16-ca2', no: 16, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: 'C', outside: false, incomplete: null,
  note: 'Trên ảnh 6.jpg nút (C) được tô xanh nhạt, còn trên ảnh 7.jpg (chụp trùng) không có nút nào được tô.',
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể"** (**A đúng**).\n- B sai vì quy tắc nghiệp vụ rộng hơn (bao gồm cả ràng buộc toàn vẹn, bản số…), không phải định nghĩa của liên kết.\n- C sai vì liên kết có thể là tham gia bộ phận (tùy chọn), không nhất thiết là ràng buộc bắt buộc.',
  source: ['Slide Ch.2 Mô hình ER – tr.15', 'Đề K16 – Ca 2 – câu 16']
},
{
  id: 'k16-ca2-17', exam: 'k16-ca2', no: 17, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu (lớp) thực thể Nhân viên trong mô hình thực thể liên kết (ER) của bài toán quản lý công ty:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, tên phòng.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý.' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Trên ảnh 6.jpg nút (A) được tô xanh nhạt, còn trên ảnh 7.jpg (chụp trùng) không có nút nào được tô.',
  explanation: 'Trong **mô hình ER** (Slide Ch.2 tr.27, 32), thực thể `NHÂN VIÊN` chỉ chứa các thuộc tính mô tả bản thân nhân viên (`Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ`) $\\Rightarrow$ **A đúng**.\n- Các thông tin `tên phòng`, `mã phòng` (liên kết `Làm việc cho` với `PHÒNG`) và `mã người quản lý` (liên kết đệ quy `Giám sát`) được biểu diễn bằng **hình thoi liên kết** ở ER; khóa ngoại chỉ thêm vào khi chuyển sang mô hình quan hệ ở Chương 3 (loại B, C, D).',
  source: ['Slide Ch.2 Mô hình ER – tr.15, 27, 32', 'Đề K16 – Ca 2 – câu 17']
},
{
  id: 'k16-ca2-18', exam: 'k16-ca2', no: 18, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen},\\text{GioiTinh},\\text{NgaySinh},\\text{Que})$; $\\text{Monhoc}(\\text{MaMon},\\text{TenMon},\\text{SoTC})$; $\\text{KetQua}(\\text{MaSV},\\text{MaMon},\\text{Diem})$. Biểu thức ĐS... xác yêu cầu: "Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' }
  ],
  answer: 'C', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh 7.jpg cắt sau "Biểu thức ĐS" (đối chiếu k16-ca1 câu 19 là "Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu:"). Đề gốc in `MaS` trong `SinhVien` trong khi biểu thức dùng `MaSV`, và viết `Ketqua`/`MonHoc` không đồng nhất chữ hoa/thường.',
  explanation: 'Yêu cầu tìm sinh viên **đã thi hết tất cả các môn** $\\Rightarrow$ sử dụng **phép chia ($\\div$)** (Slide Ch.3 P2 tr.29–31):\n1. Chiếu `Ketqua` lấy cặp `(MaSV, MaMon)` rồi chia cho $\\pi_{\\text{MaMon}}(\\text{MonHoc})$ để tìm các `MaSV` có đủ điểm mọi môn học.\n2. Bọc ngoặc quanh phép chia trước khi kết nối tự nhiên (`*`) với `SinhVien` rồi chiếu lấy `HoTen` $\\Rightarrow$ **C đúng**.\n- A, B sai vì dùng phép trừ (`-`) giữa hai quan hệ khác lược đồ; D thiếu cặp ngoặc bọc phép chia.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31, 38', 'Đề K16 – Ca 2 – câu 18']
},
{
  id: 'k16-ca2-19', exam: 'k16-ca2', no: 19, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaS}\\dots$ đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: "Đưa ra danh sách những bạn đọc của lớp H28 được cấp thẻ t...',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{lop}=\\text{‘H28’} \\text{ AND } \\text{ngaycap}<\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'B', text: '$\\sigma_{\\text{lop}=\\text{‘H28’},\\; \\text{ngaycap}<\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'C', text: '$\\sigma_{\\text{lop}=\\text{‘H28’}}(\\text{BANDOC}) \\cap \\sigma_{\\text{ngaycap}>\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh 8.jpg cắt mất hai đoạn cuối dòng ("MaS... đó" và "được cấp thẻ t..."); đối chiếu câu cùng ngân hàng (ltcsdl-de2 câu 24) là `PHIEUMUON(MaBD, MaSH, Ngaymuon, TraSach). Trong đó...` và `"được cấp thẻ trước ngày 30/12/2020"`. Ở ảnh 7.jpg (chụp trùng A, B) các nút chưa tô, còn ở ảnh 8.jpg nút (A) được tô xanh nhạt.',
  explanation: 'Cần lọc các bộ trong `BANDOC` thỏa mãn đồng thời `Lop = ‘H28’` và `NgayCap < ‘30/12/2020’` (cấp thẻ **trước** ngày 30/12/2020):\n- Theo Slide Ch.3 P2 tr.24, điều kiện ghép trong phép chọn $\\sigma$ phải nối bằng phép logic **`AND` ($\\land$)** $\\Rightarrow$ **A đúng**.\n- B sai cú pháp vì dùng dấu phẩy `,` thay cho `AND`; C viết sai dấu so sánh thành `>` (sau ngày 30/12/2020).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24', 'Đề K16 – Ca 2 – câu 19']
},
{
  id: 'k16-ca2-20', exam: 'k16-ca2', no: 20, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào s... "Lập danh sách các sinh viên được khen thưởng học kỳ 1 mà không được khen trong học kỳ 2"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} - \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} \\cap \\text{DOT2}$' }
  ],
  answer: 'A', marked: 'D', outside: false, incomplete: null,
  note: 'Mép phải ảnh 8.jpg cắt mất vài chữ cuối dòng 1 ("nào s..."); đối chiếu câu cùng ngân hàng (ltcsdl-de1 câu 27) đọc đầy đủ là "nào sau đây thể hiện đúng yêu cầu".',
  explanation: 'Theo Slide Ch.3 P2 tr.14 và ví dụ `DOT1`, `DOT2` ở tr.16: lấy các sinh viên có trong `DOT1` (học kỳ 1) **nhưng không có trong** `DOT2` (học kỳ 2) chính là **phép trừ (hiệu)** giữa hai quan hệ cùng lược đồ $\\Rightarrow$ $\\text{DOT1} - \\text{DOT2}$ (**A đúng**).\n- B là tích Đề-các; C là phép hợp (HK1 hoặc HK2); D là phép giao (cả hai HK).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14, 16', 'Đề K16 – Ca 2 – câu 20']
},
{
  id: 'k16-ca2-21', exam: 'k16-ca2', no: 21, chapter: 'ch3', topic: '2.9',
  stem: 'Phép toán sửa đổi trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Sửa đổi giá trị của một bộ hay một nhóm các bộ' },
    { key: 'B', text: 'Sửa đổi mô tả các thuộc tính.' },
    { key: 'C', text: 'Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ' },
    { key: 'D', text: 'Sửa đổi giá trị của một số thuộc tính.' }
  ],
  answer: 'A', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.8: **Phép thay đổi (`CH`)** thực chất là thay bộ $t$ bằng bộ mới $t\'$ ($r = r \\setminus t \\cup t\'$) để sửa đổi giá trị tại một số thuộc tính của **một bộ hay một nhóm các bộ** trong quan hệ (**A đúng**).\n- Không phải sửa cấu trúc mô tả thuộc tính (B), không phải thay cả quan hệ (C), và D thiếu đối tượng "của bộ/nhóm bộ".',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.8', 'Đề K16 – Ca 2 – câu 21']
},
{
  id: 'k16-ca2-22', exam: 'k16-ca2', no: 22, chapter: 'ch3', topic: '2.7',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-n trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
        { label: 'Mã NV', kind: 'key', dx: 0, dy: 65 },
        { label: 'Họ tên', dx: -130, dy: 0, parts: [
          { label: 'Họ', dx: -48, dy: -52 },
          { label: 'Tên', dx: -48, dy: 52 }
        ] }
      ] },
      { id: 'tn', label: 'THÂN NHÂN', x: 520, y: 105, weak: true, attrs: [
        { label: 'Tên TN', dx: 0, dy: -65 },
        { label: 'Giới tính', dx: -45, dy: 65 },
        { label: 'Quan hệ', dx: 65, dy: 65 }
      ] }
    ],
    rels: [
      { id: 'co', label: 'Có', x: 355, y: 105, ident: true, links: [
        { to: 'nv', card: '1', total: false },
        { to: 'tn', card: 'n', total: true }
      ] }
    ]
  } },
  options: [
    { key: 'A', text: '$\\text{THANNHAN}(\\text{TenTN}, \\text{GioiTinh}, \\text{Quanhe})$' },
    { key: 'B', text: '$\\text{THANNHAN}(\\text{MaNV}, \\text{TenTN}, \\text{GioiTinh}, \\text{Quanhe})$' },
    { key: 'C', text: '$\\text{NHANVIEN}(\\underline{\\text{MaNV}}, \\text{Ho}, \\text{Ten}, \\text{TenTN}, \\text{Gioitinh}, \\text{Quanhe})$' },
    { key: 'D', text: '$\\text{NHANVIEN}(\\text{MaNV}, \\text{HoTen}, \\text{TenTN}, \\text{GioiTinh}, \\text{Quanhe})$' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null,
  note: 'Trong ảnh gốc 9.jpg, chỉ phương án C gạch chân `MaNV` (A, B, D không thấy nét gạch chân khóa); đồng thời trong sơ đồ không thấy rõ nét gạch chân đứt dưới `Tên TN`. Quy tắc 2 & 5 vẫn xác định B là đáp án đúng nhất.',
  explanation: 'Trong sơ đồ ER: `THÂN NHÂN` là **thực thể yếu** (chữ nhật kép) gắn với liên kết định danh `Có` (thoi kép, `1:n`, phía `THÂN NHÂN` tham gia toàn bộ nét đôi).\n- Theo **Quy tắc 2** (chuyển thực thể yếu) và **Quy tắc 5** (chuyển liên kết `1:n` – Slide Ch.3 P1 tr.19–20, 25): tạo lược đồ quan hệ cho `THANNHAN` gồm mọi thuộc tính của `THÂN NHÂN` (`TenTN, GioiTinh, Quanhe`) và **thêm khóa chính `MaNV` của thực thể chủ / bên phía 1 (`NHÂN VIÊN`)** $\\Rightarrow$ **B đúng**.\n- A thiếu khóa ngoại `MaNV`; C và D gộp ngược thuộc tính phía nhiều (`n`) sang bảng `NHANVIEN` (phía `1`) là sai.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.19–20, 25', 'Đề K16 – Ca 2 – câu 22']
}
);

DB.questions.push(
{
  id: 'k16-ca2-23', exam: 'k16-ca2', no: 23, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}\\dots$ đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: "Đưa ra danh sách mã và tên của những bạn đọc hiện đang mư... của thư viện"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’},\\; \\text{traSach}=\\text{No}}(\\text{BANDOC} * \\text{PHIEUMUON} * \\text{SACH}))$' },
    { key: 'B', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’}}(\\text{BANDOC} * \\text{PHIEUMUON} * \\text{SACH}))$' },
    { key: 'C', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’} \\text{ AND } \\text{traSach}=\\text{No}}(\\text{BANDOC} * \\text{PHIEUMUON} * \\text{SACH}))$' },
    { key: 'D', text: '$\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’} \\text{ AND } \\text{traSach}=\\text{No}}(\\pi_{\\text{maBD},\\text{tenBD}}(\\text{BANDOC} * \\text{PHIEUMUON} * \\text{SACH}))$' }
  ],
  answer: 'C', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh 9.jpg cắt mất một phần ở cuối hai dòng đề bài; đối chiếu câu cùng ngân hàng (ltcsdl-de1 câu 26) đọc đầy đủ là `PHIEUMUON(MaBD, MaSH, Ngaymuon, TraSach). Trong đó...` và `"hiện đang mượn Giáo trình Cấu trúc dữ liệu của thư viện"`.',
  explanation: 'Để lấy `maBD, tenBD` của bạn đọc **hiện đang mượn** sách `Cấu trúc dữ liệu`, cần nối 3 bảng `BANDOC * PHIEUMUON * SACH` (qua `MaBD` và `MaSH`), lọc đồng thời `tenSach = ‘Cấu trúc dữ liệu’` và `traSach = No`, rồi mới chiếu `maBD, tenBD`:\n- **C đúng** cả về thứ tự phép toán lẫn phép logic `AND` (Slide Ch.3 P2 tr.19, 24, 38).\n- A sai cú pháp vì dùng dấu phẩy `,` thay cho `AND`; B thiếu điều kiện `traSach = No`; D chiếu bỏ `tenSach` và `traSach` trước khi thực hiện $\\sigma$ nên sai.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề K16 – Ca 2 – câu 23']
},
{
  id: 'k16-ca2-24', exam: 'k16-ca2', no: 24, chapter: 'ch3', topic: '1.5',
  stem: 'Đặc điểm của mô hình CSDL quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ.' },
    { key: 'B', text: 'Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp.' },
    { key: 'C', text: 'Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null,
  note: 'Trên ảnh 9.jpg nút (D) được tô xanh nhạt (dòng D bị thanh taskbar che một phần), còn trên ảnh 10.jpg (chụp trùng C, D) nút (D) không được tô.',
  explanation: 'Trích nguyên văn Slide Ch.3 Mô hình quan hệ (P1) tr.2: mô hình dữ liệu quan hệ (E. F. Codd, 1970) có cả 3 đặc điểm nêu ở A, B, C (cấu trúc đơn giản, đồng bộ; nền tảng lý thuyết tập hợp; cơ sở của các HQT CSDL thương mại như Oracle, MySQL, SQL Server…). Chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.2', 'Đề K16 – Ca 2 – câu 24']
},
{
  id: 'k16-ca2-25', exam: 'k16-ca2', no: 25, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{HANG}(\\text{Mahang}, \\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chín... về các mặt hàng có đơn giá trên 500."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG}))$' },
    { key: 'B', text: '$\\pi_{\\text{mahang},\\text{tenhang}} \\sigma_{\\text{dongia}>500}(\\text{HANG} * \\text{ChitietHD})$' },
    { key: 'C', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG} * \\text{ChitietHD})$' },
    { key: 'D', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\text{HANG}) \\cap \\sigma_{\\text{dongia}>500}(\\text{HANG})$' }
  ],
  answer: 'A', marked: 'C', outside: false, incomplete: null,
  note: 'Mép phải ảnh 10.jpg cắt sau "biểu diễn chín" (đối chiếu ltcsdl-de2 câu 18 là "biểu diễn chính xác yêu cầu: \\"Cho biết thông tin về các mặt hàng có đơn giá trên 500.\\""). Ngoài ra bản in B thiếu dấu mở ngoặc `(` sau $\\pi$, và bản in C thiếu một dấu đóng ngoặc `)` ở cuối.',
  explanation: 'Thông tin về mặt hàng (`Mahang, TenHang, DonGia`) nằm hoàn toàn trong bảng `HANG`:\n- Chỉ cần lọc $\\sigma_{\\text{dongia}>500}(\\text{HANG})$ rồi chiếu $\\pi_{\\text{mahang},\\text{tenhang}}$ (**A đúng**).\n- B và C nối thêm `ChitietHD` (sẽ bỏ sót các mặt hàng có đơn giá $> 500$ nhưng chưa từng được bán trong hóa đơn nào, đồng thời sai cú pháp ngoặc).\n- D sai vì hai vế của phép giao $\\cap$ khác số cột/lược đồ (`(mahang, tenhang)` so với toàn bộ 4 cột của `HANG`).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24', 'Đề K16 – Ca 2 – câu 25']
},
{
  id: 'k16-ca2-26', exam: 'k16-ca2', no: 26, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi các hàng trong lược đồ R không thỏa mãn điều kiện X và giữ lại các hàng thỏa mãn điều kiện X.' },
    { key: 'B', text: 'Loại bỏ đi một số hàng trong lược đồ R thỏa mãn điều kiện X và giữ lại các hàng không thỏa mãn điều kiện X.' },
    { key: 'C', text: 'Loại bỏ đi một số thuộc tính trong lược đồ R có trong X và giữ lại các thuộc tính không có trong danh sách thuộc tính X.' },
    { key: 'D', text: 'Loại bỏ đi các thuộc tính trong lược đồ R không có trong X và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính X.' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Các phép toán ĐSQH (P2) tr.19: **Phép chiếu $\\pi_X(R)$** là loại bỏ đi các thuộc tính trong lược đồ $R$ **không có trong $X$** và **giữ lại** các thuộc tính được liệt kê trong danh sách thuộc tính $X$ (rút trích theo cột) (**D đúng**).\n- A, B mô tả thao tác theo hàng (phép chọn $\\sigma$); C phát biểu ngược lại hoàn toàn.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19', 'Đề K16 – Ca 2 – câu 26']
},
{
  id: 'k16-ca2-27', exam: 'k16-ca2', no: 27, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức... không chính xác yêu cầu: "Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua} * \\text{SinhVien}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}*\\text{Sinhvien}))$' }
  ],
  answer: 'C', marked: 'D', outside: false, incomplete: null,
  note: 'Mép phải ảnh 10.jpg cắt sau "Biểu thức" (đối chiếu Đề mẫu 720 – câu 24 là "Biểu thức ĐSQH nào sau đây biểu diễn không chính xác yêu cầu:"). Phương án C vừa sai cú pháp (`∩` trong điều kiện $\\sigma$) vừa dư dấu `(` mở; ngoài ra phương án D cũng có lỗi ngữ nghĩa khi chiếu `MaSV, HoTen` trước phép giao `∩` (dễ lọt SV đạt >=5 ở môn khác và trượt T11). Đề gốc ghi `MaS` trong `SinhVien`.',
  explanation: 'Đề yêu cầu tìm biểu thức **không chính xác**:\n- A và B đều biểu diễn đúng (chỉ khác vị trí lọc trước hay nối trước).\n- **C sai hoàn toàn về cú pháp ĐSQH**: trong biểu thức điều kiện của phép chọn $\\sigma$ chỉ dùng phép logic (`AND`/`OR`/`NOT`), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời C thừa một dấu mở ngoặc `(`.\n- *(Lưu ý thêm: D cũng không tương đương về ngữ nghĩa nếu một sinh viên có điểm $\\ge 5$ ở môn khác và $< 5$ ở môn T11 thì vẫn nằm trong phép giao $\\cap$ sau khi đã chiếu bỏ `MaMon`.)* Chọn **C**.',
  sameAs: ['de-mau-720-24'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề K16 – Ca 2 – câu 27']
},
{
  id: 'k16-ca2-28', exam: 'k16-ca2', no: 28, chapter: 'ch3', topic: '2.11',
  stem: 'Thứ tự thực hiện các phép toán để tối ưu hoá biểu thức truy vấn dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép kết nối, phép chọn, phép chiếu.' },
    { key: 'B', text: 'Phép chiếu, phép chọn, phép kết nối.' },
    { key: 'C', text: 'Phép chọn, phép kết nối, phép chiếu.' },
    { key: 'D', text: 'Phép chiếu, phép kết nối, phép chọn.' }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null,
  note: 'Lưu ý chuẩn kiến thức tối ưu heuristic đầy đủ (như Đề mẫu 720 – câu 17) là **Phép chọn $\\to$ Phép chiếu $\\to$ Phép kết nối**. Bộ đề 2020–2021 không có phương án này (phương án B xếp ngược `chiếu` trước `chọn`); trong 4 lựa chọn hiện có, C là phương án hợp lệ duy nhất thực hiện phép chọn trước phép kết nối và không chiếu trước chọn.',
  explanation: 'Theo nguyên tắc heuristic tối ưu hóa biểu thức ĐSQH:\n1. **Phép chọn ($\\sigma$)** luôn phải thực hiện **sớm nhất** để giảm nhanh số lượng bộ (hàng), và phải thực hiện **trước phép chiếu** (vì chiếu trước như ở B, D có thể làm mất các cột điều kiện cần lọc).\n2. Tránh thực hiện phép kết nối ngay từ đầu như ở A (chi phí trung gian lớn nhất).\nTrong 4 phương án đã cho, **C** (`Phép chọn, phép kết nối, phép chiếu`) là lựa chọn hợp lệ và sát chuẩn nhất.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 2 – câu 28']
},
{
  id: 'k16-ca2-29', exam: 'k16-ca2', no: 29, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten},\\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban}, \\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang}, \\dots$ $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Lấy thông tin gồm số hóa đơn, tên hàng, số lượng hàng c... trong năm 2020"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{soHD},\\; \\text{tenhang},\\; \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’} \\text{ AND } \\text{ngaylap}=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'B', text: '$\\pi_{\\text{soHD},\\; \\text{tenhang},\\; \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’},\\; \\text{ngaylap}=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'C', text: '$\\pi_{\\text{soHD},\\; \\text{tenhang},\\; \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’} \\text{ AND } \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'D', text: '$\\pi_{\\text{soHD},\\; \\text{tenhang},\\; \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’},\\; \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null,
  note: 'Ảnh 11.jpg bị mất nét (out of focus) ở phần chỉ số dưới và mép phải cắt hai chỗ ("TenHang, ..." và "số lượng hàng c... trong năm 2020"). Đối chiếu ảnh 11.jpg với câu cùng ngân hàng (ltcsdl-de1 câu 23, ltcsdl-de2 câu 27), nội dung đầy đủ là `HANG(Mahang,TenHang, DonGia, Donvitinh)`, `"cho khách hàng KH007 trong năm 2020"`, và phân biệt rõ `ngaylap=2020` (A, B) với `year(ngaylapHD)=2020` (C, D) cũng như `AND` (A, C) với dấu phẩy `,` (B, D). Đề dùng tên viết tắt `maKH` cho `MaKhach`.',
  explanation: '1. Cột `NgaylapHD` lưu giá trị ngày tháng đầy đủ chứ không phải riêng số năm, nên để lọc theo năm 2020 phải dùng hàm trích năm **`year(ngaylapHD) = 2020`** (loại A và B vì so sánh trực tiếp `ngaylap = 2020`).\n2. Hai điều kiện trong phép chọn $\\sigma$ phải kết hợp bằng phép toán logic **`AND`** (Slide Ch.3 P2 tr.24), không ngăn cách bằng dấu phẩy `,` (loại D).\n3. Kết nối tự nhiên `ChitietHD * HoaDon * Hang` giữ đủ khóa nối `SoHD`, `MaHang`, sau đó chiếu lấy `soHD, tenhang, SLBan` $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề K16 – Ca 2 – câu 29']
},
{
  id: 'k16-ca2-30', exam: 'k16-ca2', no: 30, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các hàng là quan trọng.' },
    { key: 'B', text: 'thứ tự của các cột là quan trọng.' },
    { key: 'C', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'D', text: 'thứ tự của các cột là không quan trọng.' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null,
  note: 'Theo Slide Ch.3 P1 tr.10, "thứ tự các bộ trong quan hệ là không quan trọng" (C), còn "thứ tự giữa các giá trị trong một bộ là quan trọng" (khi viết bộ dạng $n$-bộ có thứ tự). Lưu ý trong lý thuyết hiện đại khi mỗi cột gắn với tên thuộc tính thì thứ tự các cột cũng không quan trọng.',
  explanation: 'Theo mục *Các đặc trưng của quan hệ* ở Slide Ch.3 Mô hình quan hệ (P1) tr.10:\n- Một quan hệ là tập hợp các bộ (hàng) nên **thứ tự của các hàng là không quan trọng** (đảo vị trí các dòng vẫn là cùng một quan hệ $\\Rightarrow$ **C đúng**, loại A).\n- Khi biểu diễn bộ giá trị theo vị trí cột của lược đồ $R(A_1, \\dots, A_n)$, **thứ tự giữa các giá trị trong một bộ là quan trọng** (đảo giá trị giữa hai cột sẽ cho bộ khác), nên trong bộ đề này chọn **C**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Đề K16 – Ca 2 – câu 30']
},
{
  id: 'k16-ca2-31', exam: 'k16-ca2', no: 31, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$, với $U=\\{ABCDE\\}$ và $F=\\{AB\\to D,\\; B\\to D,\\; D\\to C,\\; C\\to BE\\}$. Bao đóng của $(AB)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$ABDE$' },
    { key: 'B', text: '$ACDE$' },
    { key: 'C', text: '$U$' },
    { key: 'D', text: '$ABCD$' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm bao đóng $(AB)^+$ (Slide Ch.4 PTH tr.16):\n- $X_0 = \\{A, B\\}$.\n- Dùng $AB \\to D$ (hoặc $B \\to D$): $X_1 = \\{A, B, D\\}$.\n- Dùng $D \\to C$: $X_2 = \\{A, B, C, D\\}$.\n- Dùng $C \\to BE$: $X_3 = \\{A, B, C, D, E\\} = U$.\nVậy $(AB)^+ = ABCDE = U$ $\\Rightarrow$ chọn **C** *(B thiếu `B` và A, D thiếu `C` hoặc `E`)*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề K16 – Ca 2 – câu 31']
},
{
  id: 'k16-ca2-32', exam: 'k16-ca2', no: 32, chapter: 'ch4', topic: '3.10',
  stem: 'Lược đồ quan hệ $R(\\text{Mã số}, \\text{Họ tên}, \\text{địa chỉ})$ ở dạng chuẩn nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Dạng chuẩn 2NF, không là 3NF.' },
    { key: 'B', text: 'Dạng chuẩn 1NF, không là 2NF.' },
    { key: 'C', text: 'Dạng chuẩn 2NF, không là 3NF.' },
    { key: 'D', text: 'Dạng chuẩn 3NF' }
  ],
  answer: 'D', marked: 'A', outside: false, incomplete: null,
  note: 'Phương án A và C trên ảnh 12.jpg hiển thị giống hệt nhau ("Dạng chuẩn 2NF, không là 3NF."); cả hai đều là phương án nhiễu sai, không ảnh hưởng đáp án đúng D. Đề ngầm hiểu `Mã số` là khóa chính duy nhất và không có phụ thuộc giữa `Họ tên` với `địa chỉ`.',
  explanation: 'Giả thiết lược đồ đạt 1NF, có khóa chính là `Mã số` (chỉ có 1 thuộc tính) và tập PTH là $\\text{Mã số} \\to \\text{Họ tên}, \\text{địa chỉ}$ (Slide Ch.4 Chuẩn hóa tr.8, 15, 21, 23):\n1. Mọi khóa của $R$ chỉ có 1 thuộc tính (`Mã số`) nên không tồn tại phụ thuộc bộ phận vào khóa $\\Rightarrow R$ đạt **2NF** (loại B).\n2. Giữa `Họ tên` và `địa chỉ` không có phụ thuộc bắc cầu vào khóa (mọi PTH không tầm thường đều có vế trái là siêu khóa `Mã số`) $\\Rightarrow R$ đạt **3NF** (thậm chí đạt BCNF). Chọn **D**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.8, 15, 21, 23', 'Đề K16 – Ca 2 – câu 32']
},
{
  id: 'k16-ca2-33', exam: 'k16-ca2', no: 33, chapter: 'ch4', topic: '3.1',
  stem: 'Khẳng định nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$A\\to B$ và $BC\\to Z$ thì $AC\\to Z$' },
    { key: 'B', text: '$AC\\to B$ và $B\\to Z$ thì $AC\\to Z$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng hệ tiên đề Armstrong và các luật mở rộng (Slide Ch.4 PTH tr.9–10):\n- **A đúng** theo **luật tựa bắc cầu** (*Nếu $X\\to Y$ và $WY\\to Z$ thì $XW\\to Z$*): từ $A\\to B$ bổ sung $C$ được $AC\\to BC$, kết hợp $BC\\to Z$ theo luật bắc cầu suy ra $AC\\to Z$ (kiểm tra $(AC)^+ = ABCZ \\supseteq Z$).\n- **B đúng** theo **luật bắc cầu**: từ $AC\\to B$ và $B\\to Z$ suy ra $AC\\to Z$.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề K16 – Ca 2 – câu 33']
},
{
  id: 'k16-ca2-34', exam: 'k16-ca2', no: 34, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp.' },
    { key: 'B', text: 'Bảng tầm ảnh hưởng được sử dụng để kiểm tra ràng buộc toàn vẹn tại những thời điểm cập nhật dữ liệu.' },
    { key: 'C', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng các phụ thuộc hàm.' },
    { key: 'D', text: 'Bối cảnh của một ràng buộc toàn vẹn là những quan hệ mà ràng buộc đó có hiệu lực.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Phương án D bị thanh taskbar che một phần đáy chữ ở cuối ảnh 12.jpg; đối chiếu nét chữ nhìn thấy trên ảnh với câu cùng ngân hàng (ltcsdl-de1 câu 47, de-2021-1 câu 39, Slide Ch.4 Tổng quan tr.16) đọc là "có hiệu lực.".',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.15–17 (*Các yếu tố của RBTV*):\n- **A sai**: Slide tr.15 nêu rõ *"Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng ngôn ngữ tự nhiên, thuật giải, ngôn ngữ đại số tập hợp, đại số quan hệ,... Ngoài ra cũng có thể được biểu diễn bằng phụ thuộc hàm"* (**C đúng**). Khẳng định "**chỉ** được biểu diễn bằng ngôn ngữ đại số tập hợp" là sai.\n- **B đúng** (tr.17): bảng tầm ảnh hưởng dùng để kiểm tra RBTV khi thêm/sửa/xóa.\n- **D đúng** (tr.16): bối cảnh là những quan hệ mà RBTV đó có hiệu lực.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.15–17', 'Đề K16 – Ca 2 – câu 34']
}
);

DB.questions.push(
{
  id: 'k16-ca2-38', exam: 'k16-ca2', no: 38, chapter: 'ch4', topic: '3.4',
  stem: '[Ảnh gốc bị cắt mất đề bài Câu 38 – chỉ thấy phương án C và D ở đỉnh ảnh 13.jpg]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: 'Số hoá đơn, Mã hàng $\\to$ Tên hàng' },
    { key: 'D', text: 'Số hoá đơn, Mã khách $\\to$ Tên khách' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị cắt mất đề bài và phương án A, B (chỉ thấy phương án C và D ở đỉnh ảnh 13.jpg).',
  note: 'Số thứ tự Câu 38 được suy ra từ vị trí ngay phía trên Câu 39. Đối chiếu câu cùng ngân hàng (k16-ca1 câu 32, ltcsdl-de1 câu 41), đây nhiều khả năng là câu hỏi "Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?" (thường có đáp án đúng là `Số hoá đơn, Mã hàng → Số lượng bán` nằm ở A hoặc B đã bị cắt), nhưng thiếu đề bài và A, B nên không thể xác định đáp án.',
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.6, $X \\to Y$ là phụ thuộc hàm đầy đủ nếu **không thể bỏ bớt** thuộc tính nào khỏi $X$ mà vẫn suy ra được $Y$. Trên hai phương án còn thấy được:\n- **C (`Số hoá đơn, Mã hàng → Tên hàng`)** không phải PTH đầy đủ vì chỉ cần `Mã hàng → Tên hàng` (dư `Số hoá đơn`).\n- **D (`Số hoá đơn, Mã khách → Tên khách`)** không phải PTH đầy đủ vì chỉ cần `Mã khách → Tên khách` (dư `Số hoá đơn`).\nDo bị cắt mất đề bài và các phương án A, B nên chưa thể chọn đáp án.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề K16 – Ca 2 – câu 38']
},
{
  id: 'k16-ca2-39', exam: 'k16-ca2', no: 39, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F=\\{AB\\to C,\\; AD\\to G,\\; BC\\to G,\\; C\\to D,\\; GD\\to E\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$AB\\to DE$' },
    { key: 'B', text: '$AD \\to C$' },
    { key: 'C', text: '$BC\\to A$' },
    { key: 'D', text: '$GD \\to A$' }
  ],
  answer: 'A', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng PTH bằng bài toán thành viên (tính bao đóng vế trái theo $F$ – Slide Ch.4 PTH tr.16, 18):\n- Xét **A ($AB\\to DE$)**: $X_0 = AB \\xrightarrow{AB\\to C} ABC \\xrightarrow{BC\\to G} ABCG \\xrightarrow{C\\to D} ABCDG \\xrightarrow{GD\\to E} ABCDEG$. Vì $DE \\subseteq (AB)^+$ nên **$AB\\to DE \\in F^+$** (**A đúng**).\n- Kiểm tra các phương án còn lại: $(AD)^+ = ADEG$ (không chứa $C$, loại B); $(BC)^+ = BCDEG$ (không chứa $A$, loại C); $(GD)^+ = DEG$ (không chứa $A$, loại D).',
  sameAs: ['de-mau-720-35'],
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16, 18', 'Đề K16 – Ca 2 – câu 39']
},
{
  id: 'k16-ca2-40', exam: 'k16-ca2', no: 40, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K\\subseteq U$ được gọi là khóa của $R$ khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K^+ = U$' },
    { key: 'B', text: '$K^+ = U$ và không tồn tại $K\'\\subset U$ mà $(K\')^+ = U$' },
    { key: 'C', text: '$K\\to U$' },
    { key: 'D', text: '$K^+ = U$ và $\\exists K\'\\subset U$ mà $(K\')^+ = U$' }
  ],
  answer: 'B', marked: 'A', outside: false, incomplete: null,
  note: 'Đề gốc trên màn hình in nhầm "$K\'\\subset U$" thay vì đúng định nghĩa chuẩn là "$K\'\\subset K$" ở các phương án B và D (cùng lỗi in với ltcsdl-de1 câu 31, ltcsdl-de2 câu 46); chọn B là phương án gần đúng nhất diễn đạt cả hai điều kiện siêu khóa và tính tối tiểu của khóa.',
  explanation: 'Theo định nghĩa khóa thông qua phụ thuộc hàm (Slide Ch.4 PTH tr.30), tập $K \\subseteq U$ là **khóa** của $R$ khi thỏa mãn đồng thời 2 điều kiện:\n1. $K \\to U$ hay $K^+ = U$ ($K$ là siêu khóa — A và C mới chỉ là điều kiện siêu khóa, chưa đủ để kết luận là khóa).\n2. **Không tồn tại** tập con thực sự $K\' \\subset K$ mà $(K\')^+ = U$ (tính tối tiểu — D sai vì đòi hỏi tồn tại $K\'$ suy ra không tối tiểu).\nDo đó chọn **B** *(lưu ý bản in gốc viết nhầm $K\'\\subset U$ ở chỗ $K\'\\subset K$)*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề K16 – Ca 2 – câu 40']
},
{
  id: 'k16-ca2-41', exam: 'k16-ca2', no: 41, chapter: 'ch4', topic: '1.7',
  stem: 'Cho hai tập phụ thuộc hàm $F$ và $G$ xác định trên tập thuộc tính $U$. $F$ và $G$ tương đương nhau khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Ít nhất một phụ thuộc hàm trong $F$ được dẫn từ $G$ và ngược lại.' },
    { key: 'B', text: 'Mọi phụ thuộc hàm trong $F$ được lấy ra từ $G$ và ngược lại.' },
    { key: 'C', text: 'Tồn tại phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' },
    { key: 'D', text: 'Mọi phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' }
  ],
  answer: 'D', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 PTH tr.21–22: hai tập phụ thuộc hàm $F$ và $G$ gọi là **tương đương** ($F \\sim G$) khi $F^+ = G^+$, tức là $G$ phủ $F$ và $F$ phủ $G$ — nghĩa là **mọi** phụ thuộc hàm trong $F$ đều **được suy dẫn logic** từ $G$ và ngược lại (**D đúng**).\n- A, C sai vì chỉ đòi hỏi "ít nhất một" / "tồn tại"; B sai vì "lấy ra trực tiếp" khác với "suy dẫn logic" (hai tập PTH tương đương không cần phải chứa các PTH giống hệt nhau).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.21–22', 'Đề K16 – Ca 2 – câu 41']
},
{
  id: 'k16-ca2-42', exam: 'k16-ca2', no: 42, chapter: 'ch4', topic: '1.8',
  stem: 'Dữ liệu trong quan hệ ở dạng chuẩn 1NF:',
  figure: null,
  options: [
    { key: 'A', text: 'rất đơn giản và dễ sử dụng.' },
    { key: 'B', text: 'dễ dàng sửa đổi, bổ sung thuận tiện hơn các dạng chuẩn khác.' },
    { key: 'C', text: 'không bị trùng lặp.' },
    { key: 'D', text: 'chứa dị thường thông tin.' }
  ],
  answer: 'D', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan tr.6, 8 và Slide Ch.4 Chuẩn hóa tr.3, 8: một quan hệ mới chỉ dừng ở dạng chuẩn **1NF** thường gộp nhiều thông tin thực thể/liên kết nên vẫn còn lặp lại dữ liệu (loại C), gây khó khăn khi sửa đổi, bổ sung, xóa (loại B) và **chứa dị thường thông tin** (dị thường thêm, sửa, xóa) (**D đúng**).',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.6, 8', 'Slide Ch.4 Chuẩn hóa CSDL – tr.3, 8', 'Đề K16 – Ca 2 – câu 42']
},
{
  id: 'k16-ca2-43', exam: 'k16-ca2', no: 43, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{A\\to B,\\; B\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1,R_2\\}$ tách $R$ thành hai lược đồ $R_1(A,B)$ và $R_2(B,C)$; $F_1$ và $F_2$ của phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$;  $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'B', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$; $F_2 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$' },
    { key: 'C', text: '$F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$;  $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null,
  note: 'Trong ảnh 14.jpg, các phương án A và B thiếu dấu phẩy giữa `A→AC` và `C→A`. Theo quy ước trình bày của ví dụ gốc trên slide Ch.4 Chuẩn hóa tr.42, các PTH tầm thường một thuộc tính như $A\\to A, B\\to B$ được lược bỏ.',
  explanation: 'Đây là ví dụ ở Slide Ch.4 Chuẩn hóa CSDL tr.42 (tìm hình chiếu $\\Pi_{R_i}(F) = \\{X\\to Y \\in F^+ \\mid X\\cup Y \\subseteq R_i\\}$):\n- Trên $R_1(A,B)$: từ $F$ có $A^+ = ABC \\supseteq AB$ và $B^+ = ABC \\supseteq AB$ (vì $B\\to C\\to A$), nên giữ các PTH trên $\\{A, B\\}$ là $F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$ (A, B sai vì chứa $C \\notin R_1$).\n- Trên $R_2(B,C)$: có $B^+ = ABC \\supseteq BC$ và $C^+ = ABC \\supseteq BC$ (vì $C\\to A\\to B$), nên $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$.\nChọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.41–42', 'Đề K16 – Ca 2 – câu 43']
},
{
  id: 'k16-ca2-44', exam: 'k16-ca2', no: 44, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF n...',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BEH\\},\\; R_3 = \\{CEG\\},\\; R_4 = \\{CEK\\}$' },
    { key: 'B', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BK\\},\\; R_3 = \\{BEH\\},\\; R_4 = \\{CEG\\}$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null,
  note: 'Mép phải ảnh 14.jpg cắt phần cuối dòng đề ("BCNF n..."); đối chiếu Đề mẫu 720 – câu 40 đọc đầy đủ là "BCNF như sau:".',
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa tr.50) với khóa duy nhất của $R$ là $CE$ ($TN = \\{C, E\\}$ và $(CE)^+ = ABCDEGHK$):\n1. Tách theo $C \\to AD$ ($C$ không là siêu khóa): $R_1 = \\{ACD\\}$, còn lại $\\{BCEGHK\\}$.\n2. Tách theo $B \\to K$ ($B$ không là siêu khóa): $R_2 = \\{BK\\}$, còn lại $\\{BCEGH\\}$.\n3. Tách theo $E \\to BH$ ($E$ không là siêu khóa): $R_3 = \\{BEH\\}$, còn lại $R_4 = \\{CEG\\}$.\n- Kiểm tra **B**: cả 4 lược đồ ($R_1$: khóa $C$, $R_2$: khóa $B$, $R_3$: khóa $E$, $R_4$: khóa $CE$) đều đạt BCNF và kết nối không mất mát thông tin $\\Rightarrow$ **B đúng**.\n- **A sai** vì trên $R_4 = \\{CEK\\}$, có PTH suy dẫn $E \\to K$ (từ $E\\to B, B\\to K$) nhưng $E$ không là siêu khóa của $\\{CEK\\}$ (khóa là $CE$), nên $R_4$ vi phạm BCNF.',
  sameAs: ['de-mau-720-40'],
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 47, 50', 'Đề K16 – Ca 2 – câu 44']
},
{
  id: 'k16-ca2-45', exam: 'k16-ca2', no: 45, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'B', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' },
    { key: 'D', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Chỉ số dưới của $F$ ở phương án D trên ảnh 14.jpg nhỏ và hơi nhòe (trông giống $F_x$/$F_2$, đối chiếu k16-ca1 câu 43 là $F_{tt}$ – phủ tối thiểu).',
  explanation: 'Tìm phủ tối thiểu của $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$ (Ví dụ 2 – Slide Ch.4 PTH tr.29):\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Loại thuộc tính thừa vế trái: xét $AB\\to C$, thử bỏ $A$ còn $B^+ = BCD \\supseteq C$ (do đã có $B\\to C$), nên **thuộc tính $A$ DƯ THỪA trong $AB\\to C$** (**B đúng**, do đó **A sai**).\n3. Sau khi bỏ $A$ và gộp $B\\to C$ trùng nhau, xét $B\\to D$: suy dẫn được từ $B\\to C$ và $C\\to D$ nên $B\\to D$ là PTH dư thừa (**C đúng**), còn lại phủ tối thiểu $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (**D đúng**). Chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Đề K16 – Ca 2 – câu 45']
},
{
  id: 'k16-ca2-46', exam: 'k16-ca2', no: 46, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ $R(U,F)$ với $U = \\{ABCDEG\\}$ và $F:=\\{AB \\to C,\\; D \\to EG,\\; C\\to A,\\; BE \\to C,\\; BC \\to D,\\; CG \\to BD,\\; ACD \\to B,\\; CE \\to AG\\}$. Khóa của $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$AB, CG, AD$' },
    { key: 'B', text: '$AB, CG, CD$' },
    { key: 'C', text: '$EC, CE, BC$' },
    { key: 'D', text: '$EB, CE, BC$' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null,
  note: 'Kiểm chứng bằng công cụ bao đóng cho thấy $R$ có tới 7 khóa (`AB, BC, BD, CD, BE, CE, CG`), nên cả **B** (`AB, CG, CD`) và **D** (`EB, CE, BC`) đều gồm 3 khóa hợp lệ (nhưng chưa liệt kê đủ cả 7 khóa). Phương án C viết trùng tập `{C, E}` dưới hai tên `EC, CE`; phương án A sai vì $(AD)^+ = ADEG \\neq U$. Chọn B theo phương án chuẩn của đề.',
  explanation: 'Kiểm tra bao đóng các tập 1 thuộc tính: $A^+=A,\\; B^+=B,\\; C^+=AC,\\; D^+=DEG,\\; E^+=E,\\; G^+=G$ (không có khóa gồm 1 thuộc tính, nên mọi tập 2 thuộc tính có bao đóng bằng $U = ABCDEG$ đều là khóa):\n- $(AB)^+ = ABCDGE = U$ ($AB\\to C, BC\\to D, D\\to EG$).\n- $(CG)^+ = ABCDEG = U$ ($C\\to A, CG\\to BD, D\\to EG$).\n- $(CD)^+ = ABCDEG = U$ ($D\\to EG, C\\to A, CG\\to BD$).\nVậy `AB, CG, CD` đều là khóa của $R$ $\\Rightarrow$ chọn **B** *(A sai vì $(AD)^+ = ADEG$ thiếu $B, C$; C lặp lại `EC, CE`; D cũng gồm 3 khóa `EB, CE, BC` trong tổng số 7 khóa của $R$)*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 38, 41–42', 'Đề K16 – Ca 2 – câu 46']
},
{
  id: 'k16-ca2-47', exam: 'k16-ca2', no: 47, chapter: 'ch4', topic: '1.8',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' },
    { key: 'B', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' },
    { key: 'C', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'D', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác d...' }
  ],
  answer: 'A', marked: 'D', outside: false, incomplete: null,
  note: 'Slide Ch.4 Tổng quan TKCSDL tr.3 nêu trực tiếp "Thiết kế CSDL: chọn được tập lược đồ phù hợp" (phương án A); phương án D mô tả tiến trình mô hình hóa tổng quát từ thế giới thực sang quan hệ (Slide Ch.1 tr.29–30). Mép phải ảnh 15.jpg cắt 1 từ cuối ở phương án D ("khai thác d..."), đầy đủ là "khai thác dữ liệu".',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.3 (*I. Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** (đánh giá tính "tốt" ở cả mức logic và mức vật lý nhằm tối ưu lưu trữ, tránh dư thừa/dị thường và tối ưu khai thác — Slide Ch.1 tr.9) $\\Rightarrow$ **A đúng nhất**.\n- B sai ngược chiều chuẩn hóa (chuẩn hóa đưa từ thấp lên cao); C quá phiến diện; D mới diễn đạt bước mô hình hóa sang quan hệ chứ chưa phản ánh định nghĩa lựa chọn tập lược đồ phù hợp.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Slide Ch.1 Tổng quan – tr.9', 'Đề K16 – Ca 2 – câu 47']
},
{
  id: 'k16-ca2-48', exam: 'k16-ca2', no: 48, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to G,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D,\\; A\\to C\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc tính $A$ trong $AC\\to D$' },
    { key: 'B', text: 'Dư thừa thuộc tính $D$ trong $AC\\to D$' },
    { key: 'C', text: 'Dư thừa thuộc tính $C$ trong $AC\\to D$' },
    { key: 'D', text: 'Không dư thừa thuộc tính $C$ trong $AC\\to D$' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra thuộc tính dư thừa ở vế trái của $AC \\to D$ (Slide Ch.4 PTH tr.26):\n- Thử bỏ $C$ ở vế trái, tính bao đóng $A^+$ theo $F$: có $A \\to C$ và $AC \\to D$ nên $A^+ = \\{A, C, D\\} \\supseteq \\{D\\}$, tức $A \\to D \\in F^+$. Do đó **thuộc tính $C$ dư thừa trong $AC \\to D$** (**C đúng**, loại D).\n- A sai vì bỏ $A$ còn $C^+ = \\{C\\} \\not\\ni D$; B sai vì $D$ là vế phải, không thuộc vế trái để xét loại bỏ thuộc tính vế trái.',
  sameAs: ['de-mau-720-05'],
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề K16 – Ca 2 – câu 48']
},
{
  id: 'k16-ca2-49', exam: 'k16-ca2', no: 49, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc hợp trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$' },
    { key: 'B', text: 'Nếu $A\\to B$ và $BC \\to D$ thì $AC \\to D$' },
    { key: 'C', text: 'Nếu $A\\to BC$ thì $A\\to C$' },
    { key: 'D', text: 'Nếu $A\\to B$ và $B\\to C$ thì $A\\to C$' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Trên ảnh 15.jpg con trỏ chuột che nhẹ chữ "C" trong phương án A nhưng vẫn đọc rõ.',
  explanation: 'Theo các luật mở rộng từ hệ tiên đề Armstrong (Slide Ch.4 PTH tr.10):\n- **Luật hợp (Union)**: Nếu $X \\to Y$ và $X \\to Z$ thì $X \\to YZ$ $\\Rightarrow$ ứng với **A** (*Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$*).\n- B là luật tựa bắc cầu; C là luật tách; D là luật bắc cầu.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề K16 – Ca 2 – câu 49']
},
{
  id: 'k16-ca2-50', exam: 'k16-ca2', no: 50, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '1NF' },
    { key: 'B', text: '2NF' },
    { key: 'C', text: '3NF' },
    { key: 'D', text: 'BCNF' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Xác định dạng chuẩn cao nhất theo thuật toán 4 bước (Slide Ch.4 Chuẩn hóa tr.37):\n1. **Tìm khóa ($TN/TG$)**: $TN = \\{A\\}$ ($A$ chỉ ở vế trái), $TG = \\{B, C\\}$ ($D$ chỉ ở vế phải). Tính $A^+ = A$, $(AB)^+ = ABCD = U$, $(AC)^+ = ABCD = U$. Vậy $R$ có hai khóa là $AB$ và $AC$. Thuộc tính khóa: $A, B, C$; thuộc tính không khóa: $D$.\n2. **Kiểm tra 2NF**: các tập con thực sự của khóa là $A, B, C$ có $A^+=A,\\; B^+=B,\\; C^+=BC$ đều không chứa thuộc tính không khóa $D$ $\\Rightarrow$ đạt **2NF**.\n3. **Kiểm tra 3NF**: tách $F\' = \\{AB\\to C,\\; AB\\to D,\\; AC\\to D,\\; C\\to B\\}$: $AB$ và $AC$ đều là siêu khóa, còn $C\\to B$ có vế phải $B$ là **thuộc tính khóa** $\\Rightarrow$ đạt **3NF**.\n4. **Kiểm tra BCNF**: xét $C\\to B$, $C^+ = BC \\neq ABCD$ nên $C$ không là siêu khóa $\\Rightarrow$ chưa đạt BCNF. Vậy dạng chuẩn cao nhất của $R$ là **3NF** (**C đúng**).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.15, 21, 23, 29, 37', 'Đề K16 – Ca 2 – câu 50']
}
);
