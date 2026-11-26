/* Ch.4 – Chuẩn hóa CSDL và Phép tách – nguồn: Slide Ch.4 Chuẩn hóa CSDL */
DB.summary.push({
  id: 'ch4-chuanhoa',
  chapter: 'ch4',
  order: 3,
  title: 'Chuẩn hóa lược đồ và Phép tách',
  sections: [
    {
      id: 'ch4-ch-khainiem',
      title: 'Khái niệm chuẩn hóa và phân cấp các dạng chuẩn',
      source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.3–7, 36; Đề cương môn học 2023 (mục 4.8)',
      outside: false,
      blocks: [
        {
          t: 'p',
          text: '**Chuẩn hóa** là quá trình khảo sát tập các thuộc tính và áp dụng các quy tắc phân tích để biến đổi lược đồ quan hệ thành nhiều tập nhỏ hơn (tức đưa các bảng từ dạng chuẩn thấp lên dạng chuẩn cao hơn), nhằm đạt 3 mục tiêu:\n- **Tối thiểu việc lặp lại** (giảm dư thừa dữ liệu).\n- **Tránh dị thường thông tin** (khi thêm, sửa, xóa).\n- **Giải quyết sự không rõ ràng, nhập nhằng** trong suy diễn.'
        },
        {
          t: 'def',
          term: 'Thuộc tính khóa và thuộc tính không khóa',
          text: '- Thuộc tính $A$ được gọi là **thuộc tính khóa** nếu $A$ là ==một thành phần thuộc một khóa nào đó của $R$== (chỉ cần nằm trong *ít nhất một* khóa bất kỳ, không bắt buộc có mặt trong mọi khóa).\n- Ngược lại, $A$ không thuộc bất kỳ khóa nào của $R$ thì gọi là **thuộc tính không khóa**.'
        },
        {
          t: 'example',
          title: 'Ví dụ (slide tr.5) – Phân biệt thuộc tính khóa và không khóa',
          prompt: 'Cho lược đồ $R = \\langle U, F \\rangle$ với $U = \\{A, B, C, D\\}$ và $F = \\{AB \\to C,\\; B \\to D,\\; BC \\to A\\}$. Xác định các thuộc tính khóa và không khóa.',
          solution: '1. Tìm khóa: $TN = \\{B\\}$ (chỉ ở vế trái), $B^+ = BD \\neq U$; $TG = \\{A, C\\}$. Ta có $(AB)^+ = ABCD = U$ và $(BC)^+ = ABCD = U$. Vậy $R$ có hai khóa là $AB$ và $BC$.\n2. **Thuộc tính khóa**: $A, B, C$ (mỗi thuộc tính nằm trong ít nhất một khóa; chú ý $A$ chỉ thuộc $AB$ và $C$ chỉ thuộc $BC$ nhưng cả hai đều là thuộc tính khóa).\n3. **Thuộc tính không khóa**: $D$.'
        },
        {
          t: 'def',
          term: 'Phụ thuộc hàm đầy đủ và phụ thuộc bắc cầu',
          text: '- **PTH đầy đủ**: Cho $R(U)$ với $U = \\{A_1, \\dots, A_k\\}$, $X, Y \\subset U$ ($X \\neq Y$). $Y$ gọi là **phụ thuộc hàm đầy đủ** vào $X$ nếu $X \\to Y \\in F^+$ và với mọi tập con thực sự $X\' \\subset X$ ($X\' \\neq \\emptyset$) thì $X\' \\to Y \\notin F^+$. *(Nói gọn: bỏ bớt bất kỳ thuộc tính nào khỏi $X$ thì không suy ra $Y$ được nữa.)*\n- **Phụ thuộc bắc cầu**: Cho $R(U)$, $X \\subset U$, $A \\subset U$. $A$ gọi là **phụ thuộc bắc cầu** vào $X$ trên $R$ nếu $\\exists Y \\subset U$ sao cho $X \\to Y$, $Y \\to A$ thuộc $F$ (hoặc $F^+$) nhưng $Y \\to X$ không thuộc $F$ (tức $Y$ không tương đương khóa $X$).'
        },
        {
          t: 'table',
          caption: 'Thứ tự phân cấp và quá trình chuẩn hóa các dạng chuẩn (slide tr.4, 7, 36)',
          head: ['Dạng chuẩn', 'Điều kiện đặc trưng (loại bỏ dị thường nào?)', 'Quan hệ bao hàm'],
          rows: [
            ['**1NF**', 'Loại bỏ thuộc tính đa trị, phức hợp và bộ trùng lặp', 'Rộng nhất (mọi chuẩn cao hơn đều là 1NF)'],
            ['**2NF**', 'Là 1NF + loại bỏ PTH không đầy đủ vào bộ phận khóa', '$\\text{2NF} \\subset \\text{1NF}$'],
            ['**3NF**', 'Là 2NF + loại bỏ PTH bắc cầu của TT không khóa vào khóa', '$\\text{3NF} \\subset \\text{2NF} \\subset \\text{1NF}$'],
            ['**BCNF**', 'Là 3NF + loại bỏ mọi dư thừa từ PTH (mọi vế trái là siêu khóa)', '==$\\text{BCNF} \\subset \\text{3NF} \\subset \\text{2NF} \\subset \\text{1NF}$==']
          ]
        },
        {
          t: 'p',
          text: 'Theo sơ đồ quá trình chuẩn hóa (slide tr.36): CSDL chưa chuẩn hóa (còn thuộc tính đa trị) $\\to$ **1NF** (loại bỏ thuộc tính đa trị) $\\to$ **2NF** (loại bỏ PTH không đầy đủ) $\\to$ **3NF** (loại bỏ PTH bắc cầu) $\\to$ **BCNF** (loại bỏ những dư thừa của PTH) $\\to$ **4NF** (loại bỏ những PTH đa trị) $\\to$ **5NF** (loại bỏ những dư thừa phi chuẩn còn lại).'
        },
        {
          t: 'note',
          text: 'Ghi chú (Đề cương 2023 – mục 4.8 & slide tr.36): **Dạng chuẩn 4NF** liên quan đến **phụ thuộc đa trị** (Multi-Valued Dependency – ký hiệu $X \\twoheadrightarrow Y$); lược đồ ở 4NF khi loại bỏ được các phụ thuộc đa trị không tầm thường có vế trái không phải siêu khóa. Slide học phần chỉ trình bày chi tiết từ 1NF đến BCNF.'
        }
      ]
    },
    {
      id: 'ch4-ch-1nf',
      title: 'Dạng chuẩn thứ nhất (1NF)',
      source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.8–12',
      outside: false,
      blocks: [
        {
          t: 'def',
          term: 'Dạng chuẩn 1NF (First Normal Form)',
          text: 'Lược đồ quan hệ $R$ đạt **1NF** nếu và chỉ nếu tất cả các thuộc tính của $R$ thỏa mãn đồng thời 2 điều kiện:\n1. **Là nguyên tố** (không phân nhỏ thành nhiều thành phần có nghĩa).\n2. **Giá trị của các thuộc tính trên các bộ là đơn trị** (mỗi ô chỉ chứa 1 giá trị đơn).'
        },
        {
          t: 'list',
          items: [
            '**3 dấu hiệu kiểm tra 1NF** (slide tr.9): $R$ đạt 1NF khi ==không có thuộc tính đa trị, không có thuộc tính phức hợp, và không có bộ giá trị trùng lặp==.',
            '**Chú ý (slide tr.8)**: Khi xét dạng chuẩn của một lược đồ quan hệ mà đề không nói gì thêm thì mặc định lược đồ đang xét **ít nhất là đạt 1NF**.'
          ]
        },
        {
          t: 'table',
          caption: 'Ví dụ bảng chưa ở 1NF với tập PTH và khóa (MSKH, MSMH) (slide tr.10)',
          head: ['MSKH', 'TenKH', 'TP', 'PVC', 'MSMH', 'TenMH', 'ĐG', 'SL'],
          rows: [
            ['S1', 'An', 'HCM', '01', 'P1, P2, P3', 'Táo, Cam, Chanh', '650, 500, 450', '300, 200, 400'],
            ['S2', 'Hòa', 'HN', '02', 'P1, P3', 'Táo, Chanh', '650, 450', '100, 300'],
            ['S3', 'Thanh', 'NT', '03', 'P2', 'Cam', '500', '200'],
            ['S4', 'Trang', 'NT', '03', 'P2', 'Cam', '500', '210']
          ]
        },
        {
          t: 'example',
          title: 'Ví dụ (slide tr.10) – Vì sao bảng MSKH/MSMH chưa ở 1NF và cách xử lý',
          prompt: 'Xét bảng dữ liệu trên cùng tập PTH $F = \\{\\text{MSKH} \\to \\text{TenKH}, \\text{TP};\\; \\text{MSMH} \\to \\text{TenMH}, \\text{ĐG};\\; \\text{MSKH}, \\text{MSMH} \\to \\text{SL};\\; \\text{TP} \\to \\text{PVC}\\}$ và khóa $(\\text{MSKH}, \\text{MSMH})$.',
          solution: '*(Lời giải tự làm)*\n- **Lý do chưa đạt 1NF**: Tại dòng khách hàng `S1` và `S2`, nhóm thuộc tính $(\\text{MSMH}, \\text{TenMH}, \\text{ĐG}, \\text{SL})$ chứa nhiều giá trị lặp trong cùng một ô (ví dụ `S1` có 3 bộ giá trị `(P1, Táo, 650, 300)`, `(P2, Cam, 500, 200)`, `(P3, Chanh, 450, 400)`), vi phạm điều kiện đơn trị.\n- **Đưa về 1NF** (theo quy tắc tr.11): tách nhóm thuộc tính lặp kèm thuộc tính khóa `MSKH` ra thành quan hệ riêng:\n  1. `KHACHHANG`($\\underline{\\text{MSKH}}$, `TenKH`, `TP`, `PVC`).\n  2. `DATHANG`($\\underline{\\text{MSKH}, \\text{MSMH}}$, `TenMH`, `ĐG`, `SL`).\n  *(Hoặc trải phẳng bảng ban đầu sao cho mỗi cặp `(MSKH, MSMH)` thành một dòng đơn trị độc lập.)*'
        },
        {
          t: 'steps',
          title: 'Cách đưa quan hệ về 1NF (slide tr.11)',
          items: [
            'Bỏ nhóm thuộc tính lặp hoặc gộp ra khỏi quan hệ, chuyển nhóm đó thành một quan hệ mới.',
            'Thuộc tính khóa của quan hệ ban đầu phải tồn tại trong các quan hệ mới tạo để bảo đảm liên kết giữa các bảng.'
          ]
        },
        {
          t: 'example',
          title: 'Ví dụ (slide tr.12) – Tách lược đồ hóa đơn thành 1NF',
          prompt: 'Xét quan hệ $R(\\underline{\\text{Số hoá đơn}}, \\text{Ngày bán}, \\text{Mã khách hàng}, \\text{Tên khách hàng}, \\text{Mã sản phẩm}, \\text{Tên sản phẩm}, \\text{Lượng yêu cầu})$. Tìm các thuộc tính bị trùng lặp và tách lược đồ trên thành 1NF.',
          solution: '*(Lời giải tự làm)*\n- Một hóa đơn có thể gồm nhiều sản phẩm khác nhau, nên với mỗi `Số hoá đơn`, nhóm thuộc tính **bị lặp** là: `Mã sản phẩm`, `Tên sản phẩm`, `Lượng yêu cầu`.\n- Tách nhóm thuộc tính lặp ra quan hệ riêng kèm khóa `Số hoá đơn` (khi đó khóa của bảng mới là `Số hoá đơn, Mã sản phẩm`):\n  1. `HOADON`($\\underline{\\text{Số hoá đơn}}$, `Ngày bán`, `Mã khách hàng`, `Tên khách hàng`).\n  2. `CHITIET_HD`($\\underline{\\text{Số hoá đơn}, \\text{Mã sản phẩm}}$, `Tên sản phẩm`, `Lượng yêu cầu`).'
        }
      ]
    },
    {
      id: 'ch4-ch-2nf',
      title: 'Dạng chuẩn thứ hai (2NF)',
      source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.13–20',
      outside: false,
      blocks: [
        {
          t: 'def',
          term: 'Dạng chuẩn 2NF (Second Normal Form)',
          text: 'Lược đồ quan hệ $R$ đạt **2NF** nếu $R$ là 1NF và ==tất cả các thuộc tính không khóa đều phụ thuộc hàm đầy đủ vào khóa== (tức không có thuộc tính không khóa nào phụ thuộc vào chỉ một bộ phận thực sự của một khóa bất kỳ).'
        },
        {
          t: 'example',
          title: 'Ví dụ 1 & 2 (slide tr.13–14) – Nhận biết nhanh 2NF',
          prompt: '- **VD1**: `ChiTietHD`($\\underline{\\text{SốHĐ}, \\text{Mãhàng}}$, `Tênhàng`, `Sốlượng`) có PTH: $\\{\\text{SốHĐ}, \\text{Mãhàng}\\} \\to \\text{Sốlượng}$ và $\\text{Mãhàng} \\to \\text{Tênhàng}$. Có đạt 2NF không?\n- **VD2**: `NHAVIEN`($\\underline{\\text{MNV}}$, `HT`, `NS`, `HSL`, `MACV`, `CV`) có PTH: $\\text{MNV} \\to \\text{HT}, \\text{NS}, \\text{HSL}, \\text{MACV}, \\text{CV}$ và $\\text{MaCV} \\to \\text{CV}$. Có đạt 2NF không?',
          solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- **VD1**: **Không đạt 2NF** (chỉ đạt 1NF). Khóa là $\\{\\text{SốHĐ}, \\text{Mãhàng}\\}$; thuộc tính không khóa `Tênhàng` phụ thuộc vào chỉ một bộ phận của khóa là `Mãhàng` ($\\text{Mãhàng} \\to \\text{Tênhàng}$), không phụ thuộc đầy đủ vào khóa.\n- **VD2**: **Đạt 2NF**. Khóa duy nhất là `MNV` chỉ có **1 thuộc tính** nên không có tập con thực sự khác rỗng nào để tạo phụ thuộc bộ phận; mọi thuộc tính không khóa đều phụ thuộc đầy đủ vào `MNV`. *(Chú ý: chưa đạt 3NF do $\\text{MACV} \\to \\text{CV}$.)*'
        },
        {
          t: 'steps',
          title: 'Thuật toán kiểm tra dạng chuẩn 2NF (slide tr.15)',
          items: [
            'Bước 1: Tìm tất cả các khóa của quan hệ $R$.',
            'Bước 2: Với mỗi khóa $K$, tìm bao đóng $S^+$ của tất cả các tập con thực sự khác rỗng $S \\subset K$.',
            'Bước 3: Nếu có bao đóng $S^+$ chứa ít nhất một thuộc tính không khóa thì $R$ **không đạt 2NF**; ngược lại thì $R$ **đạt 2NF**.'
          ]
        },
        {
          t: 'p',
          text: '**Nhận xét quan trọng (slide tr.15)**: ==Nếu mọi khóa của lược đồ quan hệ $R$ chỉ có 1 thuộc tính thì $R$ chắc chắn đạt 2NF==.'
        },
        {
          t: 'example',
          title: 'Ví dụ 1 & 2 (slide tr.16–17) – Kiểm tra 2NF bằng thuật toán 3 bước',
          prompt: '- **VD1 (tr.16)**: Cho $Q(A,B,C,D)$, $F = \\{AB \\to C,\\; B \\to D,\\; BC \\to A\\}$. $Q$ có đạt chuẩn 2 không?\n- **VD2 (tr.17)**: Cho $R = \\{A,B,C,D,E,G\\}$ và $F = \\{A \\to BC,\\; C \\to DE,\\; E \\to G\\}$. Quan hệ ở dạng chuẩn nào?',
          solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- **VD1**:\n  1. Khóa của $Q$: $AB$ và $BC$. Thuộc tính khóa: $A, B, C$; **thuộc tính không khóa: $D$**.\n  2. Tập con thực sự của $AB$ và $BC$ là $A, B, C$: $A^+ = A$, $B^+ = BD$, $C^+ = C$.\n  3. Vì $B^+$ chứa thuộc tính không khóa $D$ ($B \\to D$ phụ thuộc bộ phận khóa) $\\Rightarrow$ **$Q$ không đạt 2NF** (chỉ đạt 1NF).\n- **VD2**:\n  1. $TN = \\{A\\}$, $A^+ = ABCDEG = U \\Rightarrow$ $R$ có **khóa duy nhất $A$** (1 thuộc tính).\n  2. Theo nhận xét, mọi khóa đều có 1 thuộc tính $\\Rightarrow$ **$R$ đạt 2NF**.\n  3. Kiểm tra thêm lên 3NF: tập thuộc tính không khóa là $B,C,D,E,G$; các PTH $C \\to DE$ và $E \\to G$ có vế trái không là siêu khóa và vế phải là TT không khóa nên vi phạm 3NF. Vậy dạng chuẩn cao nhất của $R$ là **2NF**.'
        },
        {
          t: 'steps',
          title: 'Thuật toán đưa về dạng 2NF (slide tr.18)',
          items: [
            'Loại các thuộc tính không khóa phụ thuộc vào bộ phận khóa chính cùng với bộ phận khóa đó vào một quan hệ mới; khóa của bảng mới là bộ phận khóa ấy.',
            'Giữ lại các thuộc tính phụ thuộc hoàn toàn vào khóa cùng với khóa của quan hệ ban đầu.'
          ]
        },
        {
          t: 'example',
          title: 'Ví dụ (slide tr.19) – Đưa lược đồ NV về 2NF',
          prompt: 'Cho lược đồ `NV`($\\underline{\\text{MaNV}, \\text{MaPhong}}$, `TenNV`, `Gioitinh`, `Diachi`, `TenPhong`) với các PTH: $\\{\\text{MaNV}, \\text{MaPhong}\\} \\to \\text{TenNV}, \\text{Gioitinh}, \\text{Diachi}$ và $\\text{MaPhong} \\to \\text{TenPhong}$. Kết quả đưa về 2NF là gì?',
          solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- Khóa của `NV` là $\\{\\text{MaNV}, \\text{MaPhong}\\}$. Thuộc tính không khóa `TenPhong` chỉ phụ thuộc bộ phận khóa `MaPhong` (vi phạm 2NF).\n- Tách `TenPhong` cùng `MaPhong` thành quan hệ mới, giữ lại phần phụ thuộc đầy đủ vào khóa chính:\n  1. `PHONG`($\\underline{\\text{MaPhong}}$, `TenPhong`).\n  2. `NV`($\\underline{\\text{MaNV}, \\text{MaPhong}}$, `TenNV`, `Gioitinh`, `Diachi`).'
        },
        {
          t: 'example',
          title: 'Ví dụ 5 (slide tr.20) – Bẫy lược đồ đã ở sẵn 2NF',
          prompt: 'Cho $R = \\langle U, F \\rangle$ với $U = \\{A, B, C, D\\}$ và $F = \\{B \\to D,\\; A \\to C,\\; C \\to ABD\\}$. Lược đồ ở dạng chuẩn nào? Đưa về dạng 2NF nếu chưa ở dạng 2NF.',
          solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. Tìm khóa: $TN = \\emptyset$, $TG = \\{A, B, C\\}$ ($D$ chỉ ở vế phải). Thử $A^+ = ACBD = U$ và $C^+ = CABD = U$ (còn $B^+ = BD$). Vậy $R$ có 2 khóa là $A$ và $C$.\n2. Mọi khóa đều chỉ có **1 thuộc tính** $\\Rightarrow$ **$R$ đã đạt 2NF** (không cần tách để đưa về 2NF!).\n3. Tuy nhiên, tập thuộc tính không khóa là $B, D$; PTH $B \\to D$ có vế trái $B$ không phải siêu khóa và vế phải $D$ không là thuộc tính khóa $\\Rightarrow$ vi phạm 3NF. Vậy dạng chuẩn cao nhất của $R$ là **2NF**.'
        }
      ]
    }
  ]
});

DB.summary[DB.summary.length - 1].sections.push(
  {
    id: 'ch4-ch-3nf',
    title: 'Dạng chuẩn thứ ba (3NF)',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.21–28',
    outside: false,
    blocks: [
      {
        t: 'def',
        term: 'Dạng chuẩn 3NF (Third Normal Form)',
        text: '- **Định nghĩa 1**: Lược đồ $R$ đạt **3NF** nếu:\n  1. $R$ ở dạng 2NF.\n  2. Mọi thuộc tính không khóa **đều không phụ thuộc bắc cầu** vào một khóa bất kỳ của $R$.\n- **Định nghĩa 2 (dạng chuẩn để kiểm tra)**: Lược đồ $R$ đạt **3NF** nếu xét mọi PTH $X \\to A \\in F^+$ với $A \\notin X$ (PTH không tầm thường) thì:\n  - Hoặc $X$ là **siêu khóa**,\n  - ==Hoặc $A$ là thuộc tính khóa==.'
      },
      {
        t: 'p',
        text: '**Giải thích sơ đồ minh họa (slide tr.21)**: Cho $R(\\underline{A_1, A_2}, A_3, A_4, A_5)$ với $\\{A_1, A_2\\} \\to A_3, A_4, A_5$ và $A_4 \\to A_1$. Khi đó $\\{A_1, A_2\\}$ và $\\{A_4, A_2\\}$ đều là khóa, nên $A_1$ là thuộc tính khóa; theo ĐN2, PTH $A_4 \\to A_1$ có vế phải $A_1$ là thuộc tính khóa nên $R$ vẫn thỏa 3NF.'
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.22) – Quan hệ Nhân viên – Phòng ban có đạt 3NF không?',
        prompt: 'Cho lược đồ `NHÂN VIÊN – PHÒNG BAN`($\\underline{\\text{MNV}}$, `TenNV`, `NgSinh`, `DiaChi`, `MaPhong`, `TenPhong`, `NgayNC`) với các PTH từ sơ đồ mũi tên:\n- $\\text{MNV} \\to \\text{TenNV}, \\text{NgSinh}, \\text{DiaChi}, \\text{MaPhong}$\n- $\\text{MaPhong} \\to \\text{TenPhong}, \\text{NgayNC}$\nQuan hệ trên có ở dạng 3NF không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- Khóa duy nhất là `MNV` (1 thuộc tính) $\\Rightarrow$ đạt 2NF.\n- Các thuộc tính không khóa gồm `TenNV`, `NgSinh`, `DiaChi`, `MaPhong`, `TenPhong`, `NgayNC`.\n- Hai thuộc tính không khóa `TenPhong` và `NgayNC` **phụ thuộc bắc cầu** vào khóa `MNV` qua `MaPhong` ($\\text{MNV} \\to \\text{MaPhong} \\to \\text{TenPhong}, \\text{NgayNC}$). Xét theo ĐN2, vế trái `MaPhong` không phải siêu khóa và vế phải `TenPhong`, `NgayNC` không phải thuộc tính khóa.\n- **Kết luận**: **Không đạt 3NF** (chỉ đạt 2NF).'
      },
      {
        t: 'steps',
        title: 'Thuật toán kiểm tra dạng chuẩn 3NF (slide tr.23)',
        items: [
          'Bước 1: Tìm tất cả các khóa của $R$ (để suy ra tập thuộc tính khóa và kiểm tra siêu khóa).',
          'Bước 2: Từ $F$, tách vế phải thành tập PTH tương đương $F\'$ có vế phải đúng 1 thuộc tính (loại PTH hiển nhiên $A \\in X$).',
          'Bước 3: Kiểm tra từng $X \\to A \\in F\'$ ($A \\notin X$): nếu mọi PTH đều có $X$ là siêu khóa **hoặc** $A$ là thuộc tính khóa thì $R$ đạt **3NF**; ngược lại chỉ cần tồn tại một PTH vi phạm cả hai điều kiện thì $R$ không đạt 3NF.'
        ]
      },
      {
        t: 'p',
        text: '**Nhận xét quan trọng (slide tr.23)**: ==Nếu lược đồ quan hệ $R$ không chứa thuộc tính không khóa (tức mọi thuộc tính đều là thuộc tính khóa) thì $R$ chắc chắn đạt 3NF==.'
      },
      {
        t: 'example',
        title: 'Ví dụ 1 (slide tr.24) – Xác định 3NF bằng nhận xét không có TT không khóa',
        prompt: 'Cho lược đồ quan hệ $Q(A,B,C,D)$ và $F = \\{AB \\to C,\\; D \\to B,\\; C \\to ABD\\}$. Hỏi $Q$ có đạt chuẩn 3 không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. Tìm khóa: $TN = \\emptyset$, $TG = \\{A, B, C, D\\}$.\n   - $C^+ = CABD = U \\Rightarrow C$ là khóa.\n   - $(AB)^+ = ABCD = U \\Rightarrow AB$ là khóa.\n   - $(AD)^+ = ABDC = U$ (dùng $D \\to B, AB \\to C$) $\\Rightarrow AD$ là khóa.\n   Các khóa của $Q$ là $C, AB, AD$.\n2. Tập thuộc tính khóa gồm cả $A, B, C, D$ (không có thuộc tính không khóa).\n3. Kiểm tra ĐN2 trên $F\'$: $AB \\to C$ ($AB$ là siêu khóa), $C \\to A, B, D$ ($C$ là siêu khóa), $D \\to B$ ($B$ là thuộc tính khóa).\n- **Kết luận**: **$Q$ đạt chuẩn 3NF** *(chưa đạt BCNF vì $D \\to B$ có $D$ không là siêu khóa)*.'
      },
      {
        t: 'steps',
        title: 'Cách đưa quan hệ về dạng 3NF (slide tr.25)',
        items: [
          'Tạo quan hệ mới gồm các thuộc tính phụ thuộc bắc cầu vào thuộc tính khóa, lấy thuộc tính bắc cầu làm khóa chính của quan hệ mới.',
          'Giữ lại trong quan hệ cũ các thuộc tính phụ thuộc trực tiếp vào khóa chính.',
          'Thuộc tính bắc cầu (khóa ngoại liên kết) nằm ở cả hai quan hệ.'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ 1, 2, 3 (slide tr.26–28) – Đưa về 3NF và xác định dạng chuẩn cao nhất',
        prompt: '- **VD1 (tr.26)**: `NV`($\\underline{\\text{MaNV}}$, `MaPhong`, `TenNV`, `Gioitinh`, `Diachi`, `TenPhong`) với $\\text{MaNV} \\to \\text{MaPhong}, \\text{TenNV}, \\text{Gioitinh}, \\text{Diachi}$ và $\\text{MaPhong} \\to \\text{TenPhong}$. Đưa về 3NF.\n- **VD2 (tr.27)**: $R = ABCDE$, $F = \\{AB \\to CE,\\; E \\to AB,\\; C \\to D\\}$. Xác định dạng chuẩn cao nhất.\n- **VD3 (tr.28)**: $R = ABCD$, $F = \\{A \\to C,\\; D \\to B,\\; C \\to ABD\\}$. Xác định dạng chuẩn cao nhất.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- **VD1 (tr.26)**: Tách phụ thuộc bắc cầu $\\text{MaNV} \\to \\text{MaPhong} \\to \\text{TenPhong}$, giữ `MaPhong` ở cả hai bảng:\n  1. `NV`($\\underline{\\text{MaNV}}$, `TenNV`, `Gioitinh`, `Diachi`, `MaPhong`).\n  2. `PHONG`($\\underline{\\text{MaPhong}}$, `TenPhong`).\n- **VD2 (tr.27)**:\n  - $TN = \\emptyset$, $TG = \\{A, B, C, E\\}$ ($D$ chỉ ở vế phải). Thử $E^+ = EABCD = U$ và $(AB)^+ = ABCDE = U$ (còn $A^+ = A, B^+ = B, C^+ = CD$). Khóa: $E, AB$.\n  - TT khóa: $A, B, E$; TT không khóa: $C, D$.\n  - Kiểm tra 2NF: tập con thực sự của khóa $AB$ là $A, B$ có $A^+ = A, B^+ = B$ đều không chứa $C, D$ $\\Rightarrow$ đạt **2NF**.\n  - Kiểm tra 3NF: xét $C \\to D$, $C$ không là siêu khóa và $D$ không là TT khóa $\\Rightarrow$ vi phạm 3NF. Dạng chuẩn cao nhất: **2NF**.\n- **VD3 (tr.28)**:\n  - $TN = \\emptyset$, $TG = \\{A, C, D\\}$ ($B$ chỉ ở vế phải). $A^+ = ACBD = U$, $C^+ = CABD = U$, $D^+ = BD$. Khóa: $A, C$ (mỗi khóa 1 thuộc tính $\\Rightarrow$ đạt **2NF**).\n  - TT khóa: $A, C$; TT không khóa: $B, D$.\n  - Xét $D \\to B$: $D$ không là siêu khóa, $B$ là TT không khóa $\\Rightarrow$ vi phạm 3NF. Dạng chuẩn cao nhất: **2NF**.'
      }
    ]
  },
  {
    id: 'ch4-ch-bcnf',
    title: 'Dạng chuẩn BCNF và xác định dạng chuẩn cao nhất',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.29–37',
    outside: false,
    blocks: [
      {
        t: 'def',
        term: 'Dạng chuẩn BCNF (Boyce-Codd Normal Form)',
        text: '- **Định nghĩa 1 (slide tr.29)**: Lược đồ quan hệ $R$ ở **BCNF** nếu ở dạng 3NF và không có thuộc tính khóa phụ thuộc hàm vào thuộc tính không khóa.\n- **Định nghĩa 2 (chuẩn tổng quát)**: Lược đồ quan hệ $R$ đạt **BCNF** nếu với mọi PTH $X \\to A \\in F^+$ với $A \\notin X$ thì ==$X$ bắt buộc phải là một siêu khóa==.'
      },
      {
        t: 'note',
        text: 'Lưu ý quan trọng về ĐN1 và ĐN2 của BCNF: Khi kiểm tra bài tập, luôn ưu tiên dùng **ĐN2** ($X$ phải là siêu khóa với mọi $X \\to A$ không tầm thường). Lý do: có những trường hợp như $R(C,S,Z)$ với $F = \\{CS \\to Z,\\; Z \\to C\\}$, bản thân $Z$ là thành phần của khóa $SZ$ (tức $Z$ cũng là thuộc tính khóa, không phải "thuộc tính không khóa"), nhưng $Z$ vẫn **không phải siêu khóa**, nên theo ĐN2 $R$ vẫn vi phạm BCNF.'
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.30) – HOCVIEN có đạt BCNF không?',
        prompt: 'Cho `HOCVIEN`($\\underline{\\text{MAHV}}$, `BIENLAI`, $\\underline{\\text{KHOAHOC}}$) với $F = \\{\\text{MAHV}, \\text{KHOAHOC} \\to \\text{BIENLAI};\\; \\text{BIENLAI} \\to \\text{KHOAHOC}\\}$. Slide ghi có khóa $\\{\\text{MAHV}, \\text{KHOAHOC}\\}$. Quan hệ trên có đạt BCNF không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- Kiểm tra đầy đủ các khóa: ngoài $\\{\\text{MAHV}, \\text{KHOAHOC}\\}$, ta còn có $(\\text{MAHV}, \\text{BIENLAI})^+ = \\{\\text{MAHV}, \\text{BIENLAI}, \\text{KHOAHOC}\\} = U$, nên lược đồ có **2 khóa** là $\\{\\text{MAHV}, \\text{KHOAHOC}\\}$ và $\\{\\text{MAHV}, \\text{BIENLAI}\\}$ (mọi thuộc tính đều là thuộc tính khóa $\\Rightarrow$ đạt 3NF).\n- Kiểm tra BCNF theo ĐN2: xét PTH $\\text{BIENLAI} \\to \\text{KHOAHOC}$. Bao đóng $\\text{BIENLAI}^+ = \\{\\text{BIENLAI}, \\text{KHOAHOC}\\} \\neq U$, tức vế trái `BIENLAI` **không phải siêu khóa**.\n- **Kết luận**: **Không đạt BCNF** (dạng chuẩn cao nhất là **3NF**).'
      },
      {
        t: 'steps',
        title: 'Thuật toán kiểm tra dạng chuẩn BCNF (slide tr.31)',
        items: [
          'Bước 1: Tìm tất cả các khóa của quan hệ $R$.',
          'Bước 2: Từ tập PTH $F$ tạo tập PTH tương đương $F\'$ có vế phải 1 thuộc tính (loại $A \\in X$).',
          'Bước 3: Nếu mọi PTH $X \\to A \\in F\'$ đều có $X$ là **siêu khóa** thì $R$ đạt **BCNF**; ngược lại ($\\exists X \\to A$ mà $X$ không phải siêu khóa) thì $R$ không đạt BCNF. *(Chú ý tr.31: mọi PTH đều có vế trái là khóa/siêu khóa thì đạt BCNF.)*'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ 1 & 2 (slide tr.32–33) – Kiểm tra BCNF',
        prompt: '- **VD1 (tr.32)**: Cho $R = \\{C, S, Z\\}$, $F = \\{CS \\to Z,\\; Z \\to C\\}$. Xác định dạng chuẩn cao nhất.\n- **VD2 (tr.33)**: Cho $U = \\{A,B,C,D,E,I\\}$ và $F = \\{ACD \\to EBI,\\; CE \\to AD\\}$. Hỏi có đạt chuẩn BCNF hay không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- **VD1 (tr.32)**:\n  - $TN = \\{S\\}$, $TG = \\{C, Z\\}$, $S^+ = S$. Thử $(CS)^+ = CSZ = U$ và $(SZ)^+ = SZC = U$. Vậy $R$ có 2 khóa $CS$ và $SZ$ $\\Rightarrow$ mọi thuộc tính đều là TT khóa $\\Rightarrow$ đạt **3NF**.\n  - Xét $Z \\to C$: $Z^+ = ZC \\neq CSZ$, $Z$ không là siêu khóa $\\Rightarrow$ không đạt BCNF. Dạng chuẩn cao nhất: **3NF**.\n- **VD2 (tr.33)**:\n  - $TN = \\{C\\}$ ($C$ chỉ ở vế trái), $TG = \\{A, D, E\\}$ ($B, I$ chỉ ở vế phải). Thử $C^+ = C$, $(CE)^+ = CEADBI = U$ (dùng $CE \\to AD$ rồi $ACD \\to EBI$), $(ACD)^+ = ABCDEI = U$ (còn $(AC)^+ = AC, (CD)^+ = CD$). Vậy hai khóa là $CE$ và $ACD$.\n  - Xét các PTH trong $F\'$: tất cả đều có vế trái là $ACD$ hoặc $CE$, mà cả hai đều là khóa (siêu khóa) $\\Rightarrow$ **$R$ đạt chuẩn BCNF**.'
      },
      {
        t: 'steps',
        title: 'Cách đưa về dạng BCNF (slide tr.34)',
        items: [
          'Loại bỏ các thuộc tính bị phụ thuộc vi phạm khỏi quan hệ gốc và tạo thành một quan hệ riêng có khóa chính là vế trái gây ra phụ thuộc vi phạm (trên slide 34 minh họa: $R(\\underline{A_1, A_2}, A_3, A_4, A_5)$ có $A_4 \\to A_2$ tách thành $R_1(\\underline{A_4}, A_2)$ và $R(\\underline{A_1, A_4}, A_3, A_5)$).'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.35) – Đưa lược đồ Hoc về BCNF',
        prompt: 'Cho `Hoc`($\\underline{\\text{MaSV}, \\text{MaMon}}$, `Diem`, `MaGV`) với $\\{\\text{MaSV}, \\text{MaMon}\\} \\to \\text{Diem}, \\text{MaGV}$ và $\\text{MaGV} \\to \\text{MaMon}$. Kết quả đưa về BCNF là gì?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- Các khóa của `Hoc` là $\\{\\text{MaSV}, \\text{MaMon}\\}$ và $\\{\\text{MaSV}, \\text{MaGV}\\}$. Mọi thuộc tính trừ `Diem` đều là thuộc tính khóa, `Diem` phụ thuộc đầy đủ vào khóa nên `Hoc` đạt 3NF.\n- PTH $\\text{MaGV} \\to \\text{MaMon}$ vi phạm BCNF vì `MaGV` không là siêu khóa.\n- Tách bỏ `MaMon` khỏi bảng gốc cùng `MaGV` tạo 2 quan hệ đều đạt BCNF:\n  1. `DAY`($\\underline{\\text{MaGV}}$, `MaMon`).\n  2. `HOC`($\\underline{\\text{MaSV}, \\text{MaGV}}$, `Diem`).'
      },
      {
        t: 'steps',
        title: 'Thuật toán xác định dạng chuẩn cao nhất (slide tr.37)',
        items: [
          'Bước 1: Tìm tất cả các khóa của lược đồ $R$.',
          'Bước 2: Kiểm tra chuẩn **BCNF**: nếu đúng thì kết luận $R$ ở **BCNF** và kết thúc; ngược lại sang Bước 3.',
          'Bước 3: Kiểm tra chuẩn **3NF**: nếu đúng thì kết luận $R$ ở **3NF** và kết thúc; ngược lại sang Bước 4.',
          'Bước 4: Kiểm tra chuẩn **2NF**: nếu đúng thì kết luận $R$ ở **2NF** và kết thúc; ngược lại kết luận $R$ đạt **1NF**.'
        ]
      },
      {
        t: 'tip',
        title: 'Mẹo làm bài',
        text: '**Xác định nhanh dạng chuẩn cao nhất (BCNF $\\to$ 3NF $\\to$ 2NF $\\to$ 1NF):**\n1. Tìm tất cả các khóa bằng $TN/TG$ $\\to$ liệt kê **TT khóa** và **TT không khóa**. Tách vế phải $F$ thành $F\'$ (1 TT mỗi vế phải).\n2. Kiểm tra **BCNF trước**: mọi $X \\to A \\in F\'$ đều có $X$ là siêu khóa $\\Rightarrow$ chốt **BCNF** ngay.\n3. Nếu có PTH vi phạm BCNF, kiểm tra **3NF**: *mỗi* PTH vi phạm BCNF đó có $A$ là **TT khóa** không? (Mẹo tắt: nếu **không có TT không khóa** thì auto đạt ít nhất **3NF**!) Đạt hết $\\Rightarrow$ chốt **3NF**.\n4. Nếu vi phạm 3NF, kiểm tra **2NF**: nếu **mọi khóa đều chỉ có 1 TT** thì auto chốt **2NF**! Ngược lại (có khóa $\\ge 2$ TT), thử bao đóng các tập con thực sự $S \\subset K$: nếu không có $S^+$ nào chứa TT không khóa $\\Rightarrow$ **2NF**; nếu có $\\Rightarrow$ **1NF**.'
      },
      {
        t: 'tip',
        title: 'Mẹo làm bài',
        text: '**Phân biệt 3NF và BCNF không bao giờ nhầm:**\n- Cả 3NF và BCNF đều xét mọi $X \\to A$ ($A \\notin X$): **BCNF** chỉ có 1 cửa duy nhất (*$X$ là siêu khóa*), còn **3NF** cho thêm 1 ngoại lệ (*hoặc $A$ là thuộc tính khóa*).\n- Do đó, một lược đồ đạt **3NF nhưng không đạt BCNF** khi và chỉ khi ==vẫn còn ít nhất một PTH $X \\to A$ mà $X$ không là siêu khóa nhưng $A$ lại là thuộc tính khóa== (điển hình là $D \\to B$ ở tr.24, `BIENLAI -> KHOAHOC` ở tr.30, $Z \\to C$ ở tr.32).\n- Đừng nhầm với câu hỏi đề: *"Lược đồ đạt chuẩn nào?"* (nếu đạt 3NF thì cũng đạt 2NF và 1NF) vs *"Dạng chuẩn cao nhất là gì?"*.'
      }
    ]
  },
  {
    id: 'ch4-ch-ptach-pth',
    title: 'Phép tách lược đồ và bảo toàn phụ thuộc hàm',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.38–44',
    outside: false,
    blocks: [
      {
        t: 'p',
        text: 'Trong phân rã lược đồ quan hệ (slide tr.38), chuẩn hóa là việc tách một lược đồ quan hệ thành các lược đồ con về các dạng chuẩn cao sao cho thỏa hai yêu cầu cốt lõi: ==bảo toàn sự phụ thuộc hàm== và ==không mất mát thông tin==.'
      },
      {
        t: 'def',
        term: 'Phép tách lược đồ quan hệ (slide tr.39)',
        text: 'Phép tách lược đồ quan hệ $R = \\{A_1, A_2, \\dots, A_n\\}$ là việc thay thế $R$ bằng tập các lược đồ con $D = \\{R_1, R_2, \\dots, R_k\\}$ thỏa:\n- $R_i \\subset R$ với $i = 1, \\dots, k$ ($R_i$ là các lược đồ con),\n- $R = R_1 \\cup R_2 \\cup \\dots \\cup R_k$.\n*(Không đòi hỏi các $R_i$ phải rời nhau hoàn toàn; ngược lại chúng thường có thuộc tính chung để kết nối lại bảng gốc.)*'
      },
      {
        t: 'table',
        caption: 'Ví dụ minh họa phép tách S(MaCTy, ĐC, MH, GIA) thành S1(MaCTy, ĐC) và S2(MaCTy, MH, GIA) (slide tr.40)',
        head: ['Bảng S (gốc): MaCTy', 'ĐC', 'MH', 'GIA'],
        rows: [
          ['1', 'Thanh Xuân', '1', '10000'],
          ['1', 'Thanh Xuân', '2', '15000'],
          ['2', 'Đống Đa', '1', '12000'],
          ['2', 'Đống Đa', '2', '16000']
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.40) – Tách bảng S(MaCTy, ĐC, MH, GIA)',
        prompt: 'Cho lược đồ $S(\\underline{\\text{MaCTy}}, \\text{ĐC}, \\underline{\\text{MH}}, \\text{GIA})$ với $F = \\{\\text{MaCTy} \\to \\text{ĐC};\\; \\text{MaCTy}, \\text{MH} \\to \\text{GIA}\\}$. Sau khi tách thành $S_1(\\underline{\\text{MaCTy}}, \\text{ĐC})$ và $S_2(\\underline{\\text{MaCTy}, \\text{MH}}, \\text{GIA})$, phép tách này có đặc điểm gì?',
        solution: '- Bảng $S$ gốc chỉ đạt **1NF** vì `ĐC` phụ thuộc bộ phận khóa `MaCTy` (nên lặp lại "Thanh Xuân", "Đống Đa" nhiều lần).\n- Tách thành $S_1 = \\{\\text{MaCTy}, \\text{ĐC}\\}$ (2 dòng: `(1, Thanh Xuân)`, `(2, Đống Đa)`) và $S_2 = \\{\\text{MaCTy}, \\text{MH}, \\text{GIA}\\}$ (4 dòng): cả hai bảng con đều đạt **BCNF**, nối lại qua `MaCTy` ra đúng 4 dòng ban đầu (**không mất mát thông tin**) và giữ đủ cả hai PTH (**bảo toàn PTH**).'
      },
      {
        t: 'def',
        term: 'Hình chiếu của tập PTH $F$ trên $R_i$ (slide tr.41)',
        text: 'Cho tập PTH $F$ trên $R$ và phép tách $D = (R_1, R_2, \\dots, R_m)$. **Phép chiếu (hình chiếu) của $F$ trên $R_i$**, ký hiệu $\\Pi_{R_i}(F)$, là tập tất cả các PTH nằm trong $F^+$ mà toàn bộ thuộc tính ở cả hai vế đều nằm trong $R_i$:\n$$\\Pi_{R_i}(F) = \\{ X \\to Y \\in F^+ \\mid X \\cup Y \\subseteq R_i \\}$$\n*(Chú ý: slide tr.41 gõ nhầm thành $X \\cup Y \\in R_i$; hiểu chính xác là $X \\cup Y \\subseteq R_i$, và phải lấy từ bao đóng $F^+$, không chỉ nhặt từ $F$ ban đầu.)*'
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.42) – Tính hình chiếu của F trên R1 và R2',
        prompt: 'Cho lược đồ quan hệ $R\\{A, B, C\\}$ và $F = \\{A \\to B,\\; B \\to C,\\; C \\to A\\}$. Phép tách $D = \\{R_1, R_2\\}$ tách $R$ thành $R_1\\{A, B\\}$ và $R_2\\{B, C\\}$. Xác định hình chiếu của $F$ trên $R_1$ và $R_2$ (tính $F_1, F_2$).',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\nTính bao đóng của các tập con khác rỗng của từng $R_i$ theo $F$ rồi giao với $R_i$:\n- **Trên $R_1 = \\{A, B\\}$**:\n  - $A^+_F = ABC \\Rightarrow A^+_F \\cap R_1 = AB$ cho PTH $A \\to B$.\n  - $B^+_F = BCA \\Rightarrow B^+_F \\cap R_1 = AB$ cho PTH $B \\to A$ (vì từ $B \\to C$ và $C \\to A$ suy ra $B \\to A \\in F^+$!).\n  - Vậy tập PTH không tầm thường trên $R_1$ là **$F_1 = \\{A \\to B,\\; B \\to A\\}$**.\n- **Trên $R_2 = \\{B, C\\}$**:\n  - $B^+_F = BCA \\Rightarrow B^+_F \\cap R_2 = BC$ cho PTH $B \\to C$.\n  - $C^+_F = CAB \\Rightarrow C^+_F \\cap R_2 = BC$ cho PTH $C \\to B$ (vì $C \\to A, A \\to B \\Rightarrow C \\to B \\in F^+$).\n  - Vậy tập PTH không tầm thường trên $R_2$ là **$F_2 = \\{B \\to C,\\; C \\to B\\}$**.\n*(Nhận xét thêm: $F_1 \\cup F_2 = \\{A \\to B, B \\to A, B \\to C, C \\to B\\}$ suy ra được $C \\to A$, nên phép tách này **bảo toàn PTH** dù $C \\to A$ không nằm trọn trong riêng $R_1$ hay $R_2$!)*'
      },
      {
        t: 'def',
        term: 'Phép tách bảo toàn phụ thuộc hàm (slide tr.43)',
        text: 'Phép tách $D = (R_1, R_2, \\dots, R_m)$ gọi là **bảo toàn phụ thuộc hàm** đối với $F$ nếu hợp các phép chiếu của $F$ trên mỗi $R_i$ tương đương với $F$, tức là:\n$$\\left(\\bigcup_{i=1}^m \\Pi_{R_i}(F)\\right)^+ = F^+$$\n**Cách kiểm tra (nhận xét tr.43)**: đặt $G = \\bigcup_{i=1}^m \\Pi_{R_i}(F)$, kiểm tra xem mỗi PTH $X \\to Y \\in F$ có là thành viên của $G$ (tức $Y \\subseteq X^+_G$) hay không.'
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.44) – Kiểm tra phép tách bảo toàn PTH',
        prompt: 'Cho $R\\{A, B, C\\}$ và $F = \\{AB \\to C,\\; C \\to A\\}$. Phép tách $D = \\{R_1, R_2\\}$ với $R_1\\{B, C\\}$ và $R_2\\{A, C\\}$. Hỏi phép tách $D$ có bảo toàn phụ thuộc hàm không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. Tính hình chiếu trên từng lược đồ con:\n   - Trên $R_1 = \\{B, C\\}$: $B^+_F = B$, $C^+_F = CA$ ($C^+_F \\cap R_1 = C$), $(BC)^+_F = ABC$. Không có PTH không tầm thường nào chứa trọn trong $R_1 \\Rightarrow \\Pi_{R_1}(F)$ chỉ gồm PTH hiển nhiên ($F_1 = \\emptyset$).\n   - Trên $R_2 = \\{A, C\\}$: $A^+_F = A$, $C^+_F = CA \\subseteq R_2 \\Rightarrow F_2 = \\{C \\to A\\}$.\n2. Hợp các hình chiếu: $G = F_1 \\cup F_2 = \\{C \\to A\\}$.\n3. Kiểm tra thành viên với $AB \\to C \\in F$: tính $(AB)^+_G = AB$ (không chứa $C$!).\n- **Kết luận**: Mất PTH $AB \\to C$ nên phép tách $D$ **không bảo toàn phụ thuộc hàm**.'
      }
    ]
  }
);

DB.summary[DB.summary.length - 1].sections.push(
  {
    id: 'ch4-ch-ptach-tt',
    title: 'Phép tách – kết nối không mất mát thông tin',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.45–49',
    outside: false,
    blocks: [
      {
        t: 'def',
        term: 'Phép tách – kết nối không mất mát thông tin (slide tr.45)',
        text: 'Giả sử $R$ tách thành các lược đồ con $R_1, R_2, \\dots, R_k$ và $F$ là tập PTH trên $R$. Phép tách được gọi là **tách – kết nối không mất mát thông tin** đối với $F$ nếu với mọi quan hệ $r$ trên $R$ thỏa $F$ thì:\n$$r = \\Pi_{R_1}(r) * \\Pi_{R_2}(r) * \\dots * \\Pi_{R_k}(r)$$\ntức $r$ khôi phục lại được **đúng nguyên vẹn** (không sinh bộ giả, không thiếu bộ) từ phép kết nối tự nhiên của các hình chiếu trên các $R_i$.'
      },
      {
        t: 'steps',
        title: 'Thuật toán kiểm tra bảng $a_j / b_{ij}$ (slide tr.46–47)',
        items: [
          'Bước 1 – Lập bảng kích thước $(k+1)$ hàng $\\times$ $(n+1)$ cột: cột thứ $j$ ứng với thuộc tính $A_j$ của $R$, hàng thứ $i$ ứng với lược đồ con $R_i$. Tại ô $(i, j)$: điền $a_j$ nếu $A_j \\in R_i$, ngược lại điền $b_{ij}$.',
          'Bước 2 – Biến đổi bảng theo $F$: lần lượt xét từng PTH $(X \\to Y) \\in F$. Nếu tồn tại hai hay nhiều hàng mà giá trị ở **tất cả các cột thuộc $X$** đều bằng nhau thì đồng nhất giá trị ở **từng cột thuộc $Y$** của các hàng đó theo quy tắc: nếu trong các hàng đó đã có $a_j$ thì thay hết thành $a_j$; nếu không có $a_j$ thì thay hết bằng cùng một ký hiệu $b$ (nên chọn chỉ số hàng nhỏ nhất). **Lặp lại Bước 2 (kể cả lặp lại các PTH đã xét)** cho tới khi bảng không đổi nữa.',
          'Bước 3 – Kết luận: nếu xuất hiện **ít nhất một hàng gồm toàn bộ $a_1, a_2, \\dots, a_n$** thì phép tách ==không mất mát thông tin==; ngược lại là phép tách mất mát thông tin.'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ 1 (slide tr.48) – Kiểm tra không mất mát thông tin (MSNV, MaSoDA)',
        prompt: 'Cho $R = \\{\\text{MSNV}, \\text{TenNV}, \\text{MaSoDA}, \\text{TenDA}, \\text{DiadiemDA}, \\text{Sogio}\\}$,\n$F = \\{\\text{MSNV} \\to \\text{TenNV};\\; \\text{MaSoDA} \\to \\text{TenDA}, \\text{DiadiemDA};\\; \\text{MaSoDA}, \\text{MSNV} \\to \\text{Sogio}\\}$.\nKiểm tra phép tách thành $R_1 = \\{\\text{MSNV}, \\text{TenNV}\\}$, $R_2 = \\{\\text{MaSoDA}, \\text{TenDA}, \\text{DiadiemDA}\\}$, $R_3 = \\{\\text{MSNV}, \\text{MaSoDA}, \\text{Sogio}\\}$ có mất mát thông tin không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\nLập bảng 3 hàng $\\times$ 6 cột ứng với $(A_1..A_6) = (\\text{MSNV}, \\text{TenNV}, \\text{MaSoDA}, \\text{TenDA}, \\text{DiadiemDA}, \\text{Sogio})$:\n$$\\begin{array}{c|cccccc} & \\text{MSNV} & \\text{TenNV} & \\text{MaSoDA} & \\text{TenDA} & \\text{DiadiemDA} & \\text{Sogio} \\\\ \\hline R_1 & a_1 & a_2 & b_{13} & b_{14} & b_{15} & b_{16} \\\\ R_2 & b_{21} & b_{22} & a_3 & a_4 & a_5 & b_{26} \\\\ R_3 & a_1 & b_{32} & a_3 & b_{34} & b_{35} & a_6 \\end{array}$$\n1. Xét $\\text{MSNV} \\to \\text{TenNV}$: $R_1$ và $R_3$ cùng có $\\text{MSNV} = a_1$. Vì $R_1$ có $a_2$ nên đổi $b_{32}$ ở $R_3$ thành $a_2$.\n2. Xét $\\text{MaSoDA} \\to \\text{TenDA}, \\text{DiadiemDA}$: $R_2$ và $R_3$ cùng có $\\text{MaSoDA} = a_3$. Vì $R_2$ có $a_4, a_5$ nên đổi $b_{34}, b_{35}$ ở $R_3$ thành $a_4, a_5$.\nKhi đó hàng $R_3$ trở thành $(a_1, a_2, a_3, a_4, a_5, a_6)$ (toàn $a_j$) $\\Rightarrow$ **Phép tách không mất mát thông tin**.'
      },
      {
        t: 'example',
        title: 'Ví dụ 2 (slide tr.49) – Kiểm tra 5 bảng con R1..R5 trên R = ABCDE',
        prompt: 'Cho $R = ABCDE$ và $F = \\{A \\to C,\\; B \\to C,\\; C \\to D,\\; DE \\to C,\\; CE \\to A\\}$. Tách thành $R_1 = AD$, $R_2 = AB$, $R_3 = BE$, $R_4 = CDE$, $R_5 = AE$. Kiểm tra phép tách trên có mất mát thông tin không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n**Bảng khởi tạo:**\n$$\\begin{array}{c|ccccc} & A & B & C & D & E \\\\ \\hline R_1(AD) & a_1 & b_{12} & b_{13} & a_4 & b_{15} \\\\ R_2(AB) & a_1 & a_2 & b_{23} & b_{24} & b_{25} \\\\ R_3(BE) & b_{31} & a_2 & b_{33} & b_{34} & a_5 \\\\ R_4(CDE) & b_{41} & b_{42} & a_3 & a_4 & a_5 \\\\ R_5(AE) & a_1 & b_{52} & b_{53} & b_{54} & a_5 \\end{array}$$\n**Biến đổi theo từng PTH:**\n1. $A \\to C$: $R_1, R_2, R_5$ cùng $A = a_1 \\Rightarrow$ đồng nhất cột $C$ thành $b_{13}$ ($R_2, R_5$ đổi thành $b_{13}$).\n2. $B \\to C$: $R_2, R_3$ cùng $B = a_2 \\Rightarrow$ đồng nhất cột $C$ của $R_3$ thành $b_{13}$.\n3. $C \\to D$: $R_1, R_2, R_3, R_5$ cùng $C = b_{13}$, có $R_1$ mang $D = a_4 \\Rightarrow$ cột $D$ của $R_2, R_3, R_5$ đều thành $a_4$.\n4. $DE \\to C$: $R_3, R_4, R_5$ cùng $(D, E) = (a_4, a_5)$, có $R_4$ mang $C = a_3 \\Rightarrow$ đổi $b_{13}$ thành $a_3$ (tại $R_3, R_5$, và toàn bộ biến $b_{13}$ tương đương).\n5. $CE \\to A$: $R_3, R_4, R_5$ cùng $(C, E) = (a_3, a_5)$, có $R_5$ mang $A = a_1 \\Rightarrow$ đổi cột $A$ của $R_3, R_4$ thành $a_1$.\n**Bảng kết quả sau khi chạy xong:**\n$$\\begin{array}{c|ccccc} & A & B & C & D & E \\\\ \\hline R_1 & a_1 & b_{12} & a_3 & a_4 & b_{15} \\\\ R_2 & a_1 & a_2 & a_3 & a_4 & b_{25} \\\\ R_3 & a_1 & a_2 & a_3 & a_4 & a_5 \\\\ R_4 & a_1 & b_{42} & a_3 & a_4 & a_5 \\\\ R_5 & a_1 & b_{52} & a_3 & a_4 & a_5 \\end{array}$$\nHàng $R_3$ chứa toàn $(a_1, a_2, a_3, a_4, a_5)$ $\\Rightarrow$ **Phép tách không mất mát thông tin**.'
      },
      {
        t: 'tip',
        title: 'Mẹo làm bài',
        text: '**1. Kiểm tra nhanh tách ĐÚNG 2 BẢNG $(R_1, R_2)$ không mất mát thông tin:**\nKhông cần kẻ bảng $a_j / b_{ij}$! Chỉ cần tính bao đóng phần giao $(R_1 \\cap R_2)^+$ theo $F$: phép tách không mất mát thông tin khi và chỉ khi ==$R_1 \\cap R_2 \\to R_1$ hoặc $R_1 \\cap R_2 \\to R_2$== (tức $(R_1 \\cap R_2)^+$ chứa toàn bộ $R_1$ hoặc toàn bộ $R_2$).\n*VD: tách $R = \\{A,B,C\\}$ thành $R_1 = BC, R_2 = AC$ với $C \\to A$: $R_1 \\cap R_2 = C$, $C^+ = AC = R_2 \\Rightarrow$ không mất mát TT.*\n\n**2. Mẹo điền & biến đổi bảng $a_j / b_{ij}$ cho $\\ge 3$ bảng:**\n- Nguyên tắc vàng: **không bao giờ** đổi $a_j$ thành $b$; hễ có $a_j$ ở nhóm hàng giống nhau thì ép cả nhóm thành $a_j$.\n- Khi hợp nhất các ký hiệu $b$ chưa có $a_j$, giữ ký hiệu $b$ có chỉ số hàng nhỏ nhất và thay toàn bộ các ô đang mang $b$ cũ bằng ký hiệu mới đó (như $b_{13}$ ở VD2).\n- Khi thấy **1 hàng nào đó vừa đủ $a_1, a_2, \\dots, a_n$** thì dừng luôn và kết luận không mất mát TT.'
      }
    ]
  },
  {
    id: 'ch4-ch-phanra',
    title: 'Thuật toán phân rã BCNF và tổng hợp 3NF',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.50–54',
    outside: false,
    blocks: [
      {
        t: 'steps',
        title: 'Thuật toán phân rã thành BCNF (slide tr.50)',
        items: [
          'Khởi tạo danh sách kết quả $D = \\{R\\}$.',
          'Với một lược đồ $S \\in D$ chưa đạt BCNF, chọn một PTH $X \\to A$ ($A \\notin X$, suy ra trên $S$ từ $\\Pi_S(F)$) vi phạm BCNF (tức $X$ không chứa khóa của $S$).',
          'Thay thế $S$ trong $D$ bằng hai lược đồ con: $S_1 = XA$ (hoặc gom $X \\cup (X^+ \\cap S)$ nếu $X$ xác định nhiều thuộc tính trong $S$) và $S_2 = S \\setminus \\{A\\}$.',
          'Lặp lại bước 2–3 cho đến khi mọi lược đồ trong $D$ đều đạt BCNF.'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.51) – Phân rã R = {C, S, Z} về BCNF',
        prompt: 'Cho $R = \\{C, S, Z\\}$ và $F = \\{CS \\to Z,\\; Z \\to C\\}$. Tìm dạng chuẩn cao nhất của lược đồ. Nếu $R$ chưa là BCNF thì tách $R$ thành các lược đồ đạt chuẩn BCNF.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. **Dạng chuẩn cao nhất**:\n   - Các khóa của $R$ là $CS$ và $SZ$ (mọi thuộc tính đều là TT khóa $\\Rightarrow$ đạt 3NF).\n   - PTH $Z \\to C$ có vế trái $Z$ không là siêu khóa ($Z^+ = ZC \\neq CSZ$) $\\Rightarrow$ vi phạm BCNF. Vậy dạng chuẩn cao nhất là **3NF**.\n2. **Phân rã về BCNF**:\n   - Chọn PTH vi phạm $Z \\to C$.\n   - Tách $R$ thành: $S_1 = ZC$ và $S_2 = CSZ \\setminus \\{C\\} = ZS$.\n   - Kiểm tra lại: $S_1(Z, C)$ có PTH $Z \\to C$ (khóa $Z$) đạt **BCNF**; $S_2(Z, S)$ không có PTH không tầm thường nên đạt **BCNF**.\n- **Kết quả**: $D = \\{R_1(C, Z),\\; R_2(S, Z)\\}$. *(Chú ý: phép tách này không mất mát TT vì $R_1 \\cap R_2 = Z \\to R_1$, nhưng **làm mất PTH $CS \\to Z$**!)*'
      },
      {
        t: 'steps',
        title: 'Thuật toán tổng hợp thành 3NF (slide tr.52–53)',
        items: [
          'Bước 1: Tìm phủ tối thiểu $F_{tt}$ của $F$.',
          'Bước 2: Nếu có một PTH nào của $F_{tt}$ chứa tất cả các thuộc tính của $R$ thì kết quả phép tách chính là $R$ ($R$ không thể tách được).',
          'Bước 3: Ngược lại, với mỗi vế trái $X$ xuất hiện trong $F_{tt}$, tạo một lược đồ con trong $D$ có tập thuộc tính $X \\cup \\{A_1, A_2, \\dots, A_k\\}$, trong đó $X \\to A_1, \\dots, X \\to A_k$ là tất cả các PTH có vế trái $X$ trong $F_{tt}$ ($X$ sẽ là khóa của lược đồ con này). *(Nếu có lược đồ là tập con của lược đồ khác thì loại bỏ lược đồ con nhỏ hơn.)*',
          'Bước 4: Kiểm tra xem trong $D$ đã có lược đồ con nào chứa trọn một khóa $K$ của $R$ chưa: nếu có thì kết thúc; ngược lại, bổ sung thêm một lược đồ con chỉ chứa các thuộc tính tạo nên một khóa $K$ của $R$.'
        ]
      },
      {
        t: 'example',
        title: 'Ví dụ (slide tr.54) – Tách R = ABC về 3NF bảo toàn thông tin và bảo toàn PTH',
        prompt: 'Cho lược đồ $R = ABC$ và $F = \\{A \\to B,\\; B \\to C,\\; AB \\to C\\}$. Xác định dạng chuẩn cao nhất? Tách $R$ về dạng 3NF vừa bảo toàn thông tin vừa bảo toàn PTH.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. **Dạng chuẩn cao nhất**:\n   - $TN = \\{A\\}$, $A^+ = ABC = U \\Rightarrow$ khóa duy nhất là $A$ (1 thuộc tính $\\Rightarrow$ đạt 2NF).\n   - Thuộc tính không khóa: $B, C$. PTH $B \\to C$ vi phạm 3NF ($B$ không là siêu khóa, $C$ không là TT khóa).\n   - Vậy dạng chuẩn cao nhất của $R$ là **2NF**.\n2. **Tách về 3NF theo thuật toán tổng hợp**:\n   - Tìm phủ tối thiểu $F_{tt}$: trong $AB \\to C$, bỏ $B$ được $A^+ = ABC$ chứa $C$ nên rút thành $A \\to C$; mà $A \\to B$ và $B \\to C$ đã suy ra $A \\to C$ nên loại $A \\to C$. Thu được $F_{tt} = \\{A \\to B,\\; B \\to C\\}$.\n   - Không có PTH nào trong $F_{tt}$ chứa cả 3 thuộc tính $A, B, C$.\n   - Tạo lược đồ theo từng vế trái: $R_1 = AB$ (từ $A \\to B$) và $R_2 = BC$ (từ $B \\to C$).\n   - Kiểm tra khóa của $R$: $R_1 = AB$ đã chứa khóa $K = A$ của $R$ $\\Rightarrow$ không cần thêm lược đồ.\n- **Kết quả**: $D = \\{R_1(A, B),\\; R_2(B, C)\\}$ (đều đạt 3NF/BCNF, không mất TT vì $R_1 \\cap R_2 = B \\to BC$, và bảo toàn PTH vì giữ nguyên $F_{tt}$).'
      },
      {
        t: 'tip',
        title: 'Mẹo làm bài',
        text: '**So sánh Phân rã BCNF vs Tổng hợp 3NF (câu hỏi lý thuyết rất hay ra):**\n- **Phân rã BCNF** (chia trên xuống từ PTH vi phạm): luôn bảo đảm **không mất mát thông tin** và đạt **BCNF**, nhưng ==có thể làm mất PTH== (kinh điển: $R = CSZ$ với $CS \\to Z, Z \\to C$).\n- **Tổng hợp 3NF** (ghép từ phủ tối thiểu $F_{tt}$ + giữ khóa $K$): luôn đạt **đồng thời cả hai** — vừa **không mất mát thông tin** vừa ==bảo toàn PTH== — nhưng các bảng con chỉ bảo đảm đạt **3NF** (không nhất thiết đạt BCNF).\n- Mẹo nhớ cho trắc nghiệm: nếu đề hỏi *"Luôn tồn tại phép tách vừa bảo toàn TT vừa bảo toàn PTH ở dạng chuẩn nào?"* $\\to$ **3NF** (không phải BCNF!).'
      }
    ]
  },
  {
    id: 'ch4-ch-btvn',
    title: 'Bài tập về nhà (slide tr.55–56)',
    source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.55–56',
    outside: false,
    blocks: [
      {
        t: 'example',
        title: 'BTVN Bài 1 (slide tr.55) – Tìm khóa và dạng chuẩn cao nhất trên U = ABCDEHG',
        prompt: 'Cho $R = \\langle U, F \\rangle$ với $U = ABCDEHG$ và $F = \\{DE \\to G,\\; E \\to A,\\; H \\to C,\\; CG \\to H,\\; DG \\to EA,\\; D \\to B\\}$.\na. Xác định khóa của lược đồ quan hệ trên.\nb. Xác định dạng chuẩn cao nhất của lược đồ quan hệ trên.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n**a. Xác định khóa (dùng $TN/TG$):**\n- $TN = \\{D\\}$ ($D$ chỉ ở vế trái; không có thuộc tính vắng mặt); $TG = \\{C, E, H, G\\}$ ($A, B$ chỉ ở vế phải nên loại).\n- $D^+ = BD \\neq U$. Xét ghép tập con của $TG$:\n  - Cỡ 1: $(CD)^+ = BCD$, $(DE)^+ = ABDEG$, $(DH)^+ = BCDH$, $(DG)^+ = ABDEG$ (đều $\\neq U$).\n  - Cỡ 2: $(CDE)^+ = ABCDEHG = U$; $(CDG)^+ = ABCDEHG = U$; $(DEH)^+ = ABCDEHG = U$; $(DHG)^+ = ABCDEHG = U$; $(CDH)^+ = BCDH \\neq U$; $(DEG)^+ = ABDEG \\neq U$.\n  - Mọi tập con cỡ $\\ge 3$ của $TG$ đều chứa ít nhất một trong các cặp $\\{CE, CG, EH, HG\\}$ nên không tối tiểu.\n- **4 khóa của $R$**: $CDE,\\; DEH,\\; CDG,\\; DHG$.\n\n**b. Dạng chuẩn cao nhất:**\n- Thuộc tính khóa: $C, D, E, G, H$; **thuộc tính không khóa: $A, B$**.\n- Xét tập con thực sự $D$ của khóa $CDE$: $D^+ = BD$ chứa thuộc tính không khóa $B$ (hoặc xét $E \\subset CDE$: $E^+ = EA$ chứa thuộc tính không khóa $A$).\n- Vì tồn tại phụ thuộc bộ phận vào khóa $\\Rightarrow$ $R$ **không đạt 2NF**. Dạng chuẩn cao nhất là **1NF**.'
      },
      {
        t: 'example',
        title: 'BTVN Bài 2 (slide tr.55) – Dạng chuẩn cao nhất trên U = ABCDEF',
        prompt: 'Xác định dạng chuẩn cao nhất của lược đồ quan hệ với tập thuộc tính $ABCDEF$ và tập PTH $\\{AB \\to C,\\; C \\to B,\\; ABD \\to E,\\; F \\to A\\}$.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. Tìm khóa: $TN = \\{D, F\\}$ ($D, F$ chỉ ở vế trái), $TG = \\{A, B, C\\}$ ($E$ chỉ ở vế phải).\n   - $(DF)^+ = ADF \\neq U$.\n   - Ghép 1 thuộc tính của $TG$: $(ADF)^+ = ADF \\neq U$; $(BDF)^+ = ABCDEF = U$; $(CDF)^+ = ABCDEF = U$.\n   - Các khóa của lược đồ là **$BDF$** và **$CDF$**.\n2. Thuộc tính khóa: $B, C, D, F$; **thuộc tính không khóa: $A, E$**.\n3. Kiểm tra 2NF: lấy tập con thực sự $F$ của khóa $BDF$, ta có $F^+ = AF$ chứa thuộc tính không khóa $A$ ($F \\to A$ phụ thuộc bộ phận vào khóa).\n- **Kết luận**: Vi phạm 2NF, dạng chuẩn cao nhất là **1NF**.'
      },
      {
        t: 'example',
        title: 'BTVN Bài 3 (slide tr.55) – Kiểm tra 2NF và 3NF của W = <R, F>',
        prompt: 'Cho $W = \\langle R, F \\rangle$, $R = \\{A, B, C, D\\}$, $F = \\{B \\to D,\\; A \\to C,\\; C \\to ABD\\}$. Hỏi $W$ có là 2NF, 3NF không?',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n- Tìm khóa: $A^+ = ACBD = R$ và $C^+ = CABD = R$ (còn $B^+ = BD, D^+ = D$). Vậy $W$ có 2 khóa là **$A$** và **$C$**.\n- **Kiểm tra 2NF**: Mọi khóa đều chỉ có 1 thuộc tính $\\Rightarrow$ **$W$ đạt 2NF**.\n- **Kiểm tra 3NF**: Thuộc tính không khóa là $B, D$. PTH $B \\to D$ có vế trái $B$ không là siêu khóa và vế phải $D$ không là thuộc tính khóa $\\Rightarrow$ **$W$ không đạt 3NF**.'
      },
      {
        t: 'example',
        title: 'BTVN Bài 4 (slide tr.56) – Chứng minh phép tách không mất TT và ở dạng 3NF (BOISQD)',
        prompt: 'Cho lược đồ $R = (BOISQD)$ và $F = \\{S \\to D,\\; I \\to B,\\; IS \\to Q,\\; B \\to O\\}$.\na. Chứng tỏ rằng phép tách $R = (SD,\\; IB,\\; ISQ,\\; BO)$ là phép tách không mất mát thông tin.\nb. Chứng tỏ phép tách trên là ở dạng 3NF.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n**a. Chứng minh không mất mát thông tin (bảng $a_j / b_{ij}$ theo thứ tự cột $B, O, I, S, Q, D$):**\n$$\\begin{array}{c|cccccc} & B & O & I & S & Q & D \\\\ \\hline R_1(SD) & b_{11} & b_{12} & b_{13} & a_4 & b_{15} & a_6 \\\\ R_2(IB) & a_1 & b_{22} & a_3 & b_{24} & b_{25} & b_{26} \\\\ R_3(ISQ) & b_{31} & b_{32} & a_3 & a_4 & a_5 & b_{36} \\\\ R_4(BO) & a_1 & a_2 & b_{43} & b_{44} & b_{45} & b_{46} \\end{array}$$\n- Dùng $S \\to D$ ($R_1, R_3$ cùng $S = a_4$): $R_3$ nhận $D = a_6$.\n- Dùng $I \\to B$ ($R_2, R_3$ cùng $I = a_3$): $R_3$ nhận $B = a_1$.\n- Dùng $B \\to O$ ($R_2, R_3, R_4$ cùng $B = a_1$, $R_4$ có $O = a_2$): $R_2, R_3$ nhận $O = a_2$.\nKhi đó hàng $R_3$ thành $(a_1, a_2, a_3, a_4, a_5, a_6)$ (toàn $a_j$) $\\Rightarrow$ **Phép tách không mất mát thông tin**.\n\n**b. Chứng minh phép tách ở dạng 3NF:**\nXét từng lược đồ con cùng hình chiếu tập PTH tương ứng:\n- $R_1(S, D)$: PTH $S \\to D$, khóa là $S$ (siêu khóa) $\\Rightarrow$ đạt BCNF (nên đạt **3NF**).\n- $R_2(I, B)$: PTH $I \\to B$, khóa là $I$ (siêu khóa) $\\Rightarrow$ đạt BCNF (nên đạt **3NF**).\n- $R_3(I, S, Q)$: PTH $IS \\to Q$, khóa là $IS$ (siêu khóa) $\\Rightarrow$ đạt BCNF (nên đạt **3NF**).\n- $R_4(B, O)$: PTH $B \\to O$, khóa là $B$ (siêu khóa) $\\Rightarrow$ đạt BCNF (nên đạt **3NF**).\nVì mọi lược đồ con đều đạt 3NF (thậm chí BCNF) nên phép tách ở dạng **3NF**.'
      },
      {
        t: 'example',
        title: 'BTVN Bài 5 (slide tr.56) – Dạng chuẩn cao nhất của H = (ABCD, F)',
        prompt: 'Xác định dạng chuẩn cao nhất của lược đồ quan hệ $H = (U, F)$, $U = ABCD$, $F = \\{CD \\to B,\\; A \\to C,\\; B \\to ACD\\}$.',
        solution: '*(Lời giải tự làm, kiểm chứng bằng `fd.js`)*\n1. Tìm khóa: $TN = \\emptyset$, $TG = \\{A, B, C, D\\}$.\n   - $B^+ = BACD = U \\Rightarrow B$ là khóa.\n   - $(AD)^+ = ADCB = U$ (vì $A \\to C, CD \\to B$) $\\Rightarrow AD$ là khóa.\n   - $(CD)^+ = CDBA = U$ (vì $CD \\to B, B \\to ACD$) $\\Rightarrow CD$ là khóa.\n   (Còn $A^+ = AC, C^+ = C, D^+ = D, (AC)^+ = AC$.) Vậy $H$ có 3 khóa: $B, AD, CD$.\n2. Mọi thuộc tính $A, B, C, D$ đều là **thuộc tính khóa** (không có thuộc tính không khóa) $\\Rightarrow$ $H$ đạt **3NF**.\n3. Kiểm tra BCNF: xét $A \\to C$, ta có $A^+ = AC \\neq ABCD$ nên $A$ không là siêu khóa $\\Rightarrow$ vi phạm BCNF.\n- **Kết luận**: Dạng chuẩn cao nhất của $H$ là **3NF**.'
      }
    ]
  }
);

DB.flashcards.push(
  { id: 'ch4-ch-fc-01', chapter: 'ch4', front: 'Chuẩn hóa lược đồ quan hệ là gì và nhằm 3 mục tiêu nào?', back: 'Là việc biến đổi lược đồ thành các tập nhỏ hơn để đưa bảng từ chuẩn thấp lên chuẩn cao hơn, nhằm:\n1. Tối thiểu việc lặp lại.\n2. Tránh dị thường thông tin (thêm, sửa, xóa).\n3. Giải quyết sự không rõ ràng, nhập nhằng trong suy diễn.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.3' },
  { id: 'ch4-ch-fc-02', chapter: 'ch4', front: 'Thuộc tính khóa là gì? Bẫy hay gặp trong trắc nghiệm?', back: '$A$ là **thuộc tính khóa** nếu $A$ là thành phần thuộc **một khóa nào đó** của $R$; ngược lại là thuộc tính không khóa.\nBẫy: không cần nằm trong *mọi* khóa và không tính thuộc tính thừa trong siêu khóa.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.5' },
  { id: 'ch4-ch-fc-03', chapter: 'ch4', front: 'Khi nào $Y$ được gọi là phụ thuộc hàm đầy đủ vào $X$?', back: 'Khi $X \\to Y \\in F^+$ ($X \\neq Y$) và với **mọi tập con thực sự** $X\' \\subset X$ ($X\' \\neq \\emptyset$) thì $X\' \\to Y \\notin F^+$.\n(Bỏ bớt bất kỳ thuộc tính nào của $X$ thì không suy ra $Y$ được nữa.)', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.6' },
  { id: 'ch4-ch-fc-04', chapter: 'ch4', front: 'Định nghĩa phụ thuộc bắc cầu của thuộc tính $A$ vào $X$ trên $R$?', back: 'Nếu $\\exists Y \\subset U$ sao cho $X \\to Y$ và $Y \\to A$ thuộc $F$ (hoặc $F^+$), nhưng $Y \\to X$ **không** thuộc $F$.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.6' },
  { id: 'ch4-ch-fc-05', chapter: 'ch4', front: 'Thứ tự bao hàm các dạng chuẩn và bẫy hỏi "đạt chuẩn" vs "cao nhất"?', back: 'Phân cấp: $\\text{BCNF} \\subset \\text{3NF} \\subset \\text{2NF} \\subset \\text{1NF}$.\nMột lược đồ đạt chuẩn cao hơn thì đương nhiên đạt mọi chuẩn thấp hơn (VD đạt 3NF thì cũng đạt 2NF và 1NF); chỉ khác khi đề hỏi **"dạng chuẩn cao nhất"**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.7' },
  { id: 'ch4-ch-fc-06', chapter: 'ch4', front: 'Quá trình chuẩn hóa qua các bậc 1NF $\\to$ 5NF; 4NF liên quan đến gì?', back: '- 1NF: bỏ đa trị; 2NF: bỏ PTH không đầy đủ; 3NF: bỏ PTH bắc cầu; BCNF: bỏ dư thừa PTH.\n- **4NF**: loại bỏ **phụ thuộc đa trị** (MVD); **5NF**: loại bỏ dư thừa phi chuẩn còn lại.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.36; Đề cương 2023 (mục 4.8)' },
  { id: 'ch4-ch-fc-07', chapter: 'ch4', front: 'Định nghĩa dạng chuẩn 1NF và quy ước mặc định khi làm bài?', back: '$R$ đạt **1NF** $\\iff$ mọi thuộc tính của $R$ đều **nguyên tố** và giá trị trên các bộ là **đơn trị**.\nQuy ước: nếu đề không nói gì thêm thì lược đồ đang xét mặc định đạt ít nhất **1NF**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.8' },
  { id: 'ch4-ch-fc-08', chapter: 'ch4', front: 'Nêu 3 dấu hiệu để kiểm tra một bảng có đạt 1NF không.', back: '1. Không có thuộc tính **đa trị**.\n2. Không có thuộc tính **phức hợp**.\n3. Không có **bộ giá trị trùng lặp**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.9' },
  { id: 'ch4-ch-fc-09', chapter: 'ch4', front: 'Cách đưa một quan hệ chưa ở 1NF về dạng chuẩn 1NF?', back: 'Bỏ nhóm thuộc tính lặp hoặc gộp ra khỏi quan hệ, chuyển nhóm đó thành **một quan hệ mới**, đồng thời giữ **thuộc tính khóa** tồn tại trong các quan hệ để liên kết.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.11' },
  { id: 'ch4-ch-fc-10', chapter: 'ch4', front: 'Định nghĩa dạng chuẩn 2NF?', back: '$R$ đạt **2NF** nếu $R$ đạt 1NF và tất cả các thuộc tính **không khóa** đều **phụ thuộc hàm đầy đủ vào khóa**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.13' },
  { id: 'ch4-ch-fc-11', chapter: 'ch4', front: 'Nêu 3 bước của thuật toán kiểm tra dạng chuẩn 2NF.', back: '1. Tìm tất cả các khóa của $R$.\n2. Với mỗi khóa $K$, tính bao đóng $S^+$ của mọi tập con thực sự khác rỗng $S \\subset K$.\n3. Nếu có $S^+$ chứa thuộc tính **không khóa** $\\Rightarrow$ không đạt 2NF; ngược lại đạt 2NF.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.15' },
  { id: 'ch4-ch-fc-12', chapter: 'ch4', front: 'Nhận xét giúp kết luận ngay 2NF không cần kiểm tra tập con?', back: 'Nếu **mọi khóa** của lược đồ quan hệ $R$ đều chỉ có **1 thuộc tính** thì $R$ chắc chắn đạt **2NF**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.15' },
  { id: 'ch4-ch-fc-13', chapter: 'ch4', front: 'Cách đưa lược đồ chưa ở 2NF về dạng chuẩn 2NF?', back: '1. Tách các thuộc tính không khóa phụ thuộc vào bộ phận khóa cùng bộ phận khóa đó vào một bảng mới (khóa là bộ phận khóa).\n2. Giữ lại các thuộc tính phụ thuộc hoàn toàn vào khóa cùng khóa ban đầu.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.18' },
  { id: 'ch4-ch-fc-14', chapter: 'ch4', front: 'Định nghĩa 1 của dạng chuẩn 3NF (theo phụ thuộc bắc cầu)?', back: '$R$ ở **3NF** nếu $R$ đạt 2NF và mọi thuộc tính không khóa đều **không phụ thuộc bắc cầu** vào một khóa bất kỳ của $R$.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.21' },
  { id: 'ch4-ch-fc-15', chapter: 'ch4', front: 'Định nghĩa 2 của dạng chuẩn 3NF (dùng để kiểm tra PTH)?', back: '$R$ ở **3NF** nếu với mọi PTH $X \\to A \\in F^+$ ($A \\notin X$) thì:\n- Hoặc $X$ là **siêu khóa**,\n- Hoặc $A$ là **thuộc tính khóa**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.21' },
  { id: 'ch4-ch-fc-16', chapter: 'ch4', front: 'Thuật toán 3 bước kiểm tra dạng chuẩn 3NF?', back: '1. Tìm tất cả các khóa của $R$.\n2. Tách vế phải $F$ thành tập tương đương $F\'$ có vế phải 1 thuộc tính ($A \\notin X$).\n3. Mọi $X \\to A \\in F\'$ đều có $X$ là siêu khóa hoặc $A$ là TT khóa $\\Rightarrow$ 3NF; ngược lại không đạt.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.23' },
  { id: 'ch4-ch-fc-17', chapter: 'ch4', front: 'Nhận xét giúp kết luận ngay một lược đồ đạt ít nhất 3NF?', back: 'Nếu lược đồ $R$ **không chứa thuộc tính không khóa** (mọi thuộc tính đều là thuộc tính khóa) thì $R$ chắc chắn đạt **3NF**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.23' },
  { id: 'ch4-ch-fc-18', chapter: 'ch4', front: 'Cách đưa một lược đồ từ 2NF về dạng chuẩn 3NF?', back: '1. Tạo quan hệ mới gồm các thuộc tính phụ thuộc bắc cầu vào khóa, lấy **thuộc tính bắc cầu làm khóa**.\n2. Giữ lại các thuộc tính phụ thuộc trực tiếp vào khóa.\n3. Thuộc tính bắc cầu nằm ở cả hai quan hệ.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.25' },
  { id: 'ch4-ch-fc-19', chapter: 'ch4', front: 'Phát biểu hai định nghĩa của dạng chuẩn BCNF (Boyce-Codd).', back: '- **ĐN1**: Ở dạng 3NF và không có thuộc tính khóa phụ thuộc hàm vào thuộc tính không khóa.\n- **ĐN2 (tổng quát)**: Với mọi PTH $X \\to A \\in F^+$ ($A \\notin X$) thì $X$ là **siêu khóa**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.29' },
  { id: 'ch4-ch-fc-20', chapter: 'ch4', front: 'Vì sao khi kiểm tra BCNF luôn ưu tiên ĐN2 thay vì ĐN1?', back: 'Vì có PTH như $Z \\to C$ trong $R(C,S,Z)$ ($F = \\{CS \\to Z, Z \\to C\\}$): $Z$ thuộc khóa $SZ$ nên cũng là TT khóa, nhưng $Z$ **không phải siêu khóa**.\nTheo ĐN2, chỉ cần thấy $Z$ không phải siêu khóa là kết luận ngay vi phạm BCNF.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.29–32' },
  { id: 'ch4-ch-fc-21', chapter: 'ch4', front: 'Thuật toán 3 bước kiểm tra BCNF và dấu hiệu nhận nhanh?', back: '1. Tìm tất cả các khóa của $R$.\n2. Tạo $F\'$ có vế phải 1 thuộc tính.\n3. Mọi $X \\to A \\in F\'$ đều có $X$ là **siêu khóa** $\\Rightarrow$ BCNF. (Mọi vế trái đều là khóa/siêu khóa $\\Rightarrow$ BCNF.)', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.31' },
  { id: 'ch4-ch-fc-22', chapter: 'ch4', front: 'Điểm khác biệt duy nhất giữa điều kiện kiểm tra 3NF và BCNF?', back: 'Xét mọi $X \\to A$ ($A \\notin X$): **BCNF** bắt buộc $X$ là siêu khóa; **3NF** cho thêm ngoại lệ "hoặc $A$ là thuộc tính khóa".\nVậy đạt 3NF mà rớt BCNF khi còn $X \\to A$ có $X$ không là siêu khóa và $A$ là TT khóa.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.21, 29' },
  { id: 'ch4-ch-fc-23', chapter: 'ch4', front: 'Cách đưa một lược đồ đang ở 3NF về BCNF theo slide tr.34?', back: 'Loại bỏ thuộc tính bị phụ thuộc vi phạm khỏi quan hệ gốc và tạo quan hệ riêng có khóa chính là **vế trái gây ra phụ thuộc vi phạm** đó (như `Hoc(MaSV, MaMon, Diem, MaGV)` với `MaGV -> MaMon` tách thành `(MaGV, MaMon)` và `(MaSV, MaGV, Diem)`).', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.34–35' },
  { id: 'ch4-ch-fc-24', chapter: 'ch4', front: 'Thuật toán 4 bước xác định dạng chuẩn cao nhất của lược đồ $R$?', back: '1. Tìm tất cả các khóa của $R$.\n2. Kiểm tra BCNF $\\to$ đúng thì dừng (BCNF).\n3. Kiểm tra 3NF $\\to$ đúng thì dừng (3NF).\n4. Kiểm tra 2NF $\\to$ đúng thì 2NF, sai thì **1NF**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.37' },
  { id: 'ch4-ch-fc-25', chapter: 'ch4', front: '3 đường tắt kiểm tra nhanh dạng chuẩn cao nhất trong phòng thi?', back: '- Mọi vế trái $X$ là siêu khóa $\\Rightarrow$ **BCNF**.\n- Không có TT không khóa (mọi TT đều thuộc khóa) $\\Rightarrow$ ít nhất **3NF**.\n- Mọi khóa chỉ có 1 thuộc tính $\\Rightarrow$ ít nhất **2NF**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.15, 23, 31, 37' },
  { id: 'ch4-ch-fc-26', chapter: 'ch4', front: 'Định nghĩa phép tách lược đồ quan hệ $R$ thành $D = \\{R_1, \\dots, R_k\\}$?', back: 'Là việc thay thế $R$ bằng tập các lược đồ con thỏa:\n- $R_i \\subset R$ ($i = 1, \\dots, k$),\n- $R = R_1 \\cup R_2 \\cup \\dots \\cup R_k$.\n(Không bắt buộc các $R_i$ phải rời nhau.)', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.39' },
  { id: 'ch4-ch-fc-27', chapter: 'ch4', front: 'Hai tính chất bắt buộc/mục tiêu khi phân rã lược đồ quan hệ?', back: '1. **Không mất mát thông tin** (bắt buộc: nối các bảng con lại phải ra đúng bảng gốc, không sinh bộ giả).\n2. **Bảo toàn phụ thuộc hàm**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.38' },
  { id: 'ch4-ch-fc-28', chapter: 'ch4', front: 'Hình chiếu $\\Pi_{R_i}(F)$ là gì? Bẫy hay gặp khi tính $\\Pi_{R_i}(F)$?', back: '$\\Pi_{R_i}(F) = \\{X \\to Y \\in F^+ \\mid X \\cup Y \\subseteq R_i\\}$.\n**Bẫy**: phải xét từ **$F^+$** (suy diễn bắc cầu), không phải chỉ nhặt các PTH trong $F$ gốc! (VD $F=\\{A\\to B, B\\to C, C\\to A\\}$ chiếu lên $AB$ phải có cả $B \\to A$.)', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.41–42' },
  { id: 'ch4-ch-fc-29', chapter: 'ch4', front: 'Khi nào phép tách $D = (R_1, \\dots, R_m)$ bảo toàn phụ thuộc hàm?', back: 'Khi $\\left(\\bigcup \\Pi_{R_i}(F)\\right)^+ = F^+$.\nCách kiểm tra: đặt $G = \\bigcup \\Pi_{R_i}(F)$, kiểm tra mọi $X \\to Y \\in F$ có $Y \\subseteq X^+_G$ hay không.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.43' },
  { id: 'ch4-ch-fc-30', chapter: 'ch4', front: 'Định nghĩa phép tách – kết nối không mất mát thông tin?', back: 'Với mọi quan hệ $r$ trên $R$ thỏa $F$, luôn có:\n$r = \\Pi_{R_1}(r) * \\Pi_{R_2}(r) * \\dots * \\Pi_{R_k}(r)$\n(kết nối tự nhiên các hình chiếu khôi phục đúng $r$).', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.45' },
  { id: 'ch4-ch-fc-31', chapter: 'ch4', front: 'Cách điền bảng $a_j / b_{ij}$ ở Bước 1 (kiểm tra mất mát thông tin)?', back: 'Lập bảng $k$ hàng (ứng với $R_i$) $\\times$ $n$ cột (ứng với thuộc tính $A_j$).\nTại ô $(i, j)$: nếu $A_j \\in R_i$ điền **$a_j$**, ngược lại điền **$b_{ij}$**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.47' },
  { id: 'ch4-ch-fc-32', chapter: 'ch4', front: 'Quy tắc biến đổi bảng $a_j / b_{ij}$ (Bước 2) và kết luận (Bước 3)?', back: '- Với từng $X \\to Y \\in F$: các hàng có cùng giá trị ở mọi cột thuộc $X$ thì đồng nhất giá trị cột thuộc $Y$ (**ưu tiên $a_j$**, không có $a_j$ thì dùng chung một $b$).\n- Lặp đến khi bảng không đổi; có ít nhất **1 hàng toàn $a_1 \\dots a_n$** $\\Rightarrow$ **không mất mát thông tin**.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.47' },
  { id: 'ch4-ch-fc-33', chapter: 'ch4', front: 'Mẹo kiểm tra nhanh phép tách 2 bảng $(R_1, R_2)$ không mất mát thông tin?', back: 'Không cần kẻ bảng $a_j / b_{ij}$: tách $(R_1, R_2)$ không mất mát TT $\\iff$ phần giao xác định ít nhất 1 trong 2 bảng:\n**$R_1 \\cap R_2 \\to R_1$** hoặc **$R_1 \\cap R_2 \\to R_2$** (tính $(R_1 \\cap R_2)^+$).', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.45–47' },
  { id: 'ch4-ch-fc-34', chapter: 'ch4', front: 'Tóm tắt thuật toán phân rã lược đồ $R$ thành BCNF?', back: '1. Khởi tạo $D = \\{R\\}$.\n2. Tìm $S \\in D$ có PTH $X \\to A$ ($A \\notin X$) vi phạm BCNF ($X$ không chứa khóa của $S$).\n3. Tách $S$ thành $S_1 = XA$ và $S_2 = S \\setminus \\{A\\}$, lặp lại đến khi mọi bảng đều là BCNF.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.50' },
  { id: 'ch4-ch-fc-35', chapter: 'ch4', front: 'Tóm tắt thuật toán tổng hợp lược đồ $R$ thành 3NF?', back: '1. Tìm phủ tối thiểu $F_{tt}$ của $F$.\n2. Nếu có PTH trong $F_{tt}$ chứa cả $R$ $\\to$ giữ nguyên $R$.\n3. Ngược lại, gom các PTH cùng vế trái $X$ thành lược đồ $X A_1 \\dots A_k$. Nếu chưa có bảng nào chứa một khóa $K$ của $R$ thì thêm bảng chứa $K$.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.52–53' },
  { id: 'ch4-ch-fc-36', chapter: 'ch4', front: 'So sánh phân rã BCNF và tổng hợp 3NF về bảo toàn TT và bảo toàn PTH?', back: '- **Phân rã BCNF**: luôn **không mất mát TT**, đạt BCNF, nhưng **có thể mất PTH** (VD $CSZ$ mất $CS \\to Z$).\n- **Tổng hợp 3NF**: luôn bảo đảm **cả hai** — vừa **không mất mát TT** vừa **bảo toàn PTH**, đạt 3NF.', source: 'Slide Ch.4 Chuẩn hóa CSDL – tr.50–54' }
);
