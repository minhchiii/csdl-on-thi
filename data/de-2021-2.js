/* Đề 2021 – Đề 2 – nguồn: tai-lieu-text/de/de-2021-2.md & tai-lieu/Đề 2021/đề 2/ (1.jpg–13.jpg) */
DB.questions.push(
{
  id: 'de-2021-2-07', exam: 'de-2021-2', no: 7, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các thuộc tính Mã nhân viên, lương, hệ số lương? Biết rằng lương được tính theo hệ số lương',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 185, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -55 },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 185, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', kind: 'derived', dx: 0, dy: -55 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 185, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -55 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 185, y: 85, attrs: [
      { label: 'Lương', kind: 'multi', dx: -135, dy: 0 },
      { label: 'HSL', dx: 0, dy: -55 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. `Mã NV` là thuộc tính định danh phân biệt từng nhân viên nên là **thuộc tính khóa** (hình elip nét liền, có gạch chân — Slide Ch.2 tr.12) $\\Rightarrow$ loại A (không gạch chân `Mã NV`).\n2. `Lương` được tính theo hệ số lương nên là **thuộc tính suy dẫn (dẫn xuất)**, ký hiệu bằng **elip nét đứt** (Slide Ch.2 tr.11) $\\Rightarrow$ loại D (vẽ elip kép là thuộc tính đa trị).\n3. `HSL` (hệ số lương) là thuộc tính lưu trữ thông thường nên vẽ **elip nét liền** $\\Rightarrow$ loại B (vẽ nhầm cả `HSL` nét đứt). Chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.10–12, 14', 'Đề 2021 (Đề 2) – câu 7']
},
{
  id: 'de-2021-2-08', exam: 'de-2021-2', no: 8, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả: “Một nhân viên có thể có một người giám sát, người đó cũng là nhân viên. Một nhân viên có thể giám sát nhiều người”. Mối liên kết được mô tả là mối liên kết?',
  figure: null,
  options: [
    { key: 'A', text: '1-1.' },
    { key: 'B', text: '1-n.' },
    { key: 'C', text: 'm-n.' },
    { key: 'D', text: 'Đệ qui.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: 'Xét về bản số tối đa thì liên kết này mang tỷ lệ 1-n, nhưng mô tả nhấn mạnh "người đó cũng là nhân viên" nhằm kiểm tra khái niệm liên kết đệ qui (Slide Ch.2 tr.19).',
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19, **liên kết đệ qui** xảy ra khi **cùng một kiểu thực thể tham gia vào liên kết với các vai trò khác nhau** — và ví dụ kinh điển ngay trên slide là *"Nhân viên A giám sát nhân viên B"*. Vì cả người giám sát lẫn người được giám sát đều thuộc cùng kiểu thực thể `NHÂN VIÊN`, đây là mối liên kết **đệ qui** $\\Rightarrow$ chọn **D**.',
  sameAs: ['k17-ca1-06'],
  source: ['Slide Ch.2 Mô hình ER – tr.19, 32', 'Đề 2021 (Đề 2) – câu 8']
},
{
  id: 'de-2021-2-09', exam: 'de-2021-2', no: 9, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể liên kết (ER) là?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình CSDL biểu diễn dữ liệu thành một mạng, trong đó các đỉnh là các bản ghi, các cung là mối quan hệ giữa các đỉnh.' },
    { key: 'B', text: 'Mô hình CSDL biểu diễn dữ liệu thành một đồ thị có hướng, trong đó các đỉnh là các thực thể, các cung là quan hệ giữa các đỉnh.' },
    { key: 'C', text: 'Mô hình CSDL mô tả súc tích về các đối tượng và mối quan hệ giữa các đối tượng trong thế giới thực.' },
    { key: 'D', text: 'Mô hình CSDL mà dữ liệu được tổ chức thành các bảng, các phép toán thao tác trên dữ liệu dựa trên lý thuyết tập hợp của toán học.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 tr.23 và Slide Ch.2 tr.2: **Mô hình thực thể liên kết (ER)** là mô hình **mô tả súc tích** về các đối tượng (thực thể, thuộc tính) cùng các mối liên kết giữa các đối tượng trong bài toán thế giới thực $\\Rightarrow$ **C đúng**.\n- A mô tả mô hình mạng; D mô tả mô hình CSDL quan hệ; B mô tả cấu trúc đồ thị có hướng không phải định nghĩa của mô hình ER.',
  source: ['Slide Ch.1 Tổng quan – tr.23', 'Slide Ch.2 Mô hình ER – tr.2', 'Đề 2021 (Đề 2) – câu 9']
},
{
  id: 'de-2021-2-10', exam: 'de-2021-2', no: 10, chapter: 'ch2', topic: '2.3',
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
      specs: [{ id: 's1', x: 280, y: 120, kind: 'o', parent: 'lk', total: true, children: ['sx', 'cc'] }]
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
      specs: [{ id: 's1', x: 280, y: 120, kind: 'o', parent: 'lk', total: false, children: ['sx', 'cc'] }]
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
      specs: [{ id: 's1', x: 280, y: 120, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }]
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
      specs: [{ id: 's1', x: 280, y: 120, kind: 'd', parent: 'lk', total: true, children: ['sx', 'cc'] }],
      notes: [{ text: '(2 nhánh con nét đôi)', x: 420, y: 218 }]
    } } }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  note: 'Ở ảnh gốc (3.jpg), phương án D vẽ hai nhánh từ vòng tròn `d` tới `LK_Tự SX` và `LK_Cung cấp` cũng bằng nét đôi; bộ vẽ SVG hiện dùng nét đơn cho nhánh lớp con nên đã ghi chú thêm trực tiếp trên hình D.',
  explanation: '1. **Ràng buộc phủ lấp (overlapping)** cho phép một thực thể lớp cha thuộc nhiều lớp con đồng thời (một `LINH KIỆN` có thể vừa tự sản xuất vừa nhập từ nhà cung cấp), ký hiệu bằng vòng tròn chữ **`o`** $\\Rightarrow$ loại C và D (dùng chữ `d` là tách biệt).\n2. Trong mô hình chuẩn của bài toán `LINH KIỆN` (`PART` – Elmasri & Navathe), mọi linh kiện đều bắt buộc phải là `LK_Tự SX` hoặc `LK_Cung cấp` (chuyên biệt hóa **toàn phần**), nên đường nối từ lớp cha `LINH KIỆN` tới vòng tròn `o` là **nét đôi**, còn hai nhánh tới lớp con là **nét đơn** có ký hiệu $\\subset$ $\\Rightarrow$ chọn **A** (loại B vì dùng nét đơn ở kiểu cha).',
  sameAs: ['k16-ca1-17'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề 2021 (Đề 2) – câu 10']
},
{
  id: 'de-2021-2-11', exam: 'de-2021-2', no: 11, chapter: 'ch2', topic: '2.6',
  stem: 'Một tổ chức phi lợi nhuận quản lý các nhân viên làm việc theo mã nhân viên. Có ba loại nhân viên: nhân viên cơ hữu, nhân viên tình nguyện, nhà tài trợ. Thông tin về nhân viên cơ hữu gồm họ tên, ngày sinh, địa chỉ và ngày tuyển dụng. Thông tin về nhân viên tình nguyện gồm họ tên, ngày sinh, địa chỉ và kỹ năng. Thông tin về nhà tài trợ gồm họ tên, ngày sinh, địa chỉ và ngày bắt đầu tài trợ. Xác định kiểu thực thể cha cùng các thuộc tính tương ứng.',
  figure: null,
  options: [
    { key: 'A', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ.' },
    { key: 'B', text: 'Nhân viên với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng, kỹ năng và ngày bắt đầu tài trợ.' },
    { key: 'C', text: 'Nhân viên cơ hữu với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày tuyển dụng; Nhân viên tình nguyện với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, kỹ năng; Nhà tài trợ với các thuộc tính: mã nhân viên, họ tên, ngày sinh, địa chỉ, ngày bắt đầu tài trợ.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc tổng quát hóa / kế thừa trong mô hình EER, **kiểu thực thể cha** chỉ chứa các thuộc tính dùng chung (và khóa định danh) cho cả ba lớp con: `mã nhân viên, họ tên, ngày sinh, địa chỉ` $\\Rightarrow$ **A đúng**.\n- B sai vì gộp cả thuộc tính đặc thù của từng lớp con (`ngày tuyển dụng`, `kỹ năng`, `ngày bắt đầu tài trợ`) lên lớp cha.\n- C liệt kê 3 lớp con chứ không xác định kiểu thực thể cha.',
  source: ['Kiến thức bổ sung (ngoài slide) – Tổng quát hóa & kế thừa EER', 'Đề 2021 (Đề 2) – câu 11']
},
{
  id: 'de-2021-2-12', exam: 'de-2021-2', no: 12, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), tên thuộc tính trong bài toán thường được mô tả bởi',
  figure: null,
  options: [
    { key: 'A', text: 'Động từ.' },
    { key: 'B', text: 'Danh từ.' },
    { key: 'C', text: 'Danh từ và tính từ.' },
    { key: 'D', text: 'Tính từ.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: 'Một số tài liệu phân tích ngữ nghĩa ngoài slide nhắc thêm tính từ chỉ tính chất/trạng thái, nhưng theo quy ước trọng tâm trong slide và bộ đề của học phần thì tên thực thể và thuộc tính dùng danh từ.',
  explanation: 'Trong phân tích mô hình ER (Slide Ch.2 Mô hình ER – tr.5, 7, 16, 27):\n- **Tên kiểu thực thể** và **tên thuộc tính** thường được đặt bằng **danh từ** (hoặc cụm danh từ, như `Họ tên`, `Ngày sinh`, `Địa chỉ`, `Lương`, `Tuổi`) $\\Rightarrow$ **B đúng**.\n- **Tên mối liên kết** thường được biểu diễn bằng **động từ** (loại A).\n- C và D đưa tính từ vào quy ước chính cho tên thuộc tính nên không khớp đáp án chuẩn của học phần.',
  source: ['Slide Ch.2 Mô hình ER – tr.5, 7, 16, 27', 'Đề 2021 (Đề 2) – câu 12']
},
{
  id: 'de-2021-2-13', exam: 'de-2021-2', no: 13, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết 1-1 giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó:',
  figure: null,
  options: [
    { key: 'A', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' },
    { key: 'B', text: 'một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'C', text: 'một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER tr.20: **"Kiểu liên kết 1 – 1 (một-một): một thực thể kiểu A liên kết với một thực thể kiểu B và ngược lại"** $\\Rightarrow$ **D đúng**. A mô tả liên kết `M-N`, còn B và C mô tả liên kết `1-N`.',
  source: ['Slide Ch.2 Mô hình ER – tr.20', 'Đề 2021 (Đề 2) – câu 13']
},
{
  id: 'de-2021-2-14', exam: 'de-2021-2', no: 14, chapter: 'ch2', topic: '2.2',
  stem: 'Phương án nào sai khi mô tả về kiểu dữ liệu của các thuộc tính của lớp thực thể trong mô hình thực thể liên kết ER?',
  figure: null,
  options: [
    { key: 'A', text: 'Số điện thoại là một số nguyên.' },
    { key: 'B', text: 'Tuổi là một số nguyên.' },
    { key: 'C', text: 'Ngày sinh là một chuỗi ký tự.' },
    { key: 'D', text: 'Tên người là một chuỗi ký tự.' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: 'Phương án D bị cắt nhẹ phần đáy chữ ở mép dưới ảnh 4.jpg nhưng vẫn đọc được rõ toàn bộ nội dung.',
  explanation: '- **A sai**: `Số điện thoại` có thể bắt đầu bằng chữ số `0` (nếu lưu kiểu số nguyên sẽ mất số `0` đầu), đôi khi chứa `+`, `-` và không dùng để tính toán số học nên phải biểu diễn bằng **chuỗi ký tự**.\n- B (`Tuổi` là số nguyên) và D (`Tên người` là chuỗi ký tự) đều đúng; `Ngày sinh` tuy thường dùng kiểu ngày tháng nhưng trong một số bài toán vẫn có thể lưu dạng chuỗi định dạng ngày.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.15', 'Đề 2021 (Đề 2) – câu 14']
},
{
  id: 'de-2021-2-15', exam: 'de-2021-2', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu (lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu (lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu (lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu (lớp) thực thể là các ràng buộc bắt buộc giữa các kiểu (lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.2 Mô hình ER tr.15: **"Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể."** $\\Rightarrow$ **A đúng**. B và C nhầm lẫn khái niệm liên kết với quy tắc nghiệp vụ hoặc ràng buộc (như ràng buộc bản số, ràng buộc tham gia) trên liên kết.',
  source: ['Slide Ch.2 Mô hình ER – tr.15', 'Đề 2021 (Đề 2) – câu 15']
},
{
  id: 'de-2021-2-16', exam: 'de-2021-2', no: 16, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER:\n- **Ràng buộc tách biệt** (*disjoint*, `d`): một thực thể kiểu cha thuộc tối đa một kiểu con (không thể đồng thời là thành viên của từ hai kiểu con trở lên) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp** (*overlapping*, `o`): một thực thể kiểu cha có thể đồng thời thuộc nhiều kiểu con $\\Rightarrow$ **B đúng**.\nVì cả hai phát biểu đều đúng nên chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems', 'Đề 2021 (Đề 2) – câu 16']
}
);

DB.questions.push(
{
  id: 'de-2021-2-17', exam: 'de-2021-2', no: 17, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: “Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban và có số điện thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty”. Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể PHÒNG gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Điện thoại.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo mô tả bài toán, thực thể `PHÒNG` có các thuộc tính: `Mã phòng` (mã số duy nhất), `Tên phòng` và `Điện thoại` (để liên hệ).\n- Thông tin *"Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty"* được biểu diễn bằng **mối liên kết** giữa `PHÒNG` và `NHÂN VIÊN` (hình thoi), **không** đưa `Mã người quản lý` (khóa ngoại) vào làm thuộc tính của thực thể trong mô hình ER $\\Rightarrow$ loại A, B.\n- Đề bài không đề cập `Địa chỉ` của phòng $\\Rightarrow$ loại C. Chọn **D**.',
  source: ['Slide Ch.2 Mô hình ER – tr.15, 27', 'Đề 2021 (Đề 2) – câu 17']
},
{
  id: 'de-2021-2-18', exam: 'de-2021-2', no: 18, chapter: 'ch3', topic: '2.11',
  stem: 'Khi thực hiện tối ưu hóa biểu thức truy vấn, nhận xét nào là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Thực hiện các phép chiếu cuối cùng thì tốt hơn.' },
    { key: 'B', text: 'Thực hiện các phép chiếu sớm sẽ làm giảm số các thuộc tính.' },
    { key: 'C', text: 'Thực hiện các phép chọn muộn hơn các phép chiếu thì tốt hơn.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: 'Ảnh gốc thiếu phương án D',
  note: 'Ảnh 5.jpg bị cắt ngay sau phương án C, không có phương án D.',
  explanation: 'Theo quy tắc tối ưu hóa heuristic biểu thức đại số quan hệ:\n- **A sai**: nên đẩy phép chiếu xuống sớm (ngay sau phép chọn và trước phép kết nối/tích) thay vì đợi đến cuối cùng.\n- **B đúng**: thực hiện các phép chiếu ($\\pi$) sớm giúp loại bỏ các cột không cần thiết, **làm giảm số các thuộc tính** của các quan hệ trung gian.\n- **C sai**: cần thực hiện phép chọn ($\\sigma$) **sớm hơn** (trước) phép chiếu để giảm số lượng dòng (bộ) ngay từ đầu.\n*(Ghi chú: phương án D bị cắt mất trong ảnh gốc 5.jpg; trong 3 phương án A–C đọc được thì B là nhận xét đúng.)*',
  sameAs: ['k16-ca1-23'],
  source: ['Kiến thức bổ sung (ngoài slide) – Heuristic tối ưu biểu thức ĐSQH', 'Đề 2021 (Đề 2) – câu 18']
},
{
  id: 'de-2021-2-21', exam: 'de-2021-2', no: 21, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ $\\text{DOT1}(\\text{MaSV}, \\text{HoTen})$ và $\\text{DOT2}(\\text{MaSV}, \\text{HoTen})$: chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu “Lập danh sách các sinh viên được khen thưởng học kỳ 1 hoặc học kỳ 2”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{DOT1} \\cup \\text{DOT2}$' },
    { key: 'B', text: '$\\text{DOT1} \\cap \\text{DOT2}$' },
    { key: 'C', text: '$\\text{DOT1} - \\text{DOT2}$' },
    { key: 'D', text: '$\\text{DOT1} \\times \\text{DOT2}$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây là ví dụ minh họa các phép toán tập hợp trong Slide Ch.3 P2 tr.10, 16:\n- Phép **hợp** ($\\text{DOT1} \\cup \\text{DOT2}$) lấy mọi sinh viên có mặt trong `DOT1` **hoặc** `DOT2` (hoặc cả hai) và loại bỏ trùng lặp $\\Rightarrow$ **A đúng**.\n- B ($\\cap$) là sinh viên được khen thưởng **cả hai** học kỳ; C ($-$) là sinh viên được ở học kỳ 1 nhưng **không** ở học kỳ 2; D ($\\times$) là tích Đề-các.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.10–17', 'Đề 2021 (Đề 2) – câu 21']
},
{
  id: 'de-2021-2-22', exam: 'de-2021-2', no: 22, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: $\\text{SinhVien}(\\text{MaS}, \\text{HoTen}, \\text{GioiTinh}, \\text{NgaySinh}, \\text{Que})$; $\\text{Monhoc}(\\text{MaMon}, \\text{TenMon}, \\text{SoTC})$; $\\text{KetQua}(\\text{MaSV}, \\text{MaMon}, \\text{Diem})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{HoTen}}((\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})) * \\text{SinhVien})$' },
    { key: 'D', text: '$\\pi_{\\text{HoTen}}(\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) - \\pi_{\\text{MaMon}}(\\text{MonHoc}) * \\text{SinhVien})$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm `MaSV` trong `SinhVien` thành `MaS`.',
  explanation: 'Yêu cầu *"thi hết tất cả các môn trong bảng Môn học"* là bài toán **phép chia** (Slide Ch.3 P2 tr.29, 31):\n1. Lấy $\\pi_{\\text{MaSV}, \\text{MaMon}}(\\text{Ketqua}) \\div \\pi_{\\text{MaMon}}(\\text{MonHoc})$ để tìm các `MaSV` đã thi đủ mọi `MaMon` của bảng `MonHoc`.\n2. Đặt phép chia trong cặp ngoặc `(...)` rồi mới kết nối tự nhiên `* SinhVien` để lấy `HoTen` $\\Rightarrow$ **C đúng**.\n- B và D sai vì dùng phép trừ `-` (hai vế lại khác lược đồ); A thiếu dấu ngoặc quanh phép chia.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29, 31', 'Đề 2021 (Đề 2) – câu 22']
},
{
  id: 'de-2021-2-23', exam: 'de-2021-2', no: 23, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach}, \\text{Hoten}, \\text{Diachi}, \\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD}, \\text{NgaylapHD}, \\text{Ngayban}, \\text{MaKhach})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Đưa ra danh sách các khách hàng ở Hà Nội đã mua hàng tại cửa hàng. Thông tin gồm mã khách hàng, tên khách hàng và số điện thoại*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}))$' },
    { key: 'B', text: '$\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' },
    { key: 'C', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}) * \\pi_{\\text{maKH}}(\\text{HOADON}))$' },
    { key: 'D', text: '$\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}(\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH}))$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc viết tắt `MaKhach` thành `maKH` trong các phương án.',
  explanation: '1. Khách hàng phải **ở Hà Nội** ($\\sigma_{\\text{diachi}=\\text{‘Hà Nội’}}(\\text{KHACH})$) **và đã mua hàng** (phải kết nối tự nhiên với $\\pi_{\\text{maKH}}(\\text{HOADON})$) $\\Rightarrow$ loại A và D vì bỏ qua bảng `HOADON`.\n2. Phải lọc `diachi = ‘Hà Nội’` **trước** khi chiếu $\\pi_{\\text{maKH},\\text{Hoten},\\text{DienThoai}}$; nếu chiếu trước như B thì cột `diachi` đã bị loại bỏ, không thể lọc ở ngoài. Chọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề 2021 (Đề 2) – câu 23']
},
{
  id: 'de-2021-2-24', exam: 'de-2021-2', no: 24, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: $\\text{KHACH}(\\text{MaKhach},\\text{Hoten},\\text{Diachi},\\text{DienThoai})$; $\\text{HOADON}(\\text{SoHD},\\text{NgaylapHD},\\text{Ngayban},\\text{MaKhach})$; $\\text{HANG}(\\text{Mahang},\\text{TenHang},\\text{DonGia},\\text{Donvitinh})$; $\\text{ChitietHD}(\\text{SoHD},\\text{MaHang},\\text{SLBan})$. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu “*Lập danh sách tên các khách hàng đã mua mặt hàng tivi vào ngày 08/03/2020.*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{mahang},\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'B', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{soHD}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})))$' },
    { key: 'C', text: '$\\pi_{\\text{Hoten}}(\\text{Khach}*\\pi_{\\text{maKH},\\text{soHD}}(\\sigma_{\\text{ngaylap}=\\text{‘08/03/2020’}}(\\text{Hoadon}))*\\pi_{\\text{mahang}}(\\sigma_{\\text{tenhang}=\\text{‘tivi’}}(\\text{Hang}*\\text{ChitietHD})$' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc viết tắt `MaKhach` thành `maKH`, `NgaylapHD` thành `ngaylap` (dùng ngày lập hóa đơn); phương án A và C trong ảnh gốc cũng bị thiếu hai dấu ngoặc đóng `))` ở cuối biểu thức.',
  explanation: 'Để kết nối từ mặt hàng `tivi` sang `Hoadon` ngày `08/03/2020` rồi tới `Khach` lấy `Hoten`:\n1. Từ `Hoadon`, lọc `ngaylap = ‘08/03/2020’` và chiếu giữ lại **cả `maKH` lẫn `soHD`** (để nối với `Khach` qua `maKH` và nối với `ChitietHD` qua `soHD`).\n2. Nối `Hang * ChitietHD` qua `Mahang`, lọc `tenhang = ‘tivi’` rồi chiếu lấy **`soHD`** để nối tiếp với kết quả bước 1, cuối cùng chiếu `Hoten` $\\Rightarrow$ **B đúng** (ngoặc đóng mở cân đối).\n- A sai vì bước 1 chỉ chiếu `maKH` (mất `soHD` để nối); C sai vì bước 2 chỉ chiếu `mahang` (mất `soHD` để nối); cả A và C đều thiếu dấu ngoặc đóng.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38', 'Đề 2021 (Đề 2) – câu 24']
},
{
  id: 'de-2021-2-25', exam: 'de-2021-2', no: 25, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'B', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các cột là quan trọng.' },
    { key: 'D', text: 'thứ tự của các hàng là quan trọng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) tr.10 (*Các đặc trưng của quan hệ*): một quan hệ là tập hợp các bộ (các hàng), nên **thứ tự các bộ (các hàng) trong quan hệ là không quan trọng** $\\Rightarrow$ **B đúng**, D sai. (Về lý thuyết mô hình quan hệ chuẩn có tên cột, thứ tự các cột không mang ý nghĩa độc lập; Slide tr.10 nhấn mạnh thứ tự các giá trị theo vị trí *trong một bộ* phải khớp thứ tự cột của lược đồ.)',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Đề 2021 (Đề 2) – câu 25']
},
{
  id: 'de-2021-2-26', exam: 'de-2021-2', no: 26, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối liên kết 1-1 trong mô hình ER sau sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'gv', label: 'GIẢNG VIÊN', x: 155, y: 110, attrs: [
        { label: 'Mã GV', kind: 'key', dx: 0, dy: -58 },
        { label: 'Họ tên', dx: -120, dy: 0 },
        { label: 'Ngày sinh', dx: 0, dy: 58 }
      ] },
      { id: 'khoa', label: 'KHOA', x: 525, y: 110, attrs: [
        { label: 'Mã Khoa', kind: 'key', dx: 0, dy: -58 },
        { label: 'Tên Khoa', dx: 112, dy: 0 }
      ] }
    ],
    rels: [{ id: 'tk', label: 'Làm trưởng khoa', x: 345, y: 110, attrs: [{ label: 'Ngày làmTK', dx: 0, dy: -64 }],
      links: [{ to: 'gv', card: '1', total: false }, { to: 'khoa', card: '1', total: true }] }]
  } },
  options: [
    { key: 'A', text: '`GIANGVIEN`(MaGV, TenGV, NgaySinh, MaK, NgayQL)' },
    { key: 'B', text: '`KHOA`($\\underline{\\text{MaK}}$, TenK, MaGV, NgayQL)' },
    { key: 'C', text: '`GIANGVIEN`($\\underline{\\text{MaGV}}$, TenGV, NgaySinh, MaK)' },
    { key: 'D', text: '`KHOA`($\\underline{\\text{MaK}}$, $\\underline{\\text{MaGV}}$, TenK, NgayQL)' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc viết gọn tên thuộc tính trong các phương án (`MaK`, `TenK`, `TenGV`, `NgayQL`) tương ứng với `Mã Khoa`, `Tên Khoa`, `Họ tên`, `Ngày làmTK` trên sơ đồ.',
  explanation: 'Theo Quy tắc 3 chuyển liên kết `1-1` (Slide Ch.3 P1 tr.21–22): đặt **khóa của thực thể bên phía tùy chọn** và **thuộc tính của liên kết** vào lược đồ của **thực thể bên phía bắt buộc**.\n- Trong sơ đồ, phía `KHOA` nối với `Làm trưởng khoa` bằng **nét đôi** (tham gia toàn bộ / bắt buộc — mỗi khoa phải có trưởng khoa), còn phía `GIẢNG VIÊN` là **nét đơn** (tùy chọn).\n- Vì vậy đưa `MaGV` (khóa ngoại) và `NgayQL` sang lược đồ `KHOA`, khóa chính vẫn chỉ là `MaK` $\\Rightarrow$ **B đúng**.\n- A sai vì đặt vào `GIANGVIEN` và thiếu gạch chân khóa; C sai vì đặt vào `GIANGVIEN` và thiếu `NgayQL`; D sai vì gạch chân cả `MaGV` làm khóa chính kép.',
  sameAs: ['ltcsdl-de3-21'],
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.21–22', 'Đề 2021 (Đề 2) – câu 26']
},
{
  id: 'de-2021-2-27', exam: 'de-2021-2', no: 27, chapter: 'ch3', topic: '1.5',
  stem: 'Hãy chọn từ/cụm từ tương ứng để hoàn thiện khẳng định sau: “Cơ sở dữ liệu quan hệ được biểu diễn … với các cột là thuộc tính và các hàng là tập $n$ giá trị của thực thể”.',
  figure: null,
  options: [
    { key: 'A', text: 'dưới dạng các bảng' },
    { key: 'B', text: 'cấu trúc hình mạng' },
    { key: 'C', text: 'dưới dạng các tệp dữ liệu' },
    { key: 'D', text: 'cấu trúc hình cây' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 tr.24 và Slide Ch.3 P1 tr.8: mô hình CSDL quan hệ biểu diễn dữ liệu **dưới dạng các bảng** (mỗi bảng là một quan hệ gồm các cột là thuộc tính và các dòng/hàng là các bộ $n$ giá trị) $\\Rightarrow$ **A đúng**. B là mô hình mạng, C là hệ tập tin truyền thống, D là mô hình phân cấp.',
  source: ['Slide Ch.1 Tổng quan – tr.24', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.8', 'Đề 2021 (Đề 2) – câu 27']
},
{
  id: 'de-2021-2-28', exam: 'de-2021-2', no: 28, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_X(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ đi một số hàng trong lược đồ $R$ thỏa mãn điều kiện $X$ và giữ lại các hàng không thỏa mãn điều kiện $X$.' },
    { key: 'B', text: 'Loại bỏ đi một số thuộc tính trong lược đồ $R$ có trong $X$ và giữ lại các thuộc tính không có trong danh sách thuộc tính $X$.' },
    { key: 'C', text: 'Loại bỏ đi các hàng trong lược đồ $R$ không thỏa mãn điều kiện $X$ và giữ lại các hàng thỏa mãn điều kiện $X$.' },
    { key: 'D', text: 'Loại bỏ đi các thuộc tính trong lược đồ $R$ không có trong $X$ và giữ lại các thuộc tính được liệt kê trong danh sách thuộc tính $X$.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Các phép toán ĐSQH (P2) tr.19: Phép chiếu của quan hệ lên tập thuộc tính $X$ là **loại bỏ đi một số thuộc tính của lược đồ không có trong $X$ và giữ lại những thuộc tính được liệt kê trong danh sách thuộc tính $X$** $\\Rightarrow$ **D đúng**. A và C nói về các hàng (phép chọn $\\sigma$), còn B nói ngược lại.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19', 'Đề 2021 (Đề 2) – câu 28']
}
);

DB.questions.push(
{
  id: 'de-2021-2-29', exam: 'de-2021-2', no: 29, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: $\\text{BANDOC}(\\text{MaBD}, \\text{TenBD}, \\text{Lop}, \\text{NgayCap})$, $\\text{SACH}(\\text{MaSH}, \\text{TenSach}, \\text{TacGia}, \\text{NhaXuatBan}, \\text{NamXuatBan})$ và $\\text{PHIEUMUON}(\\text{MaBD}, \\text{MaSH}, \\text{Ngaymuon}, \\text{TraSach})$. Trong đó, TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “*Liệt kê những tên sách mà bạn đọc có mã số \'BD1001\' đã mượn của thư viện*”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{TenSach},\\; \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON}*\\text{SACH})}$' },
    { key: 'B', text: '$\\pi_{\\text{TenSach}}(\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON}) * \\text{SACH})$' },
    { key: 'C', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) * \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' },
    { key: 'D', text: '$\\pi_{\\text{TenSach}}(\\text{SACH}) \\cap \\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Lọc các phiếu mượn của bạn đọc `BD1001`: $\\sigma_{\\text{maBD}=\\text{‘BD1001’}}(\\text{PHIEUMUON})$.\n2. Kết nối tự nhiên với `SACH` qua thuộc tính chung `MaSH` để lấy `TenSach`, sau đó mới chiếu $\\pi_{\\text{TenSach}}$ $\\Rightarrow$ **B đúng**.\n- A sai cú pháp phép chiếu (viết dấu `,` và đưa $\\sigma$ xuống chỉ số dưới của $\\pi$).\n- C sai vì chiếu $\\pi_{\\text{TenSach}}(\\text{SACH})$ trước làm mất cột `MaSH` (không nối được đúng sách và kết quả còn dư các cột của `PHIEUMUON`).\n- D sai vì hai quan hệ ở hai vế khác lược đồ nên không áp dụng được phép giao $\\cap$.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24, 38', 'Đề 2021 (Đề 2) – câu 29']
},
{
  id: 'de-2021-2-30', exam: 'de-2021-2', no: 30, chapter: 'ch3', topic: '2.9',
  stem: 'Phép xoá dữ liệu trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Xoá một bộ hay xoá một nhóm các bộ.' },
    { key: 'B', text: 'Xoá một thuộc tính hay xoá một nhóm các thuộc tính.' },
    { key: 'C', text: 'Xoá một CSDL.' },
    { key: 'D', text: 'Xoá một quan hệ hay xoá một nhóm các quan hệ.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 P2 tr.4, 6–7: các phép toán cập nhật dữ liệu (`INSERT`, `DEL`, `CH`) trong mô hình quan hệ thao tác trên **các bộ** của quan hệ; phép xóa (`DEL`, dạng $r = r - t$) thực hiện **xóa một bộ hay một nhóm các bộ** thỏa mãn điều kiện khỏi quan hệ $\\Rightarrow$ **A đúng**. B, C, D thuộc thao tác thay đổi/xóa cấu trúc lược đồ (DDL), không phải phép xóa dữ liệu của đại số quan hệ.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 6–7', 'Đề 2021 (Đề 2) – câu 30']
},
{
  id: 'de-2021-2-31', exam: 'de-2021-2', no: 31, chapter: 'ch4', topic: '3.4',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AD\\to B,\\; AB\\to E,\\; DC\\to G,\\; D\\to C,\\; CG\\to H\\}$. Khẳng định nào sau đây là đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Không dư thừa thuộc tính trong $DC\\to G$' },
    { key: 'B', text: 'Dư thừa thuộc thuộc tính $C$ trong $DC\\to G$' },
    { key: 'C', text: 'Dư thừa thuộc thuộc tính $C$ trong $DC\\to G$' },
    { key: 'D', text: 'Không dư thừa thuộc thuộc tính $C$ trong $DC\\to G$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Phương án B và C trong ảnh gốc giống hệt nhau (và cùng có nội dung đúng) nên không xác định được một chữ cái đáp án duy nhất',
  note: 'Phương án B và C trong ảnh gốc (9.jpg) giống hệt nhau (kể cả lỗi lặp chữ "thuộc thuộc").',
  explanation: 'Kiểm tra thuộc tính dư thừa ở vế trái của $DC \\to G$ (Slide Ch.4 PTH tr.26):\n- Bỏ thử $C$ ở vế trái, tính bao đóng $D^+$ theo $F$:\n  - $X_0 = D$.\n  - Dùng $D \\to C$: $X_1 = CD$.\n  - Dùng $DC \\to G$: $X_2 = CDG$.\n  - Dùng $CG \\to H$: $X_3 = CDGH$.\n- Vì $G \\in D^+$ (hay từ $D \\to C$ và $DC \\to G$ suy ra $D \\to G$), **thuộc tính $C$ dư thừa trong $DC \\to G$** (phủ tối thiểu gồm $AD\\to B, AB\\to E, D\\to G, D\\to C, CG\\to H$).\n- Do **cả B và C đều ghi giống hệt nhau** nội dung đúng này nên không thể chọn duy nhất một phương án.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26', 'Đề 2021 (Đề 2) – câu 31']
},
{
  id: 'de-2021-2-32', exam: 'de-2021-2', no: 32, chapter: 'ch4', topic: '3.1',
  stem: 'Quy tắc nào dưới đây là quy tắc bắc cầu trong hệ tiên đề Armstrong?',
  figure: null,
  options: [
    { key: 'A', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AC \\to BC$' },
    { key: 'B', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AC \\to B$' },
    { key: 'C', text: 'Nếu $A \\to B$ và $B \\to C$ thì $AB \\to C$' },
    { key: 'D', text: 'Nếu $A \\to B$ và $B \\to C$ thì $A \\to C$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.9 (*Hệ tiên đề Armstrong*): luật bắc cầu phát biểu nếu $X \\to Y$ và $Y \\to Z$ thì $X \\to Z$. Áp dụng cho $A, B, C$: **Nếu $A \\to B$ và $B \\to C$ thì $A \\to C$** $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9', 'Đề 2021 (Đề 2) – câu 32']
},
{
  id: 'de-2021-2-33', exam: 'de-2021-2', no: 33, chapter: 'ch4', topic: '3.9',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$, $F= \\{B\\to CD,\\; AB\\to C,\\; C\\to D\\}$. Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính $A$ không dư thừa trong phụ thuộc hàm $AB \\to C$' },
    { key: 'B', text: 'Thuộc tính $A$ dư thừa trong phụ thuộc hàm $AB \\to C$' },
    { key: 'C', text: 'Phụ thuộc hàm dư thừa là $B \\to D$' },
    { key: 'D', text: 'Phủ tối thiểu của $F$ là $F_{tt} = \\{B \\to C,\\; C \\to D\\}$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây là Ví dụ 2 ở Slide Ch.4 Phụ thuộc hàm tr.29:\n1. Tách vế phải: $\\{B\\to C,\\; B\\to D,\\; AB\\to C,\\; C\\to D\\}$.\n2. Kiểm tra thuộc tính thừa ở vế trái $AB \\to C$: bỏ thử $A$ còn $B$, tính $B^+ = \\{B, C, D\\} \\supseteq \\{C\\}$. Suy ra $B \\to C \\in F^+$, tức **thuộc tính $A$ DƯ THỪA trong $AB \\to C$** (**B đúng**, nên khẳng định **A** *"không dư thừa"* là **SAI** $\\Rightarrow$ chọn **A**).\n3. Sau khi rút $AB\\to C$ thành $B\\to C$ và bỏ $B\\to D$ (dư thừa vì suy ra từ $B\\to C, C\\to D$), phủ tối thiểu là $F_{tt} = \\{B\\to C,\\; C\\to D\\}$ (C và D đều đúng).',
  sameAs: ['de-mau-720-26'],
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–29', 'Đề 2021 (Đề 2) – câu 33']
},
{
  id: 'de-2021-2-34', exam: 'de-2021-2', no: 34, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là đúng nhất khi nói về bao đóng của các thuộc tính?',
  figure: null,
  options: [
    { key: 'A', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$ và các thuộc tính vế phải được suy diễn logic từ tập $F$.' },
    { key: 'B', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của $X$, các thuộc tính không xuất hiện trong $F$ và các thuộc tính thuộc vế phải được suy diễn logic từ tập $F$.' },
    { key: 'C', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế trái của các phụ thuộc hàm' },
    { key: 'D', text: 'Bao đóng của $X$ ứng với tập phụ thuộc hàm $F$ là hợp của vế phải của các phụ thuộc hàm.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.13: $X^+ = \\{ A \\in U \\mid X \\to A \\in F^+ \\}$, với nhận xét luôn có $X \\subseteq X^+$. Tức $X^+$ gồm chính $X$ hợp với các thuộc tính vế phải $A$ sao cho $X \\to A$ được suy diễn logic từ $F$ $\\Rightarrow$ **A đúng**.\n- B sai vì thuộc tính không xuất hiện trong $F$ (và không nằm trong $X$) không thể suy diễn từ $X$.\n- C và D sai vì không phụ thuộc vào tập $X$ đang xét.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.13', 'Đề 2021 (Đề 2) – câu 34']
},
{
  id: 'de-2021-2-35', exam: 'de-2021-2', no: 35, chapter: 'ch4', topic: '3.8',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. Các siêu khóa có thể của $R$ gồm:',
  figure: null,
  options: [
    { key: 'A', text: '$BC, BD, BDC$' },
    { key: 'B', text: '$AB, AD, ABD$' },
    { key: 'C', text: '$AC, AD, ACD$' },
    { key: 'D', text: '$AC, BD, ACBD$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: '1. Tìm khóa của $R(A,B,C,D)$ theo TN/TG (Slide Ch.4 PTH tr.42): $TN = \\{A\\}$ (chỉ ở vế trái), $TG = \\{C, D\\}$ ($B$ chỉ ở vế phải nên không có mặt trong khóa).\n   - $A^+ = A \\neq U$.\n   - $(AC)^+ = ABCD = U$ (dùng $AC \\to BD$).\n   - $(AD)^+ = ABCD = U$ (dùng $AD \\to B$, $D \\to C$).\n   Vậy $R$ có hai khóa là $AC$ và $AD$.\n2. Mọi siêu khóa phải chứa ít nhất một khóa (tập 6 siêu khóa là $AC, AD, ABC, ABD, ACD, ABCD$). Chỉ có **C** (`AC, AD, ACD`) mà cả 3 tập đều là siêu khóa $\\Rightarrow$ chọn **C** (loại A vì thiếu $A$; loại B vì $(AB)^+ = AB$; loại D vì $(BD)^+ = BCD$).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30, 41–42', 'Đề 2021 (Đề 2) – câu 35']
},
{
  id: 'de-2021-2-36', exam: 'de-2021-2', no: 36, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Khóa của $R$ gồm?',
  figure: null,
  options: [
    { key: 'A', text: '$BC$' },
    { key: 'B', text: '$CD$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tìm tất cả các khóa TN/TG (Slide Ch.4 PTH tr.42):\n- Tập nguồn $TN = \\{C\\}$ ($C$ chỉ ở vế trái).\n- Tập trung gian $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải nên không thuộc khóa).\n- Tính $C^+ = AC \\neq ABCD$. Thử từng tập con của $TG$:\n  - $(BC)^+ = BCAD = ABCD$ (dùng $C \\to A$, $B \\to AD$).\n  - $(CD)^+ = CDAB = ABCD$ (dùng $C \\to A$, $D \\to B$, $B \\to A$).\nKhông có tập con thực sự nào của $BC$ hay $CD$ có bao đóng bằng $U$. Vậy $R$ có hai khóa là $BC$ và $CD$ $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.41–42', 'Đề 2021 (Đề 2) – câu 36']
},
{
  id: 'de-2021-2-37', exam: 'de-2021-2', no: 37, chapter: 'ch4', topic: '3.1',
  stem: 'Nếu $A \\to BC$ thì:',
  figure: null,
  options: [
    { key: 'A', text: '$A \\to C$ và $A \\to B$' },
    { key: 'B', text: '$AC \\to B$ và $A \\to C$' },
    { key: 'C', text: 'Cả hai phương án đều đúng' },
    { key: 'D', text: 'Cả hai phương án đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng các luật suy diễn Armstrong (Slide Ch.4 PTH tr.9–10):\n- Từ $A \\to BC$, dùng **luật tách** thu được cả $A \\to C$ và $A \\to B$ $\\Rightarrow$ **A đúng**.\n- Từ $A \\to B$, dùng **luật bổ sung** thêm $C$ được $AC \\to BC$, rồi tách ra được $AC \\to B$ (cùng với $A \\to C$ ở trên) $\\Rightarrow$ **B cũng đúng**.\nVì cả A và B đều suy diễn được từ $A \\to BC$ nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10', 'Đề 2021 (Đề 2) – câu 37']
},
{
  id: 'de-2021-2-38', exam: 'de-2021-2', no: 38, chapter: 'ch4', topic: '3.3',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC \\to E,\\; AC \\to D\\}$. Khóa của lược đồ quan hệ $R(U,F)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$BH$' },
    { key: 'B', text: '$AD$' },
    { key: 'C', text: '$BD$' },
    { key: 'D', text: '$AB$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán TN/TG (Slide Ch.4 PTH tr.35, 42):\n- $A$ và $B$ chỉ xuất hiện ở vế trái (không xuất hiện ở vế phải của bất kỳ PTH nào trong $F$), nên $TN = \\{A, B\\}$ bắt buộc có mặt trong mọi khóa.\n- Tính bao đóng $(AB)^+$:\n  - $X_0 = AB$\n  - Dùng $AB \\to DG$: $X_1 = ABDG$\n  - Dùng $BG \\to H$: $X_2 = ABDGH$\n  - Dùng $BH \\to C$: $X_3 = ABCDGH$\n  - Dùng $HC \\to E$: $X_4 = ABCDEGH = U$\n- Vì $(TN)^+ = (AB)^+ = U$ nên **$AB$ là khóa duy nhất** của $R$ $\\Rightarrow$ chọn **D**. (Kiểm tra lại: $(BH)^+ = BCEH$, $(AD)^+ = AD$, $(BD)^+ = BD$ đều không bằng $U$.)',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.35, 41–42', 'Đề 2021 (Đề 2) – câu 38']
},
{
  id: 'de-2021-2-39', exam: 'de-2021-2', no: 39, chapter: 'ch4', topic: '3.2',
  stem: 'Có thể kết luận quan hệ $R$ là chuẩn BCNF khi:',
  figure: null,
  options: [
    { key: 'A', text: 'Tất cả các khóa của $R$ đều chỉ có một thuộc tính.' },
    { key: 'B', text: 'Tất cả các phụ thuộc hàm của $R$ đều có vế trái là khóa.' },
    { key: 'C', text: 'Tất cả các thuộc tính của $R$ đều là thuộc tính khóa.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nhận xét ở Slide Ch.4 Chuẩn hóa CSDL tr.31 (*Thuật toán kiểm tra dạng chuẩn BCNF*): **"mọi PTH đều có vế trái là khóa thì đạt chuẩn BCNF"** $\\Rightarrow$ **B đúng**.\n- A sai vì khóa 1 thuộc tính chỉ bảo đảm đạt **2NF** (Slide tr.15), vẫn có thể có phụ thuộc bắc cầu.\n- C sai vì mọi thuộc tính đều là thuộc tính khóa chỉ bảo đảm đạt **3NF** (Slide tr.23), vẫn có thể vi phạm BCNF (khi tồn tại PTH có vế trái không phải siêu khóa mà vế phải là thuộc tính khóa).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 29, 31', 'Đề 2021 (Đề 2) – câu 39']
}
);

DB.questions.push(
{
  id: 'de-2021-2-40', exam: 'de-2021-2', no: 40, chapter: 'ch4', topic: '3.6',
  stem: 'Cho lược đồ quan hệ $R(A,B,C)$ và $F=\\{AB\\to C,\\; C\\to A\\}$. Phép tách $D=\\{R_1,R_2\\}$ tách $R$ thành hai lược đồ $R_1\\{B,C\\}$ và $R_2\\{A,C\\}$. Phép tách $D$ là:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép tách bảo toàn phụ thuộc hàm.' },
    { key: 'B', text: 'Phép tách không bảo toàn phụ thuộc hàm.' },
    { key: 'C', text: 'Phép tách kết nối mất mát thông tin.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Đây chính là Ví dụ trong Slide Ch.4 Chuẩn hóa CSDL tr.44:\n1. Chiếu $F$ lên $R_1\\{B,C\\}$: không có PTH không tầm thường nào ($B^+=B$, $C^+=AC$) $\\Rightarrow \\Pi_{R_1}(F) = \\emptyset$. Chiếu lên $R_2\\{A,C\\}$: $\\Pi_{R_2}(F) = \\{C \\to A\\}$.\n2. Hợp $G = \\{C \\to A\\}$. Tính $(AB)^+_G = AB$ (không suy ra được $C$), tức $AB \\to C \\notin G^+$. Vậy **$D$ là phép tách không bảo toàn phụ thuộc hàm** (**B đúng**, A sai).\n3. Kiểm tra bảng $a_j/b_{ij}$ (Slide tr.47): $R_1 = (b_{11}, a_2, a_3)$, $R_2 = (a_1, b_{22}, a_3)$; dùng $C \\to A$ (hai hàng cùng bằng $a_3$ ở cột $C$) đổi $b_{11} \\to a_1$, hàng $R_1$ thành $(a_1, a_2, a_3)$ toàn $a_j$ $\\Rightarrow$ phép tách **không mất mát thông tin** (C sai).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.43–47', 'Đề 2021 (Đề 2) – câu 40']
},
{
  id: 'de-2021-2-41', exam: 'de-2021-2', no: 41, chapter: 'ch4', topic: '3.5',
  stem: 'Cho lược đồ quan hệ $R(U,F)$ với $U=\\{ABCDEGH\\}$ và $F=\\{AB\\to DG,\\; BG\\to H,\\; BH\\to C,\\; HC \\to E,\\; AC \\to D\\}$. Bao đóng của $(BG)$ là:',
  figure: null,
  options: [
    { key: 'A', text: '$ABCEG$' },
    { key: 'B', text: '$BCEGH$' },
    { key: 'C', text: '$ABCEH$' },
    { key: 'D', text: '$BCDEH$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán tính bao đóng $(BG)^+$ (Slide Ch.4 Phụ thuộc hàm tr.16):\n- $X_0 = \\{B, G\\}$.\n- Dùng $BG \\to H$: $X_1 = \\{B, G, H\\}$.\n- Dùng $BH \\to C$: $X_2 = \\{B, C, G, H\\}$.\n- Dùng $HC \\to E$: $X_3 = \\{B, C, E, G, H\\}$.\n- Không còn PTH nào trong $F$ có vế trái nằm trong $\\{B, C, E, G, H\\}$ ($AB$ và $AC$ đều cần $A$). Vậy $(BG)^+ = BCEGH \\Rightarrow$ chọn **B**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.16', 'Đề 2021 (Đề 2) – câu 41']
},
{
  id: 'de-2021-2-42', exam: 'de-2021-2', no: 42, chapter: 'ch4', topic: '1.8',
  stem: 'Thiết kế CSDL là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Là quá trình đưa các quan hệ từ dạng chuẩn cao sang dạng chuẩn thấp nhằm tối ưu việc khai thác dữ liệu.' },
    { key: 'B', text: 'Là quá trình chia nhỏ các quan hệ để dễ lưu trữ và tìm kiếm.' },
    { key: 'C', text: 'Là quá trình mô hình hóa nhằm chuyển đổi các đối tượng từ thế giới thực sang các quan hệ trong hệ thống cơ sở dữ liệu để đáp ứng các yêu cầu lưu trữ và khai thác dữ liệu' },
    { key: 'D', text: 'Là quá trình lựa chọn tập lược đồ CSDL phù hợp nhằm tối ưu việc lưu trữ và khai thác dữ liệu.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL tr.3 (*Giới thiệu*): **"Thiết kế CSDL: chọn được tập lược đồ phù hợp"** (xem xét tính "tốt" ở cả mức logic và mức vật lý nhằm tối ưu lưu trữ, tránh dư thừa/dị thường và tối ưu khai thác — Slide Ch.1 tr.9) $\\Rightarrow$ **D đúng nhất**.\n- A sai ngược chiều chuẩn hóa; B quá phiến diện (chỉ nói chia nhỏ); C mới mô tả bước mô hình hóa/chuyển sang quan hệ chứ chưa phản ánh định nghĩa lựa chọn tập lược đồ phù hợp của thiết kế CSDL.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.3', 'Slide Ch.1 Tổng quan – tr.9', 'Đề 2021 (Đề 2) – câu 42']
},
{
  id: 'de-2021-2-43', exam: 'de-2021-2', no: 43, chapter: 'ch4', topic: '3.4',
  stem: 'Cho $F=\\{B\\to D,\\; AC\\to B,\\; A\\to C,\\; E\\to A,\\; AE \\to D\\}$. Khẳng định nào sau đây là đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: '$AC \\to B$ là dư thừa' },
    { key: 'B', text: '$A \\to C$ là dư thừa' },
    { key: 'C', text: '$AE \\to D$ là dư thừa' },
    { key: 'D', text: '$B \\to D$ là dư thừa' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng bước kiểm tra PTH dư thừa (Slide Ch.4 PTH tr.27): PTH $X \\to Y \\in F$ là dư thừa nếu $X \\to Y$ thuộc $(F \\setminus \\{X \\to Y\\})^+$.\n- Xét $AE \\to D$: bỏ $AE \\to D$ khỏi $F$, trên $F\' = \\{B\\to D,\\; AC\\to B,\\; A\\to C,\\; E\\to A\\}$ tính $(AE)^+_{F\'}$:\n  - $X_0 = AE \\xrightarrow{A\\to C} ACE \\xrightarrow{AC\\to B} ABCE \\xrightarrow{B\\to D} ABCDE \\supseteq \\{D\\}$.\n  Vậy **$AE \\to D$ là PTH dư thừa** $\\Rightarrow$ **C đúng**.\n- Kiểm tra 3 phương án còn lại: $(AC)^+_{F\\setminus\\{AC\\to B\\}} = AC$ (chỉ dư thuộc tính $C$ ở vế trái chứ cả PTH $AC \\to B$ không dư thừa — loại A); $A^+_{F\\setminus\\{A\\to C\\}} = A$ (loại B); $B^+_{F\\setminus\\{B\\to D\\}} = B$ (loại D).',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.26–27', 'Đề 2021 (Đề 2) – câu 43']
},
{
  id: 'de-2021-2-44', exam: 'de-2021-2', no: 44, chapter: 'ch4', topic: '3.11',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D)$ và tập các phụ thuộc hàm $F=\\{AC\\to BD,\\; D\\to C,\\; AD\\to B\\}$. $R$ có thể được tách thành các lược đồ đạt chuẩn BCNF như sau:',
  figure: null,
  options: [
    { key: 'A', text: '$R_1=\\{CDA\\},\\; R_2=\\{BD\\}$' },
    { key: 'B', text: '$R_1=\\{CA\\},\\; R_2=\\{ABD\\}$' },
    { key: 'C', text: '$R_1=\\{CD\\},\\; R_2=\\{ABD\\}$' },
    { key: 'D', text: '$R_1=\\{AD\\},\\; R_2=\\{ABC\\}$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán phân rã BCNF (Slide Ch.4 Chuẩn hóa CSDL tr.50):\n1. Tìm khóa của $R(A,B,C,D)$: $TN = \\{A\\}$, $TG = \\{C, D\\}$ $\\Rightarrow$ hai khóa là $AC$ và $AD$ ($R$ chỉ đạt 3NF, vi phạm BCNF ở $D \\to C$ vì $D^+ = CD \\neq ABCD$).\n2. Tách theo PTH vi phạm $D \\to C$: đặt $R_1 = \\{C, D\\}$ và $R_2 = R \\setminus \\{C\\} = \\{A, B, D\\}$.\n3. Kiểm tra từng lược đồ con:\n   - $R_1\\{CD\\}$ có PTH $D \\to C$ với vế trái $D$ là khóa $\\Rightarrow$ đạt BCNF.\n   - $R_2\\{ABD\\}$ có PTH $AD \\to B$ với vế trái $AD$ là khóa $\\Rightarrow$ đạt BCNF.\n   - $R_1 \\cap R_2 = D \\to R_1$ nên phép tách không mất mát thông tin $\\Rightarrow$ chọn **C**.\n- A, B, D đều mất mát thông tin khi kết nối lại (và $R_1=\\{CDA\\}$ ở A vẫn vi phạm $D \\to C$).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.45–50', 'Đề 2021 (Đề 2) – câu 44']
},
{
  id: 'de-2021-2-45', exam: 'de-2021-2', no: 45, chapter: 'ch4', topic: '1.8',
  stem: 'Một quan hệ dạng chuẩn 1NF có thể chuyển đổi về quan hệ 3NF bằng cách:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá.' },
    { key: 'B', text: 'Loại bỏ các phụ thuộc không đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' },
    { key: 'C', text: 'Loại bỏ các phụ thuộc đầy đủ vào khoá và phụ thuộc bắc cầu vào khoá.' },
    { key: 'D', text: 'Loại bỏ các phụ thuộc bắc cầu vào khoá.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.13, 18, 21, 25:\n- Bước 1 (**1NF $\\to$ 2NF**): loại bỏ các **phụ thuộc không đầy đủ (bộ phận) vào khóa** của các thuộc tính không khóa.\n- Bước 2 (**2NF $\\to$ 3NF**): loại bỏ tiếp các **phụ thuộc bắc cầu vào khóa** của các thuộc tính không khóa.\nDo đó chuyển từ 1NF về 3NF cần thực hiện cả hai việc này $\\Rightarrow$ chọn **B** (A chỉ dừng ở 2NF; D là bước từ 2NF lên 3NF; C sai vì giữ lại phụ thuộc đầy đủ).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 18, 21, 25', 'Đề 2021 (Đề 2) – câu 45']
},
{
  id: 'de-2021-2-46', exam: 'de-2021-2', no: 46, chapter: 'ch4', topic: '3.10',
  stem: 'Cho lược đồ quan hệ $R(A,B,C,D,E)$ và tập các phụ thuộc hàm $F=\\{C\\to A,\\; B\\to AD,\\; D\\to B\\}$. Dạng chuẩn cao nhất của $R$ là?',
  figure: null,
  options: [
    { key: 'A', text: '1NF' },
    { key: 'B', text: 'BCNF' },
    { key: 'C', text: '2NF' },
    { key: 'D', text: '3NF' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng thuật toán xác định dạng chuẩn cao nhất (Slide Ch.4 Chuẩn hóa CSDL tr.15, 37):\n1. Tìm khóa của $R(A,B,C,D,E)$: $E$ không xuất hiện trong $F$ và $C$ chỉ ở vế trái $\\Rightarrow TN = \\{C, E\\}$, $TG = \\{B, D\\}$ ($A$ chỉ ở vế phải).\n   - $(CE)^+ = ACE \\neq U$.\n   - $(BCE)^+ = ABCDE = U$ và $(CDE)^+ = ABCDE = U$.\n   Vậy $R$ có hai khóa là $BCE$ và $CDE$. Thuộc tính khóa: $B, C, D, E$; thuộc tính không khóa: $A$.\n2. Kiểm tra 2NF: xét tập con thực sự $S = \\{C\\}$ của khóa $BCE$ (hoặc $CDE$), có $C^+ = \\{A, C\\}$ chứa thuộc tính không khóa $A$ (tức $A$ phụ thuộc bộ phận vào khóa). Do đó $R$ vi phạm 2NF và chỉ đạt **1NF** $\\Rightarrow$ chọn **A**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.13, 15, 37', 'Đề 2021 (Đề 2) – câu 46']
},
{
  id: 'de-2021-2-47', exam: 'de-2021-2', no: 47, chapter: 'ch4', topic: '1.8',
  stem: 'Chọn khẳng định đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc toàn vẹn là những điều kiện bất biến mà tất cả các bộ của các quan hệ có liên quan trong CSDL đều phải thỏa mãn ở mọi thời điểm.' },
    { key: 'B', text: 'Trong một CSDL, ràng buộc toàn vẹn được xem như là một công cụ để diễn đạt ngữ nghĩa của CSDL.' },
    { key: 'C', text: 'Công việc kiểm tra ràng buộc toàn vẹn thường được tiến hành tại thời điểm cập nhật dữ liệu.' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Cả ba phát biểu A, B, C đều trích nguyên văn từ mục *III. Ràng buộc toàn vẹn quan hệ – Khái niệm* (Slide Ch.4 Tổng quan TKCSDL tr.13): RBTV là điều kiện bất biến mọi bộ liên quan phải thỏa mãn ở mọi thời điểm, là công cụ diễn đạt ngữ nghĩa CSDL và được kiểm tra vào thời điểm cập nhật dữ liệu (thêm, sửa, xóa). Chọn **D**.',
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.13', 'Đề 2021 (Đề 2) – câu 47']
},
{
  id: 'de-2021-2-48', exam: 'de-2021-2', no: 48, chapter: 'ch4', topic: '1.8',
  stem: 'Khẳng định nào sau đây là đúng nhất về chuẩn hóa dữ liệu?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuẩn hoá dữ liệu là quá trình thực hiện các phép lưu trữ nhằm đảm bảo tính toàn vẹn của dữ liệu.' },
    { key: 'B', text: 'Chuẩn hoá dữ liệu là quá trình tách các lược đồ quan hệ không làm tổn thất thông tin.' },
    { key: 'C', text: 'Chuẩn hoá dữ liệu là quá trình tách các quan hệ từ dạng chuẩn cao về dạng chuẩn thấp.' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Chuẩn hóa CSDL tr.3 & tr.38: chuẩn hóa quan hệ là việc phân rã (tách) một lược đồ quan hệ từ dạng chuẩn thấp lên dạng chuẩn cao hơn sao cho vẫn bảo toàn phụ thuộc và **không mất mát dữ liệu (không tổn thất thông tin)** $\\Rightarrow$ **B đúng**.\n- A sai vì chuẩn hóa là quá trình phân tích/phân rã lược đồ chứ không phải thực hiện phép lưu trữ.\n- C sai ngược chiều (đưa từ dạng chuẩn thấp lên cao, không phải từ cao về thấp).',
  sameAs: ['k16-ca1-47'],
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.3, 38', 'Đề 2021 (Đề 2) – câu 48']
},
{
  id: 'de-2021-2-49', exam: 'de-2021-2', no: 49, chapter: 'ch4', topic: '1.7',
  stem: 'Cho $R(U,F)$. Tập $K \\subseteq U$ là siêu khóa của $R$ khi:',
  figure: null,
  options: [
    { key: 'A', text: '$K$ là khóa của $R$.' },
    { key: 'B', text: '$K^+ = U$ hay $K \\to U$' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.4 Phụ thuộc hàm tr.30 (*Định nghĩa khóa thông qua PTH*):\n- Tập $K \\subseteq U$ là **siêu khóa** của $R$ nếu $K^+ = U$ hay $K \\to U$ (**B đúng**).\n- Mọi **khóa** của $R$ đều là siêu khóa nhỏ nhất (thỏa điều kiện $K \\to U$ và tính tối tiểu), nên nếu $K$ là khóa của $R$ thì chắc chắn $K$ là siêu khóa của $R$ (**A đúng**).\nDo cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.30', 'Đề 2021 (Đề 2) – câu 49']
},
{
  id: 'de-2021-2-50', exam: 'de-2021-2', no: 50, chapter: 'ch4', topic: '3.4',
  stem: 'Phụ thuộc hàm nào sau đây là phụ thuộc hàm đầy đủ?',
  figure: null,
  options: [
    { key: 'A', text: '$\\text{Mã sinh viên}, \\text{Mã môn} \\to \\text{Tên môn}, \\text{Đơn vị học trình}$' },
    { key: 'B', text: '$\\text{Mã sinh viên}, \\text{Mã môn} \\to \\text{Họ tên sinh viên}$' },
    { key: 'C', text: '$\\text{Mã sinh viên}, \\text{Mã lớp} \\to \\text{Họ tên sinh viên}$' },
    { key: 'D', text: '$\\text{Mã sinh viên}, \\text{Mã môn} \\to \\text{Điểm thi}$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo định nghĩa (Slide Ch.4 Chuẩn hóa tr.6), $X \\to Y$ là **phụ thuộc hàm đầy đủ** nếu không tồn tại tập con thực sự $X\' \\subset X$ sao cho $X\' \\to Y$.\n- **D đúng**: muốn xác định `Điểm thi` phải có đủ cả `Mã sinh viên` lẫn `Mã môn` (bỏ một trong hai đều không xác định được).\n- A sai vì chỉ cần `Mã môn` đã xác định `Tên môn, Đơn vị học trình` (thừa `Mã sinh viên`).\n- B và C sai vì chỉ cần `Mã sinh viên` đã xác định `Họ tên sinh viên` (thừa `Mã môn` ở B và `Mã lớp` ở C).',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.6', 'Đề 2021 (Đề 2) – câu 50']
}
);
