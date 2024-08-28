import React, {useState} from "react"

export const SiteHueContext = React.createContext<any>(null)
export const SiteSaturationContext = React.createContext<any>(null)
export const SiteLightnessContext = React.createContext<any>(null)
export const ThemeContext = React.createContext<any>(null)
export const HideSortbarContext = React.createContext<any>(null)
export const HideSidebarContext = React.createContext<any>(null)
export const HideNavbarContext = React.createContext<any>(null)
export const HideTitlebarContext = React.createContext<any>(null)
export const EnableDragContext = React.createContext<any>(null)
export const ActiveDropdownContext = React.createContext<any>(null)
export const SizeTypeContext = React.createContext<any>(null)
export const FilterDropActiveContext = React.createContext<any>(null)
export const SquareContext = React.createContext<any>(null)
export const ScrollContext = React.createContext<any>(null)
export const PageContext = React.createContext<any>(null)
export const CommentsPageContext = React.createContext<any>(null)
export const ArtistsPageContext = React.createContext<any>(null)
export const CharactersPageContext = React.createContext<any>(null)
export const SeriesPageContext = React.createContext<any>(null)
export const TagsPageContext = React.createContext<any>(null)
export const ForumPageContext = React.createContext<any>(null)
export const ThreadPageContext = React.createContext<any>(null)
export const BrightnessContext = React.createContext<any>(null)
export const ContrastContext = React.createContext<any>(null)
export const HueContext = React.createContext<any>(null)
export const SaturationContext = React.createContext<any>(null)
export const LightnessContext = React.createContext<any>(null)
export const BlurContext = React.createContext<any>(null)
export const SharpenContext = React.createContext<any>(null)
export const PixelateContext = React.createContext<any>(null)
export const PostAmountContext = React.createContext<any>(null)
export const PostsContext = React.createContext<any>(null)
export const DownloadIDsContext = React.createContext<any>(null)
export const DownloadFlagContext = React.createContext<any>(null)
export const RelativeContext = React.createContext<any>(null)
export const ShowDownloadDialogContext = React.createContext<any>(null)
export const DisableZoomContext = React.createContext<any>(null)
export const UploadDropFilesContext = React.createContext<any>(null)
export const SidebarHoverContext = React.createContext<any>(null)
export const ImageTypeContext = React.createContext<any>(null)
export const RestrictTypeContext = React.createContext<any>(null)
export const StyleTypeContext = React.createContext<any>(null)
export const SortTypeContext = React.createContext<any>(null)
export const SearchContext = React.createContext<any>(null)
export const SearchFlagContext = React.createContext<any>(null)
export const RandomFlagContext = React.createContext<any>(null)
export const ImageSearchFlagContext = React.createContext<any>(null)
export const TagsContext = React.createContext<any>(null)
export const SpeedContext = React.createContext<any>(null)
export const ReverseContext = React.createContext<any>(null)
export const HeaderTextContext = React.createContext<any>(null)
export const SidebarTextContext = React.createContext<any>(null)
export const SessionContext = React.createContext<any>(null)
export const SessionFlagContext = React.createContext<any>(null)
export const RedirectContext = React.createContext<any>(null)
export const UserImgContext = React.createContext<any>(null)
export const UserImgPostContext = React.createContext<any>(null)
export const QuoteTextContext = React.createContext<any>(null)
export const MobileContext = React.createContext<any>(null)
export const HideMobileNavbarContext = React.createContext<any>(null)
export const ShowDeletePostDialogContext = React.createContext<any>(null)
export const DeleteTagHistoryIDContext = React.createContext<any>(null)
export const RevertTagHistoryIDContext = React.createContext<any>(null)
export const DeleteTagHistoryFlagContext = React.createContext<any>(null)
export const RevertTagHistoryFlagContext = React.createContext<any>(null)
export const DeletePostHistoryIDContext = React.createContext<any>(null)
export const RevertPostHistoryIDContext = React.createContext<any>(null)
export const DeletePostHistoryFlagContext = React.createContext<any>(null)
export const RevertPostHistoryFlagContext = React.createContext<any>(null)
export const DeleteCommentIDContext = React.createContext<any>(null)
export const DeleteCommentFlagContext = React.createContext<any>(null)
export const EditCommentIDContext = React.createContext<any>(null)
export const EditCommentFlagContext = React.createContext<any>(null)
export const EditCommentTextContext = React.createContext<any>(null)
export const DeleteTagIDContext = React.createContext<any>(null)
export const DeleteTagFlagContext = React.createContext<any>(null)
export const EditTagIDContext = React.createContext<any>(null)
export const EditTagFlagContext = React.createContext<any>(null)
export const EditTagKeyContext = React.createContext<any>(null)
export const EditTagImageContext = React.createContext<any>(null)
export const EditTagDescriptionContext = React.createContext<any>(null)
export const EditTagAliasesContext = React.createContext<any>(null)
export const EditTagImplicationsContext = React.createContext<any>(null)
export const EditTagTypeContext = React.createContext<any>(null)
export const EditTagSocialContext = React.createContext<any>(null)
export const EditTagWebsiteContext = React.createContext<any>(null)
export const EditTagFandomContext = React.createContext<any>(null)
export const EditTagTwitterContext = React.createContext<any>(null)
export const EditTagPixivTagsContext = React.createContext<any>(null)
export const EditTagReasonContext = React.createContext<any>(null)
export const AliasTagIDContext = React.createContext<any>(null)
export const AliasTagFlagContext = React.createContext<any>(null)
export const AliasTagNameContext = React.createContext<any>(null)
export const ShowDeleteAccountDialogContext = React.createContext<any>(null)
export const HeaderFlagContext = React.createContext<any>(null)
export const CommentSearchFlagContext = React.createContext<any>(null)
export const UnverifiedPostsContext = React.createContext<any>(null)
export const ModStateContext = React.createContext<any>(null)
export const ReportCommentIDContext = React.createContext<any>(null)
export const VisiblePostsContext = React.createContext<any>(null)
export const ScrollYContext = React.createContext<any>(null)
export const PostFlagContext = React.createContext<any>(null)
export const MobileScrollingContext = React.createContext<any>(null)
export const QuickEditIDContext = React.createContext<any>(null)
export const AutoSearchContext = React.createContext<any>(null)
export const ShowPageDialogContext = React.createContext<any>(null)
export const PageFlagContext = React.createContext<any>(null)
export const ReloadPostFlagContext = React.createContext<any>(null)
export const ToolTipXContext = React.createContext<any>(null)
export const ToolTipYContext = React.createContext<any>(null)
export const ToolTipEnabledContext = React.createContext<any>(null)
export const ToolTipPostContext = React.createContext<any>(null)
export const ToolTipImgContext = React.createContext<any>(null)
export const TranslationModeContext = React.createContext<any>(null)
export const EditTranslationIDContext = React.createContext<any>(null)
export const EditTranslationFlagContext = React.createContext<any>(null)
export const EditTranslationTextContext = React.createContext<any>(null)
export const EditTranslationTranscriptContext = React.createContext<any>(null)
export const TranslationDrawingEnabledContext = React.createContext<any>(null)
export const ShowSaveTranslationDialogContext = React.createContext<any>(null)
export const SaveTranslationDataContext = React.createContext<any>(null)
export const SaveTranslationOrderContext = React.createContext<any>(null)
export const DeleteTranslationHistoryIDContext = React.createContext<any>(null)
export const DeleteTranslationHistoryFlagContext = React.createContext<any>(null)
export const RevertTranslationHistoryIDContext = React.createContext<any>(null)
export const RevertTranslationHistoryFlagContext = React.createContext<any>(null)
export const EditThreadIDContext = React.createContext<any>(null)
export const EditThreadFlagContext = React.createContext<any>(null)
export const EditThreadTitleContext = React.createContext<any>(null)
export const EditThreadContentContext = React.createContext<any>(null)
export const ShowNewThreadDialogContext = React.createContext<any>(null)
export const DeleteThreadIDContext = React.createContext<any>(null)
export const DeleteThreadFlagContext = React.createContext<any>(null)
export const DeleteReplyIDContext = React.createContext<any>(null)
export const DeleteReplyFlagContext = React.createContext<any>(null)
export const EditReplyIDContext = React.createContext<any>(null)
export const EditReplyFlagContext = React.createContext<any>(null)
export const EditReplyContentContext = React.createContext<any>(null)
export const ReportReplyIDContext = React.createContext<any>(null)
export const ReportThreadIDContext = React.createContext<any>(null)
export const BanNameContext = React.createContext<any>(null)
export const UnbanNameContext = React.createContext<any>(null)
export const UpdateUserFlagContext = React.createContext<any>(null)
export const SelectionModeContext = React.createContext<any>(null)
export const SelectionItemsContext = React.createContext<any>(null)
export const SelectionPostsContext = React.createContext<any>(null)
export const ShowBulkQuickEditDialogContext = React.createContext<any>(null)
export const ShowTakedownPostDialogContext = React.createContext<any>(null)
export const TakedownTagContext = React.createContext<any>(null)
export const ImageExpandContext = React.createContext<any>(null)

const Context: React.FunctionComponent = (props) => {
    const [siteHue, setSiteHue] = useState(180)
    const [siteSaturation, setSiteSaturation] = useState(100)
    const [siteLightness, setSiteLightness] = useState(50)
    const [brightness, setBrightness] = useState(100)
    const [contrast, setContrast] = useState(100)
    const [hue, setHue] = useState(180)
    const [saturation, setSaturation] = useState(100)
    const [lightness, setLightness] = useState(100)
    const [blur, setBlur] = useState(0)
    const [sharpen, setSharpen] = useState(0)
    const [pixelate, setPixelate] = useState(1)
    const [square, setSquare] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [page, setPage] = useState(1)
    const [commentsPage, setCommentsPage] = useState(1)
    const [artistsPage, setArtistsPage] = useState(1)
    const [charactersPage, setCharactersPage] = useState(1)
    const [seriesPage, setSeriesPage] = useState(1)
    const [tagsPage, setTagsPage] = useState(1)
    const [forumPage, setForumPage] = useState(1)
    const [threadPage, setThreadPage] = useState(1)
    const [showDownloadDialog, setShowDownloadDialog] = useState(false)
    const [postAmount, setPostAmount] = useState(0)
    const [downloadIDs, setDownloadIDs] = useState([])
    const [downloadFlag, setDownloadFlag] = useState(false)
    const [relative, setRelative] = useState(false)
    const [posts, setPosts] = useState([]) as any
    const [disableZoom, setDisableZoom] = useState(true)
    const [uploadDropFiles, setUploadDropFiles] = useState([])
    const [imageType, setImageType] = useState("all")
    const [restrictType, setRestrictType] = useState("all")
    const [styleType, setStyleType] = useState("all")
    const [sizeType, setSizeType] = useState("medium")
    const [sortType, setSortType] = useState("random")
    const [search, setSearch] = useState("")
    const [searchFlag, setSearchFlag] = useState(false)
    const [speed, setSpeed] = useState(1)
    const [reverse, setReverse] = useState(false)
    const [tags, setTags] = useState([])
    const [headerText, setHeaderText] = useState("")
    const [sidebarText, setSidebarText] = useState("")
    const [randomFlag, setRandomFlag] = useState(false)
    const [imageSearchFlag, setImageSearchFlag] = useState(null)
    const [redirect, setRedirect] = useState(null)
    const [quoteText, setQuoteText] = useState(null)
    const [hideMobileNavbar, setHideMobileNavbar] = useState(true)
    const [showDeletePostDialog, setShowDeletePostDialog] = useState(false)
    const [showTakedownPostDialog, setShowTakedownPostDialog] = useState(false)
    const [takedownTag, setTakedownTag] = useState(null)
    const [deleteTagHistoryID, setDeleteTagHistoryID] = useState(null)
    const [revertTagHistoryID, setRevertTagHistoryID] = useState(null)
    const [deleteTagHistoryFlag, setDeleteTagHistoryFlag] = useState(null)
    const [revertTagHistoryFlag, setRevertTagHistoryFlag] = useState(null)
    const [deletePostHistoryID, setDeletePostHistoryID] = useState(null)
    const [revertPostHistoryID, setRevertPostHistoryID] = useState(null)
    const [deletePostHistoryFlag, setDeletePostHistoryFlag] = useState(null)
    const [revertPostHistoryFlag, setRevertPostHistoryFlag] = useState(null)
    const [deleteCommentID, setDeleteCommentID] = useState(null)
    const [deleteCommentFlag, setDeleteCommentFlag] = useState(false)
    const [editCommentFlag, setEditCommentFlag] = useState(false)
    const [editCommentID, setEditCommentID] = useState(null)
    const [editCommentText, setEditCommentText] = useState("")
    const [deleteTagID, setDeleteTagID] = useState(null)
    const [deleteTagFlag, setDeleteTagFlag] = useState(false)
    const [editTagFlag, setEditTagFlag] = useState(false)
    const [editTagID, setEditTagID] = useState(false)
    const [editTagKey, setEditTagKey] = useState(false)
    const [editTagImage, setEditTagImage] = useState(false)
    const [editTagDescription, setEditTagDescription] = useState(false)
    const [editTagAliases, setEditTagAliases] = useState(false)
    const [editTagImplications, setEditTagImplications] = useState(false)
    const [editTagType, setEditTagType] = useState(false)
    const [editTagSocial, setEditTagSocial] = useState(false)
    const [editTagWebsite, setEditTagWebsite] = useState(false)
    const [editTagFandom, setEditTagFandom] = useState(false)
    const [editTagTwitter, setEditTagTwitter] = useState(false)
    const [editTagPixivTags, setEditTagPixivTags] = useState(false)
    const [editTagReason, setEditTagReason] = useState("")
    const [aliasTagID, setAliasTagID] = useState(null)
    const [aliasTagFlag, setAliasTagFlag] = useState(false)
    const [aliasTagName, setAliasTagName] = useState("")
    const [showDeleteAccountDialog, setShowDeleteAccountDialog] = useState(false)
    const [headerFlag, setHeaderFlag] = useState(false)
    const [commentSearchFlag, setCommentSearchFlag] = useState(null)
    const [unverifiedPosts, setUnverifiedPosts] = useState([])
    const [modState, setModState] = useState("posts")
    const [reportCommentID, setReportCommentID] = useState(null)
    const [visiblePosts, setVisiblePosts] = useState([])
    const [scrollY, setScrollY] = useState(null)
    const [postFlag, setPostFlag] = useState(false)
    const [quickEditID, setQuickEditID] = useState(null)
    const [autoSearch, setAutoSearch] = useState(false)
    const [showPageDialog, setShowPageDialog] = useState(false)
    const [pageFlag, setPageFlag] = useState(null)
    const [reloadPostFlag, setReloadPostFlag] = useState(false)
    const [tooltipX, setToolTipX] = useState(0)
    const [tooltipY, setToolTipY] = useState(0)
    const [tooltipEnabled, setToolTipEnabled] = useState(false)
    const [tooltipPost, setToolTipPost] = useState(null)
    const [tooltipImg, setToolTipImg] = useState(null)
    const [translationMode, setTranslationMode] = useState(false)
    const [editTranslationFlag, setEditTranslationFlag] = useState(false)
    const [editTranslationID, setEditTranslationID] = useState(null)
    const [editTranslationText, setEditTranslationText] = useState("")
    const [editTranslationTranscript, setEditTranslationTranscript] = useState("")
    const [translationDrawingEnabled, setTranslationDrawingEnabled] = useState(false)
    const [showSaveTranslationDialog, setShowSaveTranslationDialog] = useState(false)
    const [saveTranslationData, setSaveTranslationData] = useState(null)
    const [saveTranslationOrder, setSaveTranslationOrder] = useState(1)
    const [deleteTranslationHistoryID, setDeleteTranslationHistoryID] = useState(null)
    const [revertTranslationHistoryID, setRevertTranslationHistoryID] = useState(null)
    const [deleteTranslationHistoryFlag, setDeleteTranslationHistoryFlag] = useState(false)
    const [revertTranslationHistoryFlag, setRevertTranslationHistoryFlag] = useState(false)
    const [showNewThreadDialog, setShowNewThreadDialog] = useState(false)
    const [deleteThreadID, setDeleteThreadID] = useState(null)
    const [deleteThreadFlag, setDeleteThreadFlag] = useState(null)
    const [editThreadID, setEditThreadID] = useState(null)
    const [editThreadFlag, setEditThreadFlag] = useState(null)
    const [editThreadTitle, setEditThreadTitle] = useState(null)
    const [editThreadContent, setEditThreadContent] = useState(null)
    const [deleteReplyID, setDeleteReplyID] = useState(null)
    const [deleteReplyFlag, setDeleteReplyFlag] = useState(false)
    const [editReplyFlag, setEditReplyFlag] = useState(false)
    const [editReplyID, setEditReplyID] = useState(null)
    const [editReplyContent, setEditReplyContent] = useState("")
    const [reportReplyID, setReportReplyID] = useState(null)
    const [reportThreadID, setReportThreadID] = useState(null)
    const [banName, setBanName] = useState(null)
    const [unbanName, setUnbanName] = useState(null)
    const [updateUserFlag, setUpdateUserFlag] = useState(false)
    const [selectionItems, setSelectionItems] = useState(new Set())
    const [selectionPosts, setSelectionPosts] = useState(new Map())
    const [showBulkQuickEditDialog, setShowBulkQuickEditDialog] = useState(false)
    const [imageExpand, setImageExpand] = useState(false)

return (
    <>
        <ImageExpandContext.Provider value={{imageExpand, setImageExpand}}>
        <TakedownTagContext.Provider value={{takedownTag, setTakedownTag}}>
        <ShowTakedownPostDialogContext.Provider value={{showTakedownPostDialog, setShowTakedownPostDialog}}>
        <SelectionPostsContext.Provider value={{selectionPosts, setSelectionPosts}}>
        <ShowBulkQuickEditDialogContext.Provider value={{showBulkQuickEditDialog, setShowBulkQuickEditDialog}}>
        <SelectionItemsContext.Provider value={{selectionItems, setSelectionItems}}>
        <UpdateUserFlagContext.Provider value={{updateUserFlag, setUpdateUserFlag}}>
        <UnbanNameContext.Provider value={{unbanName, setUnbanName}}>
        <BanNameContext.Provider value={{banName, setBanName}}>
        <ReportThreadIDContext.Provider value={{reportThreadID, setReportThreadID}}>
        <EditThreadContentContext.Provider value={{editThreadContent, setEditThreadContent}}>
        <EditThreadTitleContext.Provider value={{editThreadTitle, setEditThreadTitle}}>
        <EditThreadFlagContext.Provider value={{editThreadFlag, setEditThreadFlag}}>
        <EditThreadIDContext.Provider value={{editThreadID, setEditThreadID}}>
        <DeleteThreadFlagContext.Provider value={{deleteThreadFlag, setDeleteThreadFlag}}>
        <DeleteThreadIDContext.Provider value={{deleteThreadID, setDeleteThreadID}}>
        <ReportReplyIDContext.Provider value={{reportReplyID, setReportReplyID}}>
        <EditReplyContentContext.Provider value={{editReplyContent, setEditReplyContent}}>
        <EditReplyIDContext.Provider value={{editReplyID, setEditReplyID}}>
        <EditReplyFlagContext.Provider value={{editReplyFlag, setEditReplyFlag}}>
        <DeleteReplyFlagContext.Provider value={{deleteReplyFlag, setDeleteReplyFlag}}>
        <DeleteReplyIDContext.Provider value={{deleteReplyID, setDeleteReplyID}}>
        <ThreadPageContext.Provider value={{threadPage, setThreadPage}}>
        <ForumPageContext.Provider value={{forumPage, setForumPage}}>
        <TagsPageContext.Provider value={{tagsPage, setTagsPage}}>
        <SeriesPageContext.Provider value={{seriesPage, setSeriesPage}}>
        <CharactersPageContext.Provider value={{charactersPage, setCharactersPage}}>
        <ArtistsPageContext.Provider value={{artistsPage, setArtistsPage}}>
        <CommentsPageContext.Provider value={{commentsPage, setCommentsPage}}>
        <ShowNewThreadDialogContext.Provider value={{showNewThreadDialog, setShowNewThreadDialog}}>
        <RevertTranslationHistoryFlagContext.Provider value={{revertTranslationHistoryFlag, setRevertTranslationHistoryFlag}}>
        <DeleteTranslationHistoryFlagContext.Provider value={{deleteTranslationHistoryFlag, setDeleteTranslationHistoryFlag}}>
        <RevertTranslationHistoryIDContext.Provider value={{revertTranslationHistoryID, setRevertTranslationHistoryID}}>
        <DeleteTranslationHistoryIDContext.Provider value={{deleteTranslationHistoryID, setDeleteTranslationHistoryID}}>
        <EditTagPixivTagsContext.Provider value={{editTagPixivTags, setEditTagPixivTags}}>
        <SaveTranslationOrderContext.Provider value={{saveTranslationOrder, setSaveTranslationOrder}}>
        <SaveTranslationDataContext.Provider value={{saveTranslationData, setSaveTranslationData}}>
        <ShowSaveTranslationDialogContext.Provider value={{showSaveTranslationDialog, setShowSaveTranslationDialog}}>
        <TranslationDrawingEnabledContext.Provider value={{translationDrawingEnabled, setTranslationDrawingEnabled}}>
        <EditTranslationTranscriptContext.Provider value={{editTranslationTranscript, setEditTranslationTranscript}}>
        <EditTranslationTextContext.Provider value={{editTranslationText, setEditTranslationText}}>
        <EditTranslationFlagContext.Provider value={{editTranslationFlag, setEditTranslationFlag}}>
        <EditTranslationIDContext.Provider value={{editTranslationID, setEditTranslationID}}>
        <TranslationModeContext.Provider value={{translationMode, setTranslationMode}}>
        <ToolTipImgContext.Provider value={{tooltipImg, setToolTipImg}}>
        <ToolTipPostContext.Provider value={{tooltipPost, setToolTipPost}}>
        <ToolTipEnabledContext.Provider value={{tooltipEnabled, setToolTipEnabled}}>
        <ToolTipYContext.Provider value={{tooltipY, setToolTipY}}>
        <ToolTipXContext.Provider value={{tooltipX, setToolTipX}}>
        <ReloadPostFlagContext.Provider value={{reloadPostFlag, setReloadPostFlag}}>
        <PageFlagContext.Provider value={{pageFlag, setPageFlag}}>
        <ShowPageDialogContext.Provider value={{showPageDialog, setShowPageDialog}}>
        <AutoSearchContext.Provider value={{autoSearch, setAutoSearch}}>
        <RevertPostHistoryFlagContext.Provider value={{revertPostHistoryFlag, setRevertPostHistoryFlag}}>
        <DeletePostHistoryFlagContext.Provider value={{deletePostHistoryFlag, setDeletePostHistoryFlag}}>
        <RevertPostHistoryIDContext.Provider value={{revertPostHistoryID, setRevertPostHistoryID}}>
        <DeletePostHistoryIDContext.Provider value={{deletePostHistoryID, setDeletePostHistoryID}}>
        <RevertTagHistoryFlagContext.Provider value={{revertTagHistoryFlag, setRevertTagHistoryFlag}}>
        <DeleteTagHistoryFlagContext.Provider value={{deleteTagHistoryFlag, setDeleteTagHistoryFlag}}>
        <RevertTagHistoryIDContext.Provider value={{revertTagHistoryID, setRevertTagHistoryID}}>
        <DeleteTagHistoryIDContext.Provider value={{deleteTagHistoryID, setDeleteTagHistoryID}}>
        <PageContext.Provider value={{page, setPage}}>
        <ScrollContext.Provider value={{scroll, setScroll}}>
        <EditTagReasonContext.Provider value={{editTagReason, setEditTagReason}}>
        <EditTagFandomContext.Provider value={{editTagFandom, setEditTagFandom}}>
        <EditTagWebsiteContext.Provider value={{editTagWebsite, setEditTagWebsite}}>
        <EditTagTwitterContext.Provider value={{editTagTwitter, setEditTagTwitter}}>
        <EditTagSocialContext.Provider value={{editTagSocial, setEditTagSocial}}>
        <EditTagTypeContext.Provider value={{editTagType, setEditTagType}}>
        <QuickEditIDContext.Provider value={{quickEditID, setQuickEditID}}>
        <PostFlagContext.Provider value={{postFlag, setPostFlag}}>
        <ScrollYContext.Provider value={{scrollY, setScrollY}}>
        <VisiblePostsContext.Provider value={{visiblePosts, setVisiblePosts}}>
        <ReportCommentIDContext.Provider value={{reportCommentID, setReportCommentID}}>
        <ModStateContext.Provider value={{modState, setModState}}>
        <UnverifiedPostsContext.Provider value={{unverifiedPosts, setUnverifiedPosts}}>
        <CommentSearchFlagContext.Provider value={{commentSearchFlag, setCommentSearchFlag}}>
        <HeaderFlagContext.Provider value={{headerFlag, setHeaderFlag}}>
        <ShowDeleteAccountDialogContext.Provider value={{showDeleteAccountDialog, setShowDeleteAccountDialog}}>
        <AliasTagNameContext.Provider value={{aliasTagName, setAliasTagName}}>
        <AliasTagIDContext.Provider value={{aliasTagID, setAliasTagID}}>
        <AliasTagFlagContext.Provider value={{aliasTagFlag, setAliasTagFlag}}>
        <EditTagImplicationsContext.Provider value={{editTagImplications, setEditTagImplications}}>
        <EditTagAliasesContext.Provider value={{editTagAliases, setEditTagAliases}}>
        <EditTagDescriptionContext.Provider value={{editTagDescription, setEditTagDescription}}>
        <EditTagImageContext.Provider value={{editTagImage, setEditTagImage}}>
        <EditTagKeyContext.Provider value={{editTagKey, setEditTagKey}}>
        <EditTagIDContext.Provider value={{editTagID, setEditTagID}}>
        <EditTagFlagContext.Provider value={{editTagFlag, setEditTagFlag}}>
        <DeleteTagFlagContext.Provider value={{deleteTagFlag, setDeleteTagFlag}}>
        <DeleteTagIDContext.Provider value={{deleteTagID, setDeleteTagID}}>
        <EditCommentTextContext.Provider value={{editCommentText, setEditCommentText}}>
        <EditCommentIDContext.Provider value={{editCommentID, setEditCommentID}}>
        <EditCommentFlagContext.Provider value={{editCommentFlag, setEditCommentFlag}}>
        <DeleteCommentFlagContext.Provider value={{deleteCommentFlag, setDeleteCommentFlag}}>
        <DeleteCommentIDContext.Provider value={{deleteCommentID, setDeleteCommentID}}>
        <ShowDeletePostDialogContext.Provider value={{showDeletePostDialog, setShowDeletePostDialog}}>
        <HideMobileNavbarContext.Provider value={{hideMobileNavbar, setHideMobileNavbar}}>
        <QuoteTextContext.Provider value={{quoteText, setQuoteText}}>
        <RedirectContext.Provider value={{redirect, setRedirect}}>
        <SidebarTextContext.Provider value={{sidebarText, setSidebarText}}>
        <ImageSearchFlagContext.Provider value={{imageSearchFlag, setImageSearchFlag}}>
        <RandomFlagContext.Provider value={{randomFlag, setRandomFlag}}>
        <HeaderTextContext.Provider value={{headerText, setHeaderText}}>
        <TagsContext.Provider value={{tags, setTags}}>
        <ReverseContext.Provider value={{reverse, setReverse}}>
        <SpeedContext.Provider value={{speed, setSpeed}}>
        <SearchFlagContext.Provider value={{searchFlag, setSearchFlag}}>
        <SearchContext.Provider value={{search, setSearch}}>
        <SortTypeContext.Provider value={{sortType, setSortType}}>
        <StyleTypeContext.Provider value={{styleType, setStyleType}}>
        <RestrictTypeContext.Provider value={{restrictType, setRestrictType}}>
        <ImageTypeContext.Provider value={{imageType, setImageType}}>
        <UploadDropFilesContext.Provider value={{uploadDropFiles, setUploadDropFiles}}>
        <DisableZoomContext.Provider value={{disableZoom, setDisableZoom}}>
        <RelativeContext.Provider value={{relative, setRelative}}>
        <DownloadIDsContext.Provider value={{downloadIDs, setDownloadIDs}}>
        <DownloadFlagContext.Provider value={{downloadFlag, setDownloadFlag}}>
        <PostsContext.Provider value={{posts, setPosts}}>
        <PostAmountContext.Provider value={{postAmount, setPostAmount}}>
        <ShowDownloadDialogContext.Provider value={{showDownloadDialog, setShowDownloadDialog}}>
        <PixelateContext.Provider value={{pixelate, setPixelate}}>
        <SquareContext.Provider value={{square, setSquare}}>
        <BrightnessContext.Provider value={{brightness, setBrightness}}>
        <ContrastContext.Provider value={{contrast, setContrast}}>
        <HueContext.Provider value={{hue, setHue}}>
        <SaturationContext.Provider value={{saturation, setSaturation}}>
        <LightnessContext.Provider value={{lightness, setLightness}}>
        <BlurContext.Provider value={{blur, setBlur}}>
        <SharpenContext.Provider value={{sharpen, setSharpen}}>
        <SizeTypeContext.Provider value={{sizeType, setSizeType}}>
        <SiteLightnessContext.Provider value={{siteLightness, setSiteLightness}}>
        <SiteSaturationContext.Provider value={{siteSaturation, setSiteSaturation}}>
        <SiteHueContext.Provider value={{siteHue, setSiteHue}}>
            {props.children}
        </SiteHueContext.Provider>
        </SiteSaturationContext.Provider>
        </SiteLightnessContext.Provider>
        </SizeTypeContext.Provider>
        </SharpenContext.Provider>
        </BlurContext.Provider>
        </LightnessContext.Provider>
        </SaturationContext.Provider>
        </HueContext.Provider>
        </ContrastContext.Provider>
        </BrightnessContext.Provider>
        </SquareContext.Provider>
        </PixelateContext.Provider>
        </ShowDownloadDialogContext.Provider>
        </PostAmountContext.Provider>
        </PostsContext.Provider>
        </DownloadFlagContext.Provider>
        </DownloadIDsContext.Provider>
        </RelativeContext.Provider>
        </DisableZoomContext.Provider>
        </UploadDropFilesContext.Provider>
        </ImageTypeContext.Provider>
        </RestrictTypeContext.Provider>
        </StyleTypeContext.Provider>
        </SortTypeContext.Provider>
        </SearchContext.Provider>
        </SearchFlagContext.Provider>
        </SpeedContext.Provider>
        </ReverseContext.Provider>
        </TagsContext.Provider>
        </HeaderTextContext.Provider>
        </RandomFlagContext.Provider>
        </ImageSearchFlagContext.Provider>
        </SidebarTextContext.Provider>
        </RedirectContext.Provider>
        </QuoteTextContext.Provider>
        </HideMobileNavbarContext.Provider>
        </ShowDeletePostDialogContext.Provider>
        </DeleteCommentIDContext.Provider>
        </DeleteCommentFlagContext.Provider>
        </EditCommentFlagContext.Provider>
        </EditCommentIDContext.Provider>
        </EditCommentTextContext.Provider>
        </DeleteTagIDContext.Provider>
        </DeleteTagFlagContext.Provider>
        </EditTagFlagContext.Provider>
        </EditTagIDContext.Provider>
        </EditTagKeyContext.Provider>
        </EditTagImageContext.Provider>
        </EditTagDescriptionContext.Provider>
        </EditTagAliasesContext.Provider>
        </EditTagImplicationsContext.Provider>
        </AliasTagFlagContext.Provider>
        </AliasTagIDContext.Provider>
        </AliasTagNameContext.Provider>
        </ShowDeleteAccountDialogContext.Provider>
        </HeaderFlagContext.Provider>
        </CommentSearchFlagContext.Provider>
        </UnverifiedPostsContext.Provider>
        </ModStateContext.Provider>
        </ReportCommentIDContext.Provider>
        </VisiblePostsContext.Provider>
        </ScrollYContext.Provider>
        </PostFlagContext.Provider>
        </QuickEditIDContext.Provider>
        </EditTagTypeContext.Provider>
        </EditTagSocialContext.Provider>
        </EditTagTwitterContext.Provider>
        </EditTagWebsiteContext.Provider>
        </EditTagFandomContext.Provider>
        </EditTagReasonContext.Provider>
        </ScrollContext.Provider>
        </PageContext.Provider>
        </DeleteTagHistoryIDContext.Provider>
        </RevertTagHistoryIDContext.Provider>
        </DeleteTagHistoryFlagContext.Provider>
        </RevertTagHistoryFlagContext.Provider>
        </DeletePostHistoryIDContext.Provider>
        </RevertPostHistoryIDContext.Provider>
        </DeletePostHistoryFlagContext.Provider>
        </RevertPostHistoryFlagContext.Provider>
        </AutoSearchContext.Provider>
        </ShowPageDialogContext.Provider>
        </PageFlagContext.Provider>
        </ReloadPostFlagContext.Provider>
        </ToolTipXContext.Provider>
        </ToolTipYContext.Provider>
        </ToolTipEnabledContext.Provider>
        </ToolTipPostContext.Provider>
        </ToolTipImgContext.Provider>
        </TranslationModeContext.Provider>
        </EditTranslationIDContext.Provider>
        </EditTranslationFlagContext.Provider>
        </EditTranslationTextContext.Provider>
        </EditTranslationTranscriptContext.Provider>
        </TranslationDrawingEnabledContext.Provider>
        </ShowSaveTranslationDialogContext.Provider>
        </SaveTranslationDataContext.Provider>
        </SaveTranslationOrderContext.Provider>
        </EditTagPixivTagsContext.Provider>
        </DeleteTranslationHistoryIDContext.Provider>
        </RevertTranslationHistoryIDContext.Provider>
        </DeleteTranslationHistoryFlagContext.Provider>
        </RevertTranslationHistoryFlagContext.Provider>
        </ShowNewThreadDialogContext.Provider>
        </CommentsPageContext.Provider>
        </ArtistsPageContext.Provider>
        </CharactersPageContext.Provider>
        </SeriesPageContext.Provider>
        </TagsPageContext.Provider>
        </ForumPageContext.Provider>
        </ThreadPageContext.Provider>
        </DeleteReplyIDContext.Provider>
        </DeleteReplyFlagContext.Provider>
        </EditReplyFlagContext.Provider>
        </EditReplyIDContext.Provider>
        </EditReplyContentContext.Provider>
        </ReportReplyIDContext.Provider>
        </DeleteThreadIDContext.Provider>
        </DeleteThreadFlagContext.Provider>
        </EditThreadIDContext.Provider>
        </EditThreadFlagContext.Provider>
        </EditThreadTitleContext.Provider>
        </EditThreadContentContext.Provider>
        </ReportThreadIDContext.Provider>
        </BanNameContext.Provider>
        </UnbanNameContext.Provider>
        </UpdateUserFlagContext.Provider>
        </SelectionItemsContext.Provider>
        </ShowBulkQuickEditDialogContext.Provider>
        </SelectionPostsContext.Provider>
        </ShowTakedownPostDialogContext.Provider>
        </TakedownTagContext.Provider>
        </ImageExpandContext.Provider>
    </>
    )
}

export default Context