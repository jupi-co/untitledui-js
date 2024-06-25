import { Suspense, lazy, FC } from "react";
import { SVGComponentProps, DefaultLazyImportFallback } from "./template";
import {dynamicImportWithRetry} from '@fatso83/retry-dynamic-import';

export type IconNames =
  | "Activity"
  | "ActivityHeart"
  | "Airplay"
  | "Airpods"
  | "AlarmClock"
  | "AlarmClockCheck"
  | "AlarmClockMinus"
  | "AlarmClockOff"
  | "AlarmClockPlus"
  | "AlertCircle"
  | "AlertHexagon"
  | "AlertOctagon"
  | "AlertRight01"
  | "AlertSquare"
  | "AlertTriangle"
  | "AlignBottom01"
  | "AlignBottom02"
  | "AlignCenter"
  | "AlignHorizontalCenter02"
  | "AlignJustify"
  | "AlignLeft"
  | "AlignLeft01"
  | "AlignLeft02"
  | "AlignRight"
  | "AlignRight02"
  | "AlignTopArrow01"
  | "AlignTopArrow02"
  | "AlignVerticalCenter01"
  | "AlignVerticalCenter02"
  | "Annotation"
  | "AnnotationAlert"
  | "AnnotationCheck"
  | "AnnotationDots"
  | "AnnotationHeart"
  | "AnnotationInfo"
  | "AnnotationPlus"
  | "AnnotationQuestion"
  | "AnnotationX"
  | "Announcement01"
  | "Announcement02"
  | "Announcement03"
  | "Archive"
  | "ArrowBlockDown"
  | "ArrowBlockLeft"
  | "ArrowBlockRight"
  | "ArrowBlockUp"
  | "ArrowCircleBrokenDown"
  | "ArrowCircleBrokenDownLeft"
  | "ArrowCircleBrokenDownRight"
  | "ArrowCircleBrokenLeft"
  | "ArrowCircleBrokenRight"
  | "ArrowCircleBrokenUp"
  | "ArrowCircleBrokenUpLeft"
  | "ArrowCircleBrokenUpRight"
  | "ArrowCircleDown"
  | "ArrowCircleDownLeft"
  | "ArrowCircleDownRight"
  | "ArrowCircleLeft"
  | "ArrowCircleRight"
  | "ArrowCircleUp"
  | "ArrowCircleUpLeft"
  | "ArrowCircleUpRight"
  | "ArrowDown"
  | "ArrowDownLeft"
  | "ArrowDownRight"
  | "ArrowLeft"
  | "ArrowNarrowDown"
  | "ArrowNarrowDownLeft"
  | "ArrowNarrowDownRight"
  | "ArrowNarrowLeft"
  | "ArrowNarrowRight"
  | "ArrowNarrowUp"
  | "ArrowNarrowUpLeft"
  | "ArrowNarrowUpRight"
  | "ArrowRight"
  | "ArrowSquareDown"
  | "ArrowSquareDownLeft"
  | "ArrowSquareDownRight"
  | "ArrowSquareLeft"
  | "ArrowSquareRight"
  | "ArrowSquareUp"
  | "ArrowSquareUpLeft"
  | "ArrowSquareUpRight"
  | "ArrowUp"
  | "ArrowUpLeft"
  | "ArrowUpRight"
  | "ArrowsDown"
  | "ArrowsLeft"
  | "ArrowsRight"
  | "ArrowsTriangle"
  | "ArrowsUp"
  | "Asterisk01"
  | "Asterisk02"
  | "AtSign"
  | "Atom01"
  | "Atom02"
  | "Attachment01"
  | "Attachment02"
  | "Award01"
  | "Award02"
  | "Award03"
  | "Award04"
  | "Award05"
  | "Backpack"
  | "Bank"
  | "BankNote01"
  | "BankNote02"
  | "BankNote03"
  | "BarChart01"
  | "BarChart02"
  | "BarChart03"
  | "BarChart04"
  | "BarChart05"
  | "BarChart06"
  | "BarChart07"
  | "BarChart08"
  | "BarChart09"
  | "BarChart10"
  | "BarChart11"
  | "BarChart12"
  | "BarChartCircle01"
  | "BarChartCircle02"
  | "BarChartCircle03"
  | "BarChartSquare01"
  | "BarChartSquare02"
  | "BarChartSquare03"
  | "BarChartSquareDown"
  | "BarChartSquareMinus"
  | "BarChartSquarePlus"
  | "BarChartSquareUp"
  | "BarLineChart"
  | "BatteryCharging01"
  | "BatteryCharging02"
  | "BatteryEmpty"
  | "BatteryFull"
  | "BatteryLow"
  | "BatteryMid"
  | "BatteryOn"
  | "Beaker01"
  | "Beaker02"
  | "Bell01"
  | "Bell02"
  | "Bell03"
  | "Bell04"
  | "BellMinus"
  | "BellOff01"
  | "BellOff03"
  | "BellPlus"
  | "BellRinging01"
  | "BellRinging02"
  | "BellRinging03"
  | "BellRinging04"
  | "BezierCurve01"
  | "BezierCurve02"
  | "BezierCurve03"
  | "Bluetooth"
  | "BluetoothConnect"
  | "BluetoothSignal"
  | "Bold01"
  | "Bold02"
  | "BoldSquare"
  | "BookClosed"
  | "BookOpen01"
  | "BookOpen02"
  | "Bookmark"
  | "BookmarkAdd"
  | "BookmarkCheck"
  | "BookmarkMinus"
  | "BookmarkX"
  | "Box"
  | "Brackets"
  | "BracketsCheck"
  | "BracketsEllipse"
  | "BracketsMinus"
  | "BracketsPlus"
  | "BracketsSlash"
  | "BracketsX"
  | "BriefCase01"
  | "BriefCase02"
  | "Browser"
  | "Brush01"
  | "Brush02"
  | "Brush03"
  | "Building01"
  | "Building02"
  | "Building03"
  | "Building04"
  | "Building05"
  | "Building06"
  | "Building07"
  | "Building08"
  | "Bus"
  | "CPUChip01"
  | "CPUChip02"
  | "Calculator"
  | "CalendarMinus02"
  | "Calender"
  | "CalenderCheck01"
  | "CalenderCheck02"
  | "CalenderDate"
  | "CalenderHeart01"
  | "CalenderHeart02"
  | "CalenderMinus01"
  | "CalenderPlus01"
  | "CalenderPlus02"
  | "Certificate01"
  | "Certificate02"
  | "ChartBreakoutCircle"
  | "ChartBreakoutSquare"
  | "Check"
  | "CheckCircle"
  | "CheckCircleBroken"
  | "CheckDone01"
  | "CheckDone02"
  | "CheckHeart"
  | "CheckSquare"
  | "CheckSquareBroken"
  | "CheckVerified01"
  | "CheckVerified02"
  | "CheckVerified03"
  | "ChevronDown"
  | "ChevronDownDouble"
  | "ChevronLeft"
  | "ChevronLeftDouble"
  | "ChevronRight"
  | "ChevronRightDouble"
  | "ChevronSelectorHorizontal"
  | "ChevronSelectorVertical"
  | "ChevronUp"
  | "ChevronUpDouble"
  | "ChromeCast"
  | "Circle"
  | "CircleCut"
  | "ClapperBoard"
  | "Clipboard"
  | "ClipboardAttachment"
  | "ClipboardCheck"
  | "ClipboardDownload"
  | "ClipboardMinus"
  | "ClipboardPlus"
  | "ClipboardX"
  | "Clock"
  | "ClockCheck"
  | "ClockFastForward"
  | "ClockPlus"
  | "ClockRefresh"
  | "ClockRewind"
  | "ClockSnooze"
  | "ClockStopWatch"
  | "Cloud01"
  | "Cloud02"
  | "Cloud03"
  | "CloudBank01"
  | "CloudBank02"
  | "CloudLightning"
  | "CloudMoon"
  | "CloudOff"
  | "CloudRaining01"
  | "CloudRaining02"
  | "CloudRaining03"
  | "CloudRaining04"
  | "CloudRaining05"
  | "CloudRaining06"
  | "CloudSnowing01"
  | "CloudSnowing02"
  | "CloudSun01"
  | "CloudSun02"
  | "CloudSun03"
  | "Code01"
  | "Code02"
  | "CodeBrowser"
  | "CodeCircle01"
  | "CodeCircle02"
  | "CodeCircle03"
  | "CodePen"
  | "CodeSnippet01"
  | "CodeSnippet02"
  | "CodeSquare01"
  | "CodeSquare02"
  | "CoinSwap01"
  | "CoinSwap02"
  | "Coins01"
  | "Coins02"
  | "Coins03"
  | "Coins04"
  | "CoinsHand"
  | "CoinsStacked01"
  | "CoinsStacked02"
  | "CoinsStacked03"
  | "CoinsStacked04"
  | "Colors"
  | "Columns02"
  | "Columns03"
  | "Command"
  | "Compass"
  | "Compass01"
  | "Compass02"
  | "Compass03"
  | "Container"
  | "Contrast01"
  | "Contrast02"
  | "Contrast03"
  | "Copy01"
  | "Copy02"
  | "Copy03"
  | "Copy04"
  | "Copy05"
  | "Copy06"
  | "Copy07"
  | "CornerDownLeft"
  | "CornerDownRight"
  | "CornerLeftDown"
  | "CornerLeftUp"
  | "CornerRightDown"
  | "CornerRightUp"
  | "CornerUpLeft"
  | "CornerUpRight"
  | "CreditCard01"
  | "CreditCard02"
  | "CreditCardCheck"
  | "CreditCardDown"
  | "CreditCardDownload"
  | "CreditCardEdit"
  | "CreditCardLock"
  | "CreditCardMinus"
  | "CreditCardPlus"
  | "CreditCardRefresh"
  | "CreditCardSearch"
  | "CreditCardShield"
  | "CreditCardUp"
  | "CreditCardUpload"
  | "CreditCardX"
  | "Crop01"
  | "Crop02"
  | "Cryptocurrency01"
  | "Cryptocurrency02"
  | "Cryptocurrency03"
  | "Cryptocurrency04"
  | "Cube01"
  | "Cube02"
  | "Cube03"
  | "Cube04"
  | "CubeOutline"
  | "CurrencyBitcoin"
  | "CurrencyBitcoinCircle"
  | "CurrencyDollar"
  | "CurrencyDollarCircle"
  | "CurrencyEthereum"
  | "CurrencyEthereumCircle"
  | "CurrencyEuro"
  | "CurrencyEuroCircle"
  | "CurrencyPound"
  | "CurrencyPoundCircle"
  | "CurrencyRuble"
  | "CurrencyRubleCircle"
  | "CurrencyRupee"
  | "CurrencyRupeeCircle"
  | "CurrencyYen"
  | "CurrencyYenCircle"
  | "Cursor01"
  | "Cursor02"
  | "Cursor03"
  | "Cursor04"
  | "CursorBox"
  | "CursorClick01"
  | "CursorClick02"
  | "Data"
  | "Database01"
  | "Database02"
  | "Database03"
  | "Dataflow01"
  | "Dataflow02"
  | "Dataflow03"
  | "Dataflow04"
  | "Delete"
  | "Diamond01"
  | "Diamond02"
  | "Dice01"
  | "Dice02"
  | "Dice03"
  | "Dice04"
  | "Dice05"
  | "Dice06"
  | "Disc01"
  | "Disc02"
  | "DistributeSpacingHorizontally"
  | "DistributeSpacingVertical"
  | "Divide01"
  | "Divide02"
  | "Divide03"
  | "Divider"
  | "DotPoints01"
  | "DotPoints02"
  | "DotsGrid"
  | "DotsHorizontal"
  | "DotsVertical"
  | "Download01"
  | "Download02"
  | "Download04"
  | "DownloadCloud01"
  | "DownloadCloud02"
  | "Drop"
  | "Droplets01"
  | "Droplets02"
  | "Droplets03"
  | "Dropper"
  | "Edit01"
  | "Edit02"
  | "Edit03"
  | "Edit04"
  | "Edit05"
  | "Equal"
  | "EqualNot"
  | "Eraser"
  | "Expand01"
  | "Expand02"
  | "Expand03"
  | "Expand04"
  | "Expand05"
  | "Expand06"
  | "Eye"
  | "EyeOff"
  | "FaceContent"
  | "FaceFrown"
  | "FaceHappy"
  | "FaceID"
  | "FaceIDSquare"
  | "FaceNeutral"
  | "FaceSad"
  | "FaceSmile"
  | "FaceWink"
  | "FastBackward"
  | "FastForward"
  | "Feather"
  | "Figma"
  | "File01"
  | "File02"
  | "File03"
  | "File04"
  | "File05"
  | "File06"
  | "File07"
  | "FileAttachment01"
  | "FileAttachment02"
  | "FileAttachment03"
  | "FileAttachment04"
  | "FileAttachment05"
  | "FileCheck01"
  | "FileCheck02"
  | "FileCheck03"
  | "FileCode"
  | "FileCode01"
  | "FileCode02"
  | "FileDownload01"
  | "FileDownload02"
  | "FileDownload03"
  | "FileHeart01"
  | "FileHeart02"
  | "FileHeart03"
  | "FileLock01"
  | "FileLock02"
  | "FileLock03"
  | "FileMinus01"
  | "FileMinus02"
  | "FileMinus03"
  | "FilePlus01"
  | "FilePlus02"
  | "FilePlus03"
  | "FileQuestion01"
  | "FileQuestion02"
  | "FileQuestion03"
  | "FileSearch01"
  | "FileSearch02"
  | "FileSearch03"
  | "FileShield01"
  | "FileShield02"
  | "FileShield03"
  | "FileX01"
  | "FileX02"
  | "FileX03"
  | "Film01"
  | "Film02"
  | "Film03"
  | "FilterFunnel01"
  | "FilterFunnel02"
  | "FilterLines"
  | "Fingerprint01"
  | "Fingerprint02"
  | "Fingerprint03"
  | "Fingerprint04"
  | "Flag01"
  | "Flag02"
  | "Flag03"
  | "Flag04"
  | "Flag05"
  | "Flag06"
  | "FlexAlignBottom"
  | "FlexAlignLeft"
  | "FlexAlignRight"
  | "FlexAlignTop"
  | "FlipBackward"
  | "FlipForward"
  | "Folder"
  | "FolderCheck"
  | "FolderClosed"
  | "FolderDownload"
  | "FolderLock"
  | "FolderMinus"
  | "FolderPlus"
  | "FolderQuestion"
  | "FolderSearch"
  | "FolderShield"
  | "FolderX"
  | "Framer"
  | "GamingPad01"
  | "GamingPad02"
  | "Gift01"
  | "Gift02"
  | "GitBranch01"
  | "GitBranch02"
  | "GitCommit"
  | "GitMerge"
  | "Glasses01"
  | "Glasses02"
  | "Globe01"
  | "Globe02"
  | "Globe03"
  | "Globe04"
  | "Globe05"
  | "Globe06"
  | "Globe07"
  | "GoogleChrome"
  | "GraduationHat01"
  | "GraduationHat02"
  | "Grid"
  | "Grid01"
  | "Grid02"
  | "Grid03"
  | "GridDotsBlank"
  | "GridDotsBottom"
  | "GridDotsHorizontalCenter"
  | "GridDotsLeft"
  | "GridDotsOuter"
  | "GridDotsRight"
  | "GridDotsTop"
  | "GridDotsVerticalCenter"
  | "Hand"
  | "HardDrive"
  | "Hash01"
  | "Hash02"
  | "Heading01"
  | "Heading02"
  | "HeadingSquare"
  | "Headphones01"
  | "Headphones02"
  | "Heart"
  | "HeartCircle"
  | "HeartHand"
  | "HeartOctagon"
  | "HeartRounded"
  | "HeartSquare"
  | "Hearts"
  | "HelpCircle"
  | "HelpHexagon"
  | "HelpOctagon"
  | "HelpOctagon1"
  | "HelpSquare"
  | "Hexagon01"
  | "Hexagon02"
  | "Home01"
  | "Home02"
  | "Home03"
  | "Home04"
  | "Home05"
  | "HomeLine"
  | "HomeSmile"
  | "HorizontalBarChart01"
  | "HorizontalBarChart02"
  | "HorizontalBarChart03"
  | "HourGlass01"
  | "HourGlass02"
  | "HourGlass03"
  | "Hurricane01"
  | "Hurricane02"
  | "Hurricane03"
  | "ImageIndentLeft"
  | "ImageIndentRight"
  | "Inbox01"
  | "Inbox02"
  | "Infinity"
  | "InfoCircle"
  | "InfoHexagon"
  | "InfoOctagon"
  | "InfoSquare"
  | "IntersectCircle"
  | "IntersectSquare"
  | "Italic01"
  | "Italic02"
  | "ItalicSquare"
  | "Key01"
  | "Key02"
  | "Keyboard01"
  | "Keyboard02"
  | "Laptop01"
  | "Laptop02"
  | "LayerAlt01"
  | "LayerAlt02"
  | "LayerAlt03"
  | "LayerAlt04"
  | "LayerSingle"
  | "LayersThree01"
  | "LayersThree02"
  | "LayersTwo01"
  | "LayersTwo02"
  | "LayoutBottom"
  | "LayoutGrid01"
  | "LayoutGrid02"
  | "LayoutLeft"
  | "LayoutRight"
  | "LayoutTop"
  | "LeftIndent01"
  | "LeftIndent02"
  | "LetterSpacing01"
  | "LetterSpacing02"
  | "LifeBuoy01"
  | "LifeBuoy02"
  | "LightBulb01"
  | "LightBulb02"
  | "LightBulb03"
  | "LightBulb04"
  | "LightBulb05"
  | "Lightning01"
  | "Lightning02"
  | "LineChartDown01"
  | "LineChartDown02"
  | "LineChartDown03"
  | "LineChartDown04"
  | "LineChartDown05"
  | "LineChartUp01"
  | "LineChartUp02"
  | "LineChartUp03"
  | "LineChartUp04"
  | "LineChartUp05"
  | "LineHeight"
  | "Link01"
  | "Link02"
  | "Link03"
  | "Link04"
  | "Link05"
  | "LinkBroken01"
  | "LinkBroken02"
  | "LinkExternal01"
  | "LinkExternal02"
  | "List"
  | "Loading01"
  | "Loading02"
  | "Loading03"
  | "Lock01"
  | "Lock02"
  | "Lock03"
  | "Lock04"
  | "LockKeyholeCircle"
  | "LockKeyholeSquare"
  | "LockUnlocked01"
  | "LockUnlocked02"
  | "LockUnlocked03"
  | "LockUnlocked04"
  | "Login01"
  | "Login02"
  | "Login03"
  | "Login04"
  | "Logout01"
  | "Logout02"
  | "Logout03"
  | "Logout04"
  | "Luggage01"
  | "Luggage02"
  | "Luggage03"
  | "MagicWand01"
  | "MagicWand02"
  | "Mail01"
  | "Mail02"
  | "Mail03"
  | "Mail04"
  | "Mail05"
  | "Map01"
  | "Map02"
  | "Mark"
  | "MarkerPin01"
  | "MarkerPin02"
  | "MarkerPin03"
  | "MarkerPin04"
  | "MarkerPin05"
  | "MarkerPin06"
  | "Maximize01"
  | "Maximize02"
  | "MedicalCircle"
  | "MedicalCross"
  | "MedicalSquare"
  | "Menu01"
  | "Menu02"
  | "Menu03"
  | "Menu04"
  | "Menu05"
  | "MessageAlertCircle"
  | "MessageAlertSquare"
  | "MessageChatCircle"
  | "MessageChatSquare"
  | "MessageCheckCircle"
  | "MessageCheckSquare"
  | "MessageCircle01"
  | "MessageCircle02"
  | "MessageDotsCircle"
  | "MessageDotsSquare"
  | "MessageHeartCircle"
  | "MessageHeartSquare"
  | "MessageNotificationCircle"
  | "MessageNotificationSquare"
  | "MessageNotificationSquare02"
  | "MessagePlusCircle"
  | "MessagePlusSquare"
  | "MessageQuestionCircle"
  | "MessageQuestionSquare"
  | "MessageSmileCircle"
  | "MessageSmileSquare"
  | "MessageSquare01"
  | "MessageSquare02"
  | "MessageTextCircle01"
  | "MessageTextCircle02"
  | "MessageTextSquare01"
  | "MessageXCircle"
  | "MessageXSquare"
  | "Microphone01"
  | "Microphone02"
  | "MicrophoneOff01"
  | "MicrophoneOff02"
  | "Microscope"
  | "Minimize01"
  | "Minimize02"
  | "Minus"
  | "MinusCircle"
  | "MinusSquare"
  | "Modem01"
  | "Modem02"
  | "Monitor01"
  | "Monitor02"
  | "Monitor03"
  | "Monitor04"
  | "Monitor05"
  | "Moon01"
  | "Moon02"
  | "MoonEclipse"
  | "MoonStar"
  | "Mouse"
  | "Move"
  | "Music"
  | "MusicNote01"
  | "MusicNote02"
  | "NavigationPointer01"
  | "NavigationPointer02"
  | "NavigationPointerOff01"
  | "NavigationPointerOff02"
  | "NotificationBox"
  | "NotificationText"
  | "Octagon"
  | "Package"
  | "PackageCheck"
  | "PackageMinus"
  | "PackagePlus"
  | "PackageSearch"
  | "PackageX"
  | "Paint"
  | "PaintPour"
  | "Palette"
  | "PaperClip"
  | "ParagraphSpacing"
  | "ParagraphWrap"
  | "Passcode"
  | "PasscodeLock"
  | "Passport"
  | "PauseCircle"
  | "PauseSquare"
  | "PenTool01"
  | "PenTool02"
  | "PenToolMinus"
  | "PenToolPlus"
  | "Pencil01"
  | "Pencil02"
  | "PencilLine"
  | "Percent01"
  | "Percent02"
  | "Percent03"
  | "Perspective01"
  | "Perspective02"
  | "Phone"
  | "Phone01"
  | "Phone02"
  | "PhoneCall01"
  | "PhoneCall02"
  | "PhoneHangUp"
  | "PhoneIncoming01"
  | "PhoneIncoming02"
  | "PhoneOutgoing01"
  | "PhoneOutgoing02"
  | "PhonePause"
  | "PhoneX"
  | "PieChart01"
  | "PieChart02"
  | "PieChart03"
  | "PieChart04"
  | "PiggyBank01"
  | "PiggyBank02"
  | "Pilcrow01"
  | "Pilcrow02"
  | "PilcrowSquare"
  | "Pin01"
  | "Pin02"
  | "Placeholder"
  | "Play"
  | "PlayCircle"
  | "PlaySquare"
  | "Plus"
  | "PlusCircle"
  | "PlusSquare"
  | "Podcast"
  | "Power01"
  | "Power02"
  | "Power03"
  | "PresentationChart01"
  | "PresentationChart02"
  | "PresentationChart03"
  | "Printer"
  | "PuzzlePiece"
  | "PuzzlePiece02"
  | "QRCode01"
  | "QRCode02"
  | "RSS01"
  | "RSS02"
  | "Receipt"
  | "ReceiptCheck"
  | "Recording01"
  | "Recording02"
  | "Recording03"
  | "Reflect01"
  | "Reflect02"
  | "RefreshCCW01"
  | "RefreshCCW02"
  | "RefreshCCW03"
  | "RefreshCCW04"
  | "RefreshCW01"
  | "RefreshCW02"
  | "RefreshCW03"
  | "RefreshCW04"
  | "RefreshCW05"
  | "RefreshLeft"
  | "RefreshRight"
  | "Repeat01"
  | "Repeat02"
  | "Repeat03"
  | "Repeat04"
  | "RightIndent01"
  | "RightIndent02"
  | "Rocket01"
  | "Rocket02"
  | "RollerBrush"
  | "Route"
  | "Rows01"
  | "Rows02"
  | "Rows03"
  | "Ruler"
  | "Safe"
  | "Sale01"
  | "Sale02"
  | "Sale03"
  | "Sale04"
  | "Save01"
  | "Save02"
  | "Save03"
  | "Scale01"
  | "Scale02"
  | "Scale03"
  | "Scales01"
  | "Scales02"
  | "Scan"
  | "Scissors01"
  | "Scissors02"
  | "ScissorsCut01"
  | "ScissorsCut02"
  | "SearchLG"
  | "SearchMD"
  | "SearchRefraction"
  | "SearchSM"
  | "Send01"
  | "Send02"
  | "Send03"
  | "Server01"
  | "Server02"
  | "Server03"
  | "Server04"
  | "Server05"
  | "Server06"
  | "Settings01"
  | "Settings02"
  | "Settings03"
  | "Settings04"
  | "Share01"
  | "Share02"
  | "Share03"
  | "Share04"
  | "Share05"
  | "Share06"
  | "Share07"
  | "Shield01"
  | "Shield02"
  | "Shield03"
  | "ShieldDollar"
  | "ShieldPlus"
  | "ShieldTick"
  | "ShieldZap"
  | "ShoppingBag01"
  | "ShoppingBag02"
  | "ShoppingBag03"
  | "ShoppingCart01"
  | "ShoppingCart02"
  | "ShoppingCart03"
  | "Shuffle01"
  | "Shuffle02"
  | "Signal01"
  | "Signal02"
  | "Signal03"
  | "SimCard"
  | "Skew"
  | "SkipBack"
  | "SkipForward"
  | "SlashCircle01"
  | "SlashCircle02"
  | "SlashDivider"
  | "SlashOctagon"
  | "Sliders01"
  | "Sliders02"
  | "Sliders03"
  | "Sliders04"
  | "SnowFlake01"
  | "SnowFlake02"
  | "SpacingHeight01"
  | "SpacingHeight02"
  | "SpacingWidth01"
  | "SpacingWidth02"
  | "Speakers01"
  | "Speakers02"
  | "Speakers03"
  | "Speedometer01"
  | "Speedometer02"
  | "Speedometer03"
  | "Speedometer04"
  | "Square"
  | "Stand"
  | "Star01"
  | "Star02"
  | "Star03"
  | "Star04"
  | "Star05"
  | "Star06"
  | "Star07"
  | "StarW01"
  | "StarW02"
  | "StarW03"
  | "StickerCircle"
  | "StickerSquare"
  | "Stop"
  | "StopCircle"
  | "StopSquare"
  | "StrikeThrough01"
  | "StrikeThrough02"
  | "StrikeThroughSquare"
  | "Subscript"
  | "Sun"
  | "SunSetting01"
  | "SunSetting02"
  | "SunSetting03"
  | "Sunrise"
  | "Sunset"
  | "SwitchHorizontal01"
  | "SwitchHorizontal02"
  | "SwitchVertical01"
  | "SwitchVertical02"
  | "TV01"
  | "TV02"
  | "TV03"
  | "Table"
  | "Tablet01"
  | "Tablet02"
  | "Tag01"
  | "Tag02"
  | "Tag03"
  | "Target01"
  | "Target02"
  | "Target03"
  | "Target04"
  | "Target05"
  | "Telescope"
  | "Terminal"
  | "TerminalBrowser"
  | "TerminalCircle"
  | "TerminalSquare"
  | "TextInput"
  | "Thermometer01"
  | "Thermometer02"
  | "Thermometer03"
  | "ThermometerCold"
  | "ThermometerWarm"
  | "ThumbsDown"
  | "ThumbsUp"
  | "Ticket01"
  | "Ticket02"
  | "Toggle01Left"
  | "Toggle01Right"
  | "Toggle02Left"
  | "Toggle02Right"
  | "Toggle03Left"
  | "Toggle03Right"
  | "Tool01"
  | "Tool02"
  | "Train"
  | "Tram"
  | "Transform"
  | "Translate01"
  | "Translate02"
  | "Trash01"
  | "Trash02"
  | "Trash03"
  | "Trash04"
  | "TrendDown01"
  | "TrendDown02"
  | "TrendUp01"
  | "TrendUp02"
  | "Triangle"
  | "Trophy01"
  | "Trophy02"
  | "Truck01"
  | "Truck02"
  | "Type01"
  | "Type02"
  | "TypeSquare"
  | "TypeStrikeThrough01"
  | "TypeStrikeThrough02"
  | "USBFlashDrive"
  | "Umbrella01"
  | "Umbrella02"
  | "Umbrella03"
  | "Underline01"
  | "Underline02"
  | "UnderlineSquare"
  | "Upload01"
  | "Upload02"
  | "Upload03"
  | "Upload04"
  | "UploadCloud01"
  | "UploadCloud02"
  | "User01"
  | "User02"
  | "User03"
  | "UserCheck01"
  | "UserCheck02"
  | "UserCircle"
  | "UserDown01"
  | "UserDown02"
  | "UserEdit"
  | "UserLeft01"
  | "UserLeft02"
  | "UserMinus01"
  | "UserMinus02"
  | "UserPlus01"
  | "UserPlus02"
  | "UserRight01"
  | "UserRight02"
  | "UserSquare"
  | "UserUp01"
  | "UserUp02"
  | "UserX01"
  | "UserX02"
  | "Users01"
  | "Users02"
  | "Users03"
  | "UsersCheck"
  | "UsersDown"
  | "UsersEdit"
  | "UsersLeft"
  | "UsersMinus"
  | "UsersPlus"
  | "UsersRight"
  | "UsersUp"
  | "UsersX"
  | "Variable"
  | "VideoRecorder"
  | "VideoRecorderOff"
  | "Virus"
  | "VoiceMail"
  | "VolumeMax"
  | "VolumeMin"
  | "VolumeMinus"
  | "VolumePlus"
  | "VolumeX"
  | "Wallet01"
  | "Wallet02"
  | "Wallet03"
  | "Wallet04"
  | "Wallet05"
  | "WatchCircle"
  | "WatchSquare"
  | "Waves"
  | "WebCam01"
  | "WebCam02"
  | "WiFi"
  | "WiFiOff"
  | "Wind01"
  | "Wind02"
  | "Wind03"
  | "X"
  | "XCircle"
  | "XClose"
  | "XSquare"
  | "YouTube"
  | "Zap"
  | "ZapCircle"
  | "ZapFast"
  | "ZapOff"
  | "ZoomIn"
  | "ZoomOut";

interface LazyIconProps extends SVGComponentProps {
  name: IconNames;
  fallback?: React.ReactNode;
}

const LazyIcon: FC<LazyIconProps> = ({ name, fallback, ...props }) => {
  const Icon = lazy(() => dynamicImportWithRetry(() =>import(/* @vite-ignore */ `./icons/${name}`)));

  return (
    <Suspense fallback={fallback ? fallback : <DefaultLazyImportFallback />}>
      <Icon {...props} />
    </Suspense>
  );
};

export default LazyIcon;
