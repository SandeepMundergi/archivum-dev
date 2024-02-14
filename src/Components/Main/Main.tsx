import { ChangeEvent, useState } from "react";
import "./Main.scss"
import { HiOutlineViewGrid } from "react-icons/hi";
import { RiListIndefinite } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import "../../sass/theme.scss"

const Main = () => {
    const [gridView, setGridView] = useState(false);
    const [listView, setListView] = useState(true);
    const [modal, setModal] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

    const toggleModal = () => { setModal(!modal); };

    if (modal) {
        document.body.classList.add('active-modal')
    }
    else {
        document.body.classList.remove('active-modal')
    }

    const handleClickView = () => {
        if (gridView === false) {
            setGridView(true);
            setListView(false);
        }
        else {
            setGridView(false);
            setListView(true);
        }
    }


    const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
        const selectedFile = event.target.files?.[0];
        if (selectedFile) {
            if (
                selectedFile.type.startsWith('image/png') ||
                selectedFile.type.startsWith('image/jpeg') ||
                selectedFile.type.startsWith('image/webp') ||
                selectedFile.type.startsWith('image/svg')
            ) {
                setFile(selectedFile);
                const reader = new FileReader();
                reader.onloadend = () => {
                    setPreviewUrl(reader.result as string);
                };
                reader.readAsDataURL(selectedFile);
            } else {
                alert('Unsupported file type. Please select a PNG, JPEG, WebP, or SVG file.');
                event.target.value = '';
            }
        }
    }

    return (
        <>
            <div className="main-header">
                <div className="heading">My Files</div>
                <div className="button">
                    <button onClick={toggleModal}> Add Files</button>
                </div>
            </div>
            <div className="main-body">
                <div className="view-continer">
                    <HiOutlineViewGrid className={gridView ? "view1" : "view1-invert"} onClick={handleClickView} />
                    <RiListIndefinite className={listView ? "view2" : "view2-invert"} onClick={handleClickView} />
                </div>
            </div>
            {
                modal &&
                (
                    <div className="modal" > <div onClick={toggleModal} className="overlay" ></div>
                        <div className="modal-content" >
                            <input type="file" onChange={handleFileChange} accept=".png, .jpeg, .jpg, .webp, .svg" />
                            {previewUrl && (
                                <div>
                                    {file?.type.startsWith('image') ? (
                                        <img src={previewUrl} alt="File preview" style={{ maxWidth: '100px' }} />
                                    ) : (
                                        <div>Unsupported file type</div>
                                    )}
                                </div>
                            )}
                            <IoMdClose className="close-modal" onClick={toggleModal} />
                        </div> </div>
                )
            }
        </>
    )
}

export default Main