package com.hitejinro.common.util;

import javax.swing.*;
import javax.swing.text.BadLocationException;
import javax.swing.text.EditorKit;
import java.io.*;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;
import java.util.Optional;

public final class ConvertUtil {

    private static final String COMMA_SPLIT = "\\s*,\\s*";

    private ConvertUtil() {
    }

    public static List<String> commaToList(String source) {
        return Optional.ofNullable(source)
                .map(item -> Arrays.asList(item.split(COMMA_SPLIT)))
                .orElse(Collections.emptyList());
    }

    public static String rtfToHtml(Reader rtf) throws IOException {
        JEditorPane p = new JEditorPane();
        p.setContentType("text/rtf");
        EditorKit kitRtf = p.getEditorKitForContentType("text/rtf");
        try {
            kitRtf.read(rtf, p.getDocument(), 0);
            kitRtf = null;
            EditorKit kitHtml = p.getEditorKitForContentType("text/html");
            Writer writer = new StringWriter();
            kitHtml.write(writer, p.getDocument(), 0, p.getDocument().getLength());
            return writer.toString();
        } catch (BadLocationException e) {
            e.printStackTrace();
        }
        return null;
    }

    public static String rtfTextToString(String rtfText) throws Exception {
        String htmlText = ConvertUtil.rtfToHtml(new StringReader(rtfText));
        String outputStr = new String(htmlText.getBytes("8859_1"), "KSC5601");
        return outputStr;
    }
}
