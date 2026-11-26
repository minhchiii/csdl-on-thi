/* Nút nổi Cheat sheet – Bảng ký hiệu ER/EER (SVG thật), Đại số quan hệ (KaTeX) & Quy tắc nhanh */
(function () {
  let tab = 'er';

  const ER_ROWS = [
    ['Thực thể mạnh', 'Chữ nhật nét đơn. Tồn tại độc lập (SV, Môn học).',
      { entities: [{ id: 'e', label: 'SINH VIÊN', x: 0, y: 0 }] }],
    ['Thực thể yếu & Liên kết định danh', 'Chữ nhật kép + hình thoi kép + khoá bộ phận gạch chân nét đứt. Phụ thuộc tồn tại vào thực thể chủ.',
      { entities: [{ id: 'a', label: 'NV', x: 0, y: 0 }, { id: 'b', label: 'THÂN NHÂN', x: 185, y: 0, weak: true, side: 'top', attrs: [{ label: 'Tên', kind: 'partial' }] }],
        rels: [{ id: 'r', label: 'Có', x: 92, y: 0, ident: true, links: [{ to: 'a', card: '1' }, { to: 'b', card: 'N', total: true }] }] }],
    ['Thuộc tính khoá & đơn trị', 'Oval nét đơn; thuộc tính khoá được gạch chân liền nét.',
      { entities: [{ id: 'e', label: 'NV', x: 0, y: 0, side: 'right', attrs: [{ label: 'MaNV', kind: 'key' }, { label: 'Tên' }] }] }],
    ['Thuộc tính phức hợp', 'Chia nhánh thành các thuộc tính thành phần nhỏ hơn.',
      { entities: [{ id: 'e', label: 'NV', x: 0, y: 0, side: 'top', attrs: [{ label: 'Họ tên', parts: [{ label: 'Họ' }, { label: 'Tên' }] }] }] }],
    ['Thuộc tính đa trị', 'Oval nét kép: nhận nhiều giá trị đồng thời (SĐT, ngoại ngữ).',
      { entities: [{ id: 'e', label: 'NV', x: 0, y: 0, side: 'right', attrs: [{ label: 'Điện thoại', kind: 'multi' }] }] }],
    ['Thuộc tính dẫn xuất', 'Oval nét đứt: giá trị tính suy ra từ thuộc tính khác (Tuổi, Lương).',
      { entities: [{ id: 'e', label: 'NV', x: 0, y: 0, side: 'right', attrs: [{ label: 'Tuổi', kind: 'derived' }] }] }],
    ['Liên kết & thuộc tính liên kết', 'Hình thoi nối các thực thể; có thể gắn thêm thuộc tính riêng.',
      { entities: [{ id: 'a', label: 'NV', x: 0, y: 0 }, { id: 'b', label: 'DỰ ÁN', x: 195, y: 0 }],
        rels: [{ id: 'r', label: 'Làm', x: 98, y: 0, side: 'top', attrs: [{ label: 'Số giờ' }], links: [{ to: 'a', card: 'M' }, { to: 'b', card: 'N' }] }] }],
    ['Liên kết đệ quy', 'Một thực thể tham gia liên kết với 2 vai trò khác nhau.',
      { entities: [{ id: 'a', label: 'NHÂN VIÊN', x: 0, y: 0 }],
        rels: [{ id: 'r', label: 'Giám sát', x: 160, y: 0, links: [{ to: 'a', card: '1', role: 'QL' }, { to: 'a', card: 'N', role: 'bị QL' }] }] }],
    ['Bản số & (min, max)', '1:1, 1:N, M:N hoặc cặp (tối thiểu, tối đa) đặt ở phía thực thể.',
      { entities: [{ id: 'a', label: 'LỚP', x: 0, y: 0 }, { id: 'b', label: 'SV', x: 190, y: 0 }],
        rels: [{ id: 'r', label: 'Có', x: 95, y: 0, links: [{ to: 'a', card: '(1,1)' }, { to: 'b', card: '(15,45)' }] }] }],
    ['Tham gia toàn phần / bộ phận', 'Nét đơn: bộ phận (không bắt buộc). Nét kép: toàn phần (mọi thực thể đều phải tham gia).',
      { entities: [{ id: 'a', label: 'NV', x: 0, y: 0 }, { id: 'b', label: 'ĐƠN VỊ', x: 195, y: 0 }],
        rels: [{ id: 'r', label: 'QL', x: 98, y: 0, links: [{ to: 'a', card: '1' }, { to: 'b', card: '1', total: true }] }] }],
    ['EER: Tách biệt (d) & Toàn phần', 'Chữ d = Disjoint (tối đa 1 lớp con). Nét kép = Toàn phần (bắt buộc thuộc ít nhất 1 lớp con). Ký hiệu ⊂ mở về lớp cha.',
      { entities: [{ id: 'p', label: 'XE', x: 95, y: 0 }, { id: 'c1', label: 'Ô TÔ', x: 25, y: 110 }, { id: 'c2', label: 'XE TẢI', x: 165, y: 110 }],
        specs: [{ id: 's', x: 95, y: 56, kind: 'd', parent: 'p', total: true, children: ['c1', 'c2'] }] }],
    ['EER: Phủ lấp (o) & Bộ phận', 'Chữ o = Overlapping (có thể thuộc nhiều lớp con đồng thời). Nét đơn = Bộ phận (có thể không thuộc lớp con nào).',
      { entities: [{ id: 'p', label: 'NGƯỜI', x: 95, y: 0 }, { id: 'c1', label: 'SV', x: 25, y: 110 }, { id: 'c2', label: 'NV', x: 165, y: 110 }],
        specs: [{ id: 's', x: 95, y: 56, kind: 'o', parent: 'p', total: false, children: ['c1', 'c2'] }] }],
    ['EER: Kiểu hợp (∪)', 'Lớp con là tập con của hợp nhiều kiểu cha khác loại.',
      { entities: [{ id: 'p', label: 'CHỦ XE', x: 95, y: 0 }, { id: 'c1', label: 'CÁ NHÂN', x: 25, y: 110 }, { id: 'c2', label: 'CÔNG TY', x: 165, y: 110 }],
        specs: [{ id: 's', x: 95, y: 56, kind: 'U', parent: 'p', total: false, children: ['c1', 'c2'] }] }]
  ];

  function renderER() {
    return `<table class="book"><thead><tr><th class="cs-sym">Hình vẽ chuẩn</th><th>Ký hiệu</th><th>Ý nghĩa &amp; ví dụ</th></tr></thead><tbody>` +
      ER_ROWS.map(([name, desc, spec]) =>
        `<tr><td class="cs-sym">${ER.render(spec, { pad: 6, maxWidth: 190 })}</td><td><strong>${U.esc(name)}</strong></td><td>${U.esc(desc)}</td></tr>`
      ).join('') + `</tbody></table>`;
  }

  function renderRA() {
    const ops = [
      ['$\\sigma_{F}(r)$', 'Phép chọn (Selection)', 'Lọc các **dòng (bộ)** thỏa điều kiện $F$ ($\\land, \\lor, \\neg$). Ví dụ: $\\sigma_{Diem \\ge 8 \\land Phai=\'Nu\'}(SV)$'],
      ['$\\pi_{X}(r)$', 'Phép chiếu (Projection)', 'Giữ lại các **cột** trong tập $X$, loại bỏ bộ trùng. Ví dụ: $\\pi_{MaSV, HoTen}(SV)$'],
      ['$r \\bowtie_{C} s$', 'Phép kết nối $\\theta$ / bằng', 'Ghép bộ của $r$ và $s$ thỏa điều kiện $C$ ($A_i \\theta B_j$, trong đó $\\theta \\in \\{=,\\neq,<,>,\\le,\\ge\\}$).'],
      ['$r * s$ hay $r \\bowtie s$', 'Kết nối tự nhiên', 'Kết nối bằng tại các thuộc tính **cùng tên** của $r, s$ và loại bỏ cột trùng. Slide hay viết dấu `*`.'],
      ['$r \\div s$', 'Phép chia (Division)', 'Tìm các $t$ trên $R \\setminus S$ sao cho với **mọi** $u \\in s$, $(t,u) \\in r$. Dùng cho câu hỏi "tất cả...".'],
      ['$r \\cup s$', 'Phép hợp (Union)', 'Các bộ có trong $r$ **hoặc** $s$ (cùng lược đồ, bỏ trùng).'],
      ['$r \\cap s$', 'Phép giao (Intersection)', 'Các bộ có trong **cả** $r$ và $s$ (cùng lược đồ).'],
      ['$r - s$', 'Phép hiệu / trừ', 'Các bộ có trong $r$ **nhưng không** có trong $s$ (dùng cho "chưa từng...", "không...").'],
      ['$r \\times s$', 'Tích Đề-các', 'Ghép mọi bộ của $r$ với mọi bộ của $s$ ($|r|\\cdot|s|$ bộ, $n+m$ cột).'],
      ['$\\rho_S(r)$, $KQ \\leftarrow \\dots$', 'Đặt tên / Gán biến', 'Đặt tên cho quan hệ trung gian hoặc đổi tên thuộc tính khi nối tự thân.'],
      ['$_{G}\\mathcal{F}_{f(A)}(r)$', 'Gom nhóm & hàm gộp', 'Nhóm theo thuộc tính $G$, tính `Count`, `Sum`, `Avg`, `Min`, `Max`. Ví dụ: $_{Lop}\\mathcal{F}_{Count(MaBD)}(PHIEUMUON)$.'],
      ['`INSERT`, `DEL`, `CH`', 'Cập nhật dữ liệu', '`INSERT(r; v1,..)`, `DEL(r; K=val)`, `CH(r; K=val; C=new)` (sửa giá trị $C$).']
    ];
    return `<table class="book"><thead><tr><th>Ký hiệu</th><th>Phép toán</th><th>Cách dùng &amp; ví dụ</th></tr></thead><tbody>` +
      ops.map(([sym, name, desc]) => `<tr><td style="white-space:nowrap">${U.fmtInline(sym)}</td><td><strong>${U.fmtInline(name)}</strong></td><td>${U.fmtInline(desc)}</td></tr>`).join('') +
      `</tbody></table>`;
  }

  function renderRules() {
    return `
      <h3>7 quy tắc chuyển ER → Lược đồ quan hệ (Slide Ch.3 P1)</h3>
      <table class="book"><thead><tr><th>Thành phần ER</th><th>Cách chuyển</th></tr></thead><tbody>
        <tr><td>1. Thực thể mạnh</td><td>1 quan hệ cùng thuộc tính đơn (tách thuộc tính phức hợp thành các thành phần). Giữ nguyên khoá.</td></tr>
        <tr><td>2. Thực thể yếu</td><td>1 quan hệ gồm thuộc tính của thực thể yếu + **khoá chính của thực thể chủ**. Khoá = khoá chủ + khoá bộ phận.</td></tr>
        <tr><td>3. Liên kết 1–1</td><td>Đưa khoá của bên tuỳ chọn + thuộc tính liên kết sang làm thuộc tính ở **bên bắt buộc** (nét kép). Nếu cả 2 bắt buộc thì đặt tuỳ ý.</td></tr>
        <tr><td>4. Liên kết M–N</td><td>Tạo **1 quan hệ mới** gồm khoá của 2 thực thể tham gia + thuộc tính của liên kết (nếu có).</td></tr>
        <tr><td>5. Liên kết 1–N</td><td>Đặt khoá của **bên 1** + thuộc tính liên kết sang bảng **bên nhiều (N)**.</td></tr>
        <tr><td>6. Liên kết bậc &gt; 2</td><td>Tạo **1 quan hệ mới** gồm khoá các thực thể tham gia + thuộc tính của liên kết.</td></tr>
        <tr><td>7. Thuộc tính đa trị</td><td>Tách thành **1 quan hệ mới** gồm khoá chính của quan hệ ban đầu + thuộc tính đa trị đó.</td></tr>
      </tbody></table>
      <h3>Hệ tiên đề Armstrong &amp; 3 luật mở rộng</h3>
      <table class="book"><thead><tr><th>Luật</th><th>Phát biểu</th></tr></thead><tbody>
        <tr><td>1. Phản xạ</td><td>$Y \\subseteq X \\Rightarrow X \\to Y$</td></tr>
        <tr><td>2. Tăng trưởng (bổ sung)</td><td>$X \\to Y \\Rightarrow XZ \\to YZ$</td></tr>
        <tr><td>3. Bắc cầu</td><td>$X \\to Y$ và $Y \\to Z \\Rightarrow X \\to Z$</td></tr>
        <tr><td>4. Tựa bắc cầu</td><td>$X \\to Y$ và $WY \\to Z \\Rightarrow XW \\to Z$</td></tr>
        <tr><td>5. Hợp</td><td>$X \\to Y$ và $X \\to Z \\Rightarrow X \\to YZ$</td></tr>
        <tr><td>6. Tách</td><td>$X \\to Y$ và $Z \\subseteq Y \\Rightarrow X \\to Z$</td></tr>
      </tbody></table>
      <h3>Phân biệt nhanh 1NF – 2NF – 3NF – BCNF</h3>
      <table class="book"><thead><tr><th>Dạng chuẩn</th><th>Điều kiện ngắn gọn</th></tr></thead><tbody>
        <tr><td><strong>1NF</strong></td><td>Mọi thuộc tính đều nguyên tố, đơn trị (không có thuộc tính phức hợp, đa trị, nhóm lặp).</td></tr>
        <tr><td><strong>2NF</strong></td><td>1NF + không có thuộc tính **không khoá** nào phụ thuộc bộ phận vào khoá (mọi khoá 1 thuộc tính $\\Rightarrow$ chắc chắn đạt 2NF).</td></tr>
        <tr><td><strong>3NF</strong></td><td>2NF + không có thuộc tính **không khoá** phụ thuộc bắc cầu vào khoá. Mọi $X \\to A \\in F^+$ ($A \\notin X$): $X$ là siêu khoá **hoặc** $A$ là thuộc tính khoá.</td></tr>
        <tr><td><strong>BCNF</strong></td><td>Mọi $X \\to A \\in F^+$ ($A \\notin X$): $X$ **bắt buộc** là siêu khoá (không có thuộc tính khoá phụ thuộc hàm vào thuộc tính không khoá).</td></tr>
      </tbody></table>`;
  }

  function renderBody(box) {
    const body = tab === 'er' ? renderER() : tab === 'ra' ? renderRA() : renderRules();
    box.innerHTML = `
      <div class="seg cs-tabs">
        <button class="${tab === 'er' ? 'on' : ''}" data-t="er">Ký hiệu ER / EER</button>
        <button class="${tab === 'ra' ? 'on' : ''}" data-t="ra">Đại số quan hệ</button>
        <button class="${tab === 'rules' ? 'on' : ''}" data-t="rules">Quy tắc &amp; Dạng chuẩn</button>
      </div>
      <div class="table-wrap">${body}</div>`;
    U.$$('[data-t]', box).forEach(b => b.addEventListener('click', () => { tab = b.dataset.t; renderBody(box); }));
  }

  function open() {
    const wrap = document.createElement('div');
    renderBody(wrap);
    U.openModal('Cheat sheet – Bảng tra cứu nhanh', wrap, { width: '980px' });
  }

  window.CheatSheet = { open };
})();
