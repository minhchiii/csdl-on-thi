/* Ch.2 – Mô hình thực thể liên kết ER và EER – nguồn: Slide Ch.2 Mô hình ER + bổ sung EER */
DB.summary.push({
  id: 'ch2',
  chapter: 'ch2',
  order: 1,
  title: 'Mô hình thực thể liên kết ER và EER',
  sections: [
    {
      id: 'ch2-dn-thucthe',
      title: 'Định nghĩa mô hình ER và phân loại thực thể',
      source: 'Slide Ch.2 Mô hình ER – tr.1–6',
      outside: false,
      blocks: [
        { t: 'p', text: 'Mô hình thực thể liên kết (**ER – Entity-Relationship**) được dùng ở giai đoạn phân tích thiết kế mức quan niệm để biểu diễn yêu cầu dữ liệu của bài toán trước khi chuyển sang bảng quan hệ.' },
        { t: 'def', term: 'Định nghĩa mô hình ER (slide tr.2)', text: 'Là một mô hình **mô tả súc tích** về các yêu cầu dữ liệu trong bài toán của người dùng (các đối tượng và mối quan hệ giữa các đối tượng trong thế giới thực), gồm mô tả chi tiết của:\n- **Thực thể / Tập thực thể** (*Entity Sets*)\n- **Thuộc tính** (*Attributes*)\n- **Liên kết** (*Relationship*) và **các ràng buộc**.' },
        { t: 'def', term: 'Thực thể, kiểu thực thể và thể hiện (slide tr.3–4)', text: '- **Thực thể (*Entity*)**: một vật hoặc đối tượng (cụ thể hay trừu tượng) trong thế giới thực, tồn tại độc lập và phân biệt được với các đối tượng khác.\n- **Kiểu thực thể (*Entity Type*)**: tập hợp các thực thể giống nhau có cùng đặc trưng (VD: kiểu thực thể `SINHVIEN`, còn `"Nguyễn An – SV2026"` là một **thể hiện** của `SINHVIEN`). Tên kiểu thực thể không được trùng nhau và thường là **danh từ**.\n- Ghi chú thuật ngữ (tr.3): Thực thể $\\Leftrightarrow$ Tập thực thể (*Entity set*); Đối tượng $\\Leftrightarrow$ Lớp đối tượng (*Class of objects*).' },
        { t: 'list', items: ['**Thực thể cụ thể**: cảm nhận được bằng **giác quan** (VD: sinh viên, giảng viên, nhân viên…).', '**Thực thể trừu tượng**: không cảm nhận bằng giác quan mà nhận biết bằng **nhận thức** (VD: môn học, đơn vị, khoa, bộ môn, điểm…).'] },
        { t: 'table', caption: 'Phân loại kiểu thực thể: Thực thể mạnh vs Thực thể yếu (slide tr.5)', head: ['Tiêu chí', 'Thực thể mạnh (Strong Entity)', 'Thực thể yếu (Weak Entity)'], rows: [['Sự tồn tại', 'Tồn tại **độc lập** với các thực thể khác.', '==Sự tồn tại phụ thuộc== vào một thực thể khác (**thực thể sở hữu / chủ**); luôn được biểu diễn cùng thực thể sở hữu.'], ['Ký hiệu thực thể', 'Hình chữ nhật **nét đơn**.', 'Hình chữ nhật **nét đôi**.'], ['Liên kết đi kèm', 'Liên kết thường (hình thoi nét đơn).', '==Liên kết sở hữu / định danh== (hình thoi **nét đôi**); phía thực thể yếu tham gia toàn bộ (**nét đôi**).'], ['Khóa', 'Có khóa riêng (gạch chân liền nét).', 'Không đủ khóa toàn cục; dùng **khóa bộ phận** (gạch chân **nét đứt**) ghép với khóa của thực thể chủ.']] },
        { t: 'figure', spec: {
          entities: [
            { id: 'nv', label: 'NHÂN VIÊN', x: 95, y: 80, attrs: [
              { label: 'Mã NV', kind: 'key', dx: -45, dy: -62 },
              { label: 'Họ tên', dx: 55, dy: -62 }
            ] },
            { id: 'tn', label: 'THÂN NHÂN', x: 425, y: 80, weak: true, attrs: [
              { label: 'Tên TN', kind: 'partial', dx: -45, dy: -62 },
              { label: 'Quan hệ', dx: 55, dy: -62 }
            ] }
          ],
          rels: [
            { id: 'co', label: 'Có', x: 260, y: 80, ident: true, links: [
              { to: 'nv', card: '1', total: false },
              { to: 'tn', card: 'n', total: true }
            ] }
          ]
        }, caption: 'Thực thể mạnh NHÂN VIÊN, thực thể yếu THÂN NHÂN (chữ nhật đôi), liên kết định danh Có (thoi đôi) và khóa bộ phận Tên TN (gạch chân nét đứt) – slide tr.5–6.' },
        { t: 'example', title: 'Ví dụ (slide tr.6 & BT Ch.2) – Nhận diện thực thể mạnh và yếu', prompt: 'Xác định kiểu thực thể mạnh, thực thể yếu và khóa bộ phận trong hai trường hợp:\n1. Quản lý nhân viên và người thân (thân nhân) hưởng bảo hiểm theo nhân viên (slide tr.6).\n2. Quản lý tòa nhà và các phòng trong tòa nhà, biết `Số_phòng` chỉ duy nhất trong phạm vi từng tòa nhà.', solution: '*(Lời giải tự làm)*\n1. `NHÂN VIÊN` là **thực thể mạnh** (khóa `Mã NV`). `THÂN NHÂN` là **thực thể yếu** phụ thuộc tồn tại vào `NHÂN VIÊN`, nối qua liên kết định danh `Có` (thoi đôi, `1:n`, nét đôi phía `THÂN NHÂN`); khóa bộ phận là `Tên TN`.\n2. `TÒA NHÀ` là **thực thể mạnh** (`Mã tòa nhà`). `PHÒNG` là **thực thể yếu** vì `Số_phòng` (như `"101"`) có thể lặp ở nhiều tòa nhà khác nhau, chỉ phân biệt được khi ghép cùng `TÒA NHÀ`.' },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **3 dấu hiệu nhận diện thực thể yếu**: (1) mô tả nói *"phụ thuộc vào..."*, *"chỉ duy nhất trong phạm vi..."*; (2) thực thể vẽ **HCN nét đôi** đi kèm liên kết sở hữu **thoi đôi** + đường nối **nét đôi**; (3) khóa riêng chỉ là khóa bộ phận (như `Tên TN`, `Số phòng`).\n- **Tránh bẫy**: không phải mọi thực thể bên nhiều của `1:n` đều là thực thể yếu! Nếu thực thể đó có khóa định danh độc lập toàn hệ thống (như `HÓA ĐƠN` có `Mã HĐ`), nó vẫn là **thực thể mạnh** (có thể tham gia toàn bộ bằng nét đôi).' }
      ]
    },
    {
      id: 'ch2-thuoctinh-khoa',
      title: 'Thuộc tính và Khóa trong mô hình ER',
      source: 'Slide Ch.2 Mô hình ER – tr.7–14',
      outside: false,
      blocks: [
        { t: 'def', term: 'Thuộc tính (slide tr.7)', text: 'Là yếu tố thông tin cho biết rõ hơn về thực thể (các tính chất mô tả đặc trưng và thông tin cần lưu trữ của thực thể). Mỗi thực thể cụ thể có một giá trị cho mỗi thuộc tính (VD: nhân viên `NV1` có Họ tên, Ngày sinh, Địa chỉ, Lương là `"Lê Vân"`, `1/5/1986`, `"Hà Nội"`, `500000`). Ký hiệu: **hình elip nét đơn** gắn với thực thể.' },
        { t: 'list', items: ['Mỗi thuộc tính trong ER đều có: **tên gọi** (thường là danh từ hoặc danh từ và tính từ), **miền giá trị** và **kiểu dữ liệu**.', '**Bẫy kiểu dữ liệu (BT Ch.2 & đề thi)**: `Số điện thoại` là **chuỗi ký tự** (vì có thể bắt đầu bằng chữ số `0` và không dùng để cộng trừ), **không** chọn kiểu số nguyên; `Tuổi` là số nguyên; `Tên người` là chuỗi ký tự; `Ngày sinh` là kiểu ngày tháng (hoặc chuỗi tùy hệ).'] },
        { t: 'table', caption: '3 cặp phân loại thuộc tính cơ bản (slide tr.8–11)', head: ['Nhóm phân loại', 'Định nghĩa & Ký hiệu', 'Ví dụ điển hình'], rows: [['**Đơn (nguyên tử)**', 'Không thể chia nhỏ thành các phần nhỏ hơn độc lập và có ý nghĩa (elip đơn).', '`Masv`, `Giới tính`, `Điểm`, `Tuổi`'], ['**Phức hợp**', 'Có thể phân chia thành các thành phần nhỏ hơn có ý nghĩa độc lập (elip gốc nối các elip con).', '`Ngaysinh` $\\to$ `Ngay, Thang, Nam`; `Họ tên` $\\to$ `Họ, Tên`; `Địa chỉ` $\\to$ `Xã, Phường, Tỉnh`'], ['**Đơn trị**', 'Chỉ nhận **một giá trị duy nhất** cho một thực thể cụ thể (elip đơn).', '`Ngày_sinh`, `Mã SV`, `Giới tính`'], ['**Đa trị**', 'Có thể nhận nhiều giá trị đồng thời cho một thực thể (**==elip kép / nét đôi==**).', '`Điện_thoại`, `Kỹ_năng`, `Ngoại_ngữ`, nhiều `Địa chỉ`'], ['**Lưu trữ**', 'Giá trị phải được nhập trực tiếp vào khi cài đặt CSDL (từ bàn phím) (elip đơn).', '`Ngày_sinh`, `Hệ_số_lương`, `Đơn_giá`'], ['**Suy dẫn (dẫn xuất)**', 'Giá trị được tính suy ra từ thuộc tính khác theo một nguyên tắc nào đó, không phải nhập (**==elip nét đứt==**).', '`Tổng_tiền`, `Năm_công_tác`, `Tuổi` (từ `Ngày_sinh`), `Lương` (từ `HSL`)']] },
        { t: 'note', text: 'Lưu ý từ đề thi: một thuộc tính có thể **vừa đa trị vừa phức hợp** — ví dụ `Khách hàng` có *nhiều* `Địa chỉ` liên lạc, mỗi địa chỉ gồm `Xã`, `Phường`, `Tỉnh`: khi đó elip `Địa chỉ` vẽ **nét đôi (đa trị)** và nối ra 3 elip con `Xã, Phường, Tỉnh` nét đơn.' },
        { t: 'def', term: 'Khóa của kiểu thực thể (slide tr.12)', text: 'Là tập thuộc tính có giá trị duy nhất giúp phân biệt thực thể này với thực thể khác trong cùng một kiểu thực thể. Một kiểu thực thể **có thể có nhiều khóa** (khóa ứng viên). Ký hiệu: hình elip có **đường gạch chân liền nét** dưới tên thuộc tính.' },
        { t: 'steps', title: '4 gợi ý lựa chọn thuộc tính khóa (slide tr.13)', items: ['Giá trị của nó **không bị thay đổi** theo thời gian.', 'Giá trị của nó **không được phép bỏ trống** (`NOT NULL`).', '**Tránh** sử dụng những thuộc tính mà giá trị thể hiện thông tin hoặc cấu trúc thể hiện sự phân loại, vị trí…', '**Nên chọn thuộc tính đơn** làm khóa thay vì kết hợp nhiều thuộc tính.'] },
        { t: 'example', title: 'Ví dụ (slide tr.14) – Biểu diễn thực thể NHÂN VIÊN', prompt: 'Thông tin về nhân viên gồm có: Mã nhân viên, họ tên, ngày sinh, Hệ số lương, bằng cấp và lương. Hãy biểu diễn thực thể Nhân viên cùng các thuộc tính bằng mô hình ER?', solution: '*(Lời giải tự làm)* Xác định vai trò từng thuộc tính của thực thể `NHÂN VIÊN`:\n- `Mã NV`: **thuộc tính khóa** (elip nét liền, gạch chân).\n- `Họ tên`: **thuộc tính phức hợp** tách thành `Họ`, `Tên` (hoặc `Họ`, `Tên đệm`, `Tên`).\n- `Ngày sinh`, `Hệ số lương`: **thuộc tính đơn, đơn trị, lưu trữ** (elip nét liền — chú ý `Hệ số lương` là dữ liệu nhập gốc nên KHÔNG vẽ nét đứt!).\n- `Bằng cấp`: **thuộc tính đa trị** (elip nét đôi vì một nhân viên có thể có nhiều bằng cấp).\n- `Lương`: **thuộc tính suy dẫn** (elip nét đứt vì tính theo hệ số lương và mức lương cơ bản).' },
        { t: 'figure', spec: {
          entities: [
            { id: 'nv', label: 'NHÂN VIÊN', x: 250, y: 120, attrs: [
              { label: 'Mã NV', kind: 'key', dx: -175, dy: -45 },
              { label: 'Ngày sinh', dx: -175, dy: 45 },
              { label: 'Họ tên', dx: 0, dy: -72, side: 'top', parts: [
                { label: 'Họ', dx: -52, dy: -52 },
                { label: 'Tên', dx: 52, dy: -52 }
              ] },
              { label: 'Hệ số lương', dx: 175, dy: -45 },
              { label: 'Bằng cấp', kind: 'multi', dx: 175, dy: 45 },
              { label: 'Lương', kind: 'derived', dx: 0, dy: 72 }
            ] }
          ]
        }, caption: 'Minh họa đủ các loại thuộc tính trên thực thể NHÂN VIÊN (Ví dụ slide tr.14): khóa (gạch chân), phức hợp (Họ tên), lưu trữ (HSL, Ngày sinh), đa trị (elip kép) và suy dẫn (elip nét đứt).' },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **Phân biệt nhanh**:\n  - *Có nhiều giá trị cùng lúc* (SĐT, bằng cấp, ngoại ngữ) $\\to$ **Đa trị** (**elip kép**).\n  - *Tính từ thuộc tính khác* (Tuổi từ Ngày sinh, Lương từ HSL) $\\to$ **Suy dẫn** (**elip nét đứt**). Cẩn thận bẫy đề thi vẽ **cả `HSL` lẫn `Lương` nét đứt** — chỉ `Lương` nét đứt, `HSL` vẫn nét liền!\n  - *Chia nhỏ thành phần độc lập* (Họ + Tên, Xã + Phường + Tỉnh) $\\to$ **Phức hợp** (các elip con nối bằng nét liền, không vẽ con nét đứt).\n- Khi chọn đáp án sơ đồ ER, **soi ngay gạch chân ở khóa** trước: rất nhiều phương án nhiễu chỉ khác ở chỗ quên gạch chân `Mã NV` / `Mã Khách`.' }
      ]
    },
    {
      id: 'ch2-lienket',
      title: 'Liên kết, bậc, đệ quy, bản số và ràng buộc tham gia',
      source: 'Slide Ch.2 Mô hình ER – tr.15–23',
      outside: false,
      blocks: [
        { t: 'def', term: 'Liên kết và thuộc tính của liên kết (slide tr.15–17)', text: '- **Liên kết (*Relationship*)**: là mối quan hệ nào đó giữa các kiểu thực thể (VD: `NHANVIEN` thuộc `PHONGBAN`; `PHONGBAN` có trưởng phòng là một `NHANVIEN`).\n- **Ký hiệu**: hình thoi nối trực tiếp với kiểu thực thể, tên liên kết đặt bên trong và thường là **động từ**.\n- **Thuộc tính của liên kết**: liên kết cũng có thể có thuộc tính riêng, vẽ bằng hình elip gắn với hình thoi (VD: `Ngày nhận chức` gắn vào liên kết `Quản lý`; `Ngày mượn, Ngày trả` gắn vào `Mượn sách`; `Điểm` gắn vào `Học`).' },
        { t: 'list', items: ['**Bậc của liên kết (slide tr.18)**: là số kiểu thực thể tham gia vào liên kết. Bậc 1 (đệ quy), bậc 2 (nhị phân, VD slide tr.18: `Giáo viên` – `Học tập, giảng dạy` – `Học viên`), bậc 3 (tam phân, VD `NHÀ CUNG CẤP` – `VẬT TƯ` – `DỰ ÁN` lưu `Số lượng`).', '**Cảnh báo bậc 3 (BT Ch.2)**: không được tùy tiện tách một liên kết bậc 3 thành ba liên kết bậc 2 rời rạc, vì sẽ không xác định được bộ ba nào đi cùng nhau (nhà cung cấp nào giao vật tư gì cho dự án nào).', '**Liên kết đệ quy (slide tr.19)**: liên kết bậc 1, trong đó cùng một kiểu thực thể tham gia vào liên kết với **nhiều vai trò (role)** khác nhau (VD: `NHÂN VIÊN` A giám sát `NHÂN VIÊN` B; hoặc `CHUYẾN BAY` nối với `SÂN BAY` qua hai vai trò `khởi hành` và `đến`). Cần ghi nhãn vai trò trên các nhánh để phân biệt.'] },
        { t: 'figure', spec: {
          entities: [
            { id: 'nv', label: 'NHÂN VIÊN', x: 90, y: 80, attrs: [
              { label: 'Mã NV', kind: 'key', dx: 0, dy: -62 }
            ] }
          ],
          rels: [
            { id: 'gs', label: 'Giám sát', x: 320, y: 80, links: [
              { to: 'nv', card: '1', role: 'người giám sát', bend: -42 },
              { to: 'nv', card: 'n', role: 'bị giám sát', bend: 42 }
            ] }
          ]
        }, caption: 'Liên kết đệ quy bậc 1: một kiểu thực thể NHÂN VIÊN tham gia với hai vai trò khác nhau (slide tr.19).' },
        { t: 'table', caption: 'Các kiểu liên kết (bản số / lực lượng tối đa) (slide tr.20–21)', head: ['Kiểu liên kết', 'Định nghĩa', 'Ký hiệu & Ví dụ'], rows: [['**1 – 1** (*một–một*)', '1 thực thể kiểu A liên kết với **tối đa 1** thực thể kiểu B và ngược lại.', 'Ghi `1` ở cả hai đầu thực thể.\nVD: `NHÂN VIÊN` (1) – `QUẢN LÝ` – `ĐƠN VỊ` (1); `SINH VIÊN` (1) – `LÀM LT` – `LỚP` (1).'], ['**1 – N** (*một–nhiều*)', '1 thực thể kiểu A liên kết với **nhiều** thực thể kiểu B; 1 thực thể kiểu B chỉ liên kết **duy nhất với 1** thực thể kiểu A.', 'Ghi `1` ở đầu phía một, `n` ở đầu phía nhiều.\nVD: `PHÒNG BAN` (1) – `Có` – `NHÂN VIÊN` (n).'], ['**M – N** (*nhiều–nhiều*)', '1 thực thể kiểu A liên kết với **nhiều** thực thể kiểu B và ngược lại.', 'Ghi `m` và `n` ở hai đầu.\nVD: `SINH VIÊN` (m) – `Học` – `MÔN HỌC` (n); `SÁCH` (m) – `Viết` – `TÁC GIẢ` (n).']] },
        { t: 'def', term: 'Ràng buộc tham gia và sự phụ thuộc tồn tại (slide tr.22–23)', text: 'Chỉ ra một thực thể có phụ thuộc vào thực thể khác thông qua kiểu liên kết hay không:\n- **==Tham gia toàn bộ (phụ thuộc tồn tại)==**: *tất cả* các thực thể của kiểu thực thể **bắt buộc** phải tham gia vào liên kết $\\to$ vẽ đường **nét đôi**.\n- **Tham gia bộ phận**: chỉ một bộ phận các thực thể tham gia (có thể có thực thể không tham gia) $\\to$ vẽ đường **nét đơn**.' },
        { t: 'example', title: 'Ví dụ (slide tr.23) – NHÂN VIÊN quản lý ĐƠN VỊ', prompt: 'Xác định kiểu liên kết và ràng buộc tham gia cho mối quan hệ `QUẢN LÝ` giữa `NHANVIEN` và `DONVI`.', solution: '- Mỗi `DONVI` phải có đúng **1** người quản lý (là một nhân viên), và mỗi `NHANVIEN` quản lý tối đa **1** đơn vị $\\Rightarrow$ kiểu liên kết **1 – 1**.\n- Mỗi `DONVI` *bắt buộc* phải có người quản lý $\\Rightarrow$ phía `DONVI` tham gia **toàn bộ (nét đôi)**.\n- Không phải `NHANVIEN` nào cũng làm trưởng đơn vị $\\Rightarrow$ phía `NHANVIEN` tham gia **bộ phận (nét đơn)**.' },
        { t: 'figure', spec: {
          entities: [
            { id: 'kh', label: 'KHÁCH HÀNG', x: 95, y: 95, attrs: [
              { label: 'Mã KH', kind: 'key', dx: -45, dy: -62 },
              { label: 'Tên KH', dx: 55, dy: -62 }
            ] },
            { id: 'hd', label: 'HÓA ĐƠN', x: 485, y: 95, attrs: [
              { label: 'Mã HĐ', kind: 'key', dx: -45, dy: -62 },
              { label: 'Tổng tiền', kind: 'derived', dx: 60, dy: -62 }
            ] }
          ],
          rels: [
            { id: 'co', label: 'Có', x: 290, y: 95, attrs: [
              { label: 'Ngày lập', dx: 0, dy: -62 }
            ], links: [
              { to: 'kh', card: '1', total: false },
              { to: 'hd', card: 'n', total: true }
            ] }
          ]
        }, caption: 'Liên kết 1:n giữa KHÁCH HÀNG (tham gia bộ phận – nét đơn) và HÓA ĐƠN (tham gia toàn bộ – nét đôi) kèm thuộc tính liên kết Ngày lập.' },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **Quy tắc đọc hướng 1:N không bao giờ nhầm**: đứng tại thực thể $A$, hỏi *"1 $A$ ứng với mấy $B$?"* $\\to$ ==ghi nhãn số đó sang đầu phía $B$==! VD: *1 Khách hàng có nhiều Hóa đơn* $\\to$ đặt `n` bên `HÓA ĐƠN`; *1 Hóa đơn chỉ thuộc 1 Khách hàng* $\\to$ đặt `1` bên `KHÁCH HÀNG`.\n- **Quy tắc đặt nét đôi toàn phần**: đứng ở từng bên, hỏi *"Mọi $X$ đều bắt buộc phải có liên kết này chứ?"*. Nếu *Có* (mọi `HÓA ĐƠN` phải có khách đứng tên; mọi `DONVI` phải có người quản lý) $\\to$ **nét đôi ở chính đầu phía $X$**; nếu *Không* (có `KHÁCH HÀNG` chưa mua lần nào; có `NHANVIEN` là nhân viên thường) $\\to$ **nét đơn**.' }
      ]
    },
    {
      id: 'ch2-xaydung',
      title: 'Các bước xây dựng, chuẩn hóa và thu gọn mô hình ER',
      source: 'Slide Ch.2 Mô hình ER – tr.24–32, 41',
      outside: false,
      blocks: [
        { t: 'def', term: 'Cấu trúc đồ thị của mô hình ER (slide tr.25)', text: 'Mô hình ER gồm hai thành phần chính:\n- **Đỉnh**: Tập thực thể (chữ nhật), Thuộc tính (elip), Liên kết (thoi).\n- **Cạnh**: đường nối giữa tập thực thể với thuộc tính, và đường nối mối liên kết giữa các tập thực thể.' },
        { t: 'steps', title: '5 bước xây dựng mô hình ER (slide tr.26–30)', items: ['**Bước 1 – Chính xác hóa và lựa chọn thông tin cơ sở (tr.26)**: từ tài liệu, hồ sơ khảo sát lập *từ điển dữ liệu* gồm mọi thuộc tính $\\to$ chính xác hóa tên gọi để mỗi mục từ mang đầy đủ ý nghĩa, hiểu theo **một nghĩa duy nhất** $\\to$ duyệt loại thuộc tính không cần thiết, chỉ giữ lại các thuộc tính: *đặc trưng cho cả lớp hồ sơ*, *chọn 1 lần*, *là thuộc tính sơ cấp* (loại suy dẫn).', '**Bước 2 – Xác định thực thể, thuộc tính và định danh (tr.27)**: dựa vào các thuộc tính **"tên gọi"** (danh từ) để xác định thực thể; gán thuộc tính cho thực thể và chọn/bổ sung thuộc tính định danh (khóa). ==Không đưa khóa ngoại vào làm thuộc tính của thực thể trong ER== (mối quan hệ được vẽ bằng hình thoi riêng).', '**Bước 3 – Xác định mối quan hệ và thuộc tính của quan hệ (tr.28–29)**: xét từng **động từ** và đặt bộ câu hỏi chuẩn (bảng dưới), đồng thời xét từng cặp thực thể để tìm quan hệ phụ thuộc/sở hữu (*thuộc, của, ở, theo, là, có…*).', '**Bước 4 – Vẽ biểu đồ mô hình ER (tr.30)**: ghép các đỉnh thực thể, thuộc tính, liên kết cùng bản số và ràng buộc tham gia.', '**Bước 5 – Chuẩn hóa và thu gọn biểu đồ (tr.30)**:\n  - Chuyển thuộc tính lặp, nhóm lặp hoặc thuộc tính phụ thuộc thời gian thành thuộc tính đơn (hoặc tách thành thực thể riêng / đa trị).\n  - ==Quy tắc rút gọn thực thể==: nếu một thực thể chỉ có **1 thuộc tính**, mối quan hệ ở **phía 1** và **bậc quan hệ là 2** $\\to$ loại thực thể đó khỏi biểu đồ, chuyển thuộc tính riêng của nó và mối quan hệ thành thuộc tính của thực thể quan hệ với nó.'] },
        { t: 'table', caption: 'Phương pháp đặt câu hỏi cho động từ & cặp thực thể ở Bước 3 (slide tr.28–29)', head: ['Đối tượng xét', 'Câu hỏi gợi mở', 'Thành phần thu được'], rows: [['**Động từ** (tên liên kết)', '*Ai / Cho ai? Cái gì / Cho cái gì? Ở đâu?*', 'Xác định các **Thực thể** tham gia vào liên kết đó.'], ['**Động từ** (tên liên kết)', '*Bằng cách nào? Vì sao? Khi nào? Như thế nào? Bao nhiêu?*', 'Xác định các **Thuộc tính của mối quan hệ** (gắn vào hình thoi).'], ['**Cặp thực thể**', 'Kiểm tra quan hệ phụ thuộc/sở hữu: *thuộc, của, ở, theo, là, có…*', 'Tìm các liên kết sở hữu/phân cấp giữa hai thực thể (và thuộc tính nếu có).']] },
        { t: 'example', title: 'Ví dụ 1 & 2 (slide tr.31–32) – Quản lý KTX & Đề án công ty', prompt: 'Nhận diện các thành phần ER đặc biệt trong hai bài toán mẫu trên slide:\n1. **Ví dụ 1 – Quản lý KTX sinh viên (tr.31)**: Tòa nhà, Nhân viên quản lý (chịu trách nhiệm nhiều tòa nhà, lưu `ngày được phân`, NV có nhiều SĐT), Phòng (1 tòa nhà nhiều phòng, 1 phòng chỉ thuộc 1 tòa nhà, lưu SL thực tế, chỗ trống), Sinh viên (Mã SV, Tên, GT, Đối tượng, Tên lớp, ĐT, tiền nộp hàng tháng).\n2. **Ví dụ 2 – Quản lý đề án công ty (tr.32)**: Đơn vị (tên/mã duy nhất, nhiều địa điểm, 1 NV quản lý lưu `ngày bắt đầu quản lý`), Dự án (tên/mã duy nhất, địa điểm, thời gian bắt đầu), Nhân viên (Họ tên, Mã số, địa chỉ, HSL, `lương` tính từ HSL, GT, ngày sinh, nhiều `ngoại ngữ`; làm cho 1 đơn vị, làm trên nhiều dự án với `số giờ`; có 1 `người giám sát` trực tiếp cũng là NV), Người thân (hưởng bảo hiểm theo NV: Họ tên, GT, ngày sinh, `tuổi`, quan hệ).', solution: '*(Lời giải tự làm)* Điểm nhấn trọng tâm cần nhận diện đúng:\n- **Ví dụ 1 (KTX)**: `NHÂN VIÊN` – `Quản lý` – `TÒA NHÀ` (`m:n`, thuộc tính liên kết `Ngày được phân`); `Điện thoại` của NV là **đa trị**; `TÒA NHÀ` (1) – `Có` – `PHÒNG` (n); `PHÒNG` (1) – `Ở` – `SINH VIÊN` (n). *(Xem sơ đồ & lược đồ quan hệ đầy đủ ở tab Tự luận.)*\n- **Ví dụ 2 (Đề án công ty)**:\n  - `Địa điểm` (của `ĐƠN VỊ`) và `Ngoại ngữ` (của `NHÂN VIÊN`): **đa trị**.\n  - `Lương` (tính từ HSL) và `Tuổi` (tính từ ngày sinh): **suy dẫn**.\n  - `NGƯỜI THÂN`: **thực thể yếu** phụ thuộc `NHÂN VIÊN` (liên kết định danh `Có`, nét đôi phía `NGƯỜI THÂN`).\n  - `Giám sát` trên `NHÂN VIÊN`: **liên kết đệ quy** (`1:n` giữa `người giám sát` và `người bị giám sát`).\n  - Thuộc tính liên kết: `Ngày bắt đầu quản lý` (trên `Quản lý`), `Số giờ` (trên `Làm việc trên` giữa `NHÂN VIÊN` và `DỰ ÁN`, `m:n`).' },
        { t: 'note', text: 'Slide tr.41 (*Bài tập về nhà buổi 2*) dặn chuẩn bị sang Chương 3: đọc trước các khái niệm **Quan hệ, Thuộc tính, Liên kết, Bộ – miền giá trị, Ràng buộc dữ liệu, Đặc trưng của quan hệ** và **Các bước xây dựng lược đồ quan hệ** (chuyển ER $\\to$ quan hệ).' },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **Bẫy chọn thuộc tính thực thể trong đề thi**: Đề cho mô tả *"Mỗi nhân viên thuộc một phòng ban, có người quản lý..."* rồi hỏi *"Thuộc tính của thực thể NHÂN VIÊN / PHÒNG / CÔNG TRÌNH gồm những gì?"* $\\to$ **Loại ngay phương án chứa `Mã phòng`, `Mã người quản lý`, `Mã nhân viên tham gia`**! Trong mô hình ER, đó là khóa ngoại của mức quan hệ, không phải thuộc tính của thực thể.\n- **Không tự ý chẻ nhỏ thuộc tính không được yêu cầu**: nếu đề chỉ liệt kê *"họ tên, ngày sinh, giới tính, địa chỉ"*, giữ nguyên nhóm thuộc tính tương ứng, tránh phương án tự chẻ `Ngày sinh` thành `Ngày, Tháng, Năm` hoặc `Giới tính` thành `Nam, Nữ`.' }
      ]
    },
    {
      id: 'ch2-vd3',
      title: 'Ví dụ 3 (slide tr.33–40): Đơn đặt hàng và Phiếu giao hàng',
      source: 'Slide Ch.2 Mô hình ER – tr.33–40',
      outside: false,
      blocks: [
        { t: 'p', text: 'Ví dụ tổng hợp từ hai hồ sơ dữ liệu thực tế trên slide tr.33 gồm **Đơn đặt hàng** (`Số ĐH`, đơn vị đặt hàng, địa chỉ, điện thoại, ngày đặt; bảng `STT, Tên hàng, Mô tả hàng, ĐVT, Số lượng`; `Người đặt hàng`) và **Phiếu giao hàng** (`Số PG`, đơn vị khách hàng, địa chỉ, nơi giao hàng, ngày giao; bảng `STT, Tên hàng, ĐVT, Số lượng, Đơn giá, Thành tiền`, `Tổng tiền`; `Tên người nhận`, `Tên người giao`).' },
        { t: 'steps', title: 'Triển khai 5 bước chuẩn trên Ví dụ 3 (slide tr.34–40)', items: ['**Bước 1 – Chính xác hóa & chọn lọc (tr.34–35)**: chuyển về tên ngắn rõ nghĩa (`Số ĐH`, `Tên ĐV`, `Họ tên NĐ`, `Số PG`, `Tên nơi GH`, `Họ tên NN`, `Họ tên NG`…) và đánh dấu 3 cột: **(1)** thuộc tính suy dẫn/loại bỏ (`Thành tiền`, `Tổng tiền`, `Số TT`); **(2)** thuộc tính mô tả thực thể (`Tên ĐV`, `Địa chỉ`, `Điện thoại`, `Tên hàng`, `Mô tả`, `Đv tính`, `Họ tên NĐ/NN/NG`, `Tên nơi GH`); **(3)** ==thuộc tính của mối quan hệ== (`Số ĐH`, `Ngày đặt`, `Số lượng`, `Số PG`, `Ngày giao`, `Đơn giá`).', '**Bước 2 – Xác định thực thể & định danh (tr.36)**: dựa vào các thuộc tính "tên gọi", thu được **7 thực thể** và bổ sung thuộc tính khóa định danh cho từng thực thể (bảng dưới).', '**Bước 3 – Xác định mối quan hệ & thuộc tính (tr.37–38)**:\n  - Động từ **`Đặt`**: *Ai đặt?* (`NGƯỜI ĐẶT`) – *Đặt cái gì?* (`HÀNG`); *Bằng cách nào / Khi nào / Bao nhiêu?* $\\to$ thuộc tính `Số ĐH`, `Ngày đặt`, `Số lượng`.\n  - Động từ **`Giao`**: *Ai giao?* (`NGƯỜI GIAO`) – *Giao cái gì?* (`HÀNG`) – *Ở đâu?* (`NƠI GIAO`) – *Cho ai?* (`NGƯỜI NHẬN`); *Bằng cách nào / Khi nào / Bao nhiêu / Giá bao nhiêu?* $\\to$ thuộc tính `Số PG`, `Ngày giao`, `Số lượng`, `Đơn giá` (`Thành tiền` bỏ vì suy dẫn).\n  - Quan hệ sở hữu: `NGƯỜI ĐẶT` **`Thuộc 1`** `ĐƠN VỊ ĐH`; `NGƯỜI NHẬN` **`Thuộc 2`** `ĐƠN VỊ KH`.', '**Bước 4 – Vẽ biểu đồ ER (tr.39)**: nối 7 thực thể với 4 liên kết (`Thuộc 1`, `Thuộc 2`, `Đặt` bậc 2, `Giao` bậc 4) cùng các thuộc tính riêng của thực thể và liên kết.', '**Bước 5 – Chuẩn hóa và rút gọn (tr.40)**: nhận thấy `ĐƠN VỊ ĐH` và `ĐƠN VỊ KH` đều là đơn vị bên ngoài giao dịch với cửa hàng, nên ==gộp thành 1 thực thể duy nhất `ĐV KHÁCH`== gồm (`Mã ĐV`, `Tên ĐV`, `Địa chỉ`, `Điện thoại`), nối với cả `NGƯỜI ĐẶT` (`Thuộc 1`) và `NGƯỜI NHẬN` (`Thuộc 2`).'] },
        { t: 'table', caption: '7 thực thể và khóa định danh bổ sung ở Bước 2 – Ví dụ 3 (slide tr.36)', head: ['Thuộc tính tên gọi tìm được', 'Thực thể tương ứng', 'Thuộc tính của thực thể (khóa bổ sung)'], rows: [['Tên đơn vị đặt hàng', '`ĐƠN VỊ ĐH`', '`Mã ĐV` (thêm vào), `Tên ĐV`, `Địa chỉ`, `Điện thoại`'], ['Tên đơn vị khách hàng', '`ĐƠN VỊ KH`', '`Mã ĐV` (thêm vào), `Tên ĐV`, `Địa chỉ`'], ['Tên hàng', '`HÀNG`', '`Mã hàng` (thêm vào), `Tên hàng`, `Đv tính`, `Mô tả hàng`'], ['Người đặt hàng', '`NGƯỜI ĐẶT`', '`Mã số NĐ` (thêm vào), `Họ tên NĐ`'], ['Nơi giao hàng', '`NƠI GIAO`', '`Mã số ĐĐG` (thêm vào), `Tên nơi giao`'], ['Tên người nhận', '`NGƯỜI NHẬN`', '`Mã số NN` (thêm vào), `Họ tên NN`'], ['Tên người giao', '`NGƯỜI GIAO`', '`Mã số NG` (thêm vào), `Họ tên NG`']] },
        { t: 'figure', spec: {
          entities: [
            { id: 'dv', label: 'ĐV KHÁCH', x: 420, y: 110, attrs: [
              { label: 'Mã ĐV', kind: 'key', dx: -160, dy: -26 },
              { label: 'Tên ĐV', dx: -55, dy: -66 },
              { label: 'Địa chỉ', dx: 55, dy: -66 },
              { label: 'Điện thoại', dx: 165, dy: -26 }
            ] },
            { id: 'nd', label: 'NGƯỜI ĐẶT', x: 165, y: 270, attrs: [
              { label: 'Mã số NĐ', kind: 'key', dx: -135, dy: -22 },
              { label: 'Họ tên NĐ', dx: -135, dy: 22 }
            ] },
            { id: 'nn', label: 'NGƯỜI NHẬN', x: 675, y: 270, attrs: [
              { label: 'Mã số NN', kind: 'key', dx: 135, dy: -22 },
              { label: 'Họ tên NN', dx: 135, dy: 22 }
            ] },
            { id: 'hg', label: 'HÀNG', x: 165, y: 525, attrs: [
              { label: 'Mã hàng', kind: 'key', dx: -135, dy: -22 },
              { label: 'Tên hàng', dx: -135, dy: 22 },
              { label: 'Đv tính', dx: -55, dy: 64 },
              { label: 'Mô tả hàng', dx: 65, dy: 64 }
            ] },
            { id: 'ng', label: 'NGƯỜI GIAO', x: 525, y: 550, attrs: [
              { label: 'Mã số NG', kind: 'key', dx: -65, dy: 62 },
              { label: 'Họ tên NG', dx: 65, dy: 62 }
            ] },
            { id: 'noi', label: 'NƠI GIAO', x: 755, y: 495, attrs: [
              { label: 'Mã số ĐĐG', kind: 'key', dx: 0, dy: 64 },
              { label: 'Tên nơi giao', dx: 135, dy: 0 }
            ] }
          ],
          rels: [
            { id: 't1', label: 'Thuộc 1', x: 225, y: 190, links: [
              { to: 'dv', card: '1', total: true },
              { to: 'nd', card: 'n', total: true }
            ] },
            { id: 't2', label: 'Thuộc 2', x: 615, y: 190, links: [
              { to: 'dv', card: '1', total: true },
              { to: 'nn', card: 'n', total: true }
            ] },
            { id: 'dat', label: 'Đặt', x: 165, y: 395, attrs: [
              { label: 'Số ĐH', dx: -115, dy: 0 },
              { label: 'Ngày đặt', dx: 120, dy: -24 },
              { label: 'Số lượng', dx: 120, dy: 24 }
            ], links: [
              { to: 'nd', card: '1', total: true },
              { to: 'hg', card: 'n', total: false }
            ] },
            { id: 'giao', label: 'Giao', x: 525, y: 395, attrs: [
              { label: 'Số PG', dx: -10, dy: -70 },
              { label: 'Ngày giao', dx: -115, dy: -48 },
              { label: 'Đơn giá', dx: -120, dy: 0 },
              { label: 'Số lượng', dx: 140, dy: 0 }
            ], links: [
              { to: 'nn', card: '1', total: true, bend: -28 },
              { to: 'hg', card: 'n', total: false },
              { to: 'ng', card: '1', total: true },
              { to: 'noi', card: '1', total: true }
            ] }
          ]
        }, caption: 'Mô hình ER sau Bước 5 (chuẩn hóa và rút gọn thành 6 thực thể với ĐV KHÁCH) – Ví dụ 3, slide tr.40.' }
      ]
    },
    {
      id: 'ch2-eer-coban',
      title: 'Mô hình EER: Lớp cha/con, Chuyên biệt hóa, Tổng quát hóa & Ràng buộc d/o',
      source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems; Đề cương môn học 2023 (mục 2.4)',
      outside: true,
      blocks: [
        { t: 'note', text: 'Phần mở rộng ngoài slide theo Đề cương môn học 2023 (mục 2.4.1–2.4.6), bộ 60 câu BT Chương 2 và các câu hỏi EER trong đề thi.' },
        { t: 'def', term: 'Mô hình thực thể liên kết mở rộng (EER – Enhanced ER)', text: 'Là mô hình ER truyền thống được bổ sung thêm **một số khái niệm ngữ nghĩa mới** (*lớp cha, lớp con, chuyên biệt hóa, tổng quát hóa, sự kế thừa, kiểu hợp…*) và **các biểu diễn về quy tắc nghiệp vụ** (*ràng buộc `d`/`o`, toàn phần/từng phần, `(min, max)`…*) để tăng khả năng mô tả đối tượng được rõ ràng và chính xác hơn.' },
        { t: 'def', term: 'Lớp cha, Lớp con, Phân cấp "là một" (IS-A) & Sự kế thừa', text: '- **Lớp cha (*Superclass*)**: kiểu thực thể tổng quát chứa các thuộc tính và mối liên kết chung cho nhiều nhóm đối tượng.\n- **Lớp con (*Subclass*)**: nhóm thực thể bên trong lớp cha có thêm thuộc tính hoặc mối liên kết đặc thù riêng. Một thực thể thuộc lớp con *cũng là* một thực thể của lớp cha (**quan hệ IS-A / "là một"**), nhưng một thực thể lớp cha *không nhất thiết* phải thuộc lớp con nào.\n- **Sự kế thừa**: ==lớp con kế thừa toàn bộ thuộc tính (bao gồm cả khóa chính) và liên kết của lớp cha== (kể cả kế thừa bắc cầu qua nhiều tầng như `NGƯỜI` $\\to$ `NHÂN VIÊN` $\\to$ `GIẢNG VIÊN`), đồng thời có thể có thêm thuộc tính và liên kết riêng (VD: chỉ lớp con `GIẢNG VIÊN` mới có liên kết `HƯỚNG DẪN` `LUẬN VĂN`).\n- **Ký hiệu tập con $\\subset$**: vẽ trên các nhánh nối lớp con, **phía miệng mở hướng về vòng tròn / lớp cha**.' },
        { t: 'table', caption: 'So sánh Chuyên biệt hóa vs Tổng quát hóa (mục 2.4.3–2.4.4)', head: ['Tiêu chí', 'Chuyên biệt hóa (Specialization)', 'Tổng quát hóa (Generalization)'], rows: [['Hướng thiết kế', '**Từ trên xuống (*Top-down*)**', '**Từ dưới lên (*Bottom-up*)**'], ['Cách thực hiện', 'Từ một **lớp cha** đã có, tách thành các **lớp con** dựa trên đặc tính riêng biệt.', 'Từ nhiều **lớp thực thể** có đặc điểm chung, hợp nhất lên thành một **lớp cha**.'], ['Ví dụ', '`NHÂN VIÊN` $\\to$ `NV CƠ HỮU`, `NV THỜI VỤ`, `CHUYÊN GIA`; `BỆNH NHÂN` $\\to$ `BN NỘI TRÚ`, `BN NGOẠI TRÚ`.', '`XE Ô TÔ` và `XE MÁY` $\\to$ lớp cha chung `PHƯƠNG TIỆN`.']] },
        { t: 'table', caption: 'Hai cặp ràng buộc độc lập trên chuyên biệt hóa / tổng quát hóa (mục 2.4.5)', head: ['Trục ràng buộc', 'Giá trị 1 (ý nghĩa & ký hiệu)', 'Giá trị 2 (ý nghĩa & ký hiệu)'], rows: [['**Tính tách biệt**\n*(thuộc tối đa 1 hay nhiều lớp con?)*', '**Tách biệt (`d` – *disjoint*)**: một thực thể lớp cha **không thể** đồng thời là thành viên của hai hay nhiều lớp con (tối đa 1). VD: `XE DIESEL` / `XE ĐIỆN`; `BIÊN CHẾ` / `HỢP ĐỒNG`.', '**Phủ lấp / Chồng lấn (`o` – *overlapping*)**: một thực thể lớp cha **có thể đồng thời** là thành viên của nhiều lớp con. VD: `NGƯỜI` vừa là `SINH VIÊN` vừa là `NHÂN VIÊN`; `LINH KIỆN` vừa `Tự SX` vừa `Cung cấp`.'], ['**Tính đầy đủ**\n*(mọi thực thể cha có bắt buộc thuộc lớp con?)*', '**Toàn phần (*total*)**: *mọi* thực thể lớp cha **bắt buộc** thuộc về ít nhất một lớp con. Vẽ ==nét đôi từ lớp cha tới vòng tròn==.', '**Từng phần / Bộ phận (*partial*)**: cho phép một số thực thể lớp cha **không thuộc bất kỳ** lớp con nào. Vẽ **nét đơn** từ lớp cha tới vòng tròn.']] },
        { t: 'list', items: ['**4 tổ hợp hợp lệ**: *(Toàn phần, Tách biệt)*, *(Toàn phần, Phủ lấp)*, *(Từng phần, Tách biệt)*, *(Từng phần, Phủ lấp)*.', '**Chuyên biệt hóa theo thuộc tính phân loại (định nghĩa kiểu con)**: dùng 1 thuộc tính đơn trị của lớp cha (VD `Loại NV` nhận `"TG"`, `"CH"`, `"CG"`) ghi nhãn điều kiện lên từng nhánh con $\\to$ dạng này mặc nhiên là **tách biệt (`d`)**. Ngược lại, dạng phủ lấp xác định bằng điều kiện thành viên riêng cho từng vai trò.'] },
        { t: 'figure', spec: {
          entities: [
            { id: 'bn', label: 'BỆNH NHÂN', x: 240, y: 78, attrs: [
              { label: 'Mã BN', kind: 'key', dx: -145, dy: 0 },
              { label: 'Họ tên', dx: -70, dy: -60 },
              { label: 'Ngày sinh', dx: 70, dy: -60 },
              { label: 'Ngày khám', dx: 145, dy: 0 }
            ] },
            { id: 'nt', label: 'BN NỘI TRÚ', x: 105, y: 235, side: 'bottom', attrs: [
              { label: 'Ngày xuất viện' }
            ] },
            { id: 'ngt', label: 'BN NGOẠI TRÚ', x: 375, y: 235, side: 'bottom', attrs: [
              { label: 'Ngày tái khám' }
            ] }
          ],
          specs: [
            { id: 's1', x: 240, y: 152, kind: 'd', parent: 'bn', total: true, children: ['nt', 'ngt'] }
          ]
        }, caption: 'Chuyên biệt hóa tách biệt (d) và toàn phần (nét đôi từ lớp cha tới vòng tròn): mỗi bệnh nhân hoặc nội trú hoặc ngoại trú.' },
        { t: 'figure', spec: {
          entities: [
            { id: 'ng', label: 'NGƯỜI', x: 240, y: 78, attrs: [
              { label: 'CCCD', kind: 'key', dx: -135, dy: 0 },
              { label: 'Họ tên', dx: 0, dy: -60 },
              { label: 'Ngày sinh', dx: 135, dy: 0 }
            ] },
            { id: 'sv', label: 'SINH VIÊN', x: 105, y: 235, side: 'bottom', attrs: [
              { label: 'Mã SV', dx: -48, dy: 56 },
              { label: 'Ngành', dx: 48, dy: 56 }
            ] },
            { id: 'nv', label: 'NHÂN VIÊN', x: 375, y: 235, side: 'bottom', attrs: [
              { label: 'Mã NV', dx: -48, dy: 56 },
              { label: 'Lương', dx: 48, dy: 56 }
            ] }
          ],
          specs: [
            { id: 's2', x: 240, y: 152, kind: 'o', parent: 'ng', total: false, children: ['sv', 'nv'] }
          ]
        }, caption: 'Chuyên biệt hóa phủ lấp (o) và từng phần (nét đơn): một người có thể vừa là sinh viên vừa là nhân viên, hoặc không thuộc nhóm nào.' },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **Đọc ký hiệu EER trong 3 giây**:\n  1. Nhìn chữ trong vòng tròn: **`d`** = tách biệt (*disjoint*), **`o`** = phủ lấp (*overlapping*).\n  2. Nhìn **đoạn nối từ lớp cha tới vòng tròn**: **nét đôi** = toàn phần (*total*), **nét đơn** = từng phần (*partial*).\n  3. **Bẫy hình vẽ hay gặp trong đề**: hai nhánh từ vòng tròn xuống các lớp con **luôn là nét đơn** có ký hiệu $\\subset$ (phương án nào vẽ nét đôi cả nhánh xuống lớp con là **SAI**!).\n- **Bẫy lý thuyết**: đề rất hay tráo hai định nghĩa *Chuyên biệt hóa* (trên xuống, cha $\\to$ con) và *Tổng quát hóa* (dưới lên, con $\\to$ cha).' }
      ]
    },
    {
      id: 'ch2-eer-nangcao',
      title: 'Mở rộng EER nâng cao, ràng buộc nghiệp vụ & ánh xạ sang quan hệ',
      source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems; Bài tập Ch.2 (Google Form)',
      outside: true,
      blocks: [
        { t: 'def', term: 'Đa kế thừa & Kiểu hợp / Category (∪)', text: '- **Đa kế thừa (*Multiple Inheritance / Shared Subclass*)**: một lớp con dùng chung có **nhiều lớp cha** thuộc cùng một phân cấp có gốc chung, kế thừa thuộc tính và liên kết từ tất cả các lớp cha đó (VD: `GIẢNG VIÊN` vừa là lớp con của `NHÂN VIÊN` vừa là lớp con của `NGHIÊN CỨU VIÊN`, cùng có gốc `NGƯỜI`).\n- **==Kiểu hợp / Category (`∪`)==**: dùng vòng tròn chữ `U` ($\\cup$) khi một lớp con là tập con của **hợp nhiều lớp cha khác loại** (mỗi thực thể của lớp con thuộc *một trong các* lớp cha đó chứ không phải đồng thời tất cả). VD: `CHỦ SỞ HỮU` bất động sản có thể là `NGƯỜI` (cá nhân) hoặc `DOANH NGHIỆP` (pháp nhân).' },
        { t: 'list', items: ['**Ký hiệu `(min, max)`**: ghi cặp `(tối thiểu, tối đa)` lên cạnh nối giữa thực thể và liên kết để diễn đạt đồng thời lực lượng và tính bắt buộc (`min = 0` là bộ phận, `min >= 1` là toàn phần). VD: `(0,3)` nghĩa là mỗi nhân viên tham gia 0 đến 3 dự án; `(15,45)` nghĩa là mỗi lớp có 15 đến 45 sinh viên.', '**Thực thể sự kiện & lưu vết lịch sử (BT Ch.2)**: khi một đối tượng tham gia cùng hành động nhiều lần theo thời gian hoặc cần truy vết lịch sử, ==phải tạo thực thể sự kiện / bảng lịch sử riêng== (không ghi đè thuộc tính cũ hay nối chuỗi dấu phẩy). VD: `LAN_NHAP_VIEN`, `LAN_KHAM`, `LAN_LAM_BAI`, `LAN_DANG_KY` (học lại nhiều kỳ), `CHITIET_DONHANG` (lưu `So_luong`, `Don_gia_ban` tại thời điểm mua), `LICH_SU_GIA`, nhiệm kỳ `TRUONG_PHONG`, `DIA_CHI` kèm `Vai_tro_dia_chi`.', '**Cập nhật hạng lớp con theo thời gian**: nếu thành viên có thể chuyển hạng (VD `THANHVIEN_THUONG` $\\to$ `THANHVIEN_VIP`), cần phân biệt phân loại hiện tại với bảng lịch sử giai đoạn nếu hệ thống yêu cầu truy vết.', '**Ràng buộc giữa các liên kết (`R`) & quy tắc ngoài ER tĩnh**: quy tắc kéo theo *"Một người chỉ có thể thuê xe nếu người đó có bằng lái xe"* (Đề mẫu 720 – câu 29) được vẽ bằng **mũi tên nét đứt ghi `R`** từ liên kết phụ thuộc (`Thuê`) trỏ vào liên kết điều kiện (`Có`). Ngoài ra, các ràng buộc như *giới hạn theo cửa sổ thời gian* (tối đa 5 ca trực/tuần), *điều kiện trạng thái trước giao dịch* (tài khoản chưa khóa, dự án nháp vs đang triển khai), *mã giảm giá dùng 1 lần*, *chống chu trình trong liên kết đệ quy* cần bổ sung ràng buộc nghiệp vụ ở mức hệ thống.'] },
        { t: 'table', caption: 'Liên hệ Chương 3: 4 cách chuyển lớp cha/lớp con EER sang lược đồ quan hệ', head: ['Cách chuyển', 'Mô tả lược đồ tạo ra', 'Điều kiện áp dụng'], rows: [['**Cách 1: Cha + Các con**', '1 bảng cho **lớp cha** + 1 bảng cho **mỗi lớp con** (lớp con nhận khóa chính của lớp cha làm PK/FK).', 'Dùng được cho **mọi trường hợp** (`d`/`o`, toàn phần/từng phần). Nếu có thuộc tính phân loại (như `LoaiNV`), vẫn **giữ lại** ở bảng cha!'], ['**Cách 2: Chỉ các lớp con**', 'Chỉ tạo bảng cho **từng lớp con**, chép toàn bộ thuộc tính lớp cha xuống mỗi bảng con.', 'Chỉ hợp lý khi chuyên biệt hóa **toàn phần + tách biệt** (`d` + total).'], ['**Cách 3: 1 bảng + thuộc tính loại**', 'Gộp cha và mọi con vào **1 bảng duy nhất**, thêm 1 thuộc tính phân loại (Type).', 'Dùng khi **tách biệt (`d`)** (có thể sinh `NULL` ở các cột riêng của nhánh khác).'], ['**Cách 4: 1 bảng + cờ Boolean**', 'Gộp cha và mọi con vào **1 bảng duy nhất**, thêm nhiều cờ Boolean cho từng lớp con.', 'Dùng khi **phủ lấp (`o`)** (một dòng có thể bật nhiều cờ đồng thời).']] },
        { t: 'tip', title: 'Mẹo làm bài', text: '- **Chọn thiết kế ER/EER tốt trong bài toán tình huống**:\n  - Gặp *"nhiều lần", "từng đợt", "lưu lịch sử", "giá tại thời điểm mua", "học lại nhiều kỳ"* $\\to$ chọn phương án tạo **thực thể sự kiện** (`LAN_KHAM`, `LAN_DANG_KY`, `CHITIET_DONHANG`, `LICH_SU_GIA`).\n  - Gặp *"chỉ được A khi đã B"* $\\to$ **mũi tên nét đứt `R`** đi từ A trỏ vào B.\n- **Bẫy chuyển EER sang quan hệ (Câu 50 Đề mẫu 720)**: khóa chính của các bảng con luôn là **khóa của lớp cha** (`MaNV`), **không** phải thuộc tính phân loại `LoaiNV`; và bảng cha vẫn giữ nguyên thuộc tính `LoaiNV` của nó.' }
      ]
    }
  ]
});

DB.flashcards.push(
  { id: 'ch2-fc-01', chapter: 'ch2', front: 'Mô hình thực thể liên kết (ER) là gì và gồm những thành phần nào?', back: 'Là mô hình **mô tả súc tích** các yêu cầu dữ liệu (đối tượng và mối quan hệ trong thế giới thực).\nGồm 3 thành phần chính và ràng buộc:\n1. **Thực thể / Tập thực thể** (*Entity Sets*).\n2. **Thuộc tính** (*Attributes*).\n3. **Liên kết** (*Relationship*) và **các ràng buộc**.', source: 'Slide Ch.2 Mô hình ER – tr.2' },
  { id: 'ch2-fc-02', chapter: 'ch2', front: 'Phân biệt Thực thể cụ thể và Thực thể trừu tượng khi xác định tập thực thể?', back: '- **Thực thể cụ thể**: cảm nhận được bằng **giác quan** (VD: sinh viên, giảng viên, nhân viên).\n- **Thực thể trừu tượng**: không cảm nhận bằng giác quan mà nhận biết bằng **nhận thức** (VD: môn học, đơn vị, khoa, bộ môn, điểm).', source: 'Slide Ch.2 Mô hình ER – tr.4' },
  { id: 'ch2-fc-03', chapter: 'ch2', front: 'Phân biệt Kiểu thực thể và Thể hiện của kiểu thực thể. Quy ước đặt tên?', back: '- **Kiểu thực thể**: tập hợp các thực thể giống nhau (VD: `SINHVIEN`).\n- **Thể hiện**: một đối tượng cụ thể thuộc kiểu đó (VD: SV Nguyễn An có mã `SV2026`).\n- Tên kiểu thực thể không trùng nhau, là **danh từ**; tên liên kết là **động từ**; tên thuộc tính thường là danh từ (hoặc danh/tính từ).', source: 'Slide Ch.2 Mô hình ER – tr.4–5, 16' },
  { id: 'ch2-fc-04', chapter: 'ch2', front: 'Thực thể mạnh và Thực thể yếu khác nhau ở điểm nào?', back: '- **Thực thể mạnh**: tồn tại **độc lập** với các thực thể khác (hình chữ nhật **nét đơn**).\n- **Thực thể yếu**: sự tồn tại **phụ thuộc** vào một thực thể khác (thực thể sở hữu/chủ); luôn biểu diễn cùng thực thể chủ (hình chữ nhật **nét đôi**).', source: 'Slide Ch.2 Mô hình ER – tr.5' },
  { id: 'ch2-fc-05', chapter: 'ch2', front: 'Ký hiệu đi kèm với thực thể yếu gồm những gì?', back: '1. Thực thể yếu: hình chữ nhật **nét đôi**.\n2. **Liên kết sở hữu / định danh**: hình thoi **nét đôi**.\n3. Phía thực thể yếu tham gia **toàn bộ** (đường nối **nét đôi**).\n4. **Khóa bộ phận**: gạch chân **nét đứt** (ghép với khóa thực thể chủ thành khóa chính).', source: 'Slide Ch.2 Mô hình ER – tr.5–6' },
  { id: 'ch2-fc-06', chapter: 'ch2', front: 'Vì sao trong quản lý tòa nhà, `PHÒNG` (`Số_phòng`) thường được mô hình là thực thể yếu?', back: 'Vì `Số_phòng` (như `101`, `202`) chỉ duy nhất **trong phạm vi từng `TÒA NHÀ`**, không có định danh độc lập toàn hệ thống; phải ghép với khóa của `TÒA NHÀ` mới phân biệt được.', source: 'Bài tập Ch.2 (Google Form)' },
  { id: 'ch2-fc-07', chapter: 'ch2', front: 'Thuộc tính trong mô hình ER là gì và mỗi thuộc tính có đặc trưng nào?', back: 'Là yếu tố thông tin cho biết rõ hơn về thực thể (tính chất mô tả đặc trưng cần lưu trữ), vẽ bằng **hình elip nét đơn**.\nMỗi thuộc tính có: **tên gọi**, **miền giá trị** và **kiểu dữ liệu**.', source: 'Slide Ch.2 Mô hình ER – tr.7' },
  { id: 'ch2-fc-08', chapter: 'ch2', front: 'Trong ER, `Số điện thoại` nên chọn kiểu dữ liệu logic nào? Vì sao?', back: '**Chuỗi ký tự** (KHÔNG dùng số nguyên).\nVì số điện thoại có thể bắt đầu bằng chữ số `0` (số nguyên sẽ mất số `0` đầu) và không dùng để tính toán cộng trừ số học.', source: 'Bài tập Ch.2 (Google Form)' },
  { id: 'ch2-fc-09', chapter: 'ch2', front: 'Phân biệt Thuộc tính đơn (nguyên tử) và Thuộc tính phức hợp.', back: '- **Đơn (nguyên tử)**: không thể chia nhỏ thành các phần nhỏ hơn độc lập và có ý nghĩa (`Masv`, `Giới tính`, `Điểm`, `Tuổi`).\n- **Phức hợp**: có thể chia thành các thành phần nhỏ hơn mang ý nghĩa độc lập (`Ngaysinh` $\\to$ `Ngay, Thang, Nam`; `Họ tên` $\\to$ `Họ, Tên`).', source: 'Slide Ch.2 Mô hình ER – tr.9' },
  { id: 'ch2-fc-10', chapter: 'ch2', front: 'Phân biệt Thuộc tính đơn trị và Thuộc tính đa trị. Ký hiệu đa trị?', back: '- **Đơn trị**: chỉ nhận **1 giá trị duy nhất** cho mỗi thực thể (`Ngày_sinh`).\n- **Đa trị**: nhận một hoặc nhiều giá trị **đồng thời** (`Điện_thoại`, `Kỹ_năng`, `Bằng_cấp`).\n- Ký hiệu đa trị: **hình elip kép (elip nét đôi)**.', source: 'Slide Ch.2 Mô hình ER – tr.10' },
  { id: 'ch2-fc-11', chapter: 'ch2', front: 'Phân biệt Thuộc tính lưu trữ và Thuộc tính suy dẫn (dẫn xuất). Ký hiệu?', back: '- **Lưu trữ**: phải nhập trực tiếp từ bàn phím khi cài đặt CSDL (`Ngày_sinh`, `Hệ_số_lương`).\n- **Suy dẫn**: không phải nhập, giá trị được **tính từ các thuộc tính khác** (`Tuổi`, `Tổng_tiền`, `Lương` từ `HSL`).\n- Ký hiệu suy dẫn: **hình elip nét đứt**.', source: 'Slide Ch.2 Mô hình ER – tr.11' },
  { id: 'ch2-fc-12', chapter: 'ch2', front: 'Thuộc tính vừa đa trị vừa phức hợp (VD nhiều địa chỉ gồm Xã, Phường, Tỉnh) vẽ thế nào?', back: 'Vẽ elip gốc (`Địa chỉ`) bằng **elip kép (nét đôi)** nối vào thực thể, rồi từ elip kép đó tỏa nhánh xuống 3 elip con (`Xã`, `Phường`, `Tỉnh`) bằng **elip đơn nét liền**.', source: 'Slide Ch.2 Mô hình ER – tr.9–10' },
  { id: 'ch2-fc-13', chapter: 'ch2', front: 'Khóa của kiểu thực thể là gì? Một kiểu thực thể có tối đa mấy khóa?', back: 'Là tập thuộc tính có giá trị **duy nhất** giúp phân biệt các thực thể trong cùng kiểu thực thể.\nMột kiểu thực thể **có thể có nhiều khóa** (khóa ứng viên). Ký hiệu: **gạch chân liền nét** trong elip.', source: 'Slide Ch.2 Mô hình ER – tr.12' },
  { id: 'ch2-fc-14', chapter: 'ch2', front: 'Nêu 4 gợi ý lựa chọn thuộc tính khóa trong mô hình ER (slide tr.13).', back: '1. Giá trị **không thay đổi** theo thời gian.\n2. Giá trị **không được phép bỏ trống**.\n3. **Tránh** thuộc tính mang thông tin/cấu trúc phân loại, vị trí.\n4. **Ưu tiên thuộc tính đơn** thay vì kết hợp nhiều thuộc tính.', source: 'Slide Ch.2 Mô hình ER – tr.13' },
  { id: 'ch2-fc-15', chapter: 'ch2', front: 'Bẫy phổ biến khi chọn danh sách thuộc tính của thực thể trong mô hình ER?', back: 'Không được đưa **khóa ngoại** (như `Mã phòng`, `Mã người quản lý`, `Mã nhân viên tham gia`) vào làm thuộc tính của thực thể.\nTrong ER, các tham chiếu giữa hai thực thể được biểu diễn bằng **hình thoi liên kết**.', source: 'Slide Ch.2 Mô hình ER – tr.15–16, 27' },
  { id: 'ch2-fc-16', chapter: 'ch2', front: 'Khi nào một thuộc tính được gắn vào hình thoi Liên kết thay vì Thực thể?', back: 'Khi giá trị đó **chỉ phát sinh tại mối tương tác** giữa các thực thể tham gia.\nVD: `Ngày nhận chức` (trên `Quản lý`), `Ngày mượn / Ngày trả` (trên `Mượn sách`), `Điểm` (trên `Học`), `Số giờ` (trên `Làm việc`).', source: 'Slide Ch.2 Mô hình ER – tr.17' },
  { id: 'ch2-fc-17', chapter: 'ch2', front: 'Bậc của liên kết là gì? Có nên tách liên kết bậc 3 thành 3 liên kết bậc 2 không?', back: '**Bậc của liên kết**: số kiểu thực thể tham gia vào liên kết (1: đệ quy, 2: nhị phân, 3: tam phân…).\n**Không** nên tách liên kết bậc 3 (như `NCC – Vật tư – Dự án`) thành 3 liên kết bậc 2 rời rạc vì sẽ mất thông tin bộ ba nào gắn với nhau.', source: 'Slide Ch.2 Mô hình ER – tr.18' },
  { id: 'ch2-fc-18', chapter: 'ch2', front: 'Liên kết đệ quy là gì và vì sao bắt buộc phải ghi nhãn vai trò?', back: 'Là liên kết **bậc 1**, trong đó cùng một kiểu thực thể tham gia liên kết với nhiều **vai trò khác nhau** (VD: `NHÂN VIÊN` giám sát `NHÂN VIÊN`).\nCần ghi **nhãn vai trò** trên hai nhánh để phân biệt ai giám sát – ai bị giám sát.', source: 'Slide Ch.2 Mô hình ER – tr.19' },
  { id: 'ch2-fc-19', chapter: 'ch2', front: 'Phân biệt các kiểu liên kết 1–1, 1–N và M–N. Mẹo đặt nhãn `1`, `n` ở hai đầu?', back: '- **1–1**: 1 A tối đa 1 B và ngược lại.\n- **1–N**: 1 A với nhiều B; 1 B chỉ tối đa 1 A.\n- **M–N**: 1 A với nhiều B và 1 B với nhiều A.\n- **Mẹo**: đứng ở A hỏi *"1 A ứng với mấy B?"* $\\to$ ghi nhãn sang **đầu phía B**.', source: 'Slide Ch.2 Mô hình ER – tr.20–21' },
  { id: 'ch2-fc-20', chapter: 'ch2', front: 'Phân biệt tham gia toàn bộ và tham gia bộ phận trong ER.', back: '- **Tham gia toàn bộ** (*sự phụ thuộc tồn tại*): *mọi* thực thể của kiểu đó bắt buộc tham gia liên kết $\\to$ vẽ **nét đôi** ở đầu phía thực thể đó.\n- **Tham gia bộ phận**: chỉ một phần tham gia (có thể đứng ngoài liên kết) $\\to$ vẽ **nét đơn**.', source: 'Slide Ch.2 Mô hình ER – tr.22–23' },
);

DB.flashcards.push(
  { id: 'ch2-fc-21', chapter: 'ch2', front: 'Biểu đồ mô hình ER gồm những loại Đỉnh và Cạnh nào?', back: '- **Đỉnh**: Tập thực thể (chữ nhật), Thuộc tính (elip), Liên kết (thoi).\n- **Cạnh**: đường nối giữa tập thực thể với thuộc tính, và đường nối mối liên kết giữa các tập thực thể.', source: 'Slide Ch.2 Mô hình ER – tr.25' },
  { id: 'ch2-fc-22', chapter: 'ch2', front: 'Tóm tắt 5 bước xây dựng mô hình ER từ hồ sơ khảo sát (slide tr.26–30).', back: '1. Chính xác hóa và chọn lọc thông tin cơ sở (lập từ điển dữ liệu).\n2. Xác định thực thể (từ thuộc tính tên gọi), thuộc tính và định danh.\n3. Xác định mối quan hệ và thuộc tính của quan hệ.\n4. Vẽ biểu đồ mô hình ER.\n5. Chuẩn hóa và thu gọn biểu đồ.', source: 'Slide Ch.2 Mô hình ER – tr.26–30' },
  { id: 'ch2-fc-23', chapter: 'ch2', front: 'Ở Bước 3 xây dựng ER, đặt câu hỏi cho động từ thế nào để phân biệt Thực thể và Thuộc tính?', back: '- *Ai / Cho ai? Cái gì / Cho cái gì? Ở đâu?* $\\to$ **Thực thể** tham gia liên kết.\n- *Bằng cách nào? Vì sao? Khi nào? Như thế nào? Bao nhiêu?* $\\to$ **Thuộc tính của mối quan hệ**.', source: 'Slide Ch.2 Mô hình ER – tr.28–29' },
  { id: 'ch2-fc-24', chapter: 'ch2', front: 'Hai quy tắc chuẩn hóa và thu gọn mô hình ER ở Bước 5 (slide tr.30)?', back: '1. Chuyển thuộc tính lặp, nhóm lặp, thuộc tính phụ thuộc thời gian thành thuộc tính đơn.\n2. Nếu một thực thể chỉ có **1 thuộc tính**, mối quan hệ ở **phía 1** và **bậc là 2** $\\to$ loại thực thể đó, chuyển thuộc tính riêng và mối quan hệ thành thuộc tính của thực thể liên kết với nó.', source: 'Slide Ch.2 Mô hình ER – tr.30' },
  { id: 'ch2-fc-25', chapter: 'ch2', front: 'Trong Ví dụ 3 (Đơn đặt hàng – Phiếu giao hàng), Bước 5 thu gọn thế nào?', back: 'Gộp hai thực thể bên ngoài có vai trò tương đương là `ĐƠN VỊ ĐH` và `ĐƠN VỊ KH` thành một thực thể chung **`ĐV KHÁCH`** (`Mã ĐV`, `Tên ĐV`, `Địa chỉ`, `Điện thoại`), nối với cả `NGƯỜI ĐẶT` và `NGƯỜI NHẬN`.', source: 'Slide Ch.2 Mô hình ER – tr.40' },
  { id: 'ch2-fc-26', chapter: 'ch2', front: 'Mô hình thực thể liên kết mở rộng (EER) là gì?', back: 'Là mô hình ER truyền thống được bổ sung thêm **một số khái niệm mới** (lớp cha/con, chuyên biệt hóa, tổng quát hóa, kế thừa, kiểu hợp…) và **các biểu diễn quy tắc nghiệp vụ** để mô tả đối tượng rõ ràng và chính xác hơn.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-27', chapter: 'ch2', front: 'Quy tắc kế thừa và khóa của lớp con trong EER hoạt động thế nào?', back: '- Lớp con kế thừa **tất cả thuộc tính và liên kết** của lớp cha (kể cả kế thừa bắc cầu qua nhiều tầng).\n- Lớp con có thể có thêm thuộc tính/liên kết riêng.\n- **Khóa của lớp con được kế thừa trực tiếp từ lớp cha**.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-28', chapter: 'ch2', front: 'Quan hệ "là một" (IS-A) và chiều của ký hiệu tập con $\\subset$ trong EER?', back: 'Mỗi cá thể lớp con *là một* cá thể lớp cha (nhưng cá thể lớp cha không nhất thiết thuộc lớp con nào).\nKý hiệu $\\subset$ vẽ trên nhánh nối lớp con, **phía miệng mở của $\\subset$ hướng về vòng tròn / lớp cha**.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-29', chapter: 'ch2', front: 'Phân biệt Chuyên biệt hóa và Tổng quát hóa trong EER (cẩn thận bẫy đề thi!).', back: '- **Chuyên biệt hóa (*Specialization*)**: thiết kế **từ trên xuống (Top-down)** — từ lớp cha xác định các lớp con dựa trên đặc tính riêng.\n- **Tổng quát hóa (*Generalization*)**: thiết kế **từ dưới lên (Bottom-up)** — hợp nhất các lớp thực thể có đặc điểm chung thành lớp cha.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-30', chapter: 'ch2', front: 'Phân biệt ràng buộc tách biệt (`d`) và phủ lấp (`o`) trong EER.', back: '- **Tách biệt `d` (*disjoint*)**: một thực thể lớp cha **không thể** đồng thời thuộc hai hay nhiều lớp con (tối đa 1).\n- **Phủ lấp `o` (*overlapping*)**: một thực thể lớp cha **có thể đồng thời** là thành viên của nhiều lớp con.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-31', chapter: 'ch2', front: 'Phân biệt ràng buộc toàn phần (*total*) và từng phần/bộ phận (*partial*) trong EER.', back: '- **Toàn phần (*total*)**: mọi thực thể lớp cha **bắt buộc** phải thuộc ít nhất một lớp con $\\to$ **nét đôi** từ lớp cha tới vòng tròn.\n- **Từng phần (*partial*)**: một thực thể lớp cha có thể không thuộc lớp con nào $\\to$ **nét đơn** từ lớp cha tới vòng tròn.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-32', chapter: 'ch2', front: 'Bẫy hình vẽ hay gặp nhất ở nhánh nối từ vòng tròn EER xuống các lớp con?', back: 'Khi vẽ ràng buộc **toàn phần**, chỉ đoạn nối **từ lớp cha tới vòng tròn** là **nét đôi**.\nCác nhánh **từ vòng tròn xuống từng lớp con luôn là nét đơn** (có dấu $\\subset$), không bao giờ vẽ nét đôi!', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-33', chapter: 'ch2', front: 'Chuyên biệt hóa theo thuộc tính phân loại (VD `Loại NV`) mặc nhiên có tính chất gì?', back: 'Là **tách biệt (`d`)**, vì một thuộc tính đơn trị (như `Loại NV` nhận `"TG"`, `"CH"`, `"CG"`) tại một thời điểm chỉ nhận một giá trị duy nhất cho một thực thể.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-34', chapter: 'ch2', front: 'Phân biệt Đa kế thừa và Kiểu hợp / Category (`∪`) trong EER.', back: '- **Đa kế thừa**: 1 lớp con dùng chung kế thừa **nhiều lớp cha cùng gốc** (nhận thuộc tính của tất cả lớp cha).\n- **Kiểu hợp (`∪`)**: 1 lớp con là tập con của **hợp nhiều lớp cha khác loại** (mỗi thực thể chỉ cần thuộc *một* trong các lớp cha đó, VD `CHỦ SỞ HỮU` từ `NGƯỜI` $\\cup$ `DOANH NGHIỆP`).', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-35', chapter: 'ch2', front: 'Ý nghĩa cặp ký hiệu `(min, max)` trên đường nối ER/EER?', back: 'Cho biết mỗi thực thể tham gia vào liên kết **tối thiểu `min` lần và tối đa `max` lần**.\n`min = 0` $\\leftrightarrow$ tham gia bộ phận; `min >= 1` $\\leftrightarrow$ tham gia toàn bộ.\nVD: `(0,3)` = tham gia từ 0 đến 3 dự án.', source: 'Bài tập Ch.2 (Google Form)' },
  { id: 'ch2-fc-36', chapter: 'ch2', front: 'Khi nào phải mô hình hóa thành "thực thể sự kiện" (như `LAN_KHAM`, `LAN_DANG_KY`, `LICH_SU_GIA`)?', back: 'Khi một đối tượng lặp lại cùng hành động **nhiều lần theo thời gian** hoặc cần **truy vết lịch sử** (nhiều lần nhập viện, học lại nhiều kỳ, đơn giá tại thời điểm bán, đổi trưởng phòng theo nhiệm kỳ) để tránh ghi đè dữ liệu cũ.', source: 'Bài tập Ch.2 (Google Form)' },
  { id: 'ch2-fc-37', chapter: 'ch2', front: 'Quy tắc nghiệp vụ *"Một người chỉ được thuê xe nếu có bằng lái xe"* vẽ trong EER thế nào?', back: 'Dùng **ràng buộc kéo theo (`R`)** nối giữa hai liên kết: vẽ **mũi tên nét đứt ghi chữ `R`** xuất phát từ liên kết phụ thuộc (`Thuê`) trỏ đầu mũi tên vào liên kết điều kiện (`Có`).', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-38', chapter: 'ch2', front: 'Những ràng buộc nghiệp vụ nào mà sơ đồ ER/EER tĩnh không tự đảm bảo hết?', back: '- Ràng buộc theo **cửa sổ thời gian** (tối đa 5 ca/tuần).\n- Ràng buộc **trạng thái tác vụ** (tài khoản chưa khóa mới lập hóa đơn).\n- Mã giảm giá **chỉ dùng 1 lần**.\n- **Chống chu trình** trong liên kết đệ quy (NV không gián tiếp quản lý chính mình).', source: 'Bài tập Ch.2 (Google Form)' },
  { id: 'ch2-fc-39', chapter: 'ch2', front: '4 cách chuyển lớp cha/lớp con EER sang lược đồ quan hệ và phạm vi áp dụng?', back: '1. **Cha + Các con** (PK cha xuống con): dùng cho **mọi trường hợp**.\n2. **Chỉ các con** (chép hết thuộc tính cha xuống con): chỉ khi **toàn phần + tách biệt**.\n3. **1 bảng + thuộc tính phân loại**: dùng cho **tách biệt (`d`)**.\n4. **1 bảng + các cờ Boolean**: dùng cho **phủ lấp (`o`)**.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
  { id: 'ch2-fc-40', chapter: 'ch2', front: 'Khi chuyển EER chuyên biệt hóa theo thuộc tính (`Loại NV`) sang quan hệ (Cách 1), cần lưu ý gì?', back: '- Bảng cha (`NHANVIEN`) vẫn **giữ nguyên thuộc tính phân loại `LoaiNV`**.\n- Khóa chính của mọi bảng con phải là **khóa của lớp cha (`MaNV`)**, KHÔNG lấy `LoaiNV` làm khóa bảng con.', source: 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems' },
);
