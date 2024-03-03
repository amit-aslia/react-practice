import React, { useCallback, useState } from "react";
import "./style.css";

import { explorer } from "./data";
import RenderFolder from "./Component/Folder";
import useTraverseTree from "./hooks/useTraverseTree";

function FileExplorer() {
  const [explorerData, setExploreData] = useState(explorer);
  const { insertNode } = useTraverseTree();

  const insertNewFolderOrFile = useCallback(
    (folderId, items, isFolder) => {
      const finalTree = insertNode(explorerData, folderId, items, isFolder);
      setExploreData(finalTree);
    },
    [explorerData, insertNode]
  );
  return (
    <div>
      <RenderFolder
        insertNewFolderOrFile={insertNewFolderOrFile}
        explorer={explorerData}
      />
    </div>
  );
}

export default FileExplorer;
