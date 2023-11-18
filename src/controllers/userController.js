// userController.js

exports.getProfile = (req, res) => {
    // Mengembalikan profil pengguna setelah diautentikasi
    res.json({
        id: req.user.id,
        name: req.user.name,
        email: req.user.email,
        // Tambahkan informasi pengguna lainnya yang perlu ditampilkan di profil
    });
};
