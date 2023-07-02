import React, { useState } from 'react'
import styles from './google.module.css'
import UndoIcon from '@mui/icons-material/Undo';
import RedoIcon from '@mui/icons-material/Redo';
import PrintIcon from '@mui/icons-material/Print';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import SpellcheckIcon from '@mui/icons-material/Spellcheck';
import CableIcon from '@mui/icons-material/Cable';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import TextFormatIcon from '@mui/icons-material/TextFormat';
import DrawIcon from '@mui/icons-material/Draw';
import DescriptionSharpIcon from '@mui/icons-material/DescriptionSharp';
import StarBorderPurple500SharpIcon from '@mui/icons-material/StarBorderPurple500Sharp';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import FormatAlignLeftOutlinedIcon from '@mui/icons-material/FormatAlignLeftOutlined';
import ChecklistOutlinedIcon from '@mui/icons-material/ChecklistOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FormatListNumberedOutlinedIcon from '@mui/icons-material/FormatListNumberedOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import VideoCameraFrontOutlinedIcon from '@mui/icons-material/VideoCameraFrontOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';


function GoogleDoc() {
    const [value, setValue] = useState('')
    const handlechange = (e) =>{
        setValue(e.target.value)
    }
  return (
    <div className={styles.main} >
    <div className={styles.docMain} >
    <div className={styles.div1} >
    <DescriptionSharpIcon className={styles.mainDocIcon}/>
    </div>
    <div className={styles.div2}>
    <div className={styles.docIcon} >
    <a className={styles.docPar1} >Untitled Document</a>
    <StarBorderPurple500SharpIcon className={styles.cursor}/>
    <DriveFileMoveOutlinedIcon className={styles.cursor}/>
    </div>
    <div className={styles.saveBar} >
    <a className={styles.cursor}>List</a>
    <a className={styles.cursor}>Edit</a>
    <a className={styles.cursor}>View</a>
    <a className={styles.cursor}>Insert</a>
    <a className={styles.cursor}>Format</a>
    <a className={styles.cursor}>Tools</a>
    <a className={styles.cursor}>Extensions</a>
    <CommentOutlinedIcon className={styles.msgIcon} />
    <VideoCameraFrontOutlinedIcon className={styles.videoIcon}/>
    <a className={styles.share} ><LockOutlinedIcon/>Share</a>
    </div>
    </div>
    </div>
    <div className={styles.box} >
    <div className={styles.firstBox} >
    <UndoIcon className={styles.cursor}/>
    <RedoIcon className={styles.cursor}/>
    <PrintIcon className={styles.cursor}/>s
    <SpellcheckIcon className={styles.cursor}/>
    <CableIcon className={styles.cursor}/>
    <select className={styles.cursor}>
    <option>
    100%
    </option>
    <option>
    80%
    </option>
    <option>
    60%
    </option>
    <option>
    40%
    </option>
    </select>
    </div>
    <div className={styles.txtSelect}>
    <select className={styles.cursor}>
    <option>
    Normal Text
    </option>
    <option>
    h3
    </option>
    <option>
    h2
    </option>
    <option>
    h1
    </option>
    </select>
    </div>
    <div className={styles.firstBox}>
        <FormatBoldIcon className={styles.cursor}/>
        <FormatItalicIcon className={styles.cursor}/>
        <u className={styles.cursor}>U</u>
        <TextFormatIcon className={styles.cursor}/>
        <DrawIcon className={styles.cursor}/>
        </div>
        <div className={styles.firstBox} >
          <InsertLinkOutlinedIcon/>
          <ImageOutlinedIcon/>
        </div>
        <div className={styles.firstBox}>
          <FormatAlignLeftOutlinedIcon/>
          <ChecklistOutlinedIcon/>
          <FormatListBulletedOutlinedIcon/>
          <FormatListNumberedOutlinedIcon/>
        </div>
    </div>
      <textarea className={styles.txtArea} value={value} onChange={handlechange}/>
    </div>
  )
}

export default GoogleDoc
