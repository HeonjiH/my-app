// components/FolderDropzone.tsx

'use client';

import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

interface FileInfo {
    fileName: string;
    filePath: any;
}
const FolderDropzone = () => {
    const [fileList, setFileList] = useState<FileInfo[]>([]);
    const onDrop = (acceptedFiles: File[]) => {
        let files:FileInfo[] = [];
        acceptedFiles.forEach((file) => {
            console.log('Relative path:', (file as any).webkitRelativePath);
            files.push({
                fileName: file.name,
                filePath: (file as any).webkitRelativePath
            });
        });
        
        setFileList(files);
    };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    noClick: false,
    noKeyboard: true,
    multiple: true,
    // disable default input and use our own input with webkitdirectory
  });

  return (
    <>
        <div
        {...getRootProps()}
        style={{
            border: '2px dashed #aaa',
            borderRadius: '10px',
            padding: '40px',
            textAlign: 'center',
        }}
        >
        <input
            {...getInputProps({
            webkitdirectory: 'true', // 핵심 부분!
            directory: 'true',
            })}
        />
        {isDragActive ? (
            <p>폴더를 여기에 놓으세요...</p>
        ) : (
            <p>폴더를 드래그하거나 클릭하여 업로드하세요</p>
        )}
        </div>
    

        <table style={{marginTop:'4rem'}}>
            <colgroup>
                <col width="180px"/>
                <col width="300px"/>
            </colgroup>
            <thead>
                <tr>
                    <th>파일명</th>
                    <th>파일 위치</th>
                </tr>
            </thead>
            <tbody>
                {
                    fileList.map((file, index) => {
                        return (
                            <tr key={index}>
                                <td>{file.fileName}</td>
                                <td>{file.filePath}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
      </table>
    </>
  );
};

export default FolderDropzone;
