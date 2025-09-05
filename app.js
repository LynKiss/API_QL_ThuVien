const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Import routes
const chiTietDatMuonRoutes = require("./routes/chi_tiet_dat_muon.route");
const chiTietMuonRoutes = require("./routes/chi_tiet_muon.route");
const danhGiaRoutes = require("./routes/danh_gia.route");
const danhMucRoutes = require("./routes/danh_muc.route");
const datMuonRoutes = require("./routes/dat_muon.route");
const khuVucRoutes = require("./routes/khu_vuc.route");
const ngonNguRoutes = require("./routes/ngon_ngu.route");
const nguoiDungRoutes = require("./routes/nguoi_dung.route");
const nhaCungCapRoutes = require("./routes/nha_cung_cap.route");
const nhaXuatBanRoutes = require("./routes/nha_xuat_ban.route");
const nhatKyHeThongRoutes = require("./routes/nhat_ky_he_thong.route");
const phieuMuonRoutes = require("./routes/phieu_muon.route");
const phieuTraRoutes = require("./routes/phieu_tra.route");
const sachRoutes = require("./routes/sach.route");
const theLoaiRoutes = require("./routes/the_loai.route");
const tinNhanRoutes = require("./routes/tin_nhan.route");
const vaiTroRoutes = require("./routes/vai_tro.route");
const quanLyRoutes = require("./routes/quan_ly.route");
const authRoutes = require("./routes/auth.route");

app.use("/api/chi_tiet_dat_muon", chiTietDatMuonRoutes);
app.use("/api/chi_tiet_muon", chiTietMuonRoutes);
app.use("/api/danh_gia", danhGiaRoutes);
app.use("/api/danh_muc", danhMucRoutes);
app.use("/api/dat_muon", datMuonRoutes);
app.use("/api/khu_vuc", khuVucRoutes);
app.use("/api/ngon_ngu", ngonNguRoutes);
app.use("/api/nguoi_dung", nguoiDungRoutes);
app.use("/api/nha_cung_cap", nhaCungCapRoutes);
app.use("/api/nha_xuat_ban", nhaXuatBanRoutes);
app.use("/api/nhat_ky_he_thong", nhatKyHeThongRoutes);
app.use("/api/phieu_muon", phieuMuonRoutes);
app.use("/api/phieu_tra", phieuTraRoutes);
app.use("/api/sach", sachRoutes);
app.use("/api/the_loai", theLoaiRoutes);
app.use("/api/tin_nhan", tinNhanRoutes);
app.use("/api/vai_tro", vaiTroRoutes);
app.use("/quan-ly", quanLyRoutes);
app.use("/api/auth", authRoutes);

app.listen(port, '0.0.0.0', () => {
  console.log(`Server chạy trên cổng ${port}`);
});

