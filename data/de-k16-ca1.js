/* Đề thi KTHP 2020–2021 (K16) – Ca 1 – nguồn: tai-lieu/Đề k16/Đề ca 1 & tai-lieu-text/de/k16-ca1.md */
DB.questions.push(
{
  id: 'k16-ca1-01', exam: 'k16-ca1', no: 1, chapter: 'ch1', topic: '1.1',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Người sử dụng CSDL có thể truy xuất vào dữ liệu tùy ý.' },
    { key: 'B', text: 'Người sử dụng CSDL có thể truy xuất vào dữ liệu tùy thuộc vào quyền được truy cập đã được cấp.' },
    { key: 'C', text: 'Người sử dụng CSDL không thể truy xuất vào dữ liệu, chỉ được xem thông tin về dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'B', marked: 'B', outside: true, incomplete: null, note: null,
  explanation: 'Một trong các chức năng và tiêu chuẩn bảo mật của CSDL / HQT CSDL là kiểm soát, điều khiển truy cập và phân quyền (Slide Ch.1 tr.14): người sử dụng chỉ được truy xuất dữ liệu **tùy thuộc vào quyền truy cập đã được người quản trị CSDL (DBA) cấp**.\n- A sai vì người dùng không được truy xuất tùy ý.\n- C sai vì người dùng có thể truy xuất dữ liệu thật theo quyền hạn chứ không chỉ xem siêu dữ liệu.',
  source: ['Slide Ch.1 Tổng quan – tr.14', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 1']
},
{
  id: 'k16-ca1-02', exam: 'k16-ca1', no: 2, chapter: 'ch1', topic: '1.2',
  stem: 'Thứ tự đúng cho các mức biểu diễn cơ sở dữ liệu trong mô hình kiến trúc CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Mức ngoài, mức quan niệm và mức mô hình.' },
    { key: 'B', text: 'Mức ngoài, mức quan niệm và mức trong.' },
    { key: 'C', text: 'Mức quan niệm, mức trong và mức ngoài.' },
    { key: 'D', text: 'Mức trong, mức mô hình dữ liệu và mức ngoài.' }
  ],
  answer: 'B', marked: 'C', outside: true, incomplete: null, note: null,
  explanation: 'Theo kiến trúc 3 mức ANSI/SPARC, thứ tự các mức biểu diễn CSDL đi từ phía người dùng xuống lưu trữ vật lý là: **Mức ngoài** (khung nhìn từng nhóm người dùng) $\\to$ **Mức quan niệm** (toàn bộ nội dung thông tin CSDL) $\\to$ **Mức trong** (cấu trúc lưu trữ vật lý trên đĩa).\n- A, D sai vì không có "mức mô hình"; C xếp sai thứ tự.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 2']
},
{
  id: 'k16-ca1-03', exam: 'k16-ca1', no: 3, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan tr.16 (phân loại đối tượng sử dụng CSDL trực tiếp):\n- **Người phát triển ứng dụng và lập trình** là người chuyên nghiệp về máy tính, chịu trách nhiệm thiết kế, tạo dựng và bảo trì hệ thống chương trình ứng dụng khai thác CSDL.\n- Người quản trị CSDL (DBA) quản lý, bảo trì CSDL và phân quyền; người dùng cuối sử dụng phần mềm ứng dụng đó.',
  source: ['Slide Ch.1 Tổng quan – tr.16', 'Đề K16 – Ca 1 – câu 3']
},
{
  id: 'k16-ca1-04', exam: 'k16-ca1', no: 4, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' },
    { key: 'B', text: 'Cung cấp công cụ quản lý bộ nhớ.' },
    { key: 'C', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' },
    { key: 'D', text: 'Cung cấp môi trường tạo lập CSDL.' }
  ],
  answer: 'B', marked: 'B', outside: true, incomplete: null, note: null,
  explanation: 'Ba chức năng cơ bản của một HQT CSDL là: (1) cung cấp môi trường tạo lập CSDL (DDL – D), (2) cung cấp môi trường cập nhật và khai thác dữ liệu (DML/SQL – A), (3) cung cấp công cụ kiểm soát, điều khiển truy cập, bảo mật và toàn vẹn (DCL – C).\n- **Quản lý bộ nhớ** là nhiệm vụ của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 4']
},
{
  id: 'k16-ca1-05', exam: 'k16-ca1', no: 5, chapter: 'ch1', topic: '1.2',
  stem: 'Chọn phương án đúng nhất.',
  figure: null,
  options: [
    { key: 'A', text: 'CSDL mức quan niệm là một biểu diễn trừu tượng của CSDL mức vật lý.' },
    { key: 'B', text: 'CSDL mức quan niệm được dành cho người quản trị và người sử dụng chuyên môn.' },
    { key: 'C', text: 'CSDL mức quan niệm chỉ làm việc trên một phần CSDL, còn gọi là khung nhìn (View).' },
    { key: 'D', text: 'CSDL mức quan niệm giải quyết các vấn đề: dữ liệu là gì? Lưu trữ thế nào?' }
  ],
  answer: 'A', marked: 'A', outside: true, incomplete: null, note: 'Ảnh chụp Câu 5 hơi mờ nhưng vẫn đọc rõ toàn bộ nội dung (khớp Câu 1 trong đề ltcsdl-de3).',
  explanation: 'Trong kiến trúc 3 mức ANSI/SPARC:\n- **Mức quan niệm** mô tả cấu trúc logic toàn bộ CSDL (thực thể, thuộc tính, liên kết, ràng buộc) và ẩn đi chi tiết cài đặt ở mức trong $\\Rightarrow$ là **biểu diễn trừu tượng của CSDL mức vật lý** (**A đúng**).\n- B sai vì không dành riêng cho "người sử dụng chuyên môn"; C mô tả **mức ngoài** (View); D sai vì câu hỏi "Lưu trữ thế nào?" thuộc về **mức trong / vật lý**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 5']
},
{
  id: 'k16-ca1-06', exam: 'k16-ca1', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), tên thuộc tính trong bài toán thường được mô tả bởi',
  figure: null,
  options: [
    { key: 'A', text: 'Tính từ.' },
    { key: 'B', text: 'Động từ.' },
    { key: 'C', text: 'Danh từ.' },
    { key: 'D', text: 'Danh từ và tính từ.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Trong phân tích mô hình ER (Slide Ch.2 tr.5, 7, 16, 27): tên kiểu thực thể và tên **thuộc tính** thường được mô tả bởi **danh từ** (hoặc cụm danh từ, như `Họ tên`, `Ngày sinh`, `Địa chỉ`, `Lương`, `Tuổi`), còn tên mối liên kết được mô tả bởi **động từ** (loại B).\n- A (chỉ tính từ) và D (kết hợp cả danh từ và tính từ) không phải quy ước chính cho tên thuộc tính.',
  source: ['Slide Ch.2 Mô hình ER – tr.5, 7, 16, 27', 'Đề K16 – Ca 1 – câu 6']
},
{
  id: 'k16-ca1-07', exam: 'k16-ca1', no: 7, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các thuộc tính Mã nhân viên, lương, hệ số lương? Biết rằng lươ…',
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
      { label: 'Lương', kind: 'multi', dx: -135, dy: 0 },
      { label: '(bị cắt)', dx: 0, dy: -62 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null,
  note: 'Cuối đề bài bị cắt ở mép phải ("Biết rằng lươ…") và nhãn thuộc tính phía trên ở sơ đồ C bị cắt giữa hai ảnh (chỉ thấy đáy elip nét liền). Đối chiếu cùng câu trong ngân hàng đề (ltcsdl-de3 câu 7), phần bị cắt là "lương được tính theo hệ số lương" và nhãn ở C là `HSL`.',
  explanation: '1. `Mã NV` là thuộc tính **khóa** định danh thực thể `NHÂN VIÊN` $\\Rightarrow$ phải vẽ elip nét liền có **gạch chân** (loại D vì không gạch chân `Mã NV`).\n2. `Lương` tính được từ `HSL` nên là **thuộc tính suy dẫn** $\\Rightarrow$ vẽ bằng **elip nét đứt** (loại C vì vẽ `Lương` bằng elip kép/đậm đa trị).\n3. `HSL` là thuộc tính lưu trữ bình thường $\\Rightarrow$ vẽ bằng **elip nét liền** (loại A vì vẽ cả `HSL` nét đứt). Chọn **B**.',
  sameAs: ['de-2021-2-07'],
  source: ['Slide Ch.2 Mô hình ER – tr.11–12, 32', 'Đề K16 – Ca 1 – câu 7']
},
{
  id: 'k16-ca1-08', exam: 'k16-ca1', no: 8, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể liên kết (ER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình CSDL mà dữ liệu được tổ chức thành các bảng, các phép toán thao tác trên dữ liệu dựa trên lý thuyết tập hợp của toán học.' },
    { key: 'B', text: 'Mô hình CSDL biểu diễn dữ liệu thành một mạng, trong đó các đỉnh là các bản ghi, các cung là mối quan hệ giữa các đỉnh.' },
    { key: 'C', text: 'Mô hình CSDL mô tả súc tích về các đối tượng và mối quan hệ giữa các đối tượng trong thế giới thực.' },
    { key: 'D', text: 'Mô hình CSDL biểu diễn dữ liệu thành một đồ thị có hướng, trong đó các đỉnh là các thực thể, các cung là quan hệ giữa các đỉnh.' }
  ],
  answer: 'C', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn định nghĩa ở Slide Ch.1 Tổng quan tr.23 và Slide Ch.2 Mô hình ER tr.2: **Mô hình thực thể liên kết (ER)** là mô hình **mô tả súc tích về các đối tượng cùng với các mối liên kết giữa các đối tượng trong thế giới thực**.\n- A là mô hình quan hệ; B là mô hình mạng; D mô tả sai bản chất đồ thị có hướng (liên kết ER là đồ thị vô hướng/lưỡng phân giữa thực thể và hình thoi liên kết, không phải các cung có hướng nối trực tiếp giữa các thực thể).',
  source: ['Slide Ch.1 Tổng quan – tr.23', 'Slide Ch.2 Mô hình ER – tr.2', 'Đề K16 – Ca 1 – câu 8']
},
{
  id: 'k16-ca1-09', exam: 'k16-ca1', no: 9, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: “Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác đ[bị cắt] thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty”. Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các t[bị cắt] gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Điện thoại.' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Hai dòng đề bài bị cắt vài từ ở mép phải màn hình ("xác đ… thoại để liên hệ" và "các t… gồm:"). Đối chiếu cùng câu trong ngân hàng đề (ltcsdl-de3 câu 10), câu đầy đủ là "mã số này xác định tên phòng ban và có số điện thoại để liên hệ… các thuộc tính của thực thể PHÒNG gồm:".',
  explanation: 'Khi xây dựng **mô hình ER** (mức khái niệm, Slide Ch.2 tr.15–17, 27), mối quan hệ "mỗi phòng có một người quản lý là nhân viên" được biểu diễn bằng **hình thoi liên kết** `Quản lý` giữa `PHÒNG` và `NHÂN VIÊN` (với thuộc tính liên kết `Ngày quản lý` nếu có), **không** đưa khóa ngoại `Mã người quản lý` vào làm thuộc tính của thực thể `PHÒNG`.\n- Loại B, C vì chứa `Mã người quản lý` (khóa ngoại mức quan hệ) hoặc thuộc tính liên kết.\n- Loại D vì mô tả không có `Địa chỉ`. Chọn **A**.',
  sameAs: ['k16-ca2-10'],
  source: ['Slide Ch.2 Mô hình ER – tr.15–17, 27', 'Đề K16 – Ca 1 – câu 9']
},
{
  id: 'k16-ca1-10', exam: 'k16-ca1', no: 10, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết 1-1 giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'B', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Trong ảnh chụp thứ 3 có vòng tròn đỏ chọn B, còn ở ảnh chụp thứ 4 (chụp lại đầy đủ câu 10) không có vòng tròn đỏ.',
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.20: **kiểu liên kết 1–1** là liên kết trong đó một thực thể kiểu $A$ liên kết với (tối đa) một thực thể kiểu $B$ và ngược lại, một thực thể kiểu $B$ liên kết với (tối đa) một thực thể kiểu $A$ (**A đúng**).\n- B là định nghĩa liên kết nhiều–nhiều ($m-n$); C, D mô tả liên kết $1-n$.',
  source: ['Slide Ch.2 Mô hình ER – tr.20', 'Đề K16 – Ca 1 – câu 10']
},
{
  id: 'k16-ca1-11', exam: 'k16-ca1', no: 11, chapter: 'ch2', topic: '2.1',
  stem: 'Phương án nào sai khi mô tả về kiểu dữ liệu của các thuộc tính của lớp thực thể trong mô hình thực thể liên kết ER?',
  figure: null,
  options: [
    { key: 'A', text: 'Tuổi là một số nguyên.' },
    { key: 'B', text: 'Ngày sinh là một chuỗi ký tự.' },
    { key: 'C', text: 'Số điện thoại là một số nguyên.' },
    { key: 'D', text: 'Tên người là một chuỗi ký tự.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Các giá trị như `Số điện thoại` có thể bắt đầu bằng chữ số `0` (số nguyên sẽ làm mất số `0` ở đầu), có thể chứa dấu cách/dấu `+`, và **không dùng để thực hiện phép tính số học** $\\Rightarrow$ phải lưu dưới dạng **chuỗi ký tự**, không phải số nguyên. Do đó khẳng định **C sai**.\n- A, B, D đều hợp lý khi biểu diễn dữ liệu (trong đó `Ngày sinh` có thể lưu kiểu ngày hoặc chuỗi ký tự định dạng ngày).',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.4, 15', 'Bài tập Ch.2 (Google Form)', 'Đề K16 – Ca 1 – câu 11']
},
{
  id: 'k16-ca1-12', exam: 'k16-ca1', no: 12, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả: “Một nhân viên có thể có một người giám sát, người đó cũng là nhân viên. Một nhân viên có thể giám sát nhiều người”. Mối liên kết được mô tả là mối l[bị cắt]',
  figure: null,
  options: [
    { key: 'A', text: '1-1.' },
    { key: 'B', text: '1-n.' },
    { key: 'C', text: 'Đệ qui.' },
    { key: 'D', text: 'm-n.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null,
  note: 'Cuối đề bài bị cắt ở mép phải màn hình ("mối l…"; câu đầy đủ trong ngân hàng đề là "mối liên kết?").',
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19: **Liên kết đệ qui** là liên kết bậc 1 trong đó **cùng một kiểu thực thể** (`NHÂN VIÊN`) tham gia vào liên kết với hai vai trò khác nhau (`người giám sát` và `người bị giám sát`), lấy đúng ví dụ *"Nhân viên A giám sát nhân viên B"*. Vì điểm nhấn của mô tả là *"người đó cũng là nhân viên"* nên chọn **C (Đệ qui)**.\n*(Lưu ý: xét riêng về bản số thì đây là liên kết đệ qui $1-n$.)*',
  source: ['Slide Ch.2 Mô hình ER – tr.19', 'Đề K16 – Ca 1 – câu 12']
},
{
  id: 'k16-ca1-13', exam: 'k16-ca1', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: 'D', outside: false, incomplete: null,
  note: 'Ở ảnh 221467278 câu 13 được khoanh đỏ D, còn ở ảnh 234327350 phần lặp lại dòng D không có khoanh đỏ.',
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể"** $\\Rightarrow$ **A đúng**.\n- B sai vì quy tắc nghiệp vụ rộng hơn, bao gồm cả ràng buộc lực lượng, ràng buộc toàn vẹn… không phải định nghĩa của liên kết.\n- C sai vì liên kết có thể là tham gia bộ phận (tùy chọn), không phải lúc nào cũng là "ràng buộc bắt buộc".',
  source: ['Slide Ch.2 Mô hình ER – tr.15', 'Đề K16 – Ca 1 – câu 13']
},
{
  id: 'k16-ca1-14', exam: 'k16-ca1', no: 14, chapter: 'ch2', topic: '2.6',
  stem: 'Một tổ chức phi lợi nhuận quản lý các nhân viên làm việc theo mã nhân viên. Có ba loại nhân viên: nhân viên cơ hữu, nhân viên tình nguyện, nhà tài trợ. Thông tin về nhân viên cơ hữu gồ[bị cắt] họ tên, ngày sinh, địa chỉ và ngày tuyển dụng. Thông tin về nhân viên tình nguyện gồm họ tên, ngày sinh, địa chỉ và kỹ năng. Thông tin về nhà tài trợ gồm họ tên, ngày sinh, địa chỉ và ngày [bị cắt] bắt đầu tài trợ. Xác định kiểu thực thể cha cùng các thuộc tính tương ứng.',
  figure: null,
  options: [
    { key: 'A', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ.' },
    { key: 'B', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng, kỹ năng và ngày bắt đầu tài trợ.' },
    { key: 'C', text: 'Nhân viên cơ hữu với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng; Nhân viên tình nguyện với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, kỹ năng; Nhà tài trợ vớ[bị cắt] các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày bắt đầu tài trợ.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'A', marked: 'C', outside: true, incomplete: null,
  note: 'Mép phải ảnh gốc bị cắt vài chữ cái cuối dòng (sau "gồ", sau "ngày", và sau "vớ").',
  explanation: 'Trong mô hình EER, **kiểu thực thể cha** chỉ chứa **các thuộc tính chung** của mọi lớp con để các lớp con kế thừa; các thuộc tính đặc thù đặt ở từng lớp con:\n- Thuộc tính chung của cả 3 loại nhân viên là: `mã nhân viên, họ tên, ngày sinh, địa chỉ` $\\Rightarrow$ kiểu cha là **`Nhân viên`** với 4 thuộc tính này (**A đúng**).\n- B sai vì gộp hết thuộc tính riêng (`ngày tuyển dụng`, `kỹ năng`, `ngày bắt đầu tài trợ`) lên kiểu cha.\n- C liệt kê 3 kiểu con chứ không phải kiểu cha.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 14']
},
{
  id: 'k16-ca1-15', exam: 'k16-ca1', no: 15, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có thể có nhiều địa chỉ liên lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', kind: 'derived', dx: -82, dy: 64 },
        { label: 'Phường', kind: 'derived', dx: 0, dy: 64 },
        { label: 'Tỉnh', kind: 'derived', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
        { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0 },
        { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
      ] }],
      notes: [{ text: 'Phần dưới bị cắt giữa 2 ảnh (không thấy thuộc tính con)', x: 240, y: 125 }]
    } } }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null,
  note: 'Trong ảnh gốc, phần dưới sơ đồ D bị cắt qua hai ảnh (đầu ảnh kế tiếp chỉ thấy phần đáy elip `Địa chỉ` và `Mã Khách`, không có `Xã, Phường, Tỉnh` — khớp biến thể không tách phức hợp ở đề ltcsdl-de3 câu 14). Ngoài ra ảnh dùng nét viền dày để biểu diễn elip kép đa trị.',
  explanation: '1. `Mã Khách` là **khóa** của `KHÁCH HÀNG` $\\Rightarrow$ phải vẽ **gạch chân** (loại A vì không gạch chân).\n2. Mỗi khách hàng có **nhiều địa chỉ liên lạc** $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị**, phải vẽ **elip kép / nét đôi** (loại C vì vẽ `Địa chỉ` bằng elip đơn mảnh).\n3. Địa chỉ ở Việt Nam gồm các thành phần `Xã`, `Phường`, `Tỉnh` (**thuộc tính phức hợp** vẽ bằng elip đơn nét liền nối từ elip đa trị `Địa chỉ`, không vẽ nét đứt như A và đầy đủ chi tiết hơn D). Chọn **B**.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–10, 12', 'Đề K16 – Ca 1 – câu 15']
},
{
  id: 'k16-ca1-16', exam: 'k16-ca1', no: 16, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: 'A', outside: true, incomplete: null, note: null,
  explanation: 'Theo mô hình EER (Đề cương 2023 mục 2.4.5):\n- **Ràng buộc tách biệt (`d` – disjoint)**: một thực thể lớp cha chỉ thuộc **tối đa một** lớp con (không thể đồng thời thuộc hai hay nhiều lớp con) $\\Rightarrow$ A đúng.\n- **Ràng buộc phủ lấp / chồng lấn (`o` – overlapping)**: một thực thể lớp cha **có thể đồng thời** là thành viên của nhiều lớp con $\\Rightarrow$ B đúng.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 16']
},
{
  id: 'k16-ca1-17', exam: 'k16-ca1', no: 17, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc phủ lấp trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 165, y: 95, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -55, dy: -60 },
          { label: 'Mô tả', dx: 55, dy: -60 },
          { label: 'Địa điểm SX', dx: -135, dy: 0 },
          { label: 'Giá', dx: 0, dy: 60 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 410, y: 40, attrs: [{ label: 'Số hiệu', dx: 120, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 410, y: 150, attrs: [{ label: 'Mã nhà CC', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 95, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }],
      notes: [{ text: 'Hai nhánh xuống lớp con ở ảnh gốc vẽ nét đôi/đậm', x: 350, y: 195 }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 165, y: 95, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -55, dy: -60 },
          { label: 'Mô tả', dx: 55, dy: -60 },
          { label: 'Địa điểm SX', dx: -135, dy: 0 },
          { label: 'Giá', dx: 0, dy: 60 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 410, y: 40, attrs: [{ label: 'Số hiệu', dx: 120, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 410, y: 150, attrs: [{ label: 'Mã nhà CC', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 95, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 165, y: 95, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -55, dy: -60 },
          { label: 'Mô tả', dx: 55, dy: -60 },
          { label: 'Địa điểm SX', dx: -135, dy: 0 },
          { label: 'Giá', dx: 0, dy: 60 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 410, y: 40, attrs: [{ label: 'Số hiệu', dx: 120, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 410, y: 150, attrs: [{ label: 'Mã nhà CC', dx: 130, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 280, y: 95, kind: 'o', parent: 'lk', total: true, children: ['sx', 'cc'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 165, y: 95, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -55, dy: -60 },
          { label: 'Mô tả', dx: 55, dy: -60 }
        ] },
        { id: 'sx', label: 'LK_Tự SX', x: 410, y: 40, attrs: [{ label: 'Số hiệu', dx: 120, dy: 0 }] }
      ],
      notes: [{ text: 'Phần dưới (vòng tròn, LK_Cung cấp) bị cắt ở đáy ảnh', x: 270, y: 150 }]
    } } }
  ],
  answer: 'C', marked: 'B', outside: true, incomplete: null,
  note: 'Sơ đồ D bị cắt phần dưới ở đáy ảnh (không thấy vòng tròn chuyên biệt hóa và lớp con `LK_Cung cấp`). Đối chiếu cùng câu hỏi trong ngân hàng đề (ltcsdl-de3 câu 15, de-2021-2 câu 10), phương án thứ tư có vòng chữ `o` nhưng đường từ `LINH KIỆN` tới vòng tròn là nét đơn (bộ phận), không phù hợp bằng nét đôi (toàn phần) ở C.',
  explanation: '1. Yêu cầu mô tả **ràng buộc phủ lấp** (*overlapping*) $\\Rightarrow$ vòng tròn chuyên biệt hóa phải ghi chữ **`o`** (loại A và B vì ghi chữ **`d`** là tách biệt; ngoài ra A còn vẽ sai nét đôi cho cả nhánh xuống lớp con).\n2. Mọi linh kiện đều thuộc ít nhất một trong hai loại (`LK_Tự SX` hoặc `LK_Cung cấp`, có thể cả hai) $\\Rightarrow$ tham gia **toàn phần** (**nét đôi** từ `LINH KIỆN` tới vòng tròn `o`, và hai nhánh xuống lớp con vẽ nét đơn kèm ký hiệu $\\subset$). Phương án **C** vẽ chuẩn xác nhất.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 17']
}
);

DB.questions.push(
{
  id: 'k16-ca1-18', exam: 'k16-ca1', no: 18, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các hàng là quan trọng.' },
    { key: 'B', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các cột là quan trọng.' },
    { key: 'D', text: 'thứ tự của các hàng là không quan trọng.' }
  ],
  answer: 'D', marked: 'D', outside: false,
  incomplete: null,
  note: 'Theo Slide Ch.3 P1 tr.10, "thứ tự các bộ trong quan hệ là không quan trọng" (D), còn "thứ tự giữa các giá trị trong một bộ là quan trọng" (ứng với thứ tự vị trí cột khi viết bộ dạng n-bộ có thứ tự). Lưu ý trong lý thuyết CSDL hiện đại khi các cột được định danh theo tên thuộc tính thì thứ tự cột cũng không quan trọng.',
  explanation: 'Theo các đặc trưng của quan hệ ở Slide Ch.3 Mô hình quan hệ (P1) tr.10:\n- Một quan hệ là một tập hợp các bộ (hàng) nên **thứ tự của các hàng là không quan trọng** (**D đúng**, loại A).\n- Trong một bộ giá trị viết theo vị trí thuộc tính của lược đồ $R(A_1, \\dots, A_n)$, **thứ tự giữa các giá trị là quan trọng** (đảo vị trí `PHAI` và `LUONG` sẽ cho bộ khác nhau), nên trong bộ đề này chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Đề K16 – Ca 1 – câu 18']
},
{
  id: 'k16-ca1-19', exam: 'k16-ca1', no: 19, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào sau [bị cắt] xác yêu cầu: “*Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Cuối dòng 1 đề bài bị cắt ở mép phải sau "nào sau" (đầy đủ là "nào sau đây biểu diễn chính xác yêu cầu:"). Ngoài ra đề gốc viết `MaS` trong `SinhVien` trong khi biểu thức dùng `MaSV`.',
  explanation: 'Yêu cầu tìm sinh viên đã thi **hết tất cả các môn** $\\Rightarrow$ dùng **phép chia ($\\div$)** (Slide Ch.3 P2 tr.29–31):\n1. Chiếu `KetQua` lấy cặp `(MaSV, MaMon)` và chiếu `MonHoc` lấy `(MaMon)` rồi chia: $\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})$ thu được tập `MaSV` đã thi đủ mọi môn.\n2. Đặt ngoặc bọc phép chia trước khi kết nối tự nhiên (`*`) với `SinhVien` rồi chiếu `HoTen` $\\Rightarrow$ **A đúng**.\n- B, C sai vì dùng phép trừ `−` (hai vế khác lược đồ); D thiếu ngoặc bọc phép chia.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31, 38', 'Đề K16 – Ca 1 – câu 19']
},
{
  id: 'k16-ca1-20', exam: 'k16-ca1', no: 20, chapter: 'ch3', topic: '1.5',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: “Cơ sở dữ liệu quan hệ được biểu diễn … với các cột là thuộc tính và các hàng là tập n giá trị của thực thể[bị cắt]',
  figure: null,
  options: [
    { key: 'A', text: 'dưới dạng các bảng' },
    { key: 'B', text: 'cấu trúc hình mạng' },
    { key: 'C', text: 'cấu trúc hình cây' },
    { key: 'D', text: 'dưới dạng các tệp dữ liệu' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh gốc bị cắt dấu ngoặc kép/chấm kết câu sau chữ "thực thể".',
  explanation: 'Theo Slide Ch.1 tr.24 và Slide Ch.3 P1 tr.8: trong mô hình CSDL quan hệ, mỗi quan hệ được biểu diễn trực quan **dưới dạng các bảng** (cột là thuộc tính, dòng là các bộ giá trị).\n- B là mô hình mạng; C là mô hình phân cấp; D là CSDL dạng file.',
  source: ['Slide Ch.1 Tổng quan – tr.24', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.8', 'Đề K16 – Ca 1 – câu 20']
},
{
  id: 'k16-ca1-21', exam: 'k16-ca1', no: 21, chapter: 'ch3', topic: '2.9',
  stem: 'Phép xoá dữ liệu trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Xoá một CSDL.' },
    { key: 'B', text: 'Xoá một quan hệ hay xoá một nhóm các quan hệ.' },
    { key: 'C', text: 'Xoá một bộ hay xoá một nhóm các bộ.' },
    { key: 'D', text: 'Xoá một thuộc tính hay xoá một nhóm các thuộc tính.' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.6: **Phép loại bỏ (`DEL`)** là phép xóa một bộ (hoặc một nhóm các bộ thỏa điều kiện) ra khỏi một quan hệ $r$ cho trước ($r = r - t$).\n- Không phải xóa bảng/quan hệ (B), không phải xóa cột/thuộc tính (D) hay xóa cả CSDL (A).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.6–7', 'Đề K16 – Ca 1 – câu 21']
},
{
  id: 'k16-ca1-22', exam: 'k16-ca1', no: 22, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi các thuộc tính trong lược đồ R không có trong X và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính X.' },
    { key: 'B', text: 'Loại bỏ đi một số thuộc tính trong lược đồ R có trong X và giữ lại các thuộc tính không có trong danh sách thuộc tính X.' },
    { key: 'C', text: 'Loại bỏ đi các hàng trong lược đồ R không thỏa mãn điều kiện X và giữ lại các hàng thỏa mãn điều kiện X.' },
    { key: 'D', text: 'Loại bỏ đi một số hàng trong lược đồ R thỏa mãn điều kiện X và giữ lại các hàng không thỏa mãn điều kiện X.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Các phép toán ĐSQH (P2) tr.19: **Phép chiếu $\\pi_X(R)$** là loại bỏ đi các thuộc tính của lược đồ $R$ **không có trong $X$** và **giữ lại** những thuộc tính được liệt kê trong danh sách thuộc tính $X$ (rút trích theo cột).\n- B phát biểu ngược lại; C và D nói về thao tác theo hàng (phép chọn $\\sigma$).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19', 'Đề K16 – Ca 1 – câu 22']
},
{
  id: 'k16-ca1-23', exam: 'k16-ca1', no: 23, chapter: 'ch3', topic: '2.11',
  stem: 'Khi thực hiện tối ưu hóa biểu thức truy vấn, nhận xét nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Thực hiện các phép chiếu cuối cùng thì tốt hơn.' },
    { key: 'B', text: 'Thực hiện các phép chọn muộn hơn các phép chiếu thì tốt hơn.' },
    { key: 'C', text: 'Thực hiện các phép chọn sớm sẽ làm tăng các bộ dữ liệu.' },
    { key: 'D', text: 'Thực hiện các phép chiếu sớm sẽ làm giảm số các thuộc tính.' }
  ],
  answer: 'D', marked: 'D', outside: true, incomplete: null, note: null,
  explanation: 'Theo quy tắc tối ưu hóa biểu thức ĐSQH (heuristic): thực hiện **phép chọn ($\\sigma$)** và **phép chiếu ($\\pi$)** sớm (trước khi kết nối/tích) giúp giảm kích thước kết quả trung gian:\n- **D đúng** vì phép chiếu sớm loại bỏ các cột không cần dùng $\\Rightarrow$ **giảm số lượng thuộc tính** (kích thước mỗi bộ) trước khi kết nối.\n- A, B sai thứ tự tối ưu (chọn trước rồi chiếu sớm mới tốt); C sai vì phép chọn sớm làm **giảm** (không phải tăng) số bộ.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề K16 – Ca 1 – câu 23']
},
{
  id: 'k16-ca1-24', exam: 'k16-ca1', no: 24, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach},\\text{Hoten},\\text{Diachi},\\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban},\\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang},\\text{DonGia},\\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang},\\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu “*Lập danh sách tên các khách hàng đã mua mặt hàng tivi vào ngày 08/03/2020.*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{mahang},\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'B', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})))$' },
    { key: 'C', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{mahang}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null,
  note: 'Đề gốc viết tắt `maKH`, `ngaylap` (cho `MaKhach`, `NgaylapHD`/`Ngayban`) ở cả A, B, C và chép thiếu hai dấu ngoặc đóng cuối biểu thức A và C.',
  explanation: 'Để kết nối tự nhiên (`*`) từ `ChitietHD`/`Hang` sang `Hoadon` rồi sang `Khach`, các phép chiếu trung gian phải **giữ lại khóa nối** (`soHD` và `maKH`):\n- Ở **B**: nhánh `Hoadon` lọc ngày và chiếu giữ `maKH, soHD`; nhánh `Hang * ChitietHD` lọc `tivi` và chiếu giữ `soHD`; sau đó nối qua `soHD` và `maKH` với `Khach` rồi chiếu `Hoten` (**B đúng**).\n- A sai vì chiếu mất `soHD` ở nhánh `Hoadon` (chỉ giữ `maKH`), làm phép nối tiếp theo biến thành tích Đề-các.\n- C sai vì chiếu mất `soHD` ở nhánh `Hang * ChitietHD` (chỉ giữ `mahang`).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề K16 – Ca 1 – câu 24']
},
{
  id: 'k16-ca1-25', exam: 'k16-ca1', no: 25, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đ[bị cắt] “Lập danh sách các sinh viên được khen thưởng học kỳ 1 hoặc học kỳ 2”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\cap \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} - \\text{DOT2}$' }
  ],
  answer: 'A', marked: 'A', outside: false, incomplete: null,
  note: 'Mép phải ảnh gốc bị cắt chữ cuối dòng 1 ("thể hiện đ…"; đầy đủ trong ngân hàng đề là "thể hiện đúng yêu cầu").',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) tr.10 và ví dụ `DOT1`, `DOT2` ở tr.16:\n- Lấy sinh viên thuộc học kỳ 1 **hoặc** học kỳ 2 tương ứng với **phép hợp ($\\cup$)** $\\Rightarrow$ $\\text{DOT1} \\cup \\text{DOT2}$ (**A đúng**).\n- B là phép giao (cả hai học kỳ); C là tích Đề-các; D là phép trừ (chỉ học kỳ 1, không có ở học kỳ 2).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.10, 16', 'Đề K16 – Ca 1 – câu 25']
},
{
  id: 'k16-ca1-26', exam: 'k16-ca1', no: 26, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. T[bị cắt] đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Liệt kê những tên sách mà bạn đọc có mã số \'BD1001\' đã mượn của thư viện*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) * \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' },
    { key: 'B', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) \\cap \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' },
    { key: 'C', text: '$\\pi_{\\text{TenSach}}(\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON}) * \\text{SACH})$' },
    { key: 'D', text: '$\\pi_{\\text{TenSach},\\; \\sigma \\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON} * \\text{SACH})$' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null,
  note: 'Ảnh gốc bị cắt chữ "Câu" ở lề trái ("âu 26.") và từ "Trong" ở mép phải ("T… đó").',
  explanation: '1. Lọc các phiếu mượn của bạn đọc `BD1001`: $\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$.\n2. Kết nối tự nhiên (`*`) kết quả đó với `SACH` qua thuộc tính chung `MaSH` rồi mới chiếu lấy `TenSach` $\\Rightarrow$ **C đúng**.\n- A sai vì chiếu $\\pi_{\\text{TenSach}}(\\text{SACH})$ trước làm mất khóa nối `MaSH`.\n- B sai vì hai bảng khác lược đồ không dùng phép giao $\\cap$ được.\n- D sai cú pháp (đặt phép chọn $\\sigma$ vào trong danh sách thuộc tính của $\\pi$).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề K16 – Ca 1 – câu 26']
},
{
  id: 'k16-ca1-27', exam: 'k16-ca1', no: 27, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten}, \\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD}, \\text{NgaylapHD}, \\text{Ngayban}, \\text{MaKhach})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “[bị cắt] ra danh sách các khách hàng ở Hà Nội đã mua hàng tại cửa hàng. Thông tin gồm mã khách hàng, tên khách hàng và số điện thoại”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}))$' },
    { key: 'B', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}))$' },
    { key: 'C', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' },
    { key: 'D', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null,
  note: 'Mép phải ảnh bị cắt chữ đầu câu trích dẫn ("Đưa"); các phương án dùng tên viết tắt `maKH` cho `MaKhach`.',
  explanation: 'Yêu cầu gồm hai điều kiện: (1) khách ở Hà Nội (`diachi = ‘Hà Nội’`) và (2) **đã mua hàng** (có mặt `MaKhach` trong `HOADON`).\n- **D đúng**: lọc khách Hà Nội trên `KHACH` trước, kết nối tự nhiên (`*`) với $\\pi_{\\text{maKH}}(\\text{HOADON})$ để giữ lại những người đã từng lập hóa đơn, rồi chiếu `maKH, Hoten, DienThoai`.\n- A thiếu kiểm tra đã mua hàng trong `HOADON`; B, C chiếu bỏ cột `diachi` trước khi chạy $\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}$ nên lỗi.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề K16 – Ca 1 – câu 27']
},
{
  id: 'k16-ca1-28', exam: 'k16-ca1', no: 28, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn **không chính xác** yêu cầu: “*Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}*\\text{Sinhvien}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua} * \\text{SinhVien}))$' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Phương án A vừa sai cú pháp (`∩` trong điều kiện chọn) vừa thừa dấu mở ngoặc `((`. Ngoài ra cần lưu ý phương án B cũng sai ngữ nghĩa khi chiếu `MaSV, HoTen` trước phép giao `∩` (lấy nhầm SV thi môn khác >=5 và trượt T11). Đề gốc ghi `MaS` trong `SinhVien`.',
  explanation: 'Đề hỏi biểu thức **không chính xác**:\n- C và D đều đúng (chỉ khác chọn trước hay nối trước).\n- **A sai hoàn toàn về cú pháp ĐSQH**: bên trong điều kiện chọn $\\sigma$ chỉ được dùng các phép toán logic (`AND`/`OR`/`NOT`), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời A dư một dấu mở ngoặc `(`.\n- *(Ghi chú thêm: phương án B cũng mắc lỗi ngữ nghĩa nếu một sinh viên đạt $\\ge 5$ ở môn khác và $< 5$ ở môn T11 thì vẫn lọt vào kết quả phép giao $\\cap$.)* Chọn **A**.',
  sameAs: ['de-mau-720-24'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề K16 – Ca 1 – câu 28']
},
{
  id: 'k16-ca1-29', exam: 'k16-ca1', no: 29, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan},\\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đ[bị cắt] TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “*Liệt kê những tên sách của tác giả \'Đỗ Trung Tuấn\' do Nhà xuất bản Giáo dục xuất bản có trong* [bị cắt] *thư viện*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’} \\cap \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' },
    { key: 'B', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’},\\; \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' },
    { key: 'D', text: '$\\sigma_{\\text{tacgia}=\\text{‘Đỗ Trung Tuấn’} \\text{ AND } \\text{NhaXuatBan}=\\text{‘Giáo dục’}}(\\text{SACH})$' }
  ],
  answer: 'D', marked: null, outside: false,
  incomplete: 'Ảnh gốc thiếu phương án C (đã giải theo A, B, D)',
  note: 'Mép phải ảnh gốc bị cắt chữ ở dòng 1–2 và toàn bộ phương án C bị cắt giữa hai ảnh chụp. Ngoài ra cả A, B, D đều chỉ thực hiện phép chọn $\\sigma$ trên `SACH` mà chưa chiếu $\\pi_{\\text{TenSach}}$ (khớp Câu 20 trong đề ltcsdl-de3).',
  explanation: 'Theo Slide Ch.3 P2 tr.24, hai điều kiện trong biểu thức chọn $\\sigma_F(r)$ phải nối bằng phép toán logic **`AND` ($\\land$)**, không dùng phép giao tập hợp $\\cap$ (loại A) và không ngăn cách bằng dấu phẩy `,` (loại B).\n- Xét trên các phương án hiện có (A, B, D), chỉ **D** viết đúng điều kiện logic `AND` $\\Rightarrow$ chọn **D** *(vẫn đánh dấu `incomplete` do thiếu phương án C trong ảnh gốc)*.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24', 'Đề K16 – Ca 1 – câu 29']
},
{
  id: 'k16-ca1-30', exam: 'k16-ca1', no: 30, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-1 trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'gv', label: 'GIẢNG VIÊN', x: 135, y: 110, attrs: [
        { label: 'Mã GV', kind: 'key', dx: 0, dy: -62 },
        { label: 'Họ tên', dx: -120, dy: 0 },
        { label: 'Ngày sinh', dx: 0, dy: 62 }
      ] },
      { id: 'kh', label: 'KHOA', x: 525, y: 110, attrs: [
        { label: 'Mã Khoa', kind: 'key', dx: 0, dy: -62 },
        { label: 'Tên Khoa', dx: 120, dy: 0 }
      ] }
    ],
    rels: [
      { id: 'tk', label: 'Làm trưởng khoa', x: 330, y: 110, attrs: [{ label: 'Ngày làmTK', dx: 0, dy: -66 }],
        links: [{ to: 'gv', card: '1', total: false }, { to: 'kh', card: '1', total: true }] }
    ]
  } },
  options: [
    { key: 'A', text: '$\\text{GIANGVIEN}(\\underline{\\text{MaGV}}, \\text{TenGV}, \\text{NgaySinh}, \\text{MaK})$' },
    { key: 'B', text: '$\\text{KHOA}(\\underline{\\text{MaK}, \\text{MaGV}}, \\text{TenK}, \\text{NgayQL})$' },
    { key: 'C', text: '$\\text{GIANGVIEN}(\\text{MaGV}, \\text{TenGV}, \\text{NgaySinh}, \\text{MaK}, \\text{NgayQL})$' },
    { key: 'D', text: '$\\text{KHOA}(\\underline{\\text{MaK}}, \\text{TenK}, \\text{MaGV}, \\text{NgayQL})$' }
  ],
  answer: 'D', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Theo Quy tắc 3 – Chuyển liên kết 1–1 (Slide Ch.3 P1 tr.21): **đặt khóa chính của thực thể bên phía tùy chọn (`GIẢNG VIÊN` – nét đơn) và thuộc tính của liên kết (`Ngày làmTK` / `NgayQL`) sang làm thuộc tính ở phía bắt buộc (`KHOA` – nét đôi)**.\n- Do đó thêm `MaGV` (khóa ngoại) và `NgayQL` vào lược đồ `KHOA`, giữ nguyên khóa chính của `KHOA` là `MaK` $\\Rightarrow$ **D đúng**.\n- A, C đặt sai hướng sang `GIANGVIEN` (và C còn quên gạch chân khóa); B gạch chân thừa `MaGV` làm khóa chính kép.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.21–22', 'Đề K16 – Ca 1 – câu 30']
},
{
  id: 'k16-ca1-31', exam: 'k16-ca1', no: 31, chapter: 'ch1', topic: '1.1',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' },
    { key: 'B', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'C', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'D', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' }
  ],
  answer: 'A', marked: 'B', outside: false, incomplete: null,
  note: 'Trong ảnh gốc khoanh B (mô tả bước xây dựng CSDL mức khái niệm sang logic ở Slide Ch.1 tr.29–30), nhưng định nghĩa chính thức về Thiết kế CSDL tại Slide Ch.4 Tổng quan TKCSDL tr.3 là phương án A.',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.3 (*Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** (đánh giá ở cả mức logic và mức vật lý nhằm tối ưu lưu trữ, tránh dư thừa và tối ưu khai thác — Slide Ch.1 tr.9) $\\Rightarrow$ **A đúng nhất**.\n- B mô tả bước chuyển đổi ở phần "Các bước xây dựng một hệ CSDL" (Slide Ch.1 tr.29–30), không phải định nghĩa cốt lõi của Thiết kế CSDL; C mới nêu thao tác tách bảng; D sai ngược chiều chuẩn hóa.',
  source: ['Slide Ch.1 Tổng quan – tr.29–30', 'Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Đề K16 – Ca 1 – câu 31']
},
{
  id: 'k16-ca1-32', exam: 'k16-ca1', no: 32, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: 'Mã sinh viên, Mã môn$\\to$Họ tên sinh viên' },
    { key: 'B', text: 'Mã sinh viên, Mã môn$\\to$Điểm thi' },
    { key: 'C', text: 'Mã sinh viên, Mã môn $\\to$Tên môn, Đơn vị học trình' },
    { key: 'D', text: 'Mã sinh viên, Mã lớp$\\to$Họ tên sinh viên' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.6: $X \\to Y$ là phụ thuộc hàm đầy đủ nếu **không thể bỏ bớt** thuộc tính nào khỏi $X$ mà vẫn xác định được $Y$:\n- **B (`Mã sinh viên, Mã môn → Điểm thi`) là đầy đủ**: phải có cả mã sinh viên và mã môn học mới xác định duy nhất điểm thi (chỉ 1 trong 2 không đủ).\n- A, D dư thừa `Mã môn` / `Mã lớp` (vì `Mã sinh viên → Họ tên sinh viên`); C dư thừa `Mã sinh viên` (vì `Mã môn → Tên môn, Đơn vị học trình`).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề K16 – Ca 1 – câu 32']
},
{
  id: 'k16-ca1-33', exam: 'k16-ca1', no: 33, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1=\\{CDA\\},\\; R_2=\\{BD\\}$' },
    { key: 'B', text: '$R_1=\\{CD\\},\\; R_2=\\{ABD\\}$' },
    { key: 'C', text: '$R_1=\\{CA\\},\\; R_2=\\{ABD\\}$' },
    { key: 'D', text: '$R_1=\\{AD\\},\\; R_2=\\{ABC\\}$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa tr.50):\n1. Tìm khoá của $R$: $TN = \\{A\\}$, $TG = \\{C, D\\}$. Có $(AC)^+ = ABCD$ và $(AD)^+ = ABCD \\Rightarrow$ khoá là $AC$ và $AD$.\n2. Xét $D \\to C$: $D^+ = \\{C, D\\} \\neq ABCD$ nên $D$ không là siêu khoá $\\Rightarrow$ $D \\to C$ vi phạm BCNF.\n3. Tách theo $D \\to C$: tạo $R_1 = \\{C, D\\}$ (khoá $D$, thỏa BCNF) và $R_2 = R \\setminus \\{C\\} = \\{A, B, D\\}$ (chỉ còn PTH $AD \\to B$ với khoá $AD$, thỏa BCNF). Giao $R_1 \\cap R_2 = D \\to C$ nên kết nối **không mất mát thông tin** $\\Rightarrow$ **B đúng**.\n- Các phép tách ở A, C, D đều làm **mất mát thông tin** khi kết nối lại.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 47, 50', 'Đề K16 – Ca 1 – câu 33']
},
{
  id: 'k16-ca1-34', exam: 'k16-ca1', no: 34, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AD\\to B,\\; AB\\to E,\\; DC\\to G,\\; D\\to C,\\; CG\\to H\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc thuộc tính C trong $DC\\to G$' },
    { key: 'B', text: 'Dư thừa thuộc thuộc tính C trong $DC\\to G$' },
    { key: 'C', text: 'Không dư thừa thuộc tính trong $DC\\to G$' },
    { key: 'D', text: 'Không dư thừa thuộc thuộc tính C trong $DC\\to G$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Phương án A và B trong ảnh gốc hiển thị giống hệt nhau (kể cả lỗi lặp từ "thuộc thuộc tính C"). Trong ngân hàng đề (tương ứng Câu 31 đề de-2021-2 và Câu 34 đề ltcsdl-de3), đây là lỗi đánh máy lặp phương án đúng.',
  explanation: 'Kiểm tra thuộc tính dư thừa ở vế trái của $DC \\to G$ (Slide Ch.4 PTH tr.26):\n- Bỏ thử $C$, xét bao đóng $D^+$ theo $F$: $X_0 = D \\xrightarrow{D\\to C} CD \\xrightarrow{DC\\to G} CDG \\xrightarrow{CG\\to H} CDGH$. Vì $G \\in D^+$ nên $D \\to G \\in F^+$, tức là **thuộc tính $C$ dư thừa trong $DC \\to G$**.\n- Bỏ thử $D$: $C^+ = C \\not\\ni G$ nên $D$ không dư thừa.\nVậy khẳng định đúng là dư thừa thuộc tính $C$ trong $DC \\to G$ (**A**, trùng nội dung với **B** trên màn hình).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề K16 – Ca 1 – câu 34']
}
);

DB.questions.push(
{
  id: 'k16-ca1-35', exam: 'k16-ca1', no: 35, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D\\}$. Bao đóng của $(BG)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$BCEGH$' },
    { key: 'B', text: '$BCDEH$' },
    { key: 'C', text: '$ABCEG$' },
    { key: 'D', text: '$ABCEH$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Tính bao đóng $(BG)^+$ theo thuật toán tìm bao đóng (Slide Ch.4 PTH tr.16):\n- $X_0 = \\{B, G\\}$.\n- Dùng $BG \\to H$: $X_1 = \\{B, G, H\\}$.\n- Dùng $BH \\to C$: $X_2 = \\{B, C, G, H\\}$.\n- Dùng $HC \\to E$: $X_3 = \\{B, C, E, G, H\\}$.\n- Không còn PTH nào có vế trái nằm trong $X_3$ ($AB$ và $AC$ đều thiếu $A$). Vậy $(BG)^+ = BCEGH$ $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề K16 – Ca 1 – câu 35']
},
{
  id: 'k16-ca1-36', exam: 'k16-ca1', no: 36, chapter: 'ch4', topic: '3.4',
  stem: 'Cho $F=\\{B\\to D,\\; AC\\to B,\\; A\\to C,\\; E\\to A,\\; AE\\to D\\}$. Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$B\\to D$ là dư thừa' },
    { key: 'B', text: '$A\\to C$ là dư thừa' },
    { key: 'C', text: '$AE\\to D$ là dư thừa' },
    { key: 'D', text: '$AC\\to B$ là dư thừa' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng PTH bằng cách bỏ nó khỏi $F$ và tính bao đóng vế trái trên phần còn lại $F\'$ (Slide Ch.4 PTH tr.27):\n- Xét $AE \\to D$: trên $F \\setminus \\{AE\\to D\\}$, tính $(AE)^+$: $X_0 = AE \\xrightarrow{A\\to C} ACE \\xrightarrow{AC\\to B} ABCE \\xrightarrow{B\\to D} ABCDE \\supseteq D$. Suy ra **$AE \\to D$ là dư thừa** (**C đúng**).\n- Kiểm tra các PTH khác khi bỏ đi: $B^+ = B$ (mất $D$), $A^+ = A$ (mất $C$), $(AC)^+ = AC$ (mất $B$) nên A, B, D đều không dư thừa.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18, 27', 'Đề K16 – Ca 1 – câu 36']
},
{
  id: 'k16-ca1-37', exam: 'k16-ca1', no: 37, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc bắc cầu trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A\\to B$ và $B\\to C$ thì $AC\\to B$' },
    { key: 'B', text: 'Nếu $A\\to B$ và $B\\to C$ thì $A\\to C$' },
    { key: 'C', text: 'Nếu $A\\to B$ và $B\\to C$ thì $AB\\to C$' },
    { key: 'D', text: 'Nếu $A\\to B$ và $B\\to C$ thì $AC\\to BC$' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo hệ tiên đề Armstrong (Slide Ch.4 PTH tr.9), **luật bắc cầu** phát biểu: nếu $X \\to Y$ và $Y \\to Z$ thì $X \\to Z$. Áp dụng với $A, B, C$ ta có: nếu $A \\to B$ và $B \\to C$ thì $A \\to C$ (**B đúng**).\n- A là hệ quả phản xạ; D tương tự luật bổ sung áp cho $A\\to B$ (chỉ cần $A\\to B$ đã suy ra $AC\\to BC$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9', 'Đề K16 – Ca 1 – câu 37']
},
{
  id: 'k16-ca1-38', exam: 'k16-ca1', no: 38, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{AB\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1,R_2\\}$ tách $R$ thành hai lược đồ $R_1\\{B,C\\}$ và $R_2\\{A,C\\}$. Phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép tách bảo toàn phụ thuộc hàm.' },
    { key: 'B', text: 'Phép tách không bảo toàn phụ thuộc hàm.' },
    { key: 'C', text: 'Phép tách kết nối mất mát thông tin.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'B', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: 'Đây chính là ví dụ trong Slide Ch.4 Chuẩn hóa CSDL tr.44:\n1. Chiếu $F$ lên $R_1\\{B,C\\}$: $B^+=B$, $C^+=AC \\Rightarrow \\Pi_{R_1}(F) = \\emptyset$ (không có PTH không tầm thường).\n2. Chiếu $F$ lên $R_2\\{A,C\\}$: có $C \\to A$, nên $\\Pi_{R_2}(F) = \\{C \\to A\\}$.\n3. Hợp $G = \\{C \\to A\\}$. Trên $G$, $(AB)^+ = AB \\not\\ni C$, tức $AB \\to C \\notin G^+$ $\\Rightarrow$ **$D$ không bảo toàn phụ thuộc hàm** (**B đúng**, loại A).\n4. Kiểm tra mất mát thông tin: $R_1 \\cap R_2 = \\{C\\}$ và $C \\to A$ (lấy trọn $R_2$) nên **không mất mát thông tin** (loại C).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.43–47', 'Đề K16 – Ca 1 – câu 38']
},
{
  id: 'k16-ca1-39', exam: 'k16-ca1', no: 39, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K\\subseteq U$ là siêu khóa của $R$ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K$ là khóa của $R$.' },
    { key: 'B', text: '$K^+ = U$ hay $K\\to U$' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 PTH tr.30:\n- Tập $K \\subseteq U$ là **siêu khóa** của $R$ nếu $K^+ = U$ hay $K \\to U$ (**B đúng**).\n- Mọi **khóa** của $R$ đều là siêu khóa nhỏ nhất (thỏa $K \\to U$ và tính tối tiểu), nên nếu $K$ là khóa của $R$ thì đương nhiên $K$ cũng là siêu khóa của $R$ (**A đúng**).\nDo cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề K16 – Ca 1 – câu 39']
},
{
  id: 'k16-ca1-40', exam: 'k16-ca1', no: 40, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '3NF' },
    { key: 'B', text: 'BCNF' },
    { key: 'C', text: '1NF' },
    { key: 'D', text: '2NF' }
  ],
  answer: 'C', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khoá của $R(A,B,C,D,E)$: $E$ không xuất hiện trong $F$ và $C$ chỉ ở vế trái nên tập nguồn $TN = \\{C, E\\}$; $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải). Tính $(CE)^+ = ACE \\neq U$; $(BCE)^+ = ABCDE$; $(CDE)^+ = ABCDE$. Vậy $R$ có hai khoá: $BCE$ và $CDE$.\n2. Thuộc tính khoá: $B, C, D, E$. Thuộc tính không khoá: $A$.\n3. Kiểm tra 2NF (Slide Ch.4 Chuẩn hóa tr.15): tập con thực sự $S = \\{C\\}$ của khoá $BCE$ có $C^+ = \\{A, C\\}$ chứa thuộc tính không khoá $A$ (tức $A$ phụ thuộc bộ phận vào khoá). Vậy $R$ không đạt 2NF $\\Rightarrow$ dạng chuẩn cao nhất là **1NF** (**C đúng**).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 15, 37', 'Đề K16 – Ca 1 – câu 40']
},
{
  id: 'k16-ca1-41', exam: 'k16-ca1', no: 41, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. Các siêu khóa có thể của $R$ gồm:',
  figure: null,
  options: [
    { key: 'A', text: '$BC, BD, BDC$' },
    { key: 'B', text: '$AC, AD, ACD$' },
    { key: 'C', text: '$AB, AD, ABD$' },
    { key: 'D', text: '$AC, BD, ACBD$' }
  ],
  answer: 'B', marked: 'A', outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khoá của $R(A,B,C,D)$: $TN = \\{A\\}$, $TG = \\{C, D\\}$ ($B$ chỉ ở vế phải). Ta có $A^+ = A$; $(AC)^+ = ABCD = U$; $(AD)^+ = ABCD = U$. Vậy $R$ có hai khoá là $AC$ và $AD$.\n2. Mọi siêu khoá đều phải chứa ít nhất một khoá ($AC$ hoặc $AD$), nên tập đầy đủ các siêu khoá gồm: $AC, AD, ABC, ABD, ACD, ABCD$.\n- Chỉ có **B (`AC, AD, ACD`)** mà cả 3 tập đều có bao đóng bằng $U$. Ở A, C, D đều có tập không phải siêu khoá ($(BC)^+=BC$, $(BD)^+=BCD$, $(AB)^+=AB$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 38, 42', 'Đề K16 – Ca 1 – câu 41']
},
{
  id: 'k16-ca1-42', exam: 'k16-ca1', no: 42, chapter: 'ch4', topic: '1.8',
  stem: 'Một quan hệ dạng chuẩn 1NF có thể chuyển đổi về quan hệ 3NF bằng cách:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ các phụ thuộc đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' },
    { key: 'B', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá.' },
    { key: 'C', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' },
    { key: 'D', text: 'Loại bỏ các phụ thuộc bắc cầu vào khoá.' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo quy trình chuẩn hóa từ 1NF lên 3NF (Slide Ch.4 Chuẩn hóa CSDL tr.13, 18, 21, 25):\n- Từ 1NF $\\to$ **2NF**: loại bỏ các **phụ thuộc hàm không đầy đủ (bộ phận)** của thuộc tính không khoá vào khoá.\n- Từ 2NF $\\to$ **3NF**: loại bỏ các **phụ thuộc bắc cầu** của thuộc tính không khoá vào khoá.\nDo đó chuyển từ 1NF về 3NF cần thực hiện cả hai bước trên $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 18, 21, 25', 'Đề K16 – Ca 1 – câu 42']
},
{
  id: 'k16-ca1-43', exam: 'k16-ca1', no: 43, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F=\\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'B', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' },
    { key: 'D', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB\\to C$' }
  ],
  answer: 'B', marked: 'D', outside: false, incomplete: null, note: null,
  explanation: 'Tìm phủ tối thiểu cho $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$ (Ví dụ 2 – Slide Ch.4 PTH tr.29):\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Xét $AB \\to C$: bỏ thử $A$, thấy $B \\to C$ đã có trong tập ($B^+ = BCD \\ni C$) $\\Rightarrow$ **thuộc tính $A$ dư thừa trong $AB \\to C$** (D đúng, suy ra khẳng định **B sai**).\n3. Sau khi thay $AB\\to C$ bằng $B\\to C$ (gộp trùng), xét $B\\to D$: suy diễn được từ $B\\to C$ và $C\\to D$ nên $B\\to D$ là PTH dư thừa (C đúng), phủ tối thiểu còn $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (A đúng). Chọn **B**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Đề K16 – Ca 1 – câu 43']
},
{
  id: 'k16-ca1-44', exam: 'k16-ca1', no: 44, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D\\}$. Khóa của lược đồ quan hệ $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$AD$' },
    { key: 'B', text: '$BH$' },
    { key: 'C', text: '$AB$' },
    { key: 'D', text: '$BD$' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán TN/TG tìm khoá (Slide Ch.4 PTH tr.41–42):\n- Tập nguồn $TN = \\{A, B\\}$ ($A$ và $B$ chỉ xuất hiện ở vế trái của các PTH trong $F$).\n- Tập trung gian $TG = \\{C, G, H\\}$ ($D, E$ chỉ ở vế phải).\n- Tính bao đóng của $TN = \\{A, B\\}$:\n  - $X_0 = AB \\xrightarrow{AB\\to DG} ABDG \\xrightarrow{BG\\to H} ABDGH \\xrightarrow{BH\\to C} ABCDGH \\xrightarrow{HC\\to E} ABCDEGH = U$.\nVì $(AB)^+ = U$ nên **$AB$ là khoá duy nhất** của $R$ $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.35, 41–42', 'Đề K16 – Ca 1 – câu 44']
},
{
  id: 'k16-ca1-45', exam: 'k16-ca1', no: 45, chapter: 'ch4', topic: null,
  stem: '[Ảnh gốc bị cắt mất đề bài Câu 45]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt]' },
    { key: 'B', text: '[Ảnh gốc bị cắt]' },
    { key: 'C', text: '[Ảnh gốc bị cắt]' },
    { key: 'D', text: 'Cả hai phương án đều sai' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc thiếu toàn bộ đề bài và các phương án A, B, C (chỉ thấy dòng phương án D ở đầu ảnh cuối cùng trước Câu 46)',
  note: 'Trong ảnh chụp cuối (235949195_...jpg), dòng "(D) Cả hai phương án đều sai" nằm ngay trước Câu 46 nên được gán cho Câu 45; phần đề và A–C nằm giữa ảnh 13 và ảnh 14 không được chụp.',
  explanation: 'Không thể giải vì ảnh gốc chỉ còn nhìn thấy duy nhất phương án **(D) Cả hai phương án đều sai**, bị mất toàn bộ đề bài và ba phương án A, B, C của Câu 45 (thuộc phần Chương 4 – Phụ thuộc hàm / Chuẩn hóa giữa Câu 44 và Câu 46).',
  source: ['Đề K16 – Ca 1 – câu 45']
},
{
  id: 'k16-ca1-46', exam: 'k16-ca1', no: 46, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là đúng nhất khi nói về bao đóng của các thuộc tính?',
  figure: null,
  options: [
    { key: 'A', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế trái của các phụ thuộc hàm' },
    { key: 'B', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$, các thuộc tính không xuất hiện trong $F$ và các thuộc tính thuộc vế phải được suy diễn logic từ tập $F$.' },
    { key: 'C', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$ và các thuộc tính vế phải được suy diễn logic từ tập $F$.' },
    { key: 'D', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế phải của các phụ thuộc hàm.' }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 PTH tr.13: bao đóng của tập thuộc tính $X$ đối với $F$ là $X^+ = \\{ A \\in U \\mid X \\to A \\in F^+ \\}$, luôn thỏa $X \\subseteq X^+$ và chứa thêm các thuộc tính ở vế phải được suy diễn logic từ $X$ qua $F$ (**C đúng**).\n- B sai vì nhầm lẫn với quy tắc tìm **khoá** (thuộc tính không xuất hiện trong $F$ phải có trong mọi khoá, **không** tự động có trong bao đóng $X^+$ của một tập $X$ bất kỳ; ví dụ $U=ABCD$, $F=\\{A\\to B\\}$ thì $A^+ = AB$, không chứa $C, D$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.13', 'Đề K16 – Ca 1 – câu 46']
},
{
  id: 'k16-ca1-47', exam: 'k16-ca1', no: 47, chapter: 'ch4', topic: '1.8',
  stem: 'Khẳng định nào sau đây là đúng nhất về chuẩn hóa dữ liệu?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuẩn hoá dữ liệu là quá trình thực hiện các phép lưu trữ nhằm đảm bảo tính toàn vẹn của dữ liệu.' },
    { key: 'B', text: 'Chuẩn hoá dữ liệu là quá trình tách các lược đồ quan hệ không làm tổn thất thông tin.' },
    { key: 'C', text: 'Chuẩn hóa dữ liệu là quá trình tách các quan hệ từ dạng chuẩn cao về dạng chuẩn thấp.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.3 và tr.38: chuẩn hóa quan hệ là việc áp dụng quy tắc đưa các bảng **từ dạng chuẩn thấp lên dạng chuẩn cao hơn** (loại C vì nói ngược từ cao về thấp) bằng cách **phân rã lược đồ quan hệ thành các lược đồ con sao cho không làm mất mát (tổn thất) thông tin** (**B đúng**).\n- A sai vì chuẩn hóa không phải "thực hiện các phép lưu trữ".',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.3, 38', 'Đề K16 – Ca 1 – câu 47']
},
{
  id: 'k16-ca1-48', exam: 'k16-ca1', no: 48, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Khóa của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BC$' },
    { key: 'B', text: '$CD$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: 'C', outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán TN/TG tìm khoá (Slide Ch.4 PTH tr.41–42):\n- Tập nguồn $TN = \\{C\\}$ ($C$ chỉ ở vế trái).\n- Tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không nằm trong khoá).\n- Thử $C^+ = CA \\neq ABCD$. Thử ghép thêm từng tập con của $TG$:\n  - $(BC)^+ = BCAD = ABCD$ ($C\\to A$, $B\\to AD$).\n  - $(CD)^+ = CDAB = ABCD$ ($C\\to A$, $D\\to B$, $B\\to A$).\nVậy $R$ có hai khoá là $BC$ và $CD$ $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42', 'Đề K16 – Ca 1 – câu 48']
},
{
  id: 'k16-ca1-49', exam: 'k16-ca1', no: 49, chapter: 'ch4', topic: '3.2',
  stem: 'Có thể kết luận quan hệ $R$ là chuẩn BCNF khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Tất cả các khóa của $R$ đều chỉ có một thuộc tính.' },
    { key: 'B', text: 'Tất cả các phụ thuộc hàm của $R$ đều có vế trái là khóa.' },
    { key: 'C', text: 'Tất cả các thuộc tính của $R$ đều là thuộc tính khóa.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.29 và chú ý tr.31: nếu **mọi phụ thuộc hàm (không tầm thường) của $R$ đều có vế trái là khóa (hoặc siêu khóa)** thì chắc chắn $R$ đạt **BCNF** (**B đúng**).\n- A chỉ đảm bảo đạt **2NF** (chưa chắc đạt 3NF/BCNF nếu có phụ thuộc bắc cầu).\n- C chỉ đảm bảo đạt **3NF** (chưa chắc đạt BCNF, ví dụ $R(C,S,Z)$ với $CS\\to Z, Z\\to C$ có mọi thuộc tính đều là thuộc tính khóa nhưng $Z$ không phải siêu khóa nên chưa đạt BCNF).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 29, 31', 'Đề K16 – Ca 1 – câu 49']
},
{
  id: 'k16-ca1-50', exam: 'k16-ca1', no: 50, chapter: 'ch4', topic: null,
  stem: 'Chọn khẳng định đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt toàn bộ đề và phương án]' },
    { key: 'B', text: '[Không có trong ảnh gốc]' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc chỉ chụp được dòng tiêu đề "Câu 50. Chọn khẳng định đúng nhất?" ở đáy ảnh cuối cùng, toàn bộ 4 phương án A–D bị cắt',
  note: 'Trong ảnh cuối (235949195_...jpg) chỉ thấy tiêu đề "Câu 50. Chọn khẳng định đúng nhất?" bị cắt ngay trên thanh taskbar; không có ảnh nào chứa các phương án của Câu 50.',
  explanation: 'Không thể giải vì toàn bộ các phương án A, B, C, D của Câu 50 (thuộc phần Chương 4 ở cuối đề) bị cắt khỏi mép dưới ảnh chụp cuối cùng và không có ảnh bổ sung.',
  source: ['Đề K16 – Ca 1 – câu 50']
}
);
