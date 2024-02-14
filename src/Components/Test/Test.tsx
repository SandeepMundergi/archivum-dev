import { useState, ChangeEvent } from 'react';

function Test() {
    const [file, setFile] = useState<File | null>(null);
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);

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
    };

    return (
        <div>
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
        </div>
    );
}

export default Test;
