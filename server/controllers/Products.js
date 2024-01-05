import Products  from "../models/ProductModel.js";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

// export const getProducts = async (req, res) => {
//     try {
//         console.log('Start getProducts');

//         const apiResponse = await axios.get(process.env.API_BASE_URL);
//         console.log('API Response:', apiResponse.data);

//         const apiData = apiResponse.data;

//         // Menyimpan data dari API ke tabel Products
//         const savedProducts = await Products.bulkCreate(apiData.map(item => ({
//             uuid: item.uuid,
//             plate: item.plate,
//             manufacture: item.manufacture,
//             model: item.model,
//             image: item.image,
//             rentPerDay: item.rentPerDay,
//             capacity: item.capacity,
//             description: item.description,
//             availableAt: item.availableAt,
//         })));

//         console.log('Saved Products:', savedProducts);

//         // Mengambil data dari tabel Products
//         const dbData = await Products.findAll({
//             attributes: ['uuid', 'plate', 'manufacture', 'model', 'image', 'rentPerDay', 'capacity', 'description'],
//         });

//         console.log('DB Data:', dbData);

//         res.status(200).json({ apiData, dbData });
//     } catch (error) {
//         console.error('Error:', error.message);
//         res.status(500).json({ msg: error.message });
//     }
// };

export const getProducts = async (req, res) => {
    try {
        console.log('Start getProducts');

        const apiResponse = await axios.get(process.env.API_BASE_URL);
        console.log('API Response:', apiResponse.data);

        const apiData = apiResponse.data;

        // Ekstrak UUID dari data API untuk memeriksa keberadaan data di database
        const apiUuids = apiData.map(item => item.uuid);

        // Mengambil data yang sudah ada di database
        const existingProducts = await Products.findAll({
            where: { uuid: apiUuids },
            attributes: ['uuid'],
        });

        // Menyaring data yang belum ada di database
        const newData = apiData.filter(item => !existingProducts.some(existing => existing.uuid === item.uuid));

        // Menyimpan data baru ke dalam database
        const savedProducts = await Products.bulkCreate(newData);

        console.log('Saved Products:', savedProducts);

        // Mengambil data dari tabel Products
        const dbData = await Products.findAll({
            attributes: ['uuid', 'plate', 'manufacture', 'model', 'image', 'rentPerDay', 'capacity', 'description'],
        });

        console.log('DB Data:', dbData);

        res.status(200).json({ apiData, dbData });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ msg: error.message });
    }
};
export const getProductById = async (req, res) => {
}

export const createProduct = async (req, res) => {
    
}

export const updateProduct = async (req, res) => {
    
}

export const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params;

        // Periksa apakah uuid tidak didefinisikan atau tidak valid
        if (!id) {
            return res.status(400).json({ msg: 'Invalid UUID parameter' });
        }

        // Periksa apakah produk dengan UUID tertentu ada di database
        const existingProduct = await Products.findOne({ where: { id } });

        if (!existingProduct) {
            // Jika tidak ditemukan, kirim respons bahwa produk tidak ditemukan
            return res.status(404).json({ msg: 'Product not found' });
        }

        // Hapus produk berdasarkan UUID
        await Products.destroy({ where: { id } });

        // Kirim respons bahwa produk berhasil dihapus
        res.status(200).json({ msg: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ msg: error.message });
    }
};