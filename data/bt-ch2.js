/* Bài tập Ch.2 – Trắc nghiệm ER & EER (Google Form, 60 câu) – nguồn: tai-lieu-text/BT CHƯƠNG 2.txt */
DB.questions.push(
{
  id: 'bt-ch2-01', exam: 'bt-ch2', no: 1, chapter: 'ch2', topic: '2.1',
  stem: 'Mô tả “nhân viên A giám sát nhân viên B” là ví dụ điển hình của loại liên kết nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết bắt buộc nhiều–nhiều giữa các phòng ban' },
    { key: 'B', text: 'Liên kết ba ngôi' },
    { key: 'C', text: 'Liên kết đệ quy với hai vai trò khác nhau của NHANVIEN' },
    { key: 'D', text: 'Liên kết giữa hai thuộc tính của cùng thực thể' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19, **liên kết đệ quy** (bậc 1) là liên kết trong đó cùng một kiểu thực thể tham gia với các vai trò khác nhau (slide lấy đúng ví dụ *Nhân viên A giám sát nhân viên B*).\n- **C đúng**: `NHANVIEN` tham gia qua hai nhánh vai trò (`người giám sát` và `người bị giám sát`).\n- **A sai**: chỉ có một kiểu thực thể `NHANVIEN`, không liên quan giữa các phòng ban.\n- **B sai**: liên kết đệ quy có bậc 1 chứ không phải liên kết ba ngôi (bậc 3).\n- **D sai**: liên kết nối giữa các kiểu thực thể, không nối giữa hai thuộc tính.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.19']
},
{
  id: 'bt-ch2-02', exam: 'bt-ch2', no: 2, chapter: 'ch2', topic: '2.4',
  stem: 'Trong một bệnh viện, một bệnh nhân có nhiều lần nhập viện và mỗi lần có ngày vào, ngày ra. Phát biểu nào phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'Mỗi lần nhập viện tạo một bệnh nhân mới' },
    { key: 'B', text: 'Ngày_ra là khóa của bệnh nhân trong mọi trường hợp' },
    { key: 'C', text: 'Mô hình LAN_NHAP_VIEN là thực thể sự kiện để không ghi đè thông tin các đợt' },
    { key: 'D', text: 'Đặt một cặp ngày vào/ra đơn trị duy nhất tại BENHNHAN' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi một đối tượng lặp lại cùng một hành động nhiều lần theo thời gian, cần tách thành **thực thể sự kiện** (hoặc thực thể yếu) để lưu lịch sử từng đợt.\n- **C đúng**: `LAN_NHAP_VIEN` gắn với `BENHNHAN` (`1:N`) giữ trọn vẹn `Ngày_vào`, `Ngày_ra` của từng lần nhập viện.\n- **A sai**: tạo bệnh nhân mới gây trùng lặp dữ liệu cho cùng một người.\n- **B sai**: `Ngày_ra` có thể trùng giữa nhiều bệnh nhân hoặc rỗng nếu chưa xuất viện.\n- **D sai**: cặp thuộc tính đơn trị sẽ bị ghi đè mỗi khi bệnh nhân nhập viện đợt mới.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-03', exam: 'bt-ch2', no: 3, chapter: 'ch2', topic: '2.4',
  stem: 'Một bác sĩ khám cho một bệnh nhân tại một phòng vào thời điểm xác định. Cần lưu ghi chú của từng lần khám. Thiết kế khái niệm nào tốt nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Gộp tất cả ghi chú thành một chuỗi trong thuộc tính Họ_tên_bệnh_nhân' },
    { key: 'B', text: 'Đặt Ghi_chú là thuộc tính cố định của bác sĩ' },
    { key: 'C', text: 'Chỉ tạo một quan hệ BÁC_SĨ–PHÒNG và bỏ bệnh nhân' },
    { key: 'D', text: 'Tạo thực thể sự kiện LAN_KHAM liên kết bác sĩ, bệnh nhân, phòng và thời điểm' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Mỗi lần khám là một sự kiện nghiệp vụ kết nối đồng thời bác sĩ, bệnh nhân, phòng khám tại một thời điểm và có thuộc tính riêng là `Ghi_chú`.\n- **D đúng**: mô hình hóa thực thể sự kiện `LAN_KHAM` liên kết đủ 3 đối tượng cùng thời điểm và mang `Ghi_chú` riêng cho từng lượt.\n- **A sai**: nhồi ghi chú vào `Họ_tên_bệnh_nhân` vi phạm tính nguyên tử và làm mất lịch sử từng lần khám.\n- **B sai**: `Ghi_chú` thay đổi theo từng ca khám chứ không cố định theo bác sĩ.\n- **C sai**: bỏ bệnh nhân làm mất đối tượng được khám.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-04', exam: 'bt-ch2', no: 4, chapter: 'ch2', topic: '2.3',
  stem: 'Một NGUOI có thể đồng thời là SINHVIEN và NHANVIEN. Điều này cần ràng buộc nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ liên kết một–một' },
    { key: 'B', text: 'Tách biệt (disjoint)' },
    { key: 'C', text: 'Phủ lấp (overlap)' },
    { key: 'D', text: 'Toàn phần kết hợp tách biệt bắt buộc' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong mô hình EER, tính tách biệt của chuyên biệt hóa xét xem một thực thể lớp cha có thể thuộc nhiều lớp con cùng lúc hay không.\n- **C đúng**: ràng buộc **phủ lấp / chồng lấn (`o` – overlap)** cho phép một thực thể `NGUOI` đồng thời là thành viên của cả `SINHVIEN` và `NHANVIEN`.\n- **B và D sai**: ràng buộc tách biệt (`d` – disjoint) cấm một cá thể thuộc từ hai lớp con trở lên.\n- **A sai**: liên kết `1:1` không phải ràng buộc phân loại lớp cha–con.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-05', exam: 'bt-ch2', no: 5, chapter: 'ch2', topic: '2.3',
  stem: 'Một XE được phân loại là XE_DIESEL hoặc XE_DIEN và không thể thuộc cả hai nhóm đồng thời. Ràng buộc là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết nhiều–nhiều' },
    { key: 'B', text: 'Tách biệt (disjoint)' },
    { key: 'C', text: 'Tham gia bộ phận' },
    { key: 'D', text: 'Phủ lấp (overlap)' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi hai lớp con loại trừ lẫn nhau (một thực thể lớp cha chỉ thuộc **tối đa một** lớp con), EER dùng ràng buộc tách biệt.\n- **B đúng**: **tách biệt (`d` – disjoint)** đảm bảo một `XE` không thể vừa là `XE_DIESEL` vừa là `XE_DIEN`.\n- **D sai**: phủ lấp cho phép thuộc cả hai nhóm đồng thời.\n- **C sai**: tham gia bộ phận nói về tính đầy đủ chứ không nói về việc loại trừ nhau giữa các lớp con.\n- **A sai**: `M:N` là bản số của liên kết giữa các thực thể.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-06', exam: 'bt-ch2', no: 6, chapter: 'ch2', topic: '2.4',
  stem: 'Trong hệ thống thi trực tuyến, một sinh viên làm nhiều lần một bài kiểm tra; mỗi lần có thời gian bắt đầu, kết thúc và điểm. Thực thể phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'LAN_LAM_BAI có định danh lần làm và liên kết SINHVIEN với BAI_KIEM_TRA' },
    { key: 'B', text: 'Gắn điểm cuối cùng vào tên sinh viên và bỏ lịch sử' },
    { key: 'C', text: 'Mỗi bài kiểm tra chỉ lưu một điểm cho tất cả sinh viên' },
    { key: 'D', text: 'Đặt thời gian bắt đầu làm khóa của kiểu SINHVIEN trên toàn hệ thống' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Một sinh viên làm cùng một bài kiểm tra nhiều lần thì cặp `(SINHVIEN, BAI_KIEM_TRA)` không đủ phân biệt các lượt làm.\n- **A đúng**: tạo thực thể sự kiện `LAN_LAM_BAI` có định danh riêng (gắn thời gian bắt đầu, kết thúc, điểm) liên kết với `SINHVIEN` và `BAI_KIEM_TRA`.\n- **B và C sai**: làm mất lịch sử các lần thi và điểm riêng của từng sinh viên.\n- **D sai**: nhiều sinh viên có thể bắt đầu làm bài cùng thời điểm nên không thể làm khóa của `SINHVIEN`.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-07', exam: 'bt-ch2', no: 7, chapter: 'ch2', topic: '2.2',
  stem: 'Quan hệ SINHVIEN đăng ký MONHOC cần lưu Điểm_kết_thúc riêng theo từng lần đăng ký. Điểm_kết_thúc nên gắn với đâu trong mô hình ER đơn giản?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ thực thể MONHOC' },
    { key: 'B', text: 'Liên kết ĐĂNG_KÝ giữa SINHVIEN và MONHOC' },
    { key: 'C', text: 'Thực thể KHOA của giảng viên' },
    { key: 'D', text: 'Chỉ thực thể SINHVIEN' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.17, các giá trị phát sinh từ sự tương tác giữa các thực thể được đặt làm **thuộc tính của liên kết** (elip gắn với hình thoi).\n- **B đúng**: `Điểm_kết_thúc` phụ thuộc cả `SINHVIEN` lẫn `MONHOC`, nên gắn vào liên kết `ĐĂNG_KÝ`.\n- **A và D sai**: một môn có nhiều sinh viên với điểm khác nhau và một sinh viên học nhiều môn với điểm khác nhau.\n- **C sai**: `KHOA` không xác định điểm thi của từng sinh viên trên từng môn.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.17']
},
{
  id: 'bt-ch2-08', exam: 'bt-ch2', no: 8, chapter: 'ch2', topic: '1.4',
  stem: 'Mục đích chính của mô hình thực thể–liên kết (ER) ở giai đoạn phân tích là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Quy định vị trí vật lý từng khối dữ liệu trên ổ cứng' },
    { key: 'B', text: 'Thay thế mọi bước thu thập yêu cầu của hệ thống' },
    { key: 'C', text: 'Tối ưu trực tiếp mã máy của hệ điều hành' },
    { key: 'D', text: 'Mô tả các thực thể, thuộc tính, mối liên kết và ràng buộc của miền nghiệp vụ' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.2, mô hình ER là mô hình **mô tả súc tích** các yêu cầu dữ liệu ở mức quan niệm của người dùng.\n- **D đúng**: mô hình mô tả chi tiết tập thực thể, thuộc tính, mối liên kết và các ràng buộc nghiệp vụ.\n- **A và C sai**: thuộc tầng vật lý / hệ điều hành, không thuộc giai đoạn phân tích khái niệm.\n- **B sai**: ER được xây dựng *sau khi* thu thập tài liệu, hồ sơ khảo sát (Slide tr.26) chứ không thay thế bước khảo sát.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.2']
},
{
  id: 'bt-ch2-09', exam: 'bt-ch2', no: 9, chapter: 'ch2', topic: '2.1',
  stem: 'Một sinh viên có thể đăng ký nhiều số điện thoại liên hệ. Trong ER, Điện_thoại nên được phân loại là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính suy dẫn' },
    { key: 'B', text: 'Thuộc tính khóa duy nhất' },
    { key: 'C', text: 'Thuộc tính đa trị' },
    { key: 'D', text: 'Thuộc tính đơn trị bắt buộc' }
  ],
  answer: 'C', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.10, **thuộc tính đa trị** là thuộc tính có thể nhận nhiều giá trị đồng thời cho một thực thể (elip kép; slide lấy đúng ví dụ `Điện_thoại`).\n- **C đúng**: một sinh viên có thể có nhiều số điện thoại nên `Điện_thoại` là thuộc tính đa trị.\n- **A sai**: số điện thoại phải nhập vào, không tính toán suy ra từ thuộc tính khác.\n- **B sai**: thuộc tính khóa nên là thuộc tính đơn, ổn định (Slide tr.13), không dùng thuộc tính đa trị.\n- **D sai**: đơn trị chỉ cho phép tối đa một giá trị.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.10']
},
{
  id: 'bt-ch2-10', exam: 'bt-ch2', no: 10, chapter: 'ch2', topic: '1.4',
  stem: 'Trong mô hình ER kiểu Chen, thực thể yếu thường được vẽ bằng ký hiệu nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Hình thoi nét đơn' },
    { key: 'B', text: 'Hình chữ nhật nét đôi' },
    { key: 'C', text: 'Hình tam giác' },
    { key: 'D', text: 'Hình elip nét đôi' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.5, thực thể yếu (sự tồn tại phụ thuộc vào thực thể sở hữu) được biểu diễn kèm liên kết sở hữu (hình thoi nét đôi).\n- **B đúng**: kiểu thực thể yếu vẽ bằng **hình chữ nhật nét đôi**.\n- **A sai**: hình thoi nét đơn là ký hiệu liên kết thông thường.\n- **D sai**: hình elip nét đôi là ký hiệu thuộc tính đa trị.\n- **C sai**: hình tam giác không phải ký hiệu thực thể yếu trong ER kiểu Chen.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.5']
},
{
  id: 'bt-ch2-11', exam: 'bt-ch2', no: 11, chapter: 'ch2', topic: '2.3',
  stem: 'Một NGUOI có thể không thuộc bất cứ kiểu con nào trong hai kiểu SINHVIEN và GIANGVIEN. Ràng buộc đầy đủ là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc ba ngôi' },
    { key: 'B', text: 'Khóa bộ phận' },
    { key: 'C', text: 'Từng phần (partial)' },
    { key: 'D', text: 'Toàn phần (total)' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong EER, ràng buộc đầy đủ (*completeness constraint*) xác định mọi thực thể lớp cha có bắt buộc thuộc ít nhất một lớp con hay không.\n- **C đúng**: **từng phần (`partial`)** cho phép một thực thể lớp cha (`NGUOI`) không thuộc bất kỳ lớp con nào (vẽ nét đơn từ lớp cha tới vòng tròn).\n- **D sai**: toàn phần (`total`) buộc mọi `NGUOI` phải là `SINHVIEN` hoặc `GIANGVIEN`.\n- **A và B sai**: thuộc về bậc liên kết và khóa của thực thể yếu.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-12', exam: 'bt-ch2', no: 12, chapter: 'ch2', topic: '2.4',
  stem: 'Trong hệ thống cung ứng, một nhà cung cấp giao một vật tư cho một dự án với số lượng cụ thể. Nếu chỉ lưu ba liên kết nhị phân riêng rẽ giữa các cặp, nguy cơ lớn nhất là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Tăng khả năng mô tả đầy đủ giao dịch cung ứng' },
    { key: 'B', text: 'Tự động kiểm tra được số lượng tối đa theo ngày' },
    { key: 'C', text: 'Không xác định được chính xác bộ ba nhà cung cấp–vật tư–dự án và số lượng tương ứng' },
    { key: 'D', text: 'Luôn suy ra duy nhất được số lượng cho từng bộ ba' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Giao dịch cung ứng là một **liên kết bậc ba** (`NHA_CUNGCAP – VAT_TU – DU_AN`) có thuộc tính `Số_lượng` gắn với cả ba đối tượng.\n- **C đúng**: tách thành 3 liên kết nhị phân riêng rẽ chỉ biết cặp nào có liên hệ với nhau nhưng mất thông tin bộ ba nào đi cùng nhau và không gắn được đúng `Số_lượng`.\n- **A, B, D sai**: tách nhị phân làm suy giảm ngữ nghĩa mô tả và không suy ra ngược được bộ ba gốc.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-13', exam: 'bt-ch2', no: 13, chapter: 'ch2', topic: '2.6',
  stem: 'Một lược đồ EER có kiểu cha THANHVIEN và hai kiểu con THANHVIEN_VIP, THANHVIEN_THUONG. Sau này một người có thể được nâng hạng theo thời gian. Điều gì cần chú ý?',
  figure: null,
  options: [
    { key: 'A', text: 'Mọi sự thay đổi hạng làm đổi khóa định danh người' },
    { key: 'B', text: 'Không thể dùng EER khi có chuyển trạng thái' },
    { key: 'C', text: 'Một người phải đồng thời là VIP và thường mọi lúc' },
    { key: 'D', text: 'Phân biệt phân loại hiện tại với lịch sử hạng thành viên; cần lưu các giai đoạn nếu phải truy vết' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Phân lớp cha–con trong EER phản ánh phân loại tại thời điểm hiện hành; nếu nghiệp vụ cần biết quá khứ thay đổi hạng thì cần cấu trúc lưu vết riêng.\n- **D đúng**: tách bạch phân loại hiện tại và lịch sử các giai đoạn nâng/hạ hạng để không mất dấu khi chuyển nhóm.\n- **A sai**: khóa của `THANHVIEN` phải ổn định theo thời gian và được các lớp con kế thừa.\n- **B và C sai**: EER vẫn dùng được khi có chuyển hạng, và VIP/Thường là hai hạng tách biệt tại một thời điểm.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-14', exam: 'bt-ch2', no: 14, chapter: 'ch2', topic: '2.4',
  stem: 'Quy tắc “một giảng viên không dạy quá ba học phần trong cùng học kỳ” cần thông tin nào để kiểm tra chính xác?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ năm sinh của giảng viên' },
    { key: 'B', text: 'Chỉ tên giảng viên' },
    { key: 'C', text: 'Giảng viên, học phần, học kỳ và số phân công trong kỳ' },
    { key: 'D', text: 'Chỉ tên khoa' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Ràng buộc giới hạn số lượng học phần được dạy *theo từng học kỳ* đòi hỏi dữ liệu phân công phải xác định theo cả giảng viên lẫn học kỳ.\n- **C đúng**: cần đủ thông tin về giảng viên, học phần, học kỳ để đếm số phân công của mỗi giảng viên trong từng kỳ.\n- **A, B, D sai**: thiếu thông tin phân công giảng dạy và mốc học kỳ nên không kiểm tra được quy tắc.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-15', exam: 'bt-ch2', no: 15, chapter: 'ch2', topic: '1.4',
  stem: 'Trong EER, kiểu thực thể con (subtype) có đặc điểm kế thừa nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Kế thừa các thuộc tính và mối liên kết áp dụng cho kiểu cha' },
    { key: 'B', text: 'Luôn phải có khóa hoàn toàn khác kiểu cha' },
    { key: 'C', text: 'Không thể có thuộc tính riêng' },
    { key: 'D', text: 'Không được sử dụng khóa của kiểu cha' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo quy tắc kế thừa trong EER (quan hệ IS-A: mọi cá thể lớp con cũng là một cá thể lớp cha), lớp con thừa hưởng mọi đặc trưng chung từ lớp cha.\n- **A đúng**: kiểu thực thể con kế thừa toàn bộ thuộc tính (kể cả khóa) và mối liên kết của kiểu cha.\n- **B và D sai**: khóa của kiểu con được kế thừa từ kiểu cha.\n- **C sai**: ngoài phần kế thừa, kiểu con hoàn toàn có thể có thêm thuộc tính và liên kết đặc thù riêng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);

DB.questions.push(
{
  id: 'bt-ch2-16', exam: 'bt-ch2', no: 16, chapter: 'ch2', topic: '2.6',
  stem: 'Vì sao EER thường phù hợp hơn ER cơ bản để mô hình hóa cán bộ hành chính và giảng viên?',
  figure: null,
  options: [
    { key: 'A', text: 'Vì có thể biểu diễn thuộc tính chung, thuộc tính đặc thù và ràng buộc kiểu con' },
    { key: 'B', text: 'Vì EER yêu cầu mọi dữ liệu chỉ có một thuộc tính' },
    { key: 'C', text: 'Vì EER loại bỏ hoàn toàn mọi thực thể và liên kết' },
    { key: 'D', text: 'Vì EER tự triển khai mọi giao dịch trên máy chủ' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Cán bộ hành chính và giảng viên cùng thuộc nhóm nhân sự/cán bộ nhưng có những đặc trưng và mối liên kết nghiệp vụ khác nhau.\n- **A đúng**: EER dùng lớp cha chung cho thuộc tính dùng chung, các lớp con cho thuộc tính/liên kết đặc thù (như giờ giảng, hướng dẫn luận văn) và thể hiện rõ ràng buộc `d`/`o`, toàn phần/từng phần.\n- **B, C, D sai**: EER mở rộng chứ không giới hạn một thuộc tính, không xóa thực thể/liên kết và không phải hệ quản trị thực thi giao dịch trên máy chủ.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-17', exam: 'bt-ch2', no: 17, chapter: 'ch2', topic: '2.5',
  stem: 'Quy định “hóa đơn chỉ được lập khi khách hàng chưa bị khóa tài khoản” thuộc loại ràng buộc nào khó mô tả bằng ER thuần?',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc điều kiện tác vụ theo trạng thái hệ thống' },
    { key: 'B', text: 'Chỉ là ký hiệu thực thể mạnh' },
    { key: 'C', text: 'Chỉ là quan hệ một–một' },
    { key: 'D', text: 'Chỉ là thuộc tính đa trị' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Sơ đồ ER thuần mô tả cấu trúc thực thể, thuộc tính và lực lượng tĩnh chứ không kiểm tra được điều kiện giá trị trạng thái tại thời điểm chạy giao dịch.\n- **A đúng**: kiểm tra tài khoản chưa bị khóa trước khi lập hóa đơn là **ràng buộc điều kiện tác vụ theo trạng thái hệ thống** (cần đặc tả thêm bằng quy tắc nghiệp vụ/trigger).\n- **B, C, D sai**: thực thể mạnh, quan hệ `1:1` hay thuộc tính đa trị không biểu diễn được điều kiện kiểm tra trạng thái khi thực hiện tác vụ.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-18', exam: 'bt-ch2', no: 18, chapter: 'ch2', topic: '2.3',
  stem: '“Mỗi lớp phải có tối thiểu 15 và tối đa 45 sinh viên” là ví dụ của quy tắc nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Quy tắc xác định loại dữ liệu hình ảnh' },
    { key: 'B', text: 'Giới hạn cận dưới và cận trên' },
    { key: 'C', text: 'Ràng buộc toàn phần của chuyên biệt hóa' },
    { key: 'D', text: 'Quy tắc yêu cầu liên kết đệ quy' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong ký hiệu mở rộng `(min, max)`, mỗi đầu liên kết mang hai cận số nguyên chỉ số lần tham gia tối thiểu và tối đa của một thực thể.\n- **B đúng**: tối thiểu `15` và tối đa `45` sinh viên chính là **giới hạn cận dưới và cận trên** `(15, 45)` trên liên kết giữa `LOP` và `SINHVIEN`.\n- **A, C, D sai**: không liên quan đến kiểu dữ liệu hình ảnh, chuyên biệt hóa lớp cha–con hay liên kết đệ quy.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-19', exam: 'bt-ch2', no: 19, chapter: 'ch2', topic: '2.2',
  stem: 'Trong sơ đồ dữ liệu, liên kết đệ quy NHANVIEN giám sát NHANVIEN được đặt hai nhánh vai trò. Vì sao cần ghi vai trò?',
  figure: null,
  options: [
    { key: 'A', text: 'Để phân biệt người giám sát với người được giám sát trong cùng một liên kết' },
    { key: 'B', text: 'Vì liên kết đệ quy luôn có ba kiểu thực thể' },
    { key: 'C', text: 'Vì nhãn vai trò thay thế hoàn toàn ràng buộc lực lượng' },
    { key: 'D', text: 'Vì mọi nhân viên đều đồng thời là quản lý của chính mình' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19, liên kết đệ quy chỉ gắn với một kiểu thực thể duy nhất nhưng thực thể đó đóng các vai trò khác nhau.\n- **A đúng**: hai nhánh đều nối về `NHANVIEN`, nên phải ghi nhãn vai trò để phân biệt nhánh nào là `người giám sát` và nhánh nào là `người được giám sát`.\n- **B sai**: liên kết đệ quy là liên kết bậc 1 (chỉ 1 kiểu thực thể).\n- **C sai**: vẫn cần ghi bản số (`1:N`) bên cạnh nhãn vai trò.\n- **D sai**: trái với nghiệp vụ quản lý thông thường.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.19']
},
{
  id: 'bt-ch2-20', exam: 'bt-ch2', no: 20, chapter: 'ch2', topic: '2.4',
  stem: 'Một chuyến bay có sân bay đi và sân bay đến, đều tham chiếu kiểu SANBAY. Cách mô hình nào đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Gộp hai sân bay thành một giá trị “sân bay bất kỳ”' },
    { key: 'B', text: 'Dùng hai vai trò “khởi hành” và “đến” của SANBAY trong liên kết với CHUYENBAY' },
    { key: 'C', text: 'Chỉ sử dụng tên hãng bay để suy ra sân bay đi và đến' },
    { key: 'D', text: 'Tạo SANBAY_DI và SANBAY_DEN không có lý do nghiệp vụ khác' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.19, một kiểu thực thể có thể tham gia với các vai trò khác nhau để tránh nhân bản cùng một đối tượng.\n- **B đúng**: giữ một kiểu thực thể `SANBAY` duy nhất và liên kết với `CHUYENBAY` qua hai vai trò rõ nghĩa là `khởi hành` và `đến`.\n- **A và C sai**: làm mất hoàn toàn thông tin điểm đi và điểm đến của chuyến bay.\n- **D sai**: tách thành `SANBAY_DI` và `SANBAY_DEN` gây dư thừa dữ liệu khi các thuộc tính và bản chất đối tượng hoàn toàn giống nhau.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.19']
},
{
  id: 'bt-ch2-21', exam: 'bt-ch2', no: 21, chapter: 'ch2', topic: '2.3',
  stem: 'Quy tắc “mọi PHUONG_TIEN đều phải là XE_MAY hoặc XE_OTO” thể hiện ràng buộc tính đầy đủ nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Liên kết đệ quy' },
    { key: 'B', text: 'Chuyên biệt hóa toàn phần (total)' },
    { key: 'C', text: 'Chuyên biệt hóa từng phần (partial)' },
    { key: 'D', text: 'Tham gia tối đa bằng 0' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Ràng buộc tính đầy đủ (*completeness*) cho biết liệu mọi thực thể lớp cha có bắt buộc thuộc ít nhất một lớp con hay không.\n- **B đúng**: vì *mọi* `PHUONG_TIEN` đều phải là `XE_MAY` hoặc `XE_OTO` (không có thực thể cha nào đứng ngoài), đây là **chuyên biệt hóa toàn phần (`total`)** (nét đôi từ lớp cha tới vòng tròn).\n- **C sai**: từng phần (`partial`) cho phép tồn tại thực thể cha không thuộc lớp con nào.\n- **A và D sai**: không phải ràng buộc đầy đủ trong chuyên biệt hóa EER.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-22', exam: 'bt-ch2', no: 22, chapter: 'ch2', topic: '2.4',
  stem: 'Một sản phẩm thay đổi giá theo ngày, cần truy cứu giá có hiệu lực vào ngày bán. Giải pháp mô hình hóa nào đúng hơn?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ lưu Gia_hien_tai và ghi đè khi cập nhật' },
    { key: 'B', text: 'Tạo một thực thể khách hàng mới khi đổi giá' },
    { key: 'C', text: 'Tạo LICH_SU_GIA với thời gian hiệu lực và mức giá của sản phẩm' },
    { key: 'D', text: 'Đưa Ngay_sinh của nhân viên vào sản phẩm' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Thuộc tính thay đổi theo thời gian nhưng cần tra cứu lại giá trị quá khứ không thể lưu bằng một cột đơn trị ghi đè (cũng phù hợp nguyên tắc xử lý thuộc tính phụ thuộc thời gian).\n- **C đúng**: tạo thực thể `LICH_SU_GIA` gắn với `SANPHAM` gồm khoảng/mốc thời gian hiệu lực và mức giá giúp truy cứu chính xác giá tại mọi ngày bán.\n- **A sai**: ghi đè `Gia_hien_tai` làm mất dữ liệu giá cũ.\n- **B và D sai**: đổi giá sản phẩm không liên quan đến tạo khách hàng mới hay ngày sinh nhân viên.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-23', exam: 'bt-ch2', no: 23, chapter: 'ch2', topic: '2.2',
  stem: 'Một số điện thoại có thể bắt đầu bằng số 0 và không dùng để tính toán số học. Kiểu dữ liệu logic nào phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'Số thực dấu phẩy động' },
    { key: 'B', text: 'Giá trị ngày tháng' },
    { key: 'C', text: 'Chuỗi ký tự' },
    { key: 'D', text: 'Số nguyên dùng để cộng trừ' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi chọn kiểu dữ liệu cho thuộc tính, cần căn cứ vào mục đích xử lý và định dạng lưu trữ (không chỉ nhìn thấy toàn chữ số mà chọn kiểu số).\n- **C đúng**: **chuỗi ký tự** giữ nguyên chữ số `0` đứng đầu (VD `098...`), hỗ trợ độ dài lớn và ký tự mở rộng (`+84`, `-`).\n- **A và D sai**: kiểu số tự động cắt mất số `0` ở đầu, dễ làm tròn (số thực) và sinh lỗi tràn miền số nguyên.\n- **B sai**: số điện thoại không biểu diễn ngày tháng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-24', exam: 'bt-ch2', no: 24, chapter: 'ch2', topic: '2.5',
  stem: 'Một quy tắc yêu cầu “mọi dự án có ít nhất một người tham gia” nhưng lúc khởi tạo dự án chưa phân công nhân sự. Vấn đề cần xử lý là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Làm rõ giai đoạn trạng thái: dự án nháp có thể chưa có người, dự án triển khai mới bắt buộc có người' },
    { key: 'B', text: 'Không cần lưu trạng thái dự án' },
    { key: 'C', text: 'Đổi tên thuộc tính thành M:N là đủ' },
    { key: 'D', text: 'Bắt mọi dự án thuộc hai kiểu con tách biệt và toàn phần ngay lập tức' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Nếu áp đặt tham gia toàn phần (`min = 1`) vô điều kiện ngay khi tạo bản ghi `DU_AN`, hệ thống sẽ không thể lưu dự án mới khởi tạo chưa phân công nhân sự.\n- **A đúng**: cần phân biệt rõ **giai đoạn trạng thái** của dự án (nháp được phép chưa có nhân sự; chỉ khi chuyển sang triển khai mới bắt buộc tối thiểu 1 người).\n- **B, C, D sai**: bỏ trạng thái, đổi tên hay ép phân lớp không giải quyết được xung đột ràng buộc lúc khởi tạo.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-25', exam: 'bt-ch2', no: 25, chapter: 'ch2', topic: '2.3',
  stem: 'Một thuộc tính Loại_nhân_viên đơn trị chỉ nhận “cơ hữu” hoặc “hợp đồng” có thể dùng để xác định loại kiểu con theo quy tắc nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa dựa trên thuộc tính xác định kiểu con, dạng tách biệt' },
    { key: 'B', text: 'Bắt buộc tạo liên kết ba ngôi' },
    { key: 'C', text: 'Chuyên biệt hóa phủ lấp dựa vào nhiều vai trò đồng thời' },
    { key: 'D', text: 'Mọi kiểu con phải có khóa độc lập' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong EER, khi sử dụng một thuộc tính phân loại (định nghĩa kiểu con) của lớp cha để rẽ nhánh, tính đơn trị của thuộc tính quyết định tính tách biệt.\n- **A đúng**: vì `Loại_nhân_viên` là thuộc tính **đơn trị** nên mỗi nhân viên chỉ mang một giá trị (`cơ hữu` hoặc `hợp đồng`), dẫn tới chuyên biệt hóa dạng **tách biệt (`d`)**.\n- **C sai**: thuộc tính đơn trị không thể đồng thời nhận cả hai giá trị để thành phủ lấp.\n- **B và D sai**: không phải liên kết bậc 3 và các kiểu con vẫn kế thừa khóa của lớp cha.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-26', exam: 'bt-ch2', no: 26, chapter: 'ch2', topic: '2.1',
  stem: 'Họ_tên gồm Họ, Tên_đệm và Tên. Họ_tên thuộc loại thuộc tính nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính suy dẫn' },
    { key: 'B', text: 'Thuộc tính phức hợp' },
    { key: 'C', text: 'Thuộc tính đa trị' },
    { key: 'D', text: 'Thuộc tính của liên kết' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.9, **thuộc tính phức hợp** là thuộc tính có thể phân chia thành các thành phần nhỏ hơn biểu diễn các thuộc tính cơ bản với ý nghĩa độc lập.\n- **B đúng**: `Họ_tên` tách thành `Họ`, `Tên_đệm`, `Tên` đúng bản chất thuộc tính phức hợp.\n- **A sai**: thuộc tính suy dẫn tính ra từ thuộc tính khác (như `Tuổi` từ `Ngày_sinh`).\n- **C sai**: một người chỉ có một họ tên (đơn trị), không phải nhiều giá trị song song.\n- **D sai**: `Họ_tên` là thuộc tính của thực thể người chứ không gắn vào hình thoi liên kết.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.9']
},
{
  id: 'bt-ch2-27', exam: 'bt-ch2', no: 27, chapter: 'ch2', topic: '1.4',
  stem: 'Liên kết giữa NHA_CUNGCAP, VAT_TU và DU_AN, trong đó mỗi lần cung ứng gắn với đủ ba đối tượng, là liên kết bậc mấy?',
  figure: null,
  options: [
    { key: 'A', text: 'Bậc bốn' },
    { key: 'B', text: 'Bậc một' },
    { key: 'C', text: 'Bậc hai' },
    { key: 'D', text: 'Bậc ba' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.18, **bậc của liên kết** là số kiểu thực thể tham gia vào liên kết đó.\n- **D đúng**: có đúng 3 kiểu thực thể tham gia (`NHA_CUNGCAP`, `VAT_TU`, `DU_AN`) nên đây là **liên kết bậc ba** (tam phân).\n- **A sai**: chỉ có 3 kiểu thực thể, không phải 4.\n- **B sai**: bậc một là liên kết đệ quy trên một kiểu thực thể.\n- **C sai**: bậc hai là liên kết nhị phân giữa hai kiểu thực thể.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.18']
},
{
  id: 'bt-ch2-28', exam: 'bt-ch2', no: 28, chapter: 'ch2', topic: '2.6',
  stem: 'Một người được gán tập vai trò {SINHVIEN, NHANVIEN}, có thể có nhiều vai trò đồng thời. Mô hình phân kiểu nào phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyên biệt hóa phủ lấp với điều kiện thành viên theo từng vai trò' },
    { key: 'B', text: 'Tách biệt tuyệt đối theo một mã vai trò đơn trị' },
    { key: 'C', text: 'Chỉ dùng quan hệ một–một NGUOI–VAI_TRO' },
    { key: 'D', text: 'Chỉ lưu vai trò cuối cùng và xóa vai trò trước' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi một thực thể lớp cha (`NGUOI`) có thể giữ nhiều vai trò đồng thời (`SINHVIEN` và `NHANVIEN`), mô hình phân cấp không thể ép loại trừ lẫn nhau.\n- **A đúng**: dùng **chuyên biệt hóa phủ lấp (`o`)**, trong đó mỗi lớp con kiểm tra điều kiện thành viên riêng theo vai trò tương ứng.\n- **B sai**: mã vai trò đơn trị buộc tách biệt nên một người không thể mang hai vai trò cùng lúc.\n- **C và D sai**: quan hệ `1:1` hoặc ghi đè vai trò làm mất khả năng giữ nhiều vai trò đồng thời.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-29', exam: 'bt-ch2', no: 29, chapter: 'ch2', topic: '2.3',
  stem: 'Nếu một KHACHHANG có thể chưa phát sinh đơn hàng nào, số lượng tối thiểu đơn hàng của một khách hàng là bao nhiêu?',
  figure: null,
  options: [
    { key: 'A', text: 'Không giới hạn nên không có giá trị tối thiểu' },
    { key: 'B', text: '1' },
    { key: 'C', text: '0' },
    { key: 'D', text: '2' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong ký hiệu `(min, max)` trên cạnh nối ER/EER, giá trị `min` biểu diễn số lần tối thiểu mỗi thực thể tham gia vào liên kết (`min = 0` tương ứng tham gia bộ phận).\n- **C đúng**: vì khách hàng có thể chưa có đơn hàng nào, cận dưới `min` bằng **`0`**.\n- **A sai**: "không giới hạn" (`N` hoặc `*`) là cận trên `max`, còn cận dưới vẫn là `0`.\n- **B và D sai**: `min >= 1` nghĩa là mọi khách hàng bắt buộc phải có ít nhất 1 hoặc 2 đơn hàng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-30', exam: 'bt-ch2', no: 30, chapter: 'ch2', topic: '1.4',
  stem: 'Hợp nhất các kiểu thực thể XE_OTO và XE_MAY thành một kiểu thực thể cha PHUONG_TIEN dựa trên đặc điểm chung là quá trình gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuẩn hóa dữ liệu tới 3NF' },
    { key: 'B', text: 'Phân trang vật lý' },
    { key: 'C', text: 'Tổng quát hóa (generalization)' },
    { key: 'D', text: 'Chuyên biệt hóa (specialization)' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong EER cần phân biệt chiều đi của hai phép trừu tượng hóa giữa lớp cha và lớp con.\n- **C đúng**: **tổng quát hóa (*generalization*)** đi theo hướng từ dưới lên (bottom-up), gộp các lớp thực thể có đặc trưng chung (`XE_OTO`, `XE_MAY`) thành lớp cha `PHUONG_TIEN`.\n- **D sai**: chuyên biệt hóa đi từ trên xuống (tách từ lớp cha xuống các lớp con).\n- **A và B sai**: chuẩn hóa `3NF` thuộc thiết kế quan hệ (Ch.4), còn phân trang thuộc mức lưu trữ vật lý.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);

DB.questions.push(
{
  id: 'bt-ch2-31', exam: 'bt-ch2', no: 31, chapter: 'ch2', topic: '2.1',
  stem: 'Trong bài toán quản lý nhân sự, Tuổi được tính từ Ngày_sinh và ngày hiện tại. Tuổi thuộc loại thuộc tính nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính phức hợp bắt buộc' },
    { key: 'B', text: 'Thuộc tính suy dẫn' },
    { key: 'C', text: 'Thuộc tính đa trị' },
    { key: 'D', text: 'Thuộc tính khóa' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.11, **thuộc tính suy dẫn** (vẽ bằng hình elip nét đứt) có giá trị tính được từ các thuộc tính khác và slide dùng đúng ví dụ `Tuổi`.\n- **B đúng**: `Tuổi` được tính từ `Ngày_sinh` và ngày hiện tại nên không cần nhập trực tiếp.\n- **A sai**: `Tuổi` là thuộc tính đơn, không phân tách thành phần con.\n- **C sai**: mỗi nhân viên tại một thời điểm chỉ có một tuổi (đơn trị).\n- **D sai**: nhiều nhân viên có thể cùng tuổi nên không dùng làm khóa phân biệt.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.11']
},
{
  id: 'bt-ch2-32', exam: 'bt-ch2', no: 32, chapter: 'ch2', topic: '2.1',
  stem: 'Trong hệ thống thư viện, một cuốn sách có thể có nhiều tác giả và mỗi tác giả có thể viết nhiều sách. Mô hình nào phản ánh đúng yêu cầu?',
  figure: null,
  options: [
    { key: 'A', text: 'SACH và TACGIA liên kết nhiều–nhiều' },
    { key: 'B', text: 'Một cuốn sách chỉ có thể thuộc một tác giả' },
    { key: 'C', text: 'SACH liên kết một–một với TACGIA' },
    { key: 'D', text: 'TACGIA là thuộc tính suy dẫn của SACH' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.21, kiểu liên kết **nhiều–nhiều (`M:N`)** xảy ra khi một thực thể bên A liên kết với nhiều thực thể bên B và ngược lại.\n- **A đúng**: 1 `SACH` có nhiều `TACGIA` và 1 `TACGIA` viết nhiều `SACH` $\\Rightarrow$ liên kết `M:N`.\n- **B và C sai**: thu hẹp sai bản số thành `1:N` hoặc `1:1`, không mô tả được sách đồng tác giả hay tác giả viết nhiều sách.\n- **D sai**: `TACGIA` là thực thể độc lập với các thuộc tính riêng, không phải thuộc tính suy dẫn.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.21']
},
{
  id: 'bt-ch2-33', exam: 'bt-ch2', no: 33, chapter: 'ch2', topic: '2.4',
  stem: 'Trong bài toán quản lý tòa nhà, PHONG có Số_phòng chỉ duy nhất trong từng TÒA_NHÀ. Lựa chọn mô hình ER nào phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'Số_phòng là thuộc tính đa trị của TÒA_NHÀ và không cần PHONG' },
    { key: 'B', text: 'PHONG là thực thể yếu, được nhận dạng bằng TÒA_NHÀ cùng Số_phòng' },
    { key: 'C', text: 'PHONG là thực thể mạnh có khóa toàn cục Số_phòng' },
    { key: 'D', text: 'Dùng tên người thuê làm khóa của PHONG' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.5–6, **thực thể yếu** là thực thể có sự tồn tại và nhận dạng phụ thuộc vào thực thể sở hữu thông qua liên kết định danh.\n- **B đúng**: `Số_phòng` (như `101`, `202`) trùng lặp giữa các tòa nhà nên chỉ đóng vai trò khóa bộ phận; `PHONG` là thực thể yếu được định danh khi ghép cùng `TÒA_NHÀ`.\n- **A sai**: phòng có nhiều thông tin và liên kết riêng, không thể gộp thành thuộc tính đa trị.\n- **C sai**: `Số_phòng` không duy nhất trên toàn hệ thống.\n- **D sai**: phòng có thể trống hoặc có nhiều người cùng thuê.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.5–6']
},
{
  id: 'bt-ch2-34', exam: 'bt-ch2', no: 34, chapter: 'ch2', topic: '1.4',
  stem: 'Từ kiểu thực thể NHANVIEN, tách thành NHANVIEN_CO_HUU và NHANVIEN_THOI_VU theo loại hợp đồng là quá trình gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Chuyển từ mô hình logic sang vật lý' },
    { key: 'B', text: 'Chuyên biệt hóa (specialization)' },
    { key: 'C', text: 'Phép kết nối quan hệ' },
    { key: 'D', text: 'Tổng quát hóa từ dưới lên' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong EER, tách một kiểu thực thể tổng quát có sẵn thành các nhóm con có đặc trưng riêng là thiết kế từ trên xuống (*top-down*).\n- **B đúng**: từ lớp cha `NHANVIEN` tách xuống `NHANVIEN_CO_HUU` và `NHANVIEN_THOI_VU` là quá trình **chuyên biệt hóa (*specialization*)**.\n- **D sai**: tổng quát hóa đi theo chiều ngược lại (gộp các lớp con có điểm chung lên thành lớp cha).\n- **A và C sai**: thuộc về thiết kế mức vật lý và phép toán đại số quan hệ.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-35', exam: 'bt-ch2', no: 35, chapter: 'ch2', topic: '2.5',
  stem: 'Để biểu diễn “mỗi bác sĩ được phân tối đa 5 ca trực mỗi tuần”, giới hạn này khác gì cardinality tĩnh thông thường?',
  figure: null,
  options: [
    { key: 'A', text: 'Đó là ràng buộc theo cửa sổ thời gian, cần đếm ca trực theo tuần' },
    { key: 'B', text: 'Đó chỉ là khóa chính của bác sĩ' },
    { key: 'C', text: 'Đó chỉ là ký hiệu thuộc tính đa trị' },
    { key: 'D', text: 'Đó là liên kết đệ quy có đúng năm vai trò' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Lực lượng tĩnh `(0, 5)` trong ER chỉ khống chế tổng số liên kết mà một bác sĩ tham gia trên toàn lịch sử CSDL, không phân tách được giới hạn lặp lại theo chu kỳ.\n- **A đúng**: giới hạn *mỗi tuần* là **ràng buộc theo cửa sổ thời gian**, cần nhóm và đếm số ca trực của từng bác sĩ trong phạm vi từng tuần.\n- **B, C, D sai**: khóa chính, thuộc tính đa trị hay liên kết đệ quy đều không kiểm soát được số lượng phân công theo chu kỳ thời gian.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-36', exam: 'bt-ch2', no: 36, chapter: 'ch2', topic: '2.6',
  stem: 'Một người có thể là chủ sở hữu bất động sản với tư cách cá nhân hoặc pháp nhân (DOANHNGHIEP). EER có khái niệm mở rộng nào phù hợp để gom nguồn sở hữu khác loại?',
  figure: null,
  options: [
    { key: 'A', text: 'Kiểu hợp (category/union type) CHU_SO_HUU từ NGUOI và DOANHNGHIEP' },
    { key: 'B', text: 'Chuyên biệt hóa disjoint một kiểu cha đã có tên NGUOI cho doanh nghiệp' },
    { key: 'C', text: 'Thuộc tính suy dẫn của bất động sản' },
    { key: 'D', text: 'Liên kết đệ quy của bất động sản với chính nó' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: '`NGUOI` và `DOANHNGHIEP` là hai tập thực thể khác loại hoàn toàn (doanh nghiệp không phải là một cá nhân), nhưng đều có thể đóng vai trò sở hữu bất động sản.\n- **A đúng**: EER dùng **kiểu hợp (`category / union type`, ký hiệu `U`)** để tạo lớp con `CHU_SO_HUU` là tập con của hợp nhiều lớp cha khác loại (`NGUOI` $\\cup$ `DOANHNGHIEP`).\n- **B sai**: `DOANHNGHIEP` không có quan hệ IS-A với `NGUOI`.\n- **C và D sai**: thuộc tính suy dẫn hay liên kết đệ quy không giải quyết được việc gom chủ thể sở hữu khác kiểu.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-37', exam: 'bt-ch2', no: 37, chapter: 'ch2', topic: '2.4',
  stem: 'Đối với nhân viên có thể có nhiều chứng chỉ, mỗi chứng chỉ có Mã_chứng_chỉ, Ngày_cấp và Cơ_quan_cấp, nên làm gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Bắt buộc lưu trong thuộc tính khóa Mã_nhân_viên' },
    { key: 'B', text: 'Luôn coi toàn bộ thông tin chứng chỉ là một thuộc tính suy dẫn' },
    { key: 'C', text: 'Xem CHUNG_CHI là kiểu thực thể liên kết với NHANVIEN nếu cần quản lý đặc điểm và quan hệ riêng' },
    { key: 'D', text: 'Chỉ lưu số lượng chứng chỉ của nhân viên' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Khi một thông tin lặp nhiều lần lại có định danh riêng (`Mã_chứng_chỉ`), nhiều thuộc tính kèm theo (`Ngày_cấp`, `Cơ_quan_cấp`) và có thể liên kết tiếp với thực thể khác, tách thành kiểu thực thể là tối ưu.\n- **C đúng**: mô hình hóa `CHUNG_CHI` thành kiểu thực thể liên kết với `NHANVIEN` giúp quản lý chi tiết và mở rộng quan hệ với cơ quan cấp dễ dàng.\n- **A sai**: gộp vào khóa `Mã_nhân_viên` làm mất tính đơn nguyên của khóa.\n- **B và D sai**: chứng chỉ là dữ liệu phải nhập vào (không suy dẫn) và chỉ lưu số lượng sẽ mất sạch thông tin chi tiết.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-38', exam: 'bt-ch2', no: 38, chapter: 'ch2', topic: '2.5',
  stem: '“Chỉ cấp quyền thuê xe sau khi giấy phép lái xe được xác thực” thuộc nhóm quy tắc nghiệp vụ nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Ràng buộc tác vụ/điều kiện trước khi thực hiện giao dịch' },
    { key: 'B', text: 'Chỉ là ràng buộc lực lượng 1:N' },
    { key: 'C', text: 'Chỉ là tên của một thuộc tính khóa' },
    { key: 'D', text: 'Không phải quy tắc nghiệp vụ' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Quy định này yêu cầu kiểm tra một trạng thái hợp lệ (giấy phép lái xe đã xác thực) trước khi cho phép phát sinh hành động nghiệp vụ (cấp quyền thuê xe).\n- **A đúng**: đây là **ràng buộc tác vụ / điều kiện tiên quyết (*precondition*) trước khi thực hiện giao dịch**.\n- **B và C sai**: lực lượng `1:N` hay tên khóa chỉ mô tả cấu trúc tĩnh, không kiểm tra điều kiện xác thực theo trình tự thao tác.\n- **D sai**: đây là một quy tắc nghiệp vụ bắt buộc của bài toán cho thuê xe.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-39', exam: 'bt-ch2', no: 39, chapter: 'ch2', topic: '2.4',
  stem: 'Một địa chỉ khách hàng có thể thuộc nhiều mục đích: địa chỉ giao hàng, xuất hóa đơn hoặc thường trú. Cách mô hình nào linh hoạt?',
  figure: null,
  options: [
    { key: 'A', text: 'Bắt buộc biến mọi địa chỉ thành kiểu con của KHACHHANG' },
    { key: 'B', text: 'Lưu địa chỉ bằng số nguyên để tối ưu' },
    { key: 'C', text: 'Chỉ lưu một thuộc tính địa chỉ và không phân biệt mục đích' },
    { key: 'D', text: 'Mô hình thực thể DIA_CHI và liên kết/thuộc tính Vai_tro_dia_chi theo từng khách hàng' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Một khách hàng có thể dùng nhiều địa chỉ khác nhau cho từng mục đích, hoặc dùng chung một địa chỉ cho cả giao hàng lẫn xuất hóa đơn.\n- **D đúng**: tách thực thể `DIA_CHI` và gắn `Vai_tro_dia_chi` trên liên kết với `KHACHHANG` giúp linh hoạt hỗ trợ nhiều mục đích mà không lặp lại dữ liệu địa chỉ.\n- **A sai**: địa chỉ không phải là một loại `KHACHHANG` (không có quan hệ IS-A).\n- **B và C sai**: kiểu số nguyên sai hoàn toàn bản chất dữ liệu chuỗi/cấu trúc địa chỉ, còn lưu 1 thuộc tính chung sẽ mất phân loại mục đích.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-40', exam: 'bt-ch2', no: 40, chapter: 'ch2', topic: '2.4',
  stem: 'Một giao dịch thuê xe gồm khách hàng, xe và nhân viên xử lý. Hệ thống cần ghi ai giao xe cho ai trong từng lần thuê. Đâu là cách mô hình đáng tin cậy?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ lưu NHANVIEN–XE mà bỏ khách hàng' },
    { key: 'B', text: 'Chỉ liên kết KHACHHANG–XE và nhân viên với phòng ban' },
    { key: 'C', text: 'Tạo giao dịch THUE_XE gắn ba vai trò và thời gian thuê' },
    { key: 'D', text: 'Thay giao dịch bằng thuộc tính Tuoi của khách hàng' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Để biết chính xác trong từng lượt thuê, nhân viên nào đã giao chiếc xe nào cho vị khách nào, ba đối tượng phải được ràng buộc đồng thời trong cùng một giao dịch.\n- **C đúng**: tạo thực thể sự kiện / giao dịch `THUE_XE` gắn đủ cả ba vai trò (`KHACHHANG`, `XE`, `NHANVIEN`) và thời gian thuê.\n- **A và B sai**: thiếu khách hàng hoặc tách rời nhân viên làm không thể truy vết ai giao xe cho ai.\n- **D sai**: tuổi của khách hàng không liên quan đến giao dịch thuê xe.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-41', exam: 'bt-ch2', no: 41, chapter: 'ch2', topic: '1.4',
  stem: 'Trong hệ thống trường đại học, “SINHVIEN” và “sinh viên Nguyễn An có mã SV2026” lần lượt là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Hai kiểu liên kết' },
    { key: 'B', text: 'Kiểu thực thể và một thể hiện của kiểu thực thể' },
    { key: 'C', text: 'Hai thuộc tính đơn trị' },
    { key: 'D', text: 'Hai lược đồ vật lý' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.4, tập hợp các thực thể giống nhau tạo thành **kiểu thực thể** (ví dụ `SINHVIEN`), còn từng đối tượng cụ thể thuộc tập đó là một **thể hiện** (thực thể cụ thể).\n- **B đúng**: `SINHVIEN` là kiểu thực thể, còn `sinh viên Nguyễn An có mã SV2026` là một thể hiện cụ thể của kiểu `SINHVIEN`.\n- **A, C, D sai**: nhầm lẫn khái niệm kiểu thực thể/thể hiện với liên kết, thuộc tính hoặc lược đồ vật lý.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.4']
},
{
  id: 'bt-ch2-42', exam: 'bt-ch2', no: 42, chapter: 'ch2', topic: '2.1',
  stem: 'Mỗi giảng viên có thể dạy nhiều học phần; mỗi học phần có thể do nhiều giảng viên tham gia. Quan hệ phù hợp là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Nhiều–nhiều (M:N)' },
    { key: 'B', text: 'Một–nhiều từ học phần sang giảng viên' },
    { key: 'C', text: 'Một–một (1:1)' },
    { key: 'D', text: 'Không cần mối liên kết' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.21, khi 1 thực thể thuộc `GIANGVIEN` liên kết được với nhiều `HOCPHAN` và 1 `HOCPHAN` cũng liên kết được với nhiều `GIANGVIEN`, đó là quan hệ **nhiều–nhiều (`M:N`)**.\n- **A đúng**: phản ánh đúng lực lượng nhiều ở cả hai đầu.\n- **B sai**: `1:N` từ học phần sang giảng viên ngụ ý mỗi giảng viên chỉ dạy tối đa 1 học phần.\n- **C và D sai**: `1:1` hay không tạo liên kết đều sai với mô tả nghiệp vụ giảng dạy.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.21']
},
{
  id: 'bt-ch2-43', exam: 'bt-ch2', no: 43, chapter: 'ch2', topic: '2.4',
  stem: 'Sinh viên có thể học lại cùng một môn nhiều lần ở các học kỳ khác nhau. Để ghi đúng điểm từng lần học, đối tượng nào nên được mô hình hóa riêng?',
  figure: null,
  options: [
    { key: 'A', text: 'Chỉ thêm cột Diem vào SINHVIEN' },
    { key: 'B', text: 'LAN_DANG_KY gắn Sinh viên, Môn học, Học kỳ/lần học và Điểm' },
    { key: 'C', text: 'Chỉ thêm cột Diem vào MONHOC' },
    { key: 'D', text: 'Chỉ dùng liên kết M:N không phân biệt lần đăng ký' }
  ],
  answer: 'B', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Nếu chỉ dùng liên kết `M:N` giữa `SINHVIEN` và `MONHOC`, khóa ghép `(MaSV, MaMH)` chỉ cho phép lưu tối đa một lần học cho mỗi môn, dẫn tới ghi đè điểm khi học lại.\n- **B đúng**: tách thực thể sự kiện `LAN_DANG_KY` gắn thêm `Học_kỳ/lần_học` và `Điểm` giúp lưu đủ kết quả mọi lần học lại.\n- **A và C sai**: điểm không thuộc cố định về một sinh viên hay một môn học.\n- **D sai**: liên kết `M:N` thuần không phân biệt được các học kỳ khác nhau của cùng cặp sinh viên–môn học.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-44', exam: 'bt-ch2', no: 44, chapter: 'ch2', topic: '2.3',
  stem: 'Đối với liên kết NHANVIEN tham gia DUAN, ký hiệu (0,3) ở phía mỗi nhân viên biểu thị điều gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Mỗi nhân viên có thể tham gia từ 0 đến 3 dự án' },
    { key: 'B', text: 'Toàn công ty chỉ được có tối đa 3 dự án' },
    { key: 'C', text: 'Mỗi nhân viên phải có ít nhất 3 dự án' },
    { key: 'D', text: 'Mỗi dự án có đúng 3 nhân viên' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Cặp `(min, max)` gắn bên phía thực thể `NHANVIEN` quy định số thể hiện liên kết tối thiểu và tối đa mà *mỗi* nhân viên được phép tham gia.\n- **A đúng**: `min = 0` và `max = 3` nghĩa là mỗi nhân viên có thể tham gia tối thiểu 0 (không bắt buộc) và tối đa 3 dự án.\n- **B sai**: không giới hạn tổng số dự án của công ty.\n- **C sai**: đảo ngược cận dưới với cận trên.\n- **D sai**: đọc nhầm từ phía nhân viên sang phía dự án.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-45', exam: 'bt-ch2', no: 45, chapter: 'ch2', topic: '1.4',
  stem: 'Một nhân viên có Mã_nhân_viên duy nhất và Số_căn_cước cũng duy nhất, đều bắt buộc có giá trị. Phát biểu nào đúng ở mức mô hình khái niệm?',
  figure: null,
  options: [
    { key: 'A', text: 'Có thể có nhiều khóa ứng viên và chọn một khóa định danh chính' },
    { key: 'B', text: 'Mọi kiểu thực thể chỉ được có đúng một khóa khả dĩ' },
    { key: 'C', text: 'Hai thuộc tính này bắt buộc phải là thuộc tính đa trị' },
    { key: 'D', text: 'Không thể phân biệt hai nhân viên nếu cùng họ tên' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.12–13, một kiểu thực thể **có thể có nhiều khóa** (các khóa ứng viên đều duy nhất và không rỗng), và ta lựa chọn một thuộc tính phù hợp nhất làm khóa chính.\n- **A đúng**: cả `Mã_nhân_viên` và `Số_căn_cước` đều là khóa ứng viên hợp lệ; người thiết kế chọn một thuộc tính làm định danh chính.\n- **B sai**: trái với khẳng định "Một kiểu thực thể có thể có nhiều khóa" ở Slide tr.12.\n- **C sai**: khóa phải là thuộc tính đơn trị.\n- **D sai**: hai nhân viên trùng họ tên vẫn phân biệt được qua khóa.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.12–13']
}
);

DB.questions.push(
{
  id: 'bt-ch2-46', exam: 'bt-ch2', no: 46, chapter: 'ch2', topic: '2.2',
  stem: 'Một nhân viên làm trưởng phòng và cần lưu Ngày_nhận_chức cho từng lần bổ nhiệm. Ngày_nhận_chức nên gắn với khái niệm nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính cố định của nhân viên không theo thời gian' },
    { key: 'B', text: 'Thuộc tính cố định của phòng ban' },
    { key: 'C', text: 'Thuộc tính của mức lương tối thiểu' },
    { key: 'D', text: 'Quan hệ BỔ_NHIỆM (hoặc thực thể sự kiện bổ nhiệm)' }
  ],
  answer: 'D', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.17, mối liên kết giữa các thực thể có thể mang thuộc tính riêng — slide lấy đúng ví dụ *Một đơn vị có một nhân viên làm trưởng phòng và cần lưu lại ngày nhận chức của trưởng phòng*.\n- **D đúng**: `Ngày_nhận_chức` thuộc về sự kiện/mối quan hệ bổ nhiệm (`BỔ_NHIỆM`) giữa `NHANVIEN` và `PHONGBAN` (tách thành thực thể sự kiện nếu lưu nhiều nhiệm kỳ).\n- **A và B sai**: ngày nhận chức thay đổi theo từng lần bổ nhiệm, không phải đặc tính cố định của nhân viên hay phòng ban.\n- **C sai**: không liên quan đến mức lương tối thiểu.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.17']
},
{
  id: 'bt-ch2-47', exam: 'bt-ch2', no: 47, chapter: 'ch2', topic: '2.3',
  stem: 'Một giảng viên vừa là NHANVIEN vừa là NGHIEN_CUU_VIEN, hai kiểu cha có chung định danh NGUOI và GIANGVIEN nhận đặc trưng của cả hai. Hiện tượng EER là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Thuộc tính đa trị đơn giản' },
    { key: 'B', text: 'Tham gia toàn bộ vào liên kết một–một' },
    { key: 'C', text: 'Khóa bộ phận của thực thể yếu' },
    { key: 'D', text: 'Kế thừa nhiều lớp cha (multiple inheritance)' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong EER, khi các lớp chuyên biệt hóa giao nhau tạo thành một lớp con dùng chung (*shared subclass*) có hơn một lớp cha trực tiếp cùng gốc, cơ chế kế thừa được mở rộng cho nhiều nhánh.\n- **D đúng**: `GIANGVIEN` vừa là lớp con của `NHANVIEN` vừa là lớp con của `NGHIEN_CUU_VIEN` nên nhận thuộc tính và liên kết từ cả hai lớp cha — gọi là **kế thừa nhiều lớp cha (*multiple inheritance*)**.\n- **A, B, C sai**: đều là các khái niệm ER cơ bản, không mô tả cấu trúc phân cấp đa lớp cha.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-48', exam: 'bt-ch2', no: 48, chapter: 'ch2', topic: '2.4',
  stem: 'Một nhân viên được chuyển phòng nhiều lần. Nếu cần lưu ngày bắt đầu của từng lần điều chuyển, cách tiếp cận nào đúng nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Không cần ghi ngày vì lực lượng là 1:N' },
    { key: 'B', text: 'Tạo thêm một thuộc tính đơn trị “đã chuyển nhiều lần” là đủ' },
    { key: 'C', text: 'Mô hình hóa các lần phân công/điều chuyển như các sự kiện có thời gian' },
    { key: 'D', text: 'Chỉ lưu tên phòng hiện tại trong thuộc tính họ tên' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Liên kết `1:N` tĩnh giữa `PHONGBAN` và `NHANVIEN` chỉ phản ánh phòng ban hiện tại của nhân viên, nếu chuyển phòng sẽ mất dấu lịch sử các phòng cũ và ngày bắt đầu.\n- **C đúng**: mô hình hóa các lần phân công/điều chuyển như thực thể sự kiện gắn mốc thời gian (`Ngày_bắt_đầu`, `Ngày_kết_thúc`) liên kết `NHANVIEN` với `PHONGBAN`.\n- **A và B sai**: không lưu được mốc ngày của từng lần chuyển phòng.\n- **D sai**: nhồi thông tin phòng ban vào thuộc tính họ tên vi phạm tính nguyên tử và làm mất lịch sử.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-49', exam: 'bt-ch2', no: 49, chapter: 'ch2', topic: '2.4',
  stem: 'Một đơn hàng được giao thành nhiều chuyến; mỗi chuyến giao có mã vận đơn và thời điểm. Quan hệ DONHANG–CHUYENGIAO phù hợp là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Một–nhiều (1:N), chuyến giao mang các thuộc tính riêng' },
    { key: 'B', text: 'Nhiều–nhiều không cần xác định từng chuyến' },
    { key: 'C', text: 'Một–một bắt buộc' },
    { key: 'D', text: 'Không cần có thực thể chuyến giao' }
  ],
  answer: 'A', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.7 và tr.20, đối tượng có thông tin định danh và thuộc tính mô tả riêng (`Mã_vận_đơn`, `Thời_điểm`) được mô hình hóa thành thực thể kết nối bằng bản số phù hợp.\n- **A đúng**: 1 `DONHANG` có thể gồm nhiều `CHUYENGIAO` và mỗi chuyến giao thuộc về 1 đơn hàng (`1:N`), trong đó `CHUYENGIAO` mang các thuộc tính riêng.\n- **B và C sai**: sai bản số thực tế của bài toán.\n- **D sai**: bỏ thực thể `CHUYENGIAO` sẽ không có nơi lưu mã vận đơn và thời điểm cho từng chuyến.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.20']
},
{
  id: 'bt-ch2-50', exam: 'bt-ch2', no: 50, chapter: 'ch2', topic: '2.1',
  stem: 'Mỗi nhân viên thuộc đúng một phòng ban, mỗi phòng ban có thể có nhiều nhân viên. Quan hệ PHONGBAN–NHANVIEN có lực lượng tối đa là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Một–một (1:1)' },
    { key: 'B', text: 'Một–nhiều (1:N)' },
    { key: 'C', text: 'Nhiều–nhiều (M:N)' },
    { key: 'D', text: 'Ba ngôi' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.20, kiểu liên kết `1:N` xảy ra khi 1 thực thể kiểu A liên kết với nhiều thực thể kiểu B, còn 1 thực thể kiểu B chỉ liên kết với tối đa 1 thực thể kiểu A.\n- **B đúng**: 1 `PHONGBAN` có nhiều `NHANVIEN`, mỗi `NHANVIEN` chỉ thuộc 1 `PHONGBAN` $\\Rightarrow$ lực lượng tối đa là **một–nhiều (`1:N`)**.\n- **A sai**: `1:1` chỉ cho phép mỗi phòng ban có tối đa 1 nhân viên.\n- **C sai**: `M:N` cho phép một nhân viên thuộc nhiều phòng ban.\n- **D sai**: chỉ có hai kiểu thực thể tham gia.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.20']
},
{
  id: 'bt-ch2-51', exam: 'bt-ch2', no: 51, chapter: 'ch2', topic: '2.6',
  stem: 'Trong hệ thống trường học, chỉ kiểu GIANGVIEN mới có liên kết HƯỚNG_DẪN với LUAN_VAN. Cách mô hình EER hợp lý?',
  figure: null,
  options: [
    { key: 'A', text: 'Đặt HƯỚNG_DẪN ở kiểu con GIANGVIEN' },
    { key: 'B', text: 'Buộc mọi NGUOI đều có liên kết HƯỚNG_DẪN' },
    { key: 'C', text: 'Gắn HƯỚNG_DẪN với thuộc tính Ngày_sinh' },
    { key: 'D', text: 'Chuyển LUAN_VAN thành thuộc tính khóa của NGUOI' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên tắc thiết kế phân cấp lớp cha–con trong EER, thuộc tính và liên kết chung đặt ở lớp cha, còn đặc trưng riêng chỉ áp dụng cho một nhóm đối tượng phải đặt ở lớp con.\n- **A đúng**: chỉ giảng viên mới hướng dẫn luận văn nên liên kết `HƯỚNG_DẪN` đặt trực tiếp giữa lớp con `GIANGVIEN` và `LUAN_VAN`.\n- **B sai**: không phải mọi `NGUOI` (như sinh viên, nhân viên hành chính) đều có thể hướng dẫn luận văn.\n- **C và D sai**: gắn liên kết vào thuộc tính hoặc biến thực thể `LUAN_VAN` thành khóa của `NGUOI` là sai mô hình.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-52', exam: 'bt-ch2', no: 52, chapter: 'ch2', topic: '2.4',
  stem: 'Đơn vị cần lưu cả lịch sử đổi trưởng phòng, bao gồm ngày bắt đầu và ngày kết thúc. Giải pháp nào phù hợp nhất?',
  figure: null,
  options: [
    { key: 'A', text: 'Đặt Ngày_kết_thúc là thuộc tính suy dẫn từ tên phòng' },
    { key: 'B', text: 'Chỉ lưu tên người đang làm trưởng phòng trong PHONGBAN' },
    { key: 'C', text: 'Mô hình các nhiệm kỳ TRUONG_PHONG theo thời gian, liên kết NHANVIEN với PHONGBAN' },
    { key: 'D', text: 'Ghi đè Mã_trưởng_phòng cũ mà không lưu lịch sử' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Một phòng ban có thể thay đổi nhiều trưởng phòng qua các giai đoạn và một nhân viên có thể giữ chức vụ ở nhiều nhiệm kỳ.\n- **C đúng**: mô hình hóa các nhiệm kỳ `TRUONG_PHONG` (gồm `Ngày_bắt_đầu`, `Ngày_kết_thúc`) liên kết `NHANVIEN` và `PHONGBAN` cho phép truy xuất đầy đủ cả người đương nhiệm lẫn lịch sử trước đây.\n- **B và D sai**: chỉ giữ trưởng phòng hiện tại hoặc ghi đè sẽ mất toàn bộ lịch sử.\n- **A sai**: `Ngày_kết_thúc` không thể suy diễn từ tên phòng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-53', exam: 'bt-ch2', no: 53, chapter: 'ch2', topic: '2.1',
  stem: 'Quy định “mọi hóa đơn bắt buộc có một khách hàng đứng tên” thể hiện yêu cầu nào của HÓA_ĐƠN?',
  figure: null,
  options: [
    { key: 'A', text: 'Là thực thể yếu trong mọi trường hợp' },
    { key: 'B', text: 'Tham gia toàn bộ vào liên kết với KHÁCH_HÀNG' },
    { key: 'C', text: 'Bắt buộc liên kết nhiều–nhiều' },
    { key: 'D', text: 'Tham gia bộ phận tùy chọn' }
  ],
  answer: 'B', marked: null, outside: false, incomplete: null, note: null,
  explanation: 'Theo Slide Ch.2 Mô hình ER tr.22–23, **tham gia toàn bộ** (nét đôi) nghĩa là *tất cả* các thực thể của kiểu thực thể đó bắt buộc phải tham gia vào kiểu liên kết.\n- **B đúng**: *mọi* `HÓA_ĐƠN` đều phải gắn với một `KHÁCH_HÀNG`, nên phía `HÓA_ĐƠN` tham gia toàn bộ.\n- **A sai**: hóa đơn có mã hóa đơn định danh độc lập nên thường là thực thể mạnh chứ không mặc nhiên là thực thể yếu.\n- **C sai**: mỗi hóa đơn chỉ có một khách hàng đứng tên (`1:N`).\n- **D sai**: tham gia bộ phận cho phép hóa đơn không có khách hàng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Slide Ch.2 Mô hình ER – tr.22–23']
},
{
  id: 'bt-ch2-54', exam: 'bt-ch2', no: 54, chapter: 'ch2', topic: '2.5',
  stem: 'Một cửa hàng yêu cầu mỗi phiếu giảm giá chỉ dùng một lần. Chọn nhận định chính xác nhất.',
  figure: null,
  options: [
    { key: 'A', text: 'Mỗi giao dịch tự biết người sử dụng cuối cùng mà không cần lưu' },
    { key: 'B', text: 'Chỉ cần đặt tên giảm giá viết hoa' },
    { key: 'C', text: 'Lượng số 1:N tự đảm bảo một mã không thể được dùng đồng thời' },
    { key: 'D', text: 'Phải có ràng buộc nghiệp vụ/duy nhất về lần sử dụng mã giảm giá; chỉ có sơ đồ ER chưa đủ mô tả toàn bộ xử lý đồng thời' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Yêu cầu dùng đúng một lần liên quan cả ràng buộc dữ liệu duy nhất lẫn bài toán tranh chấp khi hai đơn hàng áp dụng cùng mã tại một thời điểm.\n- **D đúng**: cần ràng buộc duy nhất/trạng thái đã sử dụng cho phiếu giảm giá, đồng thời bổ sung cơ chế nghiệp vụ và kiểm soát đồng thời (giao dịch/khóa) vượt ra ngoài khả năng của sơ đồ ER tĩnh.\n- **A và B sai**: không giải quyết việc kiểm soát lượt dùng.\n- **C sai**: lực lượng `1:N` cho phép nhiều giao dịch trỏ tới một phiếu chứ không hề ngăn dùng trùng hay dùng đồng thời.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-55', exam: 'bt-ch2', no: 55, chapter: 'ch2', topic: '2.6',
  stem: 'Hệ thống quy định mỗi nhân viên chỉ thuộc đúng một trong hai loại: BIEN_CHE hoặc HOP_DONG. Cặp ràng buộc phù hợp là gì?',
  figure: null,
  options: [
    { key: 'A', text: 'Toàn phần và tách biệt' },
    { key: 'B', text: 'Toàn phần và phủ lấp' },
    { key: 'C', text: 'Từng phần và tách biệt' },
    { key: 'D', text: 'Từng phần và phủ lấp' }
  ],
  answer: 'A', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Xét đồng thời hai trục ràng buộc trong EER cho câu *"mỗi nhân viên chỉ thuộc đúng một trong hai loại"*:\n- **Tính đầy đủ**: mọi nhân viên đều phải thuộc một trong hai loại (không ai đứng ngoài) $\\Rightarrow$ **toàn phần** (*total*).\n- **Tính tách biệt**: không ai vừa thuộc `BIEN_CHE` vừa thuộc `HOP_DONG` (tối đa một loại) $\\Rightarrow$ **tách biệt** (*disjoint*).\n- Vậy **A đúng**; B sai ở phủ lấp, C và D sai ở từng phần.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-56', exam: 'bt-ch2', no: 56, chapter: 'ch2', topic: '2.4',
  stem: 'Trong ứng dụng bán hàng, một đơn hàng có nhiều dòng hàng; mỗi dòng gồm sản phẩm, số lượng và đơn giá tại thời điểm mua. Cách mô hình nào đúng?',
  figure: null,
  options: [
    { key: 'A', text: 'Lưu đơn giá bán của từng hóa đơn duy nhất trong SANPHAM hiện tại' },
    { key: 'B', text: 'Lưu mọi số lượng ở thực thể KHACHHANG' },
    { key: 'C', text: 'Tạo CHITIET_DONHANG (dòng hàng) liên kết DONHANG với SANPHAM, lưu So_luong và Don_gia_ban' },
    { key: 'D', text: 'Chỉ lưu danh sách mã sản phẩm nối bởi dấu phẩy trong DONHANG' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Giữa `DONHANG` và `SANPHAM` có quan hệ nhiều–nhiều, đồng thời đơn giá bán có thể khác giá niêm yết sau này nên cần lưu lại ngay trên từng dòng hàng.\n- **C đúng**: tạo thực thể `CHITIET_DONHANG` nối `DONHANG` và `SANPHAM` để lưu `So_luong` và `Don_gia_ban` tại thời điểm mua.\n- **A sai**: cập nhật giá trong `SANPHAM` sẽ làm sai lệch lịch sử đơn hàng cũ.\n- **B sai**: số lượng từng dòng hàng không thuộc `KHACHHANG`.\n- **D sai**: nối chuỗi nhiều mã sản phẩm vi phạm tính nguyên tử và không lưu được số lượng, đơn giá từng mặt hàng.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-57', exam: 'bt-ch2', no: 57, chapter: 'ch2', topic: '2.3',
  stem: 'Trong mô hình NGUOI → NHANVIEN → GIANGVIEN, thuộc tính Ngày_sinh đặt tại NGUOI sẽ được GIANGVIEN sử dụng thế nào?',
  figure: null,
  options: [
    { key: 'A', text: 'Không có vì chỉ kế thừa một cấp' },
    { key: 'B', text: 'Phải sao chép làm thuộc tính đa trị riêng' },
    { key: 'C', text: 'Kế thừa gián tiếp qua NHANVIEN' },
    { key: 'D', text: 'Chỉ có nếu liên kết NGUOI–GIANGVIEN là M:N' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Trong phân cấp chuyên biệt hóa nhiều tầng của EER, sự kế thừa thuộc tính và liên kết có tính chất bắc cầu từ lớp gốc xuống các lớp con cháu.\n- **C đúng**: `NHANVIEN` kế thừa `Ngày_sinh` từ `NGUOI`, sau đó `GIANGVIEN` là lớp con của `NHANVIEN` nên **kế thừa gián tiếp qua `NHANVIEN`**.\n- **A sai**: kế thừa áp dụng qua mọi cấp độ chứ không dừng ở một cấp.\n- **B sai**: không cần khai báo lặp lại và `Ngày_sinh` là thuộc tính đơn trị.\n- **D sai**: quan hệ lớp cha–con là quan hệ IS-A, không phải liên kết `M:N`.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-58', exam: 'bt-ch2', no: 58, chapter: 'ch2', topic: '2.5',
  stem: 'Quy tắc công ty là không nhân viên nào được trực tiếp hoặc gián tiếp quản lý chính mình. Sơ đồ ER 1:N đơn giản có tự đảm bảo quy tắc này không?',
  figure: null,
  options: [
    { key: 'A', text: 'Có, vì 1:N luôn cấm mọi chu trình' },
    { key: 'B', text: 'Không cần vì chu trình không ảnh hưởng dữ liệu' },
    { key: 'C', text: 'Có, vì khóa nhân viên là duy nhất' },
    { key: 'D', text: 'Không; cần thêm kiểm tra chu trình trong phân cấp hoặc ràng buộc nghiệp vụ' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Liên kết đệ quy `1:N` trên `NHANVIEN` chỉ giới hạn mỗi nhân viên có tối đa một người quản lý trực tiếp, nhưng không ngăn được tự trỏ (`A` quản lý `A`) hay vòng khép kín (`A` quản lý `B` và `B` quản lý `A`).\n- **D đúng**: sơ đồ ER `1:N` tĩnh **không** tự đảm bảo tính phi chu trình (*acyclic*); phải bổ sung ràng buộc nghiệp vụ hoặc kiểm tra chu trình khi cập nhật dữ liệu.\n- **A và C sai**: lực lượng `1:N` và tính duy nhất của khóa không cấm các vòng tham chiếu.\n- **B sai**: chu trình làm hỏng cấu trúc cây phân cấp quản lý.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-59', exam: 'bt-ch2', no: 59, chapter: 'ch2', topic: '1.4',
  stem: 'Trong EER, khóa của kiểu thực thể con thông thường có quan hệ gì với khóa của kiểu cha?',
  figure: null,
  options: [
    { key: 'A', text: 'Không cần khóa nếu có thuộc tính riêng' },
    { key: 'B', text: 'Luôn là thuộc tính đa trị' },
    { key: 'C', text: 'Bắt buộc là một khóa tự tăng mới không liên quan' },
    { key: 'D', text: 'Được kế thừa từ kiểu cha' }
  ],
  answer: 'D', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Theo nguyên lý quan hệ "là một" (IS-A) trong EER, một thể hiện của kiểu thực thể con cũng chính là một thể hiện của kiểu thực thể cha.\n- **D đúng**: kiểu thực thể con **kế thừa khóa định danh từ kiểu cha** (chỉ khi tạo kiểu hợp phức tạp mới có thể phát sinh khóa khác).\n- **A sai**: mọi kiểu thực thể trong mô hình đều cần khóa định danh.\n- **B sai**: khóa phải đơn trị và duy nhất.\n- **C sai**: không bắt buộc sinh khóa mới độc lập tách rời khỏi khóa kiểu cha.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
},
{
  id: 'bt-ch2-60', exam: 'bt-ch2', no: 60, chapter: 'ch2', topic: '2.6',
  stem: 'Hệ thống quản lý cộng đồng có hai vai trò CHUYEN_GIA và TINH_NGUYEN. Một thành viên có thể không giữ vai trò nào hoặc giữ cả hai. Ràng buộc nào phù hợp?',
  figure: null,
  options: [
    { key: 'A', text: 'Từng phần và tách biệt' },
    { key: 'B', text: 'Toàn phần và tách biệt' },
    { key: 'C', text: 'Từng phần và phủ lấp' },
    { key: 'D', text: 'Toàn phần và phủ lấp' }
  ],
  answer: 'C', marked: null, outside: true, incomplete: null, note: null,
  explanation: 'Phân tích hai điều kiện của lớp cha `THANHVIEN` đối với hai lớp con `CHUYEN_GIA` và `TINH_NGUYEN`:\n- Thành viên *"có thể không giữ vai trò nào"* $\\Rightarrow$ không bắt buộc thuộc ít nhất một lớp con $\\Rightarrow$ **từng phần (*partial*)** (loại B, D).\n- Thành viên *"có thể giữ cả hai"* vai trò đồng thời $\\Rightarrow$ hai lớp con giao nhau được $\\Rightarrow$ **phủ lấp (*overlapping*)** (loại A).\n- Do đó chọn **C**.',
  source: ['Bài tập Ch.2 (Google Form)', 'Kiến thức bổ sung (ngoài slide) – Elmasri & Navathe, Fundamentals of Database Systems']
}
);
