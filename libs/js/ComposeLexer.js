// Generated from ComposeLexer.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';



const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0002\u0018\u01f4\b\u0001\u0004\u0002\t\u0002\u0004\u0003\t\u0003",
    "\u0004\u0004\t\u0004\u0004\u0005\t\u0005\u0004\u0006\t\u0006\u0004\u0007",
    "\t\u0007\u0004\b\t\b\u0004\t\t\t\u0004\n\t\n\u0004\u000b\t\u000b\u0004",
    "\f\t\f\u0004\r\t\r\u0004\u000e\t\u000e\u0004\u000f\t\u000f\u0004\u0010",
    "\t\u0010\u0004\u0011\t\u0011\u0004\u0012\t\u0012\u0004\u0013\t\u0013",
    "\u0004\u0014\t\u0014\u0004\u0015\t\u0015\u0004\u0016\t\u0016\u0004\u0017",
    "\t\u0017\u0004\u0018\t\u0018\u0004\u0019\t\u0019\u0004\u001a\t\u001a",
    "\u0004\u001b\t\u001b\u0004\u001c\t\u001c\u0004\u001d\t\u001d\u0004\u001e",
    "\t\u001e\u0004\u001f\t\u001f\u0004 \t \u0004!\t!\u0004\"\t\"\u0004#",
    "\t#\u0004$\t$\u0004%\t%\u0004&\t&\u0004\'\t\'\u0004(\t(\u0004)\t)\u0004",
    "*\t*\u0004+\t+\u0004,\t,\u0004-\t-\u0004.\t.\u0004/\t/\u00040\t0\u0004",
    "1\t1\u00042\t2\u00043\t3\u00044\t4\u00045\t5\u00046\t6\u00047\t7\u0004",
    "8\t8\u00049\t9\u0004:\t:\u0004;\t;\u0004<\t<\u0004=\t=\u0004>\t>\u0004",
    "?\t?\u0004@\t@\u0004A\tA\u0004B\tB\u0004C\tC\u0004D\tD\u0004E\tE\u0003",
    "\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0004\u0003\u0004\u0003",
    "\u0005\u0003\u0005\u0003\u0006\u0003\u0006\u0003\u0007\u0003\u0007\u0003",
    "\b\u0003\b\u0003\t\u0003\t\u0003\n\u0003\n\u0003\u000b\u0003\u000b\u0003",
    "\u000b\u0003\u000b\u0003\u000b\u0003\f\u0003\f\u0003\f\u0003\f\u0003",
    "\f\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\r\u0003\u000e\u0003",
    "\u000e\u0007\u000e\u00b0\n\u000e\f\u000e\u000e\u000e\u00b3\u000b\u000e",
    "\u0003\u000f\u0003\u000f\u0003\u000f\u0003\u000f\u0005\u000f\u00b9\n",
    "\u000f\u0003\u0010\u0003\u0010\u0005\u0010\u00bd\n\u0010\u0003\u0011",
    "\u0003\u0011\u0005\u0011\u00c1\n\u0011\u0003\u0012\u0003\u0012\u0005",
    "\u0012\u00c5\n\u0012\u0003\u0013\u0003\u0013\u0005\u0013\u00c9\n\u0013",
    "\u0003\u0014\u0003\u0014\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015",
    "\u00d0\n\u0015\u0003\u0015\u0003\u0015\u0003\u0015\u0005\u0015\u00d5",
    "\n\u0015\u0005\u0015\u00d7\n\u0015\u0003\u0016\u0003\u0016\u0005\u0016",
    "\u00db\n\u0016\u0003\u0016\u0005\u0016\u00de\n\u0016\u0003\u0017\u0003",
    "\u0017\u0005\u0017\u00e2\n\u0017\u0003\u0018\u0003\u0018\u0003\u0019",
    "\u0006\u0019\u00e7\n\u0019\r\u0019\u000e\u0019\u00e8\u0003\u001a\u0003",
    "\u001a\u0005\u001a\u00ed\n\u001a\u0003\u001b\u0006\u001b\u00f0\n\u001b",
    "\r\u001b\u000e\u001b\u00f1\u0003\u001c\u0003\u001c\u0003\u001c\u0003",
    "\u001c\u0003\u001d\u0003\u001d\u0005\u001d\u00fa\n\u001d\u0003\u001d",
    "\u0005\u001d\u00fd\n\u001d\u0003\u001e\u0003\u001e\u0003\u001f\u0006",
    "\u001f\u0102\n\u001f\r\u001f\u000e\u001f\u0103\u0003 \u0003 \u0005 ",
    "\u0108\n \u0003!\u0003!\u0005!\u010c\n!\u0003!\u0003!\u0003\"\u0003",
    "\"\u0005\"\u0112\n\"\u0003\"\u0005\"\u0115\n\"\u0003#\u0003#\u0003$",
    "\u0006$\u011a\n$\r$\u000e$\u011b\u0003%\u0003%\u0005%\u0120\n%\u0003",
    "&\u0003&\u0003&\u0003&\u0003\'\u0003\'\u0005\'\u0128\n\'\u0003\'\u0005",
    "\'\u012b\n\'\u0003(\u0003(\u0003)\u0006)\u0130\n)\r)\u000e)\u0131\u0003",
    "*\u0003*\u0005*\u0136\n*\u0003+\u0003+\u0005+\u013a\n+\u0003,\u0003",
    ",\u0003,\u0005,\u013f\n,\u0003,\u0005,\u0142\n,\u0003,\u0005,\u0145",
    "\n,\u0003,\u0003,\u0003,\u0005,\u014a\n,\u0003,\u0005,\u014d\n,\u0003",
    ",\u0003,\u0003,\u0005,\u0152\n,\u0003,\u0003,\u0003,\u0005,\u0157\n",
    ",\u0003-\u0003-\u0003-\u0003.\u0003.\u0003/\u0005/\u015f\n/\u0003/\u0003",
    "/\u00030\u00030\u00031\u00031\u00032\u00032\u00032\u00052\u016a\n2\u0003",
    "3\u00033\u00053\u016e\n3\u00033\u00033\u00033\u00053\u0173\n3\u0003",
    "3\u00033\u00053\u0177\n3\u00034\u00034\u00034\u00035\u00035\u00036\u0003",
    "6\u00036\u00036\u00036\u00036\u00036\u00036\u00036\u00056\u0187\n6\u0003",
    "7\u00037\u00037\u00037\u00037\u00037\u00037\u00037\u00057\u0191\n7\u0003",
    "8\u00038\u00039\u00039\u00059\u0197\n9\u00039\u00039\u0003:\u0006:\u019c",
    "\n:\r:\u000e:\u019d\u0003;\u0003;\u0005;\u01a2\n;\u0003<\u0003<\u0003",
    "<\u0003<\u0005<\u01a8\n<\u0003=\u0003=\u0003=\u0003=\u0003=\u0003=\u0003",
    "=\u0003=\u0003=\u0003=\u0003=\u0005=\u01b5\n=\u0003>\u0003>\u0003?\u0003",
    "?\u0006?\u01bb\n?\r?\u000e?\u01bc\u0003?\u0003?\u0003?\u0003?\u0003",
    "?\u0003@\u0003@\u0003@\u0003@\u0003@\u0003A\u0003A\u0003A\u0003A\u0005",
    "A\u01cd\nA\u0003B\u0003B\u0003B\u0003B\u0005B\u01d3\nB\u0003C\u0006",
    "C\u01d6\nC\rC\u000eC\u01d7\u0003C\u0003C\u0003D\u0003D\u0003D\u0003",
    "D\u0007D\u01e0\nD\fD\u000eD\u01e3\u000bD\u0003D\u0003D\u0003D\u0003",
    "D\u0003D\u0003E\u0003E\u0003E\u0003E\u0007E\u01ee\nE\fE\u000eE\u01f1",
    "\u000bE\u0003E\u0003E\u0003\u01e1\u0002F\u0003\u0003\u0005\u0004\u0007",
    "\u0005\t\u0006\u000b\u0007\r\b\u000f\t\u0011\n\u0013\u000b\u0015\f\u0017",
    "\r\u0019\u000e\u001b\u000f\u001d\u0010\u001f\u0002!\u0002#\u0002%\u0002",
    "\'\u0002)\u0002+\u0002-\u0002/\u00021\u00023\u00025\u00027\u00029\u0002",
    ";\u0002=\u0002?\u0002A\u0002C\u0002E\u0002G\u0002I\u0002K\u0002M\u0002",
    "O\u0002Q\u0002S\u0002U\u0011W\u0002Y\u0002[\u0002]\u0002_\u0002a\u0002",
    "c\u0002e\u0002g\u0002i\u0002k\u0012m\u0013o\u0002q\u0014s\u0002u\u0002",
    "w\u0002y\u0002{\u0002}\u0002\u007f\u0015\u0081\u0002\u0083\u0002\u0085",
    "\u0016\u0087\u0017\u0089\u0018\u0003\u0002\u0018\u0004\u0002NNnn\u0003",
    "\u00023;\u0004\u0002ZZzz\u0005\u00022;CHch\u0003\u000229\u0004\u0002",
    "DDdd\u0003\u000223\u0004\u0002GGgg\u0004\u0002--//\u0006\u0002FFHHf",
    "fhh\u0004\u0002RRrr\u0006\u0002\f\f\u000f\u000f))^^\u0006\u0002\f\f",
    "\u000f\u000f$$^^\n\u0002$$))^^ddhhppttvv\u0003\u000225\u0006\u0002&",
    "&C\\aac|\u0004\u0002\u0002\u0081\ud802\udc01\u0003\u0002\ud802\udc01",
    "\u0003\u0002\udc02\ue001\u0007\u0002&&2;C\\aac|\u0005\u0002\u000b\f",
    "\u000e\u000f\"\"\u0004\u0002\f\f\u000f\u000f\u0002\u0203\u0002\u0003",
    "\u0003\u0002\u0002\u0002\u0002\u0005\u0003\u0002\u0002\u0002\u0002\u0007",
    "\u0003\u0002\u0002\u0002\u0002\t\u0003\u0002\u0002\u0002\u0002\u000b",
    "\u0003\u0002\u0002\u0002\u0002\r\u0003\u0002\u0002\u0002\u0002\u000f",
    "\u0003\u0002\u0002\u0002\u0002\u0011\u0003\u0002\u0002\u0002\u0002\u0013",
    "\u0003\u0002\u0002\u0002\u0002\u0015\u0003\u0002\u0002\u0002\u0002\u0017",
    "\u0003\u0002\u0002\u0002\u0002\u0019\u0003\u0002\u0002\u0002\u0002\u001b",
    "\u0003\u0002\u0002\u0002\u0002\u001d\u0003\u0002\u0002\u0002\u0002U",
    "\u0003\u0002\u0002\u0002\u0002k\u0003\u0002\u0002\u0002\u0002m\u0003",
    "\u0002\u0002\u0002\u0002q\u0003\u0002\u0002\u0002\u0002\u007f\u0003",
    "\u0002\u0002\u0002\u0002\u0085\u0003\u0002\u0002\u0002\u0002\u0087\u0003",
    "\u0002\u0002\u0002\u0002\u0089\u0003\u0002\u0002\u0002\u0003\u008b\u0003",
    "\u0002\u0002\u0002\u0005\u008d\u0003\u0002\u0002\u0002\u0007\u008f\u0003",
    "\u0002\u0002\u0002\t\u0091\u0003\u0002\u0002\u0002\u000b\u0093\u0003",
    "\u0002\u0002\u0002\r\u0095\u0003\u0002\u0002\u0002\u000f\u0097\u0003",
    "\u0002\u0002\u0002\u0011\u0099\u0003\u0002\u0002\u0002\u0013\u009b\u0003",
    "\u0002\u0002\u0002\u0015\u009d\u0003\u0002\u0002\u0002\u0017\u00a2\u0003",
    "\u0002\u0002\u0002\u0019\u00a7\u0003\u0002\u0002\u0002\u001b\u00ad\u0003",
    "\u0002\u0002\u0002\u001d\u00b8\u0003\u0002\u0002\u0002\u001f\u00ba\u0003",
    "\u0002\u0002\u0002!\u00be\u0003\u0002\u0002\u0002#\u00c2\u0003\u0002",
    "\u0002\u0002%\u00c6\u0003\u0002\u0002\u0002\'\u00ca\u0003\u0002\u0002",
    "\u0002)\u00d6\u0003\u0002\u0002\u0002+\u00d8\u0003\u0002\u0002\u0002",
    "-\u00e1\u0003\u0002\u0002\u0002/\u00e3\u0003\u0002\u0002\u00021\u00e6",
    "\u0003\u0002\u0002\u00023\u00ec\u0003\u0002\u0002\u00025\u00ef\u0003",
    "\u0002\u0002\u00027\u00f3\u0003\u0002\u0002\u00029\u00f7\u0003\u0002",
    "\u0002\u0002;\u00fe\u0003\u0002\u0002\u0002=\u0101\u0003\u0002\u0002",
    "\u0002?\u0107\u0003\u0002\u0002\u0002A\u0109\u0003\u0002\u0002\u0002",
    "C\u010f\u0003\u0002\u0002\u0002E\u0116\u0003\u0002\u0002\u0002G\u0119",
    "\u0003\u0002\u0002\u0002I\u011f\u0003\u0002\u0002\u0002K\u0121\u0003",
    "\u0002\u0002\u0002M\u0125\u0003\u0002\u0002\u0002O\u012c\u0003\u0002",
    "\u0002\u0002Q\u012f\u0003\u0002\u0002\u0002S\u0135\u0003\u0002\u0002",
    "\u0002U\u0139\u0003\u0002\u0002\u0002W\u0156\u0003\u0002\u0002\u0002",
    "Y\u0158\u0003\u0002\u0002\u0002[\u015b\u0003\u0002\u0002\u0002]\u015e",
    "\u0003\u0002\u0002\u0002_\u0162\u0003\u0002\u0002\u0002a\u0164\u0003",
    "\u0002\u0002\u0002c\u0166\u0003\u0002\u0002\u0002e\u0176\u0003\u0002",
    "\u0002\u0002g\u0178\u0003\u0002\u0002\u0002i\u017b\u0003\u0002\u0002",
    "\u0002k\u0186\u0003\u0002\u0002\u0002m\u0190\u0003\u0002\u0002\u0002",
    "o\u0192\u0003\u0002\u0002\u0002q\u0194\u0003\u0002\u0002\u0002s\u019b",
    "\u0003\u0002\u0002\u0002u\u01a1\u0003\u0002\u0002\u0002w\u01a7\u0003",
    "\u0002\u0002\u0002y\u01b4\u0003\u0002\u0002\u0002{\u01b6\u0003\u0002",
    "\u0002\u0002}\u01b8\u0003\u0002\u0002\u0002\u007f\u01c3\u0003\u0002",
    "\u0002\u0002\u0081\u01cc\u0003\u0002\u0002\u0002\u0083\u01d2\u0003\u0002",
    "\u0002\u0002\u0085\u01d5\u0003\u0002\u0002\u0002\u0087\u01db\u0003\u0002",
    "\u0002\u0002\u0089\u01e9\u0003\u0002\u0002\u0002\u008b\u008c\u0007*",
    "\u0002\u0002\u008c\u0004\u0003\u0002\u0002\u0002\u008d\u008e\u0007+",
    "\u0002\u0002\u008e\u0006\u0003\u0002\u0002\u0002\u008f\u0090\u0007}",
    "\u0002\u0002\u0090\b\u0003\u0002\u0002\u0002\u0091\u0092\u0007\u007f",
    "\u0002\u0002\u0092\n\u0003\u0002\u0002\u0002\u0093\u0094\u0007]\u0002",
    "\u0002\u0094\f\u0003\u0002\u0002\u0002\u0095\u0096\u0007_\u0002\u0002",
    "\u0096\u000e\u0003\u0002\u0002\u0002\u0097\u0098\u0007=\u0002\u0002",
    "\u0098\u0010\u0003\u0002\u0002\u0002\u0099\u009a\u0007.\u0002\u0002",
    "\u009a\u0012\u0003\u0002\u0002\u0002\u009b\u009c\u00070\u0002\u0002",
    "\u009c\u0014\u0003\u0002\u0002\u0002\u009d\u009e\u0007D\u0002\u0002",
    "\u009e\u009f\u0007q\u0002\u0002\u009f\u00a0\u0007q\u0002\u0002\u00a0",
    "\u00a1\u0007m\u0002\u0002\u00a1\u0016\u0003\u0002\u0002\u0002\u00a2",
    "\u00a3\u0007P\u0002\u0002\u00a3\u00a4\u0007q\u0002\u0002\u00a4\u00a5",
    "\u0007v\u0002\u0002\u00a5\u00a6\u0007g\u0002\u0002\u00a6\u0018\u0003",
    "\u0002\u0002\u0002\u00a7\u00a8\u0007R\u0002\u0002\u00a8\u00a9\u0007",
    "c\u0002\u0002\u00a9\u00aa\u0007r\u0002\u0002\u00aa\u00ab\u0007g\u0002",
    "\u0002\u00ab\u00ac\u0007t\u0002\u0002\u00ac\u001a\u0003\u0002\u0002",
    "\u0002\u00ad\u00b1\u0005\u0081A\u0002\u00ae\u00b0\u0005\u0083B\u0002",
    "\u00af\u00ae\u0003\u0002\u0002\u0002\u00b0\u00b3\u0003\u0002\u0002\u0002",
    "\u00b1\u00af\u0003\u0002\u0002\u0002\u00b1\u00b2\u0003\u0002\u0002\u0002",
    "\u00b2\u001c\u0003\u0002\u0002\u0002\u00b3\u00b1\u0003\u0002\u0002\u0002",
    "\u00b4\u00b9\u0005\u001f\u0010\u0002\u00b5\u00b9\u0005!\u0011\u0002",
    "\u00b6\u00b9\u0005#\u0012\u0002\u00b7\u00b9\u0005%\u0013\u0002\u00b8",
    "\u00b4\u0003\u0002\u0002\u0002\u00b8\u00b5\u0003\u0002\u0002\u0002\u00b8",
    "\u00b6\u0003\u0002\u0002\u0002\u00b8\u00b7\u0003\u0002\u0002\u0002\u00b9",
    "\u001e\u0003\u0002\u0002\u0002\u00ba\u00bc\u0005)\u0015\u0002\u00bb",
    "\u00bd\u0005\'\u0014\u0002\u00bc\u00bb\u0003\u0002\u0002\u0002\u00bc",
    "\u00bd\u0003\u0002\u0002\u0002\u00bd \u0003\u0002\u0002\u0002\u00be",
    "\u00c0\u00057\u001c\u0002\u00bf\u00c1\u0005\'\u0014\u0002\u00c0\u00bf",
    "\u0003\u0002\u0002\u0002\u00c0\u00c1\u0003\u0002\u0002\u0002\u00c1\"",
    "\u0003\u0002\u0002\u0002\u00c2\u00c4\u0005A!\u0002\u00c3\u00c5\u0005",
    "\'\u0014\u0002\u00c4\u00c3\u0003\u0002\u0002\u0002\u00c4\u00c5\u0003",
    "\u0002\u0002\u0002\u00c5$\u0003\u0002\u0002\u0002\u00c6\u00c8\u0005",
    "K&\u0002\u00c7\u00c9\u0005\'\u0014\u0002\u00c8\u00c7\u0003\u0002\u0002",
    "\u0002\u00c8\u00c9\u0003\u0002\u0002\u0002\u00c9&\u0003\u0002\u0002",
    "\u0002\u00ca\u00cb\t\u0002\u0002\u0002\u00cb(\u0003\u0002\u0002\u0002",
    "\u00cc\u00d7\u00072\u0002\u0002\u00cd\u00d4\u0005/\u0018\u0002\u00ce",
    "\u00d0\u0005+\u0016\u0002\u00cf\u00ce\u0003\u0002\u0002\u0002\u00cf",
    "\u00d0\u0003\u0002\u0002\u0002\u00d0\u00d5\u0003\u0002\u0002\u0002\u00d1",
    "\u00d2\u00055\u001b\u0002\u00d2\u00d3\u0005+\u0016\u0002\u00d3\u00d5",
    "\u0003\u0002\u0002\u0002\u00d4\u00cf\u0003\u0002\u0002\u0002\u00d4\u00d1",
    "\u0003\u0002\u0002\u0002\u00d5\u00d7\u0003\u0002\u0002\u0002\u00d6\u00cc",
    "\u0003\u0002\u0002\u0002\u00d6\u00cd\u0003\u0002\u0002\u0002\u00d7*",
    "\u0003\u0002\u0002\u0002\u00d8\u00dd\u0005-\u0017\u0002\u00d9\u00db",
    "\u00051\u0019\u0002\u00da\u00d9\u0003\u0002\u0002\u0002\u00da\u00db",
    "\u0003\u0002\u0002\u0002\u00db\u00dc\u0003\u0002\u0002\u0002\u00dc\u00de",
    "\u0005-\u0017\u0002\u00dd\u00da\u0003\u0002\u0002\u0002\u00dd\u00de",
    "\u0003\u0002\u0002\u0002\u00de,\u0003\u0002\u0002\u0002\u00df\u00e2",
    "\u00072\u0002\u0002\u00e0\u00e2\u0005/\u0018\u0002\u00e1\u00df\u0003",
    "\u0002\u0002\u0002\u00e1\u00e0\u0003\u0002\u0002\u0002\u00e2.\u0003",
    "\u0002\u0002\u0002\u00e3\u00e4\t\u0003\u0002\u0002\u00e40\u0003\u0002",
    "\u0002\u0002\u00e5\u00e7\u00053\u001a\u0002\u00e6\u00e5\u0003\u0002",
    "\u0002\u0002\u00e7\u00e8\u0003\u0002\u0002\u0002\u00e8\u00e6\u0003\u0002",
    "\u0002\u0002\u00e8\u00e9\u0003\u0002\u0002\u0002\u00e92\u0003\u0002",
    "\u0002\u0002\u00ea\u00ed\u0005-\u0017\u0002\u00eb\u00ed\u0007a\u0002",
    "\u0002\u00ec\u00ea\u0003\u0002\u0002\u0002\u00ec\u00eb\u0003\u0002\u0002",
    "\u0002\u00ed4\u0003\u0002\u0002\u0002\u00ee\u00f0\u0007a\u0002\u0002",
    "\u00ef\u00ee\u0003\u0002\u0002\u0002\u00f0\u00f1\u0003\u0002\u0002\u0002",
    "\u00f1\u00ef\u0003\u0002\u0002\u0002\u00f1\u00f2\u0003\u0002\u0002\u0002",
    "\u00f26\u0003\u0002\u0002\u0002\u00f3\u00f4\u00072\u0002\u0002\u00f4",
    "\u00f5\t\u0004\u0002\u0002\u00f5\u00f6\u00059\u001d\u0002\u00f68\u0003",
    "\u0002\u0002\u0002\u00f7\u00fc\u0005;\u001e\u0002\u00f8\u00fa\u0005",
    "=\u001f\u0002\u00f9\u00f8\u0003\u0002\u0002\u0002\u00f9\u00fa\u0003",
    "\u0002\u0002\u0002\u00fa\u00fb\u0003\u0002\u0002\u0002\u00fb\u00fd\u0005",
    ";\u001e\u0002\u00fc\u00f9\u0003\u0002\u0002\u0002\u00fc\u00fd\u0003",
    "\u0002\u0002\u0002\u00fd:\u0003\u0002\u0002\u0002\u00fe\u00ff\t\u0005",
    "\u0002\u0002\u00ff<\u0003\u0002\u0002\u0002\u0100\u0102\u0005? \u0002",
    "\u0101\u0100\u0003\u0002\u0002\u0002\u0102\u0103\u0003\u0002\u0002\u0002",
    "\u0103\u0101\u0003\u0002\u0002\u0002\u0103\u0104\u0003\u0002\u0002\u0002",
    "\u0104>\u0003\u0002\u0002\u0002\u0105\u0108\u0005;\u001e\u0002\u0106",
    "\u0108\u0007a\u0002\u0002\u0107\u0105\u0003\u0002\u0002\u0002\u0107",
    "\u0106\u0003\u0002\u0002\u0002\u0108@\u0003\u0002\u0002\u0002\u0109",
    "\u010b\u00072\u0002\u0002\u010a\u010c\u00055\u001b\u0002\u010b\u010a",
    "\u0003\u0002\u0002\u0002\u010b\u010c\u0003\u0002\u0002\u0002\u010c\u010d",
    "\u0003\u0002\u0002\u0002\u010d\u010e\u0005C\"\u0002\u010eB\u0003\u0002",
    "\u0002\u0002\u010f\u0114\u0005E#\u0002\u0110\u0112\u0005G$\u0002\u0111",
    "\u0110\u0003\u0002\u0002\u0002\u0111\u0112\u0003\u0002\u0002\u0002\u0112",
    "\u0113\u0003\u0002\u0002\u0002\u0113\u0115\u0005E#\u0002\u0114\u0111",
    "\u0003\u0002\u0002\u0002\u0114\u0115\u0003\u0002\u0002\u0002\u0115D",
    "\u0003\u0002\u0002\u0002\u0116\u0117\t\u0006\u0002\u0002\u0117F\u0003",
    "\u0002\u0002\u0002\u0118\u011a\u0005I%\u0002\u0119\u0118\u0003\u0002",
    "\u0002\u0002\u011a\u011b\u0003\u0002\u0002\u0002\u011b\u0119\u0003\u0002",
    "\u0002\u0002\u011b\u011c\u0003\u0002\u0002\u0002\u011cH\u0003\u0002",
    "\u0002\u0002\u011d\u0120\u0005E#\u0002\u011e\u0120\u0007a\u0002\u0002",
    "\u011f\u011d\u0003\u0002\u0002\u0002\u011f\u011e\u0003\u0002\u0002\u0002",
    "\u0120J\u0003\u0002\u0002\u0002\u0121\u0122\u00072\u0002\u0002\u0122",
    "\u0123\t\u0007\u0002\u0002\u0123\u0124\u0005M\'\u0002\u0124L\u0003\u0002",
    "\u0002\u0002\u0125\u012a\u0005O(\u0002\u0126\u0128\u0005Q)\u0002\u0127",
    "\u0126\u0003\u0002\u0002\u0002\u0127\u0128\u0003\u0002\u0002\u0002\u0128",
    "\u0129\u0003\u0002\u0002\u0002\u0129\u012b\u0005O(\u0002\u012a\u0127",
    "\u0003\u0002\u0002\u0002\u012a\u012b\u0003\u0002\u0002\u0002\u012bN",
    "\u0003\u0002\u0002\u0002\u012c\u012d\t\b\u0002\u0002\u012dP\u0003\u0002",
    "\u0002\u0002\u012e\u0130\u0005S*\u0002\u012f\u012e\u0003\u0002\u0002",
    "\u0002\u0130\u0131\u0003\u0002\u0002\u0002\u0131\u012f\u0003\u0002\u0002",
    "\u0002\u0131\u0132\u0003\u0002\u0002\u0002\u0132R\u0003\u0002\u0002",
    "\u0002\u0133\u0136\u0005O(\u0002\u0134\u0136\u0007a\u0002\u0002\u0135",
    "\u0133\u0003\u0002\u0002\u0002\u0135\u0134\u0003\u0002\u0002\u0002\u0136",
    "T\u0003\u0002\u0002\u0002\u0137\u013a\u0005W,\u0002\u0138\u013a\u0005",
    "c2\u0002\u0139\u0137\u0003\u0002\u0002\u0002\u0139\u0138\u0003\u0002",
    "\u0002\u0002\u013aV\u0003\u0002\u0002\u0002\u013b\u013c\u0005+\u0016",
    "\u0002\u013c\u013e\u00070\u0002\u0002\u013d\u013f\u0005+\u0016\u0002",
    "\u013e\u013d\u0003\u0002\u0002\u0002\u013e\u013f\u0003\u0002\u0002\u0002",
    "\u013f\u0141\u0003\u0002\u0002\u0002\u0140\u0142\u0005Y-\u0002\u0141",
    "\u0140\u0003\u0002\u0002\u0002\u0141\u0142\u0003\u0002\u0002\u0002\u0142",
    "\u0144\u0003\u0002\u0002\u0002\u0143\u0145\u0005a1\u0002\u0144\u0143",
    "\u0003\u0002\u0002\u0002\u0144\u0145\u0003\u0002\u0002\u0002\u0145\u0157",
    "\u0003\u0002\u0002\u0002\u0146\u0147\u00070\u0002\u0002\u0147\u0149",
    "\u0005+\u0016\u0002\u0148\u014a\u0005Y-\u0002\u0149\u0148\u0003\u0002",
    "\u0002\u0002\u0149\u014a\u0003\u0002\u0002\u0002\u014a\u014c\u0003\u0002",
    "\u0002\u0002\u014b\u014d\u0005a1\u0002\u014c\u014b\u0003\u0002\u0002",
    "\u0002\u014c\u014d\u0003\u0002\u0002\u0002\u014d\u0157\u0003\u0002\u0002",
    "\u0002\u014e\u014f\u0005+\u0016\u0002\u014f\u0151\u0005Y-\u0002\u0150",
    "\u0152\u0005a1\u0002\u0151\u0150\u0003\u0002\u0002\u0002\u0151\u0152",
    "\u0003\u0002\u0002\u0002\u0152\u0157\u0003\u0002\u0002\u0002\u0153\u0154",
    "\u0005+\u0016\u0002\u0154\u0155\u0005a1\u0002\u0155\u0157\u0003\u0002",
    "\u0002\u0002\u0156\u013b\u0003\u0002\u0002\u0002\u0156\u0146\u0003\u0002",
    "\u0002\u0002\u0156\u014e\u0003\u0002\u0002\u0002\u0156\u0153\u0003\u0002",
    "\u0002\u0002\u0157X\u0003\u0002\u0002\u0002\u0158\u0159\u0005[.\u0002",
    "\u0159\u015a\u0005]/\u0002\u015aZ\u0003\u0002\u0002\u0002\u015b\u015c",
    "\t\t\u0002\u0002\u015c\\\u0003\u0002\u0002\u0002\u015d\u015f\u0005_",
    "0\u0002\u015e\u015d\u0003\u0002\u0002\u0002\u015e\u015f\u0003\u0002",
    "\u0002\u0002\u015f\u0160\u0003\u0002\u0002\u0002\u0160\u0161\u0005+",
    "\u0016\u0002\u0161^\u0003\u0002\u0002\u0002\u0162\u0163\t\n\u0002\u0002",
    "\u0163`\u0003\u0002\u0002\u0002\u0164\u0165\t\u000b\u0002\u0002\u0165",
    "b\u0003\u0002\u0002\u0002\u0166\u0167\u0005e3\u0002\u0167\u0169\u0005",
    "g4\u0002\u0168\u016a\u0005a1\u0002\u0169\u0168\u0003\u0002\u0002\u0002",
    "\u0169\u016a\u0003\u0002\u0002\u0002\u016ad\u0003\u0002\u0002\u0002",
    "\u016b\u016d\u00057\u001c\u0002\u016c\u016e\u00070\u0002\u0002\u016d",
    "\u016c\u0003\u0002\u0002\u0002\u016d\u016e\u0003\u0002\u0002\u0002\u016e",
    "\u0177\u0003\u0002\u0002\u0002\u016f\u0170\u00072\u0002\u0002\u0170",
    "\u0172\t\u0004\u0002\u0002\u0171\u0173\u00059\u001d\u0002\u0172\u0171",
    "\u0003\u0002\u0002\u0002\u0172\u0173\u0003\u0002\u0002\u0002\u0173\u0174",
    "\u0003\u0002\u0002\u0002\u0174\u0175\u00070\u0002\u0002\u0175\u0177",
    "\u00059\u001d\u0002\u0176\u016b\u0003\u0002\u0002\u0002\u0176\u016f",
    "\u0003\u0002\u0002\u0002\u0177f\u0003\u0002\u0002\u0002\u0178\u0179",
    "\u0005i5\u0002\u0179\u017a\u0005]/\u0002\u017ah\u0003\u0002\u0002\u0002",
    "\u017b\u017c\t\f\u0002\u0002\u017cj\u0003\u0002\u0002\u0002\u017d\u017e",
    "\u0007v\u0002\u0002\u017e\u017f\u0007t\u0002\u0002\u017f\u0180\u0007",
    "w\u0002\u0002\u0180\u0187\u0007g\u0002\u0002\u0181\u0182\u0007h\u0002",
    "\u0002\u0182\u0183\u0007c\u0002\u0002\u0183\u0184\u0007n\u0002\u0002",
    "\u0184\u0185\u0007u\u0002\u0002\u0185\u0187\u0007g\u0002\u0002\u0186",
    "\u017d\u0003\u0002\u0002\u0002\u0186\u0181\u0003\u0002\u0002\u0002\u0187",
    "l\u0003\u0002\u0002\u0002\u0188\u0189\u0007)\u0002\u0002\u0189\u018a",
    "\u0005o8\u0002\u018a\u018b\u0007)\u0002\u0002\u018b\u0191\u0003\u0002",
    "\u0002\u0002\u018c\u018d\u0007)\u0002\u0002\u018d\u018e\u0005w<\u0002",
    "\u018e\u018f\u0007)\u0002\u0002\u018f\u0191\u0003\u0002\u0002\u0002",
    "\u0190\u0188\u0003\u0002\u0002\u0002\u0190\u018c\u0003\u0002\u0002\u0002",
    "\u0191n\u0003\u0002\u0002\u0002\u0192\u0193\n\r\u0002\u0002\u0193p\u0003",
    "\u0002\u0002\u0002\u0194\u0196\u0007$\u0002\u0002\u0195\u0197\u0005",
    "s:\u0002\u0196\u0195\u0003\u0002\u0002\u0002\u0196\u0197\u0003\u0002",
    "\u0002\u0002\u0197\u0198\u0003\u0002\u0002\u0002\u0198\u0199\u0007$",
    "\u0002\u0002\u0199r\u0003\u0002\u0002\u0002\u019a\u019c\u0005u;\u0002",
    "\u019b\u019a\u0003\u0002\u0002\u0002\u019c\u019d\u0003\u0002\u0002\u0002",
    "\u019d\u019b\u0003\u0002\u0002\u0002\u019d\u019e\u0003\u0002\u0002\u0002",
    "\u019et\u0003\u0002\u0002\u0002\u019f\u01a2\n\u000e\u0002\u0002\u01a0",
    "\u01a2\u0005w<\u0002\u01a1\u019f\u0003\u0002\u0002\u0002\u01a1\u01a0",
    "\u0003\u0002\u0002\u0002\u01a2v\u0003\u0002\u0002\u0002\u01a3\u01a4",
    "\u0007^\u0002\u0002\u01a4\u01a8\t\u000f\u0002\u0002\u01a5\u01a8\u0005",
    "y=\u0002\u01a6\u01a8\u0005}?\u0002\u01a7\u01a3\u0003\u0002\u0002\u0002",
    "\u01a7\u01a5\u0003\u0002\u0002\u0002\u01a7\u01a6\u0003\u0002\u0002\u0002",
    "\u01a8x\u0003\u0002\u0002\u0002\u01a9\u01aa\u0007^\u0002\u0002\u01aa",
    "\u01b5\u0005E#\u0002\u01ab\u01ac\u0007^\u0002\u0002\u01ac\u01ad\u0005",
    "E#\u0002\u01ad\u01ae\u0005E#\u0002\u01ae\u01b5\u0003\u0002\u0002\u0002",
    "\u01af\u01b0\u0007^\u0002\u0002\u01b0\u01b1\u0005{>\u0002\u01b1\u01b2",
    "\u0005E#\u0002\u01b2\u01b3\u0005E#\u0002\u01b3\u01b5\u0003\u0002\u0002",
    "\u0002\u01b4\u01a9\u0003\u0002\u0002\u0002\u01b4\u01ab\u0003\u0002\u0002",
    "\u0002\u01b4\u01af\u0003\u0002\u0002\u0002\u01b5z\u0003\u0002\u0002",
    "\u0002\u01b6\u01b7\t\u0010\u0002\u0002\u01b7|\u0003\u0002\u0002\u0002",
    "\u01b8\u01ba\u0007^\u0002\u0002\u01b9\u01bb\u0007w\u0002\u0002\u01ba",
    "\u01b9\u0003\u0002\u0002\u0002\u01bb\u01bc\u0003\u0002\u0002\u0002\u01bc",
    "\u01ba\u0003\u0002\u0002\u0002\u01bc\u01bd\u0003\u0002\u0002\u0002\u01bd",
    "\u01be\u0003\u0002\u0002\u0002\u01be\u01bf\u0005;\u001e\u0002\u01bf",
    "\u01c0\u0005;\u001e\u0002\u01c0\u01c1\u0005;\u001e\u0002\u01c1\u01c2",
    "\u0005;\u001e\u0002\u01c2~\u0003\u0002\u0002\u0002\u01c3\u01c4\u0007",
    "p\u0002\u0002\u01c4\u01c5\u0007w\u0002\u0002\u01c5\u01c6\u0007n\u0002",
    "\u0002\u01c6\u01c7\u0007n\u0002\u0002\u01c7\u0080\u0003\u0002\u0002",
    "\u0002\u01c8\u01cd\t\u0011\u0002\u0002\u01c9\u01cd\n\u0012\u0002\u0002",
    "\u01ca\u01cb\t\u0013\u0002\u0002\u01cb\u01cd\t\u0014\u0002\u0002\u01cc",
    "\u01c8\u0003\u0002\u0002\u0002\u01cc\u01c9\u0003\u0002\u0002\u0002\u01cc",
    "\u01ca\u0003\u0002\u0002\u0002\u01cd\u0082\u0003\u0002\u0002\u0002\u01ce",
    "\u01d3\t\u0015\u0002\u0002\u01cf\u01d3\n\u0012\u0002\u0002\u01d0\u01d1",
    "\t\u0013\u0002\u0002\u01d1\u01d3\t\u0014\u0002\u0002\u01d2\u01ce\u0003",
    "\u0002\u0002\u0002\u01d2\u01cf\u0003\u0002\u0002\u0002\u01d2\u01d0\u0003",
    "\u0002\u0002\u0002\u01d3\u0084\u0003\u0002\u0002\u0002\u01d4\u01d6\t",
    "\u0016\u0002\u0002\u01d5\u01d4\u0003\u0002\u0002\u0002\u01d6\u01d7\u0003",
    "\u0002\u0002\u0002\u01d7\u01d5\u0003\u0002\u0002\u0002\u01d7\u01d8\u0003",
    "\u0002\u0002\u0002\u01d8\u01d9\u0003\u0002\u0002\u0002\u01d9\u01da\b",
    "C\u0002\u0002\u01da\u0086\u0003\u0002\u0002\u0002\u01db\u01dc\u0007",
    "1\u0002\u0002\u01dc\u01dd\u0007,\u0002\u0002\u01dd\u01e1\u0003\u0002",
    "\u0002\u0002\u01de\u01e0\u000b\u0002\u0002\u0002\u01df\u01de\u0003\u0002",
    "\u0002\u0002\u01e0\u01e3\u0003\u0002\u0002\u0002\u01e1\u01e2\u0003\u0002",
    "\u0002\u0002\u01e1\u01df\u0003\u0002\u0002\u0002\u01e2\u01e4\u0003\u0002",
    "\u0002\u0002\u01e3\u01e1\u0003\u0002\u0002\u0002\u01e4\u01e5\u0007,",
    "\u0002\u0002\u01e5\u01e6\u00071\u0002\u0002\u01e6\u01e7\u0003\u0002",
    "\u0002\u0002\u01e7\u01e8\bD\u0003\u0002\u01e8\u0088\u0003\u0002\u0002",
    "\u0002\u01e9\u01ea\u00071\u0002\u0002\u01ea\u01eb\u00071\u0002\u0002",
    "\u01eb\u01ef\u0003\u0002\u0002\u0002\u01ec\u01ee\n\u0017\u0002\u0002",
    "\u01ed\u01ec\u0003\u0002\u0002\u0002\u01ee\u01f1\u0003\u0002\u0002\u0002",
    "\u01ef\u01ed\u0003\u0002\u0002\u0002\u01ef\u01f0\u0003\u0002\u0002\u0002",
    "\u01f0\u01f2\u0003\u0002\u0002\u0002\u01f1\u01ef\u0003\u0002\u0002\u0002",
    "\u01f2\u01f3\bE\u0003\u0002\u01f3\u008a\u0003\u0002\u0002\u00029\u0002",
    "\u00b1\u00b8\u00bc\u00c0\u00c4\u00c8\u00cf\u00d4\u00d6\u00da\u00dd\u00e1",
    "\u00e8\u00ec\u00f1\u00f9\u00fc\u0103\u0107\u010b\u0111\u0114\u011b\u011f",
    "\u0127\u012a\u0131\u0135\u0139\u013e\u0141\u0144\u0149\u014c\u0151\u0156",
    "\u015e\u0169\u016d\u0172\u0176\u0186\u0190\u0196\u019d\u01a1\u01a7\u01b4",
    "\u01bc\u01cc\u01d2\u01d7\u01e1\u01ef\u0004\b\u0002\u0002\u0002\u0003",
    "\u0002"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

export default class ComposeLexer extends antlr4.Lexer {

    static grammarFileName = "ComposeLexer.g4";
    static channelNames = [ "DEFAULT_TOKEN_CHANNEL", "HIDDEN" ];
	static modeNames = [ "DEFAULT_MODE" ];
	static literalNames = [ null, "'('", "')'", "'{'", "'}'", "'['", "']'", 
                         "';'", "','", "'.'", "'Book'", "'Note'", "'Paper'", 
                         null, null, null, null, null, null, "'null'" ];
	static symbolicNames = [ null, "LPAREN", "RPAREN", "LBRACE", "RBRACE", 
                          "LBRACK", "RBRACK", "SEMI", "COMMA", "DOT", "Book", 
                          "Note", "Paser", "Identifier", "IntegerLiteral", 
                          "FloatingPointLiteral", "BooleanLiteral", "CharacterLiteral", 
                          "StringLiteral", "NullLiteral", "WS", "COMMENT", 
                          "LINE_COMMENT" ];
	static ruleNames = [ "LPAREN", "RPAREN", "LBRACE", "RBRACE", "LBRACK", 
                      "RBRACK", "SEMI", "COMMA", "DOT", "Book", "Note", 
                      "Paser", "Identifier", "IntegerLiteral", "DecimalIntegerLiteral", 
                      "HexIntegerLiteral", "OctalIntegerLiteral", "BinaryIntegerLiteral", 
                      "IntegerTypeSuffix", "DecimalNumeral", "Digits", "Digit", 
                      "NonZeroDigit", "DigitsAndUnderscores", "DigitOrUnderscore", 
                      "Underscores", "HexNumeral", "HexDigits", "HexDigit", 
                      "HexDigitsAndUnderscores", "HexDigitOrUnderscore", 
                      "OctalNumeral", "OctalDigits", "OctalDigit", "OctalDigitsAndUnderscores", 
                      "OctalDigitOrUnderscore", "BinaryNumeral", "BinaryDigits", 
                      "BinaryDigit", "BinaryDigitsAndUnderscores", "BinaryDigitOrUnderscore", 
                      "FloatingPointLiteral", "DecimalFloatingPointLiteral", 
                      "ExponentPart", "ExponentIndicator", "SignedInteger", 
                      "Sign", "FloatTypeSuffix", "HexadecimalFloatingPointLiteral", 
                      "HexSignificand", "BinaryExponent", "BinaryExponentIndicator", 
                      "BooleanLiteral", "CharacterLiteral", "SingleCharacter", 
                      "StringLiteral", "StringCharacters", "StringCharacter", 
                      "EscapeSequence", "OctalEscape", "ZeroToThree", "UnicodeEscape", 
                      "NullLiteral", "JavaLetter", "JavaLetterOrDigit", 
                      "WS", "COMMENT", "LINE_COMMENT" ];

    constructor(input) {
        super(input)
        this._interp = new antlr4.atn.LexerATNSimulator(this, atn, decisionsToDFA, new antlr4.PredictionContextCache());
    }

    get atn() {
        return atn;
    }
}

ComposeLexer.EOF = antlr4.Token.EOF;
ComposeLexer.LPAREN = 1;
ComposeLexer.RPAREN = 2;
ComposeLexer.LBRACE = 3;
ComposeLexer.RBRACE = 4;
ComposeLexer.LBRACK = 5;
ComposeLexer.RBRACK = 6;
ComposeLexer.SEMI = 7;
ComposeLexer.COMMA = 8;
ComposeLexer.DOT = 9;
ComposeLexer.Book = 10;
ComposeLexer.Note = 11;
ComposeLexer.Paser = 12;
ComposeLexer.Identifier = 13;
ComposeLexer.IntegerLiteral = 14;
ComposeLexer.FloatingPointLiteral = 15;
ComposeLexer.BooleanLiteral = 16;
ComposeLexer.CharacterLiteral = 17;
ComposeLexer.StringLiteral = 18;
ComposeLexer.NullLiteral = 19;
ComposeLexer.WS = 20;
ComposeLexer.COMMENT = 21;
ComposeLexer.LINE_COMMENT = 22;


