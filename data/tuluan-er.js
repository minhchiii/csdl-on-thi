/* Bài tập tự luận Chương 2 & chuyển đổi Chương 3 – ER / EER và lược đồ quan hệ
   Nguồn: BT_LTCSDL (C2_C3).txt, Bài tập tổng hợp.txt, BTTH_image1.png, Slide Ch.2 Mô hình ER */
DB.essays.push(
{
  id: 'er-ktx',
  kind: 'er',
  title: 'Quản lý ký túc xá',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 1',
  answerStatus: 'tu-giai',
  prompt: 'Khảo sát bài toán quản lý Ký túc xá sinh viên, thu được các thông tin sau:\n- KTX gồm nhiều tòa nhà khác nhau, thông tin về tòa nhà gồm có: Tên tòa nhà, số tầng, điện thoại liên hệ. Mỗi toà nhà được phân biệt thông qua mã tòa nhà.\n- KTX gồm nhiều nhân viên quản lý khác nhau. Mỗi nhân viên chịu trách nhiệm một số toà nhà, khi nhân viên được phân quản lý tòa nhà sẽ lưu lại ngày nhận công tác. Mỗi nhân viên gồm: mã nhân viên, tên, ngày sinh, điện thoại. Mỗi nhân viên có thể có nhiều số điện thoại.\n- Mỗi tòa nhà có nhiều phòng khác nhau, một phòng chỉ thuộc 1 tòa nhà. Phòng có các thông tin: Mã phòng, Tên phòng, số lượng sinh viên ở thực tế, số chỗ còn trống. Mỗi phòng có thể có nhiều sinh viên nhưng mỗi sinh viên chỉ được ở một phòng.\n- Thông tin về sinh viên gồm: Mã sinh viên, Tên sinh viên, Giới tính, Đối tượng, Tên lớp, điện thoại, số tiền phải nộp hàng tháng.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 180, y: 120, attrs: [
          { label: 'Mã NV', kind: 'key', dx: -135, dy: -36 },
          { label: 'Tên NV', dx: -48, dy: -74 },
          { label: 'Ngày sinh', dx: 68, dy: -74 },
          { label: 'Điện thoại', kind: 'multi', dx: -145, dy: 34 }
        ] },
        { id: 'tn', label: 'TÒA NHÀ', x: 600, y: 120, attrs: [
          { label: 'Mã tòa nhà', kind: 'key', dx: -68, dy: -74 },
          { label: 'Tên tòa nhà', dx: 68, dy: -74 },
          { label: 'Số tầng', dx: 145, dy: -26 },
          { label: 'ĐT liên hệ', dx: 150, dy: 28 }
        ] },
        { id: 'ph', label: 'PHÒNG', x: 600, y: 400, attrs: [
          { label: 'Mã phòng', kind: 'key', dx: -150, dy: -24 },
          { label: 'Tên phòng', dx: -150, dy: 24 },
          { label: 'SL ở thực tế', dx: -72, dy: 74 },
          { label: 'Số chỗ trống', dx: 76, dy: 74 }
        ] },
        { id: 'sv', label: 'SINH VIÊN', x: 180, y: 400, attrs: [
          { label: 'Tiền nộp tháng', dx: 0, dy: -72 },
          { label: 'Mã SV', kind: 'key', dx: -145, dy: -46 },
          { label: 'Tên SV', dx: -145, dy: 0 },
          { label: 'Giới tính', dx: -145, dy: 46 },
          { label: 'Đối tượng', dx: -108, dy: 88 },
          { label: 'Tên lớp', dx: 0, dy: 94 },
          { label: 'Điện thoại', dx: 108, dy: 88 }
        ] }
      ],
      rels: [
        { id: 'ql', label: 'Quản lý', x: 390, y: 120, attrs: [
          { label: 'Ngày nhận CT', dx: 0, dy: -68 }
        ], links: [
          { to: 'nv', card: 'm', total: false },
          { to: 'tn', card: 'n', total: true }
        ] },
        { id: 'co', label: 'Có', x: 600, y: 260, links: [
          { to: 'tn', card: '1', total: false },
          { to: 'ph', card: 'n', total: true }
        ] },
        { id: 'o', label: 'Ở', x: 390, y: 400, links: [
          { to: 'ph', card: '1', total: false },
          { to: 'sv', card: 'n', total: true }
        ] }
      ]
    },
    steps: [
      'Xác định 4 kiểu thực thể mạnh: `TÒA NHÀ` (khóa `Mã tòa nhà`), `NHÂN VIÊN` (khóa `Mã NV`, có thuộc tính đa trị `Điện thoại`), `PHÒNG` (khóa `Mã phòng`), `SINH VIÊN` (khóa `Mã SV`).',
      'Xác định liên kết `Quản lý` (`m:n`) giữa `NHÂN VIÊN` và `TÒA NHÀ` với thuộc tính liên kết `Ngày nhận công tác` (một nhân viên phụ trách nhiều tòa nhà và một tòa nhà có thể do nhiều nhân viên phụ trách theo ca/nhiệm kỳ).',
      'Xác định liên kết `Có` (`1:n`) từ `TÒA NHÀ` sang `PHÒNG` (phía `PHÒNG` tham gia toàn phần) và liên kết `Ở` (`1:n`) từ `PHÒNG` sang `SINH VIÊN` (phía `SINH VIÊN` tham gia toàn phần).',
      'Áp dụng QT1 cho 4 thực thể mạnh, QT7 tách thuộc tính đa trị `Điện thoại` của `NHÂN VIÊN` thành bảng riêng `NV_DIENTHOAI`.',
      'Áp dụng QT4 cho `Quản lý` (`m:n`) thành bảng `QUAN_LY` và QT5 cho hai liên kết `1:n` (`MaTN` đưa sang `PHONG`, `MaPhong` đưa sang `SINH_VIEN`).'
    ],
    relations: [
      { name: 'TOA_NHA', attrs: [{ n: 'MaTN', pk: true }, { n: 'TenTN' }, { n: 'SoTang' }, { n: 'DienThoaiLH' }] },
      { name: 'NHAN_VIEN', attrs: [{ n: 'MaNV', pk: true }, { n: 'TenNV' }, { n: 'NgaySinh' }] },
      { name: 'NV_DIENTHOAI', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'DienThoai', pk: true }] },
      { name: 'QUAN_LY', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'MaTN', pk: true, fk: 'TOA_NHA' }, { n: 'NgayNhanCT' }] },
      { name: 'PHONG', attrs: [{ n: 'MaPhong', pk: true }, { n: 'TenPhong' }, { n: 'SLThucTe' }, { n: 'SoChoTrong' }, { n: 'MaTN', fk: 'TOA_NHA' }] },
      { name: 'SINH_VIEN', attrs: [{ n: 'MaSV', pk: true }, { n: 'TenSV' }, { n: 'GioiTinh' }, { n: 'DoiTuong' }, { n: 'TenLop' }, { n: 'DienThoai' }, { n: 'TienNopHangThang' }, { n: 'MaPhong', fk: 'PHONG' }] }
    ]
  }
},
{
  id: 'er-thuvien-nhanh',
  kind: 'er',
  title: 'Quản lý thư viện (theo nhánh)',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 2',
  answerStatus: 'tu-giai',
  prompt: 'Thư viện được chia ra thành các nhánh. Thông tin về mỗi nhánh gồm có Mã nhánh, Tên nhánh và Địa chỉ. Mỗi cuốn sách trong thư viện có các thông tin về Mã sách, Tên sách, Nhà xuất bản và Tác giả. Một tác giả có thể viết nhiều cuốn sách; một cuốn sách có thể có nhiều tác giả viết. Một nhà xuất bản xuất bản nhiều cuốn sách; một cuốn sách do một nhà xuất bản xuất bản. Thông tin về Nhà xuất bản gồm có Tên, Địa chỉ và Số điện thoại.\n\nMột cuốn sách có thể có nhiều bản sao được lưu trữ tại các nhánh. Thông tin về bản sao sách gồm Mã sách, số các bản sao. Thư viện có những người mượn sách gồm Số thẻ, Họ tên, Địa chỉ và Số điện thoại. Sách được cho các người mượn mượn tại các nhánh. Thông tin về một lần mượn gồm có Ngày mượn và Ngày trả.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'nxb', label: 'NHÀ XUẤT BẢN', x: 140, y: 120, attrs: [
          { label: 'Tên NXB', kind: 'key', dx: -62, dy: -70 },
          { label: 'Địa chỉ', dx: 64, dy: -70 },
          { label: 'Số ĐT', dx: -155, dy: 0 }
        ] },
        { id: 'sach', label: 'SÁCH', x: 560, y: 120, attrs: [
          { label: 'Mã sách', kind: 'key', dx: -62, dy: -72 },
          { label: 'Tên sách', dx: 64, dy: -72 }
        ] },
        { id: 'tg', label: 'TÁC GIẢ', x: 960, y: 120, attrs: [
          { label: 'Tên tác giả', kind: 'key', dx: 0, dy: -68 }
        ] },
        { id: 'bs', label: 'BẢN SAO SÁCH', x: 215, y: 365, weak: true, attrs: [
          { label: 'Số bản sao', dx: -155, dy: 0 }
        ] },
        { id: 'nm', label: 'NGƯỜI MƯỢN', x: 920, y: 370, attrs: [
          { label: 'Số thẻ', kind: 'key', dx: 0, dy: -70 },
          { label: 'Họ tên', dx: 148, dy: -24 },
          { label: 'Địa chỉ', dx: 148, dy: 24 },
          { label: 'Số ĐT', dx: 0, dy: 70 }
        ] },
        { id: 'nhanh', label: 'NHÁNH THƯ VIỆN', x: 560, y: 580, attrs: [
          { label: 'Mã nhánh', kind: 'key', dx: -120, dy: 68 },
          { label: 'Tên nhánh', dx: 0, dy: 74 },
          { label: 'Địa chỉ', dx: 120, dy: 68 }
        ] }
      ],
      rels: [
        { id: 'xb', label: 'Xuất bản', x: 350, y: 120, links: [
          { to: 'nxb', card: '1', total: false },
          { to: 'sach', card: 'n', total: true }
        ] },
        { id: 'viet', label: 'Viết', x: 770, y: 120, links: [
          { to: 'sach', card: 'm', total: true },
          { to: 'tg', card: 'n', total: true }
        ] },
        { id: 'co', label: 'Có bản sao', x: 315, y: 215, ident: true, links: [
          { to: 'sach', card: '1', total: false },
          { to: 'bs', card: 'n', total: true }
        ] },
        { id: 'luu', label: 'Lưu tại', x: 365, y: 485, ident: true, links: [
          { to: 'bs', card: 'n', total: true },
          { to: 'nhanh', card: '1', total: false }
        ] },
        { id: 'muon', label: 'Mượn', x: 560, y: 370, attrs: [
          { label: 'Ngày mượn', dx: 140, dy: -24 },
          { label: 'Ngày trả', dx: 140, dy: 24 }
        ], links: [
          { to: 'sach', card: 'm', total: false },
          { to: 'nhanh', card: 'n', total: false },
          { to: 'nm', card: 'p', total: false }
        ] }
      ]
    },
    steps: [
      'Xác định 5 thực thể mạnh: `NHÀ XUẤT BẢN` (`Tên NXB` khóa), `SÁCH` (`Mã sách` khóa), `TÁC GIẢ` (`Tên tác giả` khóa, có thể thêm `MaTG` nếu cần phân biệt trùng tên), `NHÁNH THƯ VIỆN` (`Mã nhánh` khóa), `NGƯỜI MƯỢN` (`Số thẻ` khóa).',
      'Mô hình `BẢN SAO SÁCH` là thực thể yếu phụ thuộc vào cả `SÁCH` và `NHÁNH THƯ VIỆN` qua hai liên kết định danh (`Có bản sao` `1:n` và `Lưu tại` `n:1`): thuộc tính `Mã sách` trong đề là khóa nhận từ `SÁCH`, ghép cùng `Mã nhánh` tạo khóa `(MaSach, MaNhanh)` với thuộc tính `Số bản sao` (nếu quản lý từng bản in vật lý thì thêm khóa bộ phận `MaBanSao`).',
      'Xác định liên kết `Xuất bản` (`1:n` từ `NHÀ XUẤT BẢN` sang `SÁCH`), `Viết` (`m:n` giữa `SÁCH` và `TÁC GIẢ`).',
      'Xác định liên kết bậc 3 `Mượn` (`m:n:p`) nối đồng thời `SÁCH`, `NHÁNH THƯ VIỆN` và `NGƯỜI MƯỢN`, gắn thuộc tính `Ngày mượn`, `Ngày trả` (hoặc tương đương liên kết `m:n` giữa `NGƯỜI MƯỢN` và `BẢN SAO SÁCH`).',
      'Áp dụng QT1, QT2 (cho `BẢN SAO SÁCH`), QT4 (cho `Viết`), QT5 (đưa `TenNXB` vào `SACH`) và QT6 (cho `Mượn` bậc 3; đưa `NgayMuon` vào khóa chính để cho phép mượn lại cùng đầu sách ở ngày khác).'
    ],
    relations: [
      { name: 'NHA_XUAT_BAN', attrs: [{ n: 'TenNXB', pk: true }, { n: 'DiaChi' }, { n: 'SoDT' }] },
      { name: 'SACH', attrs: [{ n: 'MaSach', pk: true }, { n: 'TenSach' }, { n: 'TenNXB', fk: 'NHA_XUAT_BAN' }] },
      { name: 'TAC_GIA', attrs: [{ n: 'TenTG', pk: true }] },
      { name: 'VIET_SACH', attrs: [{ n: 'MaSach', pk: true, fk: 'SACH' }, { n: 'TenTG', pk: true, fk: 'TAC_GIA' }] },
      { name: 'NHANH_THU_VIEN', attrs: [{ n: 'MaNhanh', pk: true }, { n: 'TenNhanh' }, { n: 'DiaChi' }] },
      { name: 'BAN_SAO_SACH', attrs: [{ n: 'MaSach', pk: true, fk: 'SACH' }, { n: 'MaNhanh', pk: true, fk: 'NHANH_THU_VIEN' }, { n: 'SoBanSao' }] },
      { name: 'NGUOI_MUON', attrs: [{ n: 'SoThe', pk: true }, { n: 'HoTen' }, { n: 'DiaChi' }, { n: 'SoDT' }] },
      { name: 'MUON_SACH', attrs: [{ n: 'MaSach', pk: true, fk: 'SACH' }, { n: 'MaNhanh', pk: true, fk: 'NHANH_THU_VIEN' }, { n: 'SoThe', pk: true, fk: 'NGUOI_MUON' }, { n: 'NgayMuon', pk: true }, { n: 'NgayTra' }] }
    ]
  }
},
{
  id: 'er-bds',
  kind: 'er',
  title: 'Quản lý bất động sản',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 3',
  answerStatus: 'tu-giai',
  prompt: 'Một công ty bất động sản có một số văn phòng tại nhiều địa điểm. Mỗi văn phòng có mã số văn phòng, địa chỉ.\nMỗi một văn phòng có một số nhân viên và một trong số đó là trưởng phòng. Mỗi nhân viên có mã số nhân viên, tên nhân viên, địa chỉ nhà, số điện thoại. Một nhân viên có một hay nhiều thân nhân (vợ/con). Thông tin về thân nhân gồm tên, ngày sinh và mối liên hệ với nhân viên.\nCông ty có một danh sách các bất động sản cần bán. Thông tin về bất động sản là mã số bất động sản, địa chỉ. Mỗi một bất động sản được rao bán tại một và chỉ một văn phòng. Mỗi văn phòng có thể có nhiều hoặc không có bất động sản nào cần rao bán.\nMỗi bất động sản có một chủ nhân. Chủ nhân được xác định bởi mã số chủ nhân. Một chủ nhân có thể có nhiều bất động sản. Thông tin về chủ nhân còn có tên, địa chỉ và số điện thoại.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'vp', label: 'VĂN PHÒNG', x: 220, y: 140, attrs: [
          { label: 'Mã số VP', kind: 'key', dx: -68, dy: -70 },
          { label: 'Địa chỉ', dx: 68, dy: -70 }
        ] },
        { id: 'nv', label: 'NHÂN VIÊN', x: 680, y: 140, attrs: [
          { label: 'Mã số NV', kind: 'key', dx: -68, dy: -72 },
          { label: 'Tên NV', dx: 68, dy: -72 },
          { label: 'Địa chỉ nhà', dx: 155, dy: -24 },
          { label: 'Số ĐT', dx: 155, dy: 24 }
        ] },
        { id: 'tn', label: 'THÂN NHÂN', x: 680, y: 430, weak: true, attrs: [
          { label: 'Tên', kind: 'partial', dx: -115, dy: 68 },
          { label: 'Ngày sinh', dx: 0, dy: 72 },
          { label: 'Mối liên hệ', dx: 118, dy: 68 }
        ] },
        { id: 'bds', label: 'BẤT ĐỘNG SẢN', x: 220, y: 430, attrs: [
          { label: 'Mã số BĐS', kind: 'key', dx: -158, dy: -24 },
          { label: 'Địa chỉ', dx: -158, dy: 24 }
        ] },
        { id: 'cn', label: 'CHỦ NHÂN', x: 220, y: 690, attrs: [
          { label: 'Mã số CN', kind: 'key', dx: -152, dy: 0 },
          { label: 'Tên CN', dx: -72, dy: 70 },
          { label: 'Địa chỉ', dx: 72, dy: 70 },
          { label: 'Số ĐT', dx: 152, dy: 0 }
        ] }
      ],
      rels: [
        { id: 'lv', label: 'Làm việc', x: 450, y: 95, links: [
          { to: 'vp', card: '1', total: true },
          { to: 'nv', card: 'n', total: true }
        ] },
        { id: 'tp', label: 'Trưởng phòng', x: 450, y: 195, links: [
          { to: 'vp', card: '1', total: true },
          { to: 'nv', card: '1', total: false }
        ] },
        { id: 'co', label: 'Có', x: 680, y: 290, ident: true, links: [
          { to: 'nv', card: '1', total: true },
          { to: 'tn', card: 'n', total: true }
        ] },
        { id: 'rb', label: 'Rao bán', x: 220, y: 290, links: [
          { to: 'vp', card: '1', total: false },
          { to: 'bds', card: 'n', total: true }
        ] },
        { id: 'sh', label: 'Sở hữu', x: 220, y: 560, links: [
          { to: 'bds', card: 'n', total: true },
          { to: 'cn', card: '1', total: true }
        ] }
      ]
    },
    steps: [
      'Xác định 4 thực thể mạnh (`VĂN PHÒNG`, `NHÂN VIÊN`, `BẤT ĐỘNG SẢN`, `CHỦ NHÂN`) và 1 thực thể yếu `THÂN NHÂN` phụ thuộc tồn tại vào `NHÂN VIÊN` (khóa bộ phận `Tên`).',
      'Xác định hai liên kết giữa `VĂN PHÒNG` và `NHÂN VIÊN`: `Làm việc` (`1:n`, cả hai tham gia toàn phần) và `Trưởng phòng` (`1:1`, toàn phần phía `VĂN PHÒNG` vì mỗi văn phòng có 1 trưởng phòng).',
      'Xác định liên kết định danh `Có` (`1:n`, hai đầu đều toàn phần vì đề nêu mỗi nhân viên có một hay nhiều thân nhân), liên kết `Rao bán` (`1:n`, bộ phận phía `VĂN PHÒNG`, toàn phần phía `BẤT ĐỘNG SẢN`), và liên kết `Sở hữu` (`1:n` giữa `CHỦ NHÂN` và `BẤT ĐỘNG SẢN`).',
      'Chuyển sang quan hệ theo QT1, QT2 (`THAN_NHAN` lấy `MaNV` ghép cùng `Ten` làm khóa chính), QT3 (`Trưởng phòng` `1:1` đặt `MaTruongPhong` về phía bắt buộc `VAN_PHONG`), và QT5 (`MaVP` sang `NHAN_VIEN`; `MaVP` và `MaCN` sang `BAT_DONG_SAN`).'
    ],
    relations: [
      { name: 'VAN_PHONG', attrs: [{ n: 'MaVP', pk: true }, { n: 'DiaChi' }, { n: 'MaTruongPhong', fk: 'NHAN_VIEN' }] },
      { name: 'NHAN_VIEN', attrs: [{ n: 'MaNV', pk: true }, { n: 'TenNV' }, { n: 'DiaChiNha' }, { n: 'SoDT' }, { n: 'MaVP', fk: 'VAN_PHONG' }] },
      { name: 'THAN_NHAN', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'Ten', pk: true }, { n: 'NgaySinh' }, { n: 'MoiLienHe' }] },
      { name: 'CHU_NHAN', attrs: [{ n: 'MaCN', pk: true }, { n: 'TenCN' }, { n: 'DiaChi' }, { n: 'SoDT' }] },
      { name: 'BAT_DONG_SAN', attrs: [{ n: 'MaBDS', pk: true }, { n: 'DiaChi' }, { n: 'MaVP', fk: 'VAN_PHONG' }, { n: 'MaCN', fk: 'CHU_NHAN' }] }
    ]
  }
},
{
  id: 'er-cuahang',
  kind: 'er',
  title: 'Quản lý cửa hàng',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 4 · Bài tập tổng hợp – Ch.2',
  answerStatus: 'tu-giai',
  prompt: 'Khảo sát hoạt động của một cửa hàng, ta thu được các thông tin sau:\n- Mỗi khách hàng thành viên được lưu trữ các thông tin về mã khách hàng, họ tên, địa chỉ, điện thoại, doanh số (là tổng trị giá các hoá đơn mà khách hàng đó đã mua). Mỗi khách hàng được phân biệt nhau bởi mã số khách hàng.\n- Mỗi nhân viên của cửa hàng được quản lý các thông tin gồm mã nhân viên, họ tên, ngày sinh, điện thoại, lương. Mỗi nhân viên được phân biệt nhau bởi mã số nhân viên.\n- Mỗi sản phẩm có mã sản phẩm, tên sản phẩm, đơn vị tính và giá của sản phẩm đó.\n- Mỗi lần khách hàng mua hàng sẽ có một hoá đơn. Mỗi hoá đơn có các thông tin gồm số hoá đơn, ngày hoá đơn, tổng trị giá của hoá đơn đó. Mỗi hoá đơn phải do nhân viên bán hàng của cửa hàng lập. Mỗi hoá đơn có thể mua nhiều mặt hàng, được kê chi tiết trong bảng chi tiết hoá đơn trong đó có ghi rõ số lượng và thành tiền cụ thể của từng mặt hàng.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'kh', label: 'KHÁCH HÀNG', x: 200, y: 130, attrs: [
          { label: 'Mã KH', kind: 'key', dx: -150, dy: -42 },
          { label: 'Họ tên', dx: -150, dy: 0 },
          { label: 'Địa chỉ', dx: -150, dy: 42 },
          { label: 'Điện thoại', dx: -68, dy: -72 },
          { label: 'Doanh số', kind: 'derived', dx: 68, dy: -72 }
        ] },
        { id: 'hd', label: 'HÓA ĐƠN', x: 600, y: 130, attrs: [
          { label: 'Số HĐ', kind: 'key', dx: -68, dy: -72 },
          { label: 'Ngày HĐ', dx: 68, dy: -72 },
          { label: 'Tổng trị giá', kind: 'derived', dx: 162, dy: 0 }
        ] },
        { id: 'nv', label: 'NHÂN VIÊN', x: 600, y: 440, attrs: [
          { label: 'Mã NV', kind: 'key', dx: 152, dy: -42 },
          { label: 'Họ tên', dx: 152, dy: 0 },
          { label: 'Ngày sinh', dx: 152, dy: 42 },
          { label: 'Điện thoại', dx: -68, dy: 72 },
          { label: 'Lương', dx: 68, dy: 72 }
        ] },
        { id: 'sp', label: 'SẢN PHẨM', x: 200, y: 440, attrs: [
          { label: 'Mã SP', kind: 'key', dx: -150, dy: -24 },
          { label: 'Tên SP', dx: -150, dy: 24 },
          { label: 'Đơn vị tính', dx: -70, dy: 72 },
          { label: 'Giá', dx: 70, dy: 72 }
        ] }
      ],
      rels: [
        { id: 'mua', label: 'Mua', x: 400, y: 130, links: [
          { to: 'kh', card: '1', total: false },
          { to: 'hd', card: 'n', total: true }
        ] },
        { id: 'lap', label: 'Lập', x: 600, y: 285, links: [
          { to: 'nv', card: '1', total: false },
          { to: 'hd', card: 'n', total: true }
        ] },
        { id: 'ct', label: 'Chi tiết HĐ', x: 355, y: 285, attrs: [
          { label: 'Số lượng', dx: -140, dy: -28 },
          { label: 'Thành tiền', kind: 'derived', dx: -140, dy: 24 }
        ], links: [
          { to: 'hd', card: 'm', total: true },
          { to: 'sp', card: 'n', total: false }
        ] }
      ]
    },
    steps: [
      'Xác định 4 thực thể mạnh: `KHÁCH HÀNG` (`Mã KH` khóa, `Doanh số` suy dẫn), `NHÂN VIÊN` (`Mã NV` khóa), `SẢN PHẨM` (`Mã SP` khóa), `HÓA ĐƠN` (`Số HĐ` khóa, `Tổng trị giá` suy dẫn).',
      'Xác định hai liên kết `1:n`: `Mua` từ `KHÁCH HÀNG` sang `HÓA ĐƠN` và `Lập` từ `NHÂN VIÊN` sang `HÓA ĐƠN` (phía `HÓA ĐƠN` tham gia toàn phần).',
      'Xác định liên kết `m:n` `Chi tiết HĐ` giữa `HÓA ĐƠN` (tham gia toàn phần vì hóa đơn phải có ít nhất 1 mặt hàng) và `SẢN PHẨM`, mang thuộc tính `Số lượng` và thuộc tính suy dẫn `Thành tiền` (`Số lượng × Giá`).',
      'Áp dụng QT1 cho 4 thực thể (bỏ các thuộc tính suy dẫn `Doanh số`, `Tổng trị giá`, `Thành tiền` theo quy tắc chuẩn), QT5 đưa `MaKH` và `MaNV` sang `HOA_DON`, và QT4 chuyển `Chi tiết HĐ` thành bảng `CHI_TIET_HD`.'
    ],
    relations: [
      { name: 'KHACH_HANG', attrs: [{ n: 'MaKH', pk: true }, { n: 'HoTen' }, { n: 'DiaChi' }, { n: 'DienThoai' }] },
      { name: 'NHAN_VIEN', attrs: [{ n: 'MaNV', pk: true }, { n: 'HoTen' }, { n: 'NgaySinh' }, { n: 'DienThoai' }, { n: 'Luong' }] },
      { name: 'SAN_PHAM', attrs: [{ n: 'MaSP', pk: true }, { n: 'TenSP' }, { n: 'DonViTinh' }, { n: 'Gia' }] },
      { name: 'HOA_DON', attrs: [{ n: 'SoHD', pk: true }, { n: 'NgayHD' }, { n: 'MaKH', fk: 'KHACH_HANG' }, { n: 'MaNV', fk: 'NHAN_VIEN' }] },
      { name: 'CHI_TIET_HD', attrs: [{ n: 'SoHD', pk: true, fk: 'HOA_DON' }, { n: 'MaSP', pk: true, fk: 'SAN_PHAM' }, { n: 'SoLuong' }] }
    ]
  }
},
{
  id: 'er-donvi',
  kind: 'er',
  title: 'Quản lý đơn vị và dự án công ty',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 5',
  answerStatus: 'tu-giai',
  prompt: 'Công ty được tổ chức thành các đơn vị. Mỗi đơn vị có một tên duy nhất, một mã số duy nhất, một nhân viên cụ thể quản lý. Việc nhân viên quản lý đơn vị được ghi lại bằng ngày nhân viên đó bắt đầu quản lý. Một đơn vị có thể có nhiều địa điểm. Nhân viên quản lý đơn vị là một người thuộc công ty.\nMỗi đơn vị thực hiện một số dự án. Một dự án có một tên duy nhất, một mã số duy nhất, một địa điểm thực hiện và thời gian bắt đầu thực hiện dự án.\nVới mỗi nhân viên trong công ty, ta lưu giữ lại thông tin như: Họ tên, Mã số, địa chỉ, hệ số lương, lương (được tính dựa vào hệ số lương và mức lương cơ bản hiện tại), giới tính, ngày sinh, ngoại ngữ (mỗi nhân viên có thể biết nhiều ngoại ngữ). Một nhân viên chỉ làm việc cho một đơn vị nhưng có thể làm việc trên nhiều dự án do nhiều đơn vị kiểm soát – thực hiện. Chúng ta cần lưu giữ lại số giờ làm việc của mỗi nhân viên trên một dự án nào đó. Mỗi nhân viên có thể có một người giám sát trực tiếp, người đó cũng là một nhân viên.\nMỗi nhân viên có những người thân kèm theo. Những người này được hưởng bảo hiểm theo nhân viên. Với mỗi người thân của nhân viên, chúng ta lưu giữ Họ tên, giới tính, ngày sinh, tuổi, quan hệ với nhân viên.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'nv', label: 'NHÂN VIÊN', x: 320, y: 200, attrs: [
          { label: 'Mã số', kind: 'key', dx: -195, dy: 10 },
          { label: 'Ngoại ngữ', kind: 'multi', dx: -205, dy: -36 },
          { label: 'Họ tên', dx: -195, dy: -82 },
          { label: 'Địa chỉ', dx: -120, dy: -116 },
          { label: 'Ngày sinh', dx: -25, dy: -128 },
          { label: 'Giới tính', dx: 64, dy: -124 },
          { label: 'Hệ số lương', dx: 150, dy: -108 },
          { label: 'Lương', kind: 'derived', dx: 215, dy: -82 }
        ] },
        { id: 'dv', label: 'ĐƠN VỊ', x: 920, y: 200, attrs: [
          { label: 'Mã số', kind: 'key', dx: -64, dy: -72 },
          { label: 'Tên', dx: 58, dy: -72 },
          { label: 'Địa điểm', kind: 'multi', dx: 155, dy: 0 }
        ] },
        { id: 'tn', label: 'NGƯỜI THÂN', x: 320, y: 520, weak: true, attrs: [
          { label: 'Họ tên', kind: 'partial', dx: -162, dy: 0 },
          { label: 'Giới tính', dx: -125, dy: 68 },
          { label: 'Ngày sinh', dx: -25, dy: 76 },
          { label: 'Tuổi', kind: 'derived', dx: 74, dy: 76 },
          { label: 'Quan hệ', dx: 162, dy: 58 }
        ] },
        { id: 'da', label: 'DỰ ÁN', x: 920, y: 520, attrs: [
          { label: 'Mã số', kind: 'key', dx: -64, dy: 72 },
          { label: 'Tên', dx: 58, dy: 72 },
          { label: 'Địa điểm', dx: 155, dy: -24 },
          { label: 'T/g bắt đầu', dx: 160, dy: 24 }
        ] }
      ],
      rels: [
        { id: 'ql', label: 'Quản lý', x: 630, y: 150, attrs: [
          { label: 'Ngày bắt đầu', dx: 0, dy: -68 }
        ], links: [
          { to: 'nv', card: '1', total: false },
          { to: 'dv', card: '1', total: true }
        ] },
        { id: 'lvc', label: 'Làm việc cho', x: 630, y: 258, links: [
          { to: 'nv', card: 'n', total: true },
          { to: 'dv', card: '1', total: true }
        ] },
        { id: 'gs', label: 'Giám sát', x: 115, y: 365, links: [
          { to: 'nv', card: '1', role: 'giám sát', bend: -56 },
          { to: 'nv', card: 'n', role: 'bị giám sát', bend: 56 }
        ] },
        { id: 'co', label: 'Có', x: 320, y: 365, ident: true, links: [
          { to: 'nv', card: '1', total: false },
          { to: 'tn', card: 'n', total: true }
        ] },
        { id: 'lv', label: 'Làm việc trên', x: 630, y: 390, attrs: [
          { label: 'Số giờ', dx: 0, dy: 68 }
        ], links: [
          { to: 'nv', card: 'm', total: false },
          { to: 'da', card: 'n', total: true }
        ] },
        { id: 'th', label: 'Thực hiện', x: 920, y: 360, links: [
          { to: 'dv', card: '1', total: true },
          { to: 'da', card: 'n', total: true }
        ] }
      ]
    },
    steps: [
      'Xác định 3 thực thể mạnh: `ĐƠN VỊ` (`Mã số` khóa, `Tên` duy nhất, `Địa điểm` đa trị), `DỰ ÁN` (`Mã số` khóa, `Tên` duy nhất), `NHÂN VIÊN` (`Mã số` khóa, `Ngoại ngữ` đa trị, `Lương` suy dẫn) và thực thể yếu `NGƯỜI THÂN` (khóa bộ phận `Họ tên`, `Tuổi` suy dẫn).',
      'Xác định các liên kết: `Quản lý` (`1:1`, toàn phần phía `ĐƠN VỊ`, thuộc tính `Ngày bắt đầu`), `Làm việc cho` (`n:1`), `Thực hiện` (`1:n`), `Làm việc trên` (`m:n`, thuộc tính `Số giờ`), liên kết đệ quy `Giám sát` (`1:n` trên `NHÂN VIÊN`) và liên kết định danh `Có` (`1:n`).',
      'Áp dụng QT1 (bỏ thuộc tính suy dẫn `Lương`, `Tuổi`), QT2 (`NGUOI_THAN` lấy `MaNV` + `HoTen` làm khóa chính), QT3 (`Quản lý` đưa `MaNV_QL` và `NgayBatDauQL` sang `DON_VI`).',
      'Áp dụng QT4 (`LAM_VIEC` cho `m:n`), QT5 (`MaDV` và `MaNGS` đưa vào `NHAN_VIEN`, `MaDV` đưa vào `DU_AN`) và QT7 tách 2 thuộc tính đa trị thành `DV_DIA_DIEM` và `NV_NGOAI_NGU`.'
    ],
    relations: [
      { name: 'DON_VI', attrs: [{ n: 'MaDV', pk: true }, { n: 'TenDV' }, { n: 'MaNV_QL', fk: 'NHAN_VIEN' }, { n: 'NgayBatDauQL' }] },
      { name: 'DV_DIA_DIEM', attrs: [{ n: 'MaDV', pk: true, fk: 'DON_VI' }, { n: 'DiaDiem', pk: true }] },
      { name: 'NHAN_VIEN', attrs: [{ n: 'MaNV', pk: true }, { n: 'HoTen' }, { n: 'DiaChi' }, { n: 'HeSoLuong' }, { n: 'GioiTinh' }, { n: 'NgaySinh' }, { n: 'MaDV', fk: 'DON_VI' }, { n: 'MaNGS', fk: 'NHAN_VIEN' }] },
      { name: 'NV_NGOAI_NGU', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'NgoaiNgu', pk: true }] },
      { name: 'DU_AN', attrs: [{ n: 'MaDA', pk: true }, { n: 'TenDA' }, { n: 'DiaDiem' }, { n: 'TGBatDau' }, { n: 'MaDV', fk: 'DON_VI' }] },
      { name: 'LAM_VIEC', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'MaDA', pk: true, fk: 'DU_AN' }, { n: 'SoGio' }] },
      { name: 'NGUOI_THAN', attrs: [{ n: 'MaNV', pk: true, fk: 'NHAN_VIEN' }, { n: 'HoTen', pk: true }, { n: 'GioiTinh' }, { n: 'NgaySinh' }, { n: 'QuanHe' }] }
    ]
  }
},
{
  id: 'eer-tailieu',
  kind: 'eer',
  title: 'Cơ sở dữ liệu tài liệu của nhà khoa học',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 6',
  answerStatus: 'tu-giai',
  prompt: 'Một nhà khoa học muốn lập một cơ sở dữ liệu cho các tài liệu của ông ta. Thời gian, nguồn gốc và nơi cất của mỗi tài liệu cần được lưu. Tài liệu có thể là sách, bao gồm các thuộc tính: tác giả, tựa đề. Tài liệu có thể là bài báo khoa học từ tạp chí, loại này sẽ có các thuộc tính: tác giả, tựa đề, tên tạp trí, số volume, số, từ trang, đến trang. Tài liệu có thể là thư tín cá nhân bao gồm các thuộc tính người gửi và tựa đề.\n\nHãy vẽ mô hình EER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'tl', label: 'TÀI LIỆU', x: 420, y: 95, attrs: [
          { label: 'Mã TL', kind: 'key', dx: -150, dy: -22 },
          { label: 'Tựa đề', dx: -150, dy: 22 },
          { label: 'Thời gian', dx: -64, dy: -68 },
          { label: 'Nguồn gốc', dx: 64, dy: -68 },
          { label: 'Nơi cất', dx: 150, dy: 0 }
        ] },
        { id: 'sach', label: 'SÁCH', x: 90, y: 300, attrs: [
          { label: 'Tác giả', dx: 0, dy: 68 }
        ] },
        { id: 'bb', label: 'BÀI BÁO TẠP CHÍ', x: 420, y: 300, attrs: [
          { label: 'Tác giả', dx: -158, dy: 42 },
          { label: 'Tên tạp chí', dx: -130, dy: 96 },
          { label: 'Số volume', dx: -52, dy: 136 },
          { label: 'Số', dx: 48, dy: 136 },
          { label: 'Từ trang', dx: 130, dy: 96 },
          { label: 'Đến trang', dx: 158, dy: 42 }
        ] },
        { id: 'tt', label: 'THƯ TÍN CÁ NHÂN', x: 750, y: 300, attrs: [
          { label: 'Người gửi', dx: 0, dy: 68 }
        ] }
      ],
      specs: [
        { id: 's1', x: 420, y: 195, kind: 'd', parent: 'tl', total: true, children: ['sach', 'bb', 'tt'] }
      ]
    },
    steps: [
      'Xác định lớp cha `TÀI LIỆU` gồm khóa bổ sung `Mã TL` cùng các thuộc tính chung `Thời gian`, `Nguồn gốc`, `Nơi cất` và thuộc tính chung của cả 3 loại là `Tựa đề` (đưa lên lớp cha để tránh lặp lại ở từng lớp con).',
      'Chuyên biệt hóa `TÀI LIỆU` thành 3 lớp con: `SÁCH` (`Tác giả`), `BÀI BÁO TẠP CHÍ` (`Tác giả`, `Tên tạp chí`, `Số volume`, `Số`, `Từ trang`, `Đến trang`) và `THƯ TÍN CÁ NHÂN` (`Người gửi`).',
      'Đặt ràng buộc chuyên biệt hóa: **tách biệt (`d`)** vì một tài liệu chỉ thuộc đúng một trong ba loại, và **toàn phần** (nét đôi từ `TÀI LIỆU` tới vòng `d`) vì mọi tài liệu lưu trữ đều thuộc một trong ba nhóm trên.',
      'Chuyển EER sang quan hệ theo **Cách 1** (bảng cha + các bảng con): tạo bảng `TAI_LIEU` chứa khóa `MaTL` và thuộc tính chung, mỗi bảng con nhận `MaTL` làm khóa chính kiêm khóa ngoại tham chiếu `TAI_LIEU` (ngoài ra do vừa `d` vừa toàn phần, có thể dùng Cách 2 tách thành 3 bảng độc lập chứa đủ thuộc tính cha).'
    ],
    relations: [
      { name: 'TAI_LIEU', attrs: [{ n: 'MaTL', pk: true }, { n: 'TuaDe' }, { n: 'ThoiGian' }, { n: 'NguonGoc' }, { n: 'NoiCat' }, { n: 'LoaiTL' }] },
      { name: 'SACH', attrs: [{ n: 'MaTL', pk: true, fk: 'TAI_LIEU' }, { n: 'TacGia' }] },
      { name: 'BAI_BAO_TAP_CHI', attrs: [{ n: 'MaTL', pk: true, fk: 'TAI_LIEU' }, { n: 'TacGia' }, { n: 'TenTapChi' }, { n: 'SoVolume' }, { n: 'So' }, { n: 'TuTrang' }, { n: 'DenTrang' }] },
      { name: 'THU_TIN_CA_NHAN', attrs: [{ n: 'MaTL', pk: true, fk: 'TAI_LIEU' }, { n: 'NguoiGui' }] }
    ]
  }
},
{
  id: 'eer-philoinhuan',
  kind: 'eer',
  title: 'Tổ chức phi lợi nhuận',
  source: 'BT_LTCSDL (C2_C3) – Ch.2 Câu 7',
  answerStatus: 'tu-giai',
  prompt: 'Một tổ chức phi lợi nhuận hoạt động được là nhờ sự làm việc của nhiều người. Thông tin về người gồm có mã số, tên, địa chỉ và số điện thoại. Ba loại người đáng quan tâm là nhân viên, người tình nguyên và nhà tài trợ, … Nhân viên có thuộc tính ngày tuyển dụng. Người tình nguyện có thuộc tính kỹ năng. Nhà tài trợ có thuộc tính ngày bắt đầu tài trợ. Nhà tài trợ có một mối liên kết mang tên tài tợ với kiểu thực thể mặt hàng. Một nhà tài trợ đã tài trợ một hay nhiều mặt hàng và một mặt hàng có thể không có, có một hoặc nhiều nhà tài trợ.\nLưu ý: Một người có thể thuộc về hai hay ba nhóm người đã nêu trên (ví dụ vừa là nhân viên vừa là nhà tài trợ, …)\n\nHãy vẽ mô hình EER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'nguoi', label: 'NGƯỜI', x: 420, y: 95, attrs: [
          { label: 'Mã số', kind: 'key', dx: -145, dy: -22 },
          { label: 'Tên', dx: -145, dy: 22 },
          { label: 'Địa chỉ', dx: 0, dy: -68 },
          { label: 'Số ĐT', dx: 145, dy: 0 }
        ] },
        { id: 'nv', label: 'NHÂN VIÊN', x: 120, y: 300, attrs: [
          { label: 'Ngày tuyển dụng', dx: 0, dy: 70 }
        ] },
        { id: 'tnv', label: 'TÌNH NGUYỆN VIÊN', x: 420, y: 300, attrs: [
          { label: 'Kỹ năng', dx: 0, dy: 70 }
        ] },
        { id: 'ntt', label: 'NHÀ TÀI TRỢ', x: 720, y: 300, attrs: [
          { label: 'Ngày bắt đầu tài trợ', dx: 170, dy: 0 }
        ] },
        { id: 'mh', label: 'MẶT HÀNG', x: 720, y: 540, attrs: [
          { label: 'Mã MH', kind: 'key', dx: -145, dy: 0 },
          { label: 'Tên MH', dx: 0, dy: 70 }
        ] }
      ],
      rels: [
        { id: 'tt', label: 'Tài trợ', x: 720, y: 420, links: [
          { to: 'ntt', card: 'm', total: true },
          { to: 'mh', card: 'n', total: false }
        ] }
      ],
      specs: [
        { id: 's1', x: 420, y: 195, kind: 'o', parent: 'nguoi', total: false, children: ['nv', 'tnv', 'ntt'] }
      ]
    },
    steps: [
      'Xác định lớp cha `NGƯỜI` (`Mã số` khóa, `Tên`, `Địa chỉ`, `Số ĐT`) chuyên biệt hóa thành 3 lớp con: `NHÂN VIÊN` (`Ngày tuyển dụng`), `TÌNH NGUYỆN VIÊN` (`Kỹ năng`) và `NHÀ TÀI TRỢ` (`Ngày bắt đầu tài trợ`).',
      'Đặt ràng buộc **phủ lấp / chồng lấn (`o`)** vì một người có thể đồng thời thuộc hai hoặc ba vai trò, và **bộ phận** (nét đơn từ `NGƯỜI` tới vòng `o`) vì tổ chức còn có thể có các đối tượng người khác ngoài 3 nhóm chính.',
      'Thêm thực thể `MẶT HÀNG` (bổ sung khóa `Mã MH` và `Tên MH` để định danh) nối với lớp con `NHÀ TÀI TRỢ` qua liên kết `Tài trợ` (`m:n`), nét đôi phía `NHÀ TÀI TRỢ` (tài trợ ít nhất 1 mặt hàng) và nét đơn phía `MẶT HÀNG`.',
      'Chuyển sang quan hệ theo **Cách 1** (bảng cha + các bảng con): `NGUOI` giữ thông tin chung; mỗi bảng con (`NHAN_VIEN`, `TINH_NGUYEN_VIEN`, `NHA_TAI_TRO`) dùng `MaSo` làm khóa chính đồng thời khóa ngoại trỏ về `NGUOI`; liên kết `m:n` `Tài trợ` chuyển thành bảng `TAI_TRO` (QT4).'
    ],
    relations: [
      { name: 'NGUOI', attrs: [{ n: 'MaSo', pk: true }, { n: 'Ten' }, { n: 'DiaChi' }, { n: 'SoDT' }] },
      { name: 'NHAN_VIEN', attrs: [{ n: 'MaSo', pk: true, fk: 'NGUOI' }, { n: 'NgayTuyenDung' }] },
      { name: 'TINH_NGUYEN_VIEN', attrs: [{ n: 'MaSo', pk: true, fk: 'NGUOI' }, { n: 'KyNang' }] },
      { name: 'NHA_TAI_TRO', attrs: [{ n: 'MaSo', pk: true, fk: 'NGUOI' }, { n: 'NgayBatDauTT' }] },
      { name: 'MAT_HANG', attrs: [{ n: 'MaMH', pk: true }, { n: 'TenMH' }] },
      { name: 'TAI_TRO', attrs: [{ n: 'MaSo_NTT', pk: true, fk: 'NHA_TAI_TRO' }, { n: 'MaMH', pk: true, fk: 'MAT_HANG' }] }
    ]
  }
},
{
  id: 'er-totnghiep',
  kind: 'er',
  title: 'Quản lý thi tốt nghiệp PTCS',
  source: 'Bài tập tổng hợp – Ch.2',
  answerStatus: 'tu-giai',
  prompt: 'Một phòng giáo dục huyện muốn lập một hệ thống thông tin để quản lý việc tổ chức thi tốt nghiệp phổ thông cơ sở. Công việc tổ chức thi được thực hiện như sau:\n- Lãnh đạo phòng giáo dục thành lập nhiều hội đồng thi (mỗi hội đồng thi gồm một trường hoặc một số trường gần nhau). Mỗi hội đồng thi có một mã số duy nhất (MAHĐT), một mã số hội đồng thi xác định tên hội đồng thi (TENHĐT), họ tên chủ tịch hội đồng (TENCT), địa chỉ (ĐCHĐT), điện thoại (ĐTHĐT).\n- Mỗi hội đồng thi được bố trí cho một số phòng thi, mỗi phòng thi có một số hiệu phòng (SOPT) duy nhất, một phòng thi xác định địa chỉ phòng thi (ĐCPT). Số hiệu phòng thi được đánh số khác nhau ở tất cả các hội đồng thi.\n- Giáo viên của các trường trực thuộc phòng được điều động đến các hội đồng để coi thi, mỗi trường có thể có hoặc không có thí sinh dự thi, mỗi trường có một mã trường duy nhất (MATR), mỗi mã trường xác định một tên trường (TENTR), địa chỉ (ĐCTR), loại hình đào tạo (LHĐT) (Công lập, chuyên, bán công, dân lập, nội trú,…). Giáo viên của một trường có thể làm việc tại nhiều hội đồng thi. Một giáo viên có một mã giáo viên (MAGV), một mã giáo viên xác định tên giáo viên (TENGV), chuyên môn giảng dạy (CHUYENMON), chức danh trong hội đồng thi (CHUCDANH).\n- Các thí sinh dự thi có một số báo danh duy nhất (SOBD), mỗi số báo danh xác định tên thí sinh (TENTS), ngày sinh (NGSINH), giới tính (PHAI), mỗi thí sinh được xếp thi tại một phòng thi nhất định cho tất cả các môn, mỗi thí sinh có thể có chứng chỉ nghề (CCNGHE) hoặc không. Thí sinh của cùng một trường chỉ dự thi tại một hội đồng thi.\n- Mỗi môn thi có một mã môn thi duy nhất (MAMT), mỗi mã môn thi xác định tên môn thi (TENMT). Ứng với mỗi môn thi một thí sinh có một điểm thi duy nhất (ĐIEMTHI).\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'hdt', label: 'HỘI ĐỒNG THI', x: 240, y: 150, attrs: [
          { label: 'MAHĐT', kind: 'key', dx: -155, dy: -22 },
          { label: 'TENHĐT', dx: -155, dy: 22 },
          { label: 'TENCT', dx: -115, dy: -72 },
          { label: 'ĐCHĐT', dx: 0, dy: -78 },
          { label: 'ĐTHĐT', dx: 115, dy: -72 }
        ] },
        { id: 'tr', label: 'TRƯỜNG', x: 800, y: 150, attrs: [
          { label: 'MATR', kind: 'key', dx: -64, dy: -72 },
          { label: 'TENTR', dx: 64, dy: -72 },
          { label: 'ĐCTR', dx: 145, dy: -22 },
          { label: 'LHĐT', dx: 145, dy: 22 }
        ] },
        { id: 'gv', label: 'GIÁO VIÊN', x: 520, y: 320, attrs: [
          { label: 'MAGV', kind: 'key', dx: -108, dy: 68 },
          { label: 'TENGV', dx: 0, dy: 76 },
          { label: 'CHUYENMON', dx: 115, dy: 68 }
        ] },
        { id: 'pt', label: 'PHÒNG THI', x: 240, y: 480, attrs: [
          { label: 'SOPT', kind: 'key', dx: -140, dy: 0 },
          { label: 'ĐCPT', dx: 0, dy: 72 }
        ] },
        { id: 'ts', label: 'THÍ SINH', x: 800, y: 480, attrs: [
          { label: 'SOBD', kind: 'key', dx: 155, dy: -62 },
          { label: 'TENTS', dx: 155, dy: -18 },
          { label: 'NGSINH', dx: 155, dy: 26 },
          { label: 'PHAI', dx: 155, dy: 70 },
          { label: 'CCNGHE', dx: -140, dy: 70 }
        ] },
        { id: 'mt', label: 'MÔN THI', x: 800, y: 760, attrs: [
          { label: 'MAMT', kind: 'key', dx: -68, dy: 70 },
          { label: 'TENMT', dx: 68, dy: 70 }
        ] }
      ],
      rels: [
        { id: 'thd', label: 'Thuộc HĐ', x: 520, y: 150, links: [
          { to: 'hdt', card: '1', total: true },
          { to: 'tr', card: 'n', total: false }
        ] },
        { id: 'ct_gv', label: 'Công tác', x: 660, y: 235, links: [
          { to: 'tr', card: '1', total: true },
          { to: 'gv', card: 'n', total: true }
        ] },
        { id: 'coi', label: 'Coi thi', x: 380, y: 235, attrs: [
          { label: 'CHUCDANH', dx: -25, dy: 72 }
        ], links: [
          { to: 'hdt', card: 'n', total: true },
          { to: 'gv', card: 'm', total: false }
        ] },
        { id: 'bt', label: 'Bố trí', x: 240, y: 315, links: [
          { to: 'hdt', card: '1', total: true },
          { to: 'pt', card: 'n', total: true }
        ] },
        { id: 'cts', label: 'Có thí sinh', x: 800, y: 315, links: [
          { to: 'tr', card: '1', total: false },
          { to: 'ts', card: 'n', total: true }
        ] },
        { id: 'xt', label: 'Xếp thi', x: 520, y: 480, links: [
          { to: 'pt', card: '1', total: false },
          { to: 'ts', card: 'n', total: true }
        ] },
        { id: 'dt', label: 'Dự thi', x: 800, y: 620, attrs: [
          { label: 'ĐIEMTHI', dx: 138, dy: 0 }
        ], links: [
          { to: 'ts', card: 'm', total: true },
          { to: 'mt', card: 'n', total: false }
        ] }
      ]
    },
    steps: [
      'Xác định 6 kiểu thực thể mạnh: `HỘI ĐỒNG THI` (`MAHĐT`), `PHÒNG THI` (`SOPT` duy nhất toàn huyện nên là thực thể mạnh), `TRƯỜNG` (`MATR`), `GIÁO VIÊN` (`MAGV`), `THÍ SINH` (`SOBD`) và `MÔN THI` (`MAMT`).',
      'Xác định các liên kết `1:n`: `Bố trí` (`HỘI ĐỒNG THI` – `PHÒNG THI`), `Thuộc HĐ` (`HỘI ĐỒNG THI` – `TRƯỜNG`, ghi nhận thí sinh cùng trường chỉ thi tại 1 hội đồng), `Công tác` (`TRƯỜNG` – `GIÁO VIÊN`), `Có thí sinh` (`TRƯỜNG` – `THÍ SINH`, bộ phận phía `TRƯỜNG`), và `Xếp thi` (`PHÒNG THI` – `THÍ SINH`).',
      'Xác định 2 liên kết `m:n`: `Coi thi` giữa `GIÁO VIÊN` và `HỘI ĐỒNG THI` mang thuộc tính `CHUCDANH`, và `Dự thi` giữa `THÍ SINH` và `MÔN THI` mang thuộc tính `ĐIEMTHI`.',
      'Áp dụng QT1 cho 6 thực thể, QT5 cho 5 liên kết `1:n` (đặt `MAHDT` vào `PHONG_THI` và `TRUONG`; `MATR` vào `GIAO_VIEN`; `MATR` và `SOPT` vào `THI_SINH`), và QT4 cho `COI_THI` và `DIEM_THI`.'
    ],
    relations: [
      { name: 'HOI_DONG_THI', attrs: [{ n: 'MAHDT', pk: true }, { n: 'TENHDT' }, { n: 'TENCT' }, { n: 'DCHDT' }, { n: 'DTHDT' }] },
      { name: 'PHONG_THI', attrs: [{ n: 'SOPT', pk: true }, { n: 'DCPT' }, { n: 'MAHDT', fk: 'HOI_DONG_THI' }] },
      { name: 'TRUONG', attrs: [{ n: 'MATR', pk: true }, { n: 'TENTR' }, { n: 'DCTR' }, { n: 'LHDT' }, { n: 'MAHDT', fk: 'HOI_DONG_THI' }] },
      { name: 'GIAO_VIEN', attrs: [{ n: 'MAGV', pk: true }, { n: 'TENGV' }, { n: 'CHUYENMON' }, { n: 'MATR', fk: 'TRUONG' }] },
      { name: 'COI_THI', attrs: [{ n: 'MAGV', pk: true, fk: 'GIAO_VIEN' }, { n: 'MAHDT', pk: true, fk: 'HOI_DONG_THI' }, { n: 'CHUCDANH' }] },
      { name: 'THI_SINH', attrs: [{ n: 'SOBD', pk: true }, { n: 'TENTS' }, { n: 'NGSINH' }, { n: 'PHAI' }, { n: 'CCNGHE' }, { n: 'MATR', fk: 'TRUONG' }, { n: 'SOPT', fk: 'PHONG_THI' }] },
      { name: 'MON_THI', attrs: [{ n: 'MAMT', pk: true }, { n: 'TENMT' }] },
      { name: 'DIEM_THI', attrs: [{ n: 'SOBD', pk: true, fk: 'THI_SINH' }, { n: 'MAMT', pk: true, fk: 'MON_THI' }, { n: 'DIEMTHI' }] }
    ]
  }
},
{
  id: 'er-thuvien-the',
  kind: 'er',
  title: 'Quản lý mượn sách theo thẻ và lệ phí',
  source: 'Bài tập tổng hợp – Ch.2',
  answerStatus: 'tu-giai',
  prompt: 'Xây dựng mô hình ER và chuyển sang lược đồ quan hệ cho bài toán Quản lý mượn sách tại thư viện:\n- Sách của thư viện được phân chia theo thể loại để bạn đọc dễ dàng tra cứu. MATL là mã số của từng thể loại và dùng để phân biệt giữa các thể loại. TENTL là tên gọi của thể loại.\n- MASH dùng để phân biệt các quyển sách. TENSH là tên (tựa) bằng tiếng Việt của sách và NGUYEN_TAC là tên nguyên tác (tiếng Việt hoặc tiếng nước ngoài). TAC_GIA là tên tác giả (hay nhóm các tác giả) của sách. Nếu sách có nhiều tập hay nhiều bản thì cũng xem như các đầu sách khác nhau và có mã số khác nhau. MATL là mã thể loại của sách.\n- Mỗi độc giả chỉ có một THẺ thư viện (dùng để mượn sách) với mã số là MADG để phân biệt với các độc giả khác. Các thuộc tính TENDG, DCHI là tên và địa chỉ của độc giả. NGAYCAP là ngày cấp thẻ cho độc giả. MASH là mã số của sách mượn. Giả sử không có trường hợp mượn rồi trả lại cùng 1 quyển sách trong cùng 1 ngày. Nếu sách mượn đọc tại chỗ thì thuộc tính TAI_CHO có giá trị True và NGAYMUON=NGAYTRA. Nếu sách mượn về nhà thì thuộc tính TAI_CHO có giá trị False và NGAYTRA sẽ có giá trị trống cho đến khi sách được mang trả lại cho thư viện. Mỗi độc giả chỉ được giữ tại nhà tối đa 3 quyển sách và mỗi quyển sách chỉ được giữ tại nhà tối đa 30 ngày (không cần lưu ý đến biện pháp xử lý nếu khách vi phạm nội qui).\n- Độc giả phải đóng lệ phí hằng năm (NAM) để gia hạn thẻ mới được mượn sách. NGAY_NOP, SOTIEN là ngày và số tiền nộp lệ phí của thẻ đó vào NAM.',
  answer: {
    diagram: {
      entities: [
        { id: 'tl', label: 'THỂ LOẠI', x: 170, y: 140, attrs: [
          { label: 'MATL', kind: 'key', dx: -56, dy: -68 },
          { label: 'TENTL', dx: 64, dy: -68 }
        ] },
        { id: 'sach', label: 'SÁCH', x: 600, y: 140, attrs: [
          { label: 'MASH', kind: 'key', dx: -70, dy: -72 },
          { label: 'TENSH', dx: 64, dy: -72 },
          { label: 'NGUYEN_TAC', dx: 162, dy: -22 },
          { label: 'TAC_GIA', dx: 162, dy: 22 }
        ] },
        { id: 'lp', label: 'LỆ PHÍ', x: 170, y: 460, weak: true, attrs: [
          { label: 'NAM', kind: 'partial', dx: -125, dy: 0 },
          { label: 'NGAY_NOP', dx: -68, dy: 72 },
          { label: 'SOTIEN', dx: 68, dy: 72 }
        ] },
        { id: 'the', label: 'THẺ ĐỘC GIẢ', x: 600, y: 460, attrs: [
          { label: 'MADG', kind: 'key', dx: 152, dy: -44 },
          { label: 'TENDG', dx: 152, dy: 0 },
          { label: 'DCHI', dx: 152, dy: 44 },
          { label: 'NGAYCAP', dx: 0, dy: 72 }
        ] }
      ],
      rels: [
        { id: 'thuoc', label: 'Thuộc thể loại', x: 385, y: 140, links: [
          { to: 'tl', card: '1', total: false },
          { to: 'sach', card: 'n', total: true }
        ] },
        { id: 'muon', label: 'Mượn sách', x: 600, y: 300, attrs: [
          { label: 'NGAYMUON', dx: 152, dy: -44 },
          { label: 'NGAYTRA', dx: 152, dy: 0 },
          { label: 'TAI_CHO', dx: 152, dy: 44 }
        ], links: [
          { to: 'sach', card: 'n', total: false },
          { to: 'the', card: 'm', total: false }
        ] },
        { id: 'dong', label: 'Đóng lệ phí', x: 385, y: 460, ident: true, links: [
          { to: 'lp', card: 'n', total: true },
          { to: 'the', card: '1', total: false }
        ] }
      ]
    },
    steps: [
      'Xác định 3 thực thể mạnh: `THỂ LOẠI` (`MATL`), `SÁCH` (`MASH` – không đưa khóa ngoại `MATL` vào thuộc tính của `SÁCH` trong ER), và `THẺ ĐỘC GIẢ` (`MADG` – gộp `ĐỘC GIẢ` và `THẺ` vì mỗi độc giả chỉ có đúng 1 thẻ định danh bằng `MADG`).',
      'Mô hình `LỆ PHÍ` là thực thể yếu phụ thuộc vào `THẺ ĐỘC GIẢ` qua liên kết định danh `Đóng lệ phí` (`1:n`), có khóa bộ phận `NAM` cùng thuộc tính `NGAY_NOP`, `SOTIEN`.',
      'Xác định liên kết `Thuộc thể loại` (`1:n` từ `THỂ LOẠI` sang `SÁCH`) và liên kết `Mượn sách` (`m:n` giữa `THẺ ĐỘC GIẢ` và `SÁCH`) mang thuộc tính `NGAYMUON`, `NGAYTRA`, `TAI_CHO` (các ràng buộc tối đa 3 quyển tại nhà và tối đa 30 ngày là quy tắc nghiệp vụ ngoài lược đồ ER).',
      'Chuyển sang quan hệ theo QT1, QT2 (`LE_PHI` có khóa `(MADG, NAM)`), QT5 (đưa `MATL` vào `SACH`), và QT4 (`MUON_SACH` lấy khóa `(MADG, MASH, NGAYMUON)` vì giả thiết cho phép mượn lại cùng quyển sách vào ngày khác).'
    ],
    relations: [
      { name: 'THE_LOAI', attrs: [{ n: 'MATL', pk: true }, { n: 'TENTL' }] },
      { name: 'SACH', attrs: [{ n: 'MASH', pk: true }, { n: 'TENSH' }, { n: 'NGUYEN_TAC' }, { n: 'TAC_GIA' }, { n: 'MATL', fk: 'THE_LOAI' }] },
      { name: 'THE_DOC_GIA', attrs: [{ n: 'MADG', pk: true }, { n: 'TENDG' }, { n: 'DCHI' }, { n: 'NGAYCAP' }] },
      { name: 'LE_PHI', attrs: [{ n: 'MADG', pk: true, fk: 'THE_DOC_GIA' }, { n: 'NAM', pk: true }, { n: 'NGAY_NOP' }, { n: 'SOTIEN' }] },
      { name: 'MUON_SACH', attrs: [{ n: 'MADG', pk: true, fk: 'THE_DOC_GIA' }, { n: 'MASH', pk: true, fk: 'SACH' }, { n: 'NGAYMUON', pk: true }, { n: 'NGAYTRA' }, { n: 'TAI_CHO' }] }
    ]
  }
},
{
  id: 'er-truong',
  kind: 'er',
  title: 'Cơ sở dữ liệu TRƯỜNG (Khoa – Học phần – Điểm)',
  source: 'Bài tập tổng hợp – Ch.2 Câu 4 (ảnh BTTH_image1.png)',
  answerStatus: 'tu-giai',
  prompt: 'Hãy xây dựng lược đồ ER cho CSDL “TRƯỜNG”, dựa trên các ghi chép sau:\n- Trường được chia thành các trường con: Trường KHTN, Trường KHXH, Trường Công nghệ,… Mỗi trường có một hiệu trưởng quản lý. Mỗi hiệu trưởng quản lý một trường.\n- Mỗi trường có nhiều khoa. Chẳng hạn, trường KHTN có các khoa Toán, Lý, Hoá,… Mỗi một khoa chỉ thuộc về một trường. Thông tin về Khoa gồm Mã khoa, tên khoa, địa chỉ, số điện thoại, tên trường.\n- Mỗi Khoa cung cấp nhiều môn học. Mỗi môn học gồm có Tên môn học, mã số, số đơn vị học trình, trình độ, tên Khoa.\n- Mỗi môn học có thể có nhiều học phần. Mỗi học phần được lưu giữ bằng các thông tin: Mã học phần, Tên môn học, Tên giáo viên dạy, học kỳ.\n- Mỗi khoa có nhiều giáo viên làm việc, nhưng mỗi giáo viên chỉ làm việc cho một khoa. Mỗi một khoa có một chủ nhiệm khoa, đó là một giáo viên.\n- Mỗi giáo viên có thể dạy nhiều nhất là 4 học phần và cũng có thể không dạy học phần nào.\n- Mỗi sinh viên phải học nhiều học phần.\n- Mỗi một khoa có nhiều sinh viên, mỗi sinh viên chỉ thuộc về một khoa. Thông tin về mỗi sinh viên gồm: Mã sinh viên, Họ tên, địa chỉ, ngày sinh, giới tính, Lớp, Tên Khoa và chế độ đào tạo.\n- Mỗi sinh viên có một người giám sát (giáo viên chủ nhiệm), người đó là một giáo viên.\n- Sau mỗi học kỳ sẽ có một danh sách điểm để phân loại. Nó gồm các thông tin: Mã sinh viên, mã học phần, điểm bằng chữ, điểm bằng số.\n\nHãy vẽ mô hình ER cho CSDL trên và chuyển sang lược đồ quan hệ.',
  answer: {
    diagram: {
      entities: [
        { id: 'tr', label: 'TRƯỜNG', x: 180, y: 140, attrs: [
          { label: 'Mã trường', kind: 'key', dx: -150, dy: -24 },
          { label: 'Tên trường', dx: -150, dy: 24 },
          { label: 'Hiệu trưởng', dx: 0, dy: -70 }
        ] },
        { id: 'kh', label: 'KHOA', x: 180, y: 410, attrs: [
          { label: 'Mã khoa', kind: 'key', dx: -148, dy: -44 },
          { label: 'Tên khoa', dx: -148, dy: 0 },
          { label: 'Địa chỉ', dx: -148, dy: 44 },
          { label: 'Số ĐT', dx: 0, dy: 74 }
        ] },
        { id: 'mh', label: 'MÔN HỌC', x: 580, y: 140, attrs: [
          { label: 'Mã môn học', kind: 'key', dx: -125, dy: -68 },
          { label: 'Tên môn học', dx: 0, dy: -82 },
          { label: 'Số ĐVHT', dx: 125, dy: -68 },
          { label: 'Trình độ', dx: 158, dy: -18 }
        ] },
        { id: 'gv', label: 'GIÁO VIÊN', x: 580, y: 410, attrs: [
          { label: 'Mã GV', kind: 'key', dx: -62, dy: -72 },
          { label: 'Tên GV', dx: 62, dy: -72 }
        ] },
        { id: 'sv', label: 'SINH VIÊN', x: 580, y: 710, attrs: [
          { label: 'Mã SV', kind: 'key', dx: -185, dy: 8 },
          { label: 'Họ tên', dx: -165, dy: 58 },
          { label: 'Địa chỉ', dx: -102, dy: 102 },
          { label: 'Ngày sinh', dx: 0, dy: 118 },
          { label: 'Giới tính', dx: 102, dy: 102 },
          { label: 'Lớp', dx: 165, dy: 58 },
          { label: 'Chế độ đào tạo', dx: 190, dy: 8 }
        ] },
        { id: 'hp', label: 'HỌC PHẦN', x: 980, y: 410, attrs: [
          { label: 'Mã học phần', kind: 'key', dx: 155, dy: -24 },
          { label: 'Học kỳ', dx: 155, dy: 24 }
        ] }
      ],
      rels: [
        { id: 'gom', label: 'Gồm', x: 180, y: 275, links: [
          { to: 'tr', card: '1', total: true },
          { to: 'kh', card: 'n', total: true }
        ] },
        { id: 'cc', label: 'Cung cấp', x: 380, y: 250, links: [
          { to: 'kh', card: '1', total: true },
          { to: 'mh', card: 'n', total: true }
        ] },
        { id: 'lv', label: 'Làm việc', x: 380, y: 365, links: [
          { to: 'kh', card: '1', total: true },
          { to: 'gv', card: 'n', total: true }
        ] },
        { id: 'cn', label: 'Chủ nhiệm', x: 380, y: 460, links: [
          { to: 'kh', card: '1', total: true },
          { to: 'gv', card: '1', total: false }
        ] },
        { id: 'tk', label: 'Thuộc khoa', x: 380, y: 565, links: [
          { to: 'kh', card: '1', total: true },
          { to: 'sv', card: 'n', total: true }
        ] },
        { id: 'gs', label: 'Giám sát', x: 580, y: 550, links: [
          { to: 'gv', card: '1', total: false },
          { to: 'sv', card: 'n', total: true }
        ] },
        { id: 'mhp', label: 'Mở học phần', x: 780, y: 255, links: [
          { to: 'mh', card: '1', total: false },
          { to: 'hp', card: 'n', total: true }
        ] },
        { id: 'day', label: 'Dạy', x: 780, y: 410, links: [
          { to: 'gv', card: '1', total: false },
          { to: 'hp', card: 'n', total: true }
        ] },
        { id: 'hoc', label: 'Học', x: 780, y: 565, attrs: [
          { label: 'Điểm số', dx: 138, dy: 26 },
          { label: 'Điểm chữ', dx: 58, dy: 76 }
        ], links: [
          { to: 'sv', card: 'm', total: true, bend: 32 },
          { to: 'hp', card: 'n', total: false }
        ] }
      ],
      notes: [
        { text: 'Ràng buộc Dạy: mỗi GV dạy 0..4 học phần', x: 980, y: 285 }
      ]
    },
    steps: [
      'Xác định 6 thực thể mạnh: `TRƯỜNG` (`Mã trường`, `Tên trường`, gộp `Hiệu trưởng` thành thuộc tính theo quy tắc rút gọn 1–1 không có thuộc tính mô tả thêm), `KHOA`, `MÔN HỌC`, `HỌC PHẦN`, `GIÁO VIÊN` (bổ sung `Mã GV`), `SINH VIÊN`.',
      'Loại các thuộc tính tham chiếu ở bước ER (`tên trường` trong Khoa, `tên Khoa` trong Môn học/Sinh viên, `Tên môn học` và `Tên giáo viên dạy` trong Học phần, `Mã SV` và `Mã học phần` trong Điểm) vì chúng được thể hiện bằng liên kết.',
      'Xác định các liên kết `1:n`: `Gồm` (`TRƯỜNG` – `KHOA`), `Cung cấp` (`KHOA` – `MÔN HỌC`), `Mở học phần` (`MÔN HỌC` – `HỌC PHẦN`), `Làm việc` (`KHOA` – `GIÁO VIÊN`), `Thuộc khoa` (`KHOA` – `SINH VIÊN`), `Giám sát` (`GIÁO VIÊN` – `SINH VIÊN`), `Dạy` (`GIÁO VIÊN` – `HỌC PHẦN`, mỗi GV dạy $0..4$ học phần).',
      'Xác định liên kết `1:1` `Chủ nhiệm` (`KHOA` tham gia toàn phần – `GIÁO VIÊN` bộ phận) và liên kết `m:n` `Học` (`SINH VIÊN` – `HỌC PHẦN`) mang thuộc tính `Điểm số`, `Điểm chữ` (bảng điểm cuối kỳ).',
      'Chuyển sang quan hệ theo QT1, QT3 (`MaGV_ChuNhiem` đặt về `KHOA`), QT4 (`KET_QUA_HOC` cho `Học`), và QT5 cho các liên kết `1:n` còn lại.'
    ],
    relations: [
      { name: 'TRUONG', attrs: [{ n: 'MaTruong', pk: true }, { n: 'TenTruong' }, { n: 'HieuTruong' }] },
      { name: 'KHOA', attrs: [{ n: 'MaKhoa', pk: true }, { n: 'TenKhoa' }, { n: 'DiaChi' }, { n: 'SoDT' }, { n: 'MaTruong', fk: 'TRUONG' }, { n: 'MaGV_ChuNhiem', fk: 'GIAO_VIEN' }] },
      { name: 'GIAO_VIEN', attrs: [{ n: 'MaGV', pk: true }, { n: 'TenGV' }, { n: 'MaKhoa', fk: 'KHOA' }] },
      { name: 'MON_HOC', attrs: [{ n: 'MaMH', pk: true }, { n: 'TenMH' }, { n: 'SoDVHT' }, { n: 'TrinhDo' }, { n: 'MaKhoa', fk: 'KHOA' }] },
      { name: 'HOC_PHAN', attrs: [{ n: 'MaHP', pk: true }, { n: 'HocKy' }, { n: 'MaMH', fk: 'MON_HOC' }, { n: 'MaGV', fk: 'GIAO_VIEN' }] },
      { name: 'SINH_VIEN', attrs: [{ n: 'MaSV', pk: true }, { n: 'HoTen' }, { n: 'DiaChi' }, { n: 'NgaySinh' }, { n: 'GioiTinh' }, { n: 'Lop' }, { n: 'CheDoDaoTao' }, { n: 'MaKhoa', fk: 'KHOA' }, { n: 'MaGV_GS', fk: 'GIAO_VIEN' }] },
      { name: 'KET_QUA_HOC', attrs: [{ n: 'MaSV', pk: true, fk: 'SINH_VIEN' }, { n: 'MaHP', pk: true, fk: 'HOC_PHAN' }, { n: 'DiemSo' }, { n: 'DiemChu' }] }
    ]
  }
},
{
  id: 'er-slide-vd3',
  kind: 'er',
  title: 'Quản lý bán hàng tại cửa hàng (Ví dụ 3)',
  source: 'Slide Ch.2 Mô hình ER – tr.26–40',
  answerStatus: 'co-san',
  prompt: 'Xây dựng mô hình ER từ hai hồ sơ dữ liệu dưới đây (Slide Ch.2 – Ví dụ 3) và chuyển sang lược đồ quan hệ (theo Ch.3 P1):\n- **Đơn đặt hàng**: `Số (ĐH)`, `Tên đơn vị đặt hàng`, `Địa chỉ`, `Điện thoại`, `Ngày đặt`; bảng chi tiết gồm `Số TT`, `Tên hàng`, `Mô tả hàng`, `Đơn vị tính`, `Số lượng`; cuối phiếu ghi `Người đặt hàng (họ tên và chữ ký)`.\n- **Phiếu giao hàng**: `Số (PG)`, `Tên đơn vị khách hàng`, `Địa chỉ`, `Nơi giao hàng`, `Ngày giao`; bảng chi tiết gồm `Số TT`, `Tên hàng`, `Đơn vị tính`, `Số lượng`, `Đơn giá`, `Thành tiền` và dòng `Tổng tiền`; cuối phiếu ghi `Tên người nhận (họ tên và chữ ký)` và `Tên người giao (họ tên và chữ ký)`.',
  answer: {
    diagram: {
      entities: [
        { id: 'dv', label: 'ĐV KHÁCH', x: 450, y: 115, attrs: [
          { label: 'Mã ĐV', kind: 'key', dx: -160, dy: -24 },
          { label: 'Tên ĐV', dx: -58, dy: -68 },
          { label: 'Địa chỉ', dx: 58, dy: -68 },
          { label: 'Điện thoại', dx: 165, dy: -24 }
        ] },
        { id: 'nd', label: 'NGƯỜI ĐẶT', x: 170, y: 290, attrs: [
          { label: 'Mã số NĐ', kind: 'key', dx: -145, dy: -22 },
          { label: 'Họ tên NĐ', dx: -145, dy: 22 }
        ] },
        { id: 'nn', label: 'NGƯỜI NHẬN', x: 730, y: 290, attrs: [
          { label: 'Mã số NN', kind: 'key', dx: 145, dy: -22 },
          { label: 'Họ tên NN', dx: 145, dy: 22 }
        ] },
        { id: 'hg', label: 'HÀNG', x: 170, y: 560, attrs: [
          { label: 'Mã hàng', kind: 'key', dx: -145, dy: -24 },
          { label: 'Tên hàng', dx: -145, dy: 24 },
          { label: 'Đv tính', dx: -60, dy: 68 },
          { label: 'Mô tả hàng', dx: 68, dy: 68 }
        ] },
        { id: 'ng', label: 'NGƯỜI GIAO', x: 560, y: 580, attrs: [
          { label: 'Mã số NG', kind: 'key', dx: -72, dy: 66 },
          { label: 'Họ tên NG', dx: 72, dy: 66 }
        ] },
        { id: 'noi', label: 'NƠI GIAO', x: 820, y: 520, attrs: [
          { label: 'Mã số ĐĐG', kind: 'key', dx: 0, dy: 68 },
          { label: 'Tên nơi giao', dx: 150, dy: 0 }
        ] }
      ],
      rels: [
        { id: 't1', label: 'Thuộc 1', x: 240, y: 200, links: [
          { to: 'dv', card: '1', total: true },
          { to: 'nd', card: 'n', total: true }
        ] },
        { id: 't2', label: 'Thuộc 2', x: 660, y: 200, links: [
          { to: 'dv', card: '1', total: true },
          { to: 'nn', card: 'n', total: true }
        ] },
        { id: 'dat', label: 'Đặt', x: 170, y: 420, attrs: [
          { label: 'Số ĐH', dx: -125, dy: 0 },
          { label: 'Ngày đặt', dx: 130, dy: -24 },
          { label: 'Số lượng', dx: 130, dy: 24 }
        ], links: [
          { to: 'nd', card: '1', total: true },
          { to: 'hg', card: 'n', total: false }
        ] },
        { id: 'giao', label: 'Giao', x: 560, y: 420, attrs: [
          { label: 'Số PG', dx: -15, dy: -72 },
          { label: 'Ngày giao', dx: -125, dy: -48 },
          { label: 'Đơn giá', dx: -130, dy: 0 },
          { label: 'Số lượng', dx: 145, dy: -18 }
        ], links: [
          { to: 'nn', card: '1', total: true, bend: -28 },
          { to: 'hg', card: 'n', total: false },
          { to: 'ng', card: '1', total: true },
          { to: 'noi', card: '1', total: true }
        ] }
      ]
    },
    steps: [
      'Bước 1 (slide tr.34–35): chính xác hóa tên chỉ mục và loại bỏ `Số TT`, `Thành tiền`, `Tổng tiền` vì là thuộc tính suy dẫn/thứ tự hiển thị.',
      'Bước 2 (slide tr.36): từ các thuộc tính tên gọi xác định 7 thực thể ban đầu (`ĐƠN VỊ ĐH`, `ĐƠN VỊ KH`, `HÀNG`, `NGƯỜI ĐẶT`, `NƠI GIAO`, `NGƯỜI NHẬN`, `NGƯỜI GIAO`) và bổ sung khóa định danh (`Mã ĐV`, `Mã hàng`, `Mã số NĐ/ĐĐG/NN/NG`).',
      'Bước 3–4 (slide tr.37–39): xác định liên kết sở hữu `Thuộc 1`, `Thuộc 2`, liên kết `Đặt` (`NGƯỜI ĐẶT` – `HÀNG`, thuộc tính `Số ĐH`, `Ngày đặt`, `Số lượng`) và liên kết bậc 4 `Giao` (`NGƯỜI GIAO` – `HÀNG` – `NƠI GIAO` – `NGƯỜI NHẬN`, thuộc tính `Số PG`, `Ngày giao`, `Số lượng`, `Đơn giá`).',
      'Bước 5 (slide tr.40): chuẩn hóa rút gọn bằng cách gộp `ĐƠN VỊ ĐH` và `ĐƠN VỊ KH` thành một thực thể chung `ĐV KHÁCH` nối với cả `NGƯỜI ĐẶT` và `NGƯỜI NHẬN`.',
      'Chuyển sang quan hệ (Ch.3 P1): dùng QT1 cho 6 thực thể, QT5 cho `Thuộc 1`, `Thuộc 2` (đưa `MaDV` sang `NGUOI_DAT` và `NGUOI_NHAN`), và QT4/QT6 tách `Đặt` và `Giao` thành quan hệ giao dịch `DAT_HANG` (khóa `SoDH, MaHang`) và `GIAO_HANG` (khóa `SoPG, MaHang`).'
    ],
    relations: [
      { name: 'DV_KHACH', attrs: [{ n: 'MaDV', pk: true }, { n: 'TenDV' }, { n: 'DiaChi' }, { n: 'DienThoai' }] },
      { name: 'NGUOI_DAT', attrs: [{ n: 'MaND', pk: true }, { n: 'HoTenND' }, { n: 'MaDV', fk: 'DV_KHACH' }] },
      { name: 'NGUOI_NHAN', attrs: [{ n: 'MaNN', pk: true }, { n: 'HoTenNN' }, { n: 'MaDV', fk: 'DV_KHACH' }] },
      { name: 'HANG', attrs: [{ n: 'MaHang', pk: true }, { n: 'TenHang' }, { n: 'DVTinh' }, { n: 'MoTaHang' }] },
      { name: 'NGUOI_GIAO', attrs: [{ n: 'MaNG', pk: true }, { n: 'HoTenNG' }] },
      { name: 'NOI_GIAO', attrs: [{ n: 'MaDDG', pk: true }, { n: 'TenNoiGiao' }] },
      { name: 'DAT_HANG', attrs: [{ n: 'SoDH', pk: true }, { n: 'MaHang', pk: true, fk: 'HANG' }, { n: 'MaND', fk: 'NGUOI_DAT' }, { n: 'NgayDat' }, { n: 'SoLuong' }] },
      { name: 'GIAO_HANG', attrs: [{ n: 'SoPG', pk: true }, { n: 'MaHang', pk: true, fk: 'HANG' }, { n: 'MaNN', fk: 'NGUOI_NHAN' }, { n: 'MaNG', fk: 'NGUOI_GIAO' }, { n: 'MaDDG', fk: 'NOI_GIAO' }, { n: 'NgayGiao' }, { n: 'SoLuong' }, { n: 'DonGia' }] }
    ]
  }
}
);
