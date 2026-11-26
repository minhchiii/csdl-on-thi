/* Tự luận Đại số quan hệ (Ch.3) – nguồn: BT_LTCSDL (C2_C3) & Bài tập tổng hợp */
DB.essays.push(
{
  id: 'dsqh-ncc',
  kind: 'dsqh',
  title: 'Bài 1: CSDL Nhà cung cấp – Mặt hàng (NCC, MH)',
  source: 'BT_LTCSDL (C2_C3) – Ch.3 Câu 2; Bài tập tổng hợp – Ch.3 Câu 2',
  answerStatus: 'tu-giai',
  prompt: 'Cho CSDL gồm hai quan hệ:\n' +
    '- $\\text{NCC}(\\underline{\\text{MSNCC}},\\; \\text{Ten},\\; \\text{Diachi})$\n' +
    '- $\\text{MH}(\\underline{\\text{MSNCC}},\\; \\underline{\\text{MSMH}})$\n\n' +
    'Hãy biểu diễn các yêu cầu sau đây bằng biểu thức đại số quan hệ:\n' +
    'a) Tìm mã số nhà cung cấp:\n' +
    '- **Q1**: cung cấp ít nhất một mặt hàng.\n' +
    '- **Q2**: không cung cấp mặt hàng nào.\n' +
    '- **Q3**: cung cấp một mặt hàng có `MSMH` là `15`.\n' +
    '- **Q4**: cung cấp ít nhất một mặt hàng, nhưng không có mặt hàng có mã số là `15`.\n' +
    '- **Q5**: cung cấp tất cả các loại mặt hàng.\n\n' +
    'b) Mặt hàng có mã số là `12, 13, 15` được cung cấp bởi các nhà cung cấp ở địa chỉ nào?',
  answer: {
    steps: [
      'Xác định vai trò 2 bảng: `NCC` giữ danh sách mọi nhà cung cấp (khóa `MSNCC`); `MH` lưu các cặp `(MSNCC, MSMH)` đã cung cấp (bảng chỉ có 2 cột này, không có bảng danh mục mặt hàng riêng).',
      'Với yêu cầu "ít nhất một" dùng phép chiếu $\\pi_{\\text{MSNCC}}(\\text{MH})$; với "không cung cấp..." dùng phép hiệu $-$ trên cùng cột khóa `MSNCC`; với "tất cả" dùng phép chia $\\div$.',
      'Khi cần lấy địa chỉ (`Diachi`), lọc `MH` theo điều kiện `MSMH` và chiếu giữ `MSNCC` trước rồi mới kết nối tự nhiên (`*`) với `NCC`.'
    ],
    parts: [
      {
        q: 'a) Q1: Tìm mã số nhà cung cấp ít nhất một mặt hàng.',
        a: '$$\\pi_{\\text{MSNCC}}(\\text{MH})$$\n' +
          'Mỗi dòng trong `MH` biểu diễn một nhà cung cấp đã cung cấp một mặt hàng nào đó, nên chỉ cần chiếu $\\pi_{\\text{MSNCC}}(\\text{MH})$ để thu được tập mã nhà cung cấp có mặt trong `MH` (phép chiếu tự động loại bỏ các `MSNCC` trùng lặp). Nhờ ràng buộc toàn vẹn tham chiếu từ `MH.MSNCC` tới `NCC.MSNCC`, ta không cần nối thêm bảng `NCC`.'
      },
      {
        q: 'a) Q2: Tìm mã số nhà cung cấp không cung cấp mặt hàng nào.',
        a: '$$\\pi_{\\text{MSNCC}}(\\text{NCC}) - \\pi_{\\text{MSNCC}}(\\text{MH})$$\n' +
          'Lấy tập tất cả mã nhà cung cấp hiện có trong `NCC` trừ đi (anti-join) tập mã nhà cung cấp đã từng xuất hiện ở `MH`. Hai vế của phép trừ $-$ bắt buộc phải được chiếu về cùng lược đồ 1 cột `MSNCC` trước khi thực hiện.'
      },
      {
        q: 'a) Q3: Tìm mã số nhà cung cấp một mặt hàng có `MSMH` là `15`.',
        a: '$$\\pi_{\\text{MSNCC}}\\big(\\sigma_{\\text{MSMH}=15}(\\text{MH})\\big)$$\n' +
          'Thực hiện phép chọn $\\sigma_{\\text{MSMH}=15}(\\text{MH})$ để lọc đúng các dòng cung cấp mặt hàng mã `15`, sau đó chiếu lấy `MSNCC`. Vì kết quả chỉ cần mã số nhà cung cấp (đã có sẵn trong `MH`), không cần nối sang `NCC`.'
      },
      {
        q: 'a) Q4: Tìm mã số nhà cung cấp ít nhất một mặt hàng, nhưng không có mặt hàng có mã số là `15`.',
        a: '$$\\pi_{\\text{MSNCC}}(\\text{MH}) - \\pi_{\\text{MSNCC}}\\big(\\sigma_{\\text{MSMH}=15}(\\text{MH})\\big)$$\n' +
          'Lấy tập các nhà cung cấp ở Q1 (có cung cấp ít nhất 1 mặt hàng) trừ đi tập các nhà cung cấp ở Q3 (có cung cấp mặt hàng `15`). **Tránh bẫy**: không viết $\\pi_{\\text{MSNCC}}(\\sigma_{\\text{MSMH}\\neq 15}(\\text{MH}))$, vì một nhà cung cấp bán cả mặt hàng `12` lẫn `15` vẫn thỏa $\\text{MSMH} \\neq 15$ ở dòng `12` và bị đưa nhầm vào kết quả.'
      },
      {
        q: 'a) Q5: Tìm mã số nhà cung cấp tất cả các loại mặt hàng.',
        a: '**Dùng phép chia ($\\div$)**:\n' +
          '$$\\text{MH} \\div \\pi_{\\text{MSMH}}(\\text{MH})$$\n' +
          '**Biểu diễn tương đương bằng phép hiệu, tích Đề-các và chiếu** (để luyện tập):\n' +
          '$$\\pi_{\\text{MSNCC}}(\\text{MH}) - \\pi_{\\text{MSNCC}}\\Big(\\big(\\pi_{\\text{MSNCC}}(\\text{MH}) \\times \\pi_{\\text{MSMH}}(\\text{MH})\\big) - \\text{MH}\\Big)$$\n' +
          'Vì CSDL không có bảng danh mục mặt hàng riêng, tập "tất cả các loại mặt hàng" được lấy bằng $\\pi_{\\text{MSMH}}(\\text{MH})$. Phép chia trả về các `MSNCC` đi cặp với **mọi** `MSMH` trong $\\pi_{\\text{MSMH}}(\\text{MH})$; ở dạng tương đương, phần tích Đề-các trừ đi `MH` tìm ra các cặp `(MSNCC, MSMH)` bị thiếu, rồi lấy tổng tập `MSNCC` trừ đi những nhà cung cấp bị thiếu ít nhất 1 mặt hàng.'
      },
      {
        q: 'b) Mặt hàng có mã số là `12, 13, 15` được cung cấp bởi các nhà cung cấp ở địa chỉ nào?',
        a: '$$\\pi_{\\text{Diachi}}\\Big(\\text{NCC} * \\pi_{\\text{MSNCC}}\\big(\\sigma_{\\text{MSMH}=12 \\lor \\text{MSMH}=13 \\lor \\text{MSMH}=15}(\\text{MH})\\big)\\Big)$$\n' +
          'Đẩy phép chọn $\\sigma_{\\text{MSMH}=12 \\lor \\text{MSMH}=13 \\lor \\text{MSMH}=15}$ xuống `MH` và chiếu lấy `MSNCC` trước khi nối tự nhiên (`*`) với `NCC` qua khóa `MSNCC`, cuối cùng chiếu `Diachi`. **Lưu ý bẫy**: không dùng phép logic $\\land$ (`AND`) giữa `12, 13, 15` vì một dòng của `MH` không thể đồng thời có nhiều giá trị `MSMH`; nếu đề muốn hỏi NCC cung cấp **đồng thời cả 3** mặt hàng đó thì phải dùng phép giao $\\pi_{\\text{MSNCC}}(\\sigma_{\\text{MSMH}=12}(\\text{MH})) \\cap \\pi_{\\text{MSNCC}}(\\sigma_{\\text{MSMH}=13}(\\text{MH})) \\cap \\pi_{\\text{MSNCC}}(\\sigma_{\\text{MSMH}=15}(\\text{MH}))$ (hoặc $\\text{MH} \\div \\{(12),(13),(15)\\}$) trước khi nối `NCC`.'
      }
    ]
  }
},
{
  id: 'dsqh-sv',
  kind: 'dsqh',
  title: 'Bài 2: CSDL Quản lý hồ sơ sinh viên (SV, LOP, KHOA, MON, KQ)',
  source: 'BT_LTCSDL (C2_C3) – Ch.3 Câu 3; Bài tập tổng hợp – Ch.3 Câu 3',
  answerStatus: 'tu-giai',
  prompt: 'Cho lược đồ cơ sở dữ liệu dùng để quản lý hồ sơ sinh viên bao gồm các quan hệ:\n' +
    '- $\\text{SV}(\\underline{\\text{MaSV}},\\; \\text{Hoten},\\; \\text{Gioitinh},\\; \\text{Ngaysinh},\\; \\text{MaLop},\\; \\text{Hocbong})$\n' +
    '- $\\text{LOP}(\\underline{\\text{MaLop}},\\; \\text{TenLop},\\; \\text{Siso},\\; \\text{MaKhoa})$\n' +
    '- $\\text{KHOA}(\\underline{\\text{MaKhoa}},\\; \\text{TenKhoa},\\; \\text{SoGV})$\n' +
    '- $\\text{MON}(\\underline{\\text{MaMH}},\\; \\text{TenMH},\\; \\text{Sotiet})$\n' +
    '- $\\text{KQ}(\\underline{\\text{MaSV}},\\; \\underline{\\text{MaMH}},\\; \\text{Diemthi})$\n\n' +
    'Hãy thực hiện các câu hỏi sau bằng ngôn ngữ đại số quan hệ (gộp đủ các ý a–i trong `BT_LTCSDL` và các biến thể bổ sung từ `Bài tập tổng hợp`):\n' +
    'a) Lập danh sách sinh viên gồm `MaSV, Hoten, Hocbong`.\n' +
    'b) Lập danh sách sinh viên nữ của khoa `"CNTT"`, danh sách cần `MaSV, Hoten, Hocbong`.\n' +
    'c) Lập bảng điểm cho tất cả sinh viên khoa `"CNTT"`, bảng điểm gồm các cột: `MaSV, Hoten, TenMH, Diemthi`.\n' +
    'd) Lập danh sách sinh viên của lớp có mã lớp là `"AT10"` và có điểm thi môn `"CSDL"` lớn hơn hoặc bằng `8`.\n' +
    'e) Lập danh sách sinh viên thi hết tất cả các môn học, thông tin gồm: `Mã SV, Tên SV` (biến thể `Bài tập tổng hợp` Câu 3f: gồm `Mã SV, Tên SV, Lớp, Khoa`).\n' +
    'f) Lập danh sách sinh viên của lớp `L01` thi lại môn `CSDL`.\n' +
    'g) Lập danh sách sinh viên còn thiếu ít nhất một môn học chưa thi, thông tin gồm: `Mã SV, tên SV, tên môn thi` (biến thể `Bài tập tổng hợp` Câu 3h: gồm `Mã SV, tên SV, Khoa, tên môn thi`).\n' +
    'h) Với mỗi lớp, thống kê số lượng sinh viên thi lại của môn `Lý thuyết CSDL`.\n' +
    'i) Thống kê điểm cao nhất, thấp nhất môn `CSDL` của từng lớp.\n' +
    'j) (Bổ sung từ `Bài tập tổng hợp` – Câu 3d) Lập phiếu điểm cho sinh viên có `MaSV = \'0001\'`.',
  answer: {
    steps: [
      'Kiểm tra khóa nối tự nhiên (`*`): 5 bảng chỉ trùng đúng các khóa ngoại `MaLop`, `MaKhoa`, `MaSV`, `MaMH` nên kết nối tự nhiên không gây trùng cột ngoài ý muốn.',
      'Đẩy các phép chọn $\\sigma$ và phép chiếu $\\pi$ (giữ lại khóa nối + cột cần xuất) xuống từng quan hệ gốc trước khi kết nối để biểu thức gọn và tối ưu hơn.',
      'Nhận diện dạng câu: "thi hết tất cả" dùng phép chia $\\div$; "còn thiếu ít nhất một môn chưa thi" lấy tích Đề-các `(SV × MON)` trừ đi `KQ`; các câu thống kê h, i dùng hàm gom nhóm $\\mathcal{F}$ (kiến thức mở rộng ngoài slide).'
    ],
    parts: [
      {
        q: 'a) Lập danh sách sinh viên gồm `MaSV, Hoten, Hocbong`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{Hocbong}}(\\text{SV})$$\n' +
          'Áp dụng phép chiếu $\\pi$ trực tiếp trên quan hệ `SV` để giữ đúng 3 cột `MaSV, Hoten, Hocbong` theo yêu cầu.'
      },
      {
        q: 'b) Lập danh sách sinh viên nữ của khoa `"CNTT"`, danh sách cần `MaSV, Hoten, Hocbong`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{Hocbong}}\\Big(\\sigma_{\\text{Gioitinh}=\\text{\'Nữ\'}}(\\text{SV}) * \\pi_{\\text{MaLop},\\; \\text{MaKhoa}}(\\text{LOP}) * \\sigma_{\\text{TenKhoa}=\\text{\'CNTT\'}}(\\text{KHOA})\\Big)$$\n' +
          'Đẩy hai phép chọn $\\sigma_{\\text{Gioitinh}=\\text{\'Nữ\'}}$ xuống `SV` và $\\sigma_{\\text{TenKhoa}=\\text{\'CNTT\'}}$ xuống `KHOA`, đồng thời rút gọn `LOP` về `(MaLop, MaKhoa)` rồi nối tự nhiên `*` theo `MaLop` và `MaKhoa`, sau cùng chiếu lấy 3 cột kết quả. (Nếu CSDL dùng `\'CNTT\'` làm `MaKhoa` thì chỉ cần lọc trực tiếp trên `LOP` mà không cần nối `KHOA`.)'
      },
      {
        q: 'c) Lập bảng điểm cho tất cả sinh viên khoa `"CNTT"`, bảng điểm gồm các cột: `MaSV, Hoten, TenMH, Diemthi`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{TenMH},\\; \\text{Diemthi}}\\Big(\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{MaLop}}(\\text{SV}) * \\pi_{\\text{MaLop},\\; \\text{MaKhoa}}(\\text{LOP}) * \\sigma_{\\text{TenKhoa}=\\text{\'CNTT\'}}(\\text{KHOA}) * \\text{KQ} * \\pi_{\\text{MaMH},\\; \\text{TenMH}}(\\text{MON})\\Big)$$\n' +
          'Lọc sớm khoa `"CNTT"` trên `KHOA` và chiếu bỏ các cột không dùng ở `SV`, `LOP`, `MON` (vẫn giữ khóa nối `MaLop, MaKhoa, MaSV, MaMH`) trước khi nối 5 bảng với `KQ` để ghép tên sinh viên, tên môn học và điểm thi.'
      },
      {
        q: 'd) Lập danh sách sinh viên của lớp có mã lớp là `"AT10"` và có điểm thi môn `"CSDL"` lớn hơn hoặc bằng `8`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten}}\\Big(\\sigma_{\\text{MaLop}=\\text{\'AT10\'}}(\\text{SV}) * \\sigma_{\\text{Diemthi} \\ge 8}(\\text{KQ}) * \\sigma_{\\text{TenMH}=\\text{\'CSDL\'}}(\\text{MON})\\Big)$$\n' +
          'Đẩy cả 3 điều kiện chọn xuống 3 bảng tương ứng (`MaLop` đã có sẵn trong `SV` nên không cần nối `LOP`), kết nối qua `MaSV` và `MaMH` rồi chiếu `MaSV, Hoten` (nếu cần đầy đủ thuộc tính của `SV` thì chiếu thêm `Gioitinh, Ngaysinh, MaLop, Hocbong`).'
      },
      {
        q: 'e) Lập danh sách sinh viên thi hết tất cả các môn học, thông tin gồm: `Mã SV, Tên SV` (biến thể `Bài tập tổng hợp` Câu 3f: gồm `Mã SV, Tên SV, Lớp, Khoa`).',
        a: 'Tìm tập `MaSV` đã thi đủ tất cả các môn bằng phép chia:\n' +
          '$$\\text{DS\\_SV} \\leftarrow \\pi_{\\text{MaSV},\\; \\text{MaMH}}(\\text{KQ}) \\div \\pi_{\\text{MaMH}}(\\text{MON})$$\n' +
          '- **Theo `BT_LTCSDL` (`Mã SV, Tên SV`)**:\n' +
          '$$\\pi_{\\text{MaSV},\\; \\text{Hoten}}(\\text{DS\\_SV} * \\text{SV})$$\n' +
          '- **Theo `Bài tập tổng hợp` (`Mã SV, Tên SV, Lớp, Khoa`)**:\n' +
          '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{TenLop},\\; \\text{TenKhoa}}(\\text{DS\\_SV} * \\text{SV} * \\text{LOP} * \\text{KHOA})$$\n' +
          'Khi gặp từ **"tất cả các môn học"** thì dùng phép chia $\\div$. Bắt buộc chiếu `KQ` về `(MaSV, MaMH)` (loại `Diemthi`) và `MON` về `(MaMH)` trước khi chia; đặt ngoặc quanh phép chia trước khi nối `*` với `SV`, `LOP`, `KHOA` để lấy tên SV, lớp và khoa.'
      },
      {
        q: 'f) Lập danh sách sinh viên của lớp `L01` thi lại môn `CSDL`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten}}\\Big(\\sigma_{\\text{MaLop}=\\text{\'L01\'}}(\\text{SV}) * \\sigma_{\\text{Diemthi} < 5}(\\text{KQ}) * \\sigma_{\\text{TenMH}=\\text{\'CSDL\'}}(\\text{MON})\\Big)$$\n' +
          'Quy ước sinh viên phải thi lại khi `Diemthi < 5` trên `KQ`. Đẩy sớm 3 điều kiện chọn vào `SV`, `KQ`, `MON` rồi kết nối tự nhiên qua `MaSV` và `MaMH` trước khi chiếu danh sách sinh viên. (Nếu `L01` là tên lớp `TenLop` thay vì mã lớp `MaLop`, nối thêm $\\sigma_{\\text{TenLop}=\\text{\'L01\'}}(\\text{LOP})$ qua `MaLop`.)'
      },
      {
        q: 'g) Lập danh sách sinh viên còn thiếu ít nhất một môn học chưa thi, thông tin gồm: `Mã SV, tên SV, tên môn thi` (biến thể `Bài tập tổng hợp` Câu 3h: gồm `Mã SV, tên SV, Khoa, tên môn thi`).',
        a: 'Tìm các cặp `(MaSV, MaMH)` chưa có điểm thi bằng tích Đề-các trừ đi những cặp đã thi:\n' +
          '$$\\text{CHUATHI} \\leftarrow \\big(\\pi_{\\text{MaSV}}(\\text{SV}) \\times \\pi_{\\text{MaMH}}(\\text{MON})\\big) - \\pi_{\\text{MaSV},\\; \\text{MaMH}}(\\text{KQ})$$\n' +
          '- **Theo `BT_LTCSDL` (`Mã SV, tên SV, tên môn thi`)**:\n' +
          '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{TenMH}}(\\text{CHUATHI} * \\text{SV} * \\text{MON})$$\n' +
          '- **Theo `Bài tập tổng hợp` (thêm `TenKhoa`)**:\n' +
          '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{TenKhoa},\\; \\text{TenMH}}(\\text{CHUATHI} * \\text{SV} * \\text{LOP} * \\text{KHOA} * \\text{MON})$$\n' +
          'Tích Đề-các $\\pi_{\\text{MaSV}}(\\text{SV}) \\times \\pi_{\\text{MaMH}}(\\text{MON})$ tạo ra mọi cặp (sinh viên, môn học) lẽ ra phải thi; lấy tập đó trừ đi $\\pi_{\\text{MaSV},\\; \\text{MaMH}}(\\text{KQ})$ sẽ thu được đúng các cặp môn còn thiếu của từng sinh viên (những SV đã thi đủ mọi môn sẽ không còn dòng nào trong `CHUATHI`), rồi nối lấy tên SV, tên môn (và `TenKhoa` qua `LOP`).'
      },
      {
        q: 'h) Với mỗi lớp, thống kê số lượng sinh viên thi lại của môn `Lý thuyết CSDL`.',
        a: '**Kiến thức mở rộng ngoài slide (hàm gom nhóm $\\mathcal{F}$)**:\n' +
          '$$_{\\text{TenLop}}\\mathcal{F}_{\\text{Count}(\\text{MaSV})}\\Big(\\pi_{\\text{MaLop},\\; \\text{TenLop}}(\\text{LOP}) * \\pi_{\\text{MaSV},\\; \\text{MaLop}}(\\text{SV}) * \\sigma_{\\text{Diemthi} < 5}(\\text{KQ}) * \\sigma_{\\text{TenMH}=\\text{\'Lý thuyết CSDL\'}}(\\text{MON})\\Big)$$\n' +
          'Lọc trước các bản ghi thi lại (`Diemthi < 5`) ở `KQ` và môn `\'Lý thuyết CSDL\'` ở `MON`, kết nối với `SV` và `LOP` qua `MaSV, MaMH, MaLop`, sau đó dùng hàm gom nhóm $_{G}\\mathcal{F}_{f(A)}$ nhóm theo `TenLop` (hoặc `MaLop, TenLop` để tránh trùng tên lớp) và đếm `Count(MaSV)`.'
      },
      {
        q: 'i) Thống kê điểm cao nhất, thấp nhất môn `CSDL` của từng lớp.',
        a: '**Kiến thức mở rộng ngoài slide (hàm gom nhóm $\\mathcal{F}$)**:\n' +
          '$$_{\\text{TenLop}}\\mathcal{F}_{\\text{Max}(\\text{Diemthi}),\\; \\text{Min}(\\text{Diemthi})}\\Big(\\pi_{\\text{MaLop},\\; \\text{TenLop}}(\\text{LOP}) * \\pi_{\\text{MaSV},\\; \\text{MaLop}}(\\text{SV}) * \\text{KQ} * \\sigma_{\\text{TenMH}=\\text{\'CSDL\'}}(\\text{MON})\\Big)$$\n' +
          'Lọc môn `\'CSDL\'` trên `MON`, nối với `KQ`, `SV`, `LOP` để gắn điểm thi môn CSDL với từng lớp tương ứng, rồi nhóm theo `TenLop` và tính đồng thời hai hàm gộp `Max(Diemthi)` và `Min(Diemthi)`.'
      },
      {
        q: 'j) (Bổ sung từ `Bài tập tổng hợp` – Câu 3d) Lập phiếu điểm cho sinh viên có `MaSV = \'0001\'`.',
        a: '$$\\pi_{\\text{MaSV},\\; \\text{Hoten},\\; \\text{TenLop},\\; \\text{MaMH},\\; \\text{TenMH},\\; \\text{Diemthi}}\\Big(\\sigma_{\\text{MaSV}=\\text{\'0001\'}}(\\text{SV}) * \\pi_{\\text{MaLop},\\; \\text{TenLop}}(\\text{LOP}) * \\sigma_{\\text{MaSV}=\\text{\'0001\'}}(\\text{KQ}) * \\pi_{\\text{MaMH},\\; \\text{TenMH}}(\\text{MON})\\Big)$$\n' +
          'Đẩy điều kiện $\\sigma_{\\text{MaSV}=\\text{\'0001\'}}$ xuống cả `SV` và `KQ` trước khi nối `*` với `LOP` và `MON` để thu gọn kích thước hai bảng lớn nhất, sau đó chiếu ra các thông tin cần có trên phiếu điểm (nếu không cần cột lớp thì bỏ nối `LOP` và `TenLop`).'
      }
    ]
  }
},
{
  id: 'dsqh-thuvien',
  kind: 'dsqh',
  title: 'Bài 3: CSDL Quản lý thư viện (Bandoc, Sach, Phieumuon)',
  source: 'BT_LTCSDL (C2_C3) – Ch.3 Câu 4; Bài tập tổng hợp – Ch.3 Câu 4',
  answerStatus: 'tu-giai',
  prompt: 'Giả sử lược đồ CSDL của bài toán quản lý thư viện gồm các lược đồ quan hệ sau:\n' +
    '- $\\text{Bandoc}(\\underline{\\text{MaBD}},\\; \\text{TenBD},\\; \\text{Lop},\\; \\text{Ngaycap})$\n' +
    '- $\\text{Sach}(\\underline{\\text{MaSH}},\\; \\text{TenSH},\\; \\text{Tacgia},\\; \\text{NhaXB},\\; \\text{NamXB})$\n' +
    '- $\\text{Phieumuon}(\\underline{\\text{MaBD}},\\; \\underline{\\text{MaSH}},\\; \\text{Ngaymuon},\\; \\text{Trasach})$\n' +
    'Chú ý: `Trasach`: Đã trả sách hay chưa (`Yes`/`No`).\n\n' +
    'Hãy thực hiện những yêu cầu sau bằng ngôn ngữ đại số quan hệ (gộp đủ các ý a–i trong `BT_LTCSDL` và câu 4g bổ sung từ `Bài tập tổng hợp`):\n' +
    'a) Đưa ra danh sách những bạn đọc của lớp `H` được cấp thẻ vào ngày `2/12/2016`.\n' +
    'b) Liệt kê những tên sách mà bạn đọc có mã số `\'BD101\'` đã mượn của thư viện.\n' +
    'c) Hãy đưa ra danh sách những bạn đọc mượn sách quá hạn tính đến ngày `30/04/2020` (bản `Bài tập tổng hợp` ghi `30/12/2015`), gồm các thông tin sau: Mã bạn đọc, tên bạn đọc, tên sách. Biết rằng mỗi quyển sách bạn đọc chỉ được phép mượn không quá 5 ngày.\n' +
    'd) Liệt kê những tên sách của tác giả `\'Nguyễn Mạnh Tường\'` do Nhà xuất bản `Đại học Quốc Gia` xuất bản có trong thư viện.\n' +
    'e) Cho biết danh sách bạn đọc hiện đang mượn `\'Giáo trình CSDL\'` của thư viện, gồm các thông tin sau: mã bạn đọc, tên bạn đọc, lớp học.\n' +
    'f) Hãy đưa ra danh sách những bạn đọc đã đăng ký thẻ bạn đọc, nhưng chưa lần nào mượn sách ở thư viện.\n' +
    'g) Liệt kê danh sách mã bạn đọc của những sinh viên đã mượn tất cả các quyển sách.\n' +
    'h) Thống kê theo đầu sách số lượng các quyển sách đang có trong thư viện.\n' +
    'i) Thống kê theo đầu sách số các quyển sách chưa được trả.\n' +
    'j) (Bổ sung từ `Bài tập tổng hợp` – Câu 4g) Liệt kê những tên sách xuất bản năm `2016` mà bạn đọc đã mượn.',
  answer: {
    steps: [
      'Kiểm tra khóa nối tự nhiên (`*`): `Bandoc` và `Phieumuon` chỉ chung `MaBD`; `Sach` và `Phieumuon` chỉ chung `MaSH` nên phép nối `*` không gây trùng cột ngoài ý muốn.',
      'Phân biệt trạng thái mượn: "đã mượn" không lọc `Trasach`, còn "hiện đang mượn" hoặc "mượn quá hạn" bắt buộc phải lọc `Trasach = \'No\'` (chưa trả).',
      'Với câu "chưa lần nào mượn" dùng hiệu $-$ (anti-join, nhớ đóng ngoặc trước khi nối `*`); với câu "mượn tất cả" dùng phép chia $\\div$; các câu thống kê h, i dùng hàm gom nhóm $\\mathcal{F}$ (kiến thức mở rộng ngoài slide).'
    ],
    parts: [
      {
        q: 'a) Đưa ra danh sách những bạn đọc của lớp `H` được cấp thẻ vào ngày `2/12/2016`.',
        a: '$$\\sigma_{\\text{Lop}=\\text{\'H\'} \\land \\text{Ngaycap}=\\text{\'2/12/2016\'}}(\\text{Bandoc})$$\n' +
          'Cả hai điều kiện lọc đều thuộc bảng `Bandoc`, kết hợp bằng phép logic $\\land$ (`AND`) trong một phép chọn $\\sigma$ (không dùng dấu phẩy hay ký hiệu tập hợp $\\cap$ bên trong $\\sigma$). Vì đề hỏi "danh sách những bạn đọc" không giới hạn cột nên giữ toàn bộ lược đồ `Bandoc` (hoặc chiếu $\\pi_{\\text{MaBD},\\; \\text{TenBD}}$ nếu chỉ cần mã và tên).'
      },
      {
        q: 'b) Liệt kê những tên sách mà bạn đọc có mã số `\'BD101\'` đã mượn của thư viện.',
        a: '$$\\pi_{\\text{TenSH}}\\Big(\\sigma_{\\text{MaBD}=\\text{\'BD101\'}}(\\text{Phieumuon}) * \\pi_{\\text{MaSH},\\; \\text{TenSH}}(\\text{Sach})\\Big)$$\n' +
          'Đẩy phép chọn $\\sigma_{\\text{MaBD}=\\text{\'BD101\'}}$ xuống `Phieumuon` trước và thu gọn `Sach` còn `(MaSH, TenSH)` trước khi nối `*` qua khóa `MaSH`, rồi chiếu `TenSH`. Không cần nối `Bandoc` vì `MaBD` đã có sẵn trong `Phieumuon`, và không lọc `Trasach` vì hỏi sách đã từng mượn.'
      },
      {
        q: 'c) Hãy đưa ra danh sách những bạn đọc mượn sách quá hạn tính đến ngày `30/04/2020` (bản `Bài tập tổng hợp` ghi `30/12/2015`), gồm các thông tin sau: Mã bạn đọc, tên bạn đọc, tên sách. Biết rằng mỗi quyển sách bạn đọc chỉ được phép mượn không quá 5 ngày.',
        a: '$$\\pi_{\\text{MaBD},\\; \\text{TenBD},\\; \\text{TenSH}}\\Big(\\sigma_{\\text{Ngaymuon}+5 < \\text{\'30/04/2020\'} \\land \\text{Trasach}=\\text{\'No\'}}(\\text{Phieumuon}) * \\pi_{\\text{MaBD},\\; \\text{TenBD}}(\\text{Bandoc}) * \\pi_{\\text{MaSH},\\; \\text{TenSH}}(\\text{Sach})\\Big)$$\n' +
          'Sách bị coi là quá hạn tính đến `30/04/2020` khi thỏa đồng thời **hai điều kiện**: vượt quá thời hạn 5 ngày (`Ngaymuon + 5 < \'30/04/2020\'`, tương đương `\'30/04/2020\' - Ngaymuon > 5`) **và** chưa trả sách (`Trasach = \'No\'`). Sau khi lọc sớm trên `Phieumuon`, nối `*` với hình chiếu tối giản của `Bandoc` và `Sach` để lấy `TenBD, TenSH`. Với biến thể ngày `30/12/2015` trong `Bài tập tổng hợp`, thay mốc ngày `\'30/04/2020\'` bằng `\'30/12/2015\'`.'
      },
      {
        q: 'd) Liệt kê những tên sách của tác giả `\'Nguyễn Mạnh Tường\'` do Nhà xuất bản `Đại học Quốc Gia` xuất bản có trong thư viện.',
        a: '$$\\pi_{\\text{TenSH}}\\Big(\\sigma_{\\text{Tacgia}=\\text{\'Nguyễn Mạnh Tường\'} \\land \\text{NhaXB}=\\text{\'Đại học Quốc Gia\'}}(\\text{Sach})\\Big)$$\n' +
          'Chọn trực tiếp trên quan hệ `Sach` với điều kiện ghép $\\land$ giữa `Tacgia` và `NhaXB`, rồi chiếu `TenSH`. Không nối bảng `Phieumuon` vì đề chỉ hỏi các đầu sách có trong thư viện, bất kể đã được mượn hay chưa.'
      },
      {
        q: 'e) Cho biết danh sách bạn đọc hiện đang mượn `\'Giáo trình CSDL\'` của thư viện, gồm các thông tin sau: mã bạn đọc, tên bạn đọc, lớp học.',
        a: '$$\\pi_{\\text{MaBD},\\; \\text{TenBD},\\; \\text{Lop}}\\Big(\\pi_{\\text{MaBD},\\; \\text{TenBD},\\; \\text{Lop}}(\\text{Bandoc}) * \\sigma_{\\text{Trasach}=\\text{\'No\'}}(\\text{Phieumuon}) * \\sigma_{\\text{TenSH}=\\text{\'Giáo trình CSDL\'}}(\\text{Sach})\\Big)$$\n' +
          'Cụm từ **"hiện đang mượn"** đòi hỏi phải lọc `Trasach = \'No\'` (chưa trả) trên `Phieumuon`. Đẩy hai điều kiện chọn `Trasach = \'No\'` và `TenSH = \'Giáo trình CSDL\'` xuống hai bảng trước khi nối `*` với `Bandoc`, sau đó chiếu `(MaBD, TenBD, Lop)`.'
      },
      {
        q: 'f) Hãy đưa ra danh sách những bạn đọc đã đăng ký thẻ bạn đọc, nhưng chưa lần nào mượn sách ở thư viện.',
        a: '$$\\big(\\pi_{\\text{MaBD}}(\\text{Bandoc}) - \\pi_{\\text{MaBD}}(\\text{Phieumuon})\\big) * \\text{Bandoc}$$\n' +
          'Dùng phép hiệu $-$ (anti-join) giữa tập `MaBD` trong `Bandoc` và tập `MaBD` trong `Phieumuon` để lấy mã các bạn đọc chưa từng mượn sách, rồi kết nối tự nhiên (`*`) với `Bandoc` để khôi phục đầy đủ thông tin (`TenBD, Lop, Ngaycap`). **Lưu ý dấu ngoặc**: cặp ngoặc `(...)` quanh phép trừ là bắt buộc; nếu bỏ ngoặc, `*` chạy trước làm hai vế của `-` khác lược đồ.'
      },
      {
        q: 'g) Liệt kê danh sách mã bạn đọc của những sinh viên đã mượn tất cả các quyển sách.',
        a: '$$\\pi_{\\text{MaBD},\\; \\text{MaSH}}(\\text{Phieumuon}) \\div \\pi_{\\text{MaSH}}(\\text{Sach})$$\n' +
          'Yêu cầu chứa từ khóa **"tất cả các quyển sách"** nên áp dụng phép chia $\\div$. Trước khi chia, bắt buộc chiếu `Phieumuon` chỉ giữ `(MaBD, MaSH)` (bỏ `Ngaymuon, Trasach` để các lần mượn vào ngày khác nhau của cùng một `MaBD` gom về chung một bạn đọc) và chiếu `Sach` chỉ giữ `(MaSH)`; kết quả phép chia trả ra đúng tập `MaBD` cần tìm.'
      },
      {
        q: 'h) Thống kê theo đầu sách số lượng các quyển sách đang có trong thư viện.',
        a: '**Kiến thức mở rộng ngoài slide (hàm gom nhóm $\\mathcal{F}$)**:\n' +
          '$$_{\\text{TenSH}}\\mathcal{F}_{\\text{Count}(\\text{MaSH})}(\\text{Sach})$$\n' +
          'Nếu hiểu "đang có trong thư viện" là các quyển **hiện còn trên giá (chưa cho mượn, tức loại bỏ các quyển có `Trasach = \'No\'`)**:\n' +
          '$$_{\\text{TenSH}}\\mathcal{F}_{\\text{Count}(\\text{MaSH})}\\Big(\\big(\\pi_{\\text{MaSH}}(\\text{Sach}) - \\pi_{\\text{MaSH}}(\\sigma_{\\text{Trasach}=\\text{\'No\'}}(\\text{Phieumuon}))\\big) * \\text{Sach}\\Big)$$\n' +
          'Trong lược đồ này, mỗi bản sách vật lý có một `MaSH` riêng và cùng đầu sách sẽ chung `TenSH`. Cách viết đầu nhóm theo `TenSH` và đếm `Count(MaSH)` toàn bộ sách thuộc danh mục thư viện; cách viết thứ hai dùng thêm phép trừ $-$ loại bớt những `MaSH` đang được mượn (`Trasach = \'No\'`) trước khi đếm.'
      },
      {
        q: 'i) Thống kê theo đầu sách số các quyển sách chưa được trả.',
        a: '**Kiến thức mở rộng ngoài slide (hàm gom nhóm $\\mathcal{F}$)**:\n' +
          '$$_{\\text{TenSH}}\\mathcal{F}_{\\text{Count}(\\text{MaSH})}\\Big(\\pi_{\\text{MaSH},\\; \\text{TenSH}}(\\text{Sach}) * \\sigma_{\\text{Trasach}=\\text{\'No\'}}(\\text{Phieumuon})\\Big)$$\n' +
          'Lọc các phiếu mượn có `Trasach = \'No\'` (chưa trả) trên `Phieumuon` rồi nối `*` với `(MaSH, TenSH)` của `Sach` để lấy tên đầu sách `TenSH`. Sau đó dùng hàm gom nhóm $_{G}\\mathcal{F}_{f(A)}$ nhóm theo `TenSH` và đếm `Count(MaSH)` số quyển chưa trả ứng với từng đầu sách.'
      },
      {
        q: 'j) (Bổ sung từ `Bài tập tổng hợp` – Câu 4g) Liệt kê những tên sách xuất bản năm `2016` mà bạn đọc đã mượn.',
        a: '$$\\pi_{\\text{TenSH}}\\Big(\\sigma_{\\text{NamXB}=2016}(\\text{Sach}) * \\pi_{\\text{MaSH}}(\\text{Phieumuon})\\Big)$$\n' +
          'Đẩy phép chọn $\\sigma_{\\text{NamXB}=2016}$ xuống `Sach` trước (vì `NamXB` lưu trực tiếp số năm nên so sánh `NamXB = 2016`, không cần hàm `year(NamXB)`), sau đó nối tự nhiên `*` với $\\pi_{\\text{MaSH}}(\\text{Phieumuon})$ để giữ lại các sách đã có bạn đọc mượn và chiếu lấy `TenSH`.'
      }
    ]
  }
},
{
  id: 'dsqh-cuahang',
  kind: 'dsqh',
  title: 'Bài 4: CSDL Quản lý bán hàng tạp hóa (Hang, Khach, Hoadon, ChitietHD)',
  source: 'BT_LTCSDL (C2_C3) – Ch.3 Câu 5; Bài tập tổng hợp – Ch.3 Câu 5',
  answerStatus: 'tu-giai',
  prompt: 'Giả sử một cửa hàng tạp hóa quản lý bán hàng bằng các lược đồ quan hệ sau:\n' +
    '- $\\text{Hang}(\\underline{\\text{Mahang}},\\; \\text{Tenhang},\\; \\text{Dongia},\\; \\text{DVT})$\n' +
    '- $\\text{Khach}(\\underline{\\text{MaKH}},\\; \\text{Hoten},\\; \\text{Diachi},\\; \\text{Tel})$\n' +
    '- $\\text{Hoadon}(\\underline{\\text{SoHD}},\\; \\text{NgaylapHD},\\; \\text{Ngayban},\\; \\text{MaKH})$\n' +
    '- $\\text{ChitietHD}(\\underline{\\text{SoHD}},\\; \\underline{\\text{Mahang}},\\; \\text{SLBan})$\n\n' +
    'Hãy thực hiện những yêu cầu sau bằng ngôn ngữ đại số quan hệ (lưu ý một số sai khác nhỏ về mốc thời gian giữa `BT_LTCSDL` và `Bài tập tổng hợp` ở các ý f, h, i):\n' +
    'a) Hãy đưa ra danh sách các khách hàng ở `"Hà Nội"` đã mua hàng tại cửa hàng. Thông tin gồm mã khách hàng, tên khách hàng và số điện thoại.\n' +
    'b) Liệt kê tên hàng và số lượng bán của các mặt hàng có trong hóa đơn số `342`.\n' +
    'c) Cho biết danh sách những khách hàng đã đăng ký mua hàng tại cửa hàng, nhưng chưa mua hàng lần nào.\n' +
    'd) Cho biết tên và số điện thoại của khách hàng có mã số `\'KH300\'`.\n' +
    'e) Cho biết thông tin về khách hàng ở hóa đơn số `\'HD011\'`.\n' +
    'f) Lập danh sách các khách hàng đã mua mặt hàng `\'Sam sung J7\'` vào ngày `10/3/2020` (bản `Bài tập tổng hợp` ghi ngày `10/1/2015`).\n' +
    'g) Cho biết thông tin về các mặt hàng có đơn giá trên `2.000.000`.\n' +
    'h) Cho biết danh sách tên và số điện thoại của các khách hàng đã mua hàng vào quý [?] năm `2020` (bản gốc `BT_LTCSDL` gõ thiếu số quý: `"vào quý năm 2020"`; bản `Bài tập tổng hợp` ghi: `vào tháng 12`).\n' +
    'i) Thống kê việc mua hàng trong năm `2020` (bản `Bài tập tổng hợp` ghi năm `2016`) (theo từng hóa đơn) của khách hàng có mã số `KH101`. Yêu cầu thông tin: Số hóa đơn, tên hàng, số lượng hàng đã bán được cho khách hàng này.',
  answer: {
    steps: [
      'Kiểm tra khóa nối tự nhiên (`*`): 4 bảng chỉ trùng đúng 3 khóa nối `MaKH`, `SoHD`, `Mahang` nên kết nối `*` luôn ghép đúng khóa ngoại.',
      'Đẩy điều kiện lọc $\\sigma$ và phép chiếu $\\pi$ thu gọn cột xuống các bảng thành phần trước khi nối (tránh nối thêm `Khach` hoặc `Hoadon` khi các khóa `MaKH`, `SoHD` đã nằm sẵn ở bảng kia).',
      'Với câu c ("chưa mua hàng lần nào") dùng phép hiệu $-$ (anti-join); với các câu lọc theo tháng/quý/năm trên ngày bán `Ngayban` dùng hàm trích xuất `year()`, `month()`, `quarter()` kết hợp bằng $\\land$ (`AND`).'
    ],
    parts: [
      {
        q: 'a) Hãy đưa ra danh sách các khách hàng ở `"Hà Nội"` đã mua hàng tại cửa hàng. Thông tin gồm mã khách hàng, tên khách hàng và số điện thoại.',
        a: '$$\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Tel}}\\Big(\\sigma_{\\text{Diachi}=\\text{\'Hà Nội\'}}(\\text{Khach}) * \\pi_{\\text{MaKH}}(\\text{Hoadon})\\Big)$$\n' +
          'Đẩy phép chọn $\\sigma_{\\text{Diachi}=\\text{\'Hà Nội\'}}$ xuống `Khach` và chiếu `Hoadon` về `MaKH` rồi nối tự nhiên `*` để bảo đảm chỉ giữ những khách ở Hà Nội thực sự **đã từng có hóa đơn mua hàng** (loại bỏ khách mới đăng ký mà chưa mua). Cuối cùng chiếu `(MaKH, Hoten, Tel)`.'
      },
      {
        q: 'b) Liệt kê tên hàng và số lượng bán của các mặt hàng có trong hóa đơn số `342`.',
        a: '$$\\pi_{\\text{Tenhang},\\; \\text{SLBan}}\\Big(\\sigma_{\\text{SoHD}=342}(\\text{ChitietHD}) * \\pi_{\\text{Mahang},\\; \\text{Tenhang}}(\\text{Hang})\\Big)$$\n' +
          'Lọc sớm $\\sigma_{\\text{SoHD}=342}$ ngay trên `ChitietHD` (không cần nối `Hoadon` vì `SoHD` đã có sẵn trong `ChitietHD`), nối `*` với hình chiếu `(Mahang, Tenhang)` của `Hang` theo khóa `Mahang`, rồi chiếu `Tenhang, SLBan`. (Nếu `SoHD` lưu dạng chuỗi thì viết `SoHD = \'342\'`.)'
      },
      {
        q: 'c) Cho biết danh sách những khách hàng đã đăng ký mua hàng tại cửa hàng, nhưng chưa mua hàng lần nào.',
        a: '$$\\text{Khach} - \\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Diachi},\\; \\text{Tel}}(\\text{Khach} * \\text{Hoadon})$$\n' +
          'Hoặc viết qua hiệu tập khóa rồi nối lại:\n' +
          '$$\\big(\\pi_{\\text{MaKH}}(\\text{Khach}) - \\pi_{\\text{MaKH}}(\\text{Hoadon})\\big) * \\text{Khach}$$\n' +
          'Ở biểu thức đầu, ta lấy toàn bộ bảng `Khach` trừ đi (anti-join) những khách hàng đã có hóa đơn trong `Khach * Hoadon` (cần chiếu lại đúng 4 cột của `Khach` để hai vế cùng lược đồ). Cách viết thứ hai trừ trực tiếp trên tập `MaKH` (nhớ giữ ngoặc quanh `-`) rồi mới nối `* Khach`, cho kết quả hoàn toàn tương đương.'
      },
      {
        q: 'd) Cho biết tên và số điện thoại của khách hàng có mã số `\'KH300\'`.',
        a: '$$\\pi_{\\text{Hoten},\\; \\text{Tel}}\\big(\\sigma_{\\text{MaKH}=\\text{\'KH300\'}}(\\text{Khach})\\big)$$\n' +
          'Lọc trực tiếp bộ có `MaKH = \'KH300\'` trên quan hệ `Khach` bằng $\\sigma$, sau đó chiếu $\\pi$ lấy `Hoten` và `Tel`. Chỉ truy xuất một bảng nên không cần kết nối.'
      },
      {
        q: 'e) Cho biết thông tin về khách hàng ở hóa đơn số `\'HD011\'`.',
        a: '$$\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Diachi},\\; \\text{Tel}}\\Big(\\text{Khach} * \\pi_{\\text{MaKH}}\\big(\\sigma_{\\text{SoHD}=\\text{\'HD011\'}}(\\text{Hoadon})\\big)\\Big)$$\n' +
          'Đẩy phép chọn $\\sigma_{\\text{SoHD}=\\text{\'HD011\'}}$ xuống `Hoadon` và chiếu giữ lại khóa nối `MaKH` trước khi nối tự nhiên `*` với `Khach`. Phép chiếu ngoài cùng giữ đủ 4 thuộc tính của `Khach` để trả về thông tin khách hàng mà không lẫn cột của `Hoadon`.'
      },
      {
        q: 'f) Lập danh sách các khách hàng đã mua mặt hàng `\'Sam sung J7\'` vào ngày `10/3/2020` (bản `Bài tập tổng hợp` ghi ngày `10/1/2015`).',
        a: '$$\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Diachi},\\; \\text{Tel}}\\Big(\\text{Khach} * \\pi_{\\text{SoHD},\\; \\text{MaKH}}\\big(\\sigma_{\\text{Ngayban}=\\text{\'10/3/2020\'}}(\\text{Hoadon})\\big) * \\pi_{\\text{SoHD},\\; \\text{Mahang}}(\\text{ChitietHD}) * \\pi_{\\text{Mahang}}\\big(\\sigma_{\\text{Tenhang}=\\text{\'Sam sung J7\'}}(\\text{Hang})\\big)\\Big)$$\n' +
          'Đẩy sớm hai phép chọn `Ngayban = \'10/3/2020\'` vào `Hoadon` và `Tenhang = \'Sam sung J7\'` vào `Hang`, chỉ giữ các cột khóa cần nối trước khi kết nối 4 bảng qua `Mahang, SoHD, MaKH`, rồi chiếu thông tin `Khach` (tự động loại trùng nếu khách mua nhiều hóa đơn trong ngày). Với biến thể trong `Bài tập tổng hợp`, thay ngày `\'10/3/2020\'` bằng `\'10/1/2015\'`.'
      },
      {
        q: 'g) Cho biết thông tin về các mặt hàng có đơn giá trên `2.000.000`.',
        a: '$$\\sigma_{\\text{Dongia} > 2000000}(\\text{Hang})$$\n' +
          'Dùng trực tiếp một phép chọn $\\sigma_{\\text{Dongia} > 2000000}$ trên quan hệ `Hang` để lấy toàn bộ các thuộc tính `(Mahang, Tenhang, Dongia, DVT)` của những mặt hàng có đơn giá vượt `2.000.000`.'
      },
      {
        q: 'h) Cho biết danh sách tên và số điện thoại của các khách hàng đã mua hàng vào quý [?] năm `2020` (bản `BT_LTCSDL` ghi thiếu số quý: `"vào quý năm 2020"`; bản `Bài tập tổng hợp` ghi: `vào tháng 12`).',
        a: '- **Theo `BT_LTCSDL` (lỗi đánh máy thiếu số quý $q \\in \\{1, 2, 3, 4\\}$ trong cụm `"vào quý năm 2020"`)**:\n' +
          'Dùng hàm $\\text{quarter}(\\text{Ngayban}) = q$ (với quý 1 có thể viết $\\text{month}(\\text{Ngayban}) \\in \\{1, 2, 3\\}$, tức $\\text{month}(\\text{Ngayban}) \\ge 1 \\land \\text{month}(\\text{Ngayban}) \\le 3$):\n' +
          '$$\\pi_{\\text{Hoten},\\; \\text{Tel}}\\Big(\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Tel}}(\\text{Khach}) * \\sigma_{\\text{quarter}(\\text{Ngayban})=q \\land \\text{year}(\\text{Ngayban})=2020}(\\text{Hoadon})\\Big)$$\n' +
          'Ví dụ cho quý 1 năm `2020`:\n' +
          '$$\\pi_{\\text{Hoten},\\; \\text{Tel}}\\Big(\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Tel}}(\\text{Khach}) * \\sigma_{\\text{month}(\\text{Ngayban}) \\in \\{1, 2, 3\\} \\land \\text{year}(\\text{Ngayban})=2020}(\\text{Hoadon})\\Big)$$\n' +
          '- **Theo biến thể trong `Bài tập tổng hợp` (`vào tháng 12`)**:\n' +
          '$$\\pi_{\\text{Hoten},\\; \\text{Tel}}\\Big(\\pi_{\\text{MaKH},\\; \\text{Hoten},\\; \\text{Tel}}(\\text{Khach}) * \\sigma_{\\text{month}(\\text{Ngayban})=12}(\\text{Hoadon})\\Big)$$\n' +
          'Lọc sớm điều kiện thời gian trên `Hoadon` bằng các hàm `quarter()`, `month()`, `year()` trước khi nối `*` với `Khach` qua `MaKH` và chiếu `(Hoten, Tel)`. Do `BT_LTCSDL` bị sót số quý sau chữ `"quý"`, khi làm bài cần thay $q$ (hoặc bộ ba tháng tương ứng `{1,2,3}`, `{4,5,6}`, `{7,8,9}`, `{10,11,12}`) theo đúng đề thi chính thức.'
      },
      {
        q: 'i) Thống kê việc mua hàng trong năm `2020` (bản `Bài tập tổng hợp` ghi năm `2016`) (theo từng hóa đơn) của khách hàng có mã số `KH101`. Yêu cầu thông tin: Số hóa đơn, tên hàng, số lượng hàng đã bán được cho khách hàng này.',
        a: '$$\\pi_{\\text{SoHD},\\; \\text{Tenhang},\\; \\text{SLBan}}\\Big(\\pi_{\\text{SoHD}}\\big(\\sigma_{\\text{MaKH}=\\text{\'KH101\'} \\land \\text{year}(\\text{Ngayban})=2020}(\\text{Hoadon})\\big) * \\text{ChitietHD} * \\pi_{\\text{Mahang},\\; \\text{Tenhang}}(\\text{Hang})\\Big)$$\n' +
          'Đẩy điều kiện `MaKH = \'KH101\' AND year(Ngayban) = 2020` xuống `Hoadon` (không cần nối `Khach` vì `MaKH` đã có trong `Hoadon` và kết quả không yêu cầu tên khách), nối `*` với `ChitietHD` qua `SoHD` và `Hang` qua `Mahang` rồi chiếu `(SoHD, Tenhang, SLBan)`. Dù đề dùng chữ "Thống kê... theo từng hóa đơn", mỗi dòng `(SoHD, Mahang)` trong `ChitietHD` đã ứng với một mặt hàng trong từng hóa đơn nên không cần dùng hàm gom nhóm $\\mathcal{F}$; với bản `Bài tập tổng hợp`, thay `2020` bằng `2016`.'
      }
    ]
  }
}
);
