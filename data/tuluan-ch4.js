/* Tự luận Ch.4 – Thiết kế & Chuẩn hóa CSDL (8 bài) – nguồn: tai-lieu-text/Bài tập tổng hợp.txt & BT_CSDL(C4).txt */
DB.essays.push(
  {
    id: 'ch4-tl-01',
    kind: 'ch4',
    title: 'Câu 1: Kiểm tra phụ thuộc hàm đúng trên quan hệ r',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 1); BT_CSDL(C4) – Câu 1',
    answerStatus: 'tu-giai',
    prompt: 'Cho lược đồ quan hệ $Q(A, B, C, D, E)$ có $r$ là quan hệ tương ứng (bảng bên dưới). Hãy cho biết phụ thuộc hàm nào đúng trên quan hệ $r$:\n- a) $A \\to D$\n- b) $AB \\to D$\n- c) $C \\to BDE$\n- d) $A \\to E$',
    figures: {
      type: 'table',
      caption: 'Quan hệ $r$ trên lược đồ $Q(A, B, C, D, E)$',
      head: ['A', 'B', 'C', 'D', 'E'],
      rows: [
        ['a1', 'b1', 'c1', 'd1', 'e1'],
        ['a1', 'b2', 'c2', 'd2', 'd1'],
        ['a2', 'b1', 'c3', 'd3', 'e1'],
        ['a2', 'b1', 'c4', 'd3', 'e1'],
        ['a3', 'b2', 'c5', 'd1', 'e1']
      ]
    },
    answer: {
      steps: [
        'Nhắc lại định nghĩa (Slide Ch.4 Phụ thuộc hàm – tr.4): PTH $X \\to Y$ đúng (thỏa) trên quan hệ $r$ khi với mọi cặp bộ $t_1, t_2 \\in r$, nếu $t_1[X] = t_2[X]$ thì $t_1[Y] = t_2[Y]$.',
        'Để bác bỏ $X \\to Y$, chỉ cần chỉ ra ít nhất một cặp dòng có cùng giá trị trên $X$ nhưng khác giá trị ở ít nhất một cột thuộc $Y$.'
      ],
      parts: [
        {
          q: 'a) $A \\to D$',
          a: '**Sai (không thỏa trên $r$).**\n- Dòng 1: $(A, D) = (a_1, d_1)$; dòng 2: $(A, D) = (a_1, d_2)$.\n- Hai dòng 1 và 2 có cùng $A = a_1$ nhưng $D$ khác nhau ($d_1 \\neq d_2$) $\\Rightarrow$ ==vi phạm== $A \\to D$.\n- (Dòng 3, 4 cùng $A = a_2$ đều cho $D = d_3$; dòng 5 có $A = a_3$ đứng riêng, nhưng chỉ cần 1 cặp vi phạm là đủ bác bỏ.)'
        },
        {
          q: 'b) $AB \\to D$',
          a: '**Đúng (thỏa trên $r$).**\n- Kiểm tra từng cặp giá trị $(A, B)$ xuất hiện trong bảng:\n  - Dòng 1: $(a_1, b_1) \\Rightarrow D = d_1$ (duy nhất 1 dòng).\n  - Dòng 2: $(a_1, b_2) \\Rightarrow D = d_2$ (duy nhất 1 dòng).\n  - Dòng 3 và 4: cùng $(a_2, b_1)$ và đều cho $D = d_3$ (thỏa $t_3[D] = t_4[D] = d_3$).\n  - Dòng 5: $(a_3, b_2) \\Rightarrow D = d_1$ (duy nhất 1 dòng).\n- Không có cặp dòng nào cùng $(A, B)$ mà khác $D$ $\\Rightarrow$ $AB \\to D$ **đúng** trên $r$.'
        },
        {
          q: 'c) $C \\to BDE$',
          a: '**Đúng (thỏa trên $r$).**\n- Giá trị cột $C$ trên 5 dòng lần lượt là $c_1, c_2, c_3, c_4, c_5$, đôi một khác nhau hoàn toàn.\n- Do không có cặp dòng khác nhau nào thỏa $t_1[C] = t_2[C]$ nên điều kiện $t_1[C] = t_2[C] \\Rightarrow t_1[BDE] = t_2[BDE]$ luôn đúng $\\Rightarrow$ $C \\to BDE$ **đúng** trên $r$.'
        },
        {
          q: 'd) $A \\to E$',
          a: '**Sai (không thỏa trên $r$).**\n- Chú ý ở dòng 2, cột $E$ có giá trị là `d1` (khác `e1` ở dòng 1).\n- Dòng 1 có $(A, E) = (a_1, e_1)$ còn dòng 2 có $(A, E) = (a_1, d_1)$: cùng $A = a_1$ nhưng $e_1 \\neq d_1$ $\\Rightarrow$ ==vi phạm== $A \\to E$.\n- (Dòng 3, 4 cùng $A = a_2$ đều cho $E = e_1$; dòng 5 có $A = a_3$ cho $E = e_1$.)\n\n**Kết luận chung:** trên quan hệ $r$, chỉ có **b) $AB \\to D$** và **c) $C \\to BDE$** là đúng.'
        }
      ]
    }
  },
  {
    id: 'ch4-tl-02',
    kind: 'ch4',
    title: 'Câu 2: Chứng minh bằng hệ tiên đề Armstrong',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 2); BT_CSDL(C4) – Câu 2',
    answerStatus: 'tu-giai',
    prompt: 'Sử dụng hệ tiên đề Armstrong (và các luật mở rộng) để giải các câu sau:\n- a) Cho $F = \\{AB \\to E,\\; AG \\to I,\\; E \\to G,\\; GI \\to H\\}$. Chứng minh rằng $AB \\to GH$.\n- b) Cho $F = \\{AB \\to C,\\; B \\to D,\\; CD \\to E,\\; CE \\to GH,\\; G \\to A\\}$. Chứng minh rằng $AB \\to E$ và $AB \\to G$.\n- c) Cho $F = \\{XY \\to W,\\; Y \\to Z,\\; WZ \\to P,\\; WP \\to QR,\\; Q \\to X\\}$. Chứng minh rằng $XY \\to P$.\n- d) Cho $F = \\{A \\to BD,\\; AD \\to C,\\; C \\to B,\\; AB \\to C\\}$. Sử dụng hệ tiên đề Armstrong chứng minh $AB \\to C$ là dư thừa.',
    answer: {
      steps: [
        'Ba tiên đề Armstrong gốc: **Phản xạ** ($Y \\subseteq X \\Rightarrow X \\to Y$), **Bổ sung** ($X \\to Y \\Rightarrow XZ \\to YZ$), **Bắc cầu** ($X \\to Y, Y \\to Z \\Rightarrow X \\to Z$).',
        'Ba luật mở rộng: **Tựa bắc cầu** ($X \\to Y, WY \\to Z \\Rightarrow XW \\to Z$), **Hợp** ($X \\to Y, X \\to Z \\Rightarrow X \\to YZ$), **Tách** ($X \\to Y, Z \\subseteq Y \\Rightarrow X \\to Z$).',
        'Ở câu d), chứng minh $AB \\to C$ dư thừa nghĩa là chứng minh $AB \\to C$ suy diễn được từ $F\' = F \\setminus \\{AB \\to C\\}$.'
      ],
      parts: [
        {
          q: 'a) $F = \\{AB \\to E,\\; AG \\to I,\\; E \\to G,\\; GI \\to H\\}$, chứng minh $AB \\to GH$',
          a: '1. Từ $AB \\to E$ và $E \\to G$ (giả thiết), áp dụng **luật bắc cầu**: $AB \\to G$.\n2. Từ $AB \\to G$, áp dụng **luật bổ sung** thêm $A$: $AB \\to AG$ (vì $AAB = AB$).\n3. Từ $AB \\to AG$ và $AG \\to I$ (giả thiết), áp dụng **luật bắc cầu**: $AB \\to I$.\n4. Từ $AB \\to G$ và $AB \\to I$, áp dụng **luật hợp**: $AB \\to GI$.\n5. Từ $AB \\to GI$ và $GI \\to H$ (giả thiết), áp dụng **luật bắc cầu**: $AB \\to H$.\n6. Từ $AB \\to G$ và $AB \\to H$, áp dụng **luật hợp**: **$AB \\to GH$** (đpcm).'
        },
        {
          q: 'b) $F = \\{AB \\to C,\\; B \\to D,\\; CD \\to E,\\; CE \\to GH,\\; G \\to A\\}$, chứng minh $AB \\to E$ và $AB \\to G$',
          a: '1. Từ $AB \\to C$ (giả thiết), áp dụng **luật bổ sung** thêm $B$: $AB \\to BC$ (vì $ABB = AB$).\n2. Từ $B \\to D$ (giả thiết), áp dụng **luật bổ sung** thêm $C$: $BC \\to CD$.\n3. Từ $AB \\to BC$ và $BC \\to CD$, áp dụng **luật bắc cầu**: $AB \\to CD$.\n4. Từ $AB \\to CD$ và $CD \\to E$ (giả thiết), áp dụng **luật bắc cầu**: **$AB \\to E$** (đpcm ý 1).\n5. Từ $AB \\to C$ (giả thiết) và $AB \\to E$, áp dụng **luật hợp**: $AB \\to CE$.\n6. Từ $AB \\to CE$ và $CE \\to GH$ (giả thiết), áp dụng **luật bắc cầu**: $AB \\to GH$.\n7. Vì $G \\subseteq GH$, áp dụng **luật tách** (hoặc phản xạ $GH \\to G$ rồi bắc cầu): **$AB \\to G$** (đpcm ý 2).'
        },
        {
          q: 'c) $F = \\{XY \\to W,\\; Y \\to Z,\\; WZ \\to P,\\; WP \\to QR,\\; Q \\to X\\}$, chứng minh $XY \\to P$',
          a: '1. Từ $XY \\to W$ (giả thiết), áp dụng **luật bổ sung** thêm $Y$: $XY \\to WY$ (vì $XYY = XY$).\n2. Từ $Y \\to Z$ (giả thiết), áp dụng **luật bổ sung** thêm $W$: $WY \\to WZ$.\n3. Từ $XY \\to WY$ và $WY \\to WZ$, áp dụng **luật bắc cầu**: $XY \\to WZ$.\n4. Từ $XY \\to WZ$ và $WZ \\to P$ (giả thiết), áp dụng **luật bắc cầu**: **$XY \\to P$** (đpcm).'
        },
        {
          q: 'd) $F = \\{A \\to BD,\\; AD \\to C,\\; C \\to B,\\; AB \\to C\\}$, chứng minh $AB \\to C$ dư thừa',
          a: 'Xét tập bỏ đi $AB \\to C$ là $F\' = \\{A \\to BD,\\; AD \\to C,\\; C \\to B\\}$:\n1. Từ $A \\to BD \\in F\'$, vì $D \\subseteq BD$, áp dụng **luật tách**: $A \\to D$.\n2. Từ $A \\to D$, áp dụng **luật bổ sung** thêm $A$: $A \\to AD$.\n3. Từ $A \\to AD$ và $AD \\to C \\in F\'$, áp dụng **luật bắc cầu**: $A \\to C$.\n4. Vì $A \\subseteq AB$, áp dụng **luật phản xạ**: $AB \\to A$.\n5. Từ $AB \\to A$ và $A \\to C$, áp dụng **luật bắc cầu**: **$AB \\to C$**.\n*(Hoặc từ bước 3, bổ sung $B$ cho $AB \\to BC$ rồi dùng luật tách được $AB \\to C$.)*\nVì $AB \\to C$ suy diễn được từ $F\'$ nên $AB \\to C$ là **dư thừa** trong $F$ (đpcm).'
        }
      ]
    }
  },
  {
    id: 'ch4-tl-03',
    kind: 'ch4',
    title: 'Câu 3: Chứng minh bằng bao đóng của tập thuộc tính',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 3); BT_CSDL(C4) – Câu 3',
    answerStatus: 'tu-giai',
    prompt: 'Sử dụng bao đóng của thuộc tính để chứng minh các phần a, b, c trong Câu 2:\n- a) $F = \\{AB \\to E,\\; AG \\to I,\\; E \\to G,\\; GI \\to H\\}$, chứng minh $AB \\to GH$.\n- b) $F = \\{AB \\to C,\\; B \\to D,\\; CD \\to E,\\; CE \\to GH,\\; G \\to A\\}$, chứng minh $AB \\to E$ và $AB \\to G$.\n- c) $F = \\{XY \\to W,\\; Y \\to Z,\\; WZ \\to P,\\; WP \\to QR,\\; Q \\to X\\}$, chứng minh $XY \\to P$.',
    answer: {
      steps: [
        'Sử dụng tính chất thành viên (Slide Ch.4 Phụ thuộc hàm – tr.13, 18): $X \\to Y \\in F^+ \\iff Y \\subseteq X^+_F$.',
        'Tính $X^+$ bằng thuật toán lặp: đặt $X_0 = X$; mỗi bước dùng một PTH có vế trái $\\subseteq X_i$ để hợp thêm vế phải vào $X_{i+1}$ cho đến khi không mở rộng được nữa.'
      ],
      parts: [
        {
          q: 'a) Tính $(AB)^+$ theo $F = \\{AB \\to E,\\; AG \\to I,\\; E \\to G,\\; GI \\to H\\}$',
          a: '- $X_0 = AB$\n- Dùng $AB \\to E$ ($AB \\subseteq X_0$): $X_1 = ABE$\n- Dùng $E \\to G$ ($E \\subseteq X_1$): $X_2 = ABEG$\n- Dùng $AG \\to I$ ($AG \\subseteq X_2$): $X_3 = ABEGI$\n- Dùng $GI \\to H$ ($GI \\subseteq X_3$): $X_4 = ABEGHI$\n- Không còn PTH nào thêm thuộc tính mới $\\Rightarrow (AB)^+ = ABEGHI$.\n- Vì $GH \\subseteq (AB)^+$ nên **$AB \\to GH \\in F^+$** (đpcm).'
        },
        {
          q: 'b) Tính $(AB)^+$ theo $F = \\{AB \\to C,\\; B \\to D,\\; CD \\to E,\\; CE \\to GH,\\; G \\to A\\}$',
          a: '- $X_0 = AB$\n- Dùng $AB \\to C$ ($AB \\subseteq X_0$): $X_1 = ABC$\n- Dùng $B \\to D$ ($B \\subseteq X_1$): $X_2 = ABCD$\n- Dùng $CD \\to E$ ($CD \\subseteq X_2$): $X_3 = ABCDE$\n- Dùng $CE \\to GH$ ($CE \\subseteq X_3$): $X_4 = ABCDEGH$\n- PTH còn lại $G \\to A$ không thêm thuộc tính mới ($A \\in X_4$) $\\Rightarrow (AB)^+ = ABCDEGH$.\n- Vì $E \\in (AB)^+$ và $G \\in (AB)^+$ nên **$AB \\to E \\in F^+$** và **$AB \\to G \\in F^+$** (đpcm).'
        },
        {
          q: 'c) Tính $(XY)^+$ theo $F = \\{XY \\to W,\\; Y \\to Z,\\; WZ \\to P,\\; WP \\to QR,\\; Q \\to X\\}$',
          a: '- $X_0 = XY$\n- Dùng $XY \\to W$ ($XY \\subseteq X_0$): $X_1 = XYW$\n- Dùng $Y \\to Z$ ($Y \\subseteq X_1$): $X_2 = XYZW$\n- Dùng $WZ \\to P$ ($WZ \\subseteq X_2$): $X_3 = XYZWP$\n- Dùng tiếp $WP \\to QR$ ($WP \\subseteq X_3$): $X_4 = XYZWPQR$ ($Q \\to X$ không thêm mới) $\\Rightarrow (XY)^+ = XYZWPQR$.\n- Vì $P \\in (XY)^+$ nên **$XY \\to P \\in F^+$** (đpcm).'
        }
      ]
    }
  },
  {
    id: 'ch4-tl-04',
    kind: 'ch4',
    title: 'Câu 4: Chứng minh hai tập phụ thuộc hàm tương đương',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 4); BT_CSDL(C4) – Câu 4',
    answerStatus: 'tu-giai',
    prompt: 'Chứng minh hai tập phụ thuộc hàm sau là tương đương:\n$$F = \\{B \\to A,\\; AB \\to CG,\\; C \\to B\\} \\quad\\text{và}\\quad G = \\{AB \\to CG,\\; C \\to ABG,\\; B \\to C\\}$$',
    answer: {
      steps: [
        'Hai tập PTH $F$ và $G$ tương đương ($F \\sim G$) khi và chỉ khi $F^+ = G^+$, tức phải chứng minh **cả hai chiều**: $G$ phủ $F$ và $F$ phủ $G$ (Slide Ch.4 Phụ thuộc hàm – tr.21–22).',
        'Để chứng minh $G$ phủ $F$, với từng $X \\to Y \\in F$ ta tính $X^+_G$ và kiểm tra $Y \\subseteq X^+_G$. Làm tương tự để chứng minh $F$ phủ $G$.'
      ],
      parts: [
        {
          q: '1 - Chứng minh $G$ phủ $F$ ($\\forall X \\to Y \\in F,\\; Y \\subseteq X^+_G$)',
          a: 'Tính bao đóng vế trái của các PTH trong $F$ theo $G = \\{AB \\to CG,\\; C \\to ABG,\\; B \\to C\\}$:\n- Với $B \\to A \\in F$: $B^+_G = B \\xrightarrow{B \\to C} BC \\xrightarrow{C \\to ABG} ABCG$. Vì $A \\in B^+_G$ nên $B \\to A \\in G^+$.\n- Với $AB \\to CG \\in F$: $(AB)^+_G = AB \\xrightarrow{AB \\to CG} ABCG$. Vì $CG \\subseteq (AB)^+_G$ nên $AB \\to CG \\in G^+$.\n- Với $C \\to B \\in F$: $C^+_G = C \\xrightarrow{C \\to ABG} ABCG$. Vì $B \\in C^+_G$ nên $C \\to B \\in G^+$.\nVậy **$G$ phủ $F$** ($F \\subseteq G^+$).'
        },
        {
          q: '2 - Chứng minh $F$ phủ $G$ ($\\forall X \\to Y \\in G,\\; Y \\subseteq X^+_F$)',
          a: 'Tính bao đóng vế trái của các PTH trong $G$ theo $F = \\{B \\to A,\\; AB \\to CG,\\; C \\to B\\}$:\n- Với $AB \\to CG \\in G$: $(AB)^+_F = AB \\xrightarrow{AB \\to CG} ABCG$. Vì $CG \\subseteq (AB)^+_F$ nên $AB \\to CG \\in F^+$.\n- Với $C \\to ABG \\in G$: $C^+_F = C \\xrightarrow{C \\to B} BC \\xrightarrow{B \\to A} ABC \\xrightarrow{AB \\to CG} ABCG$. Vì $ABG \\subseteq C^+_F$ nên $C \\to ABG \\in F^+$.\n- Với $B \\to C \\in G$: $B^+_F = B \\xrightarrow{B \\to A} AB \\xrightarrow{AB \\to CG} ABCG$. Vì $C \\in B^+_F$ nên $B \\to C \\in F^+$.\nVậy **$F$ phủ $G$** ($G \\subseteq F^+$).'
        },
        {
          q: '3 - Kết luận',
          a: 'Vì $G$ phủ $F$ và $F$ phủ $G$ nên $F^+ = G^+$, suy ra ==$F$ và $G$ tương đương nhau ($F \\sim G$)==.'
        }
      ]
    }
  }
);

DB.essays.push(
  {
    id: 'ch4-tl-05',
    kind: 'ch4',
    title: 'Câu 5: Tìm phủ tối thiểu của 4 tập phụ thuộc hàm',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 5)',
    answerStatus: 'tu-giai',
    prompt: 'Xác định phủ tối thiểu của các tập phụ thuộc hàm sau:\n- a) $F = \\{P \\to CHART,\\; CH \\to PART,\\; C \\to T,\\; A \\to R\\}$\n- b) $F = \\{X \\to Z,\\; XY \\to ZP,\\; Z \\to RP,\\; X \\to R\\}$\n- c) $F = \\{A \\to BD,\\; AD \\to C,\\; C \\to B,\\; AB \\to C\\}$\n- d) $F = \\{B \\to D,\\; A \\to BC,\\; AE \\to D\\}$',
    answer: {
      steps: [
        '**Bước 1 (Tách vế phải)**: tách mọi PTH có nhiều hơn 1 thuộc tính ở vế phải thành các PTH có vế phải đúng 1 thuộc tính (loại PTH hiển nhiên $A \\in X$ và bỏ trùng).',
        '**Bước 2 (Loại thuộc tính dư ở vế trái)**: với mỗi PTH $X \\to A$ có $|X| \\ge 2$, thử bỏ từng $B \\in X$; nếu $A \\in (X \\setminus \\{B\\})^+_{F_1}$ thì thay $X \\to A$ bằng $(X \\setminus \\{B\\}) \\to A$ (rút gọn tiếp nếu $|X| > 2$, gộp trùng).',
        '**Bước 3 (Loại PTH dư thừa)**: duyệt lần lượt từng $X \\to A$ trong tập hiện tại; nếu $A \\in X^+$ tính trên tập còn lại thì ==xóa ngay== $X \\to A$ khỏi tập trước khi xét PTH tiếp theo.'
      ],
      parts: [
        {
          q: 'a) $F = \\{P \\to CHART,\\; CH \\to PART,\\; C \\to T,\\; A \\to R\\}$',
          a: '**Bước 1 (Tách vế phải)**:\n$F_1 = \\{P \\to C,\\; P \\to H,\\; P \\to A,\\; P \\to R,\\; P \\to T,\\; CH \\to P,\\; CH \\to A,\\; CH \\to R,\\; CH \\to T,\\; C \\to T,\\; A \\to R\\}$.\n\n**Bước 2 (Loại thuộc tính dư ở vế trái)**: chỉ xét nhóm có vế trái $CH$. Có $C^+_{F_1} = CT$ và $H^+_{F_1} = H$.\n- Với $CH \\to T$: vì $T \\in C^+_{F_1}$ nên bỏ $H$, rút thành $C \\to T$ (trùng với $C \\to T$ sẵn có nên gộp).\n- Các PTH $CH \\to P,\\; CH \\to A,\\; CH \\to R$ không rút gọn được (cả $C^+_{F_1}$ lẫn $H^+_{F_1}$ đều không chứa $P, A, R$).\nThu được $F_2 = \\{P \\to C,\\; P \\to H,\\; P \\to A,\\; P \\to R,\\; P \\to T,\\; CH \\to P,\\; CH \\to A,\\; CH \\to R,\\; C \\to T,\\; A \\to R\\}$.\n\n**Bước 3 (Loại PTH dư thừa, xét lần lượt từ trái sang phải)**:\n- $P \\to C$: trên phần còn lại, $P^+ = PHART$ (thiếu $C$) $\\Rightarrow$ giữ.\n- $P \\to H$: trên phần còn lại, $P^+ = PCART$ (thiếu $H$) $\\Rightarrow$ giữ.\n- $P \\to A$: từ $P \\to C,\\; P \\to H,\\; CH \\to A$ có $A \\in P^+$ $\\Rightarrow$ **xóa $P \\to A$**.\n- $P \\to R$: từ $P \\to C,\\; P \\to H,\\; CH \\to R$ có $R \\in P^+$ $\\Rightarrow$ **xóa $P \\to R$**.\n- $P \\to T$: từ $P \\to C,\\; C \\to T$ có $T \\in P^+$ $\\Rightarrow$ **xóa $P \\to T$**.\n- $CH \\to P$: trên phần còn lại, $(CH)^+ = CHART$ (thiếu $P$) $\\Rightarrow$ giữ.\n- $CH \\to A$: trên phần còn lại (đã xóa $P \\to A$), $(CH)^+ = CHPRT$ (thiếu $A$) $\\Rightarrow$ giữ.\n- $CH \\to R$: từ $CH \\to A,\\; A \\to R$ có $R \\in (CH)^+$ $\\Rightarrow$ **xóa $CH \\to R$**.\n- $C \\to T$: thiếu $T$ khi bỏ ($C^+ = C$) $\\Rightarrow$ giữ.\n- $A \\to R$: thiếu $R$ khi bỏ ($A^+ = A$) $\\Rightarrow$ giữ.\n\n**Phủ tối thiểu**: **$F_{tt} = \\{P \\to C,\\; P \\to H,\\; CH \\to P,\\; CH \\to A,\\; C \\to T,\\; A \\to R\\}$**.\n*(Lưu ý: nếu ở Bước 3 xóa $CH \\to A$ trước $P \\to A$ thì thu được một phủ tối thiểu tương đương khác là $\\{P \\to C,\\; P \\to H,\\; P \\to A,\\; CH \\to P,\\; C \\to T,\\; A \\to R\\}$.)*'
        },
        {
          q: 'b) $F = \\{X \\to Z,\\; XY \\to ZP,\\; Z \\to RP,\\; X \\to R\\}$',
          a: '**Bước 1 (Tách vế phải)**:\n$F_1 = \\{X \\to Z,\\; XY \\to Z,\\; XY \\to P,\\; Z \\to R,\\; Z \\to P,\\; X \\to R\\}$.\n\n**Bước 2 (Loại thuộc tính dư ở vế trái)**: xét $XY \\to Z$ và $XY \\to P$. Ta có $X^+_{F_1} = XZRP$ (dùng $X \\to Z, Z \\to RP$):\n- $XY \\to Z$: vì $Z \\in X^+_{F_1}$, bỏ $Y$ được $X \\to Z$ (trùng nên gộp).\n- $XY \\to P$: vì $P \\in X^+_{F_1}$, bỏ $Y$ được $X \\to P$.\nThu được $F_2 = \\{X \\to Z,\\; X \\to P,\\; Z \\to R,\\; Z \\to P,\\; X \\to R\\}$.\n\n**Bước 3 (Loại PTH dư thừa)**:\n- $X \\to Z$: nếu bỏ đi, $X^+ = XPR$ (thiếu $Z$) $\\Rightarrow$ giữ.\n- $X \\to P$: từ $X \\to Z,\\; Z \\to P$ có $P \\in X^+$ $\\Rightarrow$ **xóa $X \\to P$**.\n- $Z \\to R$: nếu bỏ đi, $Z^+ = ZP$ (thiếu $R$) $\\Rightarrow$ giữ.\n- $Z \\to P$: nếu bỏ đi, $Z^+ = ZR$ (thiếu $P$) $\\Rightarrow$ giữ.\n- $X \\to R$: từ $X \\to Z,\\; Z \\to R$ có $R \\in X^+$ $\\Rightarrow$ **xóa $X \\to R$**.\n\n**Phủ tối thiểu**: **$F_{tt} = \\{X \\to Z,\\; Z \\to R,\\; Z \\to P\\}$**.'
        },
        {
          q: 'c) $F = \\{A \\to BD,\\; AD \\to C,\\; C \\to B,\\; AB \\to C\\}$',
          a: '**Bước 1 (Tách vế phải)**:\n$F_1 = \\{A \\to B,\\; A \\to D,\\; AD \\to C,\\; C \\to B,\\; AB \\to C\\}$.\n\n**Bước 2 (Loại thuộc tính dư ở vế trái)**: xét $AD \\to C$ và $AB \\to C$. Ta có $A^+_{F_1} = ABDC$:\n- $AD \\to C$: vì $C \\in A^+_{F_1}$, bỏ $D$ được $A \\to C$.\n- $AB \\to C$: vì $C \\in A^+_{F_1}$, bỏ $B$ được $A \\to C$ (trùng nên gộp).\nThu được $F_2 = \\{A \\to B,\\; A \\to D,\\; A \\to C,\\; C \\to B\\}$.\n\n**Bước 3 (Loại PTH dư thừa)**:\n- $A \\to B$: từ $A \\to C,\\; C \\to B$ có $B \\in A^+$ $\\Rightarrow$ **xóa $A \\to B$**.\n- $A \\to D$: nếu bỏ đi, $A^+ = ACB$ (thiếu $D$) $\\Rightarrow$ giữ.\n- $A \\to C$: nếu bỏ đi, $A^+ = AD$ (thiếu $C$) $\\Rightarrow$ giữ.\n- $C \\to B$: nếu bỏ đi, $C^+ = C$ (thiếu $B$) $\\Rightarrow$ giữ.\n\n**Phủ tối thiểu**: **$F_{tt} = \\{A \\to D,\\; A \\to C,\\; C \\to B\\}$**.'
        },
        {
          q: 'd) $F = \\{B \\to D,\\; A \\to BC,\\; AE \\to D\\}$',
          a: '**Bước 1 (Tách vế phải)**:\n$F_1 = \\{B \\to D,\\; A \\to B,\\; A \\to C,\\; AE \\to D\\}$.\n\n**Bước 2 (Loại thuộc tính dư ở vế trái)**: chỉ có $AE \\to D$ có $|X| = 2$. Tính $A^+_{F_1} = ABCD$ (chứa $D$) $\\Rightarrow$ bỏ $E$, rút thành $A \\to D$.\nThu được $F_2 = \\{B \\to D,\\; A \\to B,\\; A \\to C,\\; A \\to D\\}$.\n\n**Bước 3 (Loại PTH dư thừa)**:\n- $B \\to D$: nếu bỏ đi, $B^+ = B$ (thiếu $D$) $\\Rightarrow$ giữ.\n- $A \\to B$: nếu bỏ đi, $A^+ = ACD$ (thiếu $B$) $\\Rightarrow$ giữ.\n- $A \\to C$: nếu bỏ đi, $A^+ = ABD$ (thiếu $C$) $\\Rightarrow$ giữ.\n- $A \\to D$: từ $A \\to B,\\; B \\to D$ có $D \\in A^+$ $\\Rightarrow$ **xóa $A \\to D$**.\n\n**Phủ tối thiểu**: **$F_{tt} = \\{B \\to D,\\; A \\to B,\\; A \\to C\\}$**.'
        }
      ]
    }
  },
  {
    id: 'ch4-tl-06',
    kind: 'ch4',
    title: 'Câu 6: Tìm tất cả các khóa của 4 lược đồ quan hệ',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 6); BT_CSDL(C4) – Câu 5',
    answerStatus: 'tu-giai',
    prompt: 'Tìm tất cả các khóa của lược đồ quan hệ $R$ với các tập PTH như sau:\n- a) $R\\{A, B, C, D\\}$ và $F = \\{AB \\to C,\\; D \\to B,\\; C \\to ABD\\}$\n- b) $R\\{A, B, C, D, E, G\\}$ và $F = \\{B \\to C,\\; C \\to B,\\; A \\to GD\\}$\n- c) $R\\{A, B, H, G, Q, M, N, V, W\\}$ và $F = \\{A \\to B,\\; B \\to H,\\; G \\to Q,\\; V \\to W,\\; W \\to V\\}$\n- d) $R\\{A, B, C, D, E, F\\}$ và $F = \\{AB \\to C,\\; C \\to B,\\; ABD \\to E,\\; F \\to A\\}$',
    answer: {
      steps: [
        'Xác định **tập nguồn ($TN$)** (thuộc tính chỉ ở vế trái **và** thuộc tính không xuất hiện trong $F$) và **tập trung gian ($TG$)** (xuất hiện ở cả hai vế). Các thuộc tính chỉ ở vế phải không nằm trong khóa nào.',
        'Tính $TN^+$: nếu $TN^+ = U$ thì $TN$ là khóa duy nhất; ngược lại lần lượt ghép $TN$ với các tập con $X_i \\subseteq TG$ để tìm mọi siêu khóa $S_i = TN \\cup X_i$ ($S_i^+ = U$).',
        'Loại bỏ các siêu khóa không tối tiểu (nếu $S_i \\subset S_j$ thì loại $S_j$); các tập tối tiểu còn lại là tất cả các khóa.'
      ],
      parts: [
        {
          q: 'a) $R\\{A, B, C, D\\}$ và $F = \\{AB \\to C,\\; D \\to B,\\; C \\to ABD\\}$',
          a: '- Phân loại thuộc tính: $A, B, C, D$ đều xuất hiện ở cả hai vế $\\Rightarrow TN = \\emptyset$, $TG = \\{A, B, C, D\\}$.\n- Xét các tập con của $TG$ theo kích thước tăng dần:\n  - Cỡ 1: $A^+ = A$, $B^+ = B$, $C^+ = CABD = R$ (siêu khóa!), $D^+ = DB$.\n  - Cỡ 2 (bỏ qua các tập chứa $C$ vì sẽ chứa siêu khóa $C$): $(AB)^+ = ABC = ABCD = R$ (siêu khóa!); $(AD)^+ = ADBC = R$ (dùng $D \\to B, AB \\to C$, siêu khóa!); $(BD)^+ = BD$.\n  - Cỡ $\\ge 3$: mọi tập không chứa $C$ chỉ còn $ABD$ (đã chứa $AB$ nên không tối tiểu).\n- Tập 11 siêu khóa của $R$: $\\{C, AB, AD, AC, BC, CD, ABC, ABD, ACD, BCD, ABCD\\}$. Loại các siêu khóa chứa $C, AB$ hoặc $AD$.\n- **Tất cả các khóa**: **$C,\\; AB,\\; AD$**.'
        },
        {
          q: 'b) $R\\{A, B, C, D, E, G\\}$ và $F = \\{B \\to C,\\; C \\to B,\\; A \\to GD\\}$',
          a: '- Phân loại thuộc tính:\n  - $A$ chỉ ở vế trái; $E$ không xuất hiện trong $F$ $\\Rightarrow TN = \\{A, E\\}$.\n  - $B, C$ xuất hiện ở cả hai vế $\\Rightarrow TG = \\{B, C\\}$.\n  - $D, G$ chỉ ở vế phải (loại khỏi khóa).\n- Tính $TN^+ = (AE)^+ = AEGD \\neq R$ (thiếu $B, C$).\n- Ghép các tập con của $TG = \\{B, C\\}$ với $TN = AE$:\n  - $(AE \\cup B)^+ = (ABE)^+ = ABCDEG = R$ (dùng $A \\to GD, B \\to C$) $\\Rightarrow ABE$ là siêu khóa.\n  - $(AE \\cup C)^+ = (ACE)^+ = ABCDEG = R$ (dùng $A \\to GD, C \\to B$) $\\Rightarrow ACE$ là siêu khóa.\n  - $(AE \\cup BC)^+ = (ABCE)^+ = R$ (chứa $ABE, ACE$ nên không tối tiểu $\\Rightarrow$ loại).\n- (Tổng cộng có 12 siêu khóa là các tập chứa $ABE$ hoặc $ACE$.)\n- **Tất cả các khóa**: **$ABE,\\; ACE$**.'
        },
        {
          q: 'c) $R\\{A, B, H, G, Q, M, N, V, W\\}$ và $F = \\{A \\to B,\\; B \\to H,\\; G \\to Q,\\; V \\to W,\\; W \\to V\\}$',
          a: '- Phân loại thuộc tính (chú ý các thuộc tính vắng mặt trong $F$):\n  - $A, G$ chỉ ở vế trái; $M, N$ không xuất hiện trong $F$ $\\Rightarrow TN = \\{A, G, M, N\\}$.\n  - $B, V, W$ ở cả hai vế $\\Rightarrow TG = \\{B, V, W\\}$.\n  - $H, Q$ chỉ ở vế phải (bỏ qua).\n- Tính $TN^+ = (AGMN)^+ = ABHGQMN \\neq R$ (thiếu $V, W$).\n- Ghép các tập con của $TG = \\{B, V, W\\}$ với $TN = AGMN$:\n  - Cỡ 1: $(AGMNB)^+ = ABHGQMN \\neq R$; $(AGMNV)^+ = ABHGQMNVW = R$ (khóa!); $(AGMNW)^+ = ABHGQMNVW = R$ (khóa!).\n  - Cỡ $\\ge 2$: mọi tập chứa $V$ hoặc $W$ đều không tối tiểu (chứa $AGMNV$ hoặc $AGMNW$); không còn tập con nào khác thiếu $V, W$ mà có thể sinh ra $V, W$.\n- **Tất cả các khóa**: **$AGMNV,\\; AGMNW$**.'
        },
        {
          q: 'd) $R\\{A, B, C, D, E, F\\}$ và $F = \\{AB \\to C,\\; C \\to B,\\; ABD \\to E,\\; F \\to A\\}$',
          a: '- Phân loại thuộc tính:\n  - $D, F$ chỉ ở vế trái $\\Rightarrow TN = \\{D, F\\}$.\n  - $A, B, C$ xuất hiện ở cả hai vế $\\Rightarrow TG = \\{A, B, C\\}$.\n  - $E$ chỉ ở vế phải (bỏ qua).\n- Tính $TN^+ = (DF)^+ = ADF \\neq R$ (dùng $F \\to A$).\n- Ghép các tập con của $TG = \\{A, B, C\\}$ với $TN = DF$:\n  - Cỡ 1: $(ADF)^+ = ADF \\neq R$; $(BDF)^+ = ABCDEF = R$ (dùng $F \\to A, AB \\to C, ABD \\to E$) $\\Rightarrow BDF$ là siêu khóa!; $(CDF)^+ = ABCDEF = R$ (dùng $F \\to A, C \\to B, ABD \\to E$) $\\Rightarrow CDF$ là siêu khóa!\n  - Cỡ $\\ge 2$: các tập chứa $B$ hoặc $C$ đều chứa $BDF$ hoặc $CDF$ nên không tối tiểu (loại); tập không chứa $B, C$ chỉ có $ADF$ đã xét.\n- (Tổng cộng có 12 siêu khóa là các tập chứa $BDF$ hoặc $CDF$.)\n- **Tất cả các khóa**: **$BDF,\\; CDF$**.'
        }
      ]
    }
  },
  {
    id: 'ch4-tl-07',
    kind: 'ch4',
    title: 'Câu 7: Kiểm tra bảo toàn PTH và không mất mát thông tin phép tách D',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 7); BT_CSDL(C4) – Câu 6',
    answerStatus: 'tu-giai',
    prompt: 'Cho $R\\{A, B, C, D\\}$ và $F = \\{A \\to B,\\; B \\to C,\\; A \\to D,\\; D \\to C\\}$. Tách thành $D = \\{R_1, R_2, R_3\\}$ với $R_1\\{A, B\\}$, $R_2\\{A, C\\}$, $R_3\\{B, D\\}$.\n- a) Phép tách $D$ có bảo toàn các phụ thuộc hàm hay không?\n- b) Phép tách $D$ có là phép tách – kết nối không mất mát thông tin hay không?',
    answer: {
      steps: [
        '**Ý a (Bảo toàn PTH)**: tính hình chiếu $\\Pi_{R_i}(F) = \\{X \\to Y \\in F^+ \\mid X \\cup Y \\subseteq R_i\\}$ (phải xét từ $F^+$, không chỉ nhặt trực tiếp từ $F$), lập $G = \\bigcup_{i=1}^3 \\Pi_{R_i}(F)$ rồi kiểm tra mọi PTH trong $F$ có thuộc $G^+$ không.',
        '**Ý b (Không mất mát thông tin)**: lập bảng $a_j / b_{ij}$ gồm 3 hàng ($R_1, R_2, R_3$) và 4 cột ($A, B, C, D$), lần lượt đồng nhất giá trị theo từng PTH trong $F$ cho đến khi bảng dừng; phép tách không mất mát TT khi có ít nhất 1 hàng toàn $a_1, a_2, a_3, a_4$.'
      ],
      parts: [
        {
          q: 'a) Phép tách $D$ có bảo toàn các phụ thuộc hàm hay không?',
          a: '**Bước 1 – Tính hình chiếu $\\Pi_{R_i}(F)$ trên từng lược đồ con** (lấy bao đóng các tập con khác rỗng của $R_i$ theo $F$ rồi giao với $R_i$):\n- Trên $R_1 = \\{A, B\\}$: $A^+_F = ABCD \\Rightarrow A^+_F \\cap R_1 = AB$ cho $A \\to B$; $B^+_F = BC \\Rightarrow B^+_F \\cap R_1 = B$. Vậy $\\Pi_{R_1}(F) = \\{A \\to B\\}$.\n- Trên $R_2 = \\{A, C\\}$: $A^+_F = ABCD \\Rightarrow A^+_F \\cap R_2 = AC$ cho $A \\to C$ (suy từ $A \\to B \\to C \\in F^+$); $C^+_F = C$. Vậy $\\Pi_{R_2}(F) = \\{A \\to C\\}$.\n- Trên $R_3 = \\{B, D\\}$: $B^+_F = BC$ ($\\cap R_3 = B$), $D^+_F = DC$ ($\\cap R_3 = D$), $(BD)^+_F = BDC$ ($\\cap R_3 = BD$). Không có PTH không tầm thường nào $\\Rightarrow \\Pi_{R_3}(F) = \\emptyset$.\n\n**Bước 2 – Hợp các hình chiếu**: $G = \\Pi_{R_1}(F) \\cup \\Pi_{R_2}(F) \\cup \\Pi_{R_3}(F) = \\{A \\to B,\\; A \\to C\\}$.\n\n**Bước 3 – Kiểm tra $F \\subseteq G^+$**:\n- $A \\to B \\in G^+$ (có trực tiếp trong $G$).\n- $B \\to C$: $B^+_G = B$ (không chứa $C$) $\\Rightarrow$ **mất $B \\to C$**.\n- $A \\to D$: $A^+_G = ABC$ (không chứa $D$) $\\Rightarrow$ **mất $A \\to D$**.\n- $D \\to C$: $D^+_G = D$ (không chứa $C$) $\\Rightarrow$ **mất $D \\to C$**.\n\n**Kết luận**: Phép tách $D$ **không bảo toàn phụ thuộc hàm** (mất $B \\to C,\\; A \\to D,\\; D \\to C$).'
        },
        {
          q: 'b) Phép tách $D$ có là phép tách – kết nối không mất mát thông tin hay không?',
          a: '**Bước 1 – Bảng khởi tạo $a_j / b_{ij}$** ($A, B, C, D$ ứng với $a_1, a_2, a_3, a_4$):\n$$\\begin{array}{c|cccc} & A & B & C & D \\\\ \\hline R_1(AB) & a_1 & a_2 & b_{13} & b_{14} \\\\ R_2(AC) & a_1 & b_{22} & a_3 & b_{24} \\\\ R_3(BD) & b_{31} & a_2 & b_{33} & a_4 \\end{array}$$\n\n**Bước 2 – Biến đổi bảng theo từng PTH của $F = \\{A \\to B,\\; B \\to C,\\; A \\to D,\\; D \\to C\\}$**:\n- Xét $A \\to B$: $R_1$ và $R_2$ cùng có $A = a_1$. Vì $R_1$ có $B = a_2$ nên đổi $b_{22}$ ở $R_2$ thành $a_2$.\n- Xét $B \\to C$: lúc này cả $R_1, R_2, R_3$ đều có $B = a_2$. Vì $R_2$ có $C = a_3$ nên đổi $b_{13}$ ở $R_1$ và $b_{33}$ ở $R_3$ thành $a_3$.\n- Xét $A \\to D$: $R_1$ và $R_2$ cùng có $A = a_1$, nhưng đều chưa có $a_4$, nên đồng nhất $b_{24}$ ở $R_2$ thành $b_{14}$.\n- Xét $D \\to C$: $R_1$ và $R_2$ cùng $D = b_{14}$ và đã cùng có $C = a_3$; $R_3$ có $D = a_4$ đứng riêng. Lặp lại toàn bộ $F$ không làm bảng thay đổi thêm.\n\n**Bước 3 – Bảng kết quả cuối cùng**:\n$$\\begin{array}{c|cccc} & A & B & C & D \\\\ \\hline R_1 & a_1 & a_2 & a_3 & b_{14} \\\\ R_2 & a_1 & a_2 & a_3 & b_{14} \\\\ R_3 & b_{31} & a_2 & a_3 & a_4 \\end{array}$$\n\n**Kết luận**: Không có hàng nào chứa toàn $(a_1, a_2, a_3, a_4)$ $\\Rightarrow$ phép tách $D$ là phép tách ==mất mát thông tin== (không phải tách – kết nối không mất mát thông tin).'
        }
      ]
    }
  }
);

DB.essays.push(
  {
    id: 'ch4-tl-08',
    kind: 'ch4',
    title: 'Câu 8: Xác định dạng chuẩn cao nhất và tách về 3NF, BCNF (5 lược đồ)',
    source: 'Bài tập tổng hợp (Ch.4 – Câu 8); BT_CSDL(C4) – Câu 7',
    answerStatus: 'tu-giai',
    prompt: 'Xác định dạng chuẩn cao nhất của mỗi lược đồ và tách các lược đồ về dạng cao hơn (3NF và BCNF):\n- a) $R\\{A, B, C, D, E\\}$ và $F = \\{AB \\to CE,\\; E \\to AB,\\; C \\to D\\}$\n- b) $R\\{A, B, C, D, E, G\\}$ và $F = \\{AB \\to C,\\; D \\to EG,\\; C \\to A,\\; BE \\to C,\\; BC \\to D,\\; CG \\to BD,\\; ACD \\to B,\\; CE \\to AG\\}$\n- c) $R\\{A, B, C, D, E, G, H\\}$ và $F = \\{C \\to AB,\\; D \\to E,\\; B \\to G\\}$\n- d) $R\\{A, B, C, D\\}$ và $F = \\{AB \\to C,\\; C \\to ABD\\}$\n- e) $R\\{A, B, C, D, E, G, H\\}$ và $F = \\{A \\to BC,\\; D \\to E,\\; H \\to G\\}$',
    answer: {
      steps: [
        'Tìm tất cả các khóa bằng $TN/TG$ $\\to$ liệt kê **thuộc tính khóa** và **thuộc tính không khóa**; tách vế phải $F$ thành tập $F\'$ có vế phải 1 thuộc tính.',
        'Xác định dạng chuẩn cao nhất từ cao xuống thấp (**BCNF** $\\to$ **3NF** $\\to$ **2NF** $\\to$ **1NF**): BCNF yêu cầu mọi vế trái PTH không tầm thường là siêu khóa; 3NF cho thêm ngoại lệ vế phải là thuộc tính khóa; 2NF yêu cầu không có thuộc tính không khóa phụ thuộc bộ phận vào khóa.',
        'Đưa về **3NF**: dùng thuật toán tổng hợp từ phủ tối thiểu $F_{tt}$ (thêm bảng khóa nếu chưa có bảng nào chứa trọn 1 khóa) để bảo đảm đồng thời **không mất mát TT** và **bảo toàn PTH**.',
        'Đưa về **BCNF**: phân rã từ trên xuống theo PTH vi phạm BCNF; luôn **không mất mát TT** (lưu ý có trường hợp phải đánh đổi, làm mất một số PTH như ở câu b).'
      ],
      parts: [
        {
          q: 'a) $R\\{A, B, C, D, E\\}$ và $F = \\{AB \\to CE,\\; E \\to AB,\\; C \\to D\\}$',
          a: '**Tìm khóa**: $TN = \\emptyset$, $TG = \\{A, B, C, E\\}$ ($D$ chỉ ở vế phải). Thử $E^+ = EABCD = U$ và $(AB)^+ = ABCDE = U$ (còn $A^+ = A, B^+ = B, C^+ = CD$).\n- Các khóa: **$E,\\; AB$**.\n- Thuộc tính khóa: $A, B, E$; thuộc tính không khóa: $C, D$.\n\n**Dạng chuẩn cao nhất**:\n- Tập con thực sự của khóa $AB$ là $A, B$ có $A^+ = A,\\; B^+ = B$ đều không chứa $C, D$ $\\Rightarrow$ đạt **2NF**.\n- Xét $C \\to D$: vế trái $C$ không là siêu khóa ($C^+ = CD \\neq U$) và vế phải $D$ không phải thuộc tính khóa $\\Rightarrow$ vi phạm **3NF**.\n- Kết luận: dạng chuẩn cao nhất là **2NF**.\n\n**Tách về 3NF và BCNF**:\n- Phủ tối thiểu $F_{tt} = \\{AB \\to C,\\; AB \\to E,\\; E \\to A,\\; E \\to B,\\; C \\to D\\}$.\n- Thuật toán tổng hợp 3NF: gom theo vế trái được $ABCE$ (từ $AB$), $EAB$ (là tập con của $ABCE$ nên bỏ), $CD$ (từ $C$). Vì $ABCE$ đã chứa khóa $E$ (và $AB$) nên kết quả là **$R_1(A, B, C, E)$** (khóa $E, AB$; đạt **BCNF**) và **$R_2(C, D)$** (khóa $C$; đạt **BCNF**).\n- Phân rã trực tiếp theo PTH vi phạm $C \\to D$ cũng cho đúng 2 bảng trên. Phép tách $\\{R_1(A, B, C, E),\\; R_2(C, D)\\}$ vừa **đạt BCNF** (nên cũng đạt **3NF**), vừa **không mất mát TT** ($R_1 \\cap R_2 = C \\to CD$) và **bảo toàn PTH**.'
        },
        {
          q: 'b) $R\\{A, B, C, D, E, G\\}$ và $F = \\{AB \\to C,\\; D \\to EG,\\; C \\to A,\\; BE \\to C,\\; BC \\to D,\\; CG \\to BD,\\; ACD \\to B,\\; CE \\to AG\\}$',
          a: '**Tìm khóa**: $TN = \\emptyset$, $TG = \\{A, B, C, D, E, G\\}$.\n- Thử cỡ 1: $A^+=A,\\; B^+=B,\\; C^+=AC,\\; D^+=DEG,\\; E^+=E,\\; G^+=G$ (chưa có khóa 1 thuộc tính).\n- Thử cỡ 2: tìm được **7 khóa** là **$AB,\\; BC,\\; BD,\\; CD,\\; BE,\\; CE,\\; CG$** (các cặp còn lại không đạt $U$: $(AC)^+=AC,\\; (AD)^+=ADEG,\\; (AE)^+=AE,\\; (AG)^+=AG,\\; (BG)^+=BG,\\; (DE)^+=DEG,\\; (DG)^+=DEG,\\; (EG)^+=EG$; mọi tập cỡ $\\ge 3$ không chứa 7 khóa trên đều chỉ nằm trong $\\{A,D,E,G\\}$ hoặc $AC$ nên không đạt $U$).\n- Tất cả 6 thuộc tính $A, B, C, D, E, G$ đều là **thuộc tính khóa** (không có thuộc tính không khóa).\n\n**Dạng chuẩn cao nhất**:\n- Vì không có thuộc tính không khóa $\\Rightarrow R$ đạt **3NF**.\n- Kiểm tra BCNF: $C \\to A$ ($C^+ = AC \\neq U$) và $D \\to EG$ ($D^+ = DEG \\neq U$) có vế trái không phải siêu khóa $\\Rightarrow$ vi phạm **BCNF**.\n- Kết luận: dạng chuẩn cao nhất là **3NF**.\n\n**Tách về 3NF và BCNF**:\n- **Về 3NF**: vì $R$ **đã đạt 3NF** nên không cần tách để đạt 3NF. *(Nếu vẫn chạy thuật toán tổng hợp từ phủ tối thiểu $F_{tt} = \\{AB \\to C,\\; D \\to E,\\; D \\to G,\\; C \\to A,\\; BE \\to C,\\; BC \\to D,\\; CG \\to D,\\; CD \\to B,\\; CE \\to G\\}$ thì thu được 6 lược đồ $\\{ABC,\\; DEG,\\; BCE,\\; BCD,\\; CDG,\\; CEG\\}$, vừa không mất mát TT vừa bảo toàn PTH.)*\n- **Về BCNF** (phân rã theo 2 PTH vi phạm $C \\to A$ và $D \\to EG$):\n1. Tách $R = ABCDEG$ theo $C \\to A$: được **$R_1(A, C)$** (PTH $C \\to A$, khóa $C$ $\\Rightarrow$ **BCNF**) và $R\' = BCDEG$.\n2. Trên $R\' = BCDEG$, xét $\\Pi_{BCDEG}(F)$ vẫn còn $D \\to EG$ vi phạm BCNF ($D^+ \\cap BCDEG = DEG \\neq BCDEG$). Tách $R\'$ theo $D \\to EG$: được **$R_2(D, E, G)$** (PTH $D \\to EG$, khóa $D$ $\\Rightarrow$ **BCNF**) và **$R_3(B, C, D)$**.\n3. Kiểm tra $R_3(B, C, D)$: $\\Pi_{BCD}(F) = \\{BC \\to D,\\; CD \\to B,\\; BD \\to C\\}$, các khóa là $BC, BD, CD$; mọi vế trái PTH không tầm thường đều là siêu khóa $\\Rightarrow$ **BCNF**.\n\nKết quả BCNF: **$D_{\\text{BCNF}} = \\{R_1(A, C),\\; R_2(D, E, G),\\; R_3(B, C, D)\\}$** (**không mất mát TT**, nhưng làm mất 4 PTH là $AB \\to C,\\; BE \\to C,\\; CG \\to BD,\\; CE \\to AG$).'
        },
        {
          q: 'c) $R\\{A, B, C, D, E, G, H\\}$ và $F = \\{C \\to AB,\\; D \\to E,\\; B \\to G\\}$',
          a: '**Tìm khóa**: $C, D$ chỉ ở vế trái và $H$ không xuất hiện trong $F \\Rightarrow TN = \\{C, D, H\\}$; $TG = \\{B\\}$ ($A, E, G$ chỉ ở vế phải). Có $(CDH)^+ = ABCDEGH = U \\Rightarrow$ khóa duy nhất là **$CDH$**.\n- Thuộc tính khóa: $C, D, H$; thuộc tính không khóa: $A, B, E, G$.\n\n**Dạng chuẩn cao nhất**:\n- Tập con thực sự $C \\subset CDH$ có $C^+ = CABG$ chứa thuộc tính không khóa $A, B, G$ (và $D \\subset CDH$ có $D^+ = DE$ chứa $E$) $\\Rightarrow$ vi phạm **2NF**.\n- Kết luận: dạng chuẩn cao nhất là **1NF**.\n\n**Tách về 3NF và BCNF**:\n- Phủ tối thiểu $F_{tt} = \\{C \\to A,\\; C \\to B,\\; D \\to E,\\; B \\to G\\}$.\n- Tổng hợp 3NF theo từng vế trái và bổ sung bảng chứa khóa $CDH$ thu được: **$R_1(A, B, C)$** (PTH $C \\to AB$, khóa $C$), **$R_2(D, E)$** (PTH $D \\to E$, khóa $D$), **$R_3(B, G)$** (PTH $B \\to G$, khóa $B$), **$R_4(C, D, H)$** (không có PTH không tầm thường, khóa $CDH$).\n- Cả 4 lược đồ trên đều đạt **BCNF** (do đó cũng đạt **3NF**); đồng thời phép tách này **không mất mát TT** và **bảo toàn PTH**. *(Nếu tách BCNF từ trên xuống theo thứ tự $B \\to G$, $C \\to AB$, $D \\to E$ cũng cho đúng 4 lược đồ này.)*'
        },
        {
          q: 'd) $R\\{A, B, C, D\\}$ và $F = \\{AB \\to C,\\; C \\to ABD\\}$',
          a: '**Tìm khóa**: $TN = \\emptyset$, $TG = \\{A, B, C\\}$ ($D$ chỉ ở vế phải). Thử $A^+ = A,\\; B^+ = B,\\; C^+ = CABD = U,\\; (AB)^+ = ABCD = U$.\n- Các khóa: **$C,\\; AB$**.\n\n**Dạng chuẩn cao nhất**:\n- Tách vế phải được $F\' = \\{AB \\to C,\\; C \\to A,\\; C \\to B,\\; C \\to D\\}$.\n- Mọi vế trái trong $F\'$ ($AB$ và $C$) đều là **khóa (siêu khóa)** của $R$; mọi tập thuộc tính không chứa $C$ hay $AB$ ($A, B, D, AD, BD$) đều có bao đóng bằng chính nó nên không phát sinh PTH vi phạm nào trong $F^+$.\n- Kết luận: lược đồ $R$ đã đạt ==BCNF== (dạng chuẩn cao nhất là **BCNF**).\n\n**Tách về 3NF và BCNF**:\n- Vì $R$ **đã đạt BCNF** (và hiển nhiên đạt **3NF**) nên **không cần tách** (giữ nguyên lược đồ $R\\{A, B, C, D\\}$).'
        },
        {
          q: 'e) $R\\{A, B, C, D, E, G, H\\}$ và $F = \\{A \\to BC,\\; D \\to E,\\; H \\to G\\}$',
          a: '**Tìm khóa**: $TN = \\{A, D, H\\}$ (đều chỉ ở vế trái), $TG = \\emptyset$ ($B, C, E, G$ chỉ ở vế phải). Tính $(ADH)^+ = ABCDEGH = U \\Rightarrow$ khóa duy nhất là **$ADH$**.\n- Thuộc tính khóa: $A, D, H$; thuộc tính không khóa: $B, C, E, G$.\n\n**Dạng chuẩn cao nhất**:\n- Tập con thực sự $A \\subset ADH$ có $A^+ = ABC$ chứa thuộc tính không khóa $B, C$ (tương tự $D^+ = DE$ chứa $E$, $H^+ = HG$ chứa $G$) $\\Rightarrow$ vi phạm **2NF**.\n- Kết luận: dạng chuẩn cao nhất là **1NF**.\n\n**Tách về 3NF và BCNF**:\n- Phủ tối thiểu $F_{tt} = \\{A \\to B,\\; A \\to C,\\; D \\to E,\\; H \\to G\\}$.\n- Tổng hợp 3NF theo từng vế trái và bổ sung bảng khóa $ADH$ thu được: **$R_1(A, B, C)$** (PTH $A \\to BC$, khóa $A$), **$R_2(D, E)$** (PTH $D \\to E$, khóa $D$), **$R_3(G, H)$** (PTH $H \\to G$, khóa $H$), **$R_4(A, D, H)$** (không có PTH không tầm thường, khóa $ADH$).\n- Cả 4 lược đồ đều đạt **BCNF** (và **3NF**); phép tách **không mất mát TT** và **bảo toàn PTH**.'
        }
      ]
    }
  }
);
