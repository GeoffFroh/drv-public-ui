==========
drv-public-ui
==========

**drv-public-ui** is a front-end ui prototype for the version 2 **ddr-public** web application. The static HTML draft documents are intended to show design and client-side javascript features.

This latest release focuses on templates to handle items that are either plain-vanilla entities or oral history segment-type entities with either audio or video content. While it is outside the scope of this prototype, note that the template selection logic will rely on the ``DDR.Entity`` json document's ``format`` attribute (https://github.com/densho/ddr-vocab/blob/master/api/0.2/format.json) and the ``DDR.File`` ``mimetype`` of the first (i.e., lowest ``sort`` value attribute) mezzanine in the parent ``Entity``'s children files. 

(Heads-up: the examples use canned data, and are meant to represent ui layout and player functionality only.)

General explanatory notes about the AV templates:

drv-segmentDetail-videoplayer.html
    Selected when ``entity.format = 'vh'`` and ``file.mimetype.startswith( 'video/' )``. The detail page for a single video VH segment (``templates/segments/detail.html``?). This template will require both the segment ``entity.json`` data and the parent interview ``entity.json`` data in order to render. Note the parent interview info in the right-hand metadata tabbed panel, as well as the full interview list of segments in the tabbed panel under the video window. The video player uses the VideoJS player (https://videojs.com). 

drv-segmentDetail-audioplayer.html
    Selected when ``entity.format = 'vh'`` and and ``file.mimetype.startswith( 'audio/' )``. The detail page for a single audio-only VH segment. The layout is identical to the video VH template, including the right-hand tabbed metadata panel and segment browser. However, the audio file is rendered using the WaveSurfer js player component (https://wavesurfer-js.org/).

drv-entityDetail-videoplayer.html
    Selected when ``entity.format = 'av'`` and ``file.mimetype.startswith( 'video/' )``. The detail page for an unsegmented entity that is primarily video; for example, a government newsreel. The video player uses the VideoJS player (https://videojs.com).

drv-entityDetail-audioplayer.html
    Selected when ``entity.format = 'av'`` and ``file.mimetype.startswith( 'audio/' )``. The detail page for an unsegmented entity that is audio-only; for example, a song file. Note that it is possible for this type of item to be an oral history. The template uses the WaveSurfer js player component (https://wavesurfer-js.org/).

Other templates:

drv-segmentDetail-videoplayer-iaembed.html
    Legacy VH segment detail page using IA's preconfigured embedded JWplayer component. The solution is simple, but affords little control over interface and branding (e.g., the share and permalink buttons reference the IA page). 

drv-topicDetail.html
    The detail page for a single topic term (``templates/browse/term.html``). It uses the new tabbed "Gallery"/"List" ui pattern that is now the standard results list layout style for DRV. It will also be incorporated in pages like ``templates/search/results.html`` and ``templates/collections/detail.html``
    
drv-narratorList.html
    The full narrator list (``templates/browse/narrator-detail.html``) -- ``/narrators``. Note that while the page uses the gallery/list ui pattern, the particular implementation of is slightly different to support the particular data and ux needs of the narrator data type. In the django template, the code is built directly into the page rather than using the more generic ``listobject`` and ``galleryobject`` ui-tags. 

drv-narratorDetail.html
    A single narrator detail result. 

drv-staticPage.html
    An example static content page. In this case, the "Using Visual Histories" page.