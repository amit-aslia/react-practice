import React, { useState } from "react";

function RenderFolder({ explorer, insertNewFolderOrFile }) {
  const [newFolder, setNewFolder] = useState(false);
  const [newFile, setNewFile] = useState(false);

  const handleNewFile = (e) => {
    setNewFile(true);
    setNewFolder(false);
  };

  const handleNewFolder = (e) => {
    setNewFolder(true);
    setNewFile(false);
  };

  const handleCloseFileAndFolder = (e) => {
    setNewFolder(false);
    setNewFile(false);
  };

  const createNewFolderOrFile = (e, isFolder) => {
    if (e.key === "Enter") {
      console.log("entern key pressed", explorer);
      insertNewFolderOrFile(explorer.id, e.target.value, isFolder);
      handleCloseFileAndFolder();
    }
  };

  if (explorer.isFolder) {
    return (
      <div>
        <div className="folderContainer" key={explorer.id}>
          <img
            src="https://img.icons8.com/fluency/48/link-folder.png"
            alt="folder"
          />
          {explorer.name}
          <div className="commonFolderAndFile folder" onClick={handleNewFolder}>
            Folder +
          </div>
          <div className="commonFolderAndFile file" onClick={handleNewFile}>
            File -
          </div>
        </div>
        {newFolder && (
          <div className="fileContainer nestedFilesAndfolder">
            <img
              src="https://img.icons8.com/fluency/48/link-folder.png"
              alt="file"
            />
            <input
              type="text"
              onKeyDown={e => createNewFolderOrFile(e, true)}
              onBlur={handleCloseFileAndFolder}
              autoFocus
            />
          </div>
        )}
        {newFile && (
          <div className="fileContainer nestedFilesAndfolder">
            <img src="https://img.icons8.com/color/48/file.png" alt="file" />
            <input
              type="text"
              onKeyDown={e => createNewFolderOrFile(e, false)}
              onBlur={handleCloseFileAndFolder}
              autoFocus
            />
          </div>
        )}
        <div className="nestedFilesAndfolder">
          {explorer.items.map((exp, index) => (
            <RenderFolder insertNewFolderOrFile={insertNewFolderOrFile} key={`${exp.id} ${exp.name}`} explorer={exp} />
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="fileContainer">
      <img src="https://img.icons8.com/color/48/file.png" alt="file" />
      {explorer.name}
    </div>
  );
}

export default RenderFolder;
