import { FC, useEffect, useRef } from "react";

interface IDragAndDropProps {
    setIsDragOver: React.Dispatch<React.SetStateAction<boolean>>;
    fileHandler: Function;
}

const FileDragAndDrop:FC<IDragAndDropProps> = (props) => {
    const { setIsDragOver, fileHandler, ...rest } = props;
    const DragAndDropRef = useRef<any>();

    useEffect(() => {
        const handleDrag = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
        };
        
        const handleDragIn = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
                setIsDragOver(true);
            }
        };
        
        const handleDragOut = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragOver(false);
        };
    
        const handleDrop = (e: any) => {
            e.preventDefault();
            e.stopPropagation();
            setIsDragOver(false);
            if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
                fileHandler(e.dataTransfer.files);
            }
        };

        const ref = DragAndDropRef.current;
        ref.addEventListener('dragenter', handleDragIn);
        ref.addEventListener('dragleave', handleDragOut);
        ref.addEventListener('dragover', handleDrag);
        ref.addEventListener('drop', handleDrop);

        return () => {
            ref.removeEventListener('dragenter', handleDragIn);
            ref.removeEventListener('dragleave', handleDragOut);
            ref.removeEventListener('dragover', handleDrag);
            ref.removeEventListener('drop', handleDrop);
        }
    }, [setIsDragOver, fileHandler]);

    return (
        <div ref={DragAndDropRef} style={{width: "100%"}} {...rest}/>
    );
};

export default FileDragAndDrop;