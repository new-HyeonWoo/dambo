var svgEditorLang_en = (function () {
  'use strict';

  var lang_en = {
    lang: 'en',
    dir: 'ltr',
    common: {
      ok: 'OK',
      cancel: 'Cancel',
      key_backspace: 'Backspace',
      key_del: '삭제',
      key_down: '아래',
      key_up: '위',
      more_opts: '옵션 더보기',
      url: 'URL',
      width: '너비',
      height: '높이'
    },
    misc: {
      powered_by: 'Powered by'
    },
    ui: {
      toggle_stroke_tools: 'Show/hide more stroke tools',
      palette_info: 'Click to change fill color, shift-click to change stroke color',
      zoom_level: 'Change zoom level',
      panel_drag: 'Drag left/right to resize side panel',
      quality: 'Quality:',
      pathNodeTooltip: 'Drag node to move it. Double-click node to change segment type',
      pathCtrlPtTooltip: 'Drag control point to adjust curve properties',
      pick_stroke_paint_opacity: 'Pick a Stroke Paint and Opacity',
      pick_fill_paint_opacity: 'Pick a Fill Paint and Opacity'
    },
    properties: {
      id: 'Identify the element',
      fill_color: 'Change fill color',
      stroke_color: 'Change stroke color',
      stroke_style: 'Change stroke dash style',
      stroke_width: 'Change stroke width by 1, shift-click to change by 0.1',
      pos_x: 'Change X coordinate',
      pos_y: 'Change Y coordinate',
      linecap_butt: 'Linecap: Butt',
      linecap_round: 'Linecap: Round',
      linecap_square: 'Linecap: Square',
      linejoin_bevel: 'Linejoin: Bevel',
      linejoin_miter: 'Linejoin: Miter',
      linejoin_round: 'Linejoin: Round',
      angle: 'Change rotation angle',
      blur: 'Change gaussian blur value',
      opacity: 'Change selected item opacity',
      circle_cx: "Change circle's cx coordinate",
      circle_cy: "Change circle's cy coordinate",
      circle_r: "Change circle's radius",
      ellipse_cx: "Change ellipse's cx coordinate",
      ellipse_cy: "Change ellipse's cy coordinate",
      ellipse_rx: "Change ellipse's x radius",
      ellipse_ry: "Change ellipse's y radius",
      line_x1: "Change line's starting x coordinate",
      line_x2: "Change line's ending x coordinate",
      line_y1: "Change line's starting y coordinate",
      line_y2: "Change line's ending y coordinate",
      rect_height: 'Change rectangle height',
      rect_width: 'Change rectangle width',
      corner_radius: 'Change Rectangle Corner Radius',
      image_width: 'Change image width',
      image_height: 'Change image height',
      image_url: 'Change URL',
      node_x: "Change node's x coordinate",
      node_y: "Change node's y coordinate",
      seg_type: 'Change Segment type',
      straight_segments: 'Straight',
      curve_segments: 'Curve',
      text_contents: 'Change text contents',
      font_family: '글씨체 변경',
      font_size: '글씨 크기 변경',
      bold: '굵게 [B]',
      italic: '이탤릭 체 [I]'
    },
    tools: {
      main_menu: '메인 메뉴',
      bkgnd_color_opac: '배경색 선택/투명',
      connector_no_arrow: 'No arrow',
      fitToContent: '이미지에 캔버스 맞추기',
      fit_to_all: 'Fit to all content',
      fit_to_canvas: 'Fit to canvas',
      fit_to_layer_content: 'Fit to layer content',
      fit_to_sel: 'Fit to selection',
      align_relative_to: 'Align relative to ...',
      relativeTo: 'relative to:',
      page: 'page',
      largest_object: 'largest object',
      selected_objects: 'selected objects',
      smallest_object: 'smallest object',
      new_doc: '새 이미지',
      open_doc: 'SVG 파일 불러오기',
      export_img: '외부저장',
      save_doc: '이미지 저장',
      import_doc: '이미지 불러오기',
      align_to_page: 'Align Element to Page',
      align_bottom: '아래로 정렬',
      align_center: '가운데로 정렬',
      align_left: '왼쪽으로 정렬',
      align_middle: '중간으로 정렬',
      align_right: '오른쪽으로 정렬',
      align_top: '위로 정렬',
      mode_select: '도구 선택',
      mode_fhpath: '연필 도구',
      mode_line: '선 그리기',
      mode_rect: '직사각형',
      mode_square: '정사각형',
      mode_fhrect: '사각형 마법사',
      mode_ellipse: '타원',
      mode_circle: '동심원',
      mode_fhellipse: '원그리기 마법사',
      mode_path: 'Path Tool',
      mode_text: '글상자',
      mode_image: '그림상자',
      mode_zoom: '확대/축소 [Ctrl+Up/Down]',
      no_embed: 'NOTE: 이 이미지는 불러올수 없습니다.',
      undo: '실행취소 [Z]',
      redo: '다시실행 [Y]',
      tool_source: 'Edit Source [U]',
      wireframe_mode: 'Wireframe Mode [F]',
      clone: '선택 이미지 복사 [D]',
      del: '이미지 삭제 [Delete/Backspace]',
      group_elements: '그룹 이미지 [G]',
      make_link: '하이퍼 링크 생성',
      set_link_url: 'Set link URL (leave empty to remove)',
      to_path: 'Convert to Path',
      reorient_path: 'Reorient path',
      ungroup: '그룹 해제',
      docprops: '이미지 설정정보 [D]',
      move_bottom: 'Send to Back',
      move_top: 'Bring to Front',
      node_clone: 'Clone Node',
      node_delete: 'Delete Node',
      node_link: 'Link Control Points',
      add_subpath: 'Add sub-path',
      openclose_path: 'Open/close sub-path',
      source_save: 'Apply Changes',
      cut: '자르기',
      copy: '복사',
      paste: '붙여넣기',
      paste_in_place: '선택위치에 붙여넣기',
      delete: '삭제',
      group: '그룹',
      move_front: '맨앞으로 가져오기',
      move_up: '앞으로 가져오기',
      move_down: '뒤로 보내기',
      move_back: '맨뒤로 보내기'
    },
    layers: {
      layer: '레이어',
      layers: '복수 레이어',
      del: '레이어 삭제',
      move_down: 'Move Layer Down',
      new: 'New Layer',
      rename: 'Rename Layer',
      move_up: 'Move Layer Up',
      dupe: 'Duplicate Layer...',
      merge_down: 'Merge Down',
      merge_all: 'Merge All',
      move_elems_to: 'Move elements to:',
      move_selected: 'Move selected elements to a different layer'
    },
    config: {
      image_props: '이미지 설정',
      doc_title: '제목:',
      doc_dims: '캔버스 사이즈',
      included_images: '포함된 이미지',
      image_opt_embed: 'Embed data (local files)',
      image_opt_ref: 'Use file reference',
      editor_prefs: '에디터 환경설정',
      icon_size: '아이콘 크리:',
      language: '언어:',
      background: '에디터 배경색',
      editor_img_url: '이미지 URL:',
      editor_bg_note: 'Note: 배경은 이미지와 같이 저장되지 않습니다..',
      icon_large: '크게',
      icon_medium: '중간',
      icon_small: '작게',
      icon_xlarge: '최대로 크게',
      select_predefined: '배경 크기 선택:',
      units_and_rulers: 'Units & Rulers',
      show_rulers: 'Show rulers',
      base_unit: 'Base Unit:',
      grid: '그리드',
      snapping_onoff: 'Snapping on/off',
      snapping_stepsize: 'Snapping Step-Size:',
      grid_color: '그리드 색:'
    },
    notification: {
      invalidAttrValGiven: 'Invalid value given',
      noContentToFitTo: 'No content to fit to',
      dupeLayerName: 'There is already a layer named that!',
      enterUniqueLayerName: 'Please enter a unique layer name',
      enterNewLayerName: 'Please enter the new layer name',
      layerHasThatName: 'Layer already has that name',
      QmoveElemsToLayer: 'Move selected elements to layer \'%s\'?',
      QwantToClear: 'Do you want to clear the drawing?\nThis will also erase your undo history!',
      QwantToOpen: 'Do you want to open a new file?\nThis will also erase your undo history!',
      QerrorsRevertToSource: 'There were parsing errors in your SVG source.\nRevert back to original SVG source?',
      QignoreSourceChanges: 'Ignore changes made to SVG source?',
      featNotSupported: 'Feature not supported',
      enterNewImgURL: 'Enter the new image URL',
      defsFailOnSave: 'NOTE: Due to a bug in your browser, this image may appear wrong (missing gradients or elements). It will however appear correct once actually saved.',
      loadingImage: 'Loading image, please wait...',
      saveFromBrowser: "Select 'Save As...' in your browser (possibly via file menu or right-click context-menu) to save this image as a %s file.",
      noteTheseIssues: 'Also note the following issues: ',
      unsavedChanges: 'There are unsaved changes.',
      enterNewLinkURL: 'Enter the new hyperlink URL',
      errorLoadingSVG: 'Error: Unable to load SVG data',
      URLloadFail: 'Unable to load from URL',
      retrieving: "Retrieving '%s' ...",
      popupWindowBlocked: 'Popup window may be blocked by browser',
      exportNoBlur: 'Blurred elements will appear as un-blurred',
      exportNoforeignObject: 'foreignObject elements will not appear',
      exportNoDashArray: 'Strokes will appear filled',
      exportNoText: 'Text may not appear as expected'
    }
  };

  return lang_en;

}());
