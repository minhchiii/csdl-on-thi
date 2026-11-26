/* Đề KTHP 2021–2022 (K17) – Bộ 1 – nguồn: tai-lieu-text/de/k17-ca1.md */
DB.questions.push(
{
  id: 'k17-ca1-01', exam: 'k17-ca1', no: 1, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp môi trường tạo lập CSDL.' },
    { key: 'B', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' },
    { key: 'C', text: 'Cung cấp công cụ quản lý bộ nhớ.' },
    { key: 'D', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null,
  note: 'Trong ảnh chụp Câu 1, cả 4 nút radio đều trống nhưng bảng "Trả lời của bạn" ở bên phải của các ảnh sau hiển thị "1. C".',
  explanation: 'Một hệ quản trị CSDL (DBMS) có 3 nhóm chức năng chính: (1) cung cấp môi trường tạo lập CSDL (`DDL` – phương án A), (2) cung cấp môi trường cập nhật và khai thác dữ liệu (`DML`/SQL – phương án B), và (3) cung cấp công cụ kiểm soát, điều khiển truy cập để bảo mật, bảo toàn toàn vẹn và khôi phục dữ liệu (phương án D).\n- Việc **quản lý bộ nhớ** thuộc trách nhiệm của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca1-02', exam: 'k17-ca1', no: 2, chapter: 'ch1', topic: '1.1',
  stem: 'Một CSDL có các đặc tính nào sau đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Thể hiện một số khía cạnh của thế giới thực.' },
    { key: 'B', text: 'Các dữ liệu có logic chặt chẽ với một số ý nghĩa nhất định.' },
    { key: 'C', text: 'Được thiết kế, xây dựng và bố trí dữ liệu cho một mục đích nhất định, dành cho một nhóm người dùng hoặc phần mềm nhất định.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo định nghĩa CSDL (Slide Ch.1 tr.10–11, 14 và giáo trình Elmasri & Navathe), một CSDL có 3 đặc tính cơ bản:\n1. Phản ánh một số khía cạnh của **thế giới thực** (A).\n2. Tập hợp dữ liệu có **logic chặt chẽ**, có ý nghĩa và liên quan đến nhau (B).\n3. Được thiết kế, xây dựng và lưu trữ cho **một mục đích nhất định**, phục vụ nhóm người dùng hoặc chương trình ứng dụng cụ thể (C).\nCả A, B, C đều đúng $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.10–11, 14', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca1-03', exam: 'k17-ca1', no: 3, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào tạo ra các phần mềm ứng dụng đáp ứng nhu cầu khai thác thông tin từ CSDL?',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL và người lập trình' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người dùng và người quản trị CSDL.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo phân loại đối tượng sử dụng trực tiếp ở Slide Ch.1 Tổng quan tr.16:\n- **Người phát triển ứng dụng và lập trình**: người chuyên nghiệp về máy tính, có trách nhiệm thiết kế, tạo dựng và bảo trì các phần mềm ứng dụng khai thác CSDL (**B đúng**).\n- Người quản trị CSDL (DBA) quản lý, bảo trì CSDL và cấp quyền truy cập.\n- Người dùng cuối khai thác thông tin qua phần mềm ứng dụng.',
  source: ['Slide Ch.1 Tổng quan – tr.16']
},
{
  id: 'k17-ca1-04', exam: 'k17-ca1', no: 4, chapter: 'ch1', topic: '1.1',
  stem: 'Nhược điểm của việc quản lý dữ liệu bằng file?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa và thiếu tính nhất quán giữa các dữ liệu.' },
    { key: 'B', text: 'Khó khăn trong việc truy xuất dữ liệu đồng thời.' },
    { key: 'C', text: 'Không có cơ chế về an toàn bảo mật dữ liệu và phân quyền.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Quản lý dữ liệu bằng các tệp tin truyền thống tồn tại cả 3 nhược điểm:\n- Dữ liệu lưu rời rạc, trùng lặp gây **dư thừa và thiếu tính nhất quán** (Slide Ch.1 tr.8).\n- Thiếu cơ chế chia sẻ dùng chung nên **khó khăn trong việc truy xuất đồng thời**.\n- Không có cơ chế kiểm soát truy cập, **an toàn bảo mật và phân quyền** như hệ quản trị CSDL.\nDo đó chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.8', 'Kiến thức bổ sung (ngoài slide) – Nhược điểm hệ tập tin']
},
{
  id: 'k17-ca1-05', exam: 'k17-ca1', no: 5, chapter: 'ch1', topic: '1.1',
  stem: 'Người nào có vai trò quan trọng trong vấn đề phân quyền truy cập sử dụng CSDL.',
  figure: null,
  options: [
    { key: 'A', text: 'Người quản trị CSDL.' },
    { key: 'B', text: 'Người lập trình.' },
    { key: 'C', text: 'Người quản trị hệ thống' },
    { key: 'D', text: 'Người dùng.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo phân loại vai trò người dùng CSDL (Slide Ch.1 tr.16 và kiến thức bổ sung Elmasri & Navathe):\n- **Người quản trị CSDL (DBA)** chịu trách nhiệm quản lý, bảo trì toàn bộ CSDL, kiểm soát tài nguyên và **cấp quyền / phân quyền truy cập** cho các nhóm người dùng (**A đúng**).\n- Người lập trình viết phần mềm ứng dụng (B); người dùng cuối chỉ sử dụng phần mềm (D); người quản trị hệ thống quản lý hạ tầng mạng/hệ điều hành nói chung (C).',
  source: ['Slide Ch.1 Tổng quan – tr.16', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca1-06', exam: 'k17-ca1', no: 6, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả: "Một nhân viên có thể có một người giám sát, người đó cũng là nhân viên. Một nhân viên có thể giám sát nhiều người". Mối liên kết được mô tả là mối liên kết?',
  figure: null,
  options: [
    { key: 'A', text: 'Đệ qui.' },
    { key: 'B', text: '1-1.' },
    { key: 'C', text: 'm-n.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19, **liên kết đệ quy** là liên kết trong đó **cùng một kiểu thực thể** tham gia vào liên kết với các vai trò khác nhau (ở đây là `NHÂN VIÊN` đóng hai vai trò: *người giám sát* và *người bị giám sát*).\n- Ngoài ra, về bản số thì đây là liên kết `1–n` (1 người giám sát nhiều nhân viên, 1 nhân viên có tối đa 1 người giám sát) nên B (`1-1`) và C (`m-n`) đều sai. Chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.19']
},
{
  id: 'k17-ca1-07', exam: 'k17-ca1', no: 7, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất về ràng buộc bộ phận trong kiểu cha trong mô hình thực thể liên kết mở rộng EER.',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là cho phép một số thực thể kiểu cha không thuộc bất kỳ một kiểu con nào.' },
    { key: 'B', text: 'Ràng buộc bộ phận trong kiểu cha nghĩa là tất cả các thực thể trong kiểu cha phải là thành viên của ít nhất một kiểu con nào đó.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER, ràng buộc tính đầy đủ giữa kiểu cha và các kiểu con gồm hai mức:\n- **Ràng buộc bộ phận / từng phần (*partial*)**: cho phép có thực thể thuộc kiểu cha **không thuộc bất kỳ kiểu con nào** (vẽ bằng nét đơn từ lớp cha tới vòng tròn) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc toàn phần (*total*)**: bắt buộc mọi thực thể kiểu cha phải là thành viên của ít nhất một kiểu con (vẽ nét đôi) $\\Rightarrow$ nội dung ở B mô tả ràng buộc toàn phần, không phải bộ phận.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, EER Model']
},
{
  id: 'k17-ca1-08', exam: 'k17-ca1', no: 8, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn phương án đúng nhất về kiểu thực thể cha trong mô hình thực thể mở rộng (EER)',
  figure: null,
  options: [
    { key: 'A', text: 'Kiểu thực thể cha là một nhóm các thực thể trong một kiểu thực thể có các đặc tính riêng biệt so với các thực thể khác.' },
    { key: 'B', text: 'Kiểu thực thể cha là một kiểu thực thể chung có mối liên kết với một hoặc nhiều kiểu thực thể khác.' },
    { key: 'C', text: 'Một thực thể kiểu con cũng là một thực thể kiểu cha nhưng không nhất thiết một thực thể kiểu cha phải thuộc về một kiểu con nào đó.' },
    { key: 'D', text: 'Cả B và C đều đúng' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Xét từng khẳng định theo mô hình EER (Elmasri & Navathe):\n- **A sai**: "nhóm các thực thể trong một kiểu thực thể có các đặc tính riêng biệt" là định nghĩa của **kiểu thực thể con (*subclass*)**, không phải kiểu cha.\n- **B đúng**: kiểu thực thể cha (*superclass*) là kiểu thực thể tổng quát chung có mối liên kết cha–con (`IS-A`) với một hoặc nhiều kiểu thực thể con khác.\n- **C đúng**: theo quan hệ `"là một"` và chuyên biệt hóa từng phần, mọi thực thể thuộc kiểu con đều là một thực thể của kiểu cha, nhưng một thực thể kiểu cha không nhất thiết phải thuộc kiểu con nào.\nDo đó chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, EER Model']
},
{
  id: 'k17-ca1-09', exam: 'k17-ca1', no: 9, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: "Mỗi nhân viên của công ty có một mã số nhân viên duy nhất, mã số nhân viên xác định các thông tin như: họ tên, ngày sinh, giới tính, địa chỉ". Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể NHÂN VIÊN gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, giới tính, ngày sinh, địa chỉ.' },
    { key: 'B', text: 'Mã nhân viên, họ nhân viên, tên nhân viên, ngày, tháng, năm, địa chỉ, giới tính.' },
    { key: 'C', text: 'Mã nhân viên, họ nhân viên, tên nhân viên, ngày, tháng, năm, địa chỉ, nam, nữ.' },
    { key: 'D', text: 'Mã nhân viên, họ nhân viên, tên nhân viên, giới tính, ngày sinh, địa chỉ.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.7 và tr.26–27, ta xác định các thuộc tính bám sát đúng thông tin đặc tả trong bài toán, không tự ý chia nhỏ khi không có yêu cầu và không lấy giá trị thuộc tính làm tên thuộc tính:\n- Đề mô tả đúng 5 thuộc tính: `Mã nhân viên`, `họ tên`, `ngày sinh`, `giới tính`, `địa chỉ` $\\Rightarrow$ **A đúng**.\n- B và D tự tách `họ tên` thành `họ nhân viên, tên nhân viên` (và B còn tách `ngày sinh` thành `ngày, tháng, năm`); C còn đưa giá trị `nam, nữ` thành tên thuộc tính nên sai.',
  source: ['Slide Ch.2 Mô hình ER – tr.7–9, 26–27']
},
{
  id: 'k17-ca1-10', exam: 'k17-ca1', no: 10, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết đệ quy là:',
  figure: null,
  options: [
    { key: 'A', text: 'liên kết trong đó cùng một kiểu thực thể có thể tham gia liên kết với nhiều vai trò khác nhau' },
    { key: 'B', text: 'liên kết có bậc bằng 1' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.18–19:\n- **Bậc của liên kết** là số kiểu thực thể tham gia vào liên kết (tr.18). Liên kết đệ quy chỉ có **1 kiểu thực thể** tham gia nên **có bậc bằng 1** (**B đúng**).\n- Trong liên kết đệ quy, **cùng một kiểu thực thể đó tham gia với nhiều vai trò khác nhau** (như `NHÂN VIÊN` giám sát `NHÂN VIÊN`, tr.19) (**A đúng**).\nVậy chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.18–19']
},
{
  id: 'k17-ca1-11', exam: 'k17-ca1', no: 11, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu (lớp) thực thể Nhân viên trong mô hình thực thể liên kết (ER) của bài toán quản lý công ty:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, tên phòng.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo phương pháp xây dựng mô hình ER (Slide Ch.2 tr.7, 15, 27):\n- Trong mô hình ER, các thuộc tính của `NHÂN VIÊN` chỉ gồm những thông tin mô tả bản thân nhân viên đó: `Mã nhân viên`, `họ tên`, `ngày sinh`, `giới tính`, `địa chỉ` (**C đúng**).\n- Không đưa thuộc tính của thực thể khác (`tên phòng`) hay khoá ngoại (`mã phòng`, `mã người quản lý`) vào làm thuộc tính của thực thể trong sơ đồ ER (chúng chỉ xuất hiện sau khi chuyển sang mô hình quan hệ ở Chương 3; trong ER thì đó là các hình thoi liên kết `Làm việc cho` và `Giám sát`). Loại A, B, D.',
  source: ['Slide Ch.2 Mô hình ER – tr.7, 15, 27']
},
{
  id: 'k17-ca1-12', exam: 'k17-ca1', no: 12, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Tòa nhà với các thuộc tính Mã tòa nhà, số điện thoại. Biết rằng mỗi tòa nhà có tối thiểu hai số điện thoại để liên hệ.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'tn', label: 'TÒA NHÀ', x: 205, y: 36, attrs: [
      { label: 'Số ĐT', kind: 'multi', dx: -135, dy: 0 },
      { label: 'Mã TN', kind: 'key', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'tn', label: 'TÒA NHÀ', x: 205, y: 36, attrs: [
      { label: 'Số ĐT', kind: 'derived', dx: -135, dy: 0 },
      { label: 'Mã TN', kind: 'key', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'tn', label: 'TÒA NHÀ', x: 205, y: 36, attrs: [
      { label: 'Số ĐT', dx: -135, dy: 0 },
      { label: 'Mã TN', kind: 'key', dx: 130, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'tn', label: 'TÒA NHÀ', x: 205, y: 36, attrs: [
      { label: 'Số ĐT', kind: 'multi', dx: -135, dy: 0 },
      { label: 'Mã TN', dx: 130, dy: 0 }
    ] }] } } }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc độ phân giải thấp, đường viền kép (elip nét đôi) của thuộc tính đa trị `Số ĐT` ở phương án A và D hiển thị thành nét viền đậm.',
  explanation: '1. Mỗi tòa nhà có **tối thiểu hai số điện thoại** để liên hệ $\\Rightarrow$ `Số ĐT` là **thuộc tính đa trị**, ký hiệu bằng **elip kép / nét đôi** (Slide Ch.2 tr.10). Loại B (elip nét đứt = thuộc tính suy dẫn) và C (elip đơn = đơn trị).\n2. `Mã TN` là **thuộc tính khoá** phân biệt các tòa nhà nên phải **gạch chân** (Slide tr.12). Loại D vì `Mã TN` không gạch chân.\nChọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.10, 12']
},
{
  id: 'k17-ca1-13', exam: 'k17-ca1', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Mỗi thuộc tính của thực thể trong mô hình thực thể liên kết (ER) đều có?',
  figure: null,
  options: [
    { key: 'A', text: 'Tên gọi.' },
    { key: 'B', text: 'Miền giá trị.' },
    { key: 'C', text: 'Kiểu dữ liệu.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.7 và Slide Ch.3 P1 tr.4, mỗi thuộc tính trong mô hình ER đều có **tên gọi** (thường là danh từ hoặc danh–tính từ), **kiểu dữ liệu** nhất định (chuỗi, số, ngày tháng…) và **miền giá trị** cho phép $\\text{dom}(A)$. Cả A, B, C đều đúng $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.2 Mô hình ER – tr.7', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.4']
},
{
  id: 'k17-ca1-14', exam: 'k17-ca1', no: 14, chapter: 'ch2', topic: '2.6',
  stem: 'Một tổ chức phi lợi nhuận quản lý các nhân viên làm việc theo mã nhân viên. Có ba loại nhân viên: nhân viên cơ hữu, nhân viên tình nguyện, nhà tài trợ. Thông tin về nhân viên cơ hữu gồm họ tên, ngày sinh, địa chỉ và ngày tuyển dụng. Thông tin về nhân viên tình nguyện gồm họ tên, ngày sinh, địa chỉ và kỹ năng. Thông tin về nhà tài trợ gồm họ tên, ngày sinh, địa chỉ và ngày bắt đầu tài trợ. Kiểu thực thể con cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ' },
    { key: 'B', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng, kỹ năng và ngày bắt đầu tài trợ' },
    { key: 'C', text: 'Nhân viên cơ hữu với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng. Nhân viên tình nguyện với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, kỹ năng. Nhà tài trợ với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày bắt đầu tài trợ' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong chuyên biệt hóa EER:\n- Kiểu cha `Nhân viên` chứa các thuộc tính chung: `mã nhân viên, họ tên, ngày sinh, địa chỉ` (đó là nội dung của A, trả lời cho câu hỏi về *kiểu cha*, không phải *kiểu con*).\n- Ba **kiểu thực thể con** gồm `Nhân viên cơ hữu`, `Nhân viên tình nguyện`, `Nhà tài trợ`; theo nguyên tắc **kế thừa**, mỗi kiểu con nhận đủ các thuộc tính chung của kiểu cha (`mã nhân viên, họ tên, ngày sinh, địa chỉ`) cộng thêm thuộc tính riêng của mình (lần lượt là `ngày tuyển dụng`, `kỹ năng`, `ngày bắt đầu tài trợ`) $\\Rightarrow$ **C đúng**.\n- B sai vì dồn mọi thuộc tính riêng của 3 kiểu con lên kiểu cha `Nhân viên`.',
  source: ['Kiến thức bổ sung (ngoài slide) – Lớp cha, lớp con & kế thừa EER (Elmasri & Navathe)']
}
);

DB.questions.push(
{
  id: 'k17-ca1-15', exam: 'k17-ca1', no: 15, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc tách biệt trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'bn', label: 'Bệnh nhân', x: 155, y: 120, attrs: [
          { label: 'Ngày khám', dx: -55, dy: -64 }, { label: 'Ngày sinh', dx: 55, dy: -64 },
          { label: 'Họ Tên', dx: -120, dy: 0 }, { label: 'Mã BN', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'ngt', label: 'BN ngoại trú', x: 385, y: 65, attrs: [{ label: 'Ngày tái khám', dx: 132, dy: 0 }] },
        { id: 'nt', label: 'BN nội trú', x: 385, y: 175, attrs: [{ label: 'Ngày xuất viện', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 265, y: 120, kind: 'd', parent: 'bn', total: true, children: ['ngt', 'nt'] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'bn', label: 'Bệnh nhân', x: 155, y: 120, attrs: [
          { label: 'Ngày khám', dx: -55, dy: -64 }, { label: 'Ngày sinh', dx: 55, dy: -64 },
          { label: 'Họ Tên', dx: -120, dy: 0 }, { label: 'Mã BN', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'ngt', label: 'BN ngoại trú', x: 385, y: 65, attrs: [{ label: 'Ngày tái khám', dx: 132, dy: 0 }] },
        { id: 'nt', label: 'BN nội trú', x: 385, y: 175, attrs: [{ label: 'Ngày xuất viện', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 265, y: 120, kind: 'o', parent: 'bn', total: false, children: ['ngt', 'nt'] }],
      notes: [{ text: '(2 nhánh con vẽ nét đậm)', x: 435, y: 120 }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'bn', label: 'Bệnh nhân', x: 155, y: 120, attrs: [
          { label: 'Ngày khám', dx: -55, dy: -64 }, { label: 'Ngày sinh', dx: 55, dy: -64 },
          { label: 'Họ Tên', dx: -120, dy: 0 }, { label: 'Mã BN', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'ngt', label: 'BN ngoại trú', x: 385, y: 65, attrs: [{ label: 'Ngày tái khám', dx: 132, dy: 0 }] },
        { id: 'nt', label: 'BN nội trú', x: 385, y: 175, attrs: [{ label: 'Ngày xuất viện', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 265, y: 120, kind: 'o', parent: 'bn', total: true, children: ['ngt', 'nt'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'bn', label: 'Bệnh nhân', x: 155, y: 120, attrs: [
          { label: 'Ngày khám', dx: -55, dy: -64 }, { label: 'Ngày sinh', dx: 55, dy: -64 },
          { label: 'Họ Tên', dx: -120, dy: 0 }, { label: 'Mã BN', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'ngt', label: 'BN ngoại trú', x: 385, y: 65, attrs: [{ label: 'Ngày tái khám', dx: 132, dy: 0 }] },
        { id: 'nt', label: 'BN nội trú', x: 385, y: 175, attrs: [{ label: 'Ngày xuất viện', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 265, y: 120, kind: 'd', parent: 'bn', total: false, children: ['ngt', 'nt'] }],
      notes: [{ text: '(2 nhánh con vẽ nét đậm)', x: 435, y: 120 }]
    } } }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh gốc, đường tham gia toàn phần (`Bệnh nhân` – vòng tròn ở A, C) và hai nhánh con (ở B, D) hiển thị bằng nét dày/đậm (hiểu là nét đôi); hình minh họa B, D ghi chú thêm để phân biệt vì bộ vẽ SVG luôn vẽ hai nhánh con bằng nét đơn.',
  explanation: 'Đọc ký hiệu chuyên biệt hóa trong mô hình EER:\n1. **Ràng buộc tách biệt (*disjoint*)**: một thực thể lớp cha chỉ thuộc tối đa một lớp con, ký hiệu bằng chữ **`d`** trong vòng tròn $\\Rightarrow$ loại **B** và **C** (dùng chữ `o` cho phủ lấp/*overlapping*).\n2. Đoạn nối từ lớp cha `Bệnh nhân` tới vòng tròn `(d)` vẽ **nét đôi** (tham gia toàn phần: mỗi bệnh nhân đều là ngoại trú hoặc nội trú), còn hai nhánh từ vòng tròn xuống `BN ngoại trú` và `BN nội trú` luôn là **nét đơn** có ký hiệu $\\subset$.\n- **D sai** vì đoạn `Bệnh nhân` – `(d)` vẽ nét mảnh trong khi hai nhánh xuống lớp con lại vẽ nét đậm/đôi. Chọn **A**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, EER Model']
},
{
  id: 'k17-ca1-16', exam: 'k17-ca1', no: 16, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có thể có nhiều địa chỉ liên lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 270, y: 40, attrs: [
      { label: 'Địa chỉ', dx: -145, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -95, dy: 64 }, { label: 'Phường', dx: 0, dy: 64 }, { label: 'Tỉnh', dx: 95, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 270, y: 40, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -145, dy: 0 },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 270, y: 40, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -145, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -95, dy: 64 }, { label: 'Phường', dx: 0, dy: 64 }, { label: 'Tỉnh', dx: 95, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 270, y: 40, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -145, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', kind: 'derived', dx: -95, dy: 64 }, { label: 'Phường', kind: 'derived', dx: 0, dy: 64 }, { label: 'Tỉnh', kind: 'derived', dx: 95, dy: 64 }
      ] },
      { label: 'Mã Khách', dx: 145, dy: 0 }
    ] }] } } }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc độ phân giải thấp, elip kép (đa trị) `Địa chỉ` ở B, C, D hiển thị bằng đường viền đậm; câu hỏi không liệt kê sẵn `Xã, Phường, Tỉnh` nhưng phương án C thể hiện đầy đủ thuộc tính vừa đa trị vừa phức hợp kèm khoá `Mã Khách` gạch chân.',
  explanation: '1. Mỗi khách hàng có thể có **nhiều địa chỉ** liên lạc $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị** (elip kép / nét đôi, Slide Ch.2 tr.10), đồng thời là **thuộc tính phức hợp** tách thành 3 thành phần lưu trữ `Xã`, `Phường`, `Tỉnh` vẽ bằng elip đơn nét liền (Slide tr.9).\n2. `Mã Khách` là **thuộc tính khoá** nên phải gạch chân (Slide tr.12).\n- **A sai** vì `Địa chỉ` vẽ elip đơn (không đa trị).\n- **B sai** vì bỏ thiếu các thành phần con của thuộc tính phức hợp `Địa chỉ`.\n- **D sai** vì vẽ `Xã, Phường, Tỉnh` bằng elip nét đứt (suy dẫn) và không gạch chân `Mã Khách`. Chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–12']
},
{
  id: 'k17-ca1-17', exam: 'k17-ca1', no: 17, chapter: 'ch2', topic: '2.4',
  stem: 'Mô hình thực thể liên kết (ER) nào biểu diễn chính xác mô tả sau: "Mỗi sinh viên được cấp một thẻ sinh viên trong đó có mã sinh viên là duy nhất và xác định các thông tin như: họ tên sinh viên, quê quán, giới tính. Sinh viên phải học nhiều môn học, mỗi môn học có một mã định danh duy nhất để xác định các thông tin như: tên môn, số đơn vị học trình. Sinh viên thi hết môn sau khi đã học xong, nhà trường quản lý điểm từng môn của từng sinh viên"?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'sv', label: 'SINHVIÊN', x: 205, y: 125, attrs: [
          { label: 'Họ tên', dx: -118, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -44, dy: -52 }, { label: 'Tên', dx: -44, dy: 52 }] },
          { label: 'Quê', dx: -48, dy: -66 }, { label: 'GT', dx: 48, dy: -66 }, { label: 'Mã SV', kind: 'key', dx: 0, dy: 66 }
        ] },
        { id: 'mh', label: 'MÔN HỌC', x: 530, y: 125, weak: true, attrs: [
          { label: 'Tên môn', dx: 0, dy: -66 }, { label: 'Mã môn', kind: 'key', dx: -50, dy: 66 }, { label: 'ĐVHT', dx: 50, dy: 66 }
        ] }
      ],
      rels: [{ id: 'hoc', label: 'Học', x: 370, y: 125, attrs: [{ label: 'Điểm', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: 'n', total: false }, { to: 'mh', card: 'n', total: true }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'sv', label: 'SINHVIÊN', x: 205, y: 125, attrs: [
          { label: 'Họ tên', dx: -118, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -44, dy: -52 }, { label: 'Tên', dx: -44, dy: 52 }] },
          { label: 'Quê', dx: -48, dy: -66 }, { label: 'GT', dx: 48, dy: -66 }, { label: 'Mã SV', kind: 'key', dx: 0, dy: 66 }
        ] },
        { id: 'mh', label: 'MÔN HỌC', x: 530, y: 125, attrs: [
          { label: 'Tên môn', dx: 0, dy: -66 }, { label: 'Mã môn', kind: 'key', dx: -50, dy: 66 }, { label: 'ĐVHT', dx: 50, dy: 66 }
        ] }
      ],
      rels: [{ id: 'hoc', label: 'Học', x: 370, y: 125, attrs: [{ label: 'Điểm', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: 'm', total: false }, { to: 'mh', card: 'n', total: false }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'sv', label: 'SINHVIÊN', x: 205, y: 125, attrs: [
          { label: 'Họ', dx: -118, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -44, dy: -52 }, { label: 'Tên', dx: -44, dy: 52 }] },
          { label: 'Quê', dx: -48, dy: -66 }, { label: 'GT', dx: 48, dy: -66 }, { label: 'Mã SV', kind: 'key', dx: 0, dy: 66 }
        ] },
        { id: 'mh', label: 'MÔN HỌC', x: 530, y: 125, attrs: [
          { label: 'Tên môn', dx: 0, dy: -66 }, { label: 'Mã môn', kind: 'key', dx: -50, dy: 66 }, { label: 'ĐVHT', dx: 50, dy: 66 }
        ] }
      ],
      rels: [{ id: 'hoc', label: 'Học', x: 370, y: 125, attrs: [{ label: 'Điểm', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: 'm', total: false }, { to: 'mh', card: 'n', total: true }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'sv', label: 'SINHVIÊN', x: 205, y: 125, attrs: [
          { label: 'Họ tên', dx: -118, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -44, dy: -52 }, { label: 'Tên', dx: -44, dy: 52 }] },
          { label: 'Quê', dx: -48, dy: -66 }, { label: 'GT', dx: 48, dy: -66 }, { label: 'Mã SV', kind: 'key', dx: 0, dy: 66 }
        ] },
        { id: 'mh', label: 'MÔN HỌC', x: 530, y: 125, weak: true, attrs: [
          { label: 'Tên môn', dx: 0, dy: -66 }, { label: 'Mã môn', kind: 'key', dx: -50, dy: 66 }, { label: 'ĐVHT', dx: 50, dy: 66 }
        ] }
      ],
      rels: [{ id: 'hoc', label: 'Học', x: 370, y: 125, attrs: [{ label: 'Điểm', dx: 0, dy: -66 }],
        links: [{ to: 'sv', card: 'n', total: false }, { to: 'mh', card: 'n', total: true }] }]
    } } }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc: (1) phương án A và D trông giống hệt nhau (đều ghi bản số `n–n`, vẽ viền đậm/đôi ở `MÔN HỌC` và đoạn `Học–MÔN HỌC`); (2) ở C elip phức hợp bị ghi thành `Họ` thay vì `Họ tên`; (3) cả 4 phương án đều vẽ nét đơn phía `SINHVIÊN`.',
  explanation: '1. Cả `SINHVIÊN` (khoá `Mã SV`, phức hợp `Họ tên` $\\to$ `Họ`, `Tên`; `Quê`, `GT`) và `MÔN HỌC` (khoá `Mã môn`, `Tên môn`, `ĐVHT`) đều là **thực thể mạnh** (hình chữ nhật nét đơn). Loại **A** và **D** vì vẽ `MÔN HỌC` viền đậm/kép như thực thể yếu (và dùng `n–n` thay cho `m–n`).\n2. Một sinh viên học nhiều môn và một môn có nhiều sinh viên học $\\Rightarrow$ liên kết `Học` có bản số **`m–n`** và thuộc tính liên kết `Điểm`.\n3. Loại **C** vì nhãn elip phức hợp bị sai thành `Họ` (lặp với thuộc tính con `Họ`) và đặt nét đậm (toàn phần) sai phía sang `MÔN HỌC` (trong khi không phải mọi môn học mở ra đều bắt buộc có sinh viên học). Chọn **B**.',
  source: ['Slide Ch.2 Mô hình ER – tr.5, 9, 17, 21']
},
{
  id: 'k17-ca1-18', exam: 'k17-ca1', no: 18, chapter: 'ch3', topic: '2.7',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển thực thể thân nhân trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 205, y: 105, attrs: [
        { label: 'Họ tên', dx: -115, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -42, dy: -50 }, { label: 'Tên', dx: -42, dy: 50 }] },
        { label: 'Mã NV', kind: 'key', dx: 0, dy: 66 }
      ] },
      { id: 'tn', label: 'THÂN NHÂN', x: 515, y: 105, weak: true, attrs: [
        { label: 'Tên TN', dx: 0, dy: -66 }, { label: 'Giới tính', dx: -48, dy: 66 }, { label: 'Quan hệ', dx: 55, dy: 66 }
      ] }
    ],
    rels: [{ id: 'co', label: 'Có', x: 355, y: 105, ident: true, links: [{ to: 'nv', card: '1', total: false }, { to: 'tn', card: 'n', total: true }] }]
  } },
  options: [
    { key: 'A', text: '`THANNHAN` ($\\underline{\\text{MaNV}}$, TenTN, GioiTinh, Quanhe)' },
    { key: 'B', text: '`THANNHAN`($\\underline{\\text{MaNV}, \\text{TenTN}}$, Gioitinh, Quanhe)' },
    { key: 'C', text: '`THANNHAN` (MaNV, TenTN, GioiTinh, Quanhe)' },
    { key: 'D', text: '`THANNHAN`(MaNV, HoTen, TenTN, GioiTinh, Quanhe)' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc, viền kép của `Có`, `THÂN NHÂN` và đường nối bên phải hiển thị dạng nét dày/đậm; dưới `Tên TN` không thấy rõ đường gạch chân nét đứt ở độ phân giải ảnh.',
  explanation: 'Theo **Quy tắc 2** (Slide Ch.3 P1 tr.19–20 – Chuyển thực thể yếu): `THÂN NHÂN` là thực thể yếu phụ thuộc vào thực thể chủ `NHÂN VIÊN` qua liên kết sở hữu `Có` (`1:n`). Khi chuyển sang quan hệ:\n- Tạo lược đồ `THANNHAN` gồm tất cả thuộc tính của `THÂN NHÂN` (`TenTN`, `GioiTinh`, `Quanhe`) và bổ sung **thuộc tính khoá `MaNV` của thực thể chủ `NHÂN VIÊN`**.\n- **Khoá chính** của `THANNHAN` là tổ hợp **(`MaNV`, `TenTN`)** (vì một nhân viên có thể có nhiều thân nhân nên chỉ `MaNV` ở A là không đủ phân biệt; còn C, D thiếu gạch chân khoá và D đưa nhầm `HoTen` của nhân viên vào `THANNHAN`). Chọn **B**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.19–20']
},
{
  id: 'k17-ca1-19', exam: 'k17-ca1', no: 19, chapter: 'ch3', topic: '1.6',
  stem: 'Phép toán sửa đổi trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Sửa đổi giá trị của một bộ hay một nhóm các bộ' },
    { key: 'B', text: 'Sửa đổi giá trị của một số thuộc tính.' },
    { key: 'C', text: 'Sửa đổi mô tả các thuộc tính.' },
    { key: 'D', text: 'Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 P2 tr.8, phép thay đổi / sửa đổi (`CH`) trên quan hệ $r$ là phép toán sửa đổi các giá trị tại những bộ cần cập nhật ($r = (r \\setminus \\{t\\}) \\cup \\{t\'\\}$), tức **sửa đổi giá trị của một bộ hay một nhóm các bộ** (**A đúng**).\n- Nó không thay đổi định nghĩa/mô tả cột (loại C) và thao tác ở mức từng bộ/nhóm bộ (loại B, D).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.8']
},
{
  id: 'k17-ca1-20', exam: 'k17-ca1', no: 20, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: `HANG(Mahang,TenHang, DonGia, Donvitinh)`, `ChitietHD(SoHD,MaHang, SLBan)`. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Liệt kê tên hàng và số lượng bán của các mặt hàng có trong hoá đơn số HD012"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{tenhang},\\text{Slban}}\\,\\sigma_{\\text{soHD}=\\text{\'HD012\'}}(\\text{ChitietHD}) * \\text{HANG})$' },
    { key: 'B', text: '$\\pi_{\\text{tenhang},\\text{Slban}} \\land \\sigma_{\\text{soHD}=\\text{\'HD012\'}}(\\text{ChitietHD} * \\text{HANG})$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc phương án A có một dấu chấm/gạch nhỏ giữa chỉ số dưới của $\\pi$ và $\\sigma$, thiếu dấu `(` mở sau $\\pi$ nhưng lại có dấu `)` đóng thừa sau `HANG)`.',
  explanation: 'Biểu thức ĐSQH đúng phải là $\\pi_{\\text{TenHang}, \\text{SLBan}}(\\sigma_{\\text{SoHD}=\\text{\'HD012\'}}(\\text{ChitietHD}) * \\text{HANG})$ hoặc $\\pi_{\\text{TenHang}, \\text{SLBan}}(\\sigma_{\\text{SoHD}=\\text{\'HD012\'}}(\\text{ChitietHD} * \\text{HANG}))$.\n- **A sai**: thiếu ngoặc mở sau $\\pi$ (nếu hiểu $\\pi_{\\text{tenhang},\\text{Slban}}(\\sigma_{\\dots}(\\text{ChitietHD})) * \\text{HANG}$ thì phép chiếu đã cắt mất `MaHang` nên không thể kết nối tự nhiên với `HANG`; còn lại dư dấu `)` ở cuối).\n- **B sai**: đặt sai phép toán logic $\\land$ giữa hai phép toán đại số quan hệ $\\pi$ và $\\sigma$.\nDo cả A và B đều sai cú pháp $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'k17-ca1-21', exam: 'k17-ca1', no: 21, chapter: 'ch3', topic: '2.11',
  stem: 'Phép chiếu trong biểu thức đại số quan hệ được thực hiện tốt nhất khi nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Trước khi thực hiện phép chọn, phân loại.' },
    { key: 'B', text: 'Sau khi thực hiện phép chọn, phân loại.' },
    { key: 'C', text: 'Sau khi thực hiện phép chọn, các phép theo nhóm.' },
    { key: 'D', text: 'Trước khi thực hiện phép chọn, các phép theo nhóm.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo quy tắc tối ưu hóa và trình tự xử lý truy vấn ĐSQH:\n- Không được thực hiện phép chiếu **trước** phép chọn ($\\sigma$) vì sẽ làm mất các thuộc tính dùng để kiểm tra điều kiện lọc và chưa thu gọn số dòng (loại A, D).\n- Khi truy vấn có các phép gom nhóm/tổng hợp (**các phép theo nhóm**, `GROUP BY` / $_G\\mathcal{F}$), cần giữ lại thuộc tính phân nhóm và thuộc tính tính toán để thực hiện chọn lọc và gom nhóm xong mới chiếu ra các cột kết quả cuối cùng (loại B vì việc phân loại/sắp xếp nếu có không cần thực hiện trước khi thu gọn cột). Chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Tối ưu hóa biểu thức ĐSQH']
},
{
  id: 'k17-ca1-22', exam: 'k17-ca1', no: 22, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: `SinhVien(MaS, HoTen,GioiTinh,NgaySinh,Que)`; `Monhoc(MaMon,TenMon,SoTC)`; `KetQua(MaSV,MaMon,Diem)`. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Cho biết mã số và tên những sinh viên không phải thi lại môn nào."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\text{SinhVien}) - \\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}<5}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}<5}(\\text{KetQua}) * \\text{SinhVien}) - \\pi_{\\text{MaSV}, \\text{HoTen}}(\\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}>5}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm tên thuộc tính khóa ở `SinhVien` là `MaS` (trong các phương án dùng `MaSV`); ở phương án C chỉ số dưới rất nhỏ trông như `Diem>5` (hoặc `Diem>=5`).',
  explanation: 'Để tìm những sinh viên **không phải thi lại môn nào** (không có môn nào điểm $< 5$), ta lấy tập tất cả sinh viên trừ đi tập sinh viên có ít nhất một môn thi lại (`Diem < 5`):\n1. $\\pi_{\\text{MaSV},\\text{HoTen}}(\\text{SinhVien})$: danh sách `(MaSV, HoTen)` của mọi sinh viên.\n2. $\\pi_{\\text{MaSV},\\text{HoTen}}(\\sigma_{\\text{Diem}<5}(\\text{KetQua}) * \\text{SinhVien})$: danh sách sinh viên có điểm dưới 5 (phải thi lại).\n- **A đúng** (hai vế phép trừ `-` cùng lược đồ `(MaSV, HoTen)`).\n- **B sai** vì trừ ngược (lấy tập thi lại trừ đi tất cả $\\to$ rỗng).\n- **C sai** vì một sinh viên vừa có môn $>5$ vừa có môn $<5$ vẫn bị lọt vào kết quả. Chọn **A**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14, 19, 24, 38']
},
{
  id: 'k17-ca1-23', exam: 'k17-ca1', no: 23, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: `SinhVien(MaS, HoTen, GioiTinh, NgaySinh, Que)`; `Monhoc(MaMon, TenMon, SoTC)`; `KetQua(MaSV, MaMon, Diem)`. Biểu thức ĐSQH nào sau đây biểu diễn không chính xác yêu cầu: "Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{\'T11\'}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{\'T11\'}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}=\\text{\'T11\'}}(\\text{KetQua} * \\text{SinhVien}))$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{\'T11\'}}(\\text{KetQua} * \\text{Sinhvien}))$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm `MaS` trong `SinhVien`; phương án B sai cú pháp phép chọn lẫn dư ngoặc `((`; ngoài ra phương án D chiếu `(MaSV, HoTen)` trước phép giao `∩` nên về ngữ nghĩa chặt chẽ cũng có thể lấy nhầm sinh viên đạt >=5 ở môn khác và <5 ở môn `T11` (giống Câu 24 Đề mẫu 720).',
  explanation: '- **A** và **C** đều biểu diễn đúng (A lọc trước khi kết nối tự nhiên, C kết nối trước rồi lọc).\n- **B sai hoàn toàn về cú pháp ĐSQH**: bên trong điều kiện của phép chọn $\\sigma$ chỉ được dùng phép logic ($\\land$/`AND`, $\\lor$/`OR`, $\\neg$), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.12, 24); đồng thời B còn mở thừa một dấu ngoặc `((`.\n- (Lưu ý thêm ở D: chiếu trước $\\cap$ là lỗi ngữ nghĩa tiềm ẩn nhưng xét bẫy cú pháp chuẩn của bộ đề như Câu 24 Đề mẫu 720 thì **B** là đáp án cần chọn.)',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề mẫu 720 – câu 24']
},
{
  id: 'k17-ca1-24', exam: 'k17-ca1', no: 24, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: `SinhVien(MaS, HoTen, GioiTinh, NgaySinh, Que)`; `Monhoc(MaMon, TenMon, SoTC)`; `KetQua(MaSV, MaMon, Diem)`. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Cho biết mã số và tên những sinh viên chưa có điểm môn Mạng máy tính."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{SinhVien} - \\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{TenMon}=\\text{\'Mạng máy tính\'}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\text{Sinhvien}) - \\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{TenMon}=\\text{\'Mạng máy tính\'}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{TenMon}=\\text{\'Mạng máy tính\'}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien}) - \\pi_{\\text{MaSV}, \\text{HoTen}}(\\text{Sinhvien})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\text{Sinhvien}) - ((\\sigma_{\\text{TenMon}=\\text{\'Mạng máy tính\'}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm `MaS` trong `SinhVien` (các phương án dùng `MaSV`); các phương án A, C, D còn lỗi không cân ngoặc.',
  explanation: 'Để tìm sinh viên **chưa có điểm** môn `Mạng máy tính`, ta lấy tập toàn bộ `(MaSV, HoTen)` từ `SinhVien` trừ đi tập `(MaSV, HoTen)` của những sinh viên **đã có điểm** môn này (Slide Ch.3 P2 tr.9, 14):\n- Hai vế của phép trừ `-` bắt buộc phải **cùng lược đồ** $\\Rightarrow$ loại **A** (`SinhVien` có 5 cột, vế phải chỉ có 2 cột) và loại **D** (vế phải không chiếu về `MaSV, HoTen`).\n- Loại **C** vì trừ ngược (lấy đã có điểm trừ toàn bộ $\\to$ rỗng) và sai ngoặc.\n- **B** đúng cả cú pháp lẫn ngữ nghĩa.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 14, 19, 24, 38']
},
{
  id: 'k17-ca1-25', exam: 'k17-ca1', no: 25, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: `KHACH(MaKhach, Hoten,Diachi, DienThoai)`; `HOADON(SoHD,NgaylapHD,Ngayban, MaKhach)`; `HANG(Mahang,TenHang, DonGia, Donvitinh)`; `ChitietHD(SoHD,MaHang, SLBan)`. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Lấy thông tin gồm số hóa đơn, tên hàng, số lượng hàng đã bán được cho khách hàng KH007 trong năm 2020"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{\'KH007\' AND }\\text{ngaylap}=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'B', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{\'KH007\' AND }\\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'C', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{\'KH007\'},\\; \\text{ngaylap}=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' },
    { key: 'D', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{\'KH007\'},\\; \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD} * \\text{HoaDon} * \\text{Hang}))$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cả 4 phương án trong đề gốc đều viết tắt `maKH` thay cho `MaKhach` trong `HOADON`.',
  explanation: '1. Các bảng `ChitietHD * HoaDon * Hang` kết nối tự nhiên qua `SoHD` và `MaHang` để có đủ cột lọc (`MaKhach`, `NgaylapHD`) và cột kết quả (`SoHD`, `TenHang`, `SLBan`).\n2. `NgaylapHD` lưu kiểu ngày tháng nên muốn lọc theo năm `2020` phải dùng hàm `year(ngaylapHD) = 2020` (loại **A** và **C** vì so sánh trực tiếp `ngaylap = 2020`).\n3. Hai điều kiện trong $\\sigma$ phải nối bằng toán tử logic `AND`, không dùng dấu phẩy `,` (loại **C** và **D**). Chọn **B**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'k17-ca1-26', exam: 'k17-ca1', no: 26, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ `DOT1(MaSV, HoTen)` và `DOT2(MaSV, HoTen)`: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu "Lập danh sách các sinh viên được khen thưởng cả học kỳ 1 và học kỳ 2"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\cap \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} - \\text{DOT2}$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Hai quan hệ `DOT1` và `DOT2` có cùng lược đồ `(MaSV, HoTen)` nên áp dụng được các phép toán tập hợp (Slide Ch.3 P2 tr.9–16):\n- Phép giao ($\\cap$): lấy các bộ có mặt ở **cả hai** quan hệ $\\Rightarrow$ sinh viên được khen thưởng **cả học kỳ 1 và học kỳ 2** (**C đúng**).\n- A là tích Đề-các; B là phép hợp (học kỳ 1 *hoặc* học kỳ 2); D là phép hiệu (học kỳ 1 *mà không* học kỳ 2).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 16']
},
{
  id: 'k17-ca1-27', exam: 'k17-ca1', no: 27, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: `BANDOC (MaBD, TenBD, Lop, NgayCap)`, `SACH(MaSH,TenSach,TacGia,NhaXuatBan,NamXB)` và `PHIEUMUON(MaBD, MaSH,Ngaymuon, NgayTra,TraSach)`. Trong đó, NgayTra là ngày hẹn trả và TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: "Liệt kê mã và tên những quyển sách xuất bản năm 2015 mà bạn đọc đã mượn"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{year}(\\text{namXB})=2015}(\\pi_{\\text{maSH},\\text{tenSach}}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'B', text: '$\\pi_{\\text{maSH},\\text{tenSach}}(\\sigma_{\\text{namXB}=2015}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'C', text: '$\\pi_{\\text{maSH},\\text{tenSach}}(\\sigma_{\\text{year}(\\text{namXB})=2015}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'D', text: '$\\sigma_{\\text{namXB}=2015}(\\pi_{\\text{maSH},\\text{tenSach}}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Cần lọc những sách xuất bản năm 2015 **trước** khi chiếu bỏ cột `NamXB` (loại **A** và **D** vì chiếu $\\pi_{\\text{maSH},\\text{tenSach}}(\\text{SACH})$ trước làm mất cột `NamXB`, sau đó $\\sigma$ sẽ không còn cột để lọc).\n2. Thuộc tính `NamXB` trong `SACH` lưu sẵn giá trị năm xuất bản (kiểu số năm, ví dụ `2015`), không phải kiểu ngày tháng nên dùng trực tiếp `namXB = 2015` (giống Câu 14 Đề mẫu 720), loại **C** vì gọi thừa hàm `year(namXB)`. Chọn **B**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề mẫu 720 – câu 14']
},
{
  id: 'k17-ca1-28', exam: 'k17-ca1', no: 28, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: `KHACH(MaKhach,Hoten,Diachi,DienThoai)`; `HOADON(SoHD,NgaylapHD,Ngayban,MaKhach)`; `HANG(Mahang,TenHang,DonGia, Donvitinh)` và `ChitietHD(SoHD,MaHang,SLBan)`. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Lập danh sách tên và số điện thoại của các khách hàng đã mua hàng vào tháng 3 hoặc tháng 4 năm 2020."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{Hoten}, \\text{DienThoai}}(\\sigma_{\\text{month}(\\text{ngaylapHD})=3 \\text{ AND } \\text{month}(\\text{ngaylapHD})=4)\\text{AND } \\text{year}(\\text{ngaylapHD})=2020}(\\text{HoaDon}*\\text{Khach}))$' },
    { key: 'B', text: '$\\pi_{\\text{Hoten}, \\text{DienThoai}}(\\sigma_{(\\text{month}(\\text{ngaylapHD})=3 \\text{ OR } \\text{month}(\\text{ngaylapHD})=4))\\text{AND } \\text{year}(\\text{ngaylapHD})=2020}(\\text{HoaDon}*\\text{Khach}))$' },
    { key: 'C', text: '$\\pi_{\\text{Hoten}, \\text{DienThoai}}(\\sigma_{(\\text{month}(\\text{ngaylapHD})=3 \\cup \\text{month}(\\text{ngaylapHD})=4) \\cap \\text{year}(\\text{ngaylapHD})=2020}(\\text{HoaDon}*\\text{Khach}))$' },
    { key: 'D', text: '$\\pi_{\\text{Hoten}, \\text{DienThoai}}(\\sigma_{(\\text{month}(\\text{ngaylapHD})=3,\\; \\text{month}(\\text{ngaylapHD})=4))\\text{AND } \\text{year}(\\text{ngaylapHD})=2020}(\\text{HoaDon}*\\text{Khach}))$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc, phần chỉ số dưới của $\\sigma$ ở phương án B bị dư một dấu `)` sau `=4))` (lỗi đánh máy tương tự đề mẫu 720 – câu 36).',
  explanation: '1. Để lấy tên và SĐT khách mua hàng trong tháng 3 **hoặc** tháng 4 năm 2020, điều kiện chọn trên `HoaDon * Khach` (nối theo `MaKhach`) phải là: `(month(ngaylapHD)=3 OR month(ngaylapHD)=4) AND year(ngaylapHD)=2020` $\\Rightarrow$ **B đúng**.\n2. Loại **A** vì dùng `AND` giữa `month=3` và `month=4` (một hóa đơn không thể vừa ở tháng 3 vừa ở tháng 4), và thiếu ngoặc mở.\n3. Loại **C** vì dùng phép toán tập hợp $\\cup, \\cap$ bên trong biểu thức điều kiện $\\sigma$.\n4. Loại **D** vì dùng dấu phẩy `,` thay cho `OR`.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
}
);

DB.questions.push(
{
  id: 'k17-ca1-29', exam: 'k17-ca1', no: 29, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: `BANDOC (MaBD, TenBD, Lop, NgayCap)`, `SACH(MaSH,TenSach,TacGia,NhaXuatBan,NamXuatBan)` và `PHIEUMUON (MaBD, MaSH, Ngaymuon, TraSach)`. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Cho biết danh sách bạn đọc hiện đang mượn \'Giáo trình CSDL\' của thư viện, gồm các thông tin sau: mã bạn đọc, tên bạn đọc, lớp học."?',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 \\leftarrow \\pi_{\\text{maSH}}(\\sigma_{\\text{tenSach}=\\text{\'Giáo trình CSDL\'}}(\\text{SACH})),\\; R_2 \\leftarrow \\pi_{\\text{maBD}}(\\sigma_{\\text{trasach}=\\text{No}}(R_1 * \\text{PHIEUMUON}));\\; Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{lop}}(R_2 * \\text{BANDOC})$' },
    { key: 'B', text: '$Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{lop}}(\\sigma_{\\text{tenSach}=\\text{\'Giáo trình CSDL\' AND }\\text{trasach}=\\text{No}}(\\text{SACH} * \\text{PHIEUMUON} * \\text{BANDOC}))$' },
    { key: 'C', text: '$Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{lop}}(\\sigma_{\\text{tenSach}=\\text{\'Giáo trình CSDL\'}}(\\text{SACH} * \\text{PHIEUMUON} * \\text{BANDOC})) \\cap \\pi_{\\text{maBD},\\text{tenBD},\\text{lop}}(\\sigma_{\\text{trasach}=\\text{No}}(\\text{SACH} * \\text{PHIEUMUON} * \\text{BANDOC}))$' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Cả A và B đều hoàn toàn chính xác; riêng C có bẫy ngữ nghĩa nếu xét chặt chẽ (vì chiếu `(maBD, tenBD, lop)` trước phép giao `∩` có thể lấy nhầm bạn đọc đã trả cuốn \'Giáo trình CSDL\' (`Yes`) nhưng đang mượn chưa trả một cuốn sách khác (`No`)); tuy nhiên theo quy ước ngân hàng đề thi không có lựa chọn "Cả A và B" nên D là đáp án dự kiến.',
  explanation: '- **A đúng**: dùng biến trung gian $R_1, R_2$ (Slide Ch.3 P2 tr.33–34), lọc mã sách `' + 'Giáo trình CSDL' + '` ở `SACH`, kết nối với `PHIEUMUON` và lọc `trasach=No`, rồi kết nối `BANDOC` để lấy `(maBD, tenBD, lop)`.\n- **B đúng**: kết nối 3 bảng qua các thuộc tính trùng tên (`MaSH` và `MaBD`), lọc đồng thời `tenSach=\'Giáo trình CSDL\' AND trasach=No` rồi chiếu `(maBD, tenBD, lop)`.\n- **C** tách hai điều kiện ra giao nhau sau khi chiếu (theo ý đồ ra đề cũng coi là tương đương, dù thực tế cần cẩn thận trường hợp một bạn đọc mượn nhiều sách khác trạng thái). Vì cả A và B đều đúng nên chọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 19, 24, 33–34, 38']
},
{
  id: 'k17-ca1-30', exam: 'k17-ca1', no: 30, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ, khi thực hiện phép chèn một bộ dữ liệu vào bảng thì:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các cột là không quan trọng' },
    { key: 'B', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các hàng là quan trọng' },
    { key: 'D', text: 'thứ tự của các cột là quan trọng' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Slide Ch.3 P1 tr.10 phân biệt "thứ tự các bộ (hàng) không quan trọng" và "thứ tự các giá trị trong một bộ là quan trọng" (nếu viết phép chèn rút gọn không ghi tên cột như `INSERT(r; d1, ..., dn)`, còn dạng đầy đủ `INSERT(r; A1=d1, ...)` không phụ thuộc thứ tự liệt kê cột).',
  explanation: 'Theo Slide Ch.3 P1 tr.10 (*Các đặc trưng của quan hệ*) và P2 tr.5 (*Phép chèn* `r = r ∪ {t}`): một quan hệ là tập hợp các bộ (các hàng), nên việc chèn thêm một bộ vào đầu, giữa hay cuối bảng đều cho cùng một quan hệ — tức **thứ tự của các hàng là không quan trọng** (**B đúng**, C sai).',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5']
},
{
  id: 'k17-ca1-31', exam: 'k17-ca1', no: 31, chapter: 'ch3', topic: '2.11',
  stem: 'Cho các biểu thức đại số quan hệ sau, biểu thức đại số quan hệ nào đã được tối ưu?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{Hoten}, \\text{MaMH}, \\text{TenMon}, \\text{Diem}}(\\sigma_{\\text{maSV}=\\text{\'SV001\' and }\\text{TenMon}=\\text{\'CSDL\' and }\\text{diem}\\ge 8}(\\text{SINHVIEN} * \\text{KETQUA} * \\text{MONHOC}))$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{Hoten}}(\\text{SINHVIEN})) * \\pi_{\\text{MaSV}, \\text{Diem}, \\text{MaMH}}(\\sigma_{\\text{diem}\\ge 8}(\\text{KETQUA})) * \\pi_{\\text{TenMon}, \\text{MaMH}}(\\sigma_{\\text{TenMon}=\\text{\'CSDL\'}}(\\text{MONHOC}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{Hoten},\\text{maMH}}(\\sigma_{\\text{maSV}=\\text{\'SV001\' and }\\text{diem}\\ge 8}(\\text{SINHVIEN}) * \\text{KETQUA}) * \\pi_{\\text{TenMon}, \\text{MaMH}}(\\sigma_{\\text{TenMon}=\\text{\'CSDL\'}}(\\text{MONHOC}))$' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh gốc phương án B có hai dấu ngoặc đóng `))` ở `(SINHVIEN))` và không có phép chọn $\\sigma_{\\text{maSV}=\'SV001\'}$ trên `SINHVIEN`.',
  explanation: 'Xét tính đúng đắn và tối ưu của cả 3 biểu thức (đối chiếu truy vấn gốc ở A):\n- **A sai (chưa tối ưu)**: kết nối tự nhiên cả 3 bảng `SINHVIEN * KETQUA * MONHOC` trước rồi mới thực hiện $\\sigma$ và $\\pi$, tốn chi phí trung gian rất lớn.\n- **B sai**: bỏ sót điều kiện lọc $\\sigma_{\\text{maSV}=\\text{\'SV001\'}}$ trên `SINHVIEN` (nên không tương đương với A) và thừa dấu ngoặc đóng ở `(SINHVIEN))`.\n- **C sai**: đẩy nhầm điều kiện `diem >= 8` vào bảng `SINHVIEN` (trong khi `Diem` thuộc `KETQUA`, `SINHVIEN` không có cột `Diem`), đồng thời thiếu cột `Diem` trong $\\pi$ cuối.\nVì cả A, B, C đều sai $\\Rightarrow$ chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Heuristic tối ưu biểu thức ĐSQH']
},
{
  id: 'k17-ca1-32', exam: 'k17-ca1', no: 32, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: `BANDOC (MaBD, TenBD, Lop, NgayCap)`, `SACH (MaSH, TenSach, TacGia, NhaXuatBan, NamXuatBan)` và `PHIEUMUON (MaBD, MaSH, Ngaymuon, NgayTra, TraSach)`. Trong đó, NgayTra là ngày hẹn trả và TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu "Hãy đưa ra danh sách những bạn đọc mượn sách quá hạn tính đến ngày 30/12/2020, gồm các thông tin sau: Mã bạn đọc, tên bạn đọc, tên sách."?',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 \\leftarrow (\\pi_{\\text{maSH},\\text{maBD}}(\\sigma_{\\text{ngaytra} < \\text{\'30/12/2020\' AND }\\text{trasach}=\\text{No}}(\\text{PHIEUMUON})));\\; R_2 \\leftarrow \\pi_{\\text{maBD}, \\text{tenSach}}(R_1 * \\text{SACH});\\; Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{tenSach}}(R_2 * \\text{BANDOC})$' },
    { key: 'B', text: '$R_1 \\leftarrow (\\pi_{\\text{maSH},\\text{maBD}}(\\sigma_{\\text{ngaytra} > \\text{\'30/12/2020\' AND }\\text{trasach}=\\text{No}}(\\text{PHIEUMUON})));\\; Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{tenSach}}(R_1 * \\text{SACH} * \\text{BANDOC})$' },
    { key: 'C', text: '$R_1 \\leftarrow (\\pi_{\\text{maSH},\\text{maBD}}(\\sigma_{\\text{ngaymuon}+5 < \\text{\'30/12/2020\' AND }\\text{trasach}=\\text{No}}(\\text{PHIEUMUON})));\\; R_2 \\leftarrow \\pi_{\\text{maBD},\\text{tenSach}}(R_1 * \\text{SACH});\\; \\pi_{\\text{maBD}, \\text{tenBD}, \\text{tenSach}}(R_2 * \\text{BANDOC})$' },
    { key: 'D', text: '$R_1 \\leftarrow (\\pi_{\\text{maSH},\\text{maBD}}(\\sigma_{\\text{ngaytra}+5 < \\text{\'30/12/2020\' }\\text{Ç }\\text{trasach}=\\text{No}}(\\text{PHIEUMUON})));\\; Kq \\leftarrow \\pi_{\\text{maBD}, \\text{tenBD}, \\text{tenSach}}(R_1 * \\text{SACH} * \\text{BANDOC})$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh gốc phương án D in ký tự lạ `Ç` giữa hai điều kiện (do lỗi bảng mã của ký hiệu logic $\\land$ hoặc $\\cap$); tuy nhiên D vẫn sai vì cộng `+5` vào ngày hẹn trả `ngaytra`.',
  explanation: 'Đề bài đã cho sẵn cột `NgayTra` là **ngày hẹn trả** và `TraSach` nhận giá trị `Yes/No`. Sách mượn **quá hạn tính đến 30/12/2020** là sách có ngày hẹn trả đã qua (`ngaytra < \'30/12/2020\'`) nhưng chưa trả (`trasach = No`):\n- **A đúng**: lọc đúng `ngaytra < \'30/12/2020\' AND trasach = No`, giữ `(maSH, maBD)`, nối `SACH` lấy `(maBD, tenSach)`, rồi nối `BANDOC` chiếu `(maBD, tenBD, tenSach)`.\n- **B sai** vì viết `ngaytra > \'30/12/2020\'` (chưa đến hạn).\n- **C sai** vì tự cộng `+5` vào `ngaymuon` (đề không có giả thiết hạn 5 ngày) và thiếu tên gán `Kq ←` ở bước cuối.\n- **D sai** vì cộng `+5` vào `ngaytra` (ngày hẹn trả) và lỗi ký tự `Ç`. Chọn **A**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 33–34, 38']
},
{
  id: 'k17-ca1-33', exam: 'k17-ca1', no: 33, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng các phụ thuộc hàm.' },
    { key: 'B', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp.' },
    { key: 'C', text: 'Bối cảnh của một ràng buộc toàn vẹn là những quan hệ mà ràng buộc đó có hiệu lực.' },
    { key: 'D', text: 'Bảng tầm ảnh hưởng được sử dụng để kiểm tra ràng buộc toàn vẹn tại những thời điểm cập nhật dữ liệu.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.15–17:\n- **A đúng**: điều kiện RBTV có thể biểu diễn bằng phụ thuộc hàm (tr.15).\n- **B sai**: Slide tr.15 nêu rõ điều kiện RBTV có thể biểu diễn bằng ngôn ngữ tự nhiên, thuật giải, đại số tập hợp, đại số quan hệ hoặc phụ thuộc hàm — nói **chỉ** dùng đại số tập hợp là sai.\n- **C đúng**: bối cảnh là những quan hệ mà RBTV có hiệu lực (tr.16).\n- **D đúng**: bảng tầm ảnh hưởng dùng để kiểm tra RBTV khi Thêm/Sửa/Xóa (tr.17). Chọn **B**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.15–17']
},
{
  id: 'k17-ca1-34', exam: 'k17-ca1', no: 34, chapter: 'ch4', topic: '1.8',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'B', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' },
    { key: 'C', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' },
    { key: 'D', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.3 (*Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"**, nhằm thiết kế được lược đồ "tốt" ở cả mức logic và mức vật lý (tối ưu lưu trữ, tránh dư thừa/dị thường và tối ưu khai thác — Slide Ch.1 tr.9) $\\Rightarrow$ **C đúng nhất**.\n- A mới mô tả bước phân tích mô hình hóa (mức khái niệm $\\to$ logic); B ngược với chuẩn hóa; D chỉ nói phiến diện về tách nhỏ quan hệ.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Slide Ch.1 Tổng quan – tr.9']
},
{
  id: 'k17-ca1-35', exam: 'k17-ca1', no: 35, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Khóa của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BCDE$' },
    { key: 'B', text: '$ACE$ và $ADE$' },
    { key: 'C', text: '$CE$ và $DE$' },
    { key: 'D', text: '$BCE$ và $CDE$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm tất cả các khoá (Slide Ch.4 PTH tr.41–42):\n1. Tập nguồn $TN = \\{C, E\\}$ ($E$ không xuất hiện trong $F$, $C$ chỉ ở vế trái); tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không nằm trong khoá).\n2. Kiểm tra $(CE)^+ = ACE \\neq ABCDE$. Thử kết hợp $TN$ với từng tập con của $TG$:\n   - $(BCE)^+ = ABCDE = U$ (vì $C\\to A$, $B\\to AD$).\n   - $(CDE)^+ = ABCDE = U$ (vì $C\\to A$, $D\\to B$, $B\\to A$).\nVậy $R$ có hai khoá là **$BCE$ và $CDE$** $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42']
},
{
  id: 'k17-ca1-36', exam: 'k17-ca1', no: 36, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Các siêu khóa có thể của $R$ gồm:',
  figure: null,
  options: [
    { key: 'A', text: '$AD, AC, ADC$' },
    { key: 'B', text: '$AB, BD, ABD$' },
    { key: 'C', text: '$AB, AC, ABC$' },
    { key: 'D', text: '$BC, CD, BCD$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khoá của $R(A,B,C,D)$: $TN = \\{C\\}$, $TG = \\{B, D\\}$. Có $C^+ = AC \\neq ABCD$; $(BC)^+ = BCAD = U$ và $(CD)^+ = CDAB = U$. Vậy $R$ có hai khoá là $BC$ và $CD$.\n2. Mọi siêu khoá $K$ phải thoả $K^+ = ABCD$ (tức chứa ít nhất một khoá $BC$ hoặc $CD$ — Slide Ch.4 PTH tr.30).\n- Ở **D**: $(BC)^+ = (CD)^+ = (BCD)^+ = ABCD$ nên cả 3 tập đều là siêu khoá.\n- Loại A, B, C vì chứa các tập thiếu $C$ hoặc thiếu $B, D$ nên bao đóng không bằng $ABCD$ (như $(AD)^+=ABD, (AB)^+=ABD, (AC)^+=AC$). Chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42']
},
{
  id: 'k17-ca1-37', exam: 'k17-ca1', no: 37, chapter: 'ch4', topic: '3.2',
  stem: 'Có thể kết luận quan hệ $R$ là chuẩn 3NF khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Tất cả các khóa của $R$ đều chỉ có một thuộc tính.' },
    { key: 'B', text: 'Tất cả các phụ thuộc hàm của $R$ đều có vế trái là khóa.' },
    { key: 'C', text: 'Tất cả các thuộc tính của $R$ đều là thuộc tính khóa.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.4 Chuẩn hóa CSDL, C là dấu hiệu nhận biết trực tiếp cho 3NF (tr.23), trong khi A là dấu hiệu cho 2NF (tr.15) và B là dấu hiệu cho BCNF (tr.31). Về mặt logic chặt chẽ, B (BCNF) cũng suy ra 3NF vì $\\text{BCNF} \\subset \\text{3NF}$ (nhưng A sai với 3NF vì khóa 1 thuộc tính vẫn có thể còn phụ thuộc bắc cầu).',
  explanation: 'Đối chiếu các nhận xét nhận biết dạng chuẩn trong Slide Ch.4 Chuẩn hóa:\n- **A sai với 3NF**: mọi khoá chỉ có 1 thuộc tính chỉ đủ kết luận $R$ đạt **2NF** (tr.15), vẫn có thể vi phạm 3NF nếu có phụ thuộc bắc cầu (VD `NV(MaNV, MaPhong, TenPhong)`). Vì A sai nên **D sai**.\n- **C đúng (dấu hiệu trực tiếp của 3NF – tr.23)**: nếu tất cả các thuộc tính của $R$ đều là thuộc tính khoá (không chứa thuộc tính không khoá nào) thì $R$ chắc chắn đạt **3NF**.\n- (Ghi chú thêm: B là dấu hiệu của **BCNF** ở tr.31, và về mặt bao hàm $\\text{BCNF} \\subset \\text{3NF}$ nên B cũng kéo theo 3NF; tuy nhiên theo từng nhận xét tương ứng trong slide thì **C** là dấu hiệu đặc trưng cho 3NF.)',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 31']
},
{
  id: 'k17-ca1-38', exam: 'k17-ca1', no: 38, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'B', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' },
    { key: 'D', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây là Ví dụ 2 trong Slide Ch.4 Phụ thuộc hàm tr.29. Tìm phủ tối thiểu của $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$:\n1. Tách vế phải (B1): $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Loại thuộc tính thừa ở vế trái (B2): xét $AB\\to C$, bỏ thử $A$ còn $B$ có $B^+ = BCD \\supseteq C$ (hoặc vì $B\\to C$ đã có trong tập). Vậy **thuộc tính $A$ dư thừa trong $AB\\to C$** (**B đúng**, **D sai**).\n3. Loại PTH thừa (B3): sau khi bỏ $A$ còn $\\{B\\to C,\\; B\\to D,\\; C\\to D\\}$. Vì $B\\to D$ suy ra được từ $B\\to C$ và $C\\to D$ nên $B\\to D$ dư thừa (**C đúng**). Còn lại $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (**A đúng**).\nKhẳng định sai là **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29']
},
{
  id: 'k17-ca1-39', exam: 'k17-ca1', no: 39, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K \\subseteq U$ được gọi là khóa của $R$ khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K^+ = U$ và $\\exists K\'\\subset K$ mà $(K\')^+ =U$' },
    { key: 'B', text: '$K^+ = U$ và không tồn tại $K\' \\subset K$ mà $(K\')^+ = U$' },
    { key: 'C', text: '$K^+ = U$' },
    { key: 'D', text: '$K\\to U$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo định nghĩa khoá ở Slide Ch.4 Phụ thuộc hàm tr.30, $K \\subseteq U$ là **khoá** của $R$ khi và chỉ khi thoả đồng thời 2 điều kiện:\n1. $K$ là siêu khoá: $K^+ = U$ (tức $K \\to U$).\n2. Tính tối tiểu: **không tồn tại** tập con thực sự $K\' \\subset K$ nào mà $(K\')^+ = U$.\n- C và D mới là điều kiện của *siêu khoá*; A trái với tính tối tiểu. Chọn **B**.',
  sameAs: ['k16-ca2-40'],
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30']
},
{
  id: 'k17-ca1-41', exam: 'k17-ca1', no: 41, chapter: 'ch4', topic: '3.6',
  stem: '$R=(A,B, C,D, E, F)$ và $F=\\{A \\to B,\\; F \\to E\\}$. Phép tách $D=(R_1, R_2, R_3)$, trong đó $R_1=\\{A, B, D, E\\}$, $R_2=\\{B, C, E, F\\}$, $R_3=\\{A, C, D, F\\}$ là:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép tách không đảm bảo phụ thuộc hàm.' },
    { key: 'B', text: 'Phép tách kết nối không mất mát thông tin.' },
    { key: 'C', text: 'Phép tách đảm bảo phụ thuộc hàm.' },
    { key: 'D', text: 'Phép tách kết nối mất mát thông tin.' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Cả phương án B (không mất mát thông tin) và phương án C (đảm bảo phụ thuộc hàm) đều đúng theo tính toán nên không thể chọn một đáp án duy nhất',
  note: 'Kiểm chứng bằng thuật toán bảng $a_j / b_{ij}$ và phép chiếu $\\Pi_{R_i}(F)$ (cũng như `tools/fd.js`) cho thấy phép tách $D$ thỏa mãn đồng thời cả hai tính chất nêu ở phương án B và C.',
  explanation: 'Kiểm tra cả hai tính chất của phép tách $D = (R_1, R_2, R_3)$:\n1. **Kiểm tra bảo toàn phụ thuộc hàm** (Slide Ch.4 Chuẩn hóa tr.41–43): $A \\to B$ nằm trọn trong $R_1 = \\{A,B,D,E\\}$ và $F \\to E$ nằm trọn trong $R_2 = \\{B,C,E,F\\}$ nên $(\\Pi_{R_1}(F) \\cup \\Pi_{R_2}(F) \\cup \\Pi_{R_3}(F))^+ = F^+$ $\\Rightarrow$ **Phép tách đảm bảo phụ thuộc hàm (C đúng, A sai)**.\n2. **Kiểm tra mất mát thông tin bằng bảng $a_j/b_{ij}$** (Slide tr.47): khởi tạo hàng $R_3 = (a_1, b_{32}, a_3, a_4, b_{35}, a_6)$. Dùng $A \\to B$ trên $R_1, R_3$ (cùng $A=a_1$) $\\Rightarrow R_3[B] = a_2$. Dùng $F \\to E$ trên $R_2, R_3$ (cùng $F=a_6$) $\\Rightarrow R_3[E] = a_5$. Khi đó hàng $R_3$ gồm toàn $a_1, a_2, a_3, a_4, a_5, a_6$ $\\Rightarrow$ **Phép tách kết nối không mất mát thông tin (B đúng, D sai)**.\nDo cả **B** và **C** đều đúng nên câu này chưa chọn được một đáp án duy nhất.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.41–47']
},
{
  id: 'k17-ca1-42', exam: 'k17-ca1', no: 42, chapter: 'ch4', topic: '3.1',
  stem: 'Hệ tiên đề Armstrong cho các phụ thuộc hàm gồm các quy tắc nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Phản xạ, gia tăng, hợp và tách.' },
    { key: 'B', text: 'Phản xạ, gia tăng, bắc cầu.' },
    { key: 'C', text: 'Phản xạ, bắc cầu, hợp và tách.' },
    { key: 'D', text: 'Phản xạ, hợp và tách.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.9–10, **hệ tiên đề Armstrong** gốc gồm đúng 3 luật dẫn cơ bản: **Phản xạ**, **Bổ sung – gia tăng**, và **Bắc cầu** (**B đúng**). Các luật *hợp*, *tách* và *tựa bắc cầu* là các luật mở rộng được suy ra từ 3 tiên đề này (tr.10).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10']
}
);


DB.questions.push(
{
  id: 'k17-ca1-43', exam: 'k17-ca1', no: 43, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F = \\{C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BEH\\},\\; R_3 = \\{CEG\\},\\; R_4 = \\{CEK\\}$' },
    { key: 'B', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BK\\},\\; R_3 = \\{BEH\\},\\; R_4 = \\{CEG\\}$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khóa của $R$: tập nguồn $TN = \\{C, E\\}$ có $(CE)^+ = CEADBH \\to ABCDEGHK = U$, nên $R$ có khóa duy nhất là $CE$ (đạt 1NF).\n2. Tách $R$ về BCNF (Slide Ch.4 Chuẩn hóa tr.33–39, tương tự Câu 40 Đề mẫu 720):\n   - Tách theo $C \\to AD$: $R_1 = \\{ACD\\}$ (khóa $C$, đạt BCNF) và $R\' = \\{BCEGHK\\}$.\n   - Trên $R\'$, tách theo $B \\to K$: $R_2 = \\{BK\\}$ (khóa $B$, đạt BCNF) và $R\'\' = \\{BCEGH\\}$.\n   - Trên $R\'\'$, $E \\to BH$ vi phạm BCNF nên tách thành $R_3 = \\{BEH\\}$ (khóa $E$, đạt BCNF) và $R_4 = \\{CEG\\}$ (khóa $CE$, có $CE\\to G$, đạt BCNF).\n   Vậy **B đúng** (tất cả $R_1, R_2, R_3, R_4$ đều đạt BCNF và kết nối không mất mát thông tin).\n3. Xét **A**: lược đồ $R_4 = \\{CEK\\}$ kế thừa phụ thuộc hàm bắc cầu $E \\to K$ (từ $E\\to BH$ và $B\\to K$). Khóa của $R_4$ là $CE$, nên $E\\to K$ có vế trái $E$ không là siêu khóa $\\Rightarrow R_4$ vi phạm BCNF (chỉ đạt 1NF). Do đó A, C, D đều sai.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.33–39', 'Đề mẫu 720 – câu 40']
},
{
  id: 'k17-ca1-44', exam: 'k17-ca1', no: 44, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F = \\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: 'BCNF' },
    { key: 'B', text: '1NF' },
    { key: 'C', text: '3NF' },
    { key: 'D', text: '2NF' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khóa của $R(A,B,C,D,E)$: tập nguồn $TN = \\{C, E\\}$, tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không nằm trong khóa nào).\n   - $(CE)^+ = ACE \\ne U$.\n   - $(BCE)^+ = ABCDE = U$; $(CDE)^+ = ABCDE = U$.\n   Vậy $R$ có 2 khóa là $BCE$ và $CDE$. Thuộc tính khóa gồm $B, C, D, E$; thuộc tính **không khóa** duy nhất là $A$.\n2. Kiểm tra 2NF: xét PTH $C \\to A$ (hoặc $B \\to A$). Thuộc tính không khóa $A$ phụ thuộc **bộ phận** vào khóa $BCE$ (vì $C \\subset BCE$ và $B \\subset BCE$) nên $R$ **vi phạm 2NF**.\n3. Vì các lược đồ quan hệ mặc định đã ở chuẩn 1NF, dạng chuẩn cao nhất của $R$ là **1NF** (cùng bài với Câu 22 Đề mẫu 720). Chọn **B**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.11–16', 'Đề mẫu 720 – câu 22']
},
{
  id: 'k17-ca1-45', exam: 'k17-ca1', no: 45, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F = \\{AC\\to B,\\; AD\\to G,\\; BC\\to G,\\; B\\to D,\\; GD\\to E\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: '$AD \\to B$' },
    { key: 'B', text: '$AC \\to D$' },
    { key: 'C', text: '$BC \\to D$' },
    { key: 'D', text: '$AC \\to E$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng phụ thuộc hàm bằng cách tính bao đóng vế trái trên tập thuộc tính $U = \\{A,B,C,D,E,G\\}$ (Slide Ch.4 Phụ thuộc hàm tr.21–24):\n- **A sai**: $(AD)^+ \\xrightarrow{AD\\to G} ADG \\xrightarrow{GD\\to E} ADEG$. Thuật toán dừng vì không có PTH nào khác dùng được, suy ra $B \\notin (AD)^+$ nên $AD \\to B \\notin F^+$.\n- **B đúng**: $(AC)^+ \\xrightarrow{AC\\to B} ABC \\xrightarrow{B\\to D} ABCD \\to ABCDEG \\supseteq D$.\n- **C đúng**: $(BC)^+ \\xrightarrow{B\\to D} BCD \\to BCDEG \\supseteq D$ (hoặc bắc cầu từ $BC\\to B$ và $B\\to D$).\n- **D đúng**: $(AC)^+ = ABCDEG \\supseteq E$ nên $AC \\to E \\in F^+$.\nKhẳng định sai là **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18–24']
},
{
  id: 'k17-ca1-46', exam: 'k17-ca1', no: 46, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U = \\{ABCDEGH\\}$ và $F = \\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D\\}$. Bao đóng của $(BG)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$BCEGH$' },
    { key: 'B', text: '$ABCEH$' },
    { key: 'C', text: '$ABCEG$' },
    { key: 'D', text: '$BCDEH$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm bao đóng $(BG)^+$ (Slide Ch.4 Phụ thuộc hàm tr.18–19):\n- Khởi tạo: $X^{(0)} = BG$.\n- Áp dụng $BG \\to H$: $X^{(1)} = BGH$.\n- Áp dụng $BH \\to C$ (vì $BH \\subseteq BGH$): $X^{(2)} = BCGH$.\n- Áp dụng $HC \\to E$ (vì $HC \\subseteq BCGH$): $X^{(3)} = BCEGH$.\n- Hai PTH còn lại ($AB \\to DG$, $AC \\to D$) đều đòi hỏi $A \\notin BCEGH$ nên không áp dụng được nữa.\nVậy $(BG)^+ = BCEGH$. Chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18–19']
},
{
  id: 'k17-ca1-47', exam: 'k17-ca1', no: 47, chapter: 'ch4', topic: '1.8',
  stem: 'Cần thiết phải chuẩn hoá dữ liệu vì?',
  figure: null,
  options: [
    { key: 'A', text: 'Khi thực hiện các phép tìm kiếm trên các quan hệ chưa chuẩn hóa sẽ xuất hiện các dị thường thông tin.' },
    { key: 'B', text: 'Khi thực hiện các phép tách - kết nối tự nhiên các quan hệ chưa chuẩn hóa sẽ tạo ra các bộ dữ liệu ảo.' },
    { key: 'C', text: 'Khi thực hiện các phép lưu trữ trên các quan hệ chưa được chuẩn hoá thường xuất hiện các dị thường thông tin.' },
    { key: 'D', text: 'Các quan hệ chưa chuẩn hóa cho phép các giá trị khoá nhận giá trị null hay giá trị không xác định.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan tr.5–8 và Slide Ch.4 Chuẩn hóa tr.3–4, cần chuẩn hóa dữ liệu vì khi thực hiện các **phép lưu trữ** (thêm, sửa, xóa dữ liệu) trên các quan hệ chưa được chuẩn hóa thường xuất hiện các **dị thường thông tin** (dị thường cập nhật) và dư thừa dữ liệu (**C đúng**).\n- **A sai** vì thao tác *tìm kiếm* (đọc/truy vấn) không gây ra dị thường thông tin.\n- **B sai** vì chỉ phép tách *mất mát thông tin* mới sinh bộ giả khi kết nối tự nhiên.\n- **D sai** vì ràng buộc khóa không nhận NULL là ràng buộc toàn vẹn thực thể cơ bản ngay từ 1NF.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.5–8', 'Slide Ch.4 Chuẩn hóa CSDL – tr.3–4']
},
{
  id: 'k17-ca1-49', exam: 'k17-ca1', no: 49, chapter: 'ch4', topic: '3.4',
  stem: 'Cho $R(U,F)$, $X,Y$ là 2 tập thuộc tính ($X,Y\\subset U$). $X\\to Y\\in F$ là phụ thuộc hàm dư thừa, khi và chỉ khi $X\\to Y$ được suy dẫn logic từ:',
  figure: null,
  options: [
    { key: 'A', text: 'tập $U$.' },
    { key: 'B', text: 'tập $F$.' },
    { key: 'C', text: 'tập $G$ với $G=(F-\\{X\\to Y\\})$.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo định nghĩa phụ thuộc hàm dư thừa ở Slide Ch.4 Phụ thuộc hàm tr.27, phụ thuộc hàm $X\\to Y \\in F$ là **dư thừa** nếu việc loại bỏ nó khỏi $F$ không làm thay đổi tập bao đóng $F^+$, tức là $X\\to Y$ vẫn **được suy dẫn logic từ tập còn lại $G = F - \\{X\\to Y\\}$** ($Y \\subseteq X^+_G$). Chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.27']
},
{
  id: 'k17-ca1-50', exam: 'k17-ca1', no: 50, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCEGHL\\}$ và $F=\\{H\\to L,\\; CL\\to E,\\; CE\\to AB,\\; GH\\to C,\\; H\\to G\\}$. Khóa của $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$H$' },
    { key: 'B', text: '$HE$' },
    { key: 'C', text: '$HL$' },
    { key: 'D', text: '$HC$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm khóa (Slide Ch.4 Phụ thuộc hàm tr.31–33):\n1. Tập thuộc tính nguồn (không xuất hiện ở vế phải của bất kỳ PTH nào trong $F$): $TN = \\{H\\}$. Do đó mọi khóa đều phải chứa $H$.\n2. Tính bao đóng $H^+$:\n   - $H \\xrightarrow{H\\to L,\\; H\\to G} HGL$.\n   - $GH \\subseteq HGL$, dùng $GH \\to C$ $\\Rightarrow CHGL$.\n   - $CL \\subseteq CHGL$, dùng $CL \\to E$ $\\Rightarrow CEGHL$.\n   - $CE \\subseteq CEGHL$, dùng $CE \\to AB$ $\\Rightarrow ABCEGHL = U$.\n3. Vì $H^+ = U$ và $H$ chỉ gồm 1 thuộc tính (không thể rút gọn thêm) nên $H$ là **khóa duy nhất** của $R(U,F)$. Các tập $HE, HL, HC$ đều là siêu khóa dư thừa. Chọn **A**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.31–33']
}
);
