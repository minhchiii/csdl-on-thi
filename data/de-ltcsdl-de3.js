/* Đề LTCSDL số 3 – nguồn: tai-lieu/Đề thi LTCSLD/Đề 3 & tai-lieu-text/de/ltcsdl-de3.md */
DB.questions.push(
{
  id: 'ltcsdl-de3-01', exam: 'ltcsdl-de3', no: 1, chapter: 'ch1', topic: '1.2',
  stem: 'Chọn phương án đúng nhất.',
  figure: null,
  options: [
    { key: 'A', text: 'CSDL mức quan niệm được dành cho người quản trị và người sử dụng chuyên môn.' },
    { key: 'B', text: 'CSDL mức quan niệm chỉ làm việc trên một phần CSDL, còn gọi là khung nhìn (View).' },
    { key: 'C', text: 'CSDL mức quan niệm giải quyết các vấn đề: dữ liệu là gì? Lưu trữ thế nào?' },
    { key: 'D', text: 'CSDL mức quan niệm là một biểu diễn trừu tượng của CSDL mức vật lý.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong kiến trúc 3 mức ANSI/SPARC (Ngoài $\\to$ Quan niệm $\\to$ Trong):\n- **Mức quan niệm** mô tả cấu trúc logic toàn bộ CSDL (thực thể, thuộc tính, liên kết, ràng buộc) và che giấu chi tiết cài đặt vật lý ở mức trong $\\Rightarrow$ là **một biểu diễn trừu tượng của CSDL mức vật lý** (**D đúng**).\n- A sai vì không giới hạn riêng cho "người sử dụng chuyên môn"; B mô tả **mức ngoài** (View); C sai vì vấn đề "Lưu trữ thế nào?" thuộc về **mức trong / vật lý**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 1']
},
{
  id: 'ltcsdl-de3-02', exam: 'ltcsdl-de3', no: 2, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' },
    { key: 'B', text: 'Cung cấp công cụ quản lý bộ nhớ.' },
    { key: 'C', text: 'Cung cấp môi trường tạo lập CSDL.' },
    { key: 'D', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Các chức năng chính của HQT CSDL gồm: (1) cung cấp môi trường tạo lập CSDL qua ngôn ngữ định nghĩa dữ liệu DDL (**C**); (2) cung cấp môi trường cập nhật và khai thác dữ liệu qua DML/SQL (**A**); (3) cung cấp công cụ kiểm soát, điều khiển truy cập, bảo mật và toàn vẹn (**D**).\n- **Quản lý bộ nhớ** là nhiệm vụ của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 2']
},
{
  id: 'ltcsdl-de3-03', exam: 'ltcsdl-de3', no: 3, chapter: 'ch1', topic: '1.2',
  stem: 'Thứ tự đúng cho các mức biểu diễn cơ sở dữ liệu trong mô hình kiến trúc CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Mức quan niệm, mức trong và mức ngoài.' },
    { key: 'B', text: 'Mức ngoài, mức quan niệm và mức trong.' },
    { key: 'C', text: 'Mức ngoài, mức quan niệm và mức mô hình.' },
    { key: 'D', text: 'Mức trong, mức mô hình dữ liệu và mức ngoài.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo kiến trúc 3 mức ANSI/SPARC, thứ tự đúng các mức biểu diễn CSDL tính từ góc nhìn người dùng xuống phần lưu trữ vật lý là: **Mức ngoài** (khung nhìn từng nhóm người dùng) $\\to$ **Mức quan niệm** (mô tả logic toàn bộ CSDL) $\\to$ **Mức trong** (cấu trúc lưu trữ vật lý).\n- A xếp sai thứ tự; C và D sai vì thêm "mức mô hình" / "mức mô hình dữ liệu". Chọn **B**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 3']
},
{
  id: 'ltcsdl-de3-04', exam: 'ltcsdl-de3', no: 4, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.16 (*Đối tượng sử dụng CSDL trực tiếp*):\n- **Người phát triển ứng dụng và lập trình** là người chuyên nghiệp về máy tính, chịu trách nhiệm thiết kế, tạo dựng và bảo trì hệ thống chương trình ứng dụng phục vụ khai thác CSDL (**B đúng**).\n- Người quản trị CSDL (DBA) quản lý, bảo trì CSDL và cấp quyền; người dùng cuối sử dụng phần mềm ứng dụng đó (loại A, C, D).',
  source: ['Slide Ch.1 Tổng quan – tr.16', 'Đề LTCSDL số 3 – câu 4']
},
{
  id: 'ltcsdl-de3-05', exam: 'ltcsdl-de3', no: 5, chapter: 'ch1', topic: '1.1',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Người sử dụng CSDL có thể truy xuất vào dữ liệu tùy ý.' },
    { key: 'B', text: 'Người sử dụng CSDL có thể truy xuất vào dữ liệu tùy thuộc vào quyền được truy cập đã được cấp' },
    { key: 'C', text: 'Người sử dụng CSDL không thể truy xuất vào dữ liệu, chỉ được xem thông tin về dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo tiêu chuẩn an toàn bảo mật CSDL (Slide Ch.1 tr.14) và cơ chế phân quyền của HQT CSDL: người sử dụng chỉ được phép truy xuất dữ liệu **tùy thuộc vào quyền truy cập đã được người quản trị CSDL (DBA) cấp** (**B đúng**).\n- A sai vì truy xuất tùy ý sẽ mất an toàn và bảo mật.\n- C sai vì người dùng có thể truy xuất dữ liệu thật trong phạm vi được cấp quyền, không chỉ xem siêu dữ liệu.',
  source: ['Slide Ch.1 Tổng quan – tr.14', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 5']
},
{
  id: 'ltcsdl-de3-06', exam: 'ltcsdl-de3', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER (Đề cương 2023 mục 2.4.5):\n- **Ràng buộc tách biệt (`d` – *disjoint*)**: mỗi thực thể của lớp cha thuộc **tối đa một** lớp con, không thể đồng thời là thành viên của hai hay nhiều lớp con $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp / chồng lấn (`o` – *overlapping*)**: một thực thể của lớp cha **có thể đồng thời** là thành viên của nhiều lớp con $\\Rightarrow$ **B đúng**.\nVì cả hai khẳng định đều đúng nên chọn **C**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 6']
},
{
  id: 'ltcsdl-de3-07', exam: 'ltcsdl-de3', no: 7, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các thuộc tính Mã nhân viên, lương, hệ số lương? Biết rằng lương được tính theo hệ số lương',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', kind: 'derived', dx: 0, dy: -62 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'multi', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo quy ước ký hiệu ER trên Slide Ch.2 tr.10–12 và ví dụ tr.32:\n1. `Mã NV` là thuộc tính **khóa** định danh thực thể `NHÂN VIÊN` $\\Rightarrow$ phải vẽ elip nét liền và **gạch chân** (loại **C** vì không gạch chân `Mã NV`).\n2. `Lương` tính theo `HSL` nên là **thuộc tính suy dẫn** $\\Rightarrow$ vẽ bằng **elip nét đứt** (loại **D** vì vẽ `Lương` bằng elip kép/đậm đa trị).\n3. `HSL` là thuộc tính lưu trữ bình thường $\\Rightarrow$ vẽ **elip nét liền** (loại **A** vì vẽ cả `HSL` nét đứt). Chọn **B**.',
  sameAs: ['de-2021-2-07'],
  source: ['Slide Ch.2 Mô hình ER – tr.10–12, 32', 'Đề LTCSDL số 3 – câu 7']
},
{
  id: 'ltcsdl-de3-08', exam: 'ltcsdl-de3', no: 8, chapter: 'ch2', topic: '2.6',
  stem: 'Một tổ chức phi lợi nhuận quản lý các nhân viên làm việc theo mã nhân viên. Có ba loại nhân viên: nhân viên cơ hữu, nhân viên tình nguyện, nhà tài trợ. Thông tin về nhân viên cơ hữu gồm họ tên, ngày sinh, địa chỉ và ngày tuyển dụng. Thông tin về nhân viên tình nguyện gồm họ tên, ngày sinh, địa chỉ và kỹ năng. Thông tin về nhà tài trợ gồm họ tên, ngày sinh, địa chỉ và ngày bắt đầu tài trợ. Xác định kiểu thực thể cha cùng các thuộc tính tương ứng.',
  figure: null,
  options: [
    { key: 'A', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ' },
    { key: 'B', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng, kỹ năng và ngày bắt đầu tài trợ' },
    { key: 'C', text: 'Nhân viên cơ hữu với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng; Nhân viên tình nguyện với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, kỹ năng; Nhà tài trợ với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày bắt đầu tài trợ' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc tổng quát hóa và kế thừa trong mô hình EER: **kiểu thực thể cha** chỉ chứa **các thuộc tính chung** (và khóa định danh) dùng chung cho mọi kiểu con; các thuộc tính đặc thù được đặt ở từng kiểu con tương ứng.\n- Thuộc tính chung của cả 3 loại là `mã nhân viên, họ tên, ngày sinh, địa chỉ` $\\Rightarrow$ kiểu cha là `Nhân viên` cùng 4 thuộc tính này (**A đúng**).\n- B sai vì gộp cả thuộc tính riêng (`ngày tuyển dụng, kỹ năng, ngày bắt đầu tài trợ`) lên kiểu cha; C liệt kê 3 kiểu con chứ không phải kiểu cha.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 8']
},
{
  id: 'ltcsdl-de3-09', exam: 'ltcsdl-de3', no: 9, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể liên kết (ER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình CSDL mô tả súc tích về các đối tượng và mối quan hệ giữa các đối tượng trong thế giới thực.' },
    { key: 'B', text: 'Mô hình CSDL biểu diễn dữ liệu thành một mạng, trong đó các đỉnh là các bản ghi, các cung là mối quan hệ giữa các đỉnh.' },
    { key: 'C', text: 'Mô hình CSDL biểu diễn dữ liệu thành một đồ thị có hướng, trong đó các đỉnh là các thực thể, các cung là quan hệ giữa cát đỉnh.' },
    { key: 'D', text: 'Mô hình CSDL mà dữ liệu được tổ chức thành các bảng, các phép toán thao tác trên dữ liệu dựa trên lý thuyết tập hợp của toán học.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Phương án C trong ảnh gốc (4.jpg) gõ nhầm "cát đỉnh" (đúng là "các đỉnh").',
  explanation: 'Trích nguyên văn định nghĩa tại Slide Ch.1 Tổng quan tr.23 và Slide Ch.2 Mô hình ER tr.2: **Mô hình thực thể liên kết (ER)** là một mô hình **mô tả súc tích về các đối tượng cùng với các mối liên kết giữa các đối tượng trong thế giới thực** (**A đúng**).\n- B mô tả mô hình mạng; D mô tả mô hình CSDL quan hệ; C sai vì mô hình ER không phải đồ thị có hướng nối trực tiếp các đỉnh thực thể với nhau.',
  sameAs: ['de-2021-2-09'],
  source: ['Slide Ch.1 Tổng quan – tr.23', 'Slide Ch.2 Mô hình ER – tr.2', 'Đề LTCSDL số 3 – câu 9']
},
{
  id: 'ltcsdl-de3-10', exam: 'ltcsdl-de3', no: 10, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: "Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban và có số điện thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty". Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể PHÒNG gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Điện thoại' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Khi xây dựng **mô hình ER** (mức khái niệm, Slide Ch.2 tr.15–17, 27), thông tin *"Mỗi phòng có một người quản lý là nhân viên"* được mô hình hóa bằng **mối liên kết** giữa `PHÒNG` và `NHÂN VIÊN` (kèm thuộc tính liên kết `ngày quản lý` nếu có), **không** đặt khóa ngoại `Mã người quản lý` vào làm thuộc tính của thực thể `PHÒNG`.\n- Do đó `PHÒNG` chỉ gồm: `Mã phòng`, `Tên phòng`, `Điện thoại` (**B đúng**).\n- A, C sai vì đưa khóa ngoại/thuộc tính liên kết vào thực thể; D thêm `Địa chỉ` không có trong mô tả.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–17, 27', 'Đề LTCSDL số 3 – câu 10']
},
{
  id: 'ltcsdl-de3-11', exam: 'ltcsdl-de3', no: 11, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể"** (ví dụ: nhân viên *thuộc* phòng ban, nhân viên *làm trưởng phòng* phòng ban) $\\Rightarrow$ **A đúng**.\n- B sai vì quy tắc nghiệp vụ là phạm trù rộng hơn (gồm cả lực lượng, ràng buộc toàn vẹn…); C sai vì liên kết có thể là tham gia bộ phận (tùy chọn), không nhất thiết là ràng buộc bắt buộc.',
  source: ['Slide Ch.2 Mô hình ER – tr.15', 'Đề LTCSDL số 3 – câu 11']
},
{
  id: 'ltcsdl-de3-12', exam: 'ltcsdl-de3', no: 12, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), tên thuộc tính trong bài toán thường được mô tả bởi',
  figure: null,
  options: [
    { key: 'A', text: 'Tính từ' },
    { key: 'B', text: 'Động từ' },
    { key: 'C', text: 'Danh từ và tính từ' },
    { key: 'D', text: 'Danh từ.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.2 tr.5, 7, 16, 27, tên thực thể và tên thuộc tính dùng danh từ (liên kết dùng động từ). Lưu ý một số tài liệu ngoài slide gộp thêm tính từ chỉ tính chất/trạng thái nên cũng gặp cách chọn "Danh từ và tính từ" ở các biến thể đề khác.',
  explanation: 'Trong phân tích bài toán xây dựng mô hình ER theo Slide Ch.2 tr.5, 7, 16, 27:\n- Tên **thuộc tính** (cũng như tên kiểu thực thể) thường được đặt bằng **danh từ** hoặc cụm danh từ (như `Mã SV`, `Họ tên`, `Ngày sinh`, `Địa chỉ`, `Lương`, `Tuổi`) $\\Rightarrow$ **D đúng**.\n- Tên mối liên kết thường được mô tả bằng **động từ** (loại B); A (chỉ tính từ) và C (danh từ và tính từ) không phải quy ước chuẩn cho tên gọi thuộc tính trên slide.',
  source: ['Slide Ch.2 Mô hình ER – tr.5, 7, 16, 27', 'Đề LTCSDL số 3 – câu 12']
},
{
  id: 'ltcsdl-de3-13', exam: 'ltcsdl-de3', no: 13, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả: "Một nhân viên có thể có một người giám sát, người đó cũng là nhân viên. Một nhân viên có thể giám sát nhiều người". Mối liên kết được mô tả là mối liên kết?',
  figure: null,
  options: [
    { key: 'A', text: '1-1' },
    { key: 'B', text: 'Đệ qui' },
    { key: 'C', text: 'm-n.' },
    { key: 'D', text: '1-n.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19 (*Liên kết đệ qui*): **cùng một kiểu thực thể** (`NHÂN VIÊN`) tham gia vào mối liên kết với hai vai trò khác nhau (*người giám sát* và *người bị giám sát*), trùng khớp ví dụ *"Nhân viên A giám sát nhân viên B"*. Vì trọng tâm câu dẫn là *"người đó cũng là nhân viên"* nên đây là **liên kết đệ qui** (**B đúng**).\n*(Ghi chú: xét về bản số thì liên kết đệ qui này có bản số $1-n$.)*',
  source: ['Slide Ch.2 Mô hình ER – tr.19', 'Đề LTCSDL số 3 – câu 13']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de3-14', exam: 'ltcsdl-de3', no: 14, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có thể có nhiều địa chỉ liên lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 240, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -145, dy: 0 },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', kind: 'derived', dx: -82, dy: 64 },
        { label: 'Phường', kind: 'derived', dx: 0, dy: 64 },
        { label: 'Tỉnh', kind: 'derived', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', dx: 145, dy: 0 }
    ] }] } } }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc (6.jpg), thuộc tính đa trị `Địa chỉ` ở A, C, D được vẽ bằng đường viền elip đậm/dày (thể hiện elip kép đa trị).',
  explanation: 'Kiểm tra các ký hiệu trên sơ đồ theo Slide Ch.2 Mô hình ER tr.9–12:\n1. `Mã Khách` là **khóa** của `KHÁCH HÀNG` $\\Rightarrow$ phải **gạch chân** (loại **D** vì không gạch chân `Mã Khách`).\n2. Mỗi khách hàng có **nhiều địa chỉ liên lạc** $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị**, vẽ **elip kép / viền dày** (loại **B** vì vẽ elip đơn mảnh).\n3. `Địa chỉ` là **thuộc tính phức hợp** gồm các thành phần lưu trữ độc lập `Xã`, `Phường`, `Tỉnh` vẽ bằng elip đơn **nét liền** (loại **D** vì vẽ nét đứt, và đầy đủ chi tiết hơn **A** vốn bỏ qua cấu trúc phức hợp). Chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–12', 'Đề LTCSDL số 3 – câu 14']
},
{
  id: 'ltcsdl-de3-15', exam: 'ltcsdl-de3', no: 15, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc phủ lấp trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 155, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -48, dy: -58 },
          { label: 'Mô tả', dx: 55, dy: -58 },
          { label: 'Địa điểm SX', dx: -130, dy: 0 },
          { label: 'Giá', dx: 0, dy: 58 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 420, y: 62, attrs: [{ label: 'Số hiệu', dx: 115, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 420, y: 178, attrs: [{ label: 'Mã nhà CC', dx: 128, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 120, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }],
      notes: [{ text: '(2 nhánh con ở ảnh gốc vẽ nét đôi/đậm)', x: 420, y: 218 }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 155, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -48, dy: -58 },
          { label: 'Mô tả', dx: 55, dy: -58 },
          { label: 'Địa điểm SX', dx: -130, dy: 0 },
          { label: 'Giá', dx: 0, dy: 58 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 420, y: 62, attrs: [{ label: 'Số hiệu', dx: 115, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 420, y: 178, attrs: [{ label: 'Mã nhà CC', dx: 128, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 120, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 155, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -48, dy: -58 },
          { label: 'Mô tả', dx: 55, dy: -58 },
          { label: 'Địa điểm SX', dx: -130, dy: 0 },
          { label: 'Giá', dx: 0, dy: 58 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 420, y: 62, attrs: [{ label: 'Số hiệu', dx: 115, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 420, y: 178, attrs: [{ label: 'Mã nhà CC', dx: 128, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 120, kind: 'o', parent: 'lk', total: true, children: ['sx', 'cc'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 155, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -48, dy: -58 },
          { label: 'Mô tả', dx: 55, dy: -58 },
          { label: 'Địa điểm SX', dx: -130, dy: 0 },
          { label: 'Giá', dx: 0, dy: 58 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 420, y: 62, attrs: [{ label: 'Số hiệu', dx: 115, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 420, y: 178, attrs: [{ label: 'Mã nhà CC', dx: 128, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 120, kind: 'o', parent: 'lk', total: false, children: ['sx', 'cc'] }]
    } } }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh gốc (7.jpg), đường từ `LINH KIỆN` tới vòng tròn ở A, B, C được vẽ bằng nét đậm (thể hiện nét đôi – toàn phần), riêng ở A hai nhánh từ vòng tròn xuống hai lớp con cũng đậm/kép nên được ghi chú phân biệt với B.',
  explanation: 'Đọc ký hiệu chuyên biệt hóa trong mô hình EER:\n1. **Ràng buộc phủ lấp (*overlapping*)** — một thực thể kiểu cha (`LINH KIỆN`) có thể đồng thời thuộc nhiều lớp con (`LK_Tự SX` và `LK_Cung cấp`) — ký hiệu bằng chữ **`o`** trong vòng tròn $\\Rightarrow$ loại **A** và **B** (dùng chữ `d` là tách biệt/*disjoint*, ngoài ra A còn vẽ nét đôi/đậm sai quy ước ở hai nhánh con).\n2. Mọi linh kiện đều phải thuộc ít nhất một trong hai loại (tự sản xuất hoặc mua từ nhà cung cấp) $\\Rightarrow$ tham gia **toàn phần (*total*)**, biểu diễn bằng **nét đôi** từ lớp cha `LINH KIỆN` tới vòng tròn `o` (loại **D** vì dùng nét đơn bộ phận). Chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 15']
},
{
  id: 'ltcsdl-de3-16', exam: 'ltcsdl-de3', no: 16, chapter: 'ch2', topic: '2.1',
  stem: 'Phương án nào sai khi mô tả về kiểu dữ liệu của các thuộc tính của lớp thực thể trong mô hình thực thể liên kết ER?',
  figure: null,
  options: [
    { key: 'A', text: 'Số điện thoại là một số nguyên.' },
    { key: 'B', text: 'Tên người là một chuỗi ký tự' },
    { key: 'C', text: 'Ngày sinh là một chuỗi ký tự' },
    { key: 'D', text: 'Tuổi là một số nguyên.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Thuộc tính `Số điện thoại` có thể bắt đầu bằng chữ số `0` (kiểu số nguyên sẽ làm mất số `0` đứng đầu), có thể chứa ký tự `+` hoặc dấu cách và **không dùng để thực hiện phép tính số học** $\\Rightarrow$ phải biểu diễn bằng **chuỗi ký tự**, không phải số nguyên. Do đó khẳng định **A sai**.\n- B (`Tên người` là chuỗi ký tự), D (`Tuổi` là số nguyên) và C (`Ngày sinh` lưu dạng chuỗi ngày hoặc kiểu Date/Time) đều hợp lệ.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.4, 15', 'Bài tập Ch.2 (Google Form)', 'Đề LTCSDL số 3 – câu 16']
},
{
  id: 'ltcsdl-de3-17', exam: 'ltcsdl-de3', no: 17, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết 1-1 giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A' },
    { key: 'B', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A' },
    { key: 'D', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích định nghĩa tại Slide Ch.2 Mô hình ER tr.20: **Kiểu liên kết 1–1 (một–một)** là liên kết mà trong đó **một thực thể kiểu A liên kết với (tối đa) một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A** (**B đúng**).\n- A và D mô tả liên kết `1-n`; C mô tả liên kết `m-n`.',
  source: ['Slide Ch.2 Mô hình ER – tr.20', 'Đề LTCSDL số 3 – câu 17']
},
{
  id: 'ltcsdl-de3-18', exam: 'ltcsdl-de3', no: 18, chapter: 'ch3', topic: '1.5',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: "Cơ sở dữ liệu quan hệ được biểu diễn ... với các cột là thuộc tính và các hàng là tập n giá trị của thực thể"',
  figure: null,
  options: [
    { key: 'A', text: 'dưới dạng các bảng' },
    { key: 'B', text: 'cấu trúc hình mạng' },
    { key: 'C', text: 'dưới dạng các tệp dữ liệu' },
    { key: 'D', text: 'cấu trúc hình cây' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 tr.24 và Slide Ch.3 Mô hình quan hệ (P1) tr.8: trong mô hình CSDL quan hệ, mỗi quan hệ được biểu diễn **dưới dạng các bảng**, trong đó các cột là thuộc tính và các hàng (dòng) là các bộ $n$ giá trị (**A đúng**).\n- B là mô hình mạng; C là lưu trữ dạng tệp truyền thống; D là mô hình phân cấp.',
  source: ['Slide Ch.1 Tổng quan – tr.24', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.8', 'Đề LTCSDL số 3 – câu 18']
},
{
  id: 'ltcsdl-de3-19', exam: 'ltcsdl-de3', no: 19, chapter: 'ch3', topic: '2.11',
  stem: 'Khi thực hiện tối ưu hóa biểu thức truy vấn, nhận xét nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Thực hiện các phép chọn sớm sẽ làm tăng các bộ dữ liệu.' },
    { key: 'B', text: 'Thực hiện các phép chiếu cuối cùng thì tốt hơn.' },
    { key: 'C', text: 'Thực hiện các phép chọn muộn hơn các phép chiếu thì tốt hơn.' },
    { key: 'D', text: 'Thực hiện các phép chiếu sớm sẽ làm giảm số các thuộc tính.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc heuristic tối ưu hóa biểu thức ĐSQH: nên đẩy **phép chọn ($\\sigma$)** và **phép chiếu ($\\pi$)** xuống thực hiện sớm trước các phép kết nối/tích Đề-các để thu gọn quan hệ trung gian:\n- **D đúng**: thực hiện **phép chiếu sớm** sẽ loại bỏ bớt các cột không cần thiết, làm **giảm số các thuộc tính** của kết quả trung gian.\n- A sai vì phép chọn sớm làm **giảm** (không phải tăng) số bộ; B, C sai thứ tự tối ưu (nên thực hiện chọn trước rồi chiếu sớm).',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL số 3 – câu 19']
},
{
  id: 'ltcsdl-de3-20', exam: 'ltcsdl-de3', no: 20, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan},\\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: "*Liệt kê những tên sách của tác giả \'Đỗ Trung Tuấn\' do Nhà xuất bản Giáo dục xuất bản có trong thư viện*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’} \\cap \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' },
    { key: 'B', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’} \\text{ AND } \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' },
    { key: 'C', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’},\\; \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' },
    { key: 'D', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’}}(\\text{SACH}) \\land \\sigma_{\\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cả bốn phương án trong đề gốc đều chỉ thực hiện phép chọn $\\sigma$ trên `SACH` mà chưa chiếu $\\pi_{\\text{TenSach}}$ như yêu cầu "Liệt kê những tên sách"; xét cú pháp hợp lệ thì chọn B.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.24 (*Phép chọn $\\sigma_F(r)$*), khi kết hợp hai điều kiện trên cùng một quan hệ `SACH` phải dùng **phép toán logic `AND` ($\\land$) bên trong biểu thức điều kiện** $\\Rightarrow$ **B đúng**.\n- A sai vì dùng phép giao tập hợp $\\cap$ trong biểu thức điều kiện; C sai vì ngăn cách điều kiện bằng dấu phẩy `,`; D sai vì đặt toán tử logic $\\land$ giữa hai quan hệ thay vì phép giao $\\cap$.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24', 'Đề LTCSDL số 3 – câu 20']
},
{
  id: 'ltcsdl-de3-21', exam: 'ltcsdl-de3', no: 21, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-1 trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'gv', label: 'GIẢNG VIÊN', x: 155, y: 110, attrs: [
        { label: 'MãGV', kind: 'key', dx: 0, dy: -58 },
        { label: 'Họ tên', dx: -120, dy: 0 },
        { label: 'Ngày sinh', dx: 0, dy: 58 }
      ] },
      { id: 'khoa', label: 'KHOA', x: 525, y: 110, attrs: [
        { label: 'MãKhoa', kind: 'key', dx: 0, dy: -58 },
        { label: 'TênKhoa', dx: 112, dy: 0 }
      ] }
    ],
    rels: [{ id: 'tk', label: 'Làm trưởng khoa', x: 345, y: 110, attrs: [{ label: 'Ngày làmTK', dx: 0, dy: -64 }],
      links: [{ to: 'gv', card: '1', total: false }, { to: 'khoa', card: '1', total: true }] }]
  } },
  options: [
    { key: 'A', text: '$\\text{GIANGVIEN}(\\text{MaGV}, \\text{TenGV}, \\text{NgaySinh}, \\text{MaK}, \\text{NgayQL})$' },
    { key: 'B', text: '$\\text{GIANGVIEN}(\\underline{\\text{MaGV}}, \\text{TenGV}, \\text{NgaySinh}, \\text{MaK})$' },
    { key: 'C', text: '$\\text{KHOA}(\\underline{\\text{MaK}}, \\underline{\\text{MaGV}}, \\text{TenK}, \\text{NgayQL})$' },
    { key: 'D', text: '$\\text{KHOA}(\\underline{\\text{MaK}}, \\text{TenK}, \\text{MaGV}, \\text{NgayQL})$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc (9.jpg), các nhãn thuộc tính `MãKhoa`, `TênKhoa` và `Ngày làmTK` khá nhỏ/mờ (nét gạch chân dưới `MãKhoa` khó thấy rõ) nhưng `MãKhoa` là khóa định danh của `KHOA`; ngoài ra các phương án viết gọn tên thuộc tính thành `MaK`, `TenK`, `TenGV`, `NgayQL`.',
  explanation: 'Theo Quy tắc 3 – Chuyển liên kết `1–1` (Slide Ch.3 P1 tr.21–22): đặt **khóa của thực thể bên phía tùy chọn** và **thuộc tính của liên kết** vào lược đồ của **thực thể bên phía bắt buộc**.\n- Trong sơ đồ, phía `KHOA` nối với `Làm trưởng khoa` bằng **nét đôi** (tham gia toàn bộ/bắt buộc — mỗi khoa phải có một trưởng khoa), còn phía `GIẢNG VIÊN` là **nét đơn** (tùy chọn).\n- Vì vậy đưa `MaGV` (khóa ngoại) và `NgayQL` sang `KHOA`, khóa chính của `KHOA` vẫn chỉ là `MaK` $\\Rightarrow$ **D đúng**.\n- A, B đặt sai hướng sang `GIANGVIEN` (và A còn thiếu gạch chân khóa); C gạch chân thừa `MaGV` làm khóa chính kép.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.21–22', 'Đề LTCSDL số 3 – câu 21']
},
{
  id: 'ltcsdl-de3-22', exam: 'ltcsdl-de3', no: 22, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "*Liệt kê những tên sách mà bạn đọc có mã số \'BD1001\' đã mượn của thư viện*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) * \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' },
    { key: 'B', text: '$\\pi_{\\text{TenSach}}(\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON}) * \\text{SACH})$' },
    { key: 'C', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) \\cap \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' },
    { key: 'D', text: '$\\pi_{\\text{TenSach},}\\; \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON} * \\text{SACH})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Lọc các phiếu mượn của bạn đọc `BD1001`: $\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$.\n2. Kết nối tự nhiên (`*`) với `SACH` qua thuộc tính chung `MaSH` để lấy tên sách, rồi mới chiếu $\\pi_{\\text{TenSach}}$ $\\Rightarrow$ **B đúng**.\n- A sai vì chiếu $\\pi_{\\text{TenSach}}(\\text{SACH})$ trước làm mất khóa nối `MaSH` (biến phép nối thành tích Đề-các và kết quả còn thừa các cột của `PHIEUMUON`).\n- C sai vì hai vế khác lược đồ nên không dùng được phép giao $\\cap$; D sai cú pháp phép chiếu (viết dấu `,`, thiếu dấu ngoặc bao ngoài và tách rời $\\sigma$ sau $\\pi$).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24, 38', 'Đề LTCSDL số 3 – câu 22']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de3-23', exam: 'ltcsdl-de3', no: 23, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn **không chính xác** yêu cầu: "*Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}*\\text{Sinhvien}))$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua} * \\text{SinhVien}))$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc ghi `MaS` trong lược đồ `SinhVien` còn các biểu thức dùng `MaSV`; phương án D vừa sai cú pháp (`∩` trong điều kiện chọn) vừa thừa dấu mở ngoặc `((`. Ngoài ra cần lưu ý phương án A cũng có lỗi ngữ nghĩa khi chiếu `MaSV, HoTen` trước phép giao `∩` (lấy nhầm sinh viên đạt $\\ge 5$ ở môn khác và thi T11 dưới 5).',
  explanation: 'Đề yêu cầu tìm biểu thức **không chính xác**:\n- **B** và **C** đều biểu diễn đúng (chỉ khác nhau ở việc đẩy phép chọn xuống trước khi kết nối hay sau khi kết nối).\n- **D sai hoàn toàn về cú pháp ĐSQH**: trong biểu thức điều kiện của phép chọn $\\sigma$ chỉ được dùng các toán tử logic (`AND`/`OR`/`NOT`), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời D còn dư một dấu mở ngoặc `(`.\n- *(Ghi chú thêm: A cũng mắc lỗi ngữ nghĩa nếu một sinh viên đạt $\\ge 5$ ở môn khác và $<5$ ở môn T11 thì vẫn lọt vào giao hai tập.)* Chọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề LTCSDL số 3 – câu 23']
},
{
  id: 'ltcsdl-de3-24', exam: 'ltcsdl-de3', no: 24, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'B', text: 'thứ tự của các cột là quan trọng.' },
    { key: 'C', text: 'thứ tự của các hàng là quan trọng.' },
    { key: 'D', text: 'thứ tự của các hàng là không quan trọng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.3 P1 tr.10, "thứ tự các bộ trong quan hệ là không quan trọng" (D), còn "thứ tự giữa các giá trị trong một bộ là quan trọng" (khi viết bộ theo thứ tự cột của lược đồ). Lưu ý trong lý thuyết CSDL hiện đại khi các cột được định danh theo tên thuộc tính thì thứ tự cột (A) cũng không quan trọng.',
  explanation: 'Theo các đặc trưng của quan hệ ở Slide Ch.3 Mô hình quan hệ (P1) tr.10:\n- Một quan hệ là tập hợp các bộ (các hàng) nên **thứ tự của các hàng là không quan trọng** (**D đúng**, loại C).\n- Slide nhấn mạnh **thứ tự giữa các giá trị trong một bộ là quan trọng** (đổi vị trí các giá trị theo vị trí cột tạo thành bộ khác), do đó theo giáo trình môn học chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Đề LTCSDL số 3 – câu 24']
},
{
  id: 'ltcsdl-de3-25', exam: 'ltcsdl-de3', no: 25, chapter: 'ch3', topic: '2.9',
  stem: 'Phép xoá dữ liệu trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Xoá một bộ hay xoá một nhóm các bộ.' },
    { key: 'B', text: 'Xoá một thuộc tính hay xoá một nhóm các thuộc tính.' },
    { key: 'C', text: 'Xoá một quan hệ hay xoá một nhóm các quan hệ.' },
    { key: 'D', text: 'Xoá một CSDL.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.4, 6–7: các phép toán cập nhật dữ liệu (`INSERT`, `DEL`, `CH`) tác động trên **các bộ** của quan hệ. Phép loại bỏ (`DEL`, dạng $r = r - t$) thực hiện **xóa một bộ hay xóa một nhóm các bộ** khỏi một quan hệ cho trước (**A đúng**).\n- B, C, D thuộc thao tác thay đổi/xóa cấu trúc lược đồ (DDL), không phải phép xóa dữ liệu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 6–7', 'Đề LTCSDL số 3 – câu 25']
},
{
  id: 'ltcsdl-de3-26', exam: 'ltcsdl-de3', no: 26, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten}, \\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD}, \\text{NgaylapHD}, \\text{Ngayban}, \\text{MaKhach})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "*Đưa ra danh sách các khách hàng ở Hà Nội đã mua hàng tại cửa hàng. Thông tin gồm mã khách hàng, tên khách hàng và số điện thoại*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}))$' },
    { key: 'B', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' },
    { key: 'C', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' },
    { key: 'D', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}))$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Các phương án trong đề gốc viết tắt `maKH` cho thuộc tính `MaKhach` của hai lược đồ `KHACH` và `HOADON`.',
  explanation: 'Yêu cầu gồm 2 điều kiện: (1) khách ở Hà Nội (`diachi = ‘Hà Nội’`) và (2) **đã mua hàng** (có mặt mã khách trong `HOADON`).\n- **B đúng**: lọc khách Hà Nội trên `KHACH`, kết nối tự nhiên (`*`) với $\\pi_{\\text{maKH}}(\\text{HOADON})$ để chỉ giữ những khách đã từng lập hóa đơn, rồi chiếu `maKH, Hoten, DienThoai`.\n- A thiếu kiểm tra đã mua hàng trong `HOADON`; C và D chiếu bỏ cột `diachi` trước khi lọc $\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}$ nên sai.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề LTCSDL số 3 – câu 26']
},
{
  id: 'ltcsdl-de3-27', exam: 'ltcsdl-de3', no: 27, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi các thuộc tính trong lược đồ $R$ không có trong $X$ và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính $X$.' },
    { key: 'B', text: 'Loại bỏ đi các hàng trong lược đồ $R$ không thỏa mãn điều kiện $X$ và giữ lại các hàng thỏa mãn điều kiện $X$.' },
    { key: 'C', text: 'Loại bỏ đi một số thuộc tính trong lược đồ $R$ có trong $X$ và giữ lại các thuộc tính không có trong danh sách thuộc tính $X$' },
    { key: 'D', text: 'Loại bỏ đi một số hàng trong lược đồ $R$ thỏa mãn điều kiện $X$ và giữ lại các hàng không thỏa mãn điều kiện $X$.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn định nghĩa trên Slide Ch.3 Các phép toán ĐSQH (P2) tr.19: **Phép chiếu $\\pi_X(R)$** là phép toán **loại bỏ đi các thuộc tính của lược đồ $R$ không có trong $X$ và giữ lại những thuộc tính được liệt kê trong danh sách thuộc tính $X$** (rút trích theo cột) $\\Rightarrow$ **A đúng**.\n- B và D nói về lọc các hàng (phép chọn $\\sigma$); C phát biểu ngược lại hoàn toàn.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19', 'Đề LTCSDL số 3 – câu 27']
},
{
  id: 'ltcsdl-de3-28', exam: 'ltcsdl-de3', no: 28, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach},\\text{Hoten},\\text{Diachi},\\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban},\\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang},\\text{DonGia},\\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang},\\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu "*Lập danh sách tên các khách hàng đã mua mặt hàng tivi vào ngày 08/03/2020.*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{Hoten}}(\\text{Khach} * \\pi_{\\text{maKH}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon})) * \\pi_{\\text{mahang},\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'B', text: '$\\pi_{\\text{Hoten}}(\\text{Khach} * \\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon})) * \\pi_{\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})))$' },
    { key: 'C', text: '$\\pi_{\\text{Hoten}}(\\text{Khach} * \\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon})) * \\pi_{\\text{mahang}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc viết tắt `maKH`, `ngaylap` (cho `MaKhach`, `NgaylapHD`) trong cả ba phương án A, B, C; riêng A và C còn thiếu hai dấu ngoặc đóng cuối biểu thức trên ảnh gốc (11.jpg).',
  explanation: 'Để kết nối tự nhiên (`*`) từ chi tiết mặt hàng (`Hang * ChitietHD`) sang `Hoadon` rồi sang `Khach`, các phép chiếu trung gian phải **giữ lại khóa kết nối** (`soHD` và `maKH`):\n- Ở **B**: nhánh `Hoadon` lọc ngày `08/03/2020` và chiếu giữ `maKH, soHD`; nhánh `Hang * ChitietHD` lọc `tivi` và chiếu giữ `soHD`; nối qua `soHD` rồi `maKH` với `Khach` và chiếu `Hoten` (**B đúng**).\n- A sai vì chiếu mất `soHD` ở nhánh `Hoadon` (chỉ còn `maKH`), làm phép nối sau thành tích Đề-các.\n- C sai vì chiếu mất `soHD` ở nhánh `Hang * ChitietHD` (chỉ giữ `mahang`).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề LTCSDL số 3 – câu 28']
},
{
  id: 'ltcsdl-de3-29', exam: 'ltcsdl-de3', no: 29, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu "*Lập danh sách các sinh viên được khen thưởng học kỳ 1 hoặc học kỳ 2*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} \\cap \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} - \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} \\cup \\text{DOT2}$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.10 và ví dụ `DOT1`, `DOT2` ở tr.16:\n- Lấy danh sách sinh viên được khen thưởng ở học kỳ 1 **hoặc** học kỳ 2 (hoặc cả hai) chính là **phép hợp ($\\cup$)** $\\Rightarrow$ $\\text{DOT1} \\cup \\text{DOT2}$ (**D đúng**).\n- A là phép giao (cả hai kỳ); B là phép trừ (chỉ kỳ 1, không có ở kỳ 2); C là tích Đề-các.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.10, 16', 'Đề LTCSDL số 3 – câu 29']
},
{
  id: 'ltcsdl-de3-30', exam: 'ltcsdl-de3', no: 30, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen},\\text{GioiTinh},\\text{NgaySinh},\\text{Que})$; $\\text{Monhoc}(\\text{MaMon},\\text{TenMon},\\text{SoTC})$; $\\text{KetQua}(\\text{MaSV},\\text{MaMon},\\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "*Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học*"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc ghi `MaS` trong lược đồ `SinhVien` trong khi các phương án dùng `MaSV`.',
  explanation: 'Truy vấn tìm đối tượng liên quan đến **"tất cả"** các bộ của bảng khác dùng **phép chia ($\\div$)** (Slide Ch.3 P2 tr.29–31):\n1. Chia $\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})$ để thu được tập `MaSV` đã thi đủ mọi môn học.\n2. Đặt dấu ngoặc bọc kết quả phép chia trước khi kết nối tự nhiên (`*`) với `SinhVien` rồi chiếu lấy `HoTen` $\\Rightarrow$ **C đúng**.\n- A thiếu dấu ngoặc ưu tiên phép chia trước phép nối; B, D dùng sai phép trừ `−` trên hai quan hệ khác lược đồ.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31, 38', 'Đề LTCSDL số 3 – câu 30']
},
{
  id: 'ltcsdl-de3-31', exam: 'ltcsdl-de3', no: 31, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: 'Mã sinh viên, Mã môn $\\to$ Tên môn, Đơn vị học trình' },
    { key: 'B', text: 'Mã sinh viên, Mã môn $\\to$ Họ tên sinh viên' },
    { key: 'C', text: 'Mã sinh viên, Mã lớp $\\to$ Họ tên sinh viên' },
    { key: 'D', text: 'Mã sinh viên, Mã môn $\\to$ Điểm thi' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.6: PTH $X \\to Y$ là **phụ thuộc hàm đầy đủ** nếu không tồn tại tập con thực sự $X\' \\subset X$ sao cho $X\' \\to Y$ vẫn suy diễn được:\n- **D (`Mã sinh viên, Mã môn → Điểm thi`) là đầy đủ**: cần cả mã sinh viên lẫn mã môn học mới xác định duy nhất điểm thi của lần thi đó.\n- A dư `Mã sinh viên` (vì `Mã môn → Tên môn, Đơn vị học trình`); B dư `Mã môn` và C dư `Mã lớp` (vì `Mã sinh viên → Họ tên sinh viên`).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề LTCSDL số 3 – câu 31']
},
{
  id: 'ltcsdl-de3-32', exam: 'ltcsdl-de3', no: 32, chapter: 'ch4', topic: '3.2',
  stem: 'Có thể kết luận quan hệ $R$ là chuẩn BCNF khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Tất cả các khóa của $R$ đều chỉ có một thuộc tính.' },
    { key: 'B', text: 'Tất cả các phụ thuộc hàm của $R$ đều có vế trái là khóa.' },
    { key: 'C', text: 'Tất cả các thuộc tính của $R$ đều là thuộc tính khóa.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích chú ý tại Slide Ch.4 Chuẩn hóa CSDL tr.31 (*Thuật toán kiểm tra dạng chuẩn BCNF*): **"mọi PTH đều có vế trái là khóa thì đạt chuẩn BCNF"** $\\Rightarrow$ **B đúng**.\n- A chỉ đảm bảo đạt **2NF** (Slide tr.15), vẫn có thể vi phạm 3NF/BCNF nếu có phụ thuộc bắc cầu.\n- C chỉ đảm bảo đạt **3NF** (Slide tr.23), chưa chắc đạt BCNF (ví dụ $R(C,S,Z)$ với $CS\\to Z, Z\\to C$ có mọi thuộc tính là thuộc tính khóa nhưng $Z$ không phải siêu khóa nên không đạt BCNF).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 29, 31', 'Đề LTCSDL số 3 – câu 32']
},
{
  id: 'ltcsdl-de3-33', exam: 'ltcsdl-de3', no: 33, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Khóa của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BC$' },
    { key: 'B', text: '$CD$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm tất cả các khóa TN/TG (Slide Ch.4 PTH tr.41–42):\n- Tập nguồn $TN = \\{C\\}$ ($C$ chỉ ở vế trái).\n- Tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không có mặt trong khóa).\n- Tính $C^+ = AC \\neq ABCD$. Thử ghép từng tập con của $TG$:\n  - $(BC)^+ = BCAD = ABCD$ (dùng $C\\to A$, $B\\to AD$).\n  - $(CD)^+ = CDAB = ABCD$ (dùng $C\\to A$, $D\\to B$, $B\\to A$).\nKhông có tập con thực sự nào của $BC$ hoặc $CD$ là siêu khóa $\\Rightarrow$ $R$ có hai khóa là $BC$ và $CD$ $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42', 'Đề LTCSDL số 3 – câu 33']
},
{
  id: 'ltcsdl-de3-34', exam: 'ltcsdl-de3', no: 34, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AD\\to B,\\; AB\\to E,\\; DC\\to G,\\; D\\to C,\\; CG\\to H\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc thuộc tính C trong $DC\\to G$' },
    { key: 'B', text: 'Không dư thừa thuộc thuộc tính C trong $DC\\to G$' },
    { key: 'C', text: 'Dư thừa thuộc thuộc tính C trong $DC\\to G$' },
    { key: 'D', text: 'Không dư thừa thuộc tính trong $DC\\to G$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Phương án A và C trong ảnh gốc (13.jpg) giống hệt nhau và cùng mang nội dung đúng nên không xác định được một chữ cái đáp án duy nhất',
  note: 'Đã kiểm tra ảnh 12.jpg (chỉ thấy dòng đầu đề bài ở mép dưới) và 13.jpg (hiển thị đầy đủ câu 34): phương án A và C giống hệt nhau từng chữ ("Dư thừa thuộc thuộc tính C trong DC->G", kể cả lỗi lặp từ "thuộc thuộc tính").',
  explanation: 'Kiểm tra thuộc tính dư thừa ở vế trái của $DC \\to G$ (Slide Ch.4 PTH tr.26):\n- Bỏ thử $C$ ở vế trái, tính bao đóng $D^+$ theo $F$: $X_0 = D \\xrightarrow{D\\to C} CD \\xrightarrow{DC\\to G} CDG \\xrightarrow{CG\\to H} CDGH$. Vì $G \\in D^+$ nên $D \\to G \\in F^+$, tức **thuộc tính $C$ dư thừa trong $DC \\to G$** (phủ tối thiểu là $AD\\to B,\\; AB\\to E,\\; D\\to G,\\; D\\to C,\\; CG\\to H$).\n- Bỏ thử $D$: $C^+ = C \\not\\ni G$ nên $D$ không dư thừa.\n- Do **A và C đều ghi giống hệt nhau** nội dung đúng này nên không thể xác định duy nhất một chữ cái đáp án.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề LTCSDL số 3 – câu 34']
},
{
  id: 'ltcsdl-de3-35', exam: 'ltcsdl-de3', no: 35, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D\\}$. Bao đóng của $(BG)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$ABCEH$' },
    { key: 'B', text: '$BCDEH$' },
    { key: 'C', text: '$ABCEG$' },
    { key: 'D', text: '$BCEGH$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm bao đóng $(BG)^+$ (Slide Ch.4 PTH tr.16):\n- $X_0 = BG$.\n- Dùng $BG \\to H$: $X_1 = BGH$.\n- Dùng $BH \\to C$: $X_2 = BCGH$.\n- Dùng $HC \\to E$: $X_3 = BCEGH$.\n- Không còn PTH nào có vế trái nằm trong $X_3$ ($AB$ và $AC$ đều thiếu $A$). Vậy $(BG)^+ = BCEGH$ $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề LTCSDL số 3 – câu 35']
},
{
  id: 'ltcsdl-de3-36', exam: 'ltcsdl-de3', no: 36, chapter: 'ch4', topic: '3.1',
  stem: 'Nếu $A \\to BC$ thì:',
  figure: null,
  options: [
    { key: 'A', text: '$A \\to C$ và $A \\to B$' },
    { key: 'B', text: '$AC \\to B$ và $A \\to C$' },
    { key: 'C', text: 'Cả hai phương án đều đúng' },
    { key: 'D', text: 'Cả hai phương án đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng các luật suy diễn trong hệ tiên đề Armstrong (Slide Ch.4 PTH tr.9–10):\n- Từ $A \\to BC$, dùng **luật tách** suy ra cả $A \\to C$ và $A \\to B$ $\\Rightarrow$ **A đúng**.\n- Từ $A \\to B$, dùng **luật bổ sung** thêm $C$ được $AC \\to BC$, rồi dùng luật tách được $AC \\to B$ (kết hợp với $A \\to C$ ở trên) $\\Rightarrow$ **B cũng đúng**.\nVì cả A và B đều được suy diễn logic từ $A \\to BC$ nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề LTCSDL số 3 – câu 36']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de3-37', exam: 'ltcsdl-de3', no: 37, chapter: 'ch4', topic: '1.8',
  stem: 'Một quan hệ dạng chuẩn 1NF có thể chuyển đổi về quan hệ 3NF bằng cách:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ các phụ thuộc bắc cầu vào khoá.' },
    { key: 'B', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá.' },
    { key: 'C', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' },
    { key: 'D', text: 'Loại bỏ các phụ thuộc đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo quy trình chuẩn hóa từ 1NF lên 3NF (Slide Ch.4 Chuẩn hóa CSDL tr.13, 18, 21, 25):\n- Từ 1NF $\\to$ **2NF**: loại bỏ các **phụ thuộc không đầy đủ (bộ phận)** của thuộc tính không khóa vào khóa.\n- Từ 2NF $\\to$ **3NF**: loại bỏ các **phụ thuộc bắc cầu** của thuộc tính không khóa vào khóa.\nDo đó để chuyển từ 1NF về 3NF phải thực hiện cả hai bước trên $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 18, 21, 25', 'Đề LTCSDL số 3 – câu 37']
},
{
  id: 'ltcsdl-de3-38', exam: 'ltcsdl-de3', no: 38, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F=\\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB \\to C$' },
    { key: 'B', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B \\to C,\\; C \\to D\\}$' },
    { key: 'C', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB \\to C$' },
    { key: 'D', text: 'Phụ thuộc hàm dư thừa là $B \\to D$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Tìm phủ tối thiểu cho $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$ (Ví dụ 2 – Slide Ch.4 PTH tr.29):\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Loại thuộc tính dư thừa ở vế trái: xét $AB \\to C$, bỏ thử $A$ thấy $B \\to C$ đã có ($B^+ = BCD \\ni C$) $\\Rightarrow$ **thuộc tính $A$ dư thừa trong $AB \\to C$** (**C đúng**, suy ra khẳng định **A sai**).\n3. Sau khi thay $AB\\to C$ bằng $B\\to C$ và gộp trùng, xét $B\\to D$: suy ra từ $B\\to C$ và $C\\to D$ nên $B\\to D$ là PTH dư thừa (**D đúng**), còn lại phủ tối thiểu $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (**B đúng**). Đề hỏi khẳng định sai nên chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Đề LTCSDL số 3 – câu 38']
},
{
  id: 'ltcsdl-de3-39', exam: 'ltcsdl-de3', no: 39, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc bắc cầu trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AC \\to BC$' },
    { key: 'B', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AC \\to B$' },
    { key: 'C', text: 'Nếu $A \\to B$ và $B \\to C$ thì $A \\to C$' },
    { key: 'D', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AB \\to C$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.9 (*Hệ tiên đề Armstrong*), **luật bắc cầu** phát biểu: nếu $X \\to Y$ và $Y \\to Z$ thì $X \\to Z$. Thay $X=A,\\; Y=B,\\; Z=C$ ta được: **Nếu $A \\to B$ và $B \\to C$ thì $A \\to C$** $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9', 'Đề LTCSDL số 3 – câu 39']
},
{
  id: 'ltcsdl-de3-40', exam: 'ltcsdl-de3', no: 40, chapter: 'ch4', topic: '1.8',
  stem: 'Chọn khẳng định đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc toàn vẹn là những điều kiện bất biến mà tất cả các bộ của các quan hệ có liên quan trong CSDL đều phải thỏa mãn ở mọi thời điểm.' },
    { key: 'B', text: 'Trong một CSDL, ràng buộc toàn vẹn được xem như là một công cụ để diễn đạt ngữ nghĩa của CSDL.' },
    { key: 'C', text: 'Công việc kiểm tra ràng buộc toàn vẹn thường được tiến hành tại thời điểm cập nhật dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn cả 3 ý từ Slide Ch.4 Tổng quan TKCSDL tr.13 (*III/ Ràng buộc toàn vẹn quan hệ*):\n- RBTV là các điều kiện bất biến không được vi phạm ở mọi thời điểm (**A đúng**).\n- RBTV được xem như công cụ để diễn đạt ngữ nghĩa của CSDL (**B đúng**).\n- Việc kiểm tra RBTV thường tiến hành vào thời điểm cập nhật dữ liệu: thêm/sửa/xóa (**C đúng**).\nVì cả ba khẳng định đều đúng nên chọn **D**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.13', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.11', 'Đề LTCSDL số 3 – câu 40']
},
{
  id: 'ltcsdl-de3-41', exam: 'ltcsdl-de3', no: 41, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1=\\{CDA\\},\\; R_2=\\{BD\\}$' },
    { key: 'B', text: '$R_1=\\{AD\\},\\; R_2=\\{ABC\\}$' },
    { key: 'C', text: '$R_1=\\{CD\\},\\; R_2=\\{ABD\\}$' },
    { key: 'D', text: '$R_1=\\{CA\\},\\; R_2=\\{ABD\\}$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa CSDL tr.50):\n1. Tìm khóa của $R$: $TN = \\{A\\}$, $TG = \\{C, D\\}$ ($B$ chỉ ở vế phải). Ta có $A^+ = A$, $(AC)^+ = ABCD$, $(AD)^+ = ABCD \\Rightarrow$ hai khóa là $AC$ và $AD$.\n2. Xét $D \\to C$: $D^+ = CD \\neq ABCD$ nên $D$ không là siêu khóa $\\Rightarrow$ $D \\to C$ vi phạm BCNF.\n3. Tách theo $D \\to C$: tạo $R_1 = \\{C, D\\}$ (khóa $D$, đạt BCNF) và $R_2 = R \\setminus \\{C\\} = \\{A, B, D\\}$ (PTH chiếu là $AD \\to B$ với khóa $AD$, đạt BCNF). Giao $R_1 \\cap R_2 = D \\to C$ nên kết nối **không mất mát thông tin** $\\Rightarrow$ **C đúng**.\n- Kiểm tra bảng chase cho A, B, D đều cho kết quả **mất mát thông tin**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 47, 50', 'Đề LTCSDL số 3 – câu 41']
},
{
  id: 'ltcsdl-de3-42', exam: 'ltcsdl-de3', no: 42, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{AB\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1,R_2\\}$ tách $R$ thành hai lược đồ $R_1(B,C)$ và $R_2(A,C)$. Phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép tách bảo toàn phụ thuộc hàm.' },
    { key: 'B', text: 'Phép tách không bảo toàn phụ thuộc hàm.' },
    { key: 'C', text: 'Phép tách kết nối mất mát thông tin.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây là ví dụ nguyên văn trên Slide Ch.4 Chuẩn hóa CSDL tr.44:\n1. Chiếu $F$ lên $R_1(B,C)$: $B^+=B,\\; C^+=AC \\Rightarrow \\Pi_{R_1}(F) = \\emptyset$.\n2. Chiếu $F$ lên $R_2(A,C)$: có $C \\to A \\Rightarrow \\Pi_{R_2}(F) = \\{C \\to A\\}$.\n3. Hợp $G = \\{C \\to A\\}$: trên $G$ tính $(AB)^+ = AB \\not\\ni C$, suy ra $AB \\to C \\notin G^+$ $\\Rightarrow$ **$D$ không bảo toàn phụ thuộc hàm** (**B đúng**, loại A).\n4. Vì $R_1 \\cap R_2 = \\{C\\}$ và $C \\to A$ (xác định toàn bộ $R_2$) nên phép tách **không mất mát thông tin** (loại C).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.43–47', 'Đề LTCSDL số 3 – câu 42']
},
{
  id: 'ltcsdl-de3-43', exam: 'ltcsdl-de3', no: 43, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là đúng nhất khi nói về bao đóng của các thuộc tính?',
  figure: null,
  options: [
    { key: 'A', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$, các thuộc tính không xuất hiện trong $F$ và các thuộc tính thuộc vế phải được suy diễn logic từ tập $F$' },
    { key: 'B', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$ và các thuộc tính vế phải được suy diễn logic từ tập $F$' },
    { key: 'C', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế phải của các phụ thuộc hàm.' },
    { key: 'D', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế trái của các phụ thuộc hàm' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.13: bao đóng của tập thuộc tính $X$ đối với $F$ là $X^+ = \\{A \\in U \\mid X \\to A \\in F^+\\}$, luôn thỏa $X \\subseteq X^+$ và bổ sung các thuộc tính ở vế phải được suy diễn logic từ $X$ qua $F$ (**B đúng**).\n- A sai vì nhầm với quy tắc tìm **khóa** (các thuộc tính không xuất hiện trong $F$ phải nằm trong *khóa*, không nằm sẵn trong $X^+$ của một tập $X$ bất kỳ).\n- C và D sai vì không liên quan đến tập $X$ cần tính bao đóng.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.13', 'Đề LTCSDL số 3 – câu 43']
},
{
  id: 'ltcsdl-de3-44', exam: 'ltcsdl-de3', no: 44, chapter: 'ch4', topic: '1.8',
  stem: 'Khẳng định nào sau đây là đúng nhất về chuẩn hóa dữ liệu?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuẩn hoá dữ liệu là quá trình thực hiện các phép lưu trữ nhằm đảm bảo tính toàn vẹn của dữ liệu.' },
    { key: 'B', text: 'Chuẩn hoá dữ liệu là quá trình tách các lược đồ quan hệ không làm tổn thất thông tin.' },
    { key: 'C', text: 'Chuẩn hóa dữ liệu là quá trình tách các quan hệ từ dạng chuẩn cao về dạng chuẩn thấp.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.3 và tr.38: **chuẩn hóa quan hệ** là quá trình khảo sát và phân rã (tách) các lược đồ quan hệ từ dạng chuẩn thấp lên dạng chuẩn cao hơn **sao cho vẫn bảo toàn phụ thuộc và không làm mất mát (tổn thất) thông tin** (**B đúng**).\n- A sai vì chuẩn hóa không phải "các phép lưu trữ"; C sai ngược chiều (phải đưa từ dạng chuẩn thấp lên dạng chuẩn cao).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.3, 38', 'Đề LTCSDL số 3 – câu 44']
},
{
  id: 'ltcsdl-de3-45', exam: 'ltcsdl-de3', no: 45, chapter: 'ch4', topic: '3.4',
  stem: 'Cho $F=\\{B\\to D,\\; AC\\to B,\\; A\\to C,\\; E\\to A,\\; AE \\to D\\}$. Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$A \\to C$ là dư thừa' },
    { key: 'B', text: '$AC \\to B$ là dư thừa' },
    { key: 'C', text: '$AE \\to D$ là dư thừa' },
    { key: 'D', text: '$B \\to D$ là dư thừa' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng PTH bằng cách bỏ nó khỏi $F$ và tính bao đóng vế trái trên $F\' = F \\setminus \\{f\\}$ (Slide Ch.4 PTH tr.18, 27):\n- Xét $AE \\to D$: trên $F \\setminus \\{AE\\to D\\}$, tính $(AE)^+$:\n  - $X_0 = AE \\xrightarrow{A\\to C} ACE \\xrightarrow{AC\\to B} ABCE \\xrightarrow{B\\to D} ABCDE \\supseteq D$.\n  Vậy $AE \\to D$ suy diễn được từ các PTH còn lại $\\Rightarrow$ **$AE \\to D$ là dư thừa** (**C đúng**).\n- Khi bỏ các PTH khác thì $A^+ = A$ (mất $C$), $(AC)^+ = AC$ (mất $B$), $B^+ = B$ (mất $D$) nên A, B, D đều không dư thừa.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18, 27', 'Đề LTCSDL số 3 – câu 45']
},
{
  id: 'ltcsdl-de3-46', exam: 'ltcsdl-de3', no: 46, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K\\subseteq U$ là siêu khóa của $R$ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K$ là khóa của $R$.' },
    { key: 'B', text: '$K^+ = U$ hay $K \\to U$' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo định nghĩa tại Slide Ch.4 Phụ thuộc hàm tr.30:\n- Tập $K \\subseteq U$ là **siêu khóa** của $R$ nếu $K^+ = U$ hay $K \\to U$ (**B đúng**).\n- Mọi **khóa** của $R$ đều là siêu khóa nhỏ nhất (thỏa mãn $K \\to U$ và không chứa tập con thực sự nào là siêu khóa), nên nếu $K$ là khóa của $R$ thì chắc chắn $K$ là siêu khóa của $R$ (**A đúng**).\nDo cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề LTCSDL số 3 – câu 46']
},
{
  id: 'ltcsdl-de3-47', exam: 'ltcsdl-de3', no: 47, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. Các siêu khóa có thể của $R$ gồm:',
  figure: null,
  options: [
    { key: 'A', text: '$AB, AD, ABD$' },
    { key: 'B', text: '$BC, BD, BDC$' },
    { key: 'C', text: '$AC, BD, ACBD$' },
    { key: 'D', text: '$AC, AD, ACD$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khóa của $R(A,B,C,D)$ bằng TN/TG (Slide Ch.4 PTH tr.41–42): $TN = \\{A\\}$, $TG = \\{C, D\\}$ ($B$ chỉ ở vế phải nên không nằm trong khóa). Có $A^+ = A$; $(AC)^+ = ABCD$ (dùng $AC \\to BD$); $(AD)^+ = ABCD$ (dùng $AD\\to B$, $D\\to C$). Vậy $R$ có hai khóa là $AC$ và $AD$.\n2. Mọi siêu khóa phải chứa ít nhất một khóa (tập đầy đủ 6 siêu khóa là $AC, AD, ABC, ABD, ACD, ABCD$).\n- Chỉ **D (`AC, AD, ACD`)** có cả 3 tập đều là siêu khóa ($K^+ = ABCD$); ở A, B, C đều có tập không phải siêu khóa ($(AB)^+=AB$, $(BC)^+=BC$, $(BD)^+=BCD$). Chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 38, 41–42', 'Đề LTCSDL số 3 – câu 47']
},
{
  id: 'ltcsdl-de3-48', exam: 'ltcsdl-de3', no: 48, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '1NF' },
    { key: 'B', text: '3NF' },
    { key: 'C', text: 'BCNF' },
    { key: 'D', text: '2NF' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán xác định dạng chuẩn cao nhất (Slide Ch.4 Chuẩn hóa tr.13, 15, 37):\n1. Tìm khóa của $R(A,B,C,D,E)$: $E$ không có trong $F$ và $C$ chỉ ở vế trái $\\Rightarrow TN = \\{C, E\\}$; $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải). Tính $(CE)^+ = ACE \\neq U$; $(BCE)^+ = ABCDE$; $(CDE)^+ = ABCDE$. Vậy $R$ có hai khóa là $BCE$ và $CDE$.\n2. Thuộc tính khóa: $B, C, D, E$; thuộc tính không khóa: $A$.\n3. Kiểm tra **2NF**: tập con thực sự $S = \\{C\\}$ của khóa $BCE$ có $C^+ = \\{A, C\\}$ chứa thuộc tính không khóa $A$ (tức $A$ phụ thuộc bộ phận vào khóa). Vậy $R$ vi phạm 2NF $\\Rightarrow$ dạng chuẩn cao nhất là **1NF** (**A đúng**).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 15, 37', 'Đề LTCSDL số 3 – câu 48']
},
{
  id: 'ltcsdl-de3-49', exam: 'ltcsdl-de3', no: 49, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D\\}$. Khóa của lược đồ quan hệ $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$AB$' },
    { key: 'B', text: '$BD$' },
    { key: 'C', text: '$BH$' },
    { key: 'D', text: '$AD$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm khóa TN/TG (Slide Ch.4 PTH tr.35, 41–42):\n- $A$ và $B$ chỉ xuất hiện ở vế trái (không xuất hiện ở vế phải PTH nào trong $F$), nên $TN = \\{A, B\\}$ bắt buộc nằm trong mọi khóa.\n- Tính bao đóng $(AB)^+$:\n  - $X_0 = AB \\xrightarrow{AB\\to DG} ABDG \\xrightarrow{BG\\to H} ABDGH \\xrightarrow{BH\\to C} ABCDGH \\xrightarrow{HC\\to E} ABCDEGH = U$.\n- Vì $(TN)^+ = (AB)^+ = U$ nên **$AB$ là khóa duy nhất** của $R$ $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.35, 41–42', 'Đề LTCSDL số 3 – câu 49']
},
{
  id: 'ltcsdl-de3-50', exam: 'ltcsdl-de3', no: 50, chapter: 'ch1', topic: '1.1',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu' },
    { key: 'B', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'C', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'D', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Ảnh gốc 17.jpg bị mất nét (mờ); phần cuối phương án B ("...để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu") khá mờ khi đọc riêng từ 17.jpg nhưng khớp nguyên văn câu cùng ngân hàng đề (ltcsdl-de2, k16-ca1). Theo Slide Ch.4 Tổng quan TKCSDL tr.3 và đa số đề cùng ngân hàng, D mới là định nghĩa đúng (B mô tả bước mô hình hóa ở Ch.1 tr.29–30).',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.3 (*Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** nhằm tối ưu việc lưu trữ và khai thác dữ liệu (Slide Ch.1 tr.9) $\\Rightarrow$ **D đúng nhất**.\n- A sai ngược chiều chuẩn hóa; B mô tả bước mô hình hóa trong phần các bước xây dựng hệ CSDL (Slide Ch.1 tr.29–30); C chỉ nói phiến diện về việc chia nhỏ quan hệ.',
  source: ['Slide Ch.1 Tổng quan – tr.29–30', 'Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Đề LTCSDL số 3 – câu 50']
}
);
