/* Đề LTCSDL số 2 – nguồn: tai-lieu/Đề thi LTCSLD/Đề 2/ (1.png–15.png) & tai-lieu-text/de/ltcsdl-de2.md */
DB.questions.push(
{
  id: 'ltcsdl-de2-01', exam: 'ltcsdl-de2', no: 1, chapter: 'ch1', topic: '1.2',
  stem: 'Trong mô hình kiến trúc ba mức của hệ CSDL, mô hình dữ liệu quan niệm là:',
  figure: null,
  options: [
    { key: 'A', text: 'Cách nhìn dữ liệu ở mức ngoài.' },
    { key: 'B', text: 'Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người sử dụng.' },
    { key: 'C', text: 'Nội dung thông tin của toàn bộ cơ sở dữ liệu dưới cách nhìn của người sử dụng.' },
    { key: 'D', text: 'Cách nhìn dữ liệu một cách tổng quát của người sử dụng.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong kiến trúc 3 mức ANSI/SPARC (Ngoài $\\to$ Quan niệm $\\to$ Trong):\n- **Mức ngoài** (A, B): mô tả khung nhìn (*View*), chỉ phản ánh **một phần** CSDL phù hợp từng nhóm người dùng.\n- **Mức quan niệm**: mô tả **nội dung thông tin của toàn bộ cơ sở dữ liệu dưới cách nhìn của người sử dụng** (các thực thể, kiểu dữ liệu, liên kết và ràng buộc), trừu tượng hóa chi tiết lưu trữ vật lý (**C đúng**).\n- D diễn đạt chung chung, không chuẩn định nghĩa bằng C.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-02', exam: 'ltcsdl-de2', no: 2, chapter: 'ch1', topic: '1.1',
  stem: 'Trong quá trình cập nhật dữ liệu, dữ liệu được hệ quản trị CSDL kiểm soát để đảm bảo tính chất nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Tính ràng buộc toàn vẹn.' },
    { key: 'B', text: 'Tính bảo mật.' },
    { key: 'C', text: 'Tính độc lập.' },
    { key: 'D', text: 'Tính nhất quán.' }
  ],
  answer: 'D', marked: 'A', outside: false, incomplete: null,
  note: 'Trong ảnh 1.png, nút radio (A) được tô chọn (không có dấu chấm đúng/sai).',
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.14 (*Các tiêu chuẩn của CSDL*):\n- **Tính nhất quán**: "*Sau các thao tác cập nhật dữ liệu và ngay cả khi có sự cố xảy ra $\\Rightarrow$ dữ liệu trong CSDL phải đảm bảo được tính đúng đắn*" (**D đúng**).\n- **Tính toàn vẹn** (slide không gọi là "Tính ràng buộc toàn vẹn") là bảo đảm giá trị lưu trữ thỏa mãn các ràng buộc miền, khóa, tham chiếu.\n- **Tính bảo mật** (B) ngăn truy xuất trái phép; **Tính độc lập** (C) là dữ liệu độc lập với ứng dụng và lưu trữ.',
  source: ['Slide Ch.1 Tổng quan – tr.14']
},
{
  id: 'ltcsdl-de2-03', exam: 'ltcsdl-de2', no: 3, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp môi trường tạo lập CSDL.' },
    { key: 'B', text: 'Cung cấp công cụ quản lý bộ nhớ.' },
    { key: 'C', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' },
    { key: 'D', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Ba nhóm chức năng chính của HQT CSDL (DBMS) gồm: (1) cung cấp môi trường tạo lập CSDL qua ngôn ngữ định nghĩa dữ liệu DDL (**A**); (2) cung cấp môi trường cập nhật và khai thác dữ liệu qua DML/SQL (**D**); (3) cung cấp công cụ kiểm soát, điều khiển truy cập, bảo mật, toàn vẹn và khôi phục (**C**).\nViệc **quản lý bộ nhớ** là chức năng của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-04', exam: 'ltcsdl-de2', no: 4, chapter: 'ch1', topic: '1.3',
  stem: 'Ưu điểm của hệ quản trị Cơ sở dữ liệu là:',
  figure: null,
  options: [
    { key: 'A', text: 'Quản lý được dữ liệu dư thừa.' },
    { key: 'B', text: 'Cung cấp khả năng chia sẻ dữ liệu.' },
    { key: 'C', text: 'Đảm bảo tính toàn vẹn và tính nhất quán cho dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.18 (*Ưu điểm của HQT CSDL*), hệ quản trị CSDL có 4 ưu điểm chính: quản lý được dữ liệu dư thừa (**A**), tạo khả năng chia sẻ dữ liệu nhiều hơn (**B**), đảm bảo tính nhất quán và cải tiến tính toàn vẹn cho dữ liệu (**C**).\nVì cả A, B, C đều đúng nên chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.18']
},
{
  id: 'ltcsdl-de2-05', exam: 'ltcsdl-de2', no: 5, chapter: 'ch1', topic: '1.1',
  stem: 'Hệ cơ sở dữ liệu gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu tương ứng, phần mềm ứng dụng, người dùng.' },
    { key: 'B', text: 'Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu và phần mềm ứng dụng.' },
    { key: 'C', text: 'Cơ sở dữ liệu, phần mềm ứng dụng, người dùng.' },
    { key: 'D', text: 'Phần mềm ứng dụng, hệ quản trị cơ sở dữ liệu, người dùng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Một hệ cơ sở dữ liệu đầy đủ gồm 4 thành phần chính (Slide Ch.1 Tổng quan – tr.10, 20): **Cơ sở dữ liệu**, **Hệ quản trị CSDL tương ứng**, **Phần mềm ứng dụng** và **Người dùng** (**A đúng**).\n- B thiếu người dùng; C thiếu hệ quản trị CSDL; D thiếu cơ sở dữ liệu.',
  source: ['Slide Ch.1 Tổng quan – tr.10, 20']
},
{
  id: 'ltcsdl-de2-06', exam: 'ltcsdl-de2', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính nguyên tố (nguyên tử) là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' },
    { key: 'B', text: 'Thuộc tính có thể phân chia thành các thành phần nhỏ hơn, có ý nghĩa độc lập.' },
    { key: 'C', text: 'Thuộc tính không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa.' },
    { key: 'D', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.9–11:\n- **Thuộc tính đơn (nguyên tử / nguyên tố)**: không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa (**C đúng**, ngược với **B** là *thuộc tính phức hợp*).\n- A là định nghĩa *thuộc tính lưu trữ* (tr.11); D là định nghĩa *thuộc tính đơn trị* (tr.10).',
  source: ['Slide Ch.2 Mô hình ER – tr.9–11']
},
{
  id: 'ltcsdl-de2-07', exam: 'ltcsdl-de2', no: 7, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng (EER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mỗi liên kết một cách rõ ràng và chính xác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệp vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Phương án A trong ảnh gốc in "mỗi liên kết" (mối liên kết).',
  explanation: 'Mô hình thực thể liên kết mở rộng (**EER** – *Enhanced ER*) kế thừa mô hình ER cơ bản và bổ sung thêm **một số khái niệm ngữ nghĩa mới** (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) cùng các ràng buộc để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn (**C đúng**).\n- A quá hẹp (chỉ nhắc `min-max`); B bỏ qua phần mở rộng khái niệm lớp thực thể và kế thừa.',
  sameAs: ['de-mau-720-03'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-08', exam: 'ltcsdl-de2', no: 8, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu (lớp) thực thể Nhân viên trong mô hình thực thể liên kết (ER) của bài toán quản lý công ty:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý.' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, tên phòng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Ở mức mô hình thực thể liên kết **ER** (Slide Ch.2 – tr.27, 32), các mối quan hệ giữa `NHÂN VIÊN` với `PHÒNG` (`Làm việc cho`) hay với người quản lý (`Giám sát`) được biểu diễn bằng **kiểu liên kết** (hình thoi), **không** đưa khóa ngoại (`mã phòng`, `mã người quản lý`) hay thuộc tính của thực thể khác (`tên phòng`) vào làm thuộc tính của `NHÂN VIÊN`.\nVì vậy loại B, C, D và chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.27, 32']
},
{
  id: 'ltcsdl-de2-09', exam: 'ltcsdl-de2', no: 9, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có thể có nhiều [bị cắt] lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', kind: 'derived', dx: -82, dy: 64 },
        { label: 'Phường', kind: 'derived', dx: 0, dy: 64 },
        { label: 'Tỉnh', kind: 'derived', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0 },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 1 của đề bài trong ảnh 3.png bị cắt ở mép phải ("có thể có nhiều đ… lạc." = "có thể có nhiều địa chỉ liên lạc."). Ngoài ra trong ảnh dùng viền elip đậm/dày để biểu diễn elip kép đa trị cho `Địa chỉ` ở A, B, C.',
  explanation: '1. `Mã Khách` là **thuộc tính khóa** định danh `KHÁCH HÀNG` $\\Rightarrow$ phải vẽ **gạch chân** (loại **B** vì không gạch chân).\n2. Mỗi khách hàng có **nhiều** địa chỉ liên lạc $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị**, vẽ bằng **elip kép** (loại **D** vì vẽ elip đơn mảnh).\n3. `Địa chỉ` còn là **thuộc tính phức hợp** tách thành 3 thành phần lưu trữ `Xã`, `Phường`, `Tỉnh` vẽ bằng elip đơn nét liền nối từ `Địa chỉ` (loại **B** vì vẽ nét đứt suy dẫn và đầy đủ chi tiết hơn **C**). Chọn **A**.',
  sameAs: ['k16-ca1-15'],
  source: ['Slide Ch.2 Mô hình ER – tr.9–10, 12']
},
{
  id: 'ltcsdl-de2-10', exam: 'ltcsdl-de2', no: 10, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết n-m giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'B', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.20–21 (*Các kiểu liên kết*):\n- Liên kết **nhiều–nhiều ($n-m$)**: một thực thể kiểu A liên kết với **nhiều** thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với **nhiều** thực thể kiểu A $\\Rightarrow$ **D đúng**.\n- A và B mô tả liên kết `1–1`; C mô tả liên kết `1–n`.',
  source: ['Slide Ch.2 Mô hình ER – tr.20–21']
},
{
  id: 'ltcsdl-de2-11', exam: 'ltcsdl-de2', no: 11, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo mô hình EER (Đề cương 2023 mục 2.4.5):\n- **Ràng buộc tách biệt (`d` – *disjoint*)**: một thực thể kiểu cha thuộc tối đa một kiểu con (không thể đồng thời thuộc hai hay nhiều kiểu con) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp (`o` – *overlapping*)**: một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con $\\Rightarrow$ **B đúng**.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-12', exam: 'ltcsdl-de2', no: 12, chapter: 'ch2', topic: '2.6',
  stem: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của mình. Tài liệu có thể là sách, bao gồm các thuộc tính: tác giả, tựa đề, năm xuất bản. Tài liệu có thể là bài báo khoa học từ tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp chí, số volume, số trang. Kiểu thực thể con cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tài liệu với các thuộc tính: tác giả, tựa đề, năm xuất bản, tên tạp chí, số volume, số trang.' },
    { key: 'B', text: 'Tài liệu và các thuộc tính: tác giả, tựa đề.' },
    { key: 'C', text: 'Sách gồm các thuộc tính: Tác giả, tựa đề, năm xuất bản và bài báo khoa học với các thuộc tính tác giả, tựa đề, số volume, số trang.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'D', marked: 'D', outside: true, incomplete: null,
  note: 'Trong ảnh 5.png, nút radio (D) được tô chọn (không có dấu chấm đúng/sai).',
  explanation: 'Theo nguyên tắc kế thừa của mô hình EER:\n- Kiểu thực thể cha `Tài liệu` giữ các thuộc tính chung (`tác giả, tựa đề`), nên A (gộp hết vào cha) và B (chỉ nêu kiểu cha) đều không phải kiểu thực thể con.\n- Hai kiểu thực thể con kế thừa thuộc tính của cha và chỉ khai báo thuộc tính riêng: `Sách` (`năm xuất bản`) và `Bài báo khoa học` (`tên tạp chí, số volume, số trang`). Phương án C vừa chép lặp thuộc tính của cha (`tác giả, tựa đề`) vào cả hai lớp con, vừa **thiếu thuộc tính `tên tạp chí`** ở `Bài báo khoa học` nên C cũng sai.\nVì cả A, B, C đều sai nên chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de2-13', exam: 'ltcsdl-de2', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng biệt nào đó của các thực thể trong kiểu cha.' },
    { key: 'B', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down).' },
    { key: 'C', text: 'Kỹ thuật chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là specialization.' },
    { key: 'D', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER (Đề cương 2023 mục 2.4.3–2.4.4):\n- **Chuyên biệt hóa (*Specialization*)** là thiết kế **từ trên xuống (*Top-down*)**, xuất phát từ kiểu thực thể cha đã có để tách ra các kiểu thực thể con theo các đặc tính riêng biệt (**A, B, C đều đúng**).\n- Ngược lại, quá trình thiết kế **từ dưới lên (*Bottom-up*)** xác định kiểu thực thể cha từ các kiểu thực thể con có đặc điểm chung gọi là **tổng quát hóa (*Generalization*)**, không phải chuyên biệt hóa $\\Rightarrow$ khẳng định **D sai**.',
  source: ['Đề cương môn học 2023 (mục 2.4.3–2.4.4)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-14', exam: 'ltcsdl-de2', no: 14, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: "Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban và có số điện thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty". Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể PHÒNG gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Điện thoại.' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo mô tả bài toán và nguyên tắc mô hình ER (Slide Ch.2 – tr.15–17, 27):\n- Thực thể `PHÒNG` chỉ gồm các thuộc tính mô tả trực tiếp cho nó: **`Mã phòng`**, **`Tên phòng`** và **`Điện thoại`** (**C đúng**).\n- Thông tin *"Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty"* được biểu diễn bằng **mối liên kết** `Quản lý` giữa `PHÒNG` và `NHÂN VIÊN` (không đưa khóa ngoại `Mã người quản lý` vào thực thể `PHÒNG` trong mô hình ER) $\\Rightarrow$ loại A, D.\n- Đề bài không đề cập `Địa chỉ` của phòng $\\Rightarrow$ loại B.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–17, 27']
},
{
  id: 'ltcsdl-de2-15', exam: 'ltcsdl-de2', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER – tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể"** $\\Rightarrow$ **A đúng**.\n- B và C nhầm lẫn định nghĩa liên kết với quy tắc nghiệp vụ hoặc ràng buộc tham gia bắt buộc (trong khi liên kết có thể là tham gia bộ phận/tùy chọn).',
  source: ['Slide Ch.2 Mô hình ER – tr.15']
},
{
  id: 'ltcsdl-de2-16', exam: 'ltcsdl-de2', no: 16, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể giáo viên với các thuộc tính Mã giáo viên, lương, hệ số lương? Biết rằng lương được tính theo hệ số lương.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: '… (bị cắt)', x: 170, y: 105, attrs: [{ label: 'HSL', dx: 0, dy: -60 }] }],
      notes: [{ text: 'Chỉ thấy elip HSL ở mép dưới ảnh 5.png', x: 170, y: 145 }]
    } } },
    { key: 'B', text: '[Ảnh gốc bị cắt không thấy phương án B]' },
    { key: 'C', text: '[Ảnh gốc bị cắt không thấy phương án C]' },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 185, y: 95, attrs: [
        { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
        { label: '… (bị cắt)', dx: 0, dy: -60 },
        { label: 'Mã GV', kind: 'key', dx: 135, dy: 0 }
      ] }],
      notes: [{ text: 'Nhãn (D?) và thuộc tính trên bị cắt ở đỉnh ảnh 6.png', x: 185, y: 140 }]
    } } }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị cắt mất phần lớn các sơ đồ phương án A, B, C, D.',
  note: 'Ảnh 5.png kết thúc ở phần đầu elip `HSL` của phương án A; ảnh 6.png bắt đầu từ nửa dưới sơ đồ cuối (nhiều khả năng là D, ngay trên Câu 17) với `Lương` nét đứt, `GIÁO VIÊN`, `Mã GV` gạch chân và nét nối đi lên bị cắt; toàn bộ B và C không có trong ảnh.',
  explanation: 'Theo quy tắc biểu diễn thuộc tính trên Slide Ch.2 Mô hình ER – tr.11–12:\n1. `Mã GV` là **thuộc tính khóa** $\\Rightarrow$ vẽ elip nét liền và **gạch chân**.\n2. `Lương` được tính theo hệ số lương nên là **thuộc tính suy dẫn** $\\Rightarrow$ vẽ **elip nét đứt**.\n3. `HSL` (hệ số lương) là thuộc tính lưu trữ thông thường $\\Rightarrow$ vẽ **elip nét liền**.\nSơ đồ cuối ở đầu ảnh 6.png có `Lương` nét đứt và `Mã GV` gạch chân (khớp điều kiện 1 & 2), nhưng do thiếu thuộc tính phía trên (`HSL` nét liền hay nét đứt), thiếu phần lớn phương án A và toàn bộ B, C nên không thể khẳng định đáp án chính xác.',
  source: ['Slide Ch.2 Mô hình ER – tr.11–12']
},
{
  id: 'ltcsdl-de2-17', exam: 'ltcsdl-de2', no: 17, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc tách biệt trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 190, y: 115, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 445, y: 55, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 445, y: 175, attrs: [{ label: 'Trọng tải', dx: 120, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 115, kind: 'o', parent: 'pt', total: true, children: ['oto', 'xt'] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 190, y: 115, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 445, y: 55, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 445, y: 175, attrs: [{ label: 'Trọng tải', dx: 120, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 115, kind: 'd', parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 190, y: 115, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 445, y: 55, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 445, y: 175, attrs: [{ label: 'Trọng tải', dx: 120, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 115, kind: 'd', parent: 'pt', total: true, children: ['oto', 'xt'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 190, y: 115, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô 4 chỗ', x: 445, y: 55, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 445, y: 175, attrs: [{ label: 'Trọng tải', dx: 120, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 315, y: 115, kind: 'o', parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh 6.png độ phân giải thấp, đường nối toàn phần từ `PHƯƠNG TIỆN GT` tới vòng tròn ở A và C chỉ hiện nét dày/đậm hơn B và D; không nhìn rõ dấu gạch chân (nếu có) dưới `Mã PT`.',
  explanation: '1. Đề bài yêu cầu mô tả **ràng buộc tách biệt** (*disjoint*) $\\Rightarrow$ vòng tròn chuyên biệt hóa phải ghi chữ **`d`** (loại **A** và **D** vì ghi chữ **`o`** là phủ lấp).\n2. Giữa **B** (nét đơn – từng phần/*partial*) và **C** (nét đôi – toàn phần/*total*): theo ngữ nghĩa của ví dụ kinh điển `VEHICLE` (`PHƯƠNG TIỆN GT` $\\to$ `Ô tô 4 chỗ`, `Xe tải` trong *Elmasri & Navathe*), không phải mọi phương tiện giao thông đều bắt buộc là ô tô 4 chỗ hoặc xe tải (còn có xe máy, xe buýt, ô tô 7 chỗ…), nên chuyên biệt hóa này là **từng phần (nét đơn)**. Chọn **B**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'ltcsdl-de2-18', exam: 'ltcsdl-de2', no: 18, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{HANG}(\\text{Mahang}, \\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD}, \\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Cho biết thông tin về các mặt hàng có đơn giá trên 500.*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\text{HANG}) \\cap \\sigma_{\\text{dongia}>500}(\\text{HANG})$' },
    { key: 'B', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG}*\\text{ChitietHD})$' },
    { key: 'C', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG}))$' },
    { key: 'D', text: '$\\pi_{\\text{mahang},\\text{tenhang}},\\sigma_{\\text{dongia}>500}(\\text{HANG}*\\text{ChitietHD})$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 6.png/7.png, phương án B thiếu một dấu ngoặc đóng `)` ở cuối và D có dấu phẩy giữa phép chiếu và phép chọn; chép nguyên văn từ ảnh.',
  explanation: 'Thông tin mặt hàng và đơn giá đều nằm trong quan hệ `HANG`, không cần kết nối với `ChitietHD` (nối với `ChitietHD` như B, D sẽ làm mất các mặt hàng có đơn giá $> 500$ nhưng chưa bán lần nào, lại sai cú pháp ngoặc/dấu phẩy).\n- **A sai** vì hai vế của phép giao $\\cap$ không cùng lược đồ (`(mahang, tenhang)` vs 4 cột của `HANG`).\n- **C đúng**: lọc các dòng `dongia > 500` trên `HANG` trước rồi chiếu lấy `mahang, tenhang`.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24']
},
{
  id: 'ltcsdl-de2-19', exam: 'ltcsdl-de2', no: 19, chapter: 'ch3', topic: '2.9',
  stem: 'Phép toán sửa đổi trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Sửa đổi giá trị của một số thuộc tính.' },
    { key: 'B', text: 'Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ' },
    { key: 'C', text: 'Sửa đổi mô tả các thuộc tính.' },
    { key: 'D', text: 'Sửa đổi giá trị của một bộ hay một nhóm các bộ' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 8 (*Phép thay đổi – `CH`*): các phép toán cập nhật dữ liệu trong mô hình quan hệ (`INSERT`, `DEL`, `CH`) tác động trên **các bộ** của quan hệ; phép thay đổi có dạng $r = r \\setminus t \\cup t\'$ dùng để **sửa đổi giá trị của một bộ hay một nhóm các bộ** (**D đúng**).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 8']
},
{
  id: 'ltcsdl-de2-20', exam: 'ltcsdl-de2', no: 20, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-n trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 205, y: 115, attrs: [
        { label: 'Họ tên', dx: -120, dy: 0, parts: [
          { label: 'Họ', dx: -65, dy: -46 },
          { label: 'Tên', dx: -65, dy: 46 }
        ] },
        { label: 'Mã NV', kind: 'key', dx: 0, dy: 64 }
      ] },
      { id: 'tn', label: 'THÂN NHÂN', x: 530, y: 115, weak: true, attrs: [
        { label: 'Tên TN', dx: 0, dy: -64 },
        { label: 'Giới tính', dx: -58, dy: 64 },
        { label: 'Quan hệ', dx: 58, dy: 64 }
      ] }
    ],
    rels: [
      { id: 'co', label: 'Có', x: 365, y: 115, links: [
        { to: 'nv', card: '1', total: false },
        { to: 'tn', card: 'n', total: true }
      ] }
    ]
  } },
  options: [
    { key: 'A', text: '`THANNHAN` (MaNV, TenTN, GioiTinh, Quanhe)' },
    { key: 'B', text: '`THANNHAN` (TenTN, GioiTinh, Quanhe)' },
    { key: 'C', text: '`NHANVIEN` ($\\underline{\\text{MaNV}}$, Ho, Ten, TenTN, Gioitinh, Quanhe)' },
    { key: 'D', text: '`NHANVIEN` (MaNV, HoTen, TenTN, GioiTinh, Quanhe)' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 7.png, viền hình chữ nhật `THÂN NHÂN` và đường nối phía `n` đậm/dày hơn (biểu thị thực thể yếu và tham gia toàn bộ), còn hình thoi `Có` trông như viền đơn và `Tên TN` không thấy rõ gạch chân. Phương án A trong đề gốc không gạch chân khóa nhưng là phương án đúng duy nhất về quy tắc chuyển liên kết `1-n`.',
  explanation: 'Theo Quy tắc 5 – Chuyển liên kết `1-n` (Slide Ch.3 P1 tr.25) và Quy tắc 2 – Chuyển thực thể yếu (tr.19–20):\n- Đặt **thuộc tính khóa của thực thể bên phía 1 (`MaNV` của `NHÂN VIÊN`)** vào lược đồ quan hệ của **thực thể bên phía nhiều (`THANNHAN`)**.\n- Do đó `THANNHAN` gồm `MaNV` (khóa ngoại từ `NHÂN VIÊN`) cùng các thuộc tính riêng `TenTN, GioiTinh, Quanhe` $\\Rightarrow$ **A đúng**.\n- B thiếu `MaNV`; C và D gộp sai thuộc tính của `THÂN NHÂN` sang `NHANVIEN`.',
  sameAs: ['k16-ca2-22'],
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.19–20, 25']
},
{
  id: 'ltcsdl-de2-21', exam: 'ltcsdl-de2', no: 21, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn không chính xác yêu cầu: “*Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5\\text{ AND }\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua} * \\text{SinhVien}))$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}*\\text{Sinhvien}))$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5\\text{ AND }\\text{MaMon}=\\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc ghi nhầm `MaS` trong lược đồ `SinhVien` (biểu thức dùng `MaSV`); phương án B vừa sai ký hiệu `∩` trong điều kiện chọn vừa thừa một dấu ngoặc mở `((`. Lưu ý thêm: phương án C cũng sai về ngữ nghĩa khi chiếu `MaSV, HoTen` trước phép giao `∩` (lấy nhầm SV đạt >=5 ở môn khác và trượt môn T11).',
  explanation: 'Đề hỏi biểu thức **không chính xác**:\n- A và D đều biểu diễn đúng (chỉ khác nhau giữa nối trước hay chọn trước).\n- **B sai hoàn toàn về cú pháp ĐSQH**: trong biểu thức điều kiện của phép chọn $\\sigma$ chỉ được dùng phép logic (`AND`/`OR`/`NOT`), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời B còn thừa một dấu ngoặc mở `(`.\n- *(Ghi chú thêm: C cũng mắc lỗi ngữ nghĩa nếu một sinh viên thi môn khác đạt $\\ge 5$ nhưng thi T11 dưới $5$ vẫn bị lọt vào kết quả phép giao $\\cap$.)* Chọn **B**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24']
},
{
  id: 'ltcsdl-de2-22', exam: 'ltcsdl-de2', no: 22, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen},\\text{GioiTinh},\\text{NgaySinh},\\text{Que})$; $\\text{Monhoc}(\\text{MaMon},\\text{TenMon},\\text{SoTC})$; $\\text{KetQua}(\\text{MaSV},\\text{MaMon},\\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) *\\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) *\\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) *\\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) *\\text{SinhVien})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc ghi nhầm `MaS` trong lược đồ `SinhVien` (thực tế là `MaSV`).',
  explanation: 'Yêu cầu tìm sinh viên đã thi **hết tất cả các môn** $\\Rightarrow$ dùng **phép chia ($\\div$)** (Slide Ch.3 P2 tr.29–31):\n1. Chiếu `KetQua` lấy `(MaSV, MaMon)` và chiếu `MonHoc` lấy `(MaMon)` rồi chia: $\\pi_{\\text{MaSV},\\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})$ cho tập `MaSV` đã thi đủ mọi môn.\n2. Đặt dấu ngoặc `(...)` bọc phép chia trước khi kết nối tự nhiên (`*`) với `SinhVien` rồi chiếu `HoTen` $\\Rightarrow$ **B đúng**.\n- A, D sai vì dùng phép trừ `−` (hai vế khác lược đồ); C thiếu ngoặc bọc phép chia.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31, 38']
},
{
  id: 'ltcsdl-de2-23', exam: 'ltcsdl-de2', no: 23, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten},\\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban}, \\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Lấy thông tin gồm số hóa đơn, tên hàng, số lượng hàng đã bán được cho khách hàng KH007 trong năm 2020*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’}\\text{ AND }\\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD}*\\text{HoaDon}*\\text{Hang}))$' },
    { key: 'B', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’},\\; \\text{ngaylap}=2020}(\\text{ChitietHD}*\\text{HoaDon}*\\text{Hang}))$' },
    { key: 'C', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’}\\text{ AND }\\text{ngaylap}=2020}(\\text{ChitietHD}*\\text{HoaDon}*\\text{Hang}))$' },
    { key: 'D', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}=\\text{‘KH007’},\\; \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD}*\\text{HoaDon}*\\text{Hang}))$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc viết tắt `MaKhach` thành `maKH` ở cả 4 phương án (và `ngaylap` trong B, C). Chỉ số dưới trong ảnh 8.png/9.png nhỏ/mờ nhưng đọc được sau khi phóng to.',
  explanation: '1. Theo Slide Ch.3 P2 tr.24, hai điều kiện chọn trong $\\sigma$ phải kết hợp bằng phép toán logic **`AND`**, không dùng dấu phẩy `,` (loại **B** và **D**).\n2. Thuộc tính `NgaylapHD` có kiểu ngày tháng nên muốn lọc theo năm `2020` phải dùng hàm **`year(ngaylapHD)=2020`**, không thể viết `ngaylap=2020` (loại **B** và **C**).\n3. Nối tự nhiên `ChitietHD * HoaDon * Hang` (qua `SoHD` và `MaHang`), lọc điều kiện trên rồi chiếu `soHD, tenHang, SLBan` $\\Rightarrow$ **A đúng**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'ltcsdl-de2-24', exam: 'ltcsdl-de2', no: 24, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “*Đưa ra danh sách những bạn đọc của lớp H28 được cấp thẻ trước ngày 30/12/2020*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{lop}=\\text{‘H28’}\\text{ AND }\\text{ngaycap}<\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'B', text: '$\\sigma_{\\text{lop}=\\text{‘H28’},\\; \\text{ngaycap}<\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'C', text: '$\\sigma_{\\text{lop}=\\text{‘H28’}}(\\text{BANDOC}) \\cap \\sigma_{\\text{ngaycap}>\\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Chỉ số dưới trong ảnh 8.png/9.png nhỏ/mờ; dấu so sánh trong phương án C đọc là `>`.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24:\n- Hai điều kiện trong phép chọn $\\sigma$ phải nối bằng phép logic **`AND`** (loại **B** vì ngăn cách bằng dấu phẩy `,`).\n- Yêu cầu *"trước ngày 30/12/2020"* tương ứng với điều kiện **`ngaycap < ‘30/12/2020’`** (loại **C** vì dùng dấu `>` là sau ngày 30/12/2020).\nDo đó chỉ **A** đúng.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de2-25', exam: 'ltcsdl-de2', no: 25, chapter: 'ch3', topic: '2.11',
  stem: 'Thứ tự thực hiện các phép toán để tối ưu hoá biểu thức truy vấn dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép chọn, phép kết nối, phép chiếu.' },
    { key: 'B', text: 'Phép kết nối, phép chọn, phép chiếu.' },
    { key: 'C', text: 'Phép chiếu, phép chọn, phép kết nối.' },
    { key: 'D', text: 'Phép chiếu, phép kết nối, phép chọn.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  note: 'Lưu ý chuẩn kiến thức (như Đề mẫu 720 – câu 17): thứ tự tối ưu heuristic đầy đủ là **Phép chọn $\\to$ Phép chiếu $\\to$ Phép kết nối**. Bộ đề gốc không có phương án này; trong 4 lựa chọn hiện có, A là phương án duy nhất thực hiện phép chọn đầu tiên (trước cả kết nối và chiếu).',
  explanation: 'Theo nguyên tắc heuristic tối ưu hóa biểu thức ĐSQH:\n1. **Phép chọn ($\\sigma$)** luôn phải thực hiện **sớm nhất** để giảm nhanh số lượng bộ (hàng), và phải thực hiện **trước phép chiếu** (nếu chiếu trước như C, D có thể loại mất các thuộc tính dùng cho điều kiện lọc).\n2. Tránh thực hiện phép kết nối ngay từ đầu trên toàn bộ dữ liệu gốc (loại B).\nTrong 4 phương án của đề, chỉ **A** đặt phép chọn ở bước đầu tiên $\\Rightarrow$ chọn **A**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Heuristic tối ưu biểu thức ĐSQH']
},
{
  id: 'ltcsdl-de2-26', exam: 'ltcsdl-de2', no: 26, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “*Đưa ra danh sách mã và tên của những bạn đọc hiện đang mượn Giáo trình Cấu trúc dữ liệu của thư viện*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'B', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’},\\; \\text{traSach}=\\text{No}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'C', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’}\\text{ AND }\\text{traSach}=\\text{No}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'D', text: '$\\sigma_{\\text{tenSach}=\\text{‘Cấu trúc dữ liệu’}\\text{ AND }\\text{traSach}=\\text{No}}(\\pi_{\\text{maBD},\\text{tenBD}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Chỉ số dưới trong ảnh 9.png nhỏ/mờ nhưng đọc được; đề hỏi "Giáo trình Cấu trúc dữ liệu" còn biểu thức lọc `tenSach=\'Cấu trúc dữ liệu\'`.',
  explanation: '1. Yêu cầu *"hiện đang mượn"* nghĩa là phiếu mượn chưa trả (`traSach = No`), nên cần hai điều kiện: `tenSach = ‘Cấu trúc dữ liệu’` và `traSach = No` nối bằng phép logic **`AND`** (loại **A** vì thiếu `traSach = No`, loại **B** vì dùng dấu phẩy `,`).\n2. Phải thực hiện phép chọn $\\sigma$ **trước** khi chiếu $\\pi_{\\text{maBD},\\text{tenBD}}$ (nếu chiếu trước như **D** sẽ làm mất hai cột `tenSach` và `traSach` nên không lọc được). Chọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'ltcsdl-de2-27', exam: 'ltcsdl-de2', no: 27, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu “*Lập danh sách các sinh viên được khen thưởng học kỳ 1 mà không được khen trong học kỳ 2*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} - \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} \\cap \\text{DOT2}$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16 (*Phép trừ – Minus*): phép trừ $r - s$ cho kết quả là tập các bộ **có trong $r$ nhưng không có trong $s$**.\n- Do đó sinh viên có trong `DOT1` mà không có trong `DOT2` là **`DOT1 - DOT2`** (**A đúng**).\n- B ($\\times$) là tích Đề-các; C ($\\cup$) là học kỳ 1 hoặc 2; D ($\\cap$) là cả hai học kỳ.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16']
},
{
  id: 'ltcsdl-de2-28', exam: 'ltcsdl-de2', no: 28, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi một số thuộc tính trong lược đồ R có trong X và giữ lại các thuộc tính không có trong danh sách thuộc tính X.' },
    { key: 'B', text: 'Loại bỏ đi các hàng trong lược đồ R không thỏa mãn điều kiện X và giữ lại các hàng thỏa mãn điều kiện X.' },
    { key: 'C', text: 'Loại bỏ đi các thuộc tính trong lược đồ R không có trong X và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính X.' },
    { key: 'D', text: 'Loại bỏ đi một số hàng trong lược đồ R thỏa mãn điều kiện X và giữ lại các hàng không thỏa mãn điều kiện X.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19: **Phép chiếu $\\pi_X(R)$** là loại bỏ đi các thuộc tính của lược đồ $R$ **không có trong $X$** và **giữ lại** những thuộc tính được liệt kê trong danh sách thuộc tính $X$ (rút trích theo cột) $\\Rightarrow$ **C đúng**.\n- A phát biểu ngược lại; B và D nói về các hàng (phép chọn $\\sigma$).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19']
},
{
  id: 'ltcsdl-de2-29', exam: 'ltcsdl-de2', no: 29, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'B', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các hàng là quan trọng.' },
    { key: 'D', text: 'thứ tự của các cột là quan trọng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.3 P1 tr.10, "thứ tự các bộ trong quan hệ là không quan trọng" (A), còn "thứ tự giữa các giá trị trong một bộ là quan trọng" (ứng với thứ tự cột theo vị trí khi viết bộ dạng $n$-bộ có thứ tự). Lưu ý trong lý thuyết CSDL hiện đại khi các cột định danh bằng tên thuộc tính thì thứ tự cột cũng không quan trọng.',
  explanation: 'Theo các đặc trưng của quan hệ ở Slide Ch.3 Mô hình quan hệ (P1) – tr.10:\n- Một quan hệ là tập hợp các bộ (các hàng) nên **thứ tự của các hàng là không quan trọng** (**A đúng**, loại C).\n- Khi viết một bộ dưới dạng danh sách giá trị theo vị trí cột của lược đồ $R(A_1, \\dots, A_n)$, **thứ tự giữa các giá trị trong bộ là quan trọng** (đảo vị trí các cột sẽ làm sai nghĩa giá trị). Chọn **A**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10']
},
{
  id: 'ltcsdl-de2-30', exam: 'ltcsdl-de2', no: 30, chapter: 'ch3', topic: '1.5',
  stem: 'Đặc điểm của mô hình CSDL quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ.' },
    { key: 'B', text: 'Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp.' },
    { key: 'C', text: 'Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: 'D', outside: false, incomplete: null,
  note: 'Trong ảnh 11.png, nút radio (D) được tô chọn (trong ảnh 10.png chưa tô chọn; không có dấu chấm đúng/sai).',
  explanation: 'Trích nguyên văn Slide Ch.3 Mô hình quan hệ (P1) – tr.2: mô hình dữ liệu quan hệ (do E. F. Codd đề xuất năm 1970) cung cấp cấu trúc dữ liệu đơn giản, đồng bộ (**A**); có nền tảng lý thuyết vững chắc là lý thuyết tập hợp (**B**); và là cơ sở của các HQT CSDL thương mại hiện nay như Oracle, MySQL, SQL Server (**C**).\nChọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.2']
},
{
  id: 'ltcsdl-de2-31', exam: 'ltcsdl-de2', no: 31, chapter: 'ch4', topic: '1.7',
  stem: 'Cho hai tập phụ thuộc hàm $F$ và $G$ xác định trên tập thuộc tính $U$. $F$ và $G$ tương đương nhau khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Mọi phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' },
    { key: 'B', text: 'Tồn tại phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' },
    { key: 'C', text: 'Ít nhất một phụ thuộc hàm trong $F$ được dẫn từ $G$ và ngược lại.' },
    { key: 'D', text: 'Mọi phụ thuộc hàm trong $F$ được lấy ra từ $G$ và ngược lại.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.21–22 (*Phủ của các tập PTH*): hai tập PTH $F$ và $G$ tương đương nhau ($F \\sim G$) khi $F^+ = G^+$, tức là $G$ phủ $F$ và $F$ phủ $G$ — hay **mọi phụ thuộc hàm trong $F$ đều được suy dẫn logic từ $G$ và ngược lại** (**A đúng**).\n- B, C sai vì chỉ cần "tồn tại / ít nhất một" không đủ kéo theo $F^+=G^+$; D sai vì $F$ và $G$ không cần chứa các phần tử giống hệt nhau mà chỉ cần tương đương về bao đóng.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.21–22']
},
{
  id: 'ltcsdl-de2-32', exam: 'ltcsdl-de2', no: 32, chapter: 'ch4', topic: '1.8',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'B', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' },
    { key: 'C', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'D', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Lưu ý: Slide Ch.4 Tổng quan TKCSDL tr.3 nêu nguyên văn "Thiết kế CSDL: chọn được tập lược đồ phù hợp" nên D sát bài giảng Ch.4 nhất (và câu hỏi cũng đặt trong nhóm Ch.4); tuy nhiên ở góc độ tổng quan toàn quy trình, một số tài liệu cũng dùng phát biểu ở A (*mô hình hóa chuyển đối tượng thế giới thực sang các quan hệ*).',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.3 (*Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** (đánh giá ở mức logic lẫn mức vật lý nhằm tối ưu lưu trữ, tránh dư thừa/dị thường và tối ưu khai thác — Slide Ch.1 tr.9) $\\Rightarrow$ **D đúng nhất**.\n- B sai ngược chiều chuẩn hóa (phải đưa từ dạng chuẩn thấp lên cao); C quá phiến diện; A mới nhấn khâu mô hình hóa chuyển đổi đối tượng sang quan hệ.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Slide Ch.1 Tổng quan – tr.9']
},
{
  id: 'ltcsdl-de2-33', exam: 'ltcsdl-de2', no: 33, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: '$R$ không đạt chuẩn BCNF.' },
    { key: 'B', text: 'Tập nguồn của $R$ là $\\{A\\}$. Tập thuộc tính trung gian của $R$ là $\\{BC\\}$.' },
    { key: 'C', text: '$AC$, $BC$, $ABC$ là các siêu khóa của $R$.' },
    { key: 'D', text: '$AB$, $AC$, $ABC$ là các siêu khóa của $R$.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra từng khẳng định theo Slide Ch.4 PTH (tr.30, 41–42) và Chuẩn hóa (tr.29–31):\n1. Tập nguồn $TN = \\{A\\}$ ($A$ chỉ ở vế trái), tập trung gian $TG = \\{B, C\\}$ ($B, C$ xuất hiện ở cả hai vế; $D$ chỉ ở vế phải) $\\Rightarrow$ **B đúng**.\n2. Tìm khóa: $(AB)^+ = ABCD$ (dùng $AB\\to CD$); $(AC)^+ = ABCD$ (dùng $C\\to B,\\; AC\\to D$). Vậy hai khóa là $AB$ và $AC$. Các siêu khóa gồm $AB, AC, ABC, ABD, ACD, ABCD$ $\\Rightarrow$ **D đúng**.\n3. Kiểm tra **C**: tính bao đóng $(BC)^+$: từ $BC$ chỉ dùng được $C\\to B$, thu được $(BC)^+ = \\{B, C\\} \\neq ABCD$ (vì thiếu $A \\in TN$). Vậy **$BC$ không phải siêu khóa**, khẳng định **C sai**.\n4. Với $C\\to B$: $C^+ = BC \\neq ABCD$ nên $C$ không là siêu khóa $\\Rightarrow R$ không đạt BCNF (**A đúng**).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42', 'Slide Ch.4 Chuẩn hóa CSDL – tr.29–31']
},
{
  id: 'ltcsdl-de2-34', exam: 'ltcsdl-de2', no: 34, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$AB$ và $AD$ là các khóa của $R$' },
    { key: 'B', text: '$AB$ và $AC$ là các khóa của $R$' },
    { key: 'C', text: '$BC$ và $DB$ là các khóa của $R$' },
    { key: 'D', text: '$AB$ và $AC$ không phải là khóa của $R$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán TN/TG tìm khóa (Slide Ch.4 PTH – tr.41–42):\n- $TN = \\{A\\}$ ($A$ chỉ xuất hiện ở vế trái), $TG = \\{B, C\\}$ ($D$ chỉ ở vế phải).\n- Tính bao đóng:\n  - $A^+ = A \\neq ABCD$.\n  - $(AB)^+ = ABCD$ (dùng $AB\\to CD$) $\\Rightarrow AB$ là khóa.\n  - $(AC)^+ = ABCD$ (dùng $C\\to B$, $AC\\to D$) $\\Rightarrow AC$ là khóa.\n  - $(ABC)$ chứa khóa nên không tối tiểu.\nVậy khóa của $R$ là **$AB$ và $AC$** $\\Rightarrow$ chọn **B** (loại A vì $(AD)^+=AD$; loại C vì $(BC)^+=BC$, $(DB)^+=BD$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42']
},
{
  id: 'ltcsdl-de2-35', exam: 'ltcsdl-de2', no: 35, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ $R(U,F)$ với $U = \\{ABCDEG\\}$ và $F:=\\{AB \\to C,\\; D \\to EG,\\; C \\to A,\\; BE \\to C,\\; BC \\to D,\\; CG \\to BD,\\; ACD \\to B,\\; CE \\to AG\\}$. Khóa của $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$AB, CG, CD$' },
    { key: 'B', text: '$EB, CE, BC$' },
    { key: 'C', text: '$AB, CG, AD$' },
    { key: 'D', text: '$EC, CE, BC$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Kiểm tra bằng bao đóng cho thấy $R$ có 7 khóa: $AB, BC, BD, BE, CD, CE, CG$. Vì vậy cả A (`AB, CG, CD`) và B (`EB, CE, BC`) đều liệt kê 3 khóa hợp lệ (chưa đủ cả 7 khóa). Trong ngân hàng đề gốc, A và C (`AB, CG, AD`) là cặp phương án chính – nhiễu thường được chọn (khớp lựa chọn ở đề K16 Ca 2), tạm chọn A và ghi chú để người học lưu ý.',
  explanation: 'Tính bao đóng các tập trong từng phương án (Slide Ch.4 PTH – tr.16, 41–42):\n- $TN = \\emptyset$, $TG = ABCDEG$.\n- Với **A**: $(AB)^+ = ABCDEG = U$ ($AB\\to C\\to BC\\to D\\to EG$); $(CG)^+ = ABCDEG = U$ ($C\\to A, CG\\to BD, D\\to EG$); $(CD)^+ = ABCDEG = U$ ($D\\to EG, C\\to A, ACD\\to B$); không tập con 1 thuộc tính nào có bao đóng bằng $U$ nên cả 3 đều là khóa.\n- Loại **C** vì $(AD)^+ = ADEG \\neq U$ (thiếu $B, C$).\n- Loại **D** vì $EC$ và $CE$ là cùng một tập thuộc tính.\n*(Lưu ý: ở phương án **B**, $(EB)^+ = (CE)^+ = (BC)^+ = U$ nên cả 3 tập trong B cũng là khóa hợp lệ của $R$.)*',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16, 38, 41–42']
},
{
  id: 'ltcsdl-de2-36', exam: 'ltcsdl-de2', no: 36, chapter: 'ch4', topic: '3.1',
  stem: 'Khẳng định nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$A \\to B$ và $BC \\to Z$ thì $AC \\to Z$' },
    { key: 'B', text: '$AC \\to B$ và $B \\to Z$ thì $AC \\to Z$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng các luật trong hệ tiên đề Armstrong (Slide Ch.4 PTH – tr.9–10):\n- **A đúng** theo **luật tựa bắc cầu**: nếu $X \\to Y$ và $WY \\to Z$ thì $XW \\to Z$. Thay $X=A, Y=B, W=C$ được $A\\to B$ và $BC\\to Z \\Rightarrow AC\\to Z$.\n- **B đúng** theo **luật bắc cầu**: nếu $X \\to Y$ và $Y \\to Z$ thì $X \\to Z$. Thay $X=AC, Y=B$ được $AC\\to B$ và $B\\to Z \\Rightarrow AC\\to Z$.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10']
},
{
  id: 'ltcsdl-de2-37', exam: 'ltcsdl-de2', no: 37, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{A\\to B,\\; B\\to C,\\; C\\to A\\}$. Phép tách $D=(R_1,R_2)$ tách $R$ thành hai lược đồ $R_1(A,B)$ và $R_2(B,C)$; $F_1$ và $F_2$ của phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$; $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'B', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$; $F_2 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$' },
    { key: 'C', text: '$F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$; $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 12.png/13.png, ở phương án A và B giữa `A→AC` và `C→A` thiếu dấu phẩy; giữ nguyên như ảnh gốc.',
  explanation: 'Đây chính là Ví dụ trên Slide Ch.4 Chuẩn hóa CSDL – tr.42. Theo định nghĩa hình chiếu $\\Pi_{R_i}(F) = \\{ X\\to Y \\in F^+ \\mid X \\cup Y \\subseteq R_i \\}$ (tr.41):\n- Do $A^+ = B^+ = C^+ = ABC$, nên mọi thuộc tính trong $R$ đều xác định lẫn nhau.\n- Trên $R_1(A, B)$: chỉ giữ các PTH chứa thuộc tính trong $\\{A, B\\}$ $\\Rightarrow F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$ (cùng các PTH tầm thường).\n- Trên $R_2(B, C)$: chỉ giữ các PTH chứa thuộc tính trong $\\{B, C\\}$ $\\Rightarrow F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$.\nLoại A và B (chứa $C$ trong $F_1$ hoặc $A$ trong $F_2$), chọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.41–42']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de2-38', exam: 'ltcsdl-de2', no: 38, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to G,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D,\\; A\\to C\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc tính $D$ trong $AC\\to D$' },
    { key: 'B', text: 'Dư thừa thuộc tính $C$ trong $AC\\to D$' },
    { key: 'C', text: 'Dư thừa thuộc tính $A$ trong $AC\\to D$' },
    { key: 'D', text: 'Không dư thừa thuộc tính $C$ trong $AC\\to D$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Kiểm tra thuộc tính dư thừa ở vế trái của $AC \\to D$ (Slide Ch.4 PTH – tr.26):\n- Bỏ thử $C$, tính bao đóng $A^+$ theo $F$: $X_0 = A \\xrightarrow{A\\to C} AC \\xrightarrow{AC\\to D} ACD \\supseteq \\{D\\}$. Vì $A \\to D \\in F^+$ nên **thuộc tính $C$ dư thừa trong $AC \\to D$** (**B đúng**, loại **D**).\n- Bỏ thử $A$: $C^+ = C \\not\\ni D$ nên $A$ không dư thừa (loại **C**). Thuộc tính $D$ nằm ở vế phải nên không xét dư thừa vế trái (loại **A**).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26']
},
{
  id: 'ltcsdl-de2-39', exam: 'ltcsdl-de2', no: 39, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc hợp trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$' },
    { key: 'B', text: 'Nếu $A\\to B$ và $BC\\to D$ thì $AC\\to D$' },
    { key: 'C', text: 'Nếu $A\\to BC$ thì $A\\to C$' },
    { key: 'D', text: 'Nếu $A\\to B$ và $B\\to C$ thì $A\\to C$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.9–10 (*Hệ tiên đề Armstrong và các luật mở rộng*):\n- **Luật hợp (*Union*)**: Nếu $X \\to Y$ và $X \\to Z$ thì $X \\to YZ$ $\\Rightarrow$ **Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$** (**A đúng**).\n- B là *luật tựa bắc cầu*; C là *luật tách*; D là *luật bắc cầu*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10']
},
{
  id: 'ltcsdl-de2-40', exam: 'ltcsdl-de2', no: 40, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$, với $U=\\{ABCDE\\}$ và $F=\\{AB\\to D,\\; B\\to D,\\; D\\to C,\\; C\\to BE\\}$. Bao đóng của $(AB)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$ACDE$' },
    { key: 'B', text: '$U$' },
    { key: 'C', text: '$ABCD$' },
    { key: 'D', text: '$ABDE$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tính bao đóng $(AB)^+$ (Slide Ch.4 PTH – tr.16):\n- $X_0 = \\{A, B\\}$.\n- Dùng $AB \\to D$ (hoặc $B \\to D$): $X_1 = \\{A, B, D\\}$.\n- Dùng $D \\to C$: $X_2 = \\{A, B, C, D\\}$.\n- Dùng $C \\to BE$: $X_3 = \\{A, B, C, D, E\\} = U$.\nVậy $(AB)^+ = U$ $\\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16']
},
{
  id: 'ltcsdl-de2-41', exam: 'ltcsdl-de2', no: 41, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'B', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' },
    { key: 'D', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 13.png, chỉ số dưới của $F$ ở phương án B hơi mờ (đọc là `tt`), và phương án D bị thanh taskbar che nhẹ phần đáy chữ nhưng vẫn đọc rõ toàn bộ.',
  explanation: 'Tìm phủ tối thiểu cho $F = \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$ (chính là Ví dụ 2 ở Slide Ch.4 PTH – tr.29):\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Loại thuộc tính thừa vế trái ở $AB \\to C$: bỏ $A$ còn $B$, có $B^+ = \\{B, C, D\\} \\supseteq \\{C\\}$ $\\Rightarrow$ **thuộc tính $A$ DƯ THỪA trong $AB\\to C$** (**A đúng**, nên khẳng định **D** nói "$A$ không dư thừa" là **SAI**).\n3. Sau khi thay $AB\\to C$ bằng $B\\to C$ (gộp trùng), bỏ tiếp $B\\to D$ vì suy ra được từ $B\\to C,\\; C\\to D$ (**C đúng**), còn phủ tối thiểu $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (**B đúng**). Chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29']
},
{
  id: 'ltcsdl-de2-42', exam: 'ltcsdl-de2', no: 42, chapter: 'ch4', topic: '3.10',
  stem: '[Đề bài bị cắt ở mép trên ảnh gốc 14.png, không đọc được nội dung]',
  figure: null,
  options: [
    { key: 'A', text: 'Dạng chuẩn 1NF, không là 2NF.' },
    { key: 'B', text: 'Dạng chuẩn 2NF, không là 3NF.' },
    { key: 'C', text: 'Dạng chuẩn 2NF, không là 3NF.' },
    { key: 'D', text: 'Dạng chuẩn 3NF.' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Đề bài bị cắt ở mép trên ảnh gốc, không đọc được nội dung.',
  note: 'Trong ảnh 14.png chỉ thấy mép đáy rất mờ của dòng chữ câu hỏi bị cắt ngang (không xuất hiện ở ảnh 13.png). Ngoài ra phương án B và C trong ảnh gốc giống hệt nhau (`Dạng chuẩn 2NF, không là 3NF.`).',
  explanation: 'Không thể giải vì toàn bộ phần lược đồ quan hệ và tập phụ thuộc hàm trong đề bài bị cắt mất ở mép trên ảnh 14.png (chỉ đọc được 4 phương án A–D về mức dạng chuẩn, trong đó B và C trùng nhau).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.37']
},
{
  id: 'ltcsdl-de2-43', exam: 'ltcsdl-de2', no: 43, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{ C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BEH\\},\\; R_3 = \\{CEG\\},\\; R_4= \\{CEK\\}$' },
    { key: 'B', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BK\\},\\; R_3 = \\{BEH\\},\\; R_4= \\{CEG\\}$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa – tr.50):\n1. Khóa duy nhất của $R$ là $CE$ ($TN = \\{C, E\\}$ và $(CE)^+ = ABCDEGHK$).\n2. Tách lần lượt theo các PTH vi phạm BCNF:\n   - Theo $C\\to AD$: tách $R_1 = \\{ACD\\}$ (khóa $C$, đạt BCNF), còn $\\{BCEGHK\\}$.\n   - Theo $B\\to K$: tách $R_2 = \\{BK\\}$ (khóa $B$, đạt BCNF), còn $\\{BCEGH\\}$.\n   - Theo $E\\to BH$: tách $R_3 = \\{BEH\\}$ (khóa $E$, đạt BCNF), còn $R_4 = \\{CEG\\}$ (khóa $CE$, đạt BCNF).\n3. Kiểm tra lại bảng $a_j/b_{ij}$: phép tách ở **B** kết nối không mất mát thông tin và cả 4 lược đồ đều đạt BCNF (**B đúng**).\n- Loại **A** vì trên $R_4=\\{CEK\\}$ có $E\\to K$ (bắc cầu từ $E\\to B, B\\to K$) nhưng $E$ không là siêu khóa của $CEK$ (khóa là $CE$) nên $R_4$ chưa đạt BCNF.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 47, 50']
},
{
  id: 'ltcsdl-de2-44', exam: 'ltcsdl-de2', no: 44, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: 'Số hoá đơn, Mã hàng $\\to$ Tên hàng' },
    { key: 'B', text: 'Số hoá đơn, Mã khách $\\to$ Tên khách' },
    { key: 'C', text: 'Số hoá đơn, Mã hàng $\\to$ Đơn vị tính' },
    { key: 'D', text: 'Số hoá đơn, Mã hàng $\\to$ Số lượng bán' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL – tr.6, 13: $X \\to Y$ là phụ thuộc hàm **đầy đủ** nếu không thể bỏ bớt bất kỳ thuộc tính nào khỏi $X$ mà vẫn xác định được $Y$:\n- **D (`Số hoá đơn, Mã hàng → Số lượng bán`) là đầy đủ**: cần cả số hóa đơn lẫn mã hàng mới xác định duy nhất số lượng bán của mặt hàng đó trong hóa đơn ấy.\n- A, C dư thừa `Số hoá đơn` (vì `Mã hàng → Tên hàng, Đơn vị tính`).\n- B dư thừa `Số hoá đơn` (vì `Mã khách → Tên khách`).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6, 13', 'Slide Ch.4 Phụ thuộc hàm – tr.5']
},
{
  id: 'ltcsdl-de2-45', exam: 'ltcsdl-de2', no: 45, chapter: 'ch4', topic: '1.8',
  stem: 'Dữ liệu trong quan hệ ở dạng chuẩn 1NF:',
  figure: null,
  options: [
    { key: 'A', text: 'dễ dàng sửa đổi, bổ sung thuận tiện hơn các dạng chuẩn khác.' },
    { key: 'B', text: 'không bị trùng lặp.' },
    { key: 'C', text: 'chứa dị thường thông tin.' },
    { key: 'D', text: 'rất đơn giản và dễ sử dụng.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.6, 8 và Chuẩn hóa CSDL – tr.3, 8–10: quan hệ chỉ mới đạt dạng chuẩn **1NF** mới bảo đảm thuộc tính nguyên tố và đơn trị, vẫn còn các phụ thuộc bộ phận hoặc bắc cầu vào khóa nên dữ liệu bị lặp lại (loại **B**) và **chứa các dị thường thông tin** khi thêm, sửa, xóa (**C đúng**, loại **A** và **D**).',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.6, 8', 'Slide Ch.4 Chuẩn hóa CSDL – tr.3, 8–10']
},
{
  id: 'ltcsdl-de2-46', exam: 'ltcsdl-de2', no: 46, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K\\subseteq U$ được gọi là khóa của $R$ khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K^+ = U$ và không tồn tại $K\'\\subset U$ mà $(K\')^+ = U$' },
    { key: 'B', text: '$K\\to U$' },
    { key: 'C', text: '[Ảnh gốc bị cắt không thấy phương án C]' },
    { key: 'D', text: '$K^+ = U$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc thiếu phương án C.',
  note: 'Ảnh 14.png dừng ở hết phương án B, ảnh 15.png bắt đầu từ phương án D (chỉ thấy mép đáy rất mảnh của dòng chữ phía trên D). Ngoài ra ở phương án A, ký hiệu sau `K\' ⊂` trong ảnh 14.png đọc là `U` (nếu viết chuẩn phải là `K\' ⊂ K`).',
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.30, $K \\subseteq U$ là **khóa** của $R$ khi và chỉ khi thỏa đồng thời hai điều kiện:\n1. $K \\to U$ (hay $K^+ = U$, tức $K$ là siêu khóa).\n2. **Không tồn tại tập con thực sự $K\' \\subset K$** mà $K\' \\to U$ (tức $(K\')^+ = U$).\n- B (`K → U`) và D (`K^+ = U`) chỉ mới là định nghĩa **siêu khóa**.\n- Phương án A trong ảnh viết `K\' ⊂ U` (sai về mặt toán học vì nếu $K \\neq U$ thì chính $K\' = K \\subset U$ đã thỏa $(K\')^+ = U$), nhiều khả năng định nghĩa chuẩn `K^+ = U và không tồn tại K\' ⊂ K mà (K\')^+ = U` nằm ở phương án **C** bị cắt mất.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30']
},
{
  id: 'ltcsdl-de2-47', exam: 'ltcsdl-de2', no: 47, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F=\\{AB\\to C,\\; AD\\to G,\\; BC\\to G,\\; C\\to D,\\; GD\\to E\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$BC\\to A$' },
    { key: 'B', text: '$AD \\to C$' },
    { key: 'C', text: '$AB\\to DE$' },
    { key: 'D', text: '$GD \\to A$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán bài toán thành viên (tính bao đóng vế trái theo Slide Ch.4 PTH – tr.16–18):\n- Xét **C** ($AB\\to DE$): tính $(AB)^+$:\n  - $X_0 = AB \\xrightarrow{AB\\to C} ABC \\xrightarrow{BC\\to G} ABCG \\xrightarrow{C\\to D} ABCDG \\xrightarrow{GD\\to E} ABCDEG$.\n  - Vì $DE \\subseteq (AB)^+$ nên **$AB \\to DE \\in F^+$** (**C đúng**).\n- Kiểm tra các phương án khác: $(BC)^+ = BCDEG \\not\\ni A$ (loại A); $(AD)^+ = ADEG \\not\\ni C$ (loại B); $(GD)^+ = DEG \\not\\ni A$ (loại D).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16–18']
},
{
  id: 'ltcsdl-de2-48', exam: 'ltcsdl-de2', no: 48, chapter: 'ch4', topic: '1.8',
  stem: 'Dị thường thông tin là nguyên nhân:',
  figure: null,
  options: [
    { key: 'A', text: 'gây cản trở cho việc thực hiện các phép lưu trữ.' },
    { key: 'B', text: 'gây cản trở cho việc cập nhật, bổ sung thông tin.' },
    { key: 'C', text: 'gây cản trở cho việc tách kết nối tổn thất thông tin.' },
    { key: 'D', text: 'gây cản trở cho việc tìm kiếm, hỏi đáp thông tin.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.6, 8 và Chuẩn hóa CSDL – tr.3: khi thiết kế lược đồ chưa tốt (trộn thông tin nhiều thực thể vào một bảng), các thao tác **thêm bộ (bổ sung), sửa đổi và xóa** làm phát sinh các **dị thường cập nhật** (không thêm được dữ liệu mới, mất nhất quán khi sửa hoặc mất thông tin khi xóa) $\\Rightarrow$ **B đúng**.\n- Các phép tìm kiếm/hỏi đáp (D) không gây ra dị thường cập nhật; A và C không đúng bản chất.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.6, 8', 'Slide Ch.4 Chuẩn hóa CSDL – tr.3']
},
{
  id: 'ltcsdl-de2-49', exam: 'ltcsdl-de2', no: 49, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Bảng tầm ảnh hưởng được sử dụng để kiểm tra ràng buộc toàn vẹn tại những thời điểm cập nhật dữ liệu.' },
    { key: 'B', text: 'Bối cảnh của một ràng buộc toàn vẹn là những quan hệ mà ràng buộc đó có hiệu lực.' },
    { key: 'C', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp.' },
    { key: 'D', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng các phụ thuộc hàm.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.15–17 (*Các yếu tố của RBTV*):\n- **A đúng**: bảng tầm ảnh hưởng dùng để kiểm tra RBTV tại các thời điểm cập nhật Thêm/Sửa/Xóa (tr.17).\n- **B đúng**: bối cảnh của một RBTV là những quan hệ mà ràng buộc đó có hiệu lực (tr.16).\n- **C sai**: Slide tr.15 nêu rõ *"Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng ngôn ngữ tự nhiên, thuật giải, ngôn ngữ đại số tập hợp, đại số quan hệ,... Ngoài ra, điều kiện của ràng buộc toàn vẹn cũng có thể được biểu diễn bằng phụ thuộc hàm"* (**D đúng**). Nói "**chỉ** được biểu diễn bằng ngôn ngữ đại số tập hợp" là sai $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.15–17']
},
{
  id: 'ltcsdl-de2-50', exam: 'ltcsdl-de2', no: 50, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '3NF' },
    { key: 'B', text: 'BCNF' },
    { key: 'C', text: '2NF' },
    { key: 'D', text: '1NF' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán xác định dạng chuẩn cao nhất (Slide Ch.4 Chuẩn hóa – tr.15, 21–23, 29–31, 37):\n1. **Tìm khóa**: $TN = \\{A\\}$, $TG = \\{B, C\\}$; $(AB)^+ = ABCD$ và $(AC)^+ = ABCD \\Rightarrow R$ có hai khóa là $AB$ và $AC$. Thuộc tính khóa: $A, B, C$; thuộc tính không khóa: $D$.\n2. **Kiểm tra BCNF**: xét $C \\to B$ có $C^+ = BC \\neq ABCD$ ($C$ không là siêu khóa) $\\Rightarrow$ $R$ **không đạt BCNF** (loại B).\n3. **Kiểm tra 3NF**: mọi PTH trong $F$ sau khi tách vế phải là $AB\\to C$, $AB\\to D$, $AC\\to D$ (vế trái là siêu khóa) và $C\\to B$ (vế phải $B$ là **thuộc tính khóa**). Vậy $R$ **đạt 3NF** (và đương nhiên đạt 2NF, 1NF).\nDạng chuẩn cao nhất của $R$ là **3NF** $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.21–23, 29–31, 37']
}
);
