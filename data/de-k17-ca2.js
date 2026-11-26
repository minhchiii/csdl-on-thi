/* Đề KTHP 2021–2022 (K17) – Bộ 2 (Câu 4–26) – nguồn: tai-lieu/Đề k17/Đề ca 2/ & tai-lieu-text/de/k17-ca2.md */
DB.questions.push(
{
  id: 'k17-ca2-04', exam: 'k17-ca2', no: 4, chapter: 'ch1', topic: '1.1',
  stem: 'Chọn câu khẳng định đúng nhất.',
  figure: null,
  options: [
    { key: 'A', text: 'Cấu trúc lưu trữ dữ liệu và các chương trình ứng dụng trên các hệ CSDL hoàn toàn độc lập và không phụ thuộc lẫn nhau.' },
    { key: 'B', text: 'Cấu trúc lưu trữ dữ liệu và các hệ chương trình ứng dụng trên các hệ CSDL phụ thuộc lẫn nhau.' },
    { key: 'C', text: 'Khi thay đổi cấu trúc lưu trữ và chiến lược truy nhập dữ liệu sẽ kéo theo sự thay đổi nội dung các chương trình ứng dụng và ngược lại.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.14 (*Các tiêu chuẩn của CSDL – Tính độc lập*): một CSDL phục vụ nhiều mục đích khai thác khác nhau nên **dữ liệu độc lập với ứng dụng**, không phụ thuộc vào bài toán cụ thể, phương tiện lưu trữ và xử lý.\n- Nhờ tính độc lập dữ liệu (đặc biệt là độc lập dữ liệu vật lý trong kiến trúc 3 mức), khi thay đổi cấu trúc lưu trữ hay chiến lược truy nhập dữ liệu ở mức trong không làm ảnh hưởng đến chương trình ứng dụng (loại B, C, D).\nChọn **A**.',
  source: ['Slide Ch.1 Tổng quan – tr.14']
},
{
  id: 'k17-ca2-05', exam: 'k17-ca2', no: 5, chapter: 'ch1', topic: '1.1',
  stem: 'An toàn dữ liệu nhằm mục đích gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Ngăn chặn các truy nhập trái phép, sai quy định từ trong ra hoặc từ ngoài vào.' },
    { key: 'B', text: 'Thống nhất các tiêu chuẩn, thủ tục, các biện pháp bảo vệ và an toàn dữ liệu.' },
    { key: 'C', text: 'Dễ dàng cho công việc bảo trì dữ liệu.' },
    { key: 'D', text: 'Đảm bảo tính nhất quán và toàn vẹn dữ liệu.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.14 (*Các tiêu chuẩn của CSDL – Tính an toàn và bảo mật*): CSDL cần được bảo vệ an toàn, **ngăn được những truy xuất không được phép** (từ bên trong ra hoặc từ bên ngoài vào) và khôi phục được khi có sự cố.\n- B là hoạt động chuẩn hóa quy trình bảo vệ; C là việc bảo trì; D nói về tính nhất quán và toàn vẹn (một tiêu chuẩn khác trên slide tr.14). Chọn **A**.',
  source: ['Slide Ch.1 Tổng quan – tr.14']
},
{
  id: 'k17-ca2-06', exam: 'k17-ca2', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính lưu trữ là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' },
    { key: 'B', text: 'Thuộc tính có thể nhận một hoặc vài giá trị cho một thực thể.' },
    { key: 'C', text: 'Thuộc tính mà giá trị của nó được tính toán thông qua các thuộc tính khác.' },
    { key: 'D', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.10–11:\n- **Thuộc tính lưu trữ**: là thuộc tính mà giá trị của nó **phải được nhập vào khi cài đặt CSDL** (nhập từ bàn phím, như `Ngày_sinh`, `Hệ_số_lương`) $\\Rightarrow$ **A đúng**.\n- B là *thuộc tính đa trị*; C là *thuộc tính suy dẫn* (tính từ các thuộc tính khác, elip nét đứt); D là *thuộc tính đơn trị*.',
  source: ['Slide Ch.2 Mô hình ER – tr.10–11']
},
{
  id: 'k17-ca2-07', exam: 'k17-ca2', no: 7, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả: "Một nhân viên có thể có một người giám sát, người đó cũng là nhân viên. Một nhân viên có thể giám sát nhiều người". Mối liên kết được mô tả là mối liên kết?',
  figure: null,
  options: [
    { key: 'A', text: 'Đệ qui.' },
    { key: 'B', text: '1-1.' },
    { key: 'C', text: 'm-n.' },
    { key: 'D', text: 'Cả ba phương án trên đều sai' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.19 (*Liên kết đệ qui*): khi **cùng một kiểu thực thể** (`NHÂN VIÊN`) tham gia vào liên kết với hai vai trò khác nhau (người giám sát và người được giám sát), đó là **liên kết đệ qui** (bậc 1) $\\Rightarrow$ **A đúng**.\n- Về bản số, 1 người giám sát nhiều nhân viên và 1 nhân viên có tối đa 1 người giám sát là quan hệ `1-n`, nên B (`1-1`) và C (`m-n`) đều sai.',
  source: ['Slide Ch.2 Mô hình ER – tr.19–20']
},
{
  id: 'k17-ca2-08', exam: 'k17-ca2', no: 8, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc từng phần trong kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 205, y: 100, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô', x: 455, y: 48, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 455, y: 152, attrs: [{ label: 'Trọng tải', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 335, y: 100, kind: null, parent: 'pt', total: false, children: ['oto', 'xt'] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 205, y: 100, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô', x: 455, y: 48, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 455, y: 152, attrs: [{ label: 'Trọng tải', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 335, y: 100, kind: null, parent: 'pt', total: false, children: ['oto', 'xt'] }],
      notes: [{ text: '(2 nhánh con vẽ nét kép/đậm)', x: 455, y: 205 }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 205, y: 100, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô', x: 455, y: 48, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 455, y: 152, attrs: [{ label: 'Trọng tải', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 335, y: 100, kind: null, parent: 'pt', total: true, children: ['oto', 'xt'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'pt', label: 'PHƯƠNG TIỆN GT', x: 205, y: 100, attrs: [
          { label: 'Giá', dx: -135, dy: -46 },
          { label: 'Mã PT', dx: -135, dy: 46 }
        ] },
        { id: 'oto', label: 'Ô tô', x: 455, y: 48, attrs: [{ label: 'Tốc độ tối đa', dx: 135, dy: 0 }] },
        { id: 'xt', label: 'Xe tải', x: 455, y: 152, attrs: [{ label: 'Trọng tải', dx: 135, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 335, y: 100, kind: null, parent: 'pt', total: true, children: ['oto', 'xt'] }],
      notes: [{ text: '(2 nhánh con vẽ nét kép/đậm)', x: 455, y: 205 }]
    } } }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  note: 'Trong ảnh chụp độ phân giải thấp không thấy chữ (`d`/`o`) bên trong vòng tròn chuyên biệt hóa và không thấy rõ gạch chân dưới `Mã PT` ở cả 4 phương án; các nét đậm ở `PHƯƠNG TIỆN GT – vòng tròn` (C, D) và trên hai nhánh lớp con (B, D) trên ảnh mờ tương ứng với đường kép/đậm để phân biệt với đường đơn ở (A).',
  explanation: 'Đọc ký hiệu chuyên biệt hóa trong mô hình EER:\n1. **Ràng buộc từng phần (*partial*)** trong kiểu cha — cho phép một thực thể lớp cha không thuộc lớp con nào — được vẽ bằng **đường nét đơn** nối từ kiểu cha `PHƯƠNG TIỆN GT` tới vòng tròn chuyên biệt hóa $\\Rightarrow$ loại **C** và **D** (vẽ nét kép/đậm là *toàn phần*).\n2. Các nhánh từ vòng tròn xuống các kiểu thực thể con (`Ô tô`, `Xe tải`) kèm ký hiệu tập con $\\subset$ luôn là **nét đơn** $\\Rightarrow$ loại **B** (vẽ nét kép/đậm hai nhánh con).\nDù ảnh chụp không hiện rõ chữ `d`/`o` trong vòng tròn, xét trên 4 tổ hợp nét đường nối, chỉ có **A** đúng ký hiệu ràng buộc từng phần.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca2-09', exam: 'k17-ca2', no: 9, chapter: 'ch2', topic: '2.4',
  stem: 'Mô hình thực thể liên kết (ER) nào biểu diễn chính xác mô tả sau: "Mỗi nhân viên của công ty có một mã số nhân viên duy nhất, mã số nhân viên xác định họ tên của nhân viên. Những người [...] sống phụ thuộc vào nhân viên được hưởng bảo hiểm theo nhân viên. Với mỗi người phụ thuộc, công ty quản lý những thông tin sau: họ tên, giới tính và mối quan hệ với nhân viên (là con hoặc [...] bố, mẹ,...)"?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 115, attrs: [
          { label: 'Họ tên', dx: -115, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -68, dy: -46 }, { label: 'Tên', dx: -68, dy: 46 }] },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'tn', label: 'THÂN NHÂN', x: 525, y: 115, weak: true, attrs: [
          { label: 'Tên TN', dx: 0, dy: -64 },
          { label: 'Giới tính', dx: -55, dy: 64 },
          { label: 'Quan hệ', dx: 60, dy: 64 }
        ] }
      ],
      rels: [{ id: 'co', label: 'Có', x: 345, y: 115, ident: false, links: [{ to: 'nv', card: '1', total: false }, { to: 'tn', card: 'n', total: true }] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 115, attrs: [
          { label: 'Họ tên', dx: -115, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -68, dy: -46 }, { label: 'Tên', dx: -68, dy: 46 }] },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'tn', label: 'THÂN NHÂN', x: 525, y: 115, weak: false, attrs: [
          { label: 'Tên TN', kind: 'key', dx: 0, dy: -64 },
          { label: 'Giới tính', dx: 0, dy: 64 }
        ] }
      ],
      rels: [{ id: 'co', label: 'Có', x: 345, y: 115, ident: false, attrs: [{ label: 'Quan hệ', dx: 0, dy: -66 }],
        links: [{ to: 'nv', card: '1', total: false }, { to: 'tn', card: 'n', total: true }] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 115, attrs: [
          { label: 'Họ tên', dx: -115, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -68, dy: -46 }, { label: 'Tên', dx: -68, dy: 46 }] },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'tn', label: 'THÂN NHÂN', x: 525, y: 115, weak: true, attrs: [
          { label: 'Tên TN', dx: 0, dy: -64 },
          { label: 'Giới tính', dx: 0, dy: 64 }
        ] }
      ],
      rels: [{ id: 'co', label: 'Có', x: 345, y: 115, ident: true, attrs: [{ label: 'Quan hệ', dx: 0, dy: -66 }],
        links: [{ to: 'nv', card: '1', total: false }, { to: 'tn', card: 'n', total: true }] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 200, y: 115, attrs: [
          { label: 'Họ tên', dx: -115, dy: 0, side: 'left', parts: [{ label: 'Họ', dx: -68, dy: -46 }, { label: 'Tên', dx: -68, dy: 46 }] },
          { label: 'Mã NV', kind: 'key', dx: 0, dy: 64 }
        ] },
        { id: 'tn', label: 'THÂN NHÂN', x: 525, y: 115, weak: true, attrs: [
          { label: 'Tên TN', dx: 0, dy: -64 },
          { label: 'Giới tính', dx: -55, dy: 64 },
          { label: 'Quan hệ', dx: 60, dy: 64 }
        ] }
      ],
      rels: [{ id: 'co', label: 'Có', x: 345, y: 115, ident: true, links: [{ to: 'nv', card: '1', total: false }, { to: 'tn', card: 'n', total: true }] }]
    } } }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Mép phải dòng 1–2 của đề bị cắt mất một từ sau "Những người" (thân/phụ thuộc) và sau "là con hoặc" (vợ/chồng), không làm sai nghĩa bài toán. Trên ảnh nhỏ/mờ, viền đậm của hình thoi `Có` (C, D), hình chữ nhật `THÂN NHÂN` (A, C, D) và đường nối `Có – THÂN NHÂN` tương ứng với nét đôi; ở (A), (C), (D) không thấy rõ gạch chân nét đứt dưới `Tên TN` như ký hiệu khóa bộ phận (trong khi ở (B) `Tên TN` được gạch chân liền như khóa thực thể mạnh).',
  explanation: 'Phân tích theo Slide Ch.2 Mô hình ER – tr.5–6, 17, 22 và Slide Ch.3 P1 – tr.20:\n1. `THÂN NHÂN` sống phụ thuộc vào `NHÂN VIÊN` nên là **thực thể yếu** (hình chữ nhật nét đôi, tham gia toàn phần nét đôi) và liên kết sở hữu `Có` phải là **hình thoi nét đôi** $\\Rightarrow$ loại **A** và **B** (hình thoi `Có` nét đơn; riêng **B** còn vẽ `THÂN NHÂN` là thực thể mạnh).\n2. Đề bài nêu rõ *"Với mỗi người phụ thuộc, công ty quản lý những thông tin sau: họ tên, giới tính và mối quan hệ với nhân viên"* (khớp với sơ đồ mẫu Slide Ch.3 P1 tr.20), nên cả `Tên TN`, `Giới tính` và `Quan hệ` đều là thuộc tính gắn vào thực thể `THÂN NHÂN` $\\Rightarrow$ loại **C** (gắn `Quan hệ` lên liên kết `Có`).\nVậy **D** biểu diễn chính xác nhất.',
  source: ['Slide Ch.2 Mô hình ER – tr.5–6, 17, 22', 'Slide Ch.3 Mô hình quan hệ (P1) – tr.20']
},
{
  id: 'k17-ca2-10', exam: 'k17-ca2', no: 10, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết đệ quy là:',
  figure: null,
  options: [
    { key: 'A', text: 'liên kết trong đó cùng một kiểu thực thể có thể tham gia liên kết với nhiều vai trò khác nhau.' },
    { key: 'B', text: 'liên kết có bậc bằng 1.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.18–19:\n- **A đúng**: liên kết đệ quy là liên kết trong đó cùng một kiểu thực thể tham gia liên kết với nhiều vai trò khác nhau (VD: `NHÂN VIÊN` giám sát `NHÂN VIÊN`).\n- **B đúng**: bậc của liên kết là số kiểu thực thể tham gia vào liên kết (tr.18); vì chỉ có duy nhất 1 kiểu thực thể tự liên kết với chính nó nên liên kết đệ quy có bậc bằng `1`.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Slide Ch.2 Mô hình ER – tr.18–19']
},
{
  id: 'k17-ca2-11', exam: 'k17-ca2', no: 11, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn phát biểu đúng nhất về kiểu thực thể con trong mô hình thực thể mở rộng (EER)',
  figure: null,
  options: [
    { key: 'A', text: 'Kiểu thực thể con là một nhóm các thực thể trong một kiểu thực thể có các đặc tính riêng biệt so với các thực thể khác.' },
    { key: 'B', text: 'Kiểu thực thể con là một kiểu thực thể chung có mối liên kết với một hoặc nhiều kiểu thực thể khác.' },
    { key: 'C', text: 'Kiểu thực thể con là kiểu thực thể kế thừa thuộc tính và quan hệ của kiểu thực thể cha nhưng có thêm một số thuộc tính và quan hệ của riêng nó.' },
    { key: 'D', text: 'Cả A và C đều đúng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình ER mở rộng (EER):\n- **A đúng**: kiểu thực thể con (lớp con – *subclass*) là một nhóm các thực thể bên trong một kiểu thực thể (lớp cha) mang những đặc tính riêng biệt so với các thực thể khác trong lớp cha đó.\n- **C đúng**: theo quy tắc kế thừa, lớp con kế thừa toàn bộ thuộc tính và mối liên kết của lớp cha, đồng thời có thêm thuộc tính và liên kết đặc thù riêng.\n- **B sai** vì đó là mô tả về *kiểu thực thể cha* (lớp tổng quát chung). Chọn **D**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);

DB.questions.push(
{
  id: 'k17-ca2-12', exam: 'k17-ca2', no: 12, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau: "Mỗi công trình có một mã số công trình duy nhất xác định tên gọi công trình, địa điểm, ngày công trình được cấp giấy phép xây dựng, ngày khởi công, ngày hoàn thành. Các công trình có rất nhiều nhân viên tham gia". Theo mô tả, khi xây dựng mô hình thực thể liên kết (ER), các thuộc tính của thực thể CÔNG TRÌNH gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã công trình, tên công trình, địa điểm, ngày cấp phép, ngày khởi công, ngày hoàn thành.' },
    { key: 'B', text: 'Mã công trình, tên công trình, địa điểm, ngày cấp phép, mã nhân viên tham gia, tên nhân viên tham gia.' },
    { key: 'C', text: 'Mã công trình, tên công trình, địa điểm,  ngày khởi công, ngày hoàn thành, mã nhân viên tham gia.' },
    { key: 'D', text: 'Mã công trình, tên công trình, địa điểm, ngày cấp phép, ngày khởi công, ngày hoàn thành, mã nhân viên tham gia.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.27, 32: trong mô hình ER, thực thể `CÔNG TRÌNH` chỉ chứa các thuộc tính mô tả trực tiếp cho chính công trình đó, gồm **mã công trình** (khóa), **tên công trình**, **địa điểm**, **ngày cấp phép**, **ngày khởi công** và **ngày hoàn thành** (**A đúng**).\n- Mối quan hệ *"các công trình có rất nhiều nhân viên tham gia"* được biểu diễn bằng một **kiểu liên kết** nối với thực thể `NHÂN VIÊN`, **không** đưa `mã nhân viên tham gia` hay `tên nhân viên tham gia` vào làm thuộc tính của `CÔNG TRÌNH` (loại B, C, D).',
  source: ['Slide Ch.2 Mô hình ER – tr.27, 32']
},
{
  id: 'k17-ca2-13', exam: 'k17-ca2', no: 13, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể Sinh viên với các thuộc tính Mã sinh viên, và địa chỉ? Biết rằng mỗi sinh viên có thể có nhiều địa chỉ liên lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'sv', label: 'SINH VIÊN', x: 315, y: 58, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -72, dy: 60 },
        { label: 'Phường', dx: 0, dy: 72 },
        { label: 'Tỉnh', dx: 72, dy: 60 }
      ] },
      { label: 'Mã SV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'sv', label: 'SINH VIÊN', x: 315, y: 58, attrs: [
      { label: 'Địa chỉ', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -72, dy: 60 },
        { label: 'Phường', dx: 0, dy: 72 },
        { label: 'Tỉnh', dx: 72, dy: 60 }
      ] },
      { label: 'Mã SV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'sv', label: 'SINH VIÊN', x: 315, y: 58, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -140, dy: 0 },
      { label: 'Mã SV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'sv', label: 'SINH VIÊN', x: 315, y: 58, attrs: [
      { label: 'Địa chỉ', kind: 'multi', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', kind: 'derived', dx: -72, dy: 60 },
        { label: 'Phường', kind: 'derived', dx: 0, dy: 72 },
        { label: 'Tỉnh', kind: 'derived', dx: 72, dy: 60 }
      ] },
      { label: 'Mã SV', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Trong ảnh chụp độ phân giải thấp, viền đậm của elip `Địa chỉ` ở (A), (C), (D) tương ứng với elip kép (thuộc tính đa trị).',
  explanation: 'Kiểm tra từng ký hiệu theo Slide Ch.2 Mô hình ER – tr.9–12:\n1. Mỗi sinh viên có thể có nhiều địa chỉ $\\Rightarrow$ `Địa chỉ` là **thuộc tính đa trị** (elip kép), loại **B** (vẽ elip đơn).\n2. `Địa chỉ` đồng thời là **thuộc tính phức hợp** gồm các thành phần lưu trữ độc lập `Xã`, `Phường`, `Tỉnh` (vẽ bằng elip nét liền), loại **C** (không tách thành phần) và loại **D** (vẽ các elip con nét đứt như thuộc tính suy dẫn).\n3. `Mã SV` là thuộc tính **khóa** nên phải **gạch chân** (D quên gạch chân `Mã SV`).\nVậy **A** mô tả đúng và đầy đủ nhất.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–12']
},
{
  id: 'k17-ca2-14', exam: 'k17-ca2', no: 14, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các thuộc tính Mã nhân viên, họ tên?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 315, y: 80, attrs: [
      { label: 'Họ tên', dx: -135, dy: 0, side: 'left', parts: [
        { label: 'Họ NV', dx: -95, dy: -42 },
        { label: 'TênNV', dx: -95, dy: 42 }
      ] },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 315, y: 80, attrs: [
      { label: 'Họ tên', dx: -135, dy: 0, side: 'left', parts: [
        { label: 'Họ NV', dx: -95, dy: -42 },
        { label: 'TênNV', dx: -95, dy: 42 }
      ] },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 315, y: 80, attrs: [
      { label: 'Họ tên', kind: 'derived', dx: -135, dy: 0, side: 'left', parts: [
        { label: 'Họ NV', dx: -95, dy: -42 },
        { label: 'TênNV', dx: -95, dy: 42 }
      ] },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 315, y: 80, attrs: [
      { label: 'Họ tên', kind: 'multi', dx: -135, dy: 0, side: 'left', parts: [
        { label: 'Họ NV', dx: -95, dy: -42 },
        { label: 'TênNV', dx: -95, dy: 42 }
      ] },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Viền đậm của elip `Họ tên` ở (D) trên ảnh chụp tương ứng với elip kép (thuộc tính đa trị).',
  explanation: 'Đối chiếu Slide Ch.2 Mô hình ER – tr.9–12:\n1. `Mã NV` là **thuộc tính khóa** nên phải được **gạch chân** $\\Rightarrow$ loại **B** và **C** (không gạch chân `Mã NV`).\n2. `Họ tên` là thuộc tính **phức hợp** (gồm `Họ NV` và `TênNV`) và **đơn trị, lưu trữ** nên vẽ bằng **elip đơn nét liền** $\\Rightarrow$ loại **C** (elip nét đứt = suy dẫn) và loại **D** (elip kép = đa trị).\nChọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.9–12']
},
{
  id: 'k17-ca2-15', exam: 'k17-ca2', no: 15, chapter: 'ch2', topic: '2.6',
  stem: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của mình. Tài liệu có thể là sách, bao gồm các thuộc tính: tác giả, tựa đề, năm xuất bản. Tài liệu có thể là bài báo khoa học từ tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp chí, số volume, số trang. Kiểu thực thể cha cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tài liệu với các thuộc tính: tác giả, tựa đề, năm xuất bản, tên tạp chí, số volume, số trang.' },
    { key: 'B', text: 'Tài liệu và các thuộc tính: tác giả, tựa đề.' },
    { key: 'C', text: 'Sách gồm các thuộc tính: Tác giả, tựa đề, năm xuất bản và bài báo khoa học với các thuộc tính tác giả, tựa đề, số volume, số trang.' },
    { key: 'D', text: 'Tất cả các phương án trên đều sai.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER, **kiểu thực thể cha** chứa các **thuộc tính chung** cho mọi kiểu thực thể con, còn các thuộc tính riêng chỉ đặt ở từng kiểu con:\n- Cả `Sách` và `Bài báo khoa học` đều là `Tài liệu` và dùng chung hai thuộc tính **`tác giả`**, **`tựa đề`** $\\Rightarrow$ kiểu thực thể cha là **`Tài liệu` với các thuộc tính `tác giả, tựa đề`** (**B đúng**).\n- Loại **A** vì gom cả thuộc tính riêng của hai lớp con (`năm xuất bản`, `tên tạp chí, số volume, số trang`) lên lớp cha.\n- Loại **C** vì đây là hai kiểu thực thể *con* (chứ không phải cha, hơn nữa còn thiếu `tên tạp chí` và lặp thuộc tính của cha).',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca2-16', exam: 'k17-ca2', no: 16, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất:',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biệt là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo định nghĩa hai ràng buộc tách biệt trong mô hình EER:\n- **Ràng buộc tách biệt (*disjoint*, `d`)**: một thực thể lớp cha chỉ thuộc tối đa một lớp con, **không thể đồng thời** là thành viên của hai hay nhiều lớp con $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp / chồng lấn (*overlapping*, `o`)**: một thực thể lớp cha **có thể đồng thời** thuộc hai hay nhiều lớp con $\\Rightarrow$ **B đúng**.\nVì cả A và B đều đúng nên chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca2-17', exam: 'k17-ca2', no: 17, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu (lớp) thực thể Nhân viên trong mô hình thực thể liên kết (ER) của bài toán quản lý công ty:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý.' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, tên phòng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Ở mức mô hình **ER** (Slide Ch.2 – tr.27, 32), quan hệ giữa `NHÂN VIÊN` với `PHÒNG` (`Làm việc cho`) và với người quản lý (`Giám sát`) được biểu diễn bằng các **hình thoi liên kết**, **không** đưa khóa ngoại (`mã phòng`, `mã người quản lý`) hay thuộc tính của thực thể khác (`tên phòng`) vào làm thuộc tính của thực thể `NHÂN VIÊN` (các khóa ngoại này chỉ sinh ra ở Chương 3 khi chuyển sang mô hình quan hệ).\nDo đó loại B, C, D và chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.27, 32']
},
{
  id: 'k17-ca2-18', exam: 'k17-ca2', no: 18, chapter: 'ch3', topic: '2.11',
  stem: 'Phép chiếu trong biểu thức đại số quan hệ được thực hiện tốt nhất khi nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Trước khi thực hiện phép chọn, các phép theo nhóm.' },
    { key: 'B', text: 'Sau khi thực hiện phép chọn, phân loại.' },
    { key: 'C', text: 'Trước khi thực hiện phép chọn, phân loại.' },
    { key: 'D', text: 'Sau khi thực hiện phép chọn, các phép theo nhóm.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong tối ưu hóa và trình tự thực hiện truy vấn trên quan hệ:\n1. Phép chiếu **không nên** thực hiện trước phép chọn (loại A, C) vì có thể làm mất các cột điều kiện mà phép chọn $\\sigma$ cần kiểm tra, đồng thời phép chọn cần làm trước để giảm ngay số lượng bộ.\n2. Khi truy vấn có các phép gom nhóm/tính gộp (như `GROUP BY`, `Sum`, `Count`), phải thực hiện sau phép chọn và tính toán xong các nhóm rồi mới chiếu ra các thuộc tính kết quả cuối cùng (nếu chiếu trước phép theo nhóm có thể mất cột dùng để gom nhóm hoặc tính hàm gộp; còn sắp xếp/phân loại chỉ thực hiện trên kết quả đã chọn lọc).\nDo đó chọn **D** (*Sau khi thực hiện phép chọn, các phép theo nhóm*).',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'k17-ca2-19', exam: 'k17-ca2', no: 19, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối quan hệ có bậc lớn hơn 2 trong mô hình ER sau sang mô hình CSDL quan hệ.',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'ncc', label: 'Nhà CC', x: 90, y: 115, attrs: [
        { label: 'TenCC', dx: 0, dy: -62 },
        { label: 'MaNCC', kind: 'key', dx: 0, dy: 62 }
      ] },
      { id: 'da', label: 'DỰ ÁN', x: 450, y: 115, attrs: [
        { label: 'TenDA', dx: 0, dy: -62 },
        { label: 'MaDA', kind: 'key', dx: 0, dy: 62 }
      ] },
      { id: 'dv', label: 'ĐƠN VỊ', x: 270, y: 225, attrs: [
        { label: 'MaDV', kind: 'key', dx: -68, dy: 60 },
        { label: 'TenDV', dx: 68, dy: 60 }
      ] }
    ],
    rels: [{ id: 'cc', label: 'Cung cấp', x: 270, y: 115, attrs: [{ label: 'So Luong', dx: 0, dy: -66 }],
      links: [{ to: 'ncc' }, { to: 'da' }, { to: 'dv' }] }]
  } },
  options: [
    { key: 'A', text: '`NCC_DA_DV`($\\text{MaNCC}, \\text{MaDV}, \\underline{\\text{MaDA}}, \\text{SoLuong}$)' },
    { key: 'B', text: '`NCC_DA_DV`($\\text{MaNCC}, \\underline{\\text{MaDV}}, \\text{MaDA}, \\text{SoLuong}$)' },
    { key: 'C', text: '`NCC_DA_DV`($\\underline{\\text{MaNCC}, \\text{MaDV}, \\text{MaDA}}, \\text{SoLuong}$)' },
    { key: 'D', text: '`NCC_DA_DV`($\\underline{\\text{MaNCC}}, \\text{MaDV}, \\text{MaDA}, \\text{SoLuong}$)' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Quy tắc 6 (Slide Ch.3 Mô hình quan hệ P1 – tr.26 – *Chuyển cho mối liên kết có bậc > 2*): tạo ra một lược đồ quan hệ mới (`NCC_DA_DV`) gồm **tất cả thuộc tính khóa của các thực thể tham gia liên kết** (`MaNCC`, `MaDV`, `MaDA` — hợp thành khóa chính gồm cả 3 thuộc tính để định danh duy nhất mỗi bộ ba cung cấp) và thuộc tính riêng của mối liên kết (`SoLuong`).\n- A, B, D sai vì chỉ gạch chân một trong ba thuộc tính khóa, không xác định duy nhất được bộ ba `(Nhà CC, Đơn vị, Dự án)`.\nChọn **C**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.26']
}
);

DB.questions.push(
{
  id: 'k17-ca2-20', exam: 'k17-ca2', no: 20, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ DOT1(MaSV, HoTen) và DOT2(MaSV, HoTen): chứa danh sách các sinh viên được khen thưởng ở học kỳ 1 và học kỳ 2. Biểu thức ĐSQH nào sau đây thể hiện đúng yêu cầu "Lập danh sách các sinh viên được khen thưởng cả học kỳ 1 và học kỳ 2"?',
  figure: null,
  options: [
    { key: 'A', text: 'DOT1 $\\times$ DOT2' },
    { key: 'B', text: 'DOT1 $-$ DOT2' },
    { key: 'C', text: 'DOT1 $\\cap$ DOT2' },
    { key: 'D', text: 'DOT1 $\\cup$ DOT2' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 16 (*Phép giao – Intersection*): giao của hai quan hệ cùng lược đồ $r \\cap s$ trả về các bộ xuất hiện trong **cả hai** quan hệ $r$ và $s$.\n- Yêu cầu sinh viên được khen thưởng **cả học kỳ 1 và học kỳ 2** tương ứng phép giao **`DOT1` $\\cap$ `DOT2`** (**C đúng**).\n- A ($\\times$) là tích Đề-các; B ($-$) là khen thưởng kỳ 1 nhưng không ở kỳ 2; D ($\\cup$) là kỳ 1 hoặc kỳ 2.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 16']
},
{
  id: 'k17-ca2-21', exam: 'k17-ca2', no: 21, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: SinhVien(MaS, HoTen, GioiTinh,  NgaySinh, Que); Monhoc(MaMon, TenMon, SoTC); KetQua(MaSV, MaMon, Diem). Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Cho biết mã số và tên những sinh viên chưa có điểm môn Mạng máy tính."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV, HoTen}}(\\text{Sinhvien}) - \\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{TenMon}=\\text{‘Mạng máy tính’}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' },
    { key: 'B', text: '$\\text{SinhVien} - \\pi_{\\text{MaSV, HoTen}}((\\sigma_{\\text{TenMon}=\\text{‘Mạng máy tính’}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV, HoTen}}(\\text{Sinhvien}) - ((\\sigma_{\\text{TenMon}=\\text{‘Mạng máy tính’}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien})$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV, HoTen}}((\\sigma_{\\text{TenMon}=\\text{‘Mạng máy tính’}}(\\text{Monhoc}) * \\text{Ketqua} * \\text{Sinhvien}) - \\pi_{\\text{MaSV, HoTen}}(\\text{Sinhvien})$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Đề bài gõ nhầm `MaS` trong `SinhVien(MaS, ...)` thay cho `MaSV`, và thiếu/lệch dấu ngoặc ở các phương án nhiễu B, C, D; chỉ số dưới của $\\sigma$ trong ảnh gốc khá nhỏ/mờ.',
  explanation: 'Để tìm những sinh viên **chưa có điểm** môn `"Mạng máy tính"`, ta lấy tập tất cả sinh viên (chiếu lên `MaSV, HoTen`) **trừ đi** ($-$) tập các sinh viên **đã có điểm** môn `"Mạng máy tính"` (Slide Ch.3 P2 – tr.14, 19, 24, 38).\n- Hai vế của phép trừ bắt buộc phải **cùng lược đồ** `(MaSV, HoTen)` $\\Rightarrow$ loại **B** (`SinhVien` có 5 cột) và **C** (vế phải chưa chiếu lên `MaSV, HoTen`).\n- Loại **D** vì đảo ngược thứ tự phép trừ (`đã có điểm - tất cả` $\\to \\emptyset$) và thừa dấu ngoặc.\nChọn **A**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14, 19, 24, 38']
},
{
  id: 'k17-ca2-22', exam: 'k17-ca2', no: 22, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ, khi thực hiện phép chèn một bộ dữ liệu vào bảng thì:',
  figure: null,
  options: [
    { key: 'A', text: 'thứ tự của các hàng là không quan trọng.' },
    { key: 'B', text: 'thứ tự của các cột là không quan trọng.' },
    { key: 'C', text: 'thứ tự của các cột là quan trọng.' },
    { key: 'D', text: 'thứ tự của các hàng là quan trọng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Theo Slide Ch.3 P1 – tr.10, "thứ tự các bộ trong quan hệ là không quan trọng" (A) và khi chèn bộ mới $r = r \\cup \\{t\\}$ (Slide P2 – tr.5) không phụ thuộc vị trí dòng. Lưu ý thêm: slide P1 tr.10 cũng nêu "thứ tự giữa các giá trị trong một bộ là quan trọng" (ứng với cách chèn rút gọn `INSERT(r; d1, ..., dn)` không ghi tên cột ở P2 tr.5, còn dạng đầy đủ `INSERT(r; A1=d1, ...)` gán theo tên thuộc tính).',
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.10 (*Các đặc trưng của quan hệ*) và phép chèn $r = r \\cup \\{t\\}$ (Slide Ch.3 P2 – tr.5): một quan hệ là **tập hợp các bộ** nên **thứ tự các bộ (hàng) trong bảng là không quan trọng** — việc chèn thêm một bộ không đặt vào vị trí dòng cố định nào (đảo thứ tự các dòng vẫn là cùng một quan hệ).\n- Trong định nghĩa chuẩn dùng tên thuộc tính (`A1=d1, ...`), mỗi giá trị gắn với tên cột chứ không phụ thuộc thứ tự hàng.\nChọn **A**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10', 'Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5']
},
{
  id: 'k17-ca2-23', exam: 'k17-ca2', no: 23, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: SinhVien(MaS, HoTen,GioiTinh,NgaySinh,Que); Monhoc(MaMon,TenMon,SoTC); KetQua(MaSV,MaMon,Diem). Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: "Cho biết mã số và tên những sinh viên không phải thi lại môn nào."?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV, HoTen}}(\\text{SinhVien}) - \\pi_{\\text{MaSV,HoTen}}(\\sigma_{\\text{Diem}<5}(\\text{KetQua})*\\text{SinhVien})$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV,HoTen}}(\\sigma_{\\text{Diem}<5}(\\text{KetQua})*\\text{SinhVien}) - \\pi_{\\text{MaSV, HoTen}}(\\text{SinhVien})$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV,HoTen}}(\\sigma_{\\text{Diem}>5}(\\text{KetQua})*\\text{SinhVien})$' },
    { key: 'D', text: 'Cả ba phương án trên đều sai.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Toán tử so sánh trong chỉ số dưới của $\\sigma$ trên ảnh chụp rất mờ: ở (A) và (B) đọc là `Diem<5`, ở (C) trông giống `Diem>5` (đối chiếu đề K17 Bộ 1 – câu 22 là `Diem>=5`; dù là `>` hay `>=` thì (C) vẫn sai vì không loại được sinh viên có một môn đạt nhưng môn khác dưới 5). Ngoài ra đề bài gõ nhầm `MaS` trong `SinhVien(MaS, ...)` thay cho `MaSV`.',
  explanation: 'Sinh viên **"không phải thi lại môn nào"** là sinh viên **không** nằm trong tập những sinh viên có ít nhất một môn bị điểm dưới 5 (`Diem < 5`):\n- Lấy toàn bộ sinh viên $\\pi_{\\text{MaSV, HoTen}}(\\text{SinhVien})$ trừ đi ($-$) tập sinh viên có `Diem < 5` trong `KetQua` nối với `SinhVien` $\\Rightarrow$ **A đúng**.\n- **B sai** vì trừ ngược (`thi lại - tất cả` $\\to \\emptyset$).\n- **C sai** về ngữ nghĩa (dù viết `Diem > 5` hay `Diem >= 5`): một sinh viên có 1 môn điểm `8` và 1 môn điểm `3` vẫn có mặt trong kết quả của C dù vẫn phải thi lại môn điểm `3`.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14, 19, 24, 38']
},
{
  id: 'k17-ca2-24', exam: 'k17-ca2', no: 24, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: SinhVien(MaS, HoTen, GioiTinh,  NgaySinh, Que); Monhoc(MaMon, TenMon, SoTC); KetQua(MaSV, MaMon, Diem). Biểu thức ĐSQH nào sau đây biểu diễn không đúng yêu cầu: "Cho biết mã số và tên các sinh viên nữ quê ở Nghệ An"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{GioiTinh}=\\text{‘Nữ’}}(\\text{SinhVien})) \\cap \\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{Que}=\\text{‘Nghệ An’}}(\\text{SinhVien}))$' },
    { key: 'B', text: '$\\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{GioiTinh}=\\text{‘Nữ’ AND }\\text{Que}=\\text{‘Nghệ An’}}(\\text{SinhVien}))$' },
    { key: 'C', text: '$\\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{GioiTinh}=\\text{‘Nữ’} \\land \\text{Que}=\\text{‘Nghệ An’}}(\\text{SinhVien}))$' },
    { key: 'D', text: '$\\pi_{\\text{MaSV, HoTen}}(\\sigma_{\\text{GioiTinh}=\\text{‘Nữ’} \\cap \\text{Que}=\\text{‘Nghệ An’}}(\\text{SinhVien}))$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Đề bài gõ nhầm `MaS` trong `SinhVien(MaS, ...)` thay cho `MaSV`; chỉ số dưới của $\\sigma$ trong ảnh gốc nhỏ/mờ nhưng phân biệt được $\\cap$ ở (A, D) và $\\land$ ở (C).',
  explanation: 'Đề hỏi biểu thức **không đúng**:\n- **B** và **C** đúng cú pháp phép chọn $\\sigma$ (dùng toán tử logic `AND` / $\\land$ nối hai điều kiện).\n- **A** cũng cho kết quả đúng vì hai nhánh cùng chiếu từ `SinhVien` với khóa `MaSV` (một sinh viên nữ ở tập trái và ở Nghệ An ở tập phải trùng khớp khóa `MaSV` khi lấy giao $\\cap$).\n- **D sai hoàn toàn về cú pháp ĐSQH** (Slide Ch.3 P2 – tr.24): bên trong biểu thức điều kiện của phép chọn $\\sigma$ chỉ được dùng các phép logic ($\\land, \\lor, \\neg$), **không được dùng phép giao tập hợp $\\cap$**.\nChọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 19, 24']
},
{
  id: 'k17-ca2-25', exam: 'k17-ca2', no: 25, chapter: 'ch3', topic: '2.9',
  stem: 'Phép chèn dữ liệu trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Chèn vào CSDL một số quan hệ mới.' },
    { key: 'B', text: 'Chèn vào CSDL các ràng buộc toàn vẹn' },
    { key: 'C', text: 'Chèn vào CSDL các thông tin về một bản ghi cụ thể.' },
    { key: 'D', text: 'Chèn vào CSDL các thuộc tính mới.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5 (*1. Phép chèn – INSERT*): phép chèn thêm **một bộ $t$** (tức các thông tin về **một bản ghi cụ thể**) vào quan hệ $r\\{A_1, \\dots, A_n\\}$ đã có, dạng $r = r \\cup t$.\n- A (tạo bảng mới) và D (thêm cột mới) thuộc ngôn ngữ định nghĩa dữ liệu (DDL), không phải phép chèn bộ dữ liệu; B là định nghĩa ràng buộc.\nChọn **C**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.5']
},
{
  id: 'k17-ca2-26', exam: 'k17-ca2', no: 26, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: BANDOC (MaBD, TenBD, Lop, NgayCap), SACH(MaSH,TenSach,TacGia,NhaXuatBan,NamXB) và PHIEUMUON(MaBD, MaSH,Ngaymuon, NgayTra,TraSach). Trong đó, NgayTra là ngày hẹn trả và TraSach nhận giá trị Yes/No. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau: "Liệt kê mã và tên những quyển sách xuất bản năm 2015 mà bạn đọc đã mượn"?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{\\text{maSH,tenSach}}(\\sigma_{\\text{year(namXB)}=2015}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'B', text: '$\\sigma_{\\text{namXB}=2015}(\\pi_{\\text{maSH,tenSach}}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'C', text: '$\\sigma_{\\text{year(namXB)}=2015}(\\pi_{\\text{maSH,tenSach}}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' },
    { key: 'D', text: '$\\pi_{\\text{maSH,tenSach}}(\\sigma_{\\text{namXB}=2015}(\\text{SACH}) * \\pi_{\\text{maSH}}(\\text{PHIEUMUON}))$' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Chỉ số dưới trong ảnh chụp hơi nhỏ/mờ (đọc được `year(namXB)=2015` ở A, C và `namXB=2015` ở B, D); đề viết thường tên thuộc tính `maSH, tenSach, namXB` so với lược đồ `MaSH, TenSach, NamXB`.',
  explanation: 'Phân tích từng bước (Slide Ch.3 P2 – tr.19, 24, 38):\n1. Trong lược đồ `SACH`, thuộc tính `NamXB` đã lưu sẵn **năm** xuất bản (dạng số như `2015`, không phải kiểu ngày đầy đủ như `NgayCap`) nên lọc trực tiếp `namXB=2015`, không dùng hàm `year(namXB)` $\\Rightarrow$ loại **A** và **C**.\n2. Phải lọc `namXB=2015` trên `SACH` **trước** khi chiếu `maSH, tenSach`, nếu chiếu trước như **B** và **C** sẽ làm mất cột `NamXB` nên phép chọn bên ngoài không thực hiện được.\n3. Kết nối tự nhiên `*` với $\\pi_{\\text{maSH}}(\\text{PHIEUMUON})$ giữ lại đúng những sách từng được bạn đọc mượn, rồi chiếu lấy `maSH, tenSach` $\\Rightarrow$ chọn **D**.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
}
);
