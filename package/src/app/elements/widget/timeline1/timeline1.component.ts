import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-timeline1',
  templateUrl: './timeline1.component.html',
  styleUrls: ['./timeline1.component.css']
})
export class Timeline1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  propNews = 
  [
    {
        "updatetime": "2023-01-06T02:32:44.474Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Năm nhiệm vụ trọng tâm phát triển thị trường chứng khoán 2023  ",
        "url": "https://vneconomy.vn/nam-nhiem-vu-trong-tam-phat-trien-thi-truong-chung-khoan-2023.htm",
        "id": "de120a93-e66e-4223-846c-6ac99ea44b08",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T02:14:56.826Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Thuế GTGT 10% trở lại với hàng loạt sản phẩm",
        "url": "https://vietstock.vn/2023/01/thue-gtgt-10-tro-lai-voi-hang-loat-san-pham-758-1029101.htm",
        "id": "e8ea6193-1cd8-41ec-b53a-54118cdf6b91",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T02:04:55.782Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Những tâm điểm của thị trường bất động sản năm 2022",
        "url": "https://vietstock.vn/2023/01/nhung-tam-diem-cua-thi-truong-bat-dong-san-nam-2022-4220-1027724.htm",
        "id": "8d446ddf-3080-496c-b98c-061594d54a82",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T02:02:41.930Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Chuyển đổi số ngành bảo hiểm mang lại hiệu quả",
        "url": "https://vneconomy.vn/chuyen-doi-so-nganh-bao-hiem-mang-lai-hieu-qua.htm",
        "id": "9b612d1d-a577-4d38-b396-54e0a4acb632",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T01:39:53.611Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Chuyên gia: Tăng trưởng GDP phải đi kèm phát triển tài chính cá nhân",
        "url": "https://vietstock.vn/2023/01/chuyen-gia-tang-truong-gdp-phai-di-kem-phat-trien-tai-chinh-ca-nhan-4265-1029078.htm",
        "id": "34372e99-021d-4a72-ae08-77935608e417",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T01:37:40.025Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Điểm danh 20 thành phố nhiều triệu phú USD nhất thế giới",
        "url": "https://vneconomy.vn/diem-danh-20-thanh-pho-nhieu-trieu-phu-usd-nhat-the-gioi.htm",
        "id": "e97154bc-bc1b-45c7-8048-50ac83107427",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T01:24:52.677Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Phó Thủ tướng Trần Hồng Hà: Sẽ sát sao, chỉ đạo giải quyết sớm những vướng mắc về đất đai",
        "url": "https://vietstock.vn/2023/01/pho-thu-tuong-tran-hong-ha-se-sat-sao-chi-dao-giai-quyet-som-nhung-vuong-mac-ve-dat-dai-4266-1029077.htm",
        "id": "8bd4630b-ff6b-4018-bb95-26828040ce5b",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T01:19:52.191Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Chính phủ đặt mục tiêu kiểm soát tốc độ tăng CPI bình quân cả năm 2023 ở mức khoảng 4.5%",
        "url": "https://vietstock.vn/2023/01/chinh-phu-dat-muc-tieu-kiem-soat-toc-do-tang-cpi-binh-quan-ca-nam-2023-o-muc-khoang-45-761-1029076.htm",
        "id": "f1d15e45-ea4e-4b5b-99a4-15e4568f877c",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T01:04:53.006Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Top cổ phiếu đáng chú ý đầu phiên 06/01",
        "url": "https://vietstock.vn/2023/01/top-co-phieu-dang-chu-y-dau-phien-0601-830-1028961.htm",
        "id": "7ec7535d-1499-44a0-a51b-e4819d34b133",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:57:35.701Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Chứng khoán Mỹ giảm mạnh sau dữ liệu việc làm, giá dầu hồi phục sau 2 phiên lao dốc",
        "url": "https://vneconomy.vn/chung-khoan-my-giam-manh-sau-du-lieu-viec-lam-gia-dau-hoi-phuc-sau-2-phien-lao-doc.htm",
        "id": "cb6fbfcd-30b3-4e60-932b-a851b0d7007b",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:37:33.360Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Phát triển vùng nguyên liệu thức ăn chăn nuôi ở Tây Nguyên để giảm nhập khẩu",
        "url": "https://vneconomy.vn/phat-trien-vung-nguyen-lieu-thuc-an-chan-nuoi-o-tay-nguyen-de-giam-nhap-khau.htm",
        "id": "a19788d0-e026-4d1d-93e8-8270422b7229",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:37:33.236Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Cử tri kiến nghị bỏ bảo hiểm bắt buộc với xe máy vì không đảm bảo quyền lợi người mua",
        "url": "https://vneconomy.vn/cu-tri-kien-nghi-bo-bao-hiem-bat-buoc-voi-xe-may-vi-khong-dam-bao-quyen-loi-nguoi-mua.htm",
        "id": "aa0b98ab-8b5b-43d8-a7c9-11aaaf192171",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:34:46.951Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Nhóm Quỹ Thiên Việt gia tăng tỷ lệ sở hữu tại PVP",
        "url": "https://vietstock.vn/2023/01/nhom-quy-thien-viet-gia-tang-ty-le-so-huu-tai-pvp-739-1028983.htm",
        "id": "a2a7cef6-f88e-4e12-8692-df95eb95e4a1",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:16:21.585Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vnbusiness",
        "code": "",
        "title": "Khó có sóng bán tháo, có tiền nên mua nhà ngay?",
        "url": "https://vnbusiness.vn/toan-canh/kho-co-song-ban-thao-co-tien-nen-mua-nha-ngay-1090347.html",
        "id": "792b291d-65a4-4fe6-9df1-12598d6064c3",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:16:21.155Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vnbusiness",
        "code": "",
        "title": "Cuộc đua giảm giá cước vận tải biển và cơ hội cho xuất khẩu nông sản",
        "url": "https://vnbusiness.vn/viet-nam/cuoc-dua-giam-gia-cuoc-van-tai-bien-va-co-hoi-cho-xuat-khau-nong-san-1090348.html",
        "id": "cb9e87c9-bce6-4bee-b088-ed2fdb90068f",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:16:20.721Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vnbusiness",
        "code": "",
        "title": "Thấy gì từ thương vụ lên sàn của kỳ lân VNG?",
        "url": "https://vnbusiness.vn/co-phieu/thay-gi-tu-thuong-vu-len-san-cua-ky-lan-vng-1090346.html",
        "id": "eaa39f4a-9da7-407f-bd9b-60c3db15b64e",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:16:19.401Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vnbusiness",
        "code": "",
        "title": "Nguy cơ Lọc dầu Nghi Sơn phải giảm sản lượng, Bộ Công Thương chỉ đạo khẩn",
        "url": "https://vnbusiness.vn/thi-truong/nguy-co-loc-dau-nghi-son-phai-giam-san-luong-bo-cong-thuong-chi-dao-khan-1090352.html",
        "id": "a178d0f0-b152-49a2-9b03-3acd58bc49a6",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:11:20.133Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vnbusiness",
        "code": "",
        "title": "Giảm áp lực chi phí đè lên HTX",
        "url": "https://vnbusiness.vn/hop-tac-xa/giam-ap-luc-chi-phi-de-len-htx-1090349.html",
        "id": "1bc19fc2-a80c-4273-a7ef-409953d07f95",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:04:46.003Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "VE4 muốn rút hồ sơ chào bán hơn 1 triệu cp",
        "url": "https://vietstock.vn/2023/01/ve4-muon-rut-ho-so-chao-ban-hon-1-trieu-cp-764-1028981.htm",
        "id": "fb83c7e7-a367-42d1-9c1b-d357d6c64526",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:02:35.467Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vneconomy",
        "code": "",
        "title": "Khánh Hoà đẩy mạnh phát triển nhà ở",
        "url": "https://vneconomy.vn/khanh-hoa-day-manh-phat-trien-nha-o.htm",
        "id": "17576ec5-ec0f-44d3-b6fc-49eff2b1fda4",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:53.986Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Lần đầu tiên trong vòng 100 năm, Hạ viện Mỹ phải bỏ phiếu lại",
        "url": "https://www.tinnhanhchungkhoan.vn/lan-dau-tien-trong-vong-100-nam-ha-vien-my-phai-bo-phieu-lai-post313107.html",
        "id": "94504adf-28c5-477d-960b-7b450b4a9cc9",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:53.634Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Chính phủ mới ở Malaysia cam kết duy trì thực thi Hiệp định CPTPP",
        "url": "https://www.tinnhanhchungkhoan.vn/chinh-phu-moi-o-malaysia-cam-ket-duy-tri-thuc-thi-hiep-dinh-cptpp-post313106.html",
        "id": "e7d44cf9-021e-46ad-a6ab-701bc530de38",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:53.303Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Tạm đình chỉ 1 cán bộ cửa khẩu để làm rõ thông tin du khách phản ánh",
        "url": "https://www.tinnhanhchungkhoan.vn/tam-dinh-chi-1-can-bo-cua-khau-de-lam-ro-thong-tin-du-khach-phan-anh-post313103.html",
        "id": "c0ece860-6434-4041-b8c7-062ffb65ec54",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:52.954Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Doanh nghiệp TP.HCM dành 20.000 tỷ đồng bình ổn thị trường Tết",
        "url": "https://www.tinnhanhchungkhoan.vn/doanh-nghiep-tphcm-danh-20000-ty-dong-binh-on-thi-truong-tet-post313105.html",
        "id": "0b753cd2-cf9f-4f19-a7e2-667bf24ae004",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:52.628Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Dai-ichi Life Việt Nam xuất sắc vươn lên vị trí thứ 70 trong Top 500 Doanh nghiệp lớn nhất Việt Nam năm 2022",
        "url": "https://www.tinnhanhchungkhoan.vn/dai-ichi-life-viet-nam-xuat-sac-vuon-len-vi-tri-thu-70-trong-top-500-doanh-nghiep-lon-nhat-viet-nam-nam-2022-post313100.html",
        "id": "12a416f9-ab97-40eb-86e9-168cb5ce804b",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-06T00:01:52.296Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Năm 2023: Du lịch Hà Nội tạo đột phá bằng nhiều sản phẩm mới độc đáo",
        "url": "https://www.tinnhanhchungkhoan.vn/nam-2023-du-lich-ha-noi-tao-dot-pha-bang-nhieu-san-pham-moi-doc-dao-post313102.html",
        "id": "0a522885-8720-41cf-a13c-dc82fc3d7a2a",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-05T23:51:51.643Z",
        "datepost": "2023/01/06",
        "sourcenews": "Tinnhanhck",
        "code": "",
        "title": "Gỡ nút thắt vốn cho thị trường địa ốc",
        "url": "https://www.tinnhanhchungkhoan.vn/go-nut-that-von-cho-thi-truong-dia-oc-post312849.html",
        "id": "1157449b-f8ad-4e2b-8718-e6796c5c185a",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-05T23:39:43.849Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Vỉa hè mãi chờ... giải cứu!",
        "url": "https://vietstock.vn/2023/01/via-he-mai-cho-giai-cuu-4221-1029073.htm",
        "id": "fc2fe851-594f-43f5-8bcb-548be86a0ad9",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-05T23:34:41.621Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Dầu tăng gần 2% sau 2 phiên giảm đầu năm",
        "url": "https://vietstock.vn/2023/01/dau-tang-gan-2-sau-2-phien-giam-dau-nam-34-1029074.htm",
        "id": "614e5092-c163-4d7b-bff8-1a1df858511d",
        "full_count": "132788"
    },
    {
        "updatetime": "2023-01-05T23:29:42.779Z",
        "datepost": "2023/01/06",
        "sourcenews": "Vietstock",
        "code": "",
        "title": "Dow Jones mất hơn 300 điểm sau báo cáo việc làm của ADP",
        "url": "https://vietstock.vn/2023/01/dow-jones-mat-hon-300-diem-sau-bao-cao-viec-lam-cua-adp-773-1029071.htm",
        "id": "0b7f2918-01e1-4177-9c03-b510c1f3157c",
        "full_count": "132788"
    }
]

}
