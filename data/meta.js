/* Dữ liệu chung: chương, đề thi, ma trận đề. Phải nạp TRƯỚC mọi file data khác. */
window.DB = { chapters: [], exams: [], matrix: [], summary: [], flashcards: [], questions: [], essays: [] };

DB.chapters = [
  { id: 'ch1', no: 1, short: 'Ch.1', title: 'Tổng quan về cơ sở dữ liệu' },
  { id: 'ch2', no: 2, short: 'Ch.2', title: 'Mô hình thực thể liên kết ER / EER' },
  { id: 'ch3', no: 3, short: 'Ch.3', title: 'Mô hình CSDL quan hệ và đại số quan hệ' },
  { id: 'ch4', no: 4, short: 'Ch.4', title: 'Lý thuyết thiết kế CSDL quan hệ' }
];

/* total = số câu đã chép được từ ảnh/PDF (dùng để đối chiếu khi kiểm tra).
   original = số câu của đề gốc (nếu biết). minutes = thời gian thi thật. */
DB.exams = [
  { id: 'de-mau-720', label: 'Đề mẫu 2023 – Mã đề 720', short: 'Đề mẫu 720', year: '2023', group: 'de-mau', minutes: 60, original: 50, total: 50,
    note: 'Đề thi mẫu công bố của Phòng KT&ĐBCLĐT, Học viện KTMM.' },
  { id: 'k17-ca1', label: 'KTHP 2021–2022 (K17) – Bộ 1', short: 'K17 Bộ 1', year: '2021-2022', group: 'cuoi-ki', minutes: 60, original: 50, total: 48,
    note: 'Ảnh không có câu 40 và 48.' },
  { id: 'k17-ca2', label: 'KTHP 2021–2022 (K17) – Bộ 2', short: 'K17 Bộ 2', year: '2021-2022', group: 'cuoi-ki', minutes: 60, original: 50, total: 23,
    note: 'Chỉ chụp được câu 4–26.' },
  { id: 'giuaki-1', label: 'Giữa kì 2021–2022 (K17)', short: 'GK K17', year: '2021-2022', group: 'giua-ki', minutes: 30, original: 25, total: 25,
    note: 'Bài kiểm tra giữa kỳ trên MS Forms (3/2022). Đề không ghi thời gian, tạm để 30 phút.' },
  { id: 'k16-ca1', label: 'KTHP 2020–2021 (K16) – Ca 1', short: 'K16 Ca 1', year: '2020-2021', group: 'cuoi-ki', minutes: 60, original: 50, total: 50,
    note: 'Câu 45, 50 thiếu nội dung; câu 29 thiếu phương án C.' },
  { id: 'k16-ca2', label: 'KTHP 2020–2021 (K16) – Ca 2', short: 'K16 Ca 2', year: '2020-2021', group: 'cuoi-ki', minutes: 60, original: 50, total: 47,
    note: 'Không chụp câu 35–37.' },
  { id: 'de-2021-1', label: '2021 – Đề 1 (bản đánh máy lại)', short: '2021 Đề 1', year: '2021', group: 'cuoi-ki', minutes: 60, original: 39, total: 33,
    note: 'Bản đánh máy lại, thiếu câu 31–36.' },
  { id: 'de-2021-2', label: '2021 – Đề 2', short: '2021 Đề 2', year: '2021', group: 'cuoi-ki', minutes: 60, original: 50, total: 42,
    note: 'Thiếu câu 1–6, 19, 20.' },
  { id: 'giuaki-a', label: 'Giữa kì (không rõ năm) – Đề 1 + Đề 2', short: 'GK cũ', year: 'Không rõ năm', group: 'giua-ki', minutes: 60, original: 47, total: 47,
    note: 'Đề 1 (40 câu, ghi 60 phút) và một trang của Đề 2 (7 câu, ghi 30 phút). Ảnh rất mờ.' },
  { id: 'ltcsdl-de1', label: 'Đề LTCSDL số 1 (không rõ năm)', short: 'LTCSDL 1', year: 'Không rõ năm', group: 'cuoi-ki', minutes: 60, original: 50, total: 47,
    note: 'Thiếu câu 1–3, câu 4 chỉ thấy phương án D.' },
  { id: 'ltcsdl-de2', label: 'Đề LTCSDL số 2 (không rõ năm)', short: 'LTCSDL 2', year: 'Không rõ năm', group: 'cuoi-ki', minutes: 60, original: 50, total: 50,
    note: 'Câu 16, 42, 46 thiếu một phần.' },
  { id: 'ltcsdl-de3', label: 'Đề LTCSDL số 3 (không rõ năm)', short: 'LTCSDL 3', year: 'Không rõ năm', group: 'cuoi-ki', minutes: 60, original: 50, total: 50,
    note: '' },
  { id: 'bt-ch2', label: 'Bài tập Ch.2 – trắc nghiệm ER/EER (Google Form)', short: 'BT Ch.2', year: 'Bài tập', group: 'bai-tap', minutes: 60, original: 60, total: 60,
    note: 'Bộ 60 câu luyện ER/EER, không có đáp án gốc.' }
];

/* Ma trận đề thi (Ngân hàng câu hỏi LTCSDL, HV KTMM 2023): 50 câu / 60 phút, cột P1. */
DB.matrix = [
  { code: '1.1', chapter: 'ch1', level: 'NB', n: 2, title: 'Khái niệm về dữ liệu, CSDL, kiến trúc CSDL' },
  { code: '1.2', chapter: 'ch1', level: 'NB', n: 1, title: 'Khái niệm mô hình CSDL và các mức biểu diễn CSDL' },
  { code: '1.3', chapter: 'ch1', level: 'NB', n: 1, title: 'Hệ quản trị CSDL' },
  { code: '1.4', chapter: 'ch2', level: 'NB', n: 2, title: 'Khái niệm trong mô hình thực thể liên kết' },
  { code: '1.5', chapter: 'ch3', level: 'NB', n: 2, title: 'Khái niệm trong mô hình CSDL quan hệ' },
  { code: '1.6', chapter: 'ch3', level: 'NB', n: 2, title: 'Định nghĩa các phép toán đại số quan hệ' },
  { code: '1.7', chapter: 'ch4', level: 'NB', n: 1, title: 'Định nghĩa về phụ thuộc hàm và các bài toán' },
  { code: '1.8', chapter: 'ch4', level: 'NB', n: 2, title: 'Định nghĩa về các dạng chuẩn, phép tách các lược đồ' },
  { code: '1.9', chapter: 'ch1', level: 'VDC', n: 1, title: 'Câu hỏi tổng quan mức cao' },
  { code: '2.1', chapter: 'ch2', level: 'TH', n: 1, title: 'Xác định đối tượng trong mô hình ER theo mô tả' },
  { code: '2.2', chapter: 'ch2', level: 'TH', n: 1, title: 'Biểu diễn các đối tượng trong mô hình ER' },
  { code: '2.3', chapter: 'ch2', level: 'TH', n: 0, title: 'Biểu diễn các đối tượng trong mô hình EER' },
  { code: '2.4', chapter: 'ch2', level: 'VD', n: 2, title: 'Xây dựng mô hình ER cho bài toán cụ thể' },
  { code: '2.5', chapter: 'ch2', level: 'VDC', n: 1, title: 'Xây dựng mô hình ER mức nâng cao' },
  { code: '2.6', chapter: 'ch2', level: 'VD', n: 0, title: 'Xây dựng mô hình EER cho bài toán cụ thể' },
  { code: '2.7', chapter: 'ch3', level: 'TH', n: 2, title: 'Quy tắc chuyển thực thể và thuộc tính' },
  { code: '2.8', chapter: 'ch3', level: 'TH', n: 1, title: 'Quy tắc chuyển mối liên kết' },
  { code: '2.9', chapter: 'ch3', level: 'TH', n: 2, title: 'Giải thích phép toán cập nhật, chọn, chiếu' },
  { code: '2.10', chapter: 'ch3', level: 'TH', n: 1, title: 'Giải thích phép toán tập hợp' },
  { code: '2.11', chapter: 'ch3', level: 'VD', n: 1, title: 'Tối ưu biểu thức truy vấn' },
  { code: '2.12', chapter: 'ch3', level: 'VD', n: 2, title: 'Áp dụng cho CSDL Thư viện' },
  { code: '2.13', chapter: 'ch3', level: 'VD', n: 2, title: 'Áp dụng cho CSDL Bán hàng' },
  { code: '2.14', chapter: 'ch3', level: 'VD', n: 2, title: 'Áp dụng cho CSDL Sinh viên' },
  { code: '2.15', chapter: 'ch3', level: 'VDC', n: 1, title: 'Các truy vấn mức cao' },
  { code: '3.1', chapter: 'ch4', level: 'TH', n: 1, title: 'Giải thích và vận dụng các luật trong hệ tiên đề Armstrong' },
  { code: '3.2', chapter: 'ch4', level: 'TH', n: 2, title: 'Dấu hiệu nhận biết các dạng chuẩn' },
  { code: '3.3', chapter: 'ch4', level: 'VD', n: 2, title: 'Vận dụng thuật toán tìm khóa cho lược đồ' },
  { code: '3.4', chapter: 'ch4', level: 'TH', n: 2, title: 'Giải thích được PTH đầy đủ và PTH dư thừa' },
  { code: '3.5', chapter: 'ch4', level: 'VD', n: 2, title: 'Vận dụng tìm bao đóng của tập thuộc tính' },
  { code: '3.6', chapter: 'ch4', level: 'VDC', n: 0, title: 'Chứng minh phép tách mất mát thông tin / bảo toàn PTH' },
  { code: '3.7', chapter: 'ch4', level: 'VD', n: 2, title: 'Vận dụng hệ tiên đề Armstrong để chứng minh các suy dẫn' },
  { code: '3.8', chapter: 'ch4', level: 'TH', n: 2, title: 'Tìm tập các siêu khóa của lược đồ' },
  { code: '3.9', chapter: 'ch4', level: 'VD', n: 2, title: 'Vận dụng tìm phủ tối thiểu, phủ tương đương' },
  { code: '3.10', chapter: 'ch4', level: 'VD', n: 2, title: 'Xác định dạng chuẩn cao nhất của lược đồ' },
  { code: '3.11', chapter: 'ch4', level: 'VDC', n: 0, title: 'Tách các lược đồ về chuẩn 3NF, BCNF' }
];
