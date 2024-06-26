import multer from "multer";
import path from "path";

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads");
    },
    //Done Additional functionalality to avoid overwritting files
    filename: (req, file, cb) => {
        const fileName =
            path
                .basename(file.originalname, path.extname(file.originalname))
                .toLowerCase()
                .replace(/\s+/g, "-") +
            "-" +
            Date.now().toString() +
            path.extname(file.originalname).toLowerCase();
        cb(null, fileName);
    },
});

export default multer({ storage });