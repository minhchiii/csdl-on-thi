/* Đề 2021 – Đề 1 (bản đánh máy lại) – nguồn: tai-lieu/Đề 2021/đề 1/ & tai-lieu-text/de/de-2021-1.md */
DB.questions.push(
{
  id: 'de-2021-1-01', exam: 'de-2021-1', no: 1, chapter: 'ch1', topic: '1.3',
  stem: 'Ưu điểm của hệ quản trị cơ sở dữ liệu là:',
  figure: null,
  options: [
    { key: 'A', text: 'Quản lý được cơ sở dữ liệu dư thừa' },
    { key: 'B', text: 'Cung cấp khả năng chia sẻ dữ liệu' },
    { key: 'C', text: 'Đảm bảo tính toàn vẹn và...cho dữ liệu (ảnh mờ quá ko thấy đc đ.á :( )' },
    { key: 'D', text: 'Cả ba phương án trên đều đúng' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Phương án C trong bản đánh máy gốc bị khuyết chữ sau "và..." kèm lời chú của người chép; tuy nhiên đối chiếu Slide Ch.1 tr.18 thì A, B và ý toàn vẹn/nhất quán ở C đều là ưu điểm của HQT CSDL nên D đúng.',
  explanation: 'Theo Slide Ch.1 Tổng quan – tr.18 (*Ưu điểm của HQT CSDL*), hệ quản trị CSDL có 4 ưu điểm chính:\n1. Quản lý được dữ liệu dư thừa (**A**).\n2. Đảm bảo tính nhất quán cho dữ liệu.\n3. Tạo khả năng chia sẻ dữ liệu nhiều hơn (**B**).\n4. Cải tiến tính toàn vẹn cho dữ liệu (**C** – phần khuyết là "nhất quán"/"an toàn").\nVì A, B, C đều đúng theo giáo trình nên chọn **D** (*Cả ba phương án trên đều đúng*).',
  sameAs: ['k16-ca2-02'],
  source: ['Slide Ch.1 Tổng quan – tr.18']
},
{
  id: 'de-2021-1-02', exam: 'de-2021-1', no: 2, chapter: 'ch1', topic: '1.1',
  stem: 'Trong quá trình cập nhập dữ liệu, dữ liệu được hệ quản trị CSDL, kiểm soát để đảm bảo tính chất nào ?',
  figure: null,
  options: [
    { key: 'A', text: 'Tính dàng buộc toàn vẹn' },
    { key: 'B', text: 'Tính độc lập' },
    { key: 'C', text: 'Tính bảo mật' },
    { key: 'D', text: 'Tính nhất quán' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo ghi chú Slide Ch.1 Tổng quan – tr.14 (*Các tiêu chuẩn của CSDL*):\n- **Tính nhất quán**: "*Sau các thao tác cập nhật dữ liệu và ngay cả khi có sự cố xảy ra $\\Rightarrow$ dữ liệu trong CSDL phải đảm bảo được tính đúng đắn*".\n- **Tính toàn vẹn** (A ghi nhầm "dàng buộc"): kiểm tra giá trị lưu trữ thỏa các ràng buộc miền, khóa, tham chiếu.\n- **Tính độc lập** (B) là dữ liệu độc lập với ứng dụng/lưu trữ; **Tính bảo mật** (C) là ngăn truy xuất trái phép. Chọn **D**.',
  source: ['Slide Ch.1 Tổng quan – tr.14']
},
{
  id: 'de-2021-1-03', exam: 'de-2021-1', no: 3, chapter: 'ch1', topic: '1.1',
  stem: 'Hệ cơ sở dữ liệu gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Cơ sở dữ liệu, hệ quản trị cơ sở dữ liệu,..., phần mềm ứng dụng, người dùng' },
    { key: 'B', text: 'Cơ sở dữ liệu, phần mềm ứng dụng, người dùng' },
    { key: 'C', text: 'Cơ sở dữ liệu, quản trị cơ sở dữ liệu và phần cứng ứng dụng.' },
    { key: 'D', text: 'Phần mềm ứng dụng, hệ quản trị cơ sở dữ liệu, người dùng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Phương án A trong bản đánh máy gốc có dấu `,...,` (ở đề ngân hàng gốc thường là "hệ quản trị cơ sở dữ liệu tương ứng" hoặc kèm phần cứng), vẫn đủ 4 thành phần cốt lõi để phân biệt rõ với B, C, D.',
  explanation: 'Một hệ cơ sở dữ liệu đầy đủ gồm 4 thành phần chính (Slide Ch.1 Tổng quan – tr.10, 20): **Cơ sở dữ liệu**, **Hệ quản trị CSDL** (tương ứng), **Phần mềm/chương trình ứng dụng** và **Người dùng** (kèm phần cứng lưu trữ).\n- B thiếu hệ quản trị CSDL.\n- C thiếu người dùng, phần mềm ứng dụng và ghi sai "quản trị CSDL", "phần cứng ứng dụng".\n- D thiếu cơ sở dữ liệu.\nChọn **A**.',
  source: ['Slide Ch.1 Tổng quan – tr.10, 20']
},
{
  id: 'de-2021-1-04', exam: 'de-2021-1', no: 4, chapter: 'ch1', topic: '1.3',
  stem: 'Một hệ quản trị CSDL không có chức năng nào trong các chức năng dưới đây?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp công cụ quản lý bộ nhớ' },
    { key: 'B', text: 'Cung cấp môi trường tạo lập CSDL' },
    { key: 'C', text: 'Cung cấp môi trường cập nhập và khai thác dữ liệu' },
    { key: 'D', text: 'Cung cấp công cụ kiểm soát, điều khiển truy vấn vào CSDL' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null,
  note: 'Phương án D trong đề gốc gõ "truy vấn" (thay cho "truy cập"), C gõ "cập nhập".',
  explanation: 'Ba nhóm chức năng chính của HQT CSDL (DBMS) gồm: (1) môi trường tạo lập CSDL qua ngôn ngữ định nghĩa dữ liệu DDL (**B**); (2) môi trường cập nhật và khai thác dữ liệu qua DML/SQL (**C**); (3) công cụ kiểm soát, điều khiển truy cập, bảo mật, toàn vẹn, đồng thời và khôi phục (**D**).\nViệc **quản lý bộ nhớ** là chức năng của **hệ điều hành**, không phải chức năng của HQT CSDL $\\Rightarrow$ chọn **A**.',
  sameAs: ['k16-ca1-04'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-05', exam: 'de-2021-1', no: 5, chapter: 'ch1', topic: '1.2',
  stem: 'Trong mô hình kiến trúc ba mức của hệ CSDL, mô hình dữ liệu quan niệm là:',
  figure: null,
  options: [
    { key: 'A', text: 'Cách nhìn dữ liệu ở mức ngoài' },
    { key: 'B', text: 'Nội dung thông tin của một phần dữ liệu dưới cách nhìn của người dùng.' },
    { key: 'C', text: 'Cách nhìn dữ liệu một cách tổng quát của người dùng' },
    { key: 'D', text: 'Nội dung thông tin của toàn bộ cơ sở dữ liệu dưới cách nhìn của người sử dụng.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong kiến trúc 3 mức ANSI/SPARC (Ngoài $\\to$ Quan niệm $\\to$ Trong):\n- **Mức ngoài** (A, B): gồm các khung nhìn (*View*), chỉ mô tả **một phần** CSDL phù hợp với từng nhóm người dùng.\n- **Mức quan niệm**: mô tả **nội dung thông tin của toàn bộ cơ sở dữ liệu dưới cách nhìn của người sử dụng** (các thực thể, kiểu dữ liệu, mối liên kết và ràng buộc), trừu tượng hóa chi tiết lưu trữ vật lý.\n- C diễn đạt chung chung, không chuẩn định nghĩa bằng **D** $\\Rightarrow$ chọn **D**.',
  sameAs: ['k16-ca2-01'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-06', exam: 'de-2021-1', no: 6, chapter: 'ch2', topic: '1.4',
  stem: 'Mô hình thực thể mở rộng(EER) là gì ?',
  figure: null,
  options: [
    { key: 'A', text: 'Mô hình thực thể liên kết được bổ sung thêm khái niệm min-max để biểu diễn mối liên kết một cách rõ ràng và chính sác hơn.' },
    { key: 'B', text: 'Mô hình thực thể liên kết được bổ sung thêm một số quy tắc nghiệm vụ để có thể biểu diễn các mối quan hệ một cách rõ ràng và chính xác hơn.' },
    { key: 'C', text: 'Mô hình thực thể liên kết được bổ sung thêm một số khái niệm để tăng khả năng mô tả đối tượng được rõ dàng và chính xác hơn.' },
    { key: 'D', text: 'Tất cả phương án trên đều sai' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Mô hình thực thể liên kết mở rộng (**EER** – *Enhanced Entity-Relationship*) kế thừa toàn bộ mô hình ER cơ bản và bổ sung thêm **một số khái niệm ngữ nghĩa mới** (lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…) cùng các ràng buộc để mô tả đối tượng dữ liệu được rõ ràng và chính xác hơn.\n- A sai vì chỉ nhắc riêng ký hiệu `(min, max)`.\n- B sai vì chỉ nhắc quy tắc nghiệp vụ cho mối quan hệ, bỏ qua phần mở rộng khái niệm về lớp thực thể và kế thừa. Chọn **C**.',
  sameAs: ['de-mau-720-03'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-07', exam: 'de-2021-1', no: 7, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), liên kết n-m giữa kiểu thực thể A và kiểu thực thể B là liên kết mà trong đó :',
  figure: null,
  options: [
    { key: 'A', text: 'Một thực thể kiểu A và liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' },
    { key: 'B', text: 'Một thực thể kiểu A liên kết với nhiều thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với nhiều thực thể kiểu A.' },
    { key: 'C', text: 'Một thực thể kiểu A liên kết với nhiều thực thể kiểu B nhưng một thực thể kiểu B chỉ liên kết duy nhất với một thực thể kiểu A.' },
    { key: 'D', text: 'Một thực thể kiểu A có thể liên kết hoặc không tham gia vào liên kết với một thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với một thực thể kiểu A.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.20–21 (*Các kiểu liên kết*):\n- Liên kết **M–N (nhiều–nhiều)**: một thực thể kiểu A liên kết với **nhiều** thực thể kiểu B và ngược lại, một thực thể kiểu B liên kết với **nhiều** thực thể kiểu A $\\Rightarrow$ **B đúng**.\n- A mô tả liên kết `1–1`; C mô tả liên kết `1–N`; D mô tả ràng buộc tham gia bộ phận/toàn bộ của `1–1`.',
  sameAs: ['k16-ca2-11'],
  source: ['Slide Ch.2 Mô hình ER – tr.20–21']
},
{
  id: 'de-2021-1-08', exam: 'de-2021-1', no: 8, chapter: 'ch2', topic: '2.1',
  stem: 'Chọn phương án hợp lý nhất xác định các thuộc tính của kiểu(lớp) thực thể nhân viên trong mô hình thực hiện liên kết (ER) của bài toán quản lý công ty:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ.' },
    { key: 'B', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, địa chỉ, mã phòng, mã người quản lý.' },
    { key: 'C', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' },
    { key: 'D', text: 'Mã nhân viên, họ tên, ngày sinh, giới tính, mã phòng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Phương án C và D trong ảnh gốc giống hệt nhau (đều là phương án nhiễu chứa khóa ngoại `mã phòng`); đề gốc viết nhầm "thực hiện liên kết".',
  explanation: 'Ở mức mô hình thực thể liên kết **ER** (Slide Ch.2 – tr.27, 32), mối quan hệ giữa `NHÂN VIÊN` với `PHÒNG` (`Làm việc cho`) hay với người quản lý (`Giám sát`) được biểu diễn bằng **kiểu liên kết** (hình thoi), **không** đưa khóa ngoại (`mã phòng`, `mã người quản lý`) vào làm thuộc tính của thực thể (các cột này chỉ sinh ra sau khi chuyển sang mô hình quan hệ ở Chương 3).\nVì vậy loại B, C, D và chọn **A**.',
  source: ['Slide Ch.2 Mô hình ER – tr.27, 32']
},
{
  id: 'de-2021-1-09', exam: 'de-2021-1', no: 9, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sau đây là đúng nhất ?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết giữa các kiểu (lớp) thực thể là mối quan hệ nào đó giữa các kiểu(lớp) thực thể.' },
    { key: 'B', text: 'Liên kết giữa các kiểu(lớp) thực thể là các quy tắc nghiệp vụ giữa các kiểu(lớp) thực thể.' },
    { key: 'C', text: 'Liên kết giữa các kiểu(lớp) thực thể là các rằng buộc bắt buộc giữa các kiểu(lớp) thực thể.' },
    { key: 'D', text: 'Tất cả các phát biểu trên đều đúng.' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo định nghĩa nguyên văn trên Slide Ch.2 Mô hình ER – tr.15: "**Liên kết (Relationship) là mối quan hệ nào đó giữa các kiểu thực thể**" (ví dụ: nhân viên *thuộc* phòng ban, nhân viên *làm trưởng phòng* phòng ban).\n- B và C nhầm lẫn khái niệm liên kết với quy tắc nghiệp vụ và ràng buộc toàn vẹn/tham gia bắt buộc. Chọn **A**.',
  sameAs: ['de-2021-2-15'],
  source: ['Slide Ch.2 Mô hình ER – tr.15']
},
{
  id: 'de-2021-1-10', exam: 'de-2021-1', no: 10, chapter: 'ch2', topic: '2.2',
  stem: 'Mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể **Khách hàng** với các thuộc tính **Mã khách** hàng và **địa chỉ** ? Biết rằng mỗi khách hàng có thể có nhiều địa chỉ liên lạc.',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 240, y: 75, attrs: [
      { label: 'địa chỉ', dx: -145, dy: 0 },
      { label: 'Mã khách', kind: 'key', dx: 145, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 260, y: 55, attrs: [
      { label: 'địa chỉ', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', kind: 'derived', dx: -68, dy: 58 },
        { label: 'Phường', kind: 'derived', dx: 0, dy: 70 },
        { label: 'Tỉnh', kind: 'derived', dx: 68, dy: 58 }
      ] },
      { label: 'Mã khách', dx: 140, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 260, y: 55, attrs: [
      { label: 'địa chỉ', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -68, dy: 58 },
        { label: 'Phường', dx: 0, dy: 70 },
        { label: 'Tỉnh', dx: 68, dy: 58 }
      ] },
      { label: 'Mã khách', dx: 140, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'kh', label: 'KHÁCH HÀNG', x: 260, y: 55, attrs: [
      { label: 'địa chỉ', dx: -140, dy: 0, side: 'bottom', parts: [
        { label: 'Xã', dx: -68, dy: 58 },
        { label: 'Phường', dx: 0, dy: 70 },
        { label: 'Tỉnh', dx: 68, dy: 58 }
      ] },
      { label: 'Mã khách', kind: 'key', dx: 140, dy: 0 }
    ] }] } } }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Bản đánh máy lại vẽ sơ đồ bằng Word nên không thể hiện elip kép (đa trị) cho `địa chỉ` ở bất kỳ phương án nào; ở bản gốc ngân hàng đề chuẩn, `Địa chỉ` được vẽ bằng elip kép (đa trị) nối tới 3 thành phần `Xã, Phường, Tỉnh` và `Mã khách` gạch chân.',
  explanation: 'Kiểm tra từng ký hiệu trên sơ đồ theo Slide Ch.2 Mô hình ER – tr.9–12:\n1. `Mã khách` là khóa định danh của thực thể `KHÁCH HÀNG` nên phải được **gạch chân** dưới tên thuộc tính $\\Rightarrow$ loại **B** và **C** (đều quên gạch chân `Mã khách`).\n2. `địa chỉ` là thuộc tính phức hợp gồm các thành phần lưu trữ độc lập `Xã`, `Phường`, `Tỉnh`, nên các elip con phải vẽ bằng **nét liền** (loại B vì vẽ nét đứt như thuộc tính suy dẫn).\n3. Đề bài cho khách hàng có nhiều địa chỉ (đa trị), bản vẽ lại bằng Word thiếu nét kép cho `địa chỉ`; xét trong 4 sơ đồ hiện có, **D** đúng cả ký hiệu khóa và thuộc tính phức hợp nên mô tả đúng nhất.',
  sameAs: ['k16-ca1-15'],
  source: ['Slide Ch.2 Mô hình ER – tr.9–12']
},
{
  id: 'de-2021-1-11', exam: 'de-2021-1', no: 11, chapter: 'ch2', topic: '2.3',
  stem: 'Mô hình thực thể liên kết mở rộng EER nào mô tả chính xác nhất về ràng buộc tách biệt trong kiểu tra ?',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 150, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -42, dy: -66 },
          { label: 'Mô tả', dx: 62, dy: -66 },
          { label: 'Địa điểm SX', dx: -125, dy: 0 },
          { label: 'Giá', dx: 0, dy: 66 }
        ] },
        { id: 'tsx', label: 'LK_Tự SX', x: 405, y: 65, attrs: [{ label: 'Số hiệu', dx: 112, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 405, y: 175, attrs: [{ label: 'Mã nhà CC', dx: 118, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 270, y: 120, kind: 'o', parent: 'lk', total: true, children: ['tsx', 'cc'] }]
    } } },
    { key: 'B', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 150, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -42, dy: -66 },
          { label: 'Mô tả', dx: 62, dy: -66 },
          { label: 'Địa điểm SX', dx: -125, dy: 0 },
          { label: 'Giá', dx: 0, dy: 66 }
        ] },
        { id: 'tsx', label: 'LK_Tự SX', x: 405, y: 65, attrs: [{ label: 'Số hiệu', dx: 112, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 405, y: 175, attrs: [{ label: 'Mã nhà CC', dx: 118, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 270, y: 120, kind: 'o', parent: 'lk', total: false, children: ['tsx', 'cc'] }]
    } } },
    { key: 'C', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 150, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -42, dy: -66 },
          { label: 'Mô tả', dx: 62, dy: -66 },
          { label: 'Địa điểm SX', dx: -125, dy: 0 },
          { label: 'Giá', dx: 0, dy: 66 }
        ] },
        { id: 'tsx', label: 'LK_Tự SX', x: 405, y: 65, attrs: [{ label: 'Số hiệu', dx: 112, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 405, y: 175, attrs: [{ label: 'Mã nhà CC', dx: 118, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 270, y: 120, kind: 'd', parent: 'lk', total: true, children: ['tsx', 'cc'] }]
    } } },
    { key: 'D', text: '', figure: { type: 'er', spec: {
      entities: [
        { id: 'lk', label: 'LINH KIỆN', x: 150, y: 120, attrs: [
          { label: 'Mã LK', kind: 'key', dx: -42, dy: -66 },
          { label: 'Mô tả', dx: 62, dy: -66 },
          { label: 'Địa điểm SX', dx: -125, dy: 0 },
          { label: 'Giá', dx: 0, dy: 66 }
        ] },
        { id: 'tsx', label: 'LK_Tự SX', x: 405, y: 65, attrs: [{ label: 'Số hiệu', dx: 112, dy: 0 }] },
        { id: 'cc', label: 'LK_Cung cấp', x: 405, y: 175, attrs: [{ label: 'Mã nhà CC', dx: 118, dy: 0 }] }
      ],
      specs: [{ id: 's1', x: 270, y: 120, kind: 'd', parent: 'lk', total: true, children: ['tsx', 'cc'] }],
      notes: [{ text: '(2 nhánh con vẽ nét kép/đậm)', x: 455, y: 120 }]
    } } }
  ],
  answer: 'C', marked: 'C', outside: true, incomplete: null,
  note: 'Đề gốc gõ nhầm "kiểu tra" (kiểu cha); trong ảnh gốc phương án (D), hai đường từ vòng tròn `d` xuống `LK_Tự SX` và `LK_Cung cấp` được vẽ bằng nét kép/đậm (được ghi chú trực tiếp trong hình D để phân biệt với C).',
  explanation: 'Đọc ký hiệu chuyên biệt hóa trong mô hình EER:\n1. **Ràng buộc tách biệt (*disjoint*)** — một thực thể kiểu cha chỉ thuộc tối đa một lớp con — ký hiệu bằng chữ **`d`** trong vòng tròn $\\Rightarrow$ loại **A** và **B** (dùng chữ `o` cho phủ lấp/*overlapping*).\n2. Đường nối từ lớp cha `LINH KIỆN` tới vòng tròn `(d)` là **nét đôi** thể hiện chuyên biệt hóa **toàn phần (*total*)**.\n3. Các nhánh từ vòng tròn xuống hai lớp con `LK_Tự SX`, `LK_Cung cấp` phải vẽ bằng **nét đơn** kèm ký hiệu tập con $\\subset$ (loại **D** vì vẽ nét kép/đậm cả hai nhánh xuống lớp con). Chọn **C**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);

DB.questions.push(
{
  id: 'de-2021-1-12', exam: 'de-2021-1', no: 12, chapter: 'ch2', topic: '1.4',
  stem: 'Chọn khẳng định đúng nhất :',
  figure: null,
  options: [
    { key: 'A', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc tách biện là ràng buộc trong đó một thực thể kiểu cha không thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'B', text: 'Trong mô hình thực thể liên kết mở rộng, ràng buộc phủ lấp là ràng buộc trong đó một thực thể kiểu cha có thể đồng thời là thành viên của hai hoặc nhiều kiểu con.' },
    { key: 'C', text: 'Cả A và B đều đúng.' },
    { key: 'D', text: 'Cả A và B đều sai.' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null,
  note: 'Phương án A trong bản gốc gõ nhầm "tách biện" (đúng là tách biệt).',
  explanation: 'Trong mô hình EER, hai ràng buộc về tính tách biệt khi chuyên biệt hóa/tổng quát hóa được định nghĩa:\n- **Ràng buộc tách biệt (*disjoint*, ký hiệu `d`)**: một thực thể của lớp cha **không thể đồng thời** thuộc nhiều hơn một lớp con (tối đa 1 lớp con) $\\Rightarrow$ **A đúng**.\n- **Ràng buộc phủ lấp / chồng lấn (*overlapping*, ký hiệu `o`)**: một thực thể của lớp cha **có thể đồng thời** là thành viên của hai hay nhiều lớp con $\\Rightarrow$ **B đúng**.\nVì cả A và B đều đúng nên chọn **C**.',
  sameAs: ['de-2021-2-16'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-13', exam: 'de-2021-1', no: 13, chapter: 'ch2', topic: '2.6',
  stem: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của mình. Tài liệu có thể có sách, bao gồm các thuộc tính: tác giả, tựa đề, năm xuất bản. Tài liệu có thể là bài báo khoa học từ tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp chí, số volume, số trang. Kiểu thực thể con cùng các thuộc tính tương ứng là:',
  figure: null,
  options: [
    { key: 'A', text: 'Tài liệu với các thuộc tính: tác giả, tựa đề, năm xuất bản, tên tạp chí, số volume, số trang.' },
    { key: 'B', text: 'Tài liệu và thuộc tính: Tác giả, tựa đề.' },
    { key: 'C', text: 'Sách gồm các thuộc tính: Tác giả, tựa đề, năm suất bản và bài báo cáo khoa học với các thuộc tính tác giả, tựa đề, số volume, số trang.' },
    { key: 'D', text: 'Tất cả phương án trên đều sai.' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc kế thừa của mô hình EER:\n- **Kiểu thực thể cha**: `Tài liệu` mang các thuộc tính chung (`tác giả, tựa đề`). Vì đề hỏi **kiểu thực thể con**, nên A (gộp hết vào cha) và B (chỉ nêu kiểu cha) đều sai.\n- **Kiểu thực thể con** kế thừa thuộc tính của cha và chỉ khai báo thêm các thuộc tính riêng: `Sách` (`năm xuất bản`) và `Bài báo khoa học` (`tên tạp chí, số volume, số trang`). Phương án C vừa lặp lại thuộc tính của cha (`tác giả, tựa đề`) vào lớp con, vừa **thiếu thuộc tính `tên tạp chí`** (và ghi nhầm "bài báo cáo khoa học") nên C cũng sai.\nVì cả A, B, C đều sai nên chọn **D**.',
  sameAs: ['k16-ca2-07'],
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-14', exam: 'de-2021-1', no: 14, chapter: 'ch2', topic: '1.4',
  stem: 'Khẳng định nào sai ?',
  figure: null,
  options: [
    { key: 'A', text: 'Kỹ thuật chuyên biệt hóa trang trong xây dựng mô hình thực thể liên kết mở rộng (EER) còn được gọi là specialization.' },
    { key: 'B', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định kiểu thực thể cha từ các thực thể con.' },
    { key: 'C', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là phương pháp thiết kế từ trên xuống (Top-down)' },
    { key: 'D', text: 'Chuyên biệt hóa trong xây dựng mô hình thực thể liên kết mở rộng (EER) là quá trình xác định tập các kiểu thực thể con của một kiểu thực thể cha dựa trên một số đặc tính riêng biệt nào đó của của các thực thể trong kiểu cha.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Phương án A trong bản gốc gõ dư chữ "trang" (chuyên biệt hóa trong), D lặp chữ "của của".',
  explanation: 'Trong mô hình EER:\n- **Chuyên biệt hóa (*Specialization*)** là thiết kế **từ trên xuống (*Top-down*)**: xuất phát từ một kiểu thực thể cha đã có, phân tách thành các kiểu thực thể con dựa trên những đặc tính riêng biệt (**A, C, D đều đúng**).\n- Ngược lại, quá trình xác định kiểu thực thể cha từ các kiểu thực thể con có đặc điểm chung (từ dưới lên/*Bottom-up*) gọi là **tổng quát hóa (*Generalization*)**, không phải chuyên biệt hóa $\\Rightarrow$ khẳng định **B sai**.',
  source: ['Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'de-2021-1-15', exam: 'de-2021-1', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình thực thể liên kết (ER), thuộc tính nguyên tố (nguyên từ) là:',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính mà giá trị của nó phải được nhập vào khi cài đặt CSDL.' },
    { key: 'B', text: 'Thuộc tính chỉ có thể nhận một giá trị duy nhất cho một thực thể cụ thể.' },
    { key: 'C', text: 'Thuộc tính không thể chia nhỏ thành các phần nhỏ hơn, độc lập và có ý nghĩa.' },
    { key: 'D', text: 'Thuộc tính có thể phân chia thành các thành phần nhỏ hơn, có ý nghĩa độc lập.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm "nguyên từ" (nguyên tử).',
  explanation: 'Theo Slide Ch.2 Mô hình ER – tr.9–11:\n- **Thuộc tính đơn (nguyên tử)**: là thuộc tính không thể chia nhỏ thành các phần riêng biệt nhỏ hơn, độc lập và có ý nghĩa (**C đúng**, ngược với **D** là *thuộc tính phức hợp*).\n- A là định nghĩa *thuộc tính lưu trữ* (tr.11).\n- B là định nghĩa *thuộc tính đơn trị* (tr.10).',
  sameAs: ['giuaki-1-03'],
  source: ['Slide Ch.2 Mô hình ER – tr.9–11']
},
{
  id: 'de-2021-1-16', exam: 'de-2021-1', no: 16, chapter: 'ch2', topic: '2.1',
  stem: 'Cho mô tả sau:” Công ty có nhiều phòng ban (phòng kế toán, phòng kỹ thuật, phòng kinh doanh,...), mỗi phòng ban có một mã số duy nhất, mã số này xác định tên phòng ban và có số điện thoại để liên hệ. Mỗi phòng có một người quản lý, người này cũng là nhân viên của công ty”. Theo mô tả,khi xây dựng mô hình thực thể liên kết(ER), các thuộc tính của thực thể **PHÒNG** gồm:',
  figure: null,
  options: [
    { key: 'A', text: 'Mã phòng, Tên phòng, Địa chỉ, Điện thoại.' },
    { key: 'B', text: 'Mã phòng, Tên phòng, Mã người quản lý, Điện thoại.' },
    { key: 'C', text: 'Mã phòng, Tên phòng, Mã người quản lý, ngày quản lý' },
    { key: 'D', text: 'Mã phòng, Tên phòng, Điện thoại.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo mô tả bài toán và Slide Ch.2 Mô hình ER – tr.27, 32:\n- Thực thể `PHÒNG` có các thuộc tính mô tả trực tiếp gồm: **Mã phòng**, **Tên phòng** và **Điện thoại** (**D đúng**).\n- Loại **A** vì mô tả không nhắc tới `Địa chỉ`.\n- Loại **B** và **C** vì `Mã người quản lý` là khóa ngoại thể hiện liên kết `Quản lý` giữa `PHÒNG` và `NHÂN VIÊN` (chỉ có khi chuyển sang mô hình quan hệ), không phải thuộc tính của thực thể `PHÒNG` trong mô hình ER (`ngày quản lý` cũng là thuộc tính của liên kết).',
  sameAs: ['k16-ca2-10'],
  source: ['Slide Ch.2 Mô hình ER – tr.27, 32']
},
{
  id: 'de-2021-1-17', exam: 'de-2021-1', no: 17, chapter: 'ch2', topic: '2.2',
  stem: 'mô hình thực thể liên kết ER nào sau đây mô tả đúng nhất về thực thể nhân viên với các với các thuộc tính Mã nhân viên, lương, hệ số lương ? Biết rằng lương được tính theo hệ số lương',
  figure: null,
  options: [
    { key: 'A', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 170, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã NV', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'B', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 170, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
      { label: 'HSL', kind: 'derived', dx: 0, dy: -60 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'C', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 170, y: 85, attrs: [
      { label: 'Lương', kind: 'derived', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } },
    { key: 'D', text: '', figure: { type: 'er', spec: { entities: [{ id: 'nv', label: 'NHÂN VIÊN', x: 170, y: 85, attrs: [
      { label: 'Lương', kind: 'multi', dx: -140, dy: 0 },
      { label: 'HSL', dx: 0, dy: -60 },
      { label: 'Mã NV', kind: 'key', dx: 135, dy: 0 }
    ] }] } } }
  ],
  answer: 'C', marked: 'B', outside: false, incomplete: null, note: null,
  explanation: 'Đối chiếu ký hiệu thuộc tính trên Slide Ch.2 Mô hình ER – tr.10–12:\n1. `Mã NV` là **thuộc tính khóa** $\\Rightarrow$ vẽ elip nét liền và **gạch chân** (loại **A** vì không gạch chân).\n2. `Lương` được tính theo hệ số lương nên là **thuộc tính suy dẫn** $\\Rightarrow$ vẽ bằng **elip nét đứt** (loại **D** vì vẽ elip nét đôi của thuộc tính đa trị).\n3. `HSL` là **thuộc tính lưu trữ** (nhập trực tiếp, không suy ra từ thuộc tính khác) $\\Rightarrow$ vẽ bằng **elip nét liền** (loại **B** vì vẽ cả `HSL` nét đứt — đây là bẫy thí sinh hay khoanh nhầm).\nVậy **C** đúng cả ba ký hiệu.',
  sameAs: ['de-2021-2-07'],
  source: ['Slide Ch.2 Mô hình ER – tr.10–12']
},
{
  id: 'de-2021-1-18', exam: 'de-2021-1', no: 18, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: HANG(Mahang, TenHang, DonGia, Donvitinh); ChitietHD(SoHD,MaHang, SLBan). Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu: “Cho biết thông tin về các mặt hàng có đơn giá trên 500,”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{mathang,tenhang}(\\text{HANG}) \\cap \\sigma_{dongia>500}(\\text{HANG})$' },
    { key: 'B', text: '$\\pi_{(mathang,tenhang)}\\sigma_{dongia>500}(\\text{HANG}*\\text{ChitietHD})$' },
    { key: 'C', text: '$\\pi_{(mathang,tenhang)}(\\sigma_{dongia>500}(\\text{HANG}))$' },
    { key: 'D', text: '$\\pi_{(mathang,tenhang)}(\\sigma_{dongia>500}(\\text{HANG}*\\text{Chitiet})$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm tên thuộc tính `Mahang` thành `mathang` ở cả bốn phương án; phương án D viết thiếu tên bảng `ChitietHD` thành `Chitiet` và thiếu dấu ngoặc đóng.',
  explanation: 'Yêu cầu lọc các mặt hàng có `DonGia > 500` chỉ liên quan đến bảng `HANG`, không cần kết nối với `ChitietHD` (nếu nối tự nhiên `HANG * ChitietHD` như ở B và D sẽ làm mất các mặt hàng chưa bán lần nào và thừa phép nối; ngoài ra D còn sai tên bảng `Chitiet` và thiếu ngoặc).\n- **A sai** vì phép giao $\\cap$ chỉ thực hiện được trên hai quan hệ cùng lược đồ, trong khi $\\pi_{mathang,tenhang}(\\text{HANG})$ chỉ có 2 cột còn $\\sigma_{dongia>500}(\\text{HANG})$ có 4 cột.\n- **C đúng**: chọn $\\sigma_{dongia>500}(\\text{HANG})$ rồi chiếu lấy mã và tên hàng.',
  sameAs: ['ltcsdl-de2-18'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.9, 19, 24']
},
{
  id: 'de-2021-1-19', exam: 'de-2021-1', no: 19, chapter: 'ch3', topic: '2.9',
  stem: 'Phép toán sửa đổi trong đại số quan hệ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Sửa đổi giá trị của một quan hệ hay một nhóm các quan hệ' },
    { key: 'B', text: 'Sửa đổi mô tả của thuộc tính' },
    { key: 'C', text: 'Sửa đổi giá trị của một số thuộc tính .' },
    { key: 'D', text: 'Sửa đổi giá trị của một bộ hay một nhóm các bộ' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Các phép toán cập nhật trên mô hình quan hệ (Slide Ch.3 P2 – tr.4–8) đều tác động ở **mức bộ (dòng)**: chèn một bộ mới (`INSERT`), xóa một bộ hay nhóm bộ (`DEL`), và **sửa đổi (thay đổi) giá trị của một bộ hay một nhóm các bộ** (`CH` biến bộ $t$ thành $t\'$ tại các thuộc tính cần sửa).\n- A sai vì không sửa cả quan hệ; B là thay đổi lược đồ (DDL), không phải phép cập nhật dữ liệu; C diễn đạt thiếu đối tượng (bộ dữ liệu) so với định nghĩa chuẩn. Chọn **D**.',
  sameAs: ['k16-ca2-21'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.4, 8']
},
{
  id: 'de-2021-1-20', exam: 'de-2021-1', no: 20, chapter: 'ch3', topic: '1.6',
  stem: 'Phép chiếu $\\pi_x(R)$ là phép toán:',
  figure: null,
  options: [
    { key: 'A', text: 'Loại bỏ một số hàng trong lược đồ R thỏa mãn điều kiện X và giữ lại các hàng không thỏa mãn điều kiện X .' },
    { key: 'B', text: 'Loại bỏ các thuộc tính trong lược đồ R không có trong X và giữ lại các thuộc tính được liệt kê trong danh sách các thuộc tính X.' },
    { key: 'C', text: 'Loại bỏ một số hàng trong lược đồ R không thỏa mãn điều kiện X và giữ lại các hàng thỏa mãn điều kiện X.' },
    { key: 'D', text: 'Loại bỏ đi một số thuộc tính trong lược đồ R có trong X và giữ lại các thuộc tính không có trong danh sách thuộc tính X.' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn định nghĩa trên Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19: "**Phép chiếu** của quan hệ $r$ lên tập thuộc tính $X$ là **loại bỏ đi một số thuộc tính của lược đồ không có trong $X$ và giữ lại những thuộc tính được liệt kê trong danh sách thuộc tính $X$**" (rút trích theo cột).\n- A, C là thao tác theo hàng (phép chọn $\\sigma$).\n- D đảo ngược ý giữ và bỏ. Chọn **B**.',
  sameAs: ['de-2021-2-28'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19']
},
{
  id: 'de-2021-1-21', exam: 'de-2021-1', no: 21, chapter: 'ch3', topic: '1.5',
  stem: 'Trong mô hình cơ sở dữ liệu quan hệ:',
  figure: null,
  options: [
    { key: 'A', text: 'Thứ tự của các hàng là không quan trọng' },
    { key: 'B', text: 'Thứ tự của các cột quan trọng' },
    { key: 'C', text: 'Thứ tự của các hàng là quan trọng' },
    { key: 'D', text: 'Thứ tự của các cột là không quan trọng' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.3 Mô hình quan hệ (P1) – tr.10 (*Các đặc trưng của quan hệ*), một quan hệ là tập hợp các bộ nên **thứ tự các bộ (các hàng) trong quan hệ là không quan trọng** (đảo thứ tự các dòng vẫn là cùng một quan hệ) $\\Rightarrow$ **A đúng**, loại C.\nLưu ý: slide chỉ quy định thứ tự *các giá trị trong một bộ* (khi chưa gắn tên cột) là quan trọng, còn trên bảng quan hệ có tên thuộc tính thì không xét thứ tự cột theo cách ở B, D.',
  sameAs: ['de-2021-2-25'],
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.10']
},
{
  id: 'de-2021-1-22', exam: 'de-2021-1', no: 22, chapter: 'ch3', topic: '1.5',
  stem: 'Đặc điểm của mô hình CSDL quan hệ là?',
  figure: null,
  options: [
    { key: 'A', text: 'Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ' },
    { key: 'B', text: 'Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp' },
    { key: 'C', text: 'Là cơ sở của các HQT CSDL quan hệ thương mại hiện nay' },
    { key: 'D', text: 'Tất cả các phương án trên đều đúng.' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Trích nguyên văn Slide Ch.3 Mô hình quan hệ (P1) – tr.2: mô hình dữ liệu quan hệ (E. F. Codd, 1970) có cả ba đặc điểm:\n- Cung cấp một cấu trúc dữ liệu đơn giản, đồng bộ (**A**).\n- Có nền tảng lý thuyết vững chắc là lý thuyết tập hợp (**B**).\n- Là cơ sở của các HQT CSDL thương mại hiện nay như Oracle, MySQL, SQL Server… (**C**).\nChọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.2']
},
{
  id: 'de-2021-1-23', exam: 'de-2021-1', no: 23, chapter: 'ch3', topic: '2.13',
  stem: 'Cho các lược đồ quan hệ sau: KHACH(Makhach,Hoten, Diachi, Dienthoai);HOADON(SoHD, NgaylapHD, Ngayban, Makhach); HANG(Mahang,Tenhang,Dongia,Donvitinh); ChitietHD(SoHD, Mahang, SLBan), Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu:” Lấy thông tin gồm số hóa đơn, tên hàng, số lượng, hàng đã bán được cho khách hàng KH007 trong năm 2020”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{(SoHD,Mahang,SLBan)}(\\sigma_{maKH=\\text{"KH007"} \\text{ AND } year(ngaylapHD)=2020}(ChitietHD*HoaDon*Hang))$' },
    { key: 'B', text: '$\\pi_{(SoHD,Mahang,SLBan)}(\\sigma_{maKH=\\text{"KH007"},year(ngaylapHD)=2020}(ChitietHD*HoaDon*Hang))$' },
    { key: 'C', text: '$\\pi_{(SoHD,Mahang,SLBan)}(\\sigma_{maKH=\\text{"KH007"},ngaylap=2020}(ChitietHD*HoaDon*Hang))$' },
    { key: 'D', text: '$\\pi_{(SoHD,Mahang,SLBan)}(\\sigma_{maKH=\\text{"KH007"} \\text{ AND } ngaylap=2020}(ChitietHD*HoaDon*Hang))$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Cả bốn phương án trong ảnh gốc đều chiếu `(SoHD, Mahang, SLBan)` (gõ nhầm `Mahang` thay cho `Tenhang` trong yêu cầu "tên hàng") và viết tắt `maKH` thay cho `Makhach`; xét theo cú pháp đúng của phép chọn, A là phương án duy nhất hợp lệ.',
  explanation: 'Kiểm tra biểu thức điều kiện trong phép chọn $\\sigma$ (Slide Ch.3 P2 – tr.24):\n1. Phải kết hợp các điều kiện bằng phép logic `AND` ($\\land$), không được dùng dấu phẩy `,` $\\Rightarrow$ loại **B** và **C**.\n2. Để lọc hóa đơn lập trong năm `2020` từ cột ngày tháng `NgaylapHD`, phải dùng hàm `year(ngaylapHD)=2020` chứ không so sánh trực tiếp `ngaylap=2020` $\\Rightarrow$ loại **C** và **D**.\n3. Kết nối tự nhiên `ChitietHD * HoaDon * Hang` lấy đủ `Makhach`, `NgaylapHD`, `SoHD`, `SLBan`. Vậy chọn **A**.',
  sameAs: ['k17-ca1-25'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'de-2021-1-24', exam: 'de-2021-1', no: 24, chapter: 'ch3', topic: '2.8',
  stem: 'Chọn phương án đúng nhất khi thực hiện chuyển mối quan hệ 1-n trong mô hình ER sang mô hình CSDL quan hệ:',
  figure: { type: 'er', spec: {
    entities: [
      { id: 'nv', label: 'NHÂN VIÊN', x: 205, y: 100, attrs: [
        { label: 'MANV', kind: 'key', dx: 0, dy: 64 },
        { label: '', dx: -125, dy: 0, side: 'left', parts: [
          { label: 'Ho', dx: -68, dy: -45 },
          { label: 'TEN', dx: -68, dy: 45 }
        ] }
      ] },
      { id: 'tn', label: 'THANH NHAN', x: 530, y: 100, attrs: [
        { label: 'Ten TN', dx: 0, dy: -64 },
        { label: 'Gioi tinh', dx: -55, dy: 64 },
        { label: 'Quan he', dx: 60, dy: 64 }
      ] }
    ],
    rels: [{ id: 'co', label: 'CÓ', x: 365, y: 100, links: [{ to: 'nv' }, { to: 'tn' }] }]
  } },
  options: [
    { key: 'A', text: 'NHANVIEN($\\underline{\\text{MaNV}}$ , Ho, ten, Gioitinh,Quan he)' },
    { key: 'B', text: 'THANHNHAN(TenTN, Gioitinh, Quan he)' },
    { key: 'C', text: 'NHANVIEN(MaNV, Ho Ten, Ten TN, Gioitinh,Quan he)' },
    { key: 'D', text: 'THANHNHAN(MaNV, TenTN, Gioitinh, Quan he)' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null,
  note: 'Trong hình gốc, oval phức hợp nối với `Ho`, `TEN` bị để trống tên và hai cạnh của `CÓ` không ghi nhãn bản số `1`, `n` (đề bài nêu rõ là quan hệ 1-n); phương án D cũng không gạch chân thuộc tính khóa.',
  explanation: 'Theo Quy tắc 5 (Slide Ch.3 P1 – tr.25 – *Chuyển liên kết 1–n*): **đặt khóa của thực thể bên phía một (`MaNV` của `NHÂN VIÊN`) vào lược đồ quan hệ của thực thể bên phía nhiều (`THANHNHAN`)**.\n- Kết quả tạo 2 quan hệ: `NHANVIEN`($\\underline{\\text{MaNV}}$, `Ho`, `TEN`) và `THANHNHAN`(`MaNV`, `TenTN`, `Gioitinh`, `Quan he`).\n- Loại **A, C** vì gộp nhầm thuộc tính của `THANHNHAN` sang `NHANVIEN`.\n- Loại **B** vì thiếu khóa `MaNV` để liên kết về nhân viên. Chọn **D**.',
  source: ['Slide Ch.3 Mô hình quan hệ (P1) – tr.25']
}
);

DB.questions.push(
{
  id: 'de-2021-1-25', exam: 'de-2021-1', no: 25, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: BANDOC(MaBD, TenBD, Lop,Ngaycap), SACH(MaS, TenSach,Tacgia, NhaXuatBan) và PhIEUMUON(MaBD, MaS, Ngaymuon,Trasach). Trong đó trasach nhận giá trị YES/NO. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau :” Đưa ra danh sách mã và tên của những bạn đọc hiện đang mượn giáo trình Cấu trúc dữ liệu của thư viện”)?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{tenSach=\\text{"Cấu trúc dữ liệu"} \\text{ AND } trasach = No}(\\pi_{maBD,ten,BD}(BANDOC*PHIEUMUON*SACH))$' },
    { key: 'B', text: '$\\pi_{maBD,tenBD}(\\sigma_{tenSach=\\text{"Cấu trúc dữ liệu"},trasach = No}(BANDOC*PHIEUMUON*SACH))$' },
    { key: 'C', text: '$\\pi_{maBD,tenBD}(\\sigma_{tenSach=\\text{"Cấu trúc dữ liệu"} \\text{ AND } trasach = No}(BANDOC*PHIEUMUON*SACH))$' },
    { key: 'D', text: '$\\pi_{maBD,tenBD}(\\sigma_{tenSach=\\text{"Cấu trúc dữ liệu"}}(BANDOC*PHIEUMUON*SACH))$' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Phương án A trong ảnh gốc gõ nhầm `ten,BD` (thừa dấu phẩy); tên quan hệ trong đề gõ `PhIEUMUON` (không phân biệt hoa/thường ở tên bảng).',
  explanation: 'Để tìm bạn đọc **hiện đang mượn** sách `"Cấu trúc dữ liệu"`, cần nối ba bảng `BANDOC * PHIEUMUON * SACH`, lọc đồng thời hai điều kiện `tenSach="Cấu trúc dữ liệu"` **AND** `trasach = No` (chưa trả), rồi mới chiếu lấy `maBD, tenBD`:\n- **A sai** vì chiếu `maBD, ten, BD` trước làm mất hai cột `tenSach` và `trasach` cần cho phép chọn $\\sigma$ bên ngoài.\n- **B sai** vì dùng dấu phẩy `,` thay cho `AND` trong điều kiện của $\\sigma$.\n- **D sai** vì thiếu điều kiện `trasach = No` (lấy cả những người đã trả sách). Chọn **C**.',
  sameAs: ['ltcsdl-de2-26'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.19, 24, 38']
},
{
  id: 'de-2021-1-26', exam: 'de-2021-1', no: 26, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: SinhVien(MaS,Hoten, Gioitinh, Ngaysinh, Que); Monhoc(MaMon, TenMon, SoTC); KetQua(MaSV, MaMon, Diem). Biểu thức ĐSQH nào sau đây biểu diễn không chính xác yêu cầu : “Cho biết mã số và tên sinh viên thì món có mã số T11 đạt điểm >=5”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{maSV,Hoten}((\\sigma_{DIEM\\ge 5 \\cap MaMon=\\text{"T11"}}(KetQua)*SinhVien)$' },
    { key: 'B', text: '$\\pi_{maSV,Hoten}((\\sigma_{DIEM\\ge 5}(KetQua*SinhVien))\\cap \\pi_{maSV,Hoten}(\\sigma_{MaMon=\\text{"T11"}}(KetQua*Sinhvien))$' },
    { key: 'C', text: '$\\pi_{maSV,Hoten}((\\sigma_{DIEM\\ge 5 \\text{ AND } MaMon=\\text{"T11"}}(KetQua*SinhVien))$' },
    { key: 'D', text: '$\\pi_{maSV,Hoten}((\\sigma_{DIEM\\ge 5 \\text{ AND } MaMon=\\text{"T11"}}(KetQua)*SinhVien)$' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm `MaS` ở `SinhVien` (đúng là `MaSV`), "thì món" (thi môn), và dư một dấu ngoặc mở `((` ở A, C, D; ngoài ra phương án B cũng có lỗi ngữ nghĩa nếu một SV đạt $\\ge 5$ ở môn khác và $< 5$ ở `T11`.',
  explanation: 'Đề hỏi biểu thức **không chính xác**:\n- **A sai hoàn toàn về cú pháp ĐSQH**: bên trong điều kiện của phép chọn $\\sigma$ chỉ được dùng phép nối logic (`AND`/$\\land$, `OR`/$\\lor$, `NOT`/$\\neg$), **không được dùng phép giao tập hợp $\\cap$** (Slide Ch.3 P2 – tr.24).\n- **C** và **D** đúng logic (chọn `DIEM >= 5 AND MaMon="T11"` rồi nối `SinhVien` và chiếu `maSV, Hoten`, chỉ khác thứ tự chọn trước/sau nối).\n- Lưu ý thêm: **B** dùng $\\cap$ sau khi đã chiếu `maSV, Hoten` nên nếu một SV thi môn khác $\\ge 5$ và trượt `T11` vẫn bị lọt vào kết quả; tuy nhiên trong bộ đề chuẩn (xem Đề mẫu 720 – câu 24), phương án dùng $\\cap$ ngay trong điều kiện $\\sigma$ là **A** được xác định là đáp án sai cần chọn.',
  sameAs: ['de-mau-720-24'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.12, 24']
},
{
  id: 'de-2021-1-27', exam: 'de-2021-1', no: 27, chapter: 'ch3', topic: '2.12',
  stem: 'Cho ba lược đồ quan hệ sau: BANDOC(MaBD, TenBD, Lop,Ngaycap), SACH(MaS, TenSach,Tacgia, NhaXuatBan) và PhIEUMUON(MaBD, MaS, Ngaymuon,Trasach). Trong đó trasach nhận giá trị YES/NO. Biểu thức ĐSQH nào sau đây biểu diễn chính xác yêu cầu sau :” đưa ra danh sách các bạn đọc của lớp H28 được cấp thể trước ngày 30/12/2020”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\sigma_{lop=H28 \\text{ AND } ngaycap=\\text{"30/12/2020)"}}(BANDOC)$' },
    { key: 'B', text: '$\\sigma_{lop=H28,ngaycap=\\text{"30/12/2020)"}}(BANDOC)$' }
  ],
  answer: null, marked: null, outside: false,
  incomplete: 'Ảnh gốc chỉ chụp đến phương án B (thiếu C và D)',
  note: 'Đề gốc gõ "cấp thể" (cấp thẻ); cả hai phương án A, B hiện có đều dùng dấu `=` thay vì `<` cho điều kiện "trước ngày 30/12/2020" và gõ nhầm dấu `)` vào chỉ số dưới nên không thể xác định đáp án đúng.',
  explanation: 'Biểu thức đúng cho yêu cầu "bạn đọc lớp H28 được cấp thẻ **trước ngày** 30/12/2020" phải lọc trên `BANDOC` bằng phép chọn với phép `AND` và dấu so sánh nhỏ hơn `<`:\n$$\\sigma_{\\text{Lop}=\\text{‘H28’} \\land \\text{Ngaycap}<\\text{‘30/12/2020’}}(\\text{BANDOC})$$\nCả **A** và **B** trong phần còn lại của đề đều viết sai thành `ngaycap="30/12/2020)"` (dùng `=` thay vì `<`), đồng thời B còn dùng dấu phẩy `,` thay cho `AND`. Phương án đúng nhiều khả năng nằm ở C hoặc D bị thiếu.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.24']
},
{
  id: 'de-2021-1-28', exam: 'de-2021-1', no: 28, chapter: 'ch3', topic: '2.11',
  stem: 'Thứ tự để thực hiện các phép toán để tối ưu hóa biểu thức truy vấn dữ liệu:',
  figure: null,
  options: [
    { key: 'A', text: 'Phép nối, phép chọn, phép chiếu.' },
    { key: 'B', text: 'Phép chọn, phép kết nối, phép chiếu.' },
    { key: 'C', text: 'Phép chiếu, phép kết nối, phép chọn.' },
    { key: 'D', text: 'Phép chiếu, phép chọn, phép kết nối.' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null,
  note: 'Lưu ý chuẩn kiến thức (như Đề mẫu 720 – câu 17): thứ tự tối ưu heuristic đầy đủ là **Phép chọn $\\to$ Phép chiếu $\\to$ Phép kết nối**. Bộ đề năm 2021 không có phương án này; trong 4 lựa chọn hiện có, B là phương án duy nhất thực hiện phép chọn đầu tiên (trước cả kết nối và chiếu).',
  explanation: 'Theo nguyên tắc heuristic tối ưu hóa biểu thức ĐSQH:\n1. **Phép chọn ($\\sigma$)** luôn phải thực hiện **sớm nhất** để giảm nhanh số lượng bộ (hàng), và phải thực hiện **trước phép chiếu** (nếu chiếu trước ở C, D có thể làm mất các cột điều kiện cần lọc).\n2. Thực hiện phép nối trên lượng dữ liệu đã thu gọn rồi chiếu ra các cột kết quả.\nLoại A (nối trước rất tốn chi phí) và loại C, D (chiếu trước khi chọn); trong 4 phương án của đề, chọn **B**.',
  sameAs: ['k16-ca2-28'],
  source: ['Kiến thức bổ sung (ngoài slide) – Tối ưu hóa truy vấn ĐSQH']
},
{
  id: 'de-2021-1-29', exam: 'de-2021-1', no: 29, chapter: 'ch3', topic: '2.10',
  stem: 'Cho hai quan hệ DOT(MaSV, Hoten) và DOT2(MaSV, Hoten): chứa danh sách các sinh viên được khen thưởng ở học kì 1 và học kì 2. Biểu thức ĐSC đúng theo yêu cầu “ Lập danh sách các sinh viên được khen thưởng học kì 1 mà không được khen trong học kì 2”?',
  figure: null,
  options: [
    { key: 'A', text: 'DOT1- DOT2' },
    { key: 'B', text: 'DOT1 $\\cap$ DOT2' },
    { key: 'C', text: 'DOT1 X DOT2' },
    { key: 'D', text: 'DOT1 $\\cup$ DOT2' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ thiếu số `1` ở tên quan hệ `DOT` trong câu dẫn (đúng là `DOT1`) và viết nhầm `ĐSC` thay cho `ĐSQH`.',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16 (*Phép trừ – Minus*): phép trừ $r - s$ cho kết quả gồm các bộ **có trong $r$ nhưng không có trong $s$**.\n- Để lấy sinh viên khen thưởng ở học kì 1 (`DOT1`) mà không được khen thưởng ở học kì 2 (`DOT2`), ta dùng **A**: `DOT1 - DOT2`.\n- B ($\\cap$) lấy cả hai đợt; C ($\\times$) là tích Đề-các; D ($\\cup$) lấy đợt 1 hoặc đợt 2.',
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.14–16']
},
{
  id: 'de-2021-1-30', exam: 'de-2021-1', no: 30, chapter: 'ch3', topic: '2.14',
  stem: 'Cho CSDL gồm các quan hệ sau: SinhVien(MaS, Hoten, Gioitinh, Ngaysinh, Que); Monhoc(MaMon,TenMon,SoTC); KetQua(MaSV, MaMon,Diem). Biểu thức biểu diễn chính xác yêu cầu: “Cho biết tên của những sinh viên đã thi hết tất cả các môn trong bảng Môn học”?',
  figure: null,
  options: [
    { key: 'A', text: '$\\pi_{Hoten}((\\pi_{MaSV,MaMon}(KetQua) - \\pi_{MaMon}(MonHoc))*SinhVien)$' },
    { key: 'B', text: '$\\pi_{Hoten}((\\pi_{MaSV,MaMon}(KetQua) \\div \\pi_{MaMon}(MonHoc))*SinhVien)$' },
    { key: 'C', text: '$\\pi_{Hoten}(\\pi_{MaSV,MaMon}(KetQua) \\div \\pi_{MaMon}(MonHoc)*SinhVien)$' },
    { key: 'D', text: '$\\pi_{Hoten}(\\pi_{MaSV,MaMon}(KetQua) - \\pi_{MaMon}(MonHoc)*SinhVien)$' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null,
  note: 'Đề gốc gõ nhầm tên khóa của `SinhVien` là `MaS` (lẽ ra là `MaSV` để kết nối tự nhiên được với kết quả phép chia).',
  explanation: 'Theo Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31 (*Phép chia – Division*): với yêu cầu **"tất cả các môn"**, ta lấy hình chiếu 2 cột $(\\text{MaSV}, \\text{MaMon})$ của `KetQua` **chia** ($\\div$) cho danh sách tất cả $\\text{MaMon}$ của `MonHoc` để thu được các `MaSV` thi đủ mọi môn, sau đó đóng ngoặc rồi mới nối `* SinhVien` và chiếu `Hoten`.\n- **A, D sai** vì dùng phép trừ `-` (hai vế khác lược đồ nên không trừ được).\n- **C sai** vì thiếu ngoặc đơn bao quanh phép chia, khiến `* SinhVien` gắn nhầm vào `MonHoc`. Chọn **B**.',
  sameAs: ['de-2021-2-22'],
  source: ['Slide Ch.3 Các phép toán ĐSQH (P2) – tr.29–31']
},
{
  id: 'de-2021-1-37', exam: 'de-2021-1', no: 37, chapter: 'ch4', topic: '3.1',
  stem: 'Khẳng định nào sau đây là đúng nhất ?',
  figure: null,
  options: [
    { key: 'A', text: '$A \\to B$ và $BC \\to Z$ thì $AC \\to Z$' },
    { key: 'B', text: '$AC \\to B$ và $B \\to Z$ thì $AC \\to Z$' },
    { key: 'C', text: 'Cả A và B đều đúng' },
    { key: 'D', text: 'Cả A và B đều sai' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Áp dụng hệ tiên đề Armstrong và các luật mở rộng (Slide Ch.4 Phụ thuộc hàm – tr.9–10):\n- **A đúng** theo **luật tựa bắc cầu** (*Nếu $X \\to Y$ và $WY \\to Z$ thì $XW \\to Z$*): từ $A \\to B$ gia tăng thêm $C$ được $AC \\to BC$, kết hợp $BC \\to Z$ theo bắc cầu suy ra $AC \\to Z$ (kiểm tra bao đóng: $(AC)^+ = ABCZ \\supseteq Z$).\n- **B đúng** theo **luật bắc cầu**: từ $AC \\to B$ và $B \\to Z$ suy ra $AC \\to Z$ (kiểm tra bao đóng: $(AC)^+ = ABCZ \\supseteq Z$).\nCả A và B đều đúng $\\Rightarrow$ chọn **C**.',
  source: ['Slide Ch.4 Phụ thuộc hàm – tr.9–10']
},
{
  id: 'de-2021-1-38', exam: 'de-2021-1', no: 38, chapter: 'ch4', topic: '3.10',
  stem: 'Lược đồ quan hệ R(Mã số, Họ tên, địa chỉ) ở dạng chuẩn nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Dạng chuẩn 2NF, không là 3NF' },
    { key: 'B', text: 'Dạng chuẩn 1NF, không là 2NF' },
    { key: 'C', text: 'Dạng chuẩn 3NF' },
    { key: 'D', text: 'Dạng chuẩn 2NF, không là 3NF' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Phương án A và D trong ảnh gốc giống hệt nhau (đều là phương án nhiễu `2NF, không là 3NF`); đề không gạch chân khóa hay cho tập phụ thuộc hàm tường minh, ngầm hiểu `Mã số` là khóa chính duy nhất như ở Đề mẫu 720 – câu 49.',
  explanation: 'Giả thiết lược đồ ở 1NF và có khóa là `Mã số` (chỉ gồm 1 thuộc tính) cùng tập PTH $F = \\{\\text{Mã số} \\to \\text{Họ tên},\\; \\text{Mã số} \\to \\text{địa chỉ}\\}$ (Slide Ch.4 Chuẩn hóa – tr.8, 15, 21, 23):\n1. Vì mọi khóa chỉ có 1 thuộc tính (`Mã số`), không thể có phụ thuộc hàm bộ phận vào một phần của khóa $\\Rightarrow R$ đạt **2NF** (loại B).\n2. Giữa các thuộc tính không khóa (`Họ tên` và `địa chỉ`) không có phụ thuộc bắc cầu vào khóa (mọi PTH đều có vế trái là siêu khóa `Mã số`) $\\Rightarrow R$ đạt **3NF** (và đạt cả BCNF) (loại A và D).\nChọn **C**.',
  source: ['Slide Ch.4 Chuẩn hóa CSDL – tr.8, 15, 21, 23']
},
{
  id: 'de-2021-1-39', exam: 'de-2021-1', no: 39, chapter: 'ch4', topic: '1.7',
  stem: 'Khẳng định nào sau đây là sai?',
  figure: null,
  options: [
    { key: 'A', text: 'Bối cảnh của một ràng buộc toàn vẹn là những quan hệ mà ràng buộc đó có hiệu lực.' },
    { key: 'B', text: 'Bằng tầm ảnh hưởng được sử dụng để kiểm tra ràng buộc toàn vẹn tại những thời điểm cập nhập dữ liệu.' },
    { key: 'C', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ chỉ được biểu diễn bằng ngôn ngữ đại số tập hợp.' },
    { key: 'D', text: 'Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng các phụ thuộc hàm.' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null,
  note: 'Phương án B trong ảnh gốc gõ nhầm "Bằng tầm ảnh hưởng" (Bảng tầm ảnh hưởng) và "cập nhập" (cập nhật).',
  explanation: 'Theo Slide Ch.4 Tổng quan TKCSDL – tr.15–17 (*Các yếu tố của RBTV*):\n- **A đúng**: bối cảnh là những quan hệ mà RBTV có hiệu lực (tr.16).\n- **B đúng**: bảng tầm ảnh hưởng dùng để kiểm tra RBTV tại các thời điểm cập nhật Thêm/Sửa/Xóa (tr.17).\n- **C sai**: Slide tr.15 nêu rõ "*Điều kiện của một ràng buộc toàn vẹn quan hệ có thể được biểu diễn bằng ngôn ngữ tự nhiên, thuật giải, ngôn ngữ đại số tập hợp, đại số quan hệ,... Ngoài ra cũng có thể được biểu diễn bằng phụ thuộc hàm*" (**D đúng**). Dùng từ "**chỉ** được biểu diễn bằng ngôn ngữ đại số tập hợp" là sai $\\Rightarrow$ chọn **C**.',
  sameAs: ['k16-ca2-34'],
  source: ['Slide Ch.4 Tổng quan TKCSDL – tr.15–17']
}
);
