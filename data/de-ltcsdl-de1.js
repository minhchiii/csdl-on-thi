/* Đề thi LTCSDL – Đề 1 – nguồn: tai-lieu/Đề thi LTCSLD/Đề 1 & tai-lieu-text/de/ltcsdl-de1.md */
DB.questions.push(
{
  id: 'ltcsdl-de1-04', exam: 'ltcsdl-de1', no: 4, chapter: 'ch1', topic: '1.1',
  stem: '[Ảnh gốc bị cắt đề bài — chỉ còn phương án D]',
  figure: null,
  options: [
    { key: 'A', text: '[Ảnh gốc bị cắt không có đề và A–C]' },
    { key: 'B', text: '[Không có trong ảnh gốc]' },
    { key: 'C', text: '[Không có trong ảnh gốc]' },
    { key: 'D', text: 'Tính ràng buộc toàn vẹn.' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc bị cắt đề bài và các phương án A, B, C, chỉ còn phương án D.',
  note: 'Câu 1–3 hoàn toàn không có trong bộ ảnh chụp; ảnh 1.png bắt đầu từ dòng "(D) Tính ràng buộc toàn vẹn." của Câu 4 (có thể tương ứng câu hỏi Chương 1 về tính chất được kiểm soát khi cập nhật dữ liệu như ở một số đề khác).',
  explanation: 'Không thể giải vì ảnh gốc 1.png chỉ chụp được phương án **(D) Tính ràng buộc toàn vẹn.**, bị thiếu hoàn toàn phần đề bài và ba phương án A, B, C của Câu 4 (thuộc phần Chương 1 đầu đề).',
  source: ['Slide Ch.1 Tổng quan – tr.14', 'Đề LTCSDL 1 – câu 4']
},
{
  id: 'ltcsdl-de1-05', exam: 'ltcsdl-de1', no: 5, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp công cụ quản lý bộ nhớ.' },
    { key: 'B', text: 'Cung cấp công cụ kiểm soát, điều khiển truy cập vào CSDL.' },
    { key: 'C', text: 'Cung cấp môi trường tạo lập CSDL.' },
    { key: 'D', text: 'Cung cấp môi trường cập nhật và khai thác dữ liệu.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Ba chức năng cơ bản của một hệ quản trị CSDL (Slide Ch.1 tr.17) gồm:\n- Cung cấp môi trường tạo lập CSDL qua ngôn ngữ định nghĩa dữ liệu DDL (**C**).\n- Cung cấp môi trường cập nhật và khai thác dữ liệu qua DML/SQL (**D**).\n- Cung cấp công cụ kiểm soát, điều khiển truy cập, bảo mật và toàn vẹn (**B**).\nViệc **quản lý bộ nhớ** thuộc trách nhiệm của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.1 Tổng quan – tr.17', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 5']
},
{
  id: 'ltcsdl-de1-06', exam: 'ltcsdl-de1', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiể [bị cắt]' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con [bị cắt]' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Mép phải ảnh 1.png bị cắt vài ký tự cuối ở phương án A ("kiểu con.") và dấu chấm cuối phương án B; đối chiếu câu trùng khớp trong ngân hàng đề (k16-ca1 câu 16, ltcsdl-de3 câu 6) vẫn đọc trọn vẹn ý nghĩa.',
  explanation: 'Theo quy định ràng buộc chuyên biệt hóa/tổng quát hóa trong mô hình EER (Đề cương 2023 mục 2.4.5):\n- **Ràng buộc tách biệt (`d` – disjoint)**: một thực thể kiểu cha **không thể đồng thời** là thành viên của hai hay nhiều kiểu con (tối đa 1 kiểu con) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp / chồng lấn (`o` – overlapping)**: một thực thể kiểu cha **có thể đồng thời** là thành viên của nhiều kiểu con $\\Rightarrow$ **B đúng**.\nVì cả A và B đều đúng nên chọn **C**.',
  sameAs: ['de-2021-2-16'],
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 6']
},
{
  id: 'ltcsdl-de1-07', exam: 'ltcsdl-de1', no: 7, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu (lớp) thực thể Nhân viên trong mô hình thực thể liên kết (ER) của bài toán quản lý công ty [bị cắt]',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, tên phòng.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ.' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Cuối đề bài bị cắt dấu hai chấm ở mép phải ảnh 1.png sau chữ "công ty" (nguyên văn ở đề ngân hàng là "...quản lý công ty:").',
  explanation: 'Trong mô hình thực thể liên kết **ER** (mức khái niệm, Slide Ch.2 tr.15–16, 27, 32), mối quan hệ giữa `NHÂN VIÊN` với `PHÒNG BAN` (`Làm việc cho`) và với người quản lý (`Giám sát`) được biểu diễn bằng **hình thoi liên kết**, **không** đưa khóa ngoại hay thuộc tính tham chiếu (`mã phòng`, `tên phòng`, `mã người quản lý`) vào làm thuộc tính của thực thể `NHÂN VIÊN`.\n- Loại A, B và D vì đều lẫn thuộc tính của liên kết / phòng ban (`mã phòng`, `tên phòng`, `mã người quản lý`). Chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–16, 27, 32', 'Đề LTCSDL 1 – câu 7']
},
{
  id: 'ltcsdl-de1-08', exam: 'ltcsdl-de1', no: 8, chapter: 'ch2', topic: '2.3',
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
      specs: [{ id: 's1', x: 315, y: 115, kind: 'd', parent: 'pt', total: true, children: ['oto', 'xt'] }]
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
      specs: [{ id: 's1', x: 315, y: 115, kind: 'o', parent: 'pt', total: false, children: ['oto', 'xt'] }]
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
      specs: [{ id: 's1', x: 315, y: 115, kind: 'o', parent: 'pt', total: true, children: ['oto', 'xt'] }]
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
      specs: [{ id: 's1', x: 315, y: 115, kind: 'd', parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh 2.png, đường nối toàn phần từ `PHƯƠNG TIỆN GT` tới vòng tròn ở A và C chỉ hiển thị dạng nét đậm/dày (được hiểu là nét đôi); thuộc tính `Mã PT` không thấy gạch chân ở độ phân giải ảnh.',
  explanation: '1. Đề bài yêu cầu mô tả **ràng buộc tách biệt** (*disjoint*) $\\Rightarrow$ vòng tròn chuyên biệt hóa phải ghi chữ **`d`** (một phương tiện giao thông không thể đồng thời vừa là `Ô tô 4 chỗ` vừa là `Xe tải`). Loại **B** và **C** vì ghi chữ **`o`** (*overlapping* – phủ lấp).\n2. Giữa **A** (nét đôi – toàn phần) và **D** (nét đơn – từng phần): theo ngữ nghĩa của ví dụ kinh điển `VEHICLE` (*Elmasri & Navathe*), không phải mọi `PHƯƠNG TIỆN GT` đều bắt buộc phải là `Ô tô 4 chỗ` hoặc `Xe tải` (còn có xe máy, xe đạp, ô tô 7 chỗ, xe buýt…), nên đây là chuyên biệt hóa **từng phần (nét đơn)**. Chọn **D**.',
  source: ['Đề cương môn học 2023 (mục 2.4.5)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 8']
},
{
  id: 'ltcsdl-de1-09', exam: 'ltcsdl-de1', no: 9, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng (EER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mối liên kết một cách rõ ràng và chính xác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệp vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Mô hình thực thể liên kết mở rộng (**EER** – *Enhanced Entity-Relationship*) kế thừa toàn bộ mô hình ER cơ bản và bổ sung thêm **một số khái niệm mới** (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) để tăng khả năng mô tả đối tượng dữ liệu được rõ ràng và chính xác hơn (**C đúng**).\n- A sai vì chỉ nhắc riêng ký hiệu `(min, max)`; B sai vì chỉ nhắc quy tắc nghiệp vụ cho mối quan hệ, bỏ qua mở rộng về lớp thực thể và kế thừa.',
  source: ['Đề cương môn học 2023 (mục 2.4)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 9']
},
{
  id: 'ltcsdl-de1-10', exam: 'ltcsdl-de1', no: 10, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Khách hàng với các thuộc tính Mã khách hàng và địa chỉ? Biết rằng mỗi khách hàng có [bị cắt]',
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
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0 },
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
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 280, y: 75, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -175, dy: 0, parts: [
        { label: 'Xã', dx: -82, dy: 64 },
        { label: 'Phường', dx: 0, dy: 64 },
        { label: 'Tỉnh', dx: 82, dy: 64 }
      ] },
      { label: 'Mã Khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Cuối đề bài bị cắt ở mép phải sau "mỗi khách hàng có" (đối chiếu ngân hàng đề như k16-ca1 câu 15, ltcsdl-de3 câu 14 là "có thể có nhiều địa chỉ liên lạc."); viền đậm của elip `Địa chỉ` ở A, B, D trong ảnh 3.png thể hiện thuộc tính đa trị (elip kép).',
  explanation: '1. `Mã Khách` là **khóa** của thực thể `KHÁCH HÀNG` $\\Rightarrow$ phải vẽ elip có **gạch chân** (loại **A** vì không gạch chân).\n2. Mỗi khách hàng có thể có nhiều địa chỉ liên lạc $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị**, phải vẽ **elip kép** (loại **C** vì vẽ elip đơn mảnh).\n3. `Địa chỉ` được phân rã thành 3 thành phần lưu trữ độc lập `Xã`, `Phường`, `Tỉnh` (**thuộc tính phức hợp**) vẽ bằng elip đơn nét liền nối từ elip đa trị `Địa chỉ` (đầy đủ hơn **B** và không vẽ nét đứt suy dẫn như **A**). Chọn **D**.',
  sameAs: ['k16-ca1-15'],
  source: ['Slide Ch.2 Mô hình ER – tr.9–10, 12', 'Đề LTCSDL 1 – câu 10']
},
{
  id: 'ltcsdl-de1-11', exam: 'ltcsdl-de1', no: 11, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể giáo viên với các thuộc tính Mã giáo viên, lương, hệ số lương? Biết rằng lương được tín [bị cắt]',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã GV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã GV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', kind: 'derived', dx: 0, dy: -62 },
      { label: 'Mã GV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'gv', label: 'GIÁO VIÊN', x: 200, y: 105, attrs: [
      { label: 'Lương', kind: 'multi', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -62 },
      { label: 'Mã GV', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cuối đề bài bị cắt/mờ ở mép phải sau "lương được tín" (đối chiếu ngân hàng đề như Đề mẫu 720 câu 1, ltcsdl-de3 câu 7 là "lương được tính theo hệ số lương"); viền đậm của `Lương` ở D thể hiện elip kép đa trị.',
  explanation: 'Đối chiếu ký hiệu thuộc tính trên Slide Ch.2 Mô hình ER – tr.10–12:\n1. `Mã GV` là **thuộc tính khóa** định danh thực thể `GIÁO VIÊN` $\\Rightarrow$ vẽ elip nét liền và **gạch chân** (loại **D** vì không gạch chân `Mã GV`).\n2. `Lương` được tính theo hệ số lương nên là **thuộc tính suy dẫn** $\\Rightarrow$ vẽ bằng **elip nét đứt** (loại **A** vì nét liền và **D** vì elip đa trị).\n3. `HSL` là **thuộc tính lưu trữ** thông thường $\\Rightarrow$ vẽ **elip nét liền** (loại **C** vì vẽ nét đứt cả `HSL`). Chọn **B**.',
  source: ['Slide Ch.2 Mô hình ER – tr.10–12', 'Đề LTCSDL 1 – câu 11']
},
{
  id: 'ltcsdl-de1-12', exam: 'ltcsdl-de1', no: 12, chapter: 'ch2', topic: '2.6',
  stem: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của mình. Tài liệu có thể là sách, bao gồm các thuộc tính: tác giả, tựa đề, năm xuất bản. Tài liệu có thể là bài báo khoa học [bị cắt] tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp chí, số volume, số trang. Kiểu thực thể con cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tài liệu với các thuộc tính: tác giả, tựa đề, năm xuất bản, tên tạp chí, số volume, số trang.' },
    { key: 'B', text: 'Tài liệu và các thuộc tính: tác giả, tựa đề.' },
    { key: 'C', text: 'Sách gồm các thuộc tính: Tác giả, tựa đề, năm xuất bản và bài báo khoa học với các thuộc tính tác giả, tựa đề, số volume, số trang.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null,
  note: 'Cuối dòng 1 đề bài bị cắt chữ "từ" ở mép phải ("bài báo khoa học từ tạp chí", khớp nguyên văn đề 2021 – đề 1 câu 13).',
  explanation: 'Theo nguyên tắc kế thừa của mô hình EER:\n- Kiểu thực thể cha `Tài liệu` mang các thuộc tính chung (`tác giả, tựa đề`); vì đề hỏi **kiểu thực thể con**, nên **A** (gộp hết vào kiểu cha) và **B** (chỉ nêu kiểu cha) đều sai.\n- Kiểu thực thể con kế thừa thuộc tính của cha và chỉ khai báo thêm thuộc tính riêng: `Sách` (`năm xuất bản`) và `Bài báo khoa học` (`tên tạp chí, số volume, số trang`). Phương án **C** vừa lặp thuộc tính của kiểu cha vào lớp con, vừa **bỏ sót `tên tạp chí`** ở `bài báo khoa học` nên cũng sai.\nVì cả A, B, C đều sai nên chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 12']
},
{
  id: 'ltcsdl-de1-13', exam: 'ltcsdl-de1', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng biệt nào đó của các t[bị cắt] thể trong kiểu cha.' },
    { key: 'B', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' },
    { key: 'C', text: 'Kỹ thuật chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là specialization.' },
    { key: 'D', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down).' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Phương án A bị cắt vài chữ cái ở mép phải ("của các t..." xuống dòng "...thể trong kiểu cha", đầy đủ trong ngân hàng đề là "của các thực thể trong kiểu cha").',
  explanation: 'Trong mô hình EER:\n- **Chuyên biệt hóa (*Specialization*)** là phương pháp thiết kế **từ trên xuống (*Top-down*)**: xuất phát từ một kiểu thực thể cha, tách thành các kiểu thực thể con dựa trên một số đặc tính riêng biệt (**A, C, D đều đúng**).\n- Ngược lại, quá trình xác định kiểu thực thể cha từ các kiểu thực thể con có đặc điểm chung (từ dưới lên/*Bottom-up*) gọi là **tổng quát hóa (*Generalization*)**, không phải chuyên biệt hóa $\\Rightarrow$ khẳng định **B sai**.',
  source: ['Đề cương môn học 2023 (mục 2.4.3–2.4.4)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 13']
},
{
  id: 'ltcsdl-de1-14', exam: 'ltcsdl-de1', no: 14, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết n-m giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'B', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.20–21 (*Các kiểu liên kết*):\n- **Liên kết M–N (hay n–m, nhiều–nhiều)**: một thực thể kiểu A liên kết với **nhiều** thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với **nhiều** thực thể kiểu A $\\Rightarrow$ **B đúng**.\n- A mô tả ràng buộc tham gia bộ phận/toàn bộ của liên kết `1–1`; C là liên kết `1–N`; D là liên kết `1–1`.',
  source: ['Slide Ch.2 Mô hình ER – tr.20–21', 'Đề LTCSDL 1 – câu 14']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de1-15', exam: 'ltcsdl-de1', no: 15, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: “Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban và có số điệ[bị cắt] thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty”. Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể PHÒNG[bị cắt] gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Điện thoại.' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 1 và dòng 2 đề bài bị cắt ở mép phải ảnh 5.png ("số điệ… thoại để liên hệ" và "thực thể PHÒNG… gồm:"); đối chiếu đề ngân hàng (k16-ca1 câu 9, de-2021-1 câu 16) vẫn đọc đủ dữ kiện.',
  explanation: 'Theo mô tả và nguyên tắc mô hình hóa **ER** (Slide Ch.2 tr.15–17, 27):\n- Thực thể `PHÒNG` có các thuộc tính mô tả trực tiếp gồm: **Mã phòng**, **Tên phòng** và **Điện thoại** (**A đúng**).\n- Mối quan hệ *"Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty"* được biểu diễn bằng **hình thoi liên kết** `Quản lý` giữa `PHÒNG` và `NHÂN VIÊN`, **không** đưa khóa ngoại `Mã người quản lý` (hay thuộc tính của liên kết `ngày quản lý`) vào làm thuộc tính của thực thể `PHÒNG` $\\Rightarrow$ loại B, D.\n- Loại C vì mô tả không có `Địa chỉ`.',
  source: ['Slide Ch.2 Mô hình ER – tr.15–17, 27', 'Đề LTCSDL 1 – câu 15']
},
{
  id: 'ltcsdl-de1-16', exam: 'ltcsdl-de1', no: 16, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER – tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể"** $\\Rightarrow$ **A đúng**.\n- B và C nhầm lẫn định nghĩa liên kết với quy tắc nghiệp vụ hay ràng buộc tham gia bắt buộc (liên kết có thể tham gia bộ phận chứ không luôn bắt buộc).',
  source: ['Slide Ch.2 Mô hình ER – tr.15', 'Đề LTCSDL 1 – câu 16']
},
{
  id: 'ltcsdl-de1-17', exam: 'ltcsdl-de1', no: 17, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính nguyên tố (nguyên tử) là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa.' },
    { key: 'B', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' },
    { key: 'C', text: 'Thuộc tính có thể phân chia thành các thành phần nhỏ hơn, có ý nghĩa độc lập.' },
    { key: 'D', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.9–11:\n- **Thuộc tính đơn (nguyên tử)**: là thuộc tính không thể chia nhỏ thành các thành phần nhỏ hơn, độc lập và có ý nghĩa (**A đúng**, ngược với **C** là *thuộc tính phức hợp*).\n- B là định nghĩa *thuộc tính đơn trị* (tr.10).\n- D là định nghĩa *thuộc tính lưu trữ* (tr.11).',
  source: ['Slide Ch.2 Mô hình ER – tr.9–11', 'Đề LTCSDL 1 – câu 17']
},
{
  id: 'ltcsdl-de1-18', exam: 'ltcsdl-de1', no: 18, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào không chính xác yêu cầu: “Cho biết mã số và tên sinh viên thi môn có mã số T11 đạt điểm >=5”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}= \\text{‘T11’}}(\\text{KetQua} * \\text{SinhVien}))$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5}(\\text{KetQua} * \\text{SinhVien})) \\cap \\pi_{\\text{MaSV},\\text{Hoten}}(\\sigma_{\\text{MaMon}= \\text{‘T11’}}(\\text{KetQua}*\\text{Sinhvien}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}(\\sigma_{\\text{Diem}\\ge 5 \\text{ AND } \\text{MaMon}= \\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV}, \\text{HoTen}}((\\sigma_{\\text{Diem}\\ge 5 \\cap \\text{MaMon}= \\text{‘T11’}}(\\text{KetQua}) * \\text{SinhVien})$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm `MaS` trong `SinhVien` (lẽ ra là `MaSV` để kết nối tự nhiên với `KetQua`); phương án D vừa dùng sai phép giao $\\cap$ trong điều kiện chọn, vừa thừa dấu ngoặc mở `((` và có dấu lạ trên chữ `n` của `MaMon` trong ảnh 6.png. Lưu ý thêm phương án B cũng có lỗi ngữ nghĩa nếu một sinh viên đạt $\\ge 5$ ở môn khác và $< 5$ ở môn `T11`.',
  explanation: 'Đề hỏi biểu thức **không chính xác**:\n- **D sai hoàn toàn về cú pháp ĐSQH**: bên trong điều kiện của phép chọn $\\sigma$ chỉ được dùng phép logic (`AND`/`OR`/`NOT`), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 tr.24); đồng thời D còn thừa một dấu mở ngoặc `(`.\n- **A** và **C** đúng logic (chỉ khác thực hiện phép chọn sau hay trước phép nối tự nhiên).\n- *(Lưu ý: phương án B chiếu `MaSV, HoTen` trước phép giao $\\cap$ nên thực tế cũng bị sai ngữ nghĩa nếu SV đạt $\\ge 5$ ở môn khác; trong bộ đề chuẩn như Đề mẫu 720 câu 24, phương án sai cú pháp dùng $\\cap$ trong $\\sigma$ là **D** được chọn.)*',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24', 'Đề LTCSDL 1 – câu 18']
},
{
  id: 'ltcsdl-de1-19', exam: 'ltcsdl-de1', no: 19, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi một số thuộc tính trong lược đồ R có trong X và giữ lại các thuộc tính không có trong danh sách thuộc tính X.' },
    { key: 'B', text: 'Loại bỏ đi các hàng trong lược đồ R không thỏa mãn điều kiện X và giữ lại các hàng thỏa mãn điều kiện X.' },
    { key: 'C', text: 'Loại bỏ đi các thuộc tính trong lược đồ R không có trong X và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính X.' },
    { key: 'D', text: 'Loại bỏ đi một số hàng trong lược đồ R thỏa mãn điều kiện X và giữ lại các hàng không thỏa mãn điều kiện X.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19: **Phép chiếu $\\pi_X(R)$** là phép toán **loại bỏ đi các thuộc tính trong lược đồ $R$ không có trong $X$ và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính $X$** (**C đúng**).\n- A phát biểu ngược giữa giữ và loại; B và D nói về thao tác theo hàng (phép chọn $\\sigma$).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19', 'Đề LTCSDL 1 – câu 19']
},
{
  id: 'ltcsdl-de1-20', exam: 'ltcsdl-de1', no: 20, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuo[bị cắt]}$ đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “Đưa ra danh sách những bạn đọc của lớp H28 được cấp thẻ trước ngày 3[bị cắt]”',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{lop}= \\text{‘H28’} \\text{ AND } \\text{ngaycap}< \\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'B', text: '$\\sigma_{\\text{lop}= \\text{‘H28’},\\; \\text{ngaycap}< \\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'C', text: '$\\sigma_{\\text{lop}= \\text{‘H28’}}(\\text{BANDOC}) \\cap \\sigma_{\\text{ngaycap}> \\text{‘30/12/2020’}}(\\text{BANDOC})$' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Cuối hai dòng đề bài ở mép phải ảnh 7.png bị cắt sau "Ngaymuo" (`Ngaymuon, TraSach). Trong`) và sau "trước ngày 3" (`30/12/2020`, khớp với mốc `30/12/2020` in rõ trong cả ba phương án A, B, C và đề ltcsdl-de2 câu 27).',
  explanation: 'Để lọc danh sách bạn đọc lớp `H28` được cấp thẻ **trước ngày** `30/12/2020` từ quan hệ `BANDOC`, ta dùng phép chọn $\\sigma$ với hai điều kiện nối bằng phép logic **`AND`** và dấu so sánh **`<`** (Slide Ch.3 P2 – tr.24) $\\Rightarrow$ **A đúng**.\n- **B sai** vì dùng dấu phẩy `,` thay cho phép logic `AND`.\n- **C sai** vì đổi ngược điều kiện thành `ngaycap > ‘30/12/2020’` (cấp thẻ *sau* ngày 30/12/2020).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24', 'Đề LTCSDL 1 – câu 20']
},
{
  id: 'ltcsdl-de1-21', exam: 'ltcsdl-de1', no: 21, chapter: 'ch3', topic: '2.11',
  stem: 'Thứ tự thực hiện các phép toán để tối ưu hoá biểu thức truy vấn dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép chiếu, phép kết nối, phép chọn.' },
    { key: 'B', text: 'Phép kết nối, phép chọn, phép chiếu.' },
    { key: 'C', text: 'Phép chọn, phép kết nối, phép chiếu.' },
    { key: 'D', text: 'Phép chiếu, phép chọn, phép kết nối.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Lưu ý chuẩn heuristic tối ưu hóa đầy đủ (như ở Đề mẫu 720 – câu 17) là **Phép chọn $\\to$ Phép chiếu $\\to$ Phép kết nối**. Trong 4 phương án của bộ đề này không có thứ tự đó; C là phương án duy nhất thực hiện **phép chọn** đầu tiên (giảm số bộ trước khi kết nối và chiếu).',
  explanation: 'Theo nguyên tắc heuristic tối ưu hóa biểu thức ĐSQH:\n1. **Phép chọn ($\\sigma$)** luôn cần thực hiện **sớm nhất** để loại bỏ các bộ không thỏa điều kiện, giảm kích thước dữ liệu trước khi kết nối.\n2. Không được đẩy phép chiếu trước phép chọn như A, D vì có thể làm mất thuộc tính dùng trong điều kiện chọn; càng không nên kết nối trước khi chọn như B vì chi phí kết nối rất lớn.\nTrong 4 phương án đã cho, chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề LTCSDL 1 – câu 21']
},
{
  id: 'ltcsdl-de1-22', exam: 'ltcsdl-de1', no: 22, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen},\\text{GioiTinh},\\text{NgaySinh},\\text{Que})$; $\\text{Monhoc}(\\text{MaMon},\\text{TenMon},\\text{SoTC})$; $\\text{KetQua}(\\text{MaSV},\\text{MaMon},\\text{Diem})$. Biểu thức ĐSQH nào sau đâ[bị cắt] xác yêu cầu: “Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) *\\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) *\\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) *\\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) *\\text{SinhVien})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 1 đề bài bị cắt vài chữ ở mép phải sau "sau đâ" ("sau đây biểu diễn chính xác"). Đề gốc gõ nhầm `MaS` ở `SinhVien` thay vì `MaSV`; phương án D có một dấu chấm/nhiễu nhỏ trước `÷`.',
  explanation: 'Yêu cầu tìm sinh viên **"đã thi hết tất cả các môn"** là bài toán chuẩn của **phép chia ($\\div$)** (Slide Ch.3 P2 – tr.29, 31):\n1. Lấy $\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})$ để thu được tập `MaSV` đã dự thi mọi mã môn có trong `MonHoc`.\n2. Bọc phép chia trong dấu ngoặc đơn `(...)` rồi mới kết nối tự nhiên (`*`) với `SinhVien` và chiếu `HoTen` $\\Rightarrow$ **B đúng**.\n- **A, C sai** vì dùng phép trừ `−` (hai vế khác lược đồ nên không trừ được).\n- **D sai** vì thiếu cặp ngoặc đơn bao quanh phép chia.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29, 31, 38', 'Đề LTCSDL 1 – câu 22']
},
{
  id: 'ltcsdl-de1-23', exam: 'ltcsdl-de1', no: 23, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hi[bị cắt] “Lập danh sách các sinh viên được khen thưởng học kỳ 1 mà không được khen trong học kỳ 2”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} - \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} \\times \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} \\cap \\text{DOT2}$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 1 đề bài bị cắt ở mép phải sau "thể hi" ("thể hiện đúng yêu cầu").',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16 (*Phép trừ – Minus*): phép hiệu $r - s$ trả về các bộ **có trong $r$ nhưng không có trong $s$**.\n- Để lấy sinh viên khen thưởng ở học kỳ 1 (`DOT1`) mà **không** được khen trong học kỳ 2 (`DOT2`), biểu thức đúng là `DOT1 - DOT2` (**A**).\n- B ($\\cup$) là hợp (học kỳ 1 hoặc 2); C ($\\times$) là tích Đề-các; D ($\\cap$) là giao (cả hai học kỳ).',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16', 'Đề LTCSDL 1 – câu 23']
},
{
  id: 'ltcsdl-de1-24', exam: 'ltcsdl-de1', no: 24, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-n trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 215, y: 110, attrs: [
        { label: 'Mã NV', kind: 'key', dx: 0, dy: 68 },
        { label: 'Họ tên', dx: -130, dy: 0, side: 'left', parts: [
          { label: 'Họ', dx: -72, dy: -46 },
          { label: 'Tên', dx: -72, dy: 46 }
        ] }
      ] },
      { id: 'tn', label: 'THÂN NHÂN', x: 545, y: 110, weak: true, attrs: [
        { label: 'Tên TN', dx: 0, dy: -68 },
        { label: 'Giới tính', dx: -55, dy: 68 },
        { label: 'Quan hệ', dx: 55, dy: 68 }
      ] }
    ],
    rels: [{ id: 'co', label: 'Có', x: 380, y: 110, ident: true, links: [
      { to: 'nv', card: '1', total: false },
      { to: 'tn', card: 'n', total: true }
    ] }]
  } },
  options: [
    { key: 'A', text: '`THANNHAN` (MaNV, TenTN, GioiTinh, Quanhe)' },
    { key: 'B', text: '`THANNHAN` (TenTN, GioiTinh, Quanhe)' },
    { key: 'C', text: '`NHANVIEN`(MaNV, HoTen, TenTN, GioiTinh, Quanhe)' },
    { key: 'D', text: '`NHANVIEN`($\\underline{\\text{MaNV}}$, Ho, Ten, TenTN, Gioitinh, Quanhe)' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 8.png, viền đậm của `Có`, `THÂN NHÂN` và đường nối `Có – THÂN NHÂN` tương ứng hình thoi đôi, chữ nhật đôi (thực thể yếu) và tham gia toàn phần; `Tên TN` không thấy nét gạch đứt khóa bộ phận, và phương án A trong đề gốc không gạch chân khóa chính.',
  explanation: 'Theo Quy tắc 2 (chuyển thực thể yếu) và Quy tắc 5 (chuyển liên kết $1-n$, Slide Ch.3 P1 – tr.19–20, 25): đặt **thuộc tính khóa của thực thể chủ / bên phía 1 (`MaNV` của `NHÂN VIÊN`)** vào làm thuộc tính trong lược đồ quan hệ của **thực thể yếu / bên phía nhiều (`THANNHAN`)**.\n- Khi đó lược đồ `THANNHAN` gồm `(MaNV, TenTN, GioiTinh, Quanhe)` (**A đúng**).\n- Loại **B** vì thiếu `MaNV` để xác định thân nhân của nhân viên nào; loại **C, D** vì gộp nhầm các thuộc tính của `THÂN NHÂN` sang `NHÂN VIÊN`.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.19–20, 25', 'Đề LTCSDL 1 – câu 24']
},
{
  id: 'ltcsdl-de1-25', exam: 'ltcsdl-de1', no: 25, chapter: 'ch3', topic: '1.5',
  stem: 'Đặc điểm của mô hình CSDL quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ.' },
    { key: 'B', text: 'Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp.' },
    { key: 'C', text: 'Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Mô hình quan hệ (P1) – tr.2: mô hình dữ liệu quan hệ (do E. F. Codd đề xuất năm 1970) có đầy đủ cả ba đặc điểm:\n- Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ (**A**).\n- Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp (**B**).\n- Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay như Oracle, MySQL, SQL Server… (**C**).\nChọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.2', 'Đề LTCSDL 1 – câu 25']
},
{
  id: 'ltcsdl-de1-26', exam: 'ltcsdl-de1', no: 26, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH},\\text{TenSach},\\text{TacGia},\\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon},[bị cắt]$ đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: “Đưa ra danh sách mã và tên của những bạn đọc hiện đang mượn Giáo trìn[bị cắt] của thư viện”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}= \\text{‘Cấu trúc dữ liệu’}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'B', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}= \\text{‘Cấu trúc dữ liệu’},\\; \\text{traSach}=No}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'C', text: '$\\sigma_{\\text{tenSach}= \\text{‘Cấu trúc dữ liệu’} \\text{ AND } \\text{traSach}=No}(\\pi_{\\text{maBD},\\text{tenBD}}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' },
    { key: 'D', text: '$\\pi_{\\text{maBD},\\text{tenBD}}(\\sigma_{\\text{tenSach}= \\text{‘Cấu trúc dữ liệu’} \\text{ AND } \\text{traSach}=No}(\\text{BANDOC}*\\text{PHIEUMUON}*\\text{SACH}))$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Cuối hai dòng đề bài ở mép phải ảnh 8.png bị cắt sau "Ngaymuon," (`TraSach). Trong`) và sau "Giáo trìn" (`Giáo trình Cấu trúc dữ liệu`, khớp tên sách trong cả bốn phương án A–D và đề ltcsdl-de2 câu 29).',
  explanation: 'Để lấy mã và tên bạn đọc **hiện đang mượn** sách `"Cấu trúc dữ liệu"`, cần kết nối `BANDOC * PHIEUMUON * SACH`, lọc đồng thời hai điều kiện `tenSach = ‘Cấu trúc dữ liệu’` **`AND`** `traSach = No` (chưa trả), rồi mới chiếu lấy `maBD, tenBD` $\\Rightarrow$ **D đúng**.\n- **A sai** vì thiếu điều kiện `traSach = No` (lấy cả người đã trả).\n- **B sai** vì dùng dấu phẩy `,` thay cho `AND` trong phép chọn.\n- **C sai** vì chiếu `maBD, tenBD` trước làm mất hai cột điều kiện `tenSach` và `traSach`.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề LTCSDL 1 – câu 26']
},
{
  id: 'ltcsdl-de1-27', exam: 'ltcsdl-de1', no: 27, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten},\\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban}, \\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “Lấy thông tin gồm số hóa đơn, tên hàng, số lượng hàng đã bán được cho k[bị cắt] trong năm 2020”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}= \\text{‘KH007’} \\text{ AND } \\text{ngaylap}=2020}(\\text{ChitietHD}*\\text{HoaDon}* \\text{Hang}))$' },
    { key: 'B', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}= \\text{‘KH007’},\\; \\text{ngaylap}=2020}(\\text{ChitietHD}*\\text{HoaDon}* \\text{Hang}))$' },
    { key: 'C', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}= \\text{‘KH007’},\\; \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD}*\\text{HoaDon}* \\text{Hang}))$' },
    { key: 'D', text: '$\\pi_{\\text{soHD}, \\text{tenHang}, \\text{SLBan}}(\\sigma_{\\text{maKH}= \\text{‘KH007’} \\text{ AND } \\text{year}(\\text{ngaylapHD})=2020}(\\text{ChitietHD}*\\text{HoaDon}* \\text{Hang}))$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 2 đề bài bị cắt/mờ ở mép phải ảnh 9.png sau "bán được cho k" (đối chiếu ngân hàng đề là "cho khách hàng KH007"); trong các phương án, tên thuộc tính `MaKhach` được viết tắt là `maKH`.',
  explanation: 'Kiểm tra biểu thức điều kiện trong phép chọn $\\sigma$ (Slide Ch.3 P2 – tr.19, 24, 38):\n1. Phải liên kết hai điều kiện bằng phép logic **`AND`** (không dùng dấu phẩy `,` như **B** và **C**).\n2. Thuộc tính `NgaylapHD` lưu kiểu ngày tháng, nên để lấy các hóa đơn lập trong năm `2020` phải dùng hàm `year(ngaylapHD)=2020` chứ không so sánh trực tiếp `ngaylap=2020` (loại **A** và **B**).\n3. Kết nối tự nhiên `ChitietHD * HoaDon * Hang` nối đủ `SoHD` và `MaHang` rồi chiếu lấy `soHD, tenHang, SLBan` $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề LTCSDL 1 – câu 27']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de1-28', exam: 'ltcsdl-de1', no: 28, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{HANG}(\\text{Mahang}, \\text{TenHang}, \\text{DonGia}, \\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang}, \\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu [bị cắt] về các mặt hàng có đơn giá trên 500.”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\text{HANG}) \\cap \\sigma_{\\text{dongia}>500}(\\text{HANG})$' },
    { key: 'B', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG}))$' },
    { key: 'C', text: '$\\pi_{\\text{mahang},\\text{tenhang}}(\\sigma_{\\text{dongia}>500}(\\text{HANG}*\\text{ChitietHD})$' },
    { key: 'D', text: '$\\pi_{\\text{mahang},\\text{tenhang}},\\; \\sigma_{\\text{dongia}>500}(\\text{HANG}*\\text{ChitietHD})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cuối dòng 1 đề bài bị cắt ở mép phải ảnh 9.png sau "yêu cầu" (nguyên văn ở đề ngân hàng như de-2021-1 câu 18, ltcsdl-de2 câu 18 là `yêu cầu: "Cho biết thông tin về các mặt hàng có đơn giá trên 500."`); phương án C thiếu một dấu ngoặc đóng `)` ở cuối.',
  explanation: 'Thông tin về mặt hàng có đơn giá trên `500` nằm hoàn toàn trong bảng `HANG` (`DonGia > 500`), không cần kết nối với `ChitietHD` (nếu nối ở **C** và **D** sẽ bỏ sót những mặt hàng chưa từng được bán và C, D còn sai cú pháp thiếu ngoặc / thừa dấu phẩy).\n- **A sai** vì phép giao $\\cap$ đòi hỏi hai quan hệ cùng lược đồ, trong khi $\\pi_{\\text{mahang},\\text{tenhang}}(\\text{HANG})$ có 2 cột còn $\\sigma_{\\text{dongia}>500}(\\text{HANG})$ có 4 cột.\n- **B đúng**: lọc `dongia > 500` trên `HANG` rồi chiếu lấy mã hàng và tên hàng.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24', 'Đề LTCSDL 1 – câu 28']
},
{
  id: 'ltcsdl-de1-29', exam: 'ltcsdl-de1', no: 29, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các hàng là quan trọng.' },
    { key: 'B', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'D', text: 'thứ tự của các cột là quan trọng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.3 P1 tr.10, "thứ tự các bộ (hàng) trong quan hệ là không quan trọng" (B), còn "thứ tự giữa các giá trị trong một bộ là quan trọng" (khi biểu diễn bộ dạng danh sách theo vị trí cột chưa gắn tên thuộc tính).',
  explanation: 'Theo các đặc trưng của quan hệ trên Slide Ch.3 Mô hình quan hệ (P1) – tr.10:\n- Vì một quan hệ là một **tập hợp các bộ (hàng)** nên **thứ tự của các hàng là không quan trọng** (hoán đổi các dòng vẫn là cùng một quan hệ) $\\Rightarrow$ **B đúng**, loại A.\n- Trong một bộ dữ liệu viết theo thứ tự vị trí thuộc tính của lược đồ, thứ tự các giá trị tương ứng vị trí cột là quan trọng (tráo giá trị giữa hai cột sẽ làm sai nghĩa bộ), nên trong bộ đề này chọn **B**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Đề LTCSDL 1 – câu 29']
},
{
  id: 'ltcsdl-de1-30', exam: 'ltcsdl-de1', no: 30, chapter: 'ch3', topic: '2.9',
  stem: 'Phép toán sửa đổi trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ' },
    { key: 'B', text: 'Sửa đổi giá trị của một bộ hay một nhóm các bộ' },
    { key: 'C', text: 'Sửa đổi giá trị của một số thuộc tính.' },
    { key: 'D', text: 'Sửa đổi mô tả các thuộc tính.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 8 (*Các phép toán cập nhật*): phép thay đổi (`CH`) thực hiện biến đổi ở **mức bộ (dòng)** ($r = r \\setminus t \\cup t\'$), tức là **sửa đổi giá trị của một bộ hay một nhóm các bộ** thỏa mãn điều kiện (**B đúng**).\n- A sai vì không sửa cấu trúc cả quan hệ; D là thao tác DDL (sửa lược đồ); C diễn đạt thiếu đối tượng (bộ) so với định nghĩa chuẩn.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 8', 'Đề LTCSDL 1 – câu 30']
},
{
  id: 'ltcsdl-de1-31', exam: 'ltcsdl-de1', no: 31, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K\\subseteq U$ được gọi là khóa của $R$ khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K\\to U$' },
    { key: 'B', text: '$K^+ = U$ và không tồn tại $K\'\\subset U$ mà $(K\')^+ = U$' },
    { key: 'C', text: '$K^+ = U$ và $\\exists K\'\\subset U$ mà $(K\')^+ =U$' },
    { key: 'D', text: '$K^+ = U$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc trên màn hình in nhầm "$K\'\\subset U$" ở cả B và C thay cho đúng định nghĩa chuẩn "$K\'\\subset K$"; chọn B là phương án thể hiện đầy đủ cả hai điều kiện siêu khóa và tính tối tiểu.',
  explanation: 'Theo định nghĩa khóa thông qua phụ thuộc hàm (Slide Ch.4 Phụ thuộc hàm – tr.30), tập $K \\subseteq U$ là **khóa** của $R$ khi thỏa đồng thời 2 điều kiện:\n1. $K \\to U$ hay $K^+ = U$ ($K$ là siêu khóa — A và D mới chỉ nêu điều kiện siêu khóa, chưa đủ để là khóa).\n2. **Không tồn tại** tập con thực sự $K\' \\subset K$ mà $(K\')^+ = U$ (tính tối tiểu — C sai vì đòi hỏi tồn tại $K\'$ suy ra không tối tiểu).\nDo đó chọn **B** *(lưu ý bản in gốc của đề viết nhầm $K\'\\subset U$ ở chỗ $K\'\\subset K$)*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề LTCSDL 1 – câu 31']
},
{
  id: 'ltcsdl-de1-32', exam: 'ltcsdl-de1', no: 32, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to G,\\; BG\\to H,\\; BH\\to C,\\; HC\\to E,\\; AC\\to D,\\; A\\to C\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Dư thừa thuộc tính $A$ trong $AC\\to D$' },
    { key: 'B', text: 'Không dư thừa thuộc tính $C$ trong $AC\\to D$' },
    { key: 'C', text: 'Dư thừa thuộc tính $D$ trong $AC\\to D$' },
    { key: 'D', text: 'Dư thừa thuộc tính $C$ trong $AC\\to D$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng bước kiểm tra thuộc tính dư thừa ở vế trái (Slide Ch.4 PTH – tr.26) đối với $AC \\to D$:\n- Thử loại bỏ $C$ khỏi vế trái, tính bao đóng $A^+$ theo $F$:\n  - $X_0 = \\{A\\}$.\n  - Dùng $A \\to C$: $X_1 = \\{A, C\\}$.\n  - Dùng $AC \\to D$: $X_2 = \\{A, C, D\\} \\supseteq \\{D\\}$.\n- Vì $A \\to D$ suy dẫn được mà không cần $C$, **thuộc tính $C$ dư thừa trong $AC \\to D$** (**D đúng**, loại B).\n- Thử loại bỏ $A$: $C^+ = \\{C\\} \\not\\ni D$ nên $A$ không dư thừa (loại A); $D$ nằm ở vế phải (loại C). *(Kiểm chứng bằng `fd.js` cho phủ tối thiểu chứa $A\\to D$.)*',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề LTCSDL 1 – câu 32']
},
{
  id: 'ltcsdl-de1-33', exam: 'ltcsdl-de1', no: 33, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB\\to C$' },
    { key: 'B', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B\\to D$' },
    { key: 'D', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB\\to C$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây chính là Ví dụ 2 trên Slide Ch.4 Phụ thuộc hàm – tr.29:\n1. Tách vế phải: $F_1 = \\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Kiểm tra thuộc tính dư thừa ở vế trái $AB \\to C$: bỏ thử $A$, tính $B^+ = \\{B, C, D\\} \\supseteq \\{C\\}$. Suy ra $B \\to C$ đã có sẵn, nên **thuộc tính $A$ dư thừa trong $AB \\to C$** (**D đúng**, suy ra khẳng định **A** *"không dư thừa"* là **SAI** $\\Rightarrow$ chọn **A**).\n3. Sau khi rút $AB\\to C$ thành $B\\to C$ (gộp trùng), bỏ $B\\to D$ (vì suy từ $B\\to C$ và $C\\to D$, **C đúng**), thu được phủ tối thiểu $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (**B đúng**).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Đề LTCSDL 1 – câu 33']
},
{
  id: 'ltcsdl-de1-34', exam: 'ltcsdl-de1', no: 34, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E,G,H,K)$ và tập các phụ thuộc hàm $F=\\{ C\\to AD,\\; E\\to BH,\\; B\\to K,\\; CE\\to G\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BEH\\},\\; R_3 = \\{CEG\\},\\; R_4= \\{CEK\\}$' },
    { key: 'B', text: '$R_1 = \\{ACD\\},\\; R_2 = \\{BK\\},\\; R_3 = \\{BEH\\},\\; R_4= \\{CEG\\}$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa CSDL – tr.50):\n1. Tìm khóa của $R$: $TN = \\{C, E\\}$ ($C, E$ chỉ ở vế trái), $(CE)^+ = ABCDEGHK = U \\Rightarrow$ khóa duy nhất là $CE$.\n2. Phân rã theo các PTH vi phạm BCNF:\n   - Xét $C\\to AD$ ($C$ không là siêu khóa): tách $R_1 = \\{ACD\\}$, còn lại $\\{BCEGHK\\}$.\n   - Xét $B\\to K$ ($B$ không là siêu khóa): tách $R_2 = \\{BK\\}$, còn lại $\\{BCEGH\\}$.\n   - Xét $E\\to BH$ ($E$ không là siêu khóa): tách $R_3 = \\{BEH\\}$, còn lại $R_4 = \\{CEG\\}$.\n3. Kiểm tra **B**: cả 4 lược đồ ($C\\to AD$ trên $R_1$, $B\\to K$ trên $R_2$, $E\\to BH$ trên $R_3$, $CE\\to G$ trên $R_4$) đều có vế trái là khóa nên đạt chuẩn BCNF và không mất mát thông tin.\n- **A sai** vì trên $R_4 = \\{CEK\\}$ tồn tại PTH $E\\to K$ (suy từ $E\\to B\\to K$) mà $E$ không là siêu khóa của $\\{CEK\\}$ (khóa là $CE$), vi phạm BCNF. Chọn **B**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.29–31, 50', 'Đề LTCSDL 1 – câu 34']
},
{
  id: 'ltcsdl-de1-35', exam: 'ltcsdl-de1', no: 35, chapter: 'ch4', topic: '1.7',
  stem: 'Cho hai tập phụ thuộc hàm $F$ và $G$ xác định trên tập thuộc tính $U$. $F$ và $G$ tương đương nhau khi và chỉ khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Mọi phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' },
    { key: 'B', text: 'Mọi phụ thuộc hàm trong $F$ được lấy ra từ $G$ và ngược lại.' },
    { key: 'C', text: 'Tồn tại phụ thuộc hàm trong $F$ được suy dẫn logic từ $G$ và ngược lại.' },
    { key: 'D', text: 'Ít nhất một phụ thuộc hàm trong $F$ được dẫn từ $G$ và ngược lại.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.21–22: hai tập phụ thuộc hàm $F$ và $G$ gọi là **tương đương** ($F \\sim G$) khi $F^+ = G^+$, tức là $G$ phủ $F$ và $F$ phủ $G$ — **mọi** phụ thuộc hàm trong $F$ đều được suy dẫn logic từ $G$ và ngược lại (**A đúng**).\n- B sai vì "lấy ra trực tiếp" không bao hàm suy dẫn qua bao đóng; C, D sai vì chỉ yêu cầu "tồn tại / ít nhất một" thay vì *mọi* phụ thuộc hàm.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.21–22', 'Đề LTCSDL 1 – câu 35']
},
{
  id: 'ltcsdl-de1-36', exam: 'ltcsdl-de1', no: 36, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc hợp trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A\\to BC$ thì $A\\to C$' },
    { key: 'B', text: 'Nếu $A\\to B$ và $BC\\to D$ thì $AC\\to D$' },
    { key: 'C', text: 'Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$' },
    { key: 'D', text: 'Nếu $A\\to B$ và $B\\to C$ thì $A\\to C$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm – tr.9–10 (*Hệ tiên đề Armstrong & các luật mở rộng*):\n- **Luật hợp (*Union*)**: nếu $X\\to Y$ và $X\\to Z$ thì $X\\to YZ$. Áp dụng với $A, B, C$ được **Nếu $A\\to B$ và $A\\to C$ thì $A\\to BC$** $\\Rightarrow$ **C đúng**.\n- A là luật *tách*; B là luật *tựa bắc cầu*; D là luật *bắc cầu*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề LTCSDL 1 – câu 36']
},
{
  id: 'ltcsdl-de1-37', exam: 'ltcsdl-de1', no: 37, chapter: 'ch4', topic: '1.8',
  stem: 'Dị thường thông tin là nguyên nhân:',
  figure: null,
  options: [
    { key: 'A', text: 'gây cản trở cho việc tìm kiếm, hỏi đáp thông tin.' },
    { key: 'B', text: 'gây cản trở cho việc thực hiện các phép lưu trữ.' },
    { key: 'C', text: 'gây cản trở cho việc cập nhật, bổ sung thông tin.' },
    { key: 'D', text: 'gây cản trở cho việc tách kết nối tổn thất thông tin.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.6, 8 (*Nguyên tắc 2 – Không sinh ra dị thường cập nhật*): các dị thường gồm dị thường khi **thêm bộ** (bổ sung), dị thường khi **sửa đổi** (cập nhật gây mất nhất quán) và dị thường khi **xóa** (làm mất thông tin).\n- Do đó dị thường thông tin là nguyên nhân **gây cản trở cho việc cập nhật, bổ sung thông tin** $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.6, 8', 'Đề LTCSDL 1 – câu 37']
},
{
  id: 'ltcsdl-de1-38', exam: 'ltcsdl-de1', no: 38, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ $R(U,F)$ với $U = \\{ABCDEG\\}$ và $F:=\\{AB\\to C,\\; D\\to EG,\\; C\\to A,\\; BE\\to C,\\; BC\\to D,\\; CG\\to BD,\\; ACD\\to B,\\; CE\\to AG\\}$. Khóa của $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$AB, CG, CD$' },
    { key: 'B', text: '$AB, CG, AD$' },
    { key: 'C', text: '$EC, CE, BC$' },
    { key: 'D', text: '$EB, CE, BC$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Kiểm chứng bằng `fd.js` cho thấy $R$ có tổng cộng 7 khóa là `AB, BC, BD, BE, CD, CE, CG`. Vì vậy cả **A** (`AB, CG, CD`) và **D** (`EB, CE, BC`) đều liệt kê 3 khóa hợp lệ (chưa đủ cả 7 khóa). Trong ngân hàng đề gốc (khớp Đề K16 Ca 2 câu 46 và Đề LTCSDL 2 câu 35), A và B (`AB, CG, AD`) là cặp phương án chính – nhiễu chuẩn, chọn **A**.',
  explanation: 'Kiểm tra bao đóng các tập 1 thuộc tính: $A^+=A$, $B^+=B$, $C^+=AC$, $D^+=DEG$, $E^+=E$, $G^+=G$ (không có khóa 1 thuộc tính, nên mọi tập 2 thuộc tính có bao đóng bằng $U$ đều là khóa):\n- $(AB)^+ = ABCDGE = U$ ($AB\\to C$, $BC\\to D$, $D\\to EG$).\n- $(CG)^+ = ABCDEG = U$ ($C\\to A$, $CG\\to BD$, $D\\to EG$).\n- $(CD)^+ = ABCDEG = U$ ($C\\to A$, $D\\to EG$, $ACD\\to B$).\nVậy `AB, CG, CD` đều là khóa của $R$ $\\Rightarrow$ chọn **A**.\n- Loại **B** vì $(AD)^+ = ADEG \\neq U$ (thiếu $B, C$); loại **C** vì `EC` và `CE` là cùng một tập thuộc tính. *(Lưu ý: ở phương án **D**, $(EB)^+ = (CE)^+ = (BC)^+ = U$ nên cả 3 tập trong D cũng thuộc tập 7 khóa của $R$.)*',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16, 30, 41–42', 'Đề LTCSDL 1 – câu 38']
},
{
  id: 'ltcsdl-de1-39', exam: 'ltcsdl-de1', no: 39, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$AB$ và $AC$ không phải là khóa của $R$' },
    { key: 'B', text: '$BC$ và $DB$ là các khóa của $R$' },
    { key: 'C', text: '$AB$ và $AD$ là các khóa của $R$' },
    { key: 'D', text: '$AB$ và $AC$ là các khóa của $R$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán $TN/TG$ tìm tất cả các khóa (Slide Ch.4 PTH – tr.41–42):\n- $A$ chỉ nằm ở vế trái, $D$ chỉ ở vế phải $\\Rightarrow TN = \\{A\\}$, $TG = \\{B, C\\}$.\n- Thử $A^+ = A \\neq ABCD$. Ghép các tập con của $TG$:\n  - $(AB)^+ = ABCD = U$ (dùng $AB \\to CD$).\n  - $(AC)^+ = ABCD = U$ (dùng $C \\to B$, $AC \\to D$, hoặc $AB \\to CD$).\nVậy tập tất cả các khóa của $R$ là **`AB` và `AC`** $\\Rightarrow$ chọn **D** *(A, B, C đều sai vì $(BC)^+=BC$, $(DB)^+=BD$, $(AD)^+=AD$)*.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42', 'Đề LTCSDL 1 – câu 39']
}
);

DB.questions.push(
{
  id: 'ltcsdl-de1-40', exam: 'ltcsdl-de1', no: 40, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$, với $U=\\{ABCDE\\}$ và $F=\\{AB\\to D,\\; B\\to D,\\; D\\to C,\\; C\\to BE\\}$. Bao đóng của $(AB)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$ACDE$' },
    { key: 'B', text: '$ABDE$' },
    { key: 'C', text: '$U$' },
    { key: 'D', text: '$ABCD$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm bao đóng $(AB)^+$ (Slide Ch.4 PTH – tr.16):\n- $X_0 = \\{A, B\\}$.\n- Dùng $AB \\to D$ (hoặc $B \\to D$): $X_1 = \\{A, B, D\\}$.\n- Dùng $D \\to C$: $X_2 = \\{A, B, C, D\\}$.\n- Dùng $C \\to BE$: $X_3 = \\{A, B, C, D, E\\} = U$.\nVậy $(AB)^+ = ABCDE = U \\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề LTCSDL 1 – câu 40']
},
{
  id: 'ltcsdl-de1-41', exam: 'ltcsdl-de1', no: 41, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: 'Số hoá đơn, Mã hàng $\\to$Số lượng bán' },
    { key: 'B', text: 'Số hoá đơn, Mã hàng$\\to$Tên hàng' },
    { key: 'C', text: 'Số hoá đơn, Mã hàng$\\to$ Đơn vị tính' },
    { key: 'D', text: 'Số hoá đơn, Mã khách$\\to$Tên khách' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL – tr.6: $X \\to Y$ là **phụ thuộc hàm đầy đủ** nếu không thể bỏ bất kỳ thuộc tính nào ở vế trái $X$ mà vẫn suy ra được $Y$:\n- **A đúng**: muốn xác định `Số lượng bán` phải có cả `Số hoá đơn` và `Mã hàng` (một hóa đơn có nhiều mặt hàng và một mặt hàng bán ở nhiều hóa đơn).\n- B, C sai vì dư thừa `Số hoá đơn` (chỉ cần `Mã hàng` $\\to$ `Tên hàng`, `Đơn vị tính`).\n- D sai vì dư thừa `Số hoá đơn` (chỉ cần `Mã khách` $\\to$ `Tên khách`).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề LTCSDL 1 – câu 41']
},
{
  id: 'ltcsdl-de1-42', exam: 'ltcsdl-de1', no: 42, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: '$R$ không đạt chuẩn BCNF.' },
    { key: 'B', text: 'Tập nguồn của $R$ là $\\{A\\}$, Tập các thuộc tính trung gian của $R$ là $\\{BC\\}$.' },
    { key: 'C', text: '$AB, AC, ABC$ là các siêu khóa của $R$.' },
    { key: 'D', text: '$AC, BC, ABC$ là các siêu khóa của $R$.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Từ kết quả phân tích lược đồ $R(A,B,C,D)$ với $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$:\n- Tập nguồn $TN = \\{A\\}$, tập trung gian $TG = \\{B, C\\}$ (**B đúng**); hai khóa của $R$ là $AB$ và $AC$.\n- Các siêu khóa gồm tất cả tập chứa $AB$ hoặc $AC$: $AB, AC, ABC, ABD, ACD, ABCD$ (**C đúng**).\n- $R$ vi phạm BCNF ở $C\\to B$ vì $C^+ = BC \\neq ABCD$ (**A đúng**).\n- **D sai** vì $(BC)^+ = \\{B, C\\} \\neq ABCD$ nên `BC` **không** phải siêu khóa của $R$. Chọn **D**.',
  sameAs: ['ltcsdl-de2-33'],
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42', 'Slide Ch.4 Chuẩn hóa CSDL – tr.29', 'Đề LTCSDL 1 – câu 42']
},
{
  id: 'ltcsdl-de1-43', exam: 'ltcsdl-de1', no: 43, chapter: 'ch4', topic: '3.1',
  stem: 'Khẳng định nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$A\\to B$ và $BC\\to Z$ thì $AC\\to Z$' },
    { key: 'B', text: '$AC\\to B$ và $B\\to Z$ thì $AC\\to Z$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng hệ tiên đề Armstrong và các luật mở rộng (Slide Ch.4 PTH – tr.9–10):\n- **A đúng** theo **luật tựa bắc cầu** (*Nếu $X\\to Y$ và $WY\\to Z$ thì $XW\\to Z$*): từ $A\\to B$ gia tăng $C$ được $AC\\to BC$, kết hợp $BC\\to Z$ suy ra $AC\\to Z$ (hoặc $(AC)^+ = ABCZ \\supseteq Z$).\n- **B đúng** theo **luật bắc cầu**: từ $AC\\to B$ và $B\\to Z$ suy ra $AC\\to Z$ (hoặc $(AC)^+ = ABCZ \\supseteq Z$).\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề LTCSDL 1 – câu 43']
},
{
  id: 'ltcsdl-de1-44', exam: 'ltcsdl-de1', no: 44, chapter: 'ch4', topic: '3.10',
  stem: 'Lược đồ quan hệ $R(\\text{Mã số}, \\text{Họ tên}, \\text{địa chỉ})$ ở dạng chuẩn nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Dạng chuẩn 1NF, không là 2NF.' },
    { key: 'B', text: 'Dạng chuẩn 2NF, không là 3NF.' },
    { key: 'C', text: 'Dạng chuẩn 3NF.' },
    { key: 'D', text: 'Dạng chuẩn 2NF, không là 3NF.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Phương án B và D trong đề gốc (ảnh 13.png) in giống hệt nhau (đều là phương án nhiễu sai "Dạng chuẩn 2NF, không là 3NF."). Đề không gạch chân khóa hay cho tập PTH tường minh, ngầm hiểu `Mã số` là khóa chính duy nhất.',
  explanation: 'Giả thiết lược đồ đạt 1NF, có khóa chính là `Mã số` (gồm 1 thuộc tính) và tập PTH là $\\text{Mã số} \\to \\text{Họ tên},\\; \\text{địa chỉ}$ (Slide Ch.4 Chuẩn hóa CSDL – tr.8, 15, 21, 23):\n1. Mọi khóa chỉ có 1 thuộc tính (`Mã số`) nên không thể có phụ thuộc bộ phận vào một phần của khóa $\\Rightarrow R$ đạt **2NF** (loại A).\n2. Giữa `Họ tên` và `địa chỉ` không có phụ thuộc bắc cầu vào khóa (mọi PTH không tầm thường đều có vế trái là siêu khóa `Mã số`) $\\Rightarrow R$ đạt **3NF** (thậm chí đạt BCNF; loại B và D).\nChọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.8, 15, 21, 23', 'Đề LTCSDL 1 – câu 44']
},
{
  id: 'ltcsdl-de1-45', exam: 'ltcsdl-de1', no: 45, chapter: 'ch4', topic: '3.7',
  stem: 'Cho $F=\\{AB\\to C,\\; AD\\to G,\\; BC\\to G,\\; C\\to D,\\; GD\\to E\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: '$AB\\to DE$' },
    { key: 'B', text: '$GD \\to A$' },
    { key: 'C', text: '$BC\\to A$' },
    { key: 'D', text: '$AD \\to C$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán giải bài toán thành viên bằng tính bao đóng vế trái (Slide Ch.4 PTH – tr.18):\n- **Xét A**: tính $(AB)^+$: $X_0 = AB \\xrightarrow{AB\\to C} ABC \\xrightarrow{BC\\to G} ABCG \\xrightarrow{C\\to D} ABCDG \\xrightarrow{GD\\to E} ABCDEG$. Vì $DE \\subseteq (AB)^+$ nên **$AB \\to DE \\in F^+$** (**A đúng**).\n- Kiểm tra các phương án khác: $(GD)^+ = GDE \\not\\ni A$ (loại B); $(BC)^+ = BCDEG \\not\\ni A$ (loại C); $(AD)^+ = ADEG \\not\\ni C$ (loại D).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.18', 'Đề LTCSDL 1 – câu 45']
},
{
  id: 'ltcsdl-de1-46', exam: 'ltcsdl-de1', no: 46, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AB\\to CD,\\; AC\\to D,\\; C\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: 'BCNF' },
    { key: 'B', text: '3NF' },
    { key: 'C', text: '2NF' },
    { key: 'D', text: '1NF' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán xác định dạng chuẩn cao nhất (Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 29, 37):\n1. Khóa của $R$: $AB$ và $AC$. Thuộc tính khóa: $A, B, C$; thuộc tính không khóa: $D$.\n2. **Kiểm tra BCNF**: xét $C \\to B$, $C^+ = \\{B, C\\} \\neq ABCD$ nên $C$ không là siêu khóa $\\Rightarrow$ không đạt BCNF.\n3. **Kiểm tra 3NF**: tách vế phải được $AB\\to C$, $AB\\to D$, $AC\\to D$, $C\\to B$:\n   - $AB\\to C$, $AB\\to D$, $AC\\to D$ đều có vế trái là khóa (siêu khóa).\n   - $C\\to B$ có vế phải $B$ là **thuộc tính khóa**.\nVậy mọi PTH đều thỏa điều kiện 3NF $\\Rightarrow$ dạng chuẩn cao nhất của $R$ là **3NF** (**B đúng**).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.21, 23, 29, 37', 'Đề LTCSDL 1 – câu 46']
},
{
  id: 'ltcsdl-de1-47', exam: 'ltcsdl-de1', no: 47, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp.' },
    { key: 'B', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng các phụ thuộc hàm.' },
    { key: 'C', text: 'Bảng tầm ảnh hưởng được sử dụng để kiểm tra ràng buộc toàn vẹn tại những thời điểm cập nhật dữ liệu.' },
    { key: 'D', text: 'Bối cảnh của một ràng buộc toàn vẹn là những quan hệ mà ràng buộc đó có hiệu lực.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.15–17 (*Các yếu tố của RBTV*):\n- **A sai**: Slide tr.15 nêu rõ *"Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng ngôn ngữ tự nhiên, thuật giải, ngôn ngữ đại số tập hợp, đại số quan hệ,... Ngoài ra cũng có thể được biểu diễn bằng phụ thuộc hàm"* (**B đúng**). Khẳng định *"chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp"* là sai.\n- **C đúng** (tr.17) và **D đúng** (tr.16). Chọn **A**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.15–17', 'Đề LTCSDL 1 – câu 47']
},
{
  id: 'ltcsdl-de1-48', exam: 'ltcsdl-de1', no: 48, chapter: 'ch4', topic: '1.8',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'B', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' },
    { key: 'C', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ [bị cắt]' },
    { key: 'D', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Cuối phương án C bị cắt chữ "liệu" ở mép phải ảnh 14.png ("khai thác dữ..."). Slide Ch.4 Tổng quan TKCSDL tr.3 nêu nguyên văn "Thiết kế CSDL: chọn được tập lược đồ phù hợp" (khớp B và vị trí câu hỏi trong phần Chương 4 của đề); ở góc độ tổng quan xây dựng CSDL (Slide Ch.1 tr.29–30), một số tài liệu cũng dùng cách diễn đạt mô hình hóa ở C.',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.3 (*I. Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** (xem xét ở cả mức logic và mức vật lý nhằm tối ưu việc lưu trữ, tránh dư thừa/dị thường và tối ưu khai thác dữ liệu — Slide Ch.1 tr.9) $\\Rightarrow$ **B đúng nhất**.\n- A quá phiến diện; D sai ngược chiều chuẩn hóa (phải đưa từ dạng chuẩn thấp lên cao); C mới nhấn khâu mô hình hóa chuyển đối tượng sang quan hệ (Slide Ch.1 tr.29–30).',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Slide Ch.1 Tổng quan – tr.9', 'Đề LTCSDL 1 – câu 48']
},
{
  id: 'ltcsdl-de1-49', exam: 'ltcsdl-de1', no: 49, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{A\\to B,\\; B\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1,R_2\\}$ tách $R$ thành hai lược đồ $R_1\\{A,B\\}$ và $R_2\\{B,C\\}$; $F_1$ và $F_2$ của phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$; $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'B', text: '$F_1 = \\{A\\to C,\\; A\\to AC\\; C\\to A,\\; C\\to AC\\}$; $F_2 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$' },
    { key: 'C', text: '$F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$; $F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh 14.png, các phương án A và B thiếu dấu phẩy giữa `A→AC` và `C→A` (giữ nguyên như in). Theo quy ước ví dụ trên Slide Ch.4 Chuẩn hóa tr.42, các PTH tầm thường một thuộc tính như $A\\to A, B\\to B$ được lược bỏ.',
  explanation: 'Đây chính là Ví dụ trên Slide Ch.4 Chuẩn hóa CSDL – tr.42. Theo định nghĩa hình chiếu $\\Pi_{R_i}(F) = \\{ X\\to Y \\in F^+ \\mid X \\cup Y \\subseteq R_i \\}$ (tr.41):\n- Do $A^+ = B^+ = C^+ = ABC$, mọi thuộc tính trong $R$ đều xác định lẫn nhau.\n- Chiếu lên $R_1\\{A, B\\}$: chỉ giữ các PTH có thuộc tính nằm trọn trong $\\{A, B\\}$ $\\Rightarrow F_1 = \\{A\\to B,\\; A\\to AB,\\; B\\to A,\\; B\\to AB\\}$ (A, B sai vì chứa $C \\notin R_1$).\n- Chiếu lên $R_2\\{B, C\\}$: chỉ giữ các PTH có thuộc tính nằm trọn trong $\\{B, C\\}$ $\\Rightarrow F_2 = \\{B\\to C,\\; B\\to BC,\\; C\\to B,\\; C\\to BC\\}$.\nChọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.41–42', 'Đề LTCSDL 1 – câu 49']
},
{
  id: 'ltcsdl-de1-50', exam: 'ltcsdl-de1', no: 50, chapter: 'ch4', topic: '3.2',
  stem: 'Dữ liệu trong quan hệ ở dạng chuẩn 1NF:',
  figure: null,
  options: [
    { key: 'A', text: 'dễ dàng sửa đổi, bổ sung thuận tiện hơn các dạng chuẩn khác.' },
    { key: 'B', text: 'không bị trùng lặp.' },
    { key: 'C', text: 'rất đơn giản và dễ sử dụng.' },
    { key: 'D', text: 'chứa dị thường thông tin.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL – tr.3, 8–10: quan hệ chỉ mới đạt dạng chuẩn **1NF** (chưa được chuẩn hóa lên 2NF, 3NF, BCNF) vẫn còn sự phụ thuộc bộ phận và phụ thuộc bắc cầu của các thuộc tính không khóa, dẫn đến **dư thừa/trùng lặp dữ liệu** (loại B) và **chứa dị thường thông tin** khi thêm, sửa, xóa bộ (loại A, C).\nChọn **D**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.3, 8–10', 'Đề LTCSDL 1 – câu 50']
}
);
