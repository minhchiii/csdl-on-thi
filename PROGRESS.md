# PROGRESS – Web ôn thi Lý thuyết CSDL

Quy ước: `[x]` xong · `[ ]` chưa làm. Nếu bị ngắt giữa chừng, đọc file này rồi làm tiếp từ mục `[ ]` đầu tiên. Không ghi đè file đã xong.

## 0. Chuẩn bị
- [x] Chép tài liệu vào `tai-lieu/` (thêm 2 PDF: Ma trận đề thi, Đề mẫu mới nhất)
- [x] Trích chữ slide/docx/pdf vào `tai-lieu-text/`
- [x] Chép lại 11 đề ảnh vào `tai-lieu-text/de/*.md` (462 câu)
- [x] Chép lại Đề mẫu 720 vào `tai-lieu-text/de/de-mau-720.md` (50 câu, không có đáp án đánh dấu)
- [x] Tải về máy KaTeX, font (Lora/Inter/JetBrains Mono), icon Lucide → `vendor/`
- [x] docs/DATA-GUIDE.md (schema + quy tắc), tools/validate.js, tools/fd.js (máy tính PTH để tự kiểm tra), tools/preview.js (xem trước sơ đồ)

## 1. Khung web
- [x] index.html + style.css + views.css (light/dark, responsive)
- [x] store.js (localStorage), app.js (tab, theme, modal)
- [x] er-svg.js (vẽ ER/EER theo ký hiệu Chen)
- [x] Tab 1 Tóm tắt & Công thức (`summary.js`)
- [x] Tab 2 Flashcard (`flashcards.js`)
- [x] Tab 3 Luyện thi trắc nghiệm (`quiz-core.js`, `quiz-view.js` – luyện tập / thi thử / làm lại câu sai / ẩn câu trùng / ẩn câu thiếu dữ liệu)
- [x] Tab 4 Tự luận (`essays.js` – phụ)
- [x] Nút Cheat Sheet (`cheatsheet.js`)
- [x] Import/Export JSON + kiểm tra định dạng (`io.js`, `schema.js`)
- [x] tools/validate.js

## 2. Tóm tắt + flashcard theo chương
- [x] Ch.1 Tổng quan (data/ch1.js) – flashcard: 32 (8 mục)
- [x] Ch.2 ER + EER (data/ch2.js) – flashcard: 40 (7 mục, 7 sơ đồ)
- [x] Ch.3 Mô hình quan hệ + ĐSQH (data/ch3.js) – flashcard: 42 (9 mục)
- [x] Ch.4 Tổng quan/RBTV (data/ch4-tongquan.js) – flashcard: 24 (5 mục)
- [x] Ch.4 PTH, bao đóng, phủ, khóa (data/ch4-pth.js) – flashcard: 36
- [x] Ch.4 Chuẩn hóa, phép tách (data/ch4-chuanhoa.js) – flashcard: 36 (9 mục)

## 3. Đề thi (số câu chép được → số câu đã đưa vào web)
- [x] Đề mẫu 720 (2023) – 50 → 50 (ngoài slide: 11)
- [x] 2021 – Đề 1 – 33 → 33 (thiếu dữ liệu: 1, ngoài slide: 8)
- [x] 2021 – Đề 2 – 42 → 42 (thiếu dữ liệu: 2, ngoài slide: 5)
- [x] KTHP 2020–2021 (K16) Ca 1 – 50 → 50 (thiếu dữ liệu: 3, ngoài slide: 8)
- [x] KTHP 2020–2021 (K16) Ca 2 – 47 → 47 (thiếu dữ liệu: 3, ngoài slide: 8)
- [x] Giữa kì 2021–2022 (K17) – 25 → 25 (thiếu dữ liệu: 6, ngoài slide: 4)
- [x] KTHP 2021–2022 (K17) Bộ 1 – 48 → 48 (thiếu dữ liệu: 1, ngoài slide: 10)
- [x] KTHP 2021–2022 (K17) Bộ 2 – 23 → 23 (thiếu dữ liệu: 0, ngoài slide: 5)
- [x] Giữa kì (không rõ năm) Đề 1 + Đề 2 – 47 → 47 (thiếu dữ liệu: 9, ngoài slide: 4)
- [x] LTCSDL Đề 1 (không rõ năm) – 47 → 47 (thiếu dữ liệu: 1, ngoài slide: 7)
- [x] LTCSDL Đề 2 (không rõ năm) – 50 → 50 (thiếu dữ liệu: 3, ngoài slide: 8)
- [x] LTCSDL Đề 3 (không rõ năm) – 50 → 50 (thiếu dữ liệu: 1, ngoài slide: 8)
- [x] Bài tập Ch.2 (Google Form) – 60 → 60 (thiếu dữ liệu: 0, ngoài slide: 41)
- [x] Đối chiếu đáp án giữa các câu trùng (92 cụm, 320 câu — 0 lệch đáp án)

## 4. Tự luận (tab phụ)
- [x] ER/EER + chuyển sang quan hệ (tuluan-er.js) – 11 bài (gồm 2 bài EER và 1 ví dụ slide)
- [x] Đại số quan hệ (tuluan-dsqh.js) – 4 bài (35 ý)
- [x] Ch.4 PTH / khóa / chuẩn hóa (tuluan-ch4.js) – 8 bài

## 5. Kiểm tra
- [x] `validate.js` + `check-dups.js`: 572/572 câu trắc nghiệm (13 bộ đề/bài tập), 210 flashcard, 6 phần tóm tắt, 23 bài tự luận; 92 cụm trùng (320 câu) không lệch đáp án; 0 lỗi schema.
- [x] `e2e.js` (Edge headless `file://`, 36/36 bước đạt): kiểm tra cả 4 tab, Cheat sheet (13 ký hiệu SVG + ĐSQH + Quy tắc), KaTeX (0 lỗi), sơ đồ ER/EER SVG (9 hình Tab 1 + 11 sơ đồ Tab 4, 0 lỗi), localStorage, Import/Export JSON, Dark/Light mode, mobile 390px (`390 <= 390`), 0 lỗi console/uncaught.
- [x] Hạn chế từ ảnh/tài liệu nguồn (không phải lỗi code):
  - 6 đề ảnh thiếu câu ở nguồn gốc nên chỉ trích được phần hiện có: `de-2021-1` (33/39, thiếu câu 31–36), `de-2021-2` (42/50, thiếu câu 1–6 và 19–20), `k16-ca2` (47/50, thiếu câu 35–37), `k17-ca1` (48/50, thiếu câu 40 và 48), `k17-ca2` (23/50, chỉ có câu 4–26), `ltcsdl-de1` (47/50, thiếu câu 1–3).
  - 30 câu bị mờ/cắt hình hoặc thiếu đáp án trong ảnh gốc được gắn `incomplete` (giữa kì không rõ năm: 9, giữa kì K17: 6, K16 Ca 1: 3, K16 Ca 2: 3, LTCSDL Đề 2: 3, 2021 Đề 2: 2, K17 Bộ 1: 1, 2021 Đề 1: 1, LTCSDL Đề 1: 1, LTCSDL Đề 3: 1) — giữ nguyên trong ngân hàng câu để tham khảo, mặc định không tính điểm khi thi thử và có nút ẩn.

## Quyết định đã chốt với người dùng
- Đề thi chính thức là trắc nghiệm; tự luận chỉ là tab phụ để luyện.
- Kiến thức EER, kiến trúc 3 mức, tối ưu truy vấn… được tìm thêm ngoài slide, gắn nhãn "Ngoài slide".
- Câu trùng: hiện "Câu này cũng có ở …" và có tùy chọn ẩn câu trùng.
- Câu thiếu dữ liệu: vẫn đưa vào, không tính điểm, có tùy chọn ẩn.
- Thời gian thi thử mặc định như thi thật: 60 phút / 50 câu (theo Ma trận đề thi).
- Màu nhấn: đỏ gạch #b5452b. Có đưa đề giữa kì vào.

## Ghi chú tự quyết (khi chưa rõ)
- Giữa kì: đề 8 ảnh – Đề 2 ghi "30 phút", Đề 1 ghi "60 phút"; Giữa kì K17 (MS Forms, 25 câu) không ghi thời gian, tạm để 30 phút.
- Không có đáp án chính thức; dấu khoanh trong ảnh chỉ hiện để tham khảo ("Trong ảnh khoanh: X").
