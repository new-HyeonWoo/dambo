package com.hitejinro;

import org.junit.jupiter.api.Test;

import javax.swing.*;
import javax.swing.text.BadLocationException;
import javax.swing.text.EditorKit;
import java.io.*;
public class rtf2Html {

	@Test
	public void decode() throws Exception {

		String rtfText = "{\\rtf1\\ansi\\ansicpg949\\deff0{\\fonttbl{\\f0\\fnil\\fcharset129 \\'b1\\'bc\\'b8\\'b2;}}\n" +
				"{\\colortbl ;\\red0\\green0\\blue0;}\n" +
				"\\viewkind4\\uc1\\pard\\lang1042\\f0\\fs18\\'b0\\'e6\\'b1\\'e2\\'b5\\'b5 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b5\\'b5\\'b3\\'bb\\'b5\\'bf 855-4 (\\'c3\\'bc\\'c0\\'b0\\'bf\\'eb\\'c1\\'f6 682\\'c6\\'f2)\n" +
				"\\par - \\'c0\\'c7\\'c1\\'a4\\'ba\\'ce\\'c1\\'f6\\'c1\\'a1 \\'ba\\'ce\\'bf\\'b5\\'c1\\'d6\\'b7\\'f9 \\'b1\\'e2\\'c1\\'b8 \\'b0\\'f8\\'b5\\'bf\\'b4\\'e3\\'ba\\'b8\\'c1\\'df 4\\'b0\\'b3\\'c7\\'ca\\'c1\\'f6(855-11,-20,-22,-23) LH\\'b0\\'f8\\'bb\\'e7\n" +
				"\\par    \\'bc\\'f6\\'bf\\'eb, \\'b1\\'d9\\'c0\\'fa\\'b4\\'e7 \\'b8\\'bb\\'bc\\'d2\\'bf\\'a1 \\'b5\\'fb\\'b8\\'a5 \\'ba\\'bb\\'b0\\'c7 \\'c7\\'ca\\'c1\\'f6 \\'b4\\'dc\\'b5\\'b6\\'bf\\'a9\\'b7\\'c2 \\'c1\\'b8\\'c0\\'e7 \\'bf\\'a9\\'ba\\'ce \\'c8\\'ae\\'c0\\'ce \\'b8\\'f1\\'c0\\'fb \\'c0\\'e7\\'b0\\'a8\\'c1\\'a4\n" +
				"\\par - \\'b1\\'e2\\'c1\\'b8 \\'ba\\'bb\\'b0\\'c7\\'c6\\'f7\\'c7\\'d4 \\'c3\\'d1 5\\'b0\\'b3\\'c7\\'ca\\'c1\\'f6 \\'b0\\'f8\\'b5\\'bf\\'b4\\'e3\\'ba\\'b8 1,2\\'bc\\'f8\\'c0\\'a7 \\'c3\\'d1 1.96\\'be\\'ef\\'bf\\'f8 \\'b1\\'d9\\'c0\\'fa\\'b4\\'e7 \\'b1\\'e2\\'bc\\'b3\\'c1\\'a4\n" +
				"\\par   \n" +
				"\\par \\b # \\'c7\\'f6\\'c0\\'e7 \\'b1\\'d9\\'c0\\'fa\\'b4\\'e7(\\'ba\\'bb\\'b0\\'c7 \\'c6\\'f7\\'c7\\'d4 \\'b0\\'f8\\'b5\\'bf\\'b4\\'e3\\'ba\\'b8) \\'bc\\'b3\\'c1\\'a4 \\'c7\\'f6\\'c8\\'b2\n" +
				"\\par \\b0 1\\'bc\\'f8\\'c0\\'a7 \\'c7\\'cf\\'c0\\'cc\\'c6\\'ae\\'c1\\'f8\\'b7\\'ce  100,000\\'c3\\'b5\\'bf\\'f8\n" +
				"\\par 2\\'bc\\'f8\\'c0\\'a7 \\'c7\\'cf\\'c0\\'cc\\'c6\\'ae\\'c1\\'f8\\'b7\\'ce    96,000\\'c3\\'b5\\'bf\\'f8\n" +
				"\\par 3\\'bc\\'f8\\'c0\\'a7 \\'bd\\'c5\\'c7\\'d1\\'c0\\'ba\\'c7\\'e0   1,953,600\\'c3\\'b5\\'bf\\'f8\n" +
				"\\par \n" +
				"\\par \n" +
				"\\par \\b # \\'c0\\'ce\\'b1\\'d9 \\'c1\\'df\\'b0\\'b3\\'be\\'f7\\'bc\\'d2 \\'c5\\'bd\\'b9\\'ae\\'bd\\'c3\\'bc\\'bc\n" +
				"\\par \\b0    \\'b1\\'ee\\'c4\\'a1\\'b0\\'f8\\'c0\\'ce\\'c1\\'df\\'b0\\'b3\\'bb\\'e7\\'bb\\'e7\\'b9\\'ab\\'bc\\'d2 (031-966-3100), \\'b5\\'bf\\'c0\\'cf\\'c8\\'a3\\'b9\\'dd\\'ba\\'ce\\'b5\\'bf\\'bb\\'ea(031-974-0050)\n" +
				"\\par    - \\'ba\\'bb\\'b0\\'c7 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b5\\'b5\\'b3\\'bb\\'b5\\'bf \\'c0\\'da\\'bf\\'ac\\'b3\\'ec\\'c1\\'f6/1\\'c1\\'be\\'c1\\'d6\\'b0\\'c5\\'c1\\'f6\\'bf\\'aa\\'b3\\'bb \\'b8\\'e9\\'c0\\'fb 682\\'c6\\'f2\\'c0\\'c7 \\'c3\\'bc\\'c0\\'b0\\'bf\\'eb\\'c1\\'f6\\'b7\\'ce\\'bc\\'ad, \n" +
				"\\par    - \\'c0\\'ce\\'b1\\'d9 \\'c5\\'e4\\'c1\\'f6\\'b0\\'c5\\'b7\\'a1 \\'b5\\'e5\\'b9\\'b0\\'c1\\'f6\\'b8\\'b8 \\'ba\\'bb\\'b0\\'c7 \\'c1\\'f6\\'bf\\'aa\\'c0\\'c7 LH\\'b0\\'f8\\'bb\\'e7 \\'c5\\'e4\\'c1\\'f6 \\'ba\\'b8\\'bb\\'f3\\'b0\\'a1 \\'bc\\'f6\\'c1\\'d8 \\'b0\\'a8\\'be\\'c8\\'bd\\'c3 \\'c6\\'f2\\'b4\\'e7 300\\'b8\\'b8\\'bf\\'f8\n" +
				"\\par       ~ 350\\'b8\\'b8\\'bf\\'f8 \\'c1\\'a4\\'b5\\'b5\\'b7\\'ce \\'c1\\'f8\\'bc\\'fa\n" +
				"\\par    - \\'c0\\'ce\\'b1\\'d9 \\'bc\\'bc\\'b7\\'ce\\'b8\\'a6 \\'b3\\'a4 \\'c0\\'fc\\'c0\\'c7 \\'b0\\'e6\\'bf\\'ec \\'c6\\'f2\\'b4\\'e7 270\\'b8\\'b8\\'bf\\'f8\\'bc\\'b1 \\'ba\\'b8\\'bb\\'f3\\'b5\\'c7\\'be\\'fa\\'b4\\'d9\\'b0\\'ed \\'c7\\'cf\\'b8\\'e7, \\'ba\\'bb\\'b0\\'c7\\'c0\\'ba 2\\'c2\\'f7\\'bc\\'b1\\'b5\\'b5\\'b7\\'ce\\'b8\\'a6\n" +
				"\\par       \\'c1\\'a2\\'c7\\'cf\\'b0\\'ed \\'c3\\'bc\\'c0\\'b0\\'bf\\'eb\\'c1\\'f6\\'b6\\'f3 \\'c0\\'fc\\'ba\\'b8\\'b4\\'d9\\'b4\\'c2 \\'b3\\'f4\\'c0\\'bb \\'b0\\'cd\\'c0\\'b8\\'b7\\'ce \\'c3\\'df\\'c1\\'a4\n" +
				"\\par \\pard\\tx640\\tx1280\\tx1920\\tx2560\\tx3200\\tx3840\\tx4480\\tx5120\\tx5760\\tx6400\\tx7040\\tx7680\\tx8320\\tx8960\\tx9600\\tx10240\\tx10880\\tx11520\\tx12160\\tx12800\\tx13440\\tx14080\\tx14720\\tx15360\\tx16000\\tx16640\\tx17280\\tx17920\\tx18560\\tx19200\\tx19840\\tx20480 \n" +
				"\\par \n" +
				"\\par \\b # \\'b0\\'e6\\'b8\\'c5\\'bb\\'e7\\'b7\\'ca\n" +
				"\\par \\pard\\cf1\\b0\\'b0\\'e6\\'b8\\'c5\\'bb\\'e7\\'b7\\'ca \\lang1033 1\n" +
				"\\par 1. \\lang1042\\'bb\\'e7\\'b0\\'c7\\'b9\\'f8\\'c8\\'a3 \\lang1033 : \\lang1042\\'b0\\'ed\\'be\\'e7\\lang1033 7\\lang1042\\'b0\\'e8 \\lang1033 2016 \\lang1042\\'c5\\'b8\\'b0\\'e6 \\lang1033 8066(2) \\lang1042\\'c0\\'fc\\lang1033 \n" +
				"\\par 2. \\lang1042\\'b0\\'e6\\'b1\\'e2\\'b5\\'b5 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b5\\'b5\\'b3\\'bb\\'b5\\'bf \\lang1033 851-17 / \\lang1042\\'c0\\'fc \\lang1033 / 101.3\\lang1042\\'c6\\'f2\\lang1033 \n" +
				"\\par 3. \\lang1042\\'b0\\'a8\\'c1\\'a4\\'b0\\'a1 \\lang1033 : 207,700\\lang1042\\'c3\\'b5\\'bf\\'f8 \\lang1033 ( 2016.05.18) / \\lang1042\\'c6\\'f2\\'b4\\'e7 \\lang1033 2,050\\lang1042\\'c3\\'b5\\'bf\\'f8\\lang1033 \n" +
				"\\par 4. \\lang1042\\'b3\\'ab\\'c2\\'fb\\'b0\\'a1\\lang1033 (\\lang1042\\'c0\\'b2\\lang1033 ) : \\lang1042\\'c3\\'eb\\'c7\\'cf\n" +
				"\\par \\cf0 \n" +
				"\\par \\cf1\\'b0\\'e6\\'b8\\'c5\\'bb\\'e7\\'b7\\'ca \\lang1033 2\n" +
				"\\par 1. \\lang1042\\'bb\\'e7\\'b0\\'c7\\'b9\\'f8\\'c8\\'a3 \\lang1033 : \\lang1042\\'b0\\'ed\\'be\\'e7\\lang1033 3\\lang1042\\'b0\\'e8 \\lang1033 2019 \\lang1042\\'c5\\'b8\\'b0\\'e6 \\lang1033 2168 \\lang1042\\'c0\\'fc\\lang1033 \n" +
				"\\par 2. \\lang1042\\'b0\\'e6\\'b1\\'e2\\'b5\\'b5 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\lang1033 801-1 / \\lang1042\\'c0\\'fc \\lang1033 / 399.9\\lang1042\\'c6\\'f2\\lang1033 \n" +
				"\\par 3. \\lang1042\\'b0\\'a8\\'c1\\'a4\\'b0\\'a1 \\lang1033 : 645,136\\lang1042\\'c3\\'b5\\'bf\\'f8 \\lang1033 ( 2019.03.06) / \\lang1042\\'c6\\'f2\\'b4\\'e7 \\lang1033 1,613\\lang1042\\'c3\\'b5\\'bf\\'f8\\lang1033 \n" +
				"\\par 4. \\lang1042\\'b3\\'ab\\'c2\\'fb\\'b0\\'a1\\lang1033 (\\lang1042\\'c0\\'b2\\lang1033 ) ; \\lang1042\\'c3\\'eb\\'c7\\'cf\n" +
				"\\par \\cf0 \n" +
				"\\par \\cf1\\'b0\\'e6\\'b8\\'c5\\'bb\\'e7\\'b7\\'ca \\lang1033 3\n" +
				"\\par 1. \\lang1042\\'bb\\'e7\\'b0\\'c7\\'b9\\'f8\\'c8\\'a3 \\lang1033 : \\lang1042\\'b0\\'ed\\'be\\'e7\\lang1033 5\\lang1042\\'b0\\'e8 \\lang1033 2020 \\lang1042\\'c5\\'b8\\'b0\\'e6 \\lang1033 8858 \\lang1042\\'c0\\'fc\\lang1033 \n" +
				"\\par 2. \\lang1042\\'b0\\'e6\\'b1\\'e2\\'b5\\'b5 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b5\\'b5\\'b3\\'bb\\'b5\\'bf \\lang1033 642 / \\lang1042\\'c0\\'fc \\lang1033 / 1,037.9\\lang1042\\'c6\\'f2\\lang1033 \n" +
				"\\par 3. \\lang1042\\'b0\\'a8\\'c1\\'a4\\'b0\\'a1 \\lang1033 : 1,430,727\\lang1042\\'c3\\'b5\\'bf\\'f8 \\lang1033 ( 2020.09.22) / \\lang1042\\'c6\\'f2\\'b4\\'e7 \\lang1033 1,378\\lang1042\\'c3\\'b5\\'bf\\'f8\\lang1033 \n" +
				"\\par 4. \\lang1042\\'b3\\'ab\\'c2\\'fb\\'b0\\'a1 \\lang1033 (\\lang1042\\'c0\\'b2\\lang1033 ) : \\lang1042\\'b1\\'e2\\'b0\\'a2\n" +
				"\\par \\cf0 \n" +
				"\\par \\cf1\\'b0\\'e6\\'b8\\'c5\\'bb\\'e7\\'b7\\'ca \\lang1033 4\n" +
				"\\par 1. \\lang1042\\'bb\\'e7\\'b0\\'c7\\'b9\\'f8\\'c8\\'a3 \\lang1033 : \\lang1042\\'b0\\'ed\\'be\\'e7\\lang1033 6\\lang1042\\'b0\\'e8 \\lang1033 2021 \\lang1042\\'c5\\'b8\\'b0\\'e6 \\lang1033 67885 \\lang1042\\'b4\\'e4\\lang1033 \n" +
				"\\par 2. \\lang1042\\'b0\\'e6\\'b1\\'e2\\'b5\\'b5 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b5\\'b5\\'b3\\'bb\\'b5\\'bf \\lang1033 723-10 / \\lang1042\\'b4\\'e4 \\lang1033 / 219\\lang1042\\'c6\\'f2\\lang1033 \n" +
				"\\par 3. \\lang1042\\'b0\\'a8\\'c1\\'a4\\'b0\\'a1 \\lang1033 : 340,280\\lang1042\\'c3\\'b5\\'bf\\'f8 \\lang1033 ( 2021.09.03) / \\lang1042\\'c6\\'f2\\'b4\\'e7 \\lang1033 1,554\\lang1042\\'c3\\'b5\\'bf\\'f8\\lang1033 \n" +
				"\\par 4. \\lang1042\\'b3\\'ab\\'c2\\'fb\\'b0\\'a1 \\lang1033 (\\lang1042\\'c0\\'b2\\lang1033 ) : 356,580\\lang1042\\'c3\\'b5\\'bf\\'f8 \\lang1033 (104.8%) / \\lang1042\\'c6\\'f2\\'b4\\'e7 \\lang1033 1,628\\lang1042\\'c3\\'b5\\'bf\\'f8\\lang1033 \n" +
				"\\par 5. \\lang1042\\'b8\\'c5\\'b0\\'a2\\'b1\\'e2\\'c0\\'cf \\lang1033 : 2022.06.02\\lang1042 \n" +
				"\\par \\cf0 \n" +
				"\\par \n" +
				"\\par \\b # \\'b0\\'f8\\'bd\\'c3\\'c1\\'f6\\'b0\\'a1\n" +
				"\\par \\b0   - 1,223,379\\'c3\\'b5\\'bf\\'f8 (\\'c6\\'f2\\'b4\\'e7 \\'be\\'e0 180\\'b8\\'b8\\'bf\\'f8)\n" +
				"\\par \n" +
				"\\par \\b # \\'c1\\'f7\\'c0\\'fc\\'b0\\'a8\\'c1\\'a4('20.10\\'bf\\'f9)\\b0 \n" +
				"\\par   - 1,701,015\\'c3\\'b5\\'bf\\'f8 (\\'c6\\'f2\\'b4\\'e7 250\\'b8\\'b8\\'bf\\'f8)\n" +
				"\\par \n" +
				"\\par \\b # \\'c5\\'b9\\'bb\\'f3\\'b0\\'a8\\'c1\\'a4(\\'c5\\'c2\\'c6\\'f2\\'be\\'e7)\n" +
				"\\par \\b0  - 2,520,000\\'c3\\'b5\\'bf\\'f8 (\\'c6\\'f2\\'b4\\'e7 \\'be\\'e0 370\\'b8\\'b8\\'bf\\'f8)\n" +
				"\\par \n" +
				"\\par \n" +
				"\\par \\'a2\\'ba \\'c1\\'f7\\'c0\\'fc\\'b0\\'a8\\'c1\\'a4('20.10\\'bf\\'f9) \\'c0\\'cc\\'c8\\'c4 \\'c7\\'f6\\'c0\\'e7\\'b1\\'ee\\'c1\\'f6\\'c0\\'c7 \\'b0\\'ed\\'be\\'e7\\'bd\\'c3 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'b3\\'ec\\'c1\\'f6\\'c1\\'f6\\'bf\\'aa \\'c1\\'f6\\'b0\\'a1\\'bb\\'f3\\'bd\\'c2\\'c0\\'b2 \\'be\\'e0 8.7%\n" +
				"\\par     \\'c0\\'fb\\'bf\\'eb\\'bd\\'c3 \\'c7\\'f6\\'bd\\'cb\\'c1\\'a1 \\'c6\\'f2\\'b4\\'e7 \\'c3\\'df\\'c1\\'a4\\'b0\\'a1 \\'be\\'e0 270\\'b8\\'b8\\'bf\\'f8 \\'c1\\'a4\\'b5\\'b5\\'c0\\'cc\\'b3\\'aa, \n" +
				"\\par     - \\'ba\\'bb\\'b0\\'c7\\'c0\\'ba \\'b0\\'ed\\'be\\'e7\\'c3\\'a2\\'b8\\'aa\\'c1\\'f6\\'b1\\'b8 \\'c1\\'b6\\'bc\\'ba\\'bf\\'a1 \\'b5\\'fb\\'b8\\'a5 LH\\'b0\\'f8\\'bb\\'e7 \\'ba\\'b8\\'bb\\'f3\\'b0\\'c7\\'c0\\'b8\\'b7\\'ce \\'c0\\'ce\\'c7\\'cf\\'bf\\'a9 \\'b4\\'f6\\'be\\'e7\\'b1\\'b8 \\'c6\\'f2\\'b1\\'d5\\'bb\\'f3\\'bd\\'c2\\'c0\\'b2\n" +
				"\\par        \\'ba\\'b8\\'b4\\'d9 \\'bb\\'f3\\'bd\\'c2\\'c6\\'f8\\'c0\\'cc \\'b4\\'f5 \\'c4\\'c7\\'c0\\'bb \\'b0\\'cd\\'c0\\'b8\\'b7\\'ce \\'c3\\'df\\'c1\\'a4\\'b5\\'c7\\'b0\\'ed\n" +
				"\\par     - \\'c5\\'b9\\'bb\\'f3\\'b0\\'a8\\'c1\\'a4\\'b0\\'a1\\'b0\\'a1 \\'c6\\'f2\\'b4\\'e7 \\'be\\'e0 370\\'b8\\'b8\\'bf\\'f8 \\'bc\\'f6\\'c1\\'d8\\'c0\\'cc\\'b9\\'c7\\'b7\\'ce, \n" +
				"\\par   \n" +
				"\\par     \\'a1\\'e6 \\'c1\\'df\\'b0\\'b3\\'be\\'f7\\'bc\\'d2\\'c0\\'c7 \\'c1\\'f8\\'bc\\'fa\\'bd\\'c3\\'bc\\'bc \\'b5\\'ee \\'c1\\'be\\'c7\\'d5 \\'b0\\'ed\\'b7\\'c1\\'bd\\'c3, \\'ba\\'bb\\'b0\\'c7 \\'c5\\'e4\\'c1\\'f6 \\'c6\\'f2\\'b0\\'a1\\'be\\'d7 \\'c6\\'f2\\'b4\\'e7 \\'be\\'e0 300\\'b8\\'b8\\'bf\\'f8\\'c0\\'ba\n" +
				"\\par         \\'c0\\'fb\\'b4\\'e7\\'c7\\'d4 (\\'c5\\'e4\\'c1\\'f6 \\'c3\\'d1 \\'c6\\'f2\\'b0\\'a1\\'be\\'d7 2,045,949\\'c3\\'b5\\'bf\\'f8)\n" +
				"\\par \\pard\\tx640\\tx1280\\tx1920\\tx2560\\tx3200\\tx3840\\tx4480\\tx5120\\tx5760\\tx6400\\tx7040\\tx7680\\tx8320\\tx8960\\tx9600\\tx10240\\tx10880\\tx11520\\tx12160\\tx12800\\tx13440\\tx14080\\tx14720\\tx15360\\tx16000\\tx16640\\tx17280\\tx17920\\tx18560\\tx19200\\tx19840\\tx20480 \n" +
				"\\par \\pard\\fs16 \n" +
				"\\par }\n";

		String htmlText = rtfToHtml(new StringReader(rtfText));
		String outputStr = new String(htmlText.getBytes("8859_1"), "KSC5601");

		System.out.println(outputStr.toString());
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
}
