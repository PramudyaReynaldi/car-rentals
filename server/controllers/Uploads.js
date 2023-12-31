import upload from "../middleware/UploadDisk.js";

export const getImage = (req, res) => {
    const imageName = req.params.imageName;
    const imageUrl = `https://res.cloudinary.com/${process.env.CLOUDINARY_UPLOAD_NAME}/car-rentals/${imageName}`;

    res.status(200).send({ imageUrl });
};

export const uploadImage = (req, res) => {
    upload(req, res, (error) => {
        if(error) {
            res.status(500).send({msg: error.message});
        } else {
            res.status(200).send({msg: "Image uploaded successfully"})
        }
    });
};