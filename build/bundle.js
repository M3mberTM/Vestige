"use strict";
(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
    get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
  }) : x)(function(x) {
    if (typeof require !== "undefined") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + x + '" is not supported');
  });
  var __commonJS = (cb, mod) => function __require2() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e) {
      throw mod = 0, e;
    }
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
    // If the importer is in node compatibility mode or this is not an ESM
    // file that has been converted to a CommonJS file using a Babel-
    // compatible transform (i.e. "__esModule" has not been set), then set
    // "default" to the CommonJS "module.exports" for node compatibility.
    isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
    mod
  ));

  // node_modules/jszip/dist/jszip.min.js
  var require_jszip_min = __commonJS({
    "node_modules/jszip/dist/jszip.min.js"(exports, module) {
      !(function(e) {
        if ("object" == typeof exports && "undefined" != typeof module) module.exports = e();
        else if ("function" == typeof define && define.amd) define([], e);
        else {
          ("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : this).JSZip = e();
        }
      })(function() {
        return (function s(a, o, h) {
          function u(r, e2) {
            if (!o[r]) {
              if (!a[r]) {
                var t = "function" == typeof __require && __require;
                if (!e2 && t) return t(r, true);
                if (l) return l(r, true);
                var n = new Error("Cannot find module '" + r + "'");
                throw n.code = "MODULE_NOT_FOUND", n;
              }
              var i = o[r] = { exports: {} };
              a[r][0].call(i.exports, function(e3) {
                var t2 = a[r][1][e3];
                return u(t2 || e3);
              }, i, i.exports, s, a, o, h);
            }
            return o[r].exports;
          }
          for (var l = "function" == typeof __require && __require, e = 0; e < h.length; e++) u(h[e]);
          return u;
        })({ 1: [function(e, t, r) {
          "use strict";
          var d = e("./utils"), c = e("./support"), p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
          r.encode = function(e2) {
            for (var t2, r2, n, i, s, a, o, h = [], u = 0, l = e2.length, f = l, c2 = "string" !== d.getTypeOf(e2); u < e2.length; ) f = l - u, n = c2 ? (t2 = e2[u++], r2 = u < l ? e2[u++] : 0, u < l ? e2[u++] : 0) : (t2 = e2.charCodeAt(u++), r2 = u < l ? e2.charCodeAt(u++) : 0, u < l ? e2.charCodeAt(u++) : 0), i = t2 >> 2, s = (3 & t2) << 4 | r2 >> 4, a = 1 < f ? (15 & r2) << 2 | n >> 6 : 64, o = 2 < f ? 63 & n : 64, h.push(p.charAt(i) + p.charAt(s) + p.charAt(a) + p.charAt(o));
            return h.join("");
          }, r.decode = function(e2) {
            var t2, r2, n, i, s, a, o = 0, h = 0, u = "data:";
            if (e2.substr(0, u.length) === u) throw new Error("Invalid base64 input, it looks like a data url.");
            var l, f = 3 * (e2 = e2.replace(/[^A-Za-z0-9+/=]/g, "")).length / 4;
            if (e2.charAt(e2.length - 1) === p.charAt(64) && f--, e2.charAt(e2.length - 2) === p.charAt(64) && f--, f % 1 != 0) throw new Error("Invalid base64 input, bad content length.");
            for (l = c.uint8array ? new Uint8Array(0 | f) : new Array(0 | f); o < e2.length; ) t2 = p.indexOf(e2.charAt(o++)) << 2 | (i = p.indexOf(e2.charAt(o++))) >> 4, r2 = (15 & i) << 4 | (s = p.indexOf(e2.charAt(o++))) >> 2, n = (3 & s) << 6 | (a = p.indexOf(e2.charAt(o++))), l[h++] = t2, 64 !== s && (l[h++] = r2), 64 !== a && (l[h++] = n);
            return l;
          };
        }, { "./support": 30, "./utils": 32 }], 2: [function(e, t, r) {
          "use strict";
          var n = e("./external"), i = e("./stream/DataWorker"), s = e("./stream/Crc32Probe"), a = e("./stream/DataLengthProbe");
          function o(e2, t2, r2, n2, i2) {
            this.compressedSize = e2, this.uncompressedSize = t2, this.crc32 = r2, this.compression = n2, this.compressedContent = i2;
          }
          o.prototype = { getContentWorker: function() {
            var e2 = new i(n.Promise.resolve(this.compressedContent)).pipe(this.compression.uncompressWorker()).pipe(new a("data_length")), t2 = this;
            return e2.on("end", function() {
              if (this.streamInfo.data_length !== t2.uncompressedSize) throw new Error("Bug : uncompressed data size mismatch");
            }), e2;
          }, getCompressedWorker: function() {
            return new i(n.Promise.resolve(this.compressedContent)).withStreamInfo("compressedSize", this.compressedSize).withStreamInfo("uncompressedSize", this.uncompressedSize).withStreamInfo("crc32", this.crc32).withStreamInfo("compression", this.compression);
          } }, o.createWorkerFrom = function(e2, t2, r2) {
            return e2.pipe(new s()).pipe(new a("uncompressedSize")).pipe(t2.compressWorker(r2)).pipe(new a("compressedSize")).withStreamInfo("compression", t2);
          }, t.exports = o;
        }, { "./external": 6, "./stream/Crc32Probe": 25, "./stream/DataLengthProbe": 26, "./stream/DataWorker": 27 }], 3: [function(e, t, r) {
          "use strict";
          var n = e("./stream/GenericWorker");
          r.STORE = { magic: "\0\0", compressWorker: function() {
            return new n("STORE compression");
          }, uncompressWorker: function() {
            return new n("STORE decompression");
          } }, r.DEFLATE = e("./flate");
        }, { "./flate": 7, "./stream/GenericWorker": 28 }], 4: [function(e, t, r) {
          "use strict";
          var n = e("./utils");
          var o = (function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n2 = 0; n2 < 8; n2++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          })();
          t.exports = function(e2, t2) {
            return void 0 !== e2 && e2.length ? "string" !== n.getTypeOf(e2) ? (function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3[a])];
              return -1 ^ e3;
            })(0 | t2, e2, e2.length, 0) : (function(e3, t3, r2, n2) {
              var i = o, s = n2 + r2;
              e3 ^= -1;
              for (var a = n2; a < s; a++) e3 = e3 >>> 8 ^ i[255 & (e3 ^ t3.charCodeAt(a))];
              return -1 ^ e3;
            })(0 | t2, e2, e2.length, 0) : 0;
          };
        }, { "./utils": 32 }], 5: [function(e, t, r) {
          "use strict";
          r.base64 = false, r.binary = false, r.dir = false, r.createFolders = true, r.date = null, r.compression = null, r.compressionOptions = null, r.comment = null, r.unixPermissions = null, r.dosPermissions = null;
        }, {}], 6: [function(e, t, r) {
          "use strict";
          var n = null;
          n = "undefined" != typeof Promise ? Promise : e("lie"), t.exports = { Promise: n };
        }, { lie: 37 }], 7: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Uint32Array, i = e("pako"), s = e("./utils"), a = e("./stream/GenericWorker"), o = n ? "uint8array" : "array";
          function h(e2, t2) {
            a.call(this, "FlateWorker/" + e2), this._pako = null, this._pakoAction = e2, this._pakoOptions = t2, this.meta = {};
          }
          r.magic = "\b\0", s.inherits(h, a), h.prototype.processChunk = function(e2) {
            this.meta = e2.meta, null === this._pako && this._createPako(), this._pako.push(s.transformTo(o, e2.data), false);
          }, h.prototype.flush = function() {
            a.prototype.flush.call(this), null === this._pako && this._createPako(), this._pako.push([], true);
          }, h.prototype.cleanUp = function() {
            a.prototype.cleanUp.call(this), this._pako = null;
          }, h.prototype._createPako = function() {
            this._pako = new i[this._pakoAction]({ raw: true, level: this._pakoOptions.level || -1 });
            var t2 = this;
            this._pako.onData = function(e2) {
              t2.push({ data: e2, meta: t2.meta });
            };
          }, r.compressWorker = function(e2) {
            return new h("Deflate", e2);
          }, r.uncompressWorker = function() {
            return new h("Inflate", {});
          };
        }, { "./stream/GenericWorker": 28, "./utils": 32, pako: 38 }], 8: [function(e, t, r) {
          "use strict";
          function A(e2, t2) {
            var r2, n2 = "";
            for (r2 = 0; r2 < t2; r2++) n2 += String.fromCharCode(255 & e2), e2 >>>= 8;
            return n2;
          }
          function n(e2, t2, r2, n2, i2, s2) {
            var a, o, h = e2.file, u = e2.compression, l = s2 !== O.utf8encode, f = I.transformTo("string", s2(h.name)), c = I.transformTo("string", O.utf8encode(h.name)), d = h.comment, p = I.transformTo("string", s2(d)), m = I.transformTo("string", O.utf8encode(d)), _ = c.length !== h.name.length, g = m.length !== d.length, b = "", v = "", y = "", w = h.dir, k = h.date, x = { crc32: 0, compressedSize: 0, uncompressedSize: 0 };
            t2 && !r2 || (x.crc32 = e2.crc32, x.compressedSize = e2.compressedSize, x.uncompressedSize = e2.uncompressedSize);
            var S = 0;
            t2 && (S |= 8), l || !_ && !g || (S |= 2048);
            var z = 0, C = 0;
            w && (z |= 16), "UNIX" === i2 ? (C = 798, z |= (function(e3, t3) {
              var r3 = e3;
              return e3 || (r3 = t3 ? 16893 : 33204), (65535 & r3) << 16;
            })(h.unixPermissions, w)) : (C = 20, z |= (function(e3) {
              return 63 & (e3 || 0);
            })(h.dosPermissions)), a = k.getUTCHours(), a <<= 6, a |= k.getUTCMinutes(), a <<= 5, a |= k.getUTCSeconds() / 2, o = k.getUTCFullYear() - 1980, o <<= 4, o |= k.getUTCMonth() + 1, o <<= 5, o |= k.getUTCDate(), _ && (v = A(1, 1) + A(B(f), 4) + c, b += "up" + A(v.length, 2) + v), g && (y = A(1, 1) + A(B(p), 4) + m, b += "uc" + A(y.length, 2) + y);
            var E = "";
            return E += "\n\0", E += A(S, 2), E += u.magic, E += A(a, 2), E += A(o, 2), E += A(x.crc32, 4), E += A(x.compressedSize, 4), E += A(x.uncompressedSize, 4), E += A(f.length, 2), E += A(b.length, 2), { fileRecord: R.LOCAL_FILE_HEADER + E + f + b, dirRecord: R.CENTRAL_FILE_HEADER + A(C, 2) + E + A(p.length, 2) + "\0\0\0\0" + A(z, 4) + A(n2, 4) + f + b + p };
          }
          var I = e("../utils"), i = e("../stream/GenericWorker"), O = e("../utf8"), B = e("../crc32"), R = e("../signature");
          function s(e2, t2, r2, n2) {
            i.call(this, "ZipFileWorker"), this.bytesWritten = 0, this.zipComment = t2, this.zipPlatform = r2, this.encodeFileName = n2, this.streamFiles = e2, this.accumulate = false, this.contentBuffer = [], this.dirRecords = [], this.currentSourceOffset = 0, this.entriesCount = 0, this.currentFile = null, this._sources = [];
          }
          I.inherits(s, i), s.prototype.push = function(e2) {
            var t2 = e2.meta.percent || 0, r2 = this.entriesCount, n2 = this._sources.length;
            this.accumulate ? this.contentBuffer.push(e2) : (this.bytesWritten += e2.data.length, i.prototype.push.call(this, { data: e2.data, meta: { currentFile: this.currentFile, percent: r2 ? (t2 + 100 * (r2 - n2 - 1)) / r2 : 100 } }));
          }, s.prototype.openedSource = function(e2) {
            this.currentSourceOffset = this.bytesWritten, this.currentFile = e2.file.name;
            var t2 = this.streamFiles && !e2.file.dir;
            if (t2) {
              var r2 = n(e2, t2, false, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
              this.push({ data: r2.fileRecord, meta: { percent: 0 } });
            } else this.accumulate = true;
          }, s.prototype.closedSource = function(e2) {
            this.accumulate = false;
            var t2 = this.streamFiles && !e2.file.dir, r2 = n(e2, t2, true, this.currentSourceOffset, this.zipPlatform, this.encodeFileName);
            if (this.dirRecords.push(r2.dirRecord), t2) this.push({ data: (function(e3) {
              return R.DATA_DESCRIPTOR + A(e3.crc32, 4) + A(e3.compressedSize, 4) + A(e3.uncompressedSize, 4);
            })(e2), meta: { percent: 100 } });
            else for (this.push({ data: r2.fileRecord, meta: { percent: 0 } }); this.contentBuffer.length; ) this.push(this.contentBuffer.shift());
            this.currentFile = null;
          }, s.prototype.flush = function() {
            for (var e2 = this.bytesWritten, t2 = 0; t2 < this.dirRecords.length; t2++) this.push({ data: this.dirRecords[t2], meta: { percent: 100 } });
            var r2 = this.bytesWritten - e2, n2 = (function(e3, t3, r3, n3, i2) {
              var s2 = I.transformTo("string", i2(n3));
              return R.CENTRAL_DIRECTORY_END + "\0\0\0\0" + A(e3, 2) + A(e3, 2) + A(t3, 4) + A(r3, 4) + A(s2.length, 2) + s2;
            })(this.dirRecords.length, r2, e2, this.zipComment, this.encodeFileName);
            this.push({ data: n2, meta: { percent: 100 } });
          }, s.prototype.prepareNextSource = function() {
            this.previous = this._sources.shift(), this.openedSource(this.previous.streamInfo), this.isPaused ? this.previous.pause() : this.previous.resume();
          }, s.prototype.registerPrevious = function(e2) {
            this._sources.push(e2);
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.closedSource(t2.previous.streamInfo), t2._sources.length ? t2.prepareNextSource() : t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this.previous && this._sources.length ? (this.prepareNextSource(), true) : this.previous || this._sources.length || this.generatedError ? void 0 : (this.end(), true));
          }, s.prototype.error = function(e2) {
            var t2 = this._sources;
            if (!i.prototype.error.call(this, e2)) return false;
            for (var r2 = 0; r2 < t2.length; r2++) try {
              t2[r2].error(e2);
            } catch (e3) {
            }
            return true;
          }, s.prototype.lock = function() {
            i.prototype.lock.call(this);
            for (var e2 = this._sources, t2 = 0; t2 < e2.length; t2++) e2[t2].lock();
          }, t.exports = s;
        }, { "../crc32": 4, "../signature": 23, "../stream/GenericWorker": 28, "../utf8": 31, "../utils": 32 }], 9: [function(e, t, r) {
          "use strict";
          var u = e("../compressions"), n = e("./ZipFileWorker");
          r.generateWorker = function(e2, a, t2) {
            var o = new n(a.streamFiles, t2, a.platform, a.encodeFileName), h = 0;
            try {
              e2.forEach(function(e3, t3) {
                h++;
                var r2 = (function(e4, t4) {
                  var r3 = e4 || t4, n3 = u[r3];
                  if (!n3) throw new Error(r3 + " is not a valid compression method !");
                  return n3;
                })(t3.options.compression, a.compression), n2 = t3.options.compressionOptions || a.compressionOptions || {}, i = t3.dir, s = t3.date;
                t3._compressWorker(r2, n2).withStreamInfo("file", { name: e3, dir: i, date: s, comment: t3.comment || "", unixPermissions: t3.unixPermissions, dosPermissions: t3.dosPermissions }).pipe(o);
              }), o.entriesCount = h;
            } catch (e3) {
              o.error(e3);
            }
            return o;
          };
        }, { "../compressions": 3, "./ZipFileWorker": 8 }], 10: [function(e, t, r) {
          "use strict";
          function n() {
            if (!(this instanceof n)) return new n();
            if (arguments.length) throw new Error("The constructor with parameters has been removed in JSZip 3.0, please check the upgrade guide.");
            this.files = /* @__PURE__ */ Object.create(null), this.comment = null, this.root = "", this.clone = function() {
              var e2 = new n();
              for (var t2 in this) "function" != typeof this[t2] && (e2[t2] = this[t2]);
              return e2;
            };
          }
          (n.prototype = e("./object")).loadAsync = e("./load"), n.support = e("./support"), n.defaults = e("./defaults"), n.version = "3.10.1", n.loadAsync = function(e2, t2) {
            return new n().loadAsync(e2, t2);
          }, n.external = e("./external"), t.exports = n;
        }, { "./defaults": 5, "./external": 6, "./load": 11, "./object": 15, "./support": 30 }], 11: [function(e, t, r) {
          "use strict";
          var u = e("./utils"), i = e("./external"), n = e("./utf8"), s = e("./zipEntries"), a = e("./stream/Crc32Probe"), l = e("./nodejsUtils");
          function f(n2) {
            return new i.Promise(function(e2, t2) {
              var r2 = n2.decompressed.getContentWorker().pipe(new a());
              r2.on("error", function(e3) {
                t2(e3);
              }).on("end", function() {
                r2.streamInfo.crc32 !== n2.decompressed.crc32 ? t2(new Error("Corrupted zip : CRC32 mismatch")) : e2();
              }).resume();
            });
          }
          t.exports = function(e2, o) {
            var h = this;
            return o = u.extend(o || {}, { base64: false, checkCRC32: false, optimizedBinaryString: false, createFolders: false, decodeFileName: n.utf8decode }), l.isNode && l.isStream(e2) ? i.Promise.reject(new Error("JSZip can't accept a stream when loading a zip file.")) : u.prepareContent("the loaded zip file", e2, true, o.optimizedBinaryString, o.base64).then(function(e3) {
              var t2 = new s(o);
              return t2.load(e3), t2;
            }).then(function(e3) {
              var t2 = [i.Promise.resolve(e3)], r2 = e3.files;
              if (o.checkCRC32) for (var n2 = 0; n2 < r2.length; n2++) t2.push(f(r2[n2]));
              return i.Promise.all(t2);
            }).then(function(e3) {
              for (var t2 = e3.shift(), r2 = t2.files, n2 = 0; n2 < r2.length; n2++) {
                var i2 = r2[n2], s2 = i2.fileNameStr, a2 = u.resolve(i2.fileNameStr);
                h.file(a2, i2.decompressed, { binary: true, optimizedBinaryString: true, date: i2.date, dir: i2.dir, comment: i2.fileCommentStr.length ? i2.fileCommentStr : null, unixPermissions: i2.unixPermissions, dosPermissions: i2.dosPermissions, createFolders: o.createFolders }), i2.dir || (h.file(a2).unsafeOriginalName = s2);
              }
              return t2.zipComment.length && (h.comment = t2.zipComment), h;
            });
          };
        }, { "./external": 6, "./nodejsUtils": 14, "./stream/Crc32Probe": 25, "./utf8": 31, "./utils": 32, "./zipEntries": 33 }], 12: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../stream/GenericWorker");
          function s(e2, t2) {
            i.call(this, "Nodejs stream input adapter for " + e2), this._upstreamEnded = false, this._bindStream(t2);
          }
          n.inherits(s, i), s.prototype._bindStream = function(e2) {
            var t2 = this;
            (this._stream = e2).pause(), e2.on("data", function(e3) {
              t2.push({ data: e3, meta: { percent: 0 } });
            }).on("error", function(e3) {
              t2.isPaused ? this.generatedError = e3 : t2.error(e3);
            }).on("end", function() {
              t2.isPaused ? t2._upstreamEnded = true : t2.end();
            });
          }, s.prototype.pause = function() {
            return !!i.prototype.pause.call(this) && (this._stream.pause(), true);
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (this._upstreamEnded ? this.end() : this._stream.resume(), true);
          }, t.exports = s;
        }, { "../stream/GenericWorker": 28, "../utils": 32 }], 13: [function(e, t, r) {
          "use strict";
          var i = e("readable-stream").Readable;
          function n(e2, t2, r2) {
            i.call(this, t2), this._helper = e2;
            var n2 = this;
            e2.on("data", function(e3, t3) {
              n2.push(e3) || n2._helper.pause(), r2 && r2(t3);
            }).on("error", function(e3) {
              n2.emit("error", e3);
            }).on("end", function() {
              n2.push(null);
            });
          }
          e("../utils").inherits(n, i), n.prototype._read = function() {
            this._helper.resume();
          }, t.exports = n;
        }, { "../utils": 32, "readable-stream": 16 }], 14: [function(e, t, r) {
          "use strict";
          t.exports = { isNode: "undefined" != typeof Buffer, newBufferFrom: function(e2, t2) {
            if (Buffer.from && Buffer.from !== Uint8Array.from) return Buffer.from(e2, t2);
            if ("number" == typeof e2) throw new Error('The "data" argument must not be a number');
            return new Buffer(e2, t2);
          }, allocBuffer: function(e2) {
            if (Buffer.alloc) return Buffer.alloc(e2);
            var t2 = new Buffer(e2);
            return t2.fill(0), t2;
          }, isBuffer: function(e2) {
            return Buffer.isBuffer(e2);
          }, isStream: function(e2) {
            return e2 && "function" == typeof e2.on && "function" == typeof e2.pause && "function" == typeof e2.resume;
          } };
        }, {}], 15: [function(e, t, r) {
          "use strict";
          function s(e2, t2, r2) {
            var n2, i2 = u.getTypeOf(t2), s2 = u.extend(r2 || {}, f);
            s2.date = s2.date || /* @__PURE__ */ new Date(), null !== s2.compression && (s2.compression = s2.compression.toUpperCase()), "string" == typeof s2.unixPermissions && (s2.unixPermissions = parseInt(s2.unixPermissions, 8)), s2.unixPermissions && 16384 & s2.unixPermissions && (s2.dir = true), s2.dosPermissions && 16 & s2.dosPermissions && (s2.dir = true), s2.dir && (e2 = g(e2)), s2.createFolders && (n2 = _(e2)) && b.call(this, n2, true);
            var a2 = "string" === i2 && false === s2.binary && false === s2.base64;
            r2 && void 0 !== r2.binary || (s2.binary = !a2), (t2 instanceof c && 0 === t2.uncompressedSize || s2.dir || !t2 || 0 === t2.length) && (s2.base64 = false, s2.binary = true, t2 = "", s2.compression = "STORE", i2 = "string");
            var o2 = null;
            o2 = t2 instanceof c || t2 instanceof l ? t2 : p.isNode && p.isStream(t2) ? new m(e2, t2) : u.prepareContent(e2, t2, s2.binary, s2.optimizedBinaryString, s2.base64);
            var h2 = new d(e2, o2, s2);
            this.files[e2] = h2;
          }
          var i = e("./utf8"), u = e("./utils"), l = e("./stream/GenericWorker"), a = e("./stream/StreamHelper"), f = e("./defaults"), c = e("./compressedObject"), d = e("./zipObject"), o = e("./generate"), p = e("./nodejsUtils"), m = e("./nodejs/NodejsStreamInputAdapter"), _ = function(e2) {
            "/" === e2.slice(-1) && (e2 = e2.substring(0, e2.length - 1));
            var t2 = e2.lastIndexOf("/");
            return 0 < t2 ? e2.substring(0, t2) : "";
          }, g = function(e2) {
            return "/" !== e2.slice(-1) && (e2 += "/"), e2;
          }, b = function(e2, t2) {
            return t2 = void 0 !== t2 ? t2 : f.createFolders, e2 = g(e2), this.files[e2] || s.call(this, e2, null, { dir: true, createFolders: t2 }), this.files[e2];
          };
          function h(e2) {
            return "[object RegExp]" === Object.prototype.toString.call(e2);
          }
          var n = { load: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, forEach: function(e2) {
            var t2, r2, n2;
            for (t2 in this.files) n2 = this.files[t2], (r2 = t2.slice(this.root.length, t2.length)) && t2.slice(0, this.root.length) === this.root && e2(r2, n2);
          }, filter: function(r2) {
            var n2 = [];
            return this.forEach(function(e2, t2) {
              r2(e2, t2) && n2.push(t2);
            }), n2;
          }, file: function(e2, t2, r2) {
            if (1 !== arguments.length) return e2 = this.root + e2, s.call(this, e2, t2, r2), this;
            if (h(e2)) {
              var n2 = e2;
              return this.filter(function(e3, t3) {
                return !t3.dir && n2.test(e3);
              });
            }
            var i2 = this.files[this.root + e2];
            return i2 && !i2.dir ? i2 : null;
          }, folder: function(r2) {
            if (!r2) return this;
            if (h(r2)) return this.filter(function(e3, t3) {
              return t3.dir && r2.test(e3);
            });
            var e2 = this.root + r2, t2 = b.call(this, e2), n2 = this.clone();
            return n2.root = t2.name, n2;
          }, remove: function(r2) {
            r2 = this.root + r2;
            var e2 = this.files[r2];
            if (e2 || ("/" !== r2.slice(-1) && (r2 += "/"), e2 = this.files[r2]), e2 && !e2.dir) delete this.files[r2];
            else for (var t2 = this.filter(function(e3, t3) {
              return t3.name.slice(0, r2.length) === r2;
            }), n2 = 0; n2 < t2.length; n2++) delete this.files[t2[n2].name];
            return this;
          }, generate: function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, generateInternalStream: function(e2) {
            var t2, r2 = {};
            try {
              if ((r2 = u.extend(e2 || {}, { streamFiles: false, compression: "STORE", compressionOptions: null, type: "", platform: "DOS", comment: null, mimeType: "application/zip", encodeFileName: i.utf8encode })).type = r2.type.toLowerCase(), r2.compression = r2.compression.toUpperCase(), "binarystring" === r2.type && (r2.type = "string"), !r2.type) throw new Error("No output type specified.");
              u.checkSupport(r2.type), "darwin" !== r2.platform && "freebsd" !== r2.platform && "linux" !== r2.platform && "sunos" !== r2.platform || (r2.platform = "UNIX"), "win32" === r2.platform && (r2.platform = "DOS");
              var n2 = r2.comment || this.comment || "";
              t2 = o.generateWorker(this, r2, n2);
            } catch (e3) {
              (t2 = new l("error")).error(e3);
            }
            return new a(t2, r2.type || "string", r2.mimeType);
          }, generateAsync: function(e2, t2) {
            return this.generateInternalStream(e2).accumulate(t2);
          }, generateNodeStream: function(e2, t2) {
            return (e2 = e2 || {}).type || (e2.type = "nodebuffer"), this.generateInternalStream(e2).toNodejsStream(t2);
          } };
          t.exports = n;
        }, { "./compressedObject": 2, "./defaults": 5, "./generate": 9, "./nodejs/NodejsStreamInputAdapter": 12, "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31, "./utils": 32, "./zipObject": 35 }], 16: [function(e, t, r) {
          "use strict";
          t.exports = e("stream");
        }, { stream: void 0 }], 17: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
            for (var t2 = 0; t2 < this.data.length; t2++) e2[t2] = 255 & e2[t2];
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data[this.zero + e2];
          }, i.prototype.lastIndexOfSignature = function(e2) {
            for (var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.length - 4; 0 <= s; --s) if (this.data[s] === t2 && this.data[s + 1] === r2 && this.data[s + 2] === n2 && this.data[s + 3] === i2) return s - this.zero;
            return -1;
          }, i.prototype.readAndCheckSignature = function(e2) {
            var t2 = e2.charCodeAt(0), r2 = e2.charCodeAt(1), n2 = e2.charCodeAt(2), i2 = e2.charCodeAt(3), s = this.readData(4);
            return t2 === s[0] && r2 === s[1] && n2 === s[2] && i2 === s[3];
          }, i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2) return [];
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 18: [function(e, t, r) {
          "use strict";
          var n = e("../utils");
          function i(e2) {
            this.data = e2, this.length = e2.length, this.index = 0, this.zero = 0;
          }
          i.prototype = { checkOffset: function(e2) {
            this.checkIndex(this.index + e2);
          }, checkIndex: function(e2) {
            if (this.length < this.zero + e2 || e2 < 0) throw new Error("End of data reached (data length = " + this.length + ", asked index = " + e2 + "). Corrupted zip ?");
          }, setIndex: function(e2) {
            this.checkIndex(e2), this.index = e2;
          }, skip: function(e2) {
            this.setIndex(this.index + e2);
          }, byteAt: function() {
          }, readInt: function(e2) {
            var t2, r2 = 0;
            for (this.checkOffset(e2), t2 = this.index + e2 - 1; t2 >= this.index; t2--) r2 = (r2 << 8) + this.byteAt(t2);
            return this.index += e2, r2;
          }, readString: function(e2) {
            return n.transformTo("string", this.readData(e2));
          }, readData: function() {
          }, lastIndexOfSignature: function() {
          }, readAndCheckSignature: function() {
          }, readDate: function() {
            var e2 = this.readInt(4);
            return new Date(Date.UTC(1980 + (e2 >> 25 & 127), (e2 >> 21 & 15) - 1, e2 >> 16 & 31, e2 >> 11 & 31, e2 >> 5 & 63, (31 & e2) << 1));
          } }, t.exports = i;
        }, { "../utils": 32 }], 19: [function(e, t, r) {
          "use strict";
          var n = e("./Uint8ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./Uint8ArrayReader": 21 }], 20: [function(e, t, r) {
          "use strict";
          var n = e("./DataReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.byteAt = function(e2) {
            return this.data.charCodeAt(this.zero + e2);
          }, i.prototype.lastIndexOfSignature = function(e2) {
            return this.data.lastIndexOf(e2) - this.zero;
          }, i.prototype.readAndCheckSignature = function(e2) {
            return e2 === this.readData(4);
          }, i.prototype.readData = function(e2) {
            this.checkOffset(e2);
            var t2 = this.data.slice(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./DataReader": 18 }], 21: [function(e, t, r) {
          "use strict";
          var n = e("./ArrayReader");
          function i(e2) {
            n.call(this, e2);
          }
          e("../utils").inherits(i, n), i.prototype.readData = function(e2) {
            if (this.checkOffset(e2), 0 === e2) return new Uint8Array(0);
            var t2 = this.data.subarray(this.zero + this.index, this.zero + this.index + e2);
            return this.index += e2, t2;
          }, t.exports = i;
        }, { "../utils": 32, "./ArrayReader": 17 }], 22: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("../support"), s = e("./ArrayReader"), a = e("./StringReader"), o = e("./NodeBufferReader"), h = e("./Uint8ArrayReader");
          t.exports = function(e2) {
            var t2 = n.getTypeOf(e2);
            return n.checkSupport(t2), "string" !== t2 || i.uint8array ? "nodebuffer" === t2 ? new o(e2) : i.uint8array ? new h(n.transformTo("uint8array", e2)) : new s(n.transformTo("array", e2)) : new a(e2);
          };
        }, { "../support": 30, "../utils": 32, "./ArrayReader": 17, "./NodeBufferReader": 19, "./StringReader": 20, "./Uint8ArrayReader": 21 }], 23: [function(e, t, r) {
          "use strict";
          r.LOCAL_FILE_HEADER = "PK", r.CENTRAL_FILE_HEADER = "PK", r.CENTRAL_DIRECTORY_END = "PK", r.ZIP64_CENTRAL_DIRECTORY_LOCATOR = "PK\x07", r.ZIP64_CENTRAL_DIRECTORY_END = "PK", r.DATA_DESCRIPTOR = "PK\x07\b";
        }, {}], 24: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../utils");
          function s(e2) {
            n.call(this, "ConvertWorker to " + e2), this.destType = e2;
          }
          i.inherits(s, n), s.prototype.processChunk = function(e2) {
            this.push({ data: i.transformTo(this.destType, e2.data), meta: e2.meta });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 25: [function(e, t, r) {
          "use strict";
          var n = e("./GenericWorker"), i = e("../crc32");
          function s() {
            n.call(this, "Crc32Probe"), this.withStreamInfo("crc32", 0);
          }
          e("../utils").inherits(s, n), s.prototype.processChunk = function(e2) {
            this.streamInfo.crc32 = i(e2.data, this.streamInfo.crc32 || 0), this.push(e2);
          }, t.exports = s;
        }, { "../crc32": 4, "../utils": 32, "./GenericWorker": 28 }], 26: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataLengthProbe for " + e2), this.propName = e2, this.withStreamInfo(e2, 0);
          }
          n.inherits(s, i), s.prototype.processChunk = function(e2) {
            if (e2) {
              var t2 = this.streamInfo[this.propName] || 0;
              this.streamInfo[this.propName] = t2 + e2.data.length;
            }
            i.prototype.processChunk.call(this, e2);
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 27: [function(e, t, r) {
          "use strict";
          var n = e("../utils"), i = e("./GenericWorker");
          function s(e2) {
            i.call(this, "DataWorker");
            var t2 = this;
            this.dataIsReady = false, this.index = 0, this.max = 0, this.data = null, this.type = "", this._tickScheduled = false, e2.then(function(e3) {
              t2.dataIsReady = true, t2.data = e3, t2.max = e3 && e3.length || 0, t2.type = n.getTypeOf(e3), t2.isPaused || t2._tickAndRepeat();
            }, function(e3) {
              t2.error(e3);
            });
          }
          n.inherits(s, i), s.prototype.cleanUp = function() {
            i.prototype.cleanUp.call(this), this.data = null;
          }, s.prototype.resume = function() {
            return !!i.prototype.resume.call(this) && (!this._tickScheduled && this.dataIsReady && (this._tickScheduled = true, n.delay(this._tickAndRepeat, [], this)), true);
          }, s.prototype._tickAndRepeat = function() {
            this._tickScheduled = false, this.isPaused || this.isFinished || (this._tick(), this.isFinished || (n.delay(this._tickAndRepeat, [], this), this._tickScheduled = true));
          }, s.prototype._tick = function() {
            if (this.isPaused || this.isFinished) return false;
            var e2 = null, t2 = Math.min(this.max, this.index + 16384);
            if (this.index >= this.max) return this.end();
            switch (this.type) {
              case "string":
                e2 = this.data.substring(this.index, t2);
                break;
              case "uint8array":
                e2 = this.data.subarray(this.index, t2);
                break;
              case "array":
              case "nodebuffer":
                e2 = this.data.slice(this.index, t2);
            }
            return this.index = t2, this.push({ data: e2, meta: { percent: this.max ? this.index / this.max * 100 : 0 } });
          }, t.exports = s;
        }, { "../utils": 32, "./GenericWorker": 28 }], 28: [function(e, t, r) {
          "use strict";
          function n(e2) {
            this.name = e2 || "default", this.streamInfo = {}, this.generatedError = null, this.extraStreamInfo = {}, this.isPaused = true, this.isFinished = false, this.isLocked = false, this._listeners = { data: [], end: [], error: [] }, this.previous = null;
          }
          n.prototype = { push: function(e2) {
            this.emit("data", e2);
          }, end: function() {
            if (this.isFinished) return false;
            this.flush();
            try {
              this.emit("end"), this.cleanUp(), this.isFinished = true;
            } catch (e2) {
              this.emit("error", e2);
            }
            return true;
          }, error: function(e2) {
            return !this.isFinished && (this.isPaused ? this.generatedError = e2 : (this.isFinished = true, this.emit("error", e2), this.previous && this.previous.error(e2), this.cleanUp()), true);
          }, on: function(e2, t2) {
            return this._listeners[e2].push(t2), this;
          }, cleanUp: function() {
            this.streamInfo = this.generatedError = this.extraStreamInfo = null, this._listeners = [];
          }, emit: function(e2, t2) {
            if (this._listeners[e2]) for (var r2 = 0; r2 < this._listeners[e2].length; r2++) this._listeners[e2][r2].call(this, t2);
          }, pipe: function(e2) {
            return e2.registerPrevious(this);
          }, registerPrevious: function(e2) {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.streamInfo = e2.streamInfo, this.mergeStreamInfo(), this.previous = e2;
            var t2 = this;
            return e2.on("data", function(e3) {
              t2.processChunk(e3);
            }), e2.on("end", function() {
              t2.end();
            }), e2.on("error", function(e3) {
              t2.error(e3);
            }), this;
          }, pause: function() {
            return !this.isPaused && !this.isFinished && (this.isPaused = true, this.previous && this.previous.pause(), true);
          }, resume: function() {
            if (!this.isPaused || this.isFinished) return false;
            var e2 = this.isPaused = false;
            return this.generatedError && (this.error(this.generatedError), e2 = true), this.previous && this.previous.resume(), !e2;
          }, flush: function() {
          }, processChunk: function(e2) {
            this.push(e2);
          }, withStreamInfo: function(e2, t2) {
            return this.extraStreamInfo[e2] = t2, this.mergeStreamInfo(), this;
          }, mergeStreamInfo: function() {
            for (var e2 in this.extraStreamInfo) Object.prototype.hasOwnProperty.call(this.extraStreamInfo, e2) && (this.streamInfo[e2] = this.extraStreamInfo[e2]);
          }, lock: function() {
            if (this.isLocked) throw new Error("The stream '" + this + "' has already been used.");
            this.isLocked = true, this.previous && this.previous.lock();
          }, toString: function() {
            var e2 = "Worker " + this.name;
            return this.previous ? this.previous + " -> " + e2 : e2;
          } }, t.exports = n;
        }, {}], 29: [function(e, t, r) {
          "use strict";
          var h = e("../utils"), i = e("./ConvertWorker"), s = e("./GenericWorker"), u = e("../base64"), n = e("../support"), a = e("../external"), o = null;
          if (n.nodestream) try {
            o = e("../nodejs/NodejsStreamOutputAdapter");
          } catch (e2) {
          }
          function l(e2, o2) {
            return new a.Promise(function(t2, r2) {
              var n2 = [], i2 = e2._internalType, s2 = e2._outputType, a2 = e2._mimeType;
              e2.on("data", function(e3, t3) {
                n2.push(e3), o2 && o2(t3);
              }).on("error", function(e3) {
                n2 = [], r2(e3);
              }).on("end", function() {
                try {
                  var e3 = (function(e4, t3, r3) {
                    switch (e4) {
                      case "blob":
                        return h.newBlob(h.transformTo("arraybuffer", t3), r3);
                      case "base64":
                        return u.encode(t3);
                      default:
                        return h.transformTo(e4, t3);
                    }
                  })(s2, (function(e4, t3) {
                    var r3, n3 = 0, i3 = null, s3 = 0;
                    for (r3 = 0; r3 < t3.length; r3++) s3 += t3[r3].length;
                    switch (e4) {
                      case "string":
                        return t3.join("");
                      case "array":
                        return Array.prototype.concat.apply([], t3);
                      case "uint8array":
                        for (i3 = new Uint8Array(s3), r3 = 0; r3 < t3.length; r3++) i3.set(t3[r3], n3), n3 += t3[r3].length;
                        return i3;
                      case "nodebuffer":
                        return Buffer.concat(t3);
                      default:
                        throw new Error("concat : unsupported type '" + e4 + "'");
                    }
                  })(i2, n2), a2);
                  t2(e3);
                } catch (e4) {
                  r2(e4);
                }
                n2 = [];
              }).resume();
            });
          }
          function f(e2, t2, r2) {
            var n2 = t2;
            switch (t2) {
              case "blob":
              case "arraybuffer":
                n2 = "uint8array";
                break;
              case "base64":
                n2 = "string";
            }
            try {
              this._internalType = n2, this._outputType = t2, this._mimeType = r2, h.checkSupport(n2), this._worker = e2.pipe(new i(n2)), e2.lock();
            } catch (e3) {
              this._worker = new s("error"), this._worker.error(e3);
            }
          }
          f.prototype = { accumulate: function(e2) {
            return l(this, e2);
          }, on: function(e2, t2) {
            var r2 = this;
            return "data" === e2 ? this._worker.on(e2, function(e3) {
              t2.call(r2, e3.data, e3.meta);
            }) : this._worker.on(e2, function() {
              h.delay(t2, arguments, r2);
            }), this;
          }, resume: function() {
            return h.delay(this._worker.resume, [], this._worker), this;
          }, pause: function() {
            return this._worker.pause(), this;
          }, toNodejsStream: function(e2) {
            if (h.checkSupport("nodestream"), "nodebuffer" !== this._outputType) throw new Error(this._outputType + " is not supported by this method");
            return new o(this, { objectMode: "nodebuffer" !== this._outputType }, e2);
          } }, t.exports = f;
        }, { "../base64": 1, "../external": 6, "../nodejs/NodejsStreamOutputAdapter": 13, "../support": 30, "../utils": 32, "./ConvertWorker": 24, "./GenericWorker": 28 }], 30: [function(e, t, r) {
          "use strict";
          if (r.base64 = true, r.array = true, r.string = true, r.arraybuffer = "undefined" != typeof ArrayBuffer && "undefined" != typeof Uint8Array, r.nodebuffer = "undefined" != typeof Buffer, r.uint8array = "undefined" != typeof Uint8Array, "undefined" == typeof ArrayBuffer) r.blob = false;
          else {
            var n = new ArrayBuffer(0);
            try {
              r.blob = 0 === new Blob([n], { type: "application/zip" }).size;
            } catch (e2) {
              try {
                var i = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                i.append(n), r.blob = 0 === i.getBlob("application/zip").size;
              } catch (e3) {
                r.blob = false;
              }
            }
          }
          try {
            r.nodestream = !!e("readable-stream").Readable;
          } catch (e2) {
            r.nodestream = false;
          }
        }, { "readable-stream": 16 }], 31: [function(e, t, s) {
          "use strict";
          for (var o = e("./utils"), h = e("./support"), r = e("./nodejsUtils"), n = e("./stream/GenericWorker"), u = new Array(256), i = 0; i < 256; i++) u[i] = 252 <= i ? 6 : 248 <= i ? 5 : 240 <= i ? 4 : 224 <= i ? 3 : 192 <= i ? 2 : 1;
          u[254] = u[254] = 1;
          function a() {
            n.call(this, "utf-8 decode"), this.leftOver = null;
          }
          function l() {
            n.call(this, "utf-8 encode");
          }
          s.utf8encode = function(e2) {
            return h.nodebuffer ? r.newBufferFrom(e2, "utf-8") : (function(e3) {
              var t2, r2, n2, i2, s2, a2 = e3.length, o2 = 0;
              for (i2 = 0; i2 < a2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o2 += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
              for (t2 = h.uint8array ? new Uint8Array(o2) : new Array(o2), i2 = s2 = 0; s2 < o2; i2++) 55296 == (64512 & (r2 = e3.charCodeAt(i2))) && i2 + 1 < a2 && 56320 == (64512 & (n2 = e3.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
              return t2;
            })(e2);
          }, s.utf8decode = function(e2) {
            return h.nodebuffer ? o.transformTo("nodebuffer", e2).toString("utf-8") : (function(e3) {
              var t2, r2, n2, i2, s2 = e3.length, a2 = new Array(2 * s2);
              for (t2 = r2 = 0; t2 < s2; ) if ((n2 = e3[t2++]) < 128) a2[r2++] = n2;
              else if (4 < (i2 = u[n2])) a2[r2++] = 65533, t2 += i2 - 1;
              else {
                for (n2 &= 2 === i2 ? 31 : 3 === i2 ? 15 : 7; 1 < i2 && t2 < s2; ) n2 = n2 << 6 | 63 & e3[t2++], i2--;
                1 < i2 ? a2[r2++] = 65533 : n2 < 65536 ? a2[r2++] = n2 : (n2 -= 65536, a2[r2++] = 55296 | n2 >> 10 & 1023, a2[r2++] = 56320 | 1023 & n2);
              }
              return a2.length !== r2 && (a2.subarray ? a2 = a2.subarray(0, r2) : a2.length = r2), o.applyFromCharCode(a2);
            })(e2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2));
          }, o.inherits(a, n), a.prototype.processChunk = function(e2) {
            var t2 = o.transformTo(h.uint8array ? "uint8array" : "array", e2.data);
            if (this.leftOver && this.leftOver.length) {
              if (h.uint8array) {
                var r2 = t2;
                (t2 = new Uint8Array(r2.length + this.leftOver.length)).set(this.leftOver, 0), t2.set(r2, this.leftOver.length);
              } else t2 = this.leftOver.concat(t2);
              this.leftOver = null;
            }
            var n2 = (function(e3, t3) {
              var r3;
              for ((t3 = t3 || e3.length) > e3.length && (t3 = e3.length), r3 = t3 - 1; 0 <= r3 && 128 == (192 & e3[r3]); ) r3--;
              return r3 < 0 ? t3 : 0 === r3 ? t3 : r3 + u[e3[r3]] > t3 ? r3 : t3;
            })(t2), i2 = t2;
            n2 !== t2.length && (h.uint8array ? (i2 = t2.subarray(0, n2), this.leftOver = t2.subarray(n2, t2.length)) : (i2 = t2.slice(0, n2), this.leftOver = t2.slice(n2, t2.length))), this.push({ data: s.utf8decode(i2), meta: e2.meta });
          }, a.prototype.flush = function() {
            this.leftOver && this.leftOver.length && (this.push({ data: s.utf8decode(this.leftOver), meta: {} }), this.leftOver = null);
          }, s.Utf8DecodeWorker = a, o.inherits(l, n), l.prototype.processChunk = function(e2) {
            this.push({ data: s.utf8encode(e2.data), meta: e2.meta });
          }, s.Utf8EncodeWorker = l;
        }, { "./nodejsUtils": 14, "./stream/GenericWorker": 28, "./support": 30, "./utils": 32 }], 32: [function(e, t, a) {
          "use strict";
          var o = e("./support"), h = e("./base64"), r = e("./nodejsUtils"), u = e("./external");
          function n(e2) {
            return e2;
          }
          function l(e2, t2) {
            for (var r2 = 0; r2 < e2.length; ++r2) t2[r2] = 255 & e2.charCodeAt(r2);
            return t2;
          }
          e("setimmediate"), a.newBlob = function(t2, r2) {
            a.checkSupport("blob");
            try {
              return new Blob([t2], { type: r2 });
            } catch (e2) {
              try {
                var n2 = new (self.BlobBuilder || self.WebKitBlobBuilder || self.MozBlobBuilder || self.MSBlobBuilder)();
                return n2.append(t2), n2.getBlob(r2);
              } catch (e3) {
                throw new Error("Bug : can't construct the Blob.");
              }
            }
          };
          var i = { stringifyByChunk: function(e2, t2, r2) {
            var n2 = [], i2 = 0, s2 = e2.length;
            if (s2 <= r2) return String.fromCharCode.apply(null, e2);
            for (; i2 < s2; ) "array" === t2 || "nodebuffer" === t2 ? n2.push(String.fromCharCode.apply(null, e2.slice(i2, Math.min(i2 + r2, s2)))) : n2.push(String.fromCharCode.apply(null, e2.subarray(i2, Math.min(i2 + r2, s2)))), i2 += r2;
            return n2.join("");
          }, stringifyByChar: function(e2) {
            for (var t2 = "", r2 = 0; r2 < e2.length; r2++) t2 += String.fromCharCode(e2[r2]);
            return t2;
          }, applyCanBeUsed: { uint8array: (function() {
            try {
              return o.uint8array && 1 === String.fromCharCode.apply(null, new Uint8Array(1)).length;
            } catch (e2) {
              return false;
            }
          })(), nodebuffer: (function() {
            try {
              return o.nodebuffer && 1 === String.fromCharCode.apply(null, r.allocBuffer(1)).length;
            } catch (e2) {
              return false;
            }
          })() } };
          function s(e2) {
            var t2 = 65536, r2 = a.getTypeOf(e2), n2 = true;
            if ("uint8array" === r2 ? n2 = i.applyCanBeUsed.uint8array : "nodebuffer" === r2 && (n2 = i.applyCanBeUsed.nodebuffer), n2) for (; 1 < t2; ) try {
              return i.stringifyByChunk(e2, r2, t2);
            } catch (e3) {
              t2 = Math.floor(t2 / 2);
            }
            return i.stringifyByChar(e2);
          }
          function f(e2, t2) {
            for (var r2 = 0; r2 < e2.length; r2++) t2[r2] = e2[r2];
            return t2;
          }
          a.applyFromCharCode = s;
          var c = {};
          c.string = { string: n, array: function(e2) {
            return l(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.string.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return l(e2, new Uint8Array(e2.length));
          }, nodebuffer: function(e2) {
            return l(e2, r.allocBuffer(e2.length));
          } }, c.array = { string: s, array: n, arraybuffer: function(e2) {
            return new Uint8Array(e2).buffer;
          }, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.arraybuffer = { string: function(e2) {
            return s(new Uint8Array(e2));
          }, array: function(e2) {
            return f(new Uint8Array(e2), new Array(e2.byteLength));
          }, arraybuffer: n, uint8array: function(e2) {
            return new Uint8Array(e2);
          }, nodebuffer: function(e2) {
            return r.newBufferFrom(new Uint8Array(e2));
          } }, c.uint8array = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return e2.buffer;
          }, uint8array: n, nodebuffer: function(e2) {
            return r.newBufferFrom(e2);
          } }, c.nodebuffer = { string: s, array: function(e2) {
            return f(e2, new Array(e2.length));
          }, arraybuffer: function(e2) {
            return c.nodebuffer.uint8array(e2).buffer;
          }, uint8array: function(e2) {
            return f(e2, new Uint8Array(e2.length));
          }, nodebuffer: n }, a.transformTo = function(e2, t2) {
            if (t2 = t2 || "", !e2) return t2;
            a.checkSupport(e2);
            var r2 = a.getTypeOf(t2);
            return c[r2][e2](t2);
          }, a.resolve = function(e2) {
            for (var t2 = e2.split("/"), r2 = [], n2 = 0; n2 < t2.length; n2++) {
              var i2 = t2[n2];
              "." === i2 || "" === i2 && 0 !== n2 && n2 !== t2.length - 1 || (".." === i2 ? r2.pop() : r2.push(i2));
            }
            return r2.join("/");
          }, a.getTypeOf = function(e2) {
            return "string" == typeof e2 ? "string" : "[object Array]" === Object.prototype.toString.call(e2) ? "array" : o.nodebuffer && r.isBuffer(e2) ? "nodebuffer" : o.uint8array && e2 instanceof Uint8Array ? "uint8array" : o.arraybuffer && e2 instanceof ArrayBuffer ? "arraybuffer" : void 0;
          }, a.checkSupport = function(e2) {
            if (!o[e2.toLowerCase()]) throw new Error(e2 + " is not supported by this platform");
          }, a.MAX_VALUE_16BITS = 65535, a.MAX_VALUE_32BITS = -1, a.pretty = function(e2) {
            var t2, r2, n2 = "";
            for (r2 = 0; r2 < (e2 || "").length; r2++) n2 += "\\x" + ((t2 = e2.charCodeAt(r2)) < 16 ? "0" : "") + t2.toString(16).toUpperCase();
            return n2;
          }, a.delay = function(e2, t2, r2) {
            setImmediate(function() {
              e2.apply(r2 || null, t2 || []);
            });
          }, a.inherits = function(e2, t2) {
            function r2() {
            }
            r2.prototype = t2.prototype, e2.prototype = new r2();
          }, a.extend = function() {
            var e2, t2, r2 = {};
            for (e2 = 0; e2 < arguments.length; e2++) for (t2 in arguments[e2]) Object.prototype.hasOwnProperty.call(arguments[e2], t2) && void 0 === r2[t2] && (r2[t2] = arguments[e2][t2]);
            return r2;
          }, a.prepareContent = function(r2, e2, n2, i2, s2) {
            return u.Promise.resolve(e2).then(function(n3) {
              return o.blob && (n3 instanceof Blob || -1 !== ["[object File]", "[object Blob]"].indexOf(Object.prototype.toString.call(n3))) && "undefined" != typeof FileReader ? new u.Promise(function(t2, r3) {
                var e3 = new FileReader();
                e3.onload = function(e4) {
                  t2(e4.target.result);
                }, e3.onerror = function(e4) {
                  r3(e4.target.error);
                }, e3.readAsArrayBuffer(n3);
              }) : n3;
            }).then(function(e3) {
              var t2 = a.getTypeOf(e3);
              return t2 ? ("arraybuffer" === t2 ? e3 = a.transformTo("uint8array", e3) : "string" === t2 && (s2 ? e3 = h.decode(e3) : n2 && true !== i2 && (e3 = (function(e4) {
                return l(e4, o.uint8array ? new Uint8Array(e4.length) : new Array(e4.length));
              })(e3))), e3) : u.Promise.reject(new Error("Can't read the data of '" + r2 + "'. Is it in a supported JavaScript type (String, Blob, ArrayBuffer, etc) ?"));
            });
          };
        }, { "./base64": 1, "./external": 6, "./nodejsUtils": 14, "./support": 30, setimmediate: 54 }], 33: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), i = e("./utils"), s = e("./signature"), a = e("./zipEntry"), o = e("./support");
          function h(e2) {
            this.files = [], this.loadOptions = e2;
          }
          h.prototype = { checkSignature: function(e2) {
            if (!this.reader.readAndCheckSignature(e2)) {
              this.reader.index -= 4;
              var t2 = this.reader.readString(4);
              throw new Error("Corrupted zip or bug: unexpected signature (" + i.pretty(t2) + ", expected " + i.pretty(e2) + ")");
            }
          }, isSignature: function(e2, t2) {
            var r2 = this.reader.index;
            this.reader.setIndex(e2);
            var n2 = this.reader.readString(4) === t2;
            return this.reader.setIndex(r2), n2;
          }, readBlockEndOfCentral: function() {
            this.diskNumber = this.reader.readInt(2), this.diskWithCentralDirStart = this.reader.readInt(2), this.centralDirRecordsOnThisDisk = this.reader.readInt(2), this.centralDirRecords = this.reader.readInt(2), this.centralDirSize = this.reader.readInt(4), this.centralDirOffset = this.reader.readInt(4), this.zipCommentLength = this.reader.readInt(2);
            var e2 = this.reader.readData(this.zipCommentLength), t2 = o.uint8array ? "uint8array" : "array", r2 = i.transformTo(t2, e2);
            this.zipComment = this.loadOptions.decodeFileName(r2);
          }, readBlockZip64EndOfCentral: function() {
            this.zip64EndOfCentralSize = this.reader.readInt(8), this.reader.skip(4), this.diskNumber = this.reader.readInt(4), this.diskWithCentralDirStart = this.reader.readInt(4), this.centralDirRecordsOnThisDisk = this.reader.readInt(8), this.centralDirRecords = this.reader.readInt(8), this.centralDirSize = this.reader.readInt(8), this.centralDirOffset = this.reader.readInt(8), this.zip64ExtensibleData = {};
            for (var e2, t2, r2, n2 = this.zip64EndOfCentralSize - 44; 0 < n2; ) e2 = this.reader.readInt(2), t2 = this.reader.readInt(4), r2 = this.reader.readData(t2), this.zip64ExtensibleData[e2] = { id: e2, length: t2, value: r2 };
          }, readBlockZip64EndOfCentralLocator: function() {
            if (this.diskWithZip64CentralDirStart = this.reader.readInt(4), this.relativeOffsetEndOfZip64CentralDir = this.reader.readInt(8), this.disksCount = this.reader.readInt(4), 1 < this.disksCount) throw new Error("Multi-volumes zip are not supported");
          }, readLocalFiles: function() {
            var e2, t2;
            for (e2 = 0; e2 < this.files.length; e2++) t2 = this.files[e2], this.reader.setIndex(t2.localHeaderOffset), this.checkSignature(s.LOCAL_FILE_HEADER), t2.readLocalPart(this.reader), t2.handleUTF8(), t2.processAttributes();
          }, readCentralDir: function() {
            var e2;
            for (this.reader.setIndex(this.centralDirOffset); this.reader.readAndCheckSignature(s.CENTRAL_FILE_HEADER); ) (e2 = new a({ zip64: this.zip64 }, this.loadOptions)).readCentralPart(this.reader), this.files.push(e2);
            if (this.centralDirRecords !== this.files.length && 0 !== this.centralDirRecords && 0 === this.files.length) throw new Error("Corrupted zip or bug: expected " + this.centralDirRecords + " records in central dir, got " + this.files.length);
          }, readEndOfCentral: function() {
            var e2 = this.reader.lastIndexOfSignature(s.CENTRAL_DIRECTORY_END);
            if (e2 < 0) throw !this.isSignature(0, s.LOCAL_FILE_HEADER) ? new Error("Can't find end of central directory : is this a zip file ? If it is, see https://stuk.github.io/jszip/documentation/howto/read_zip.html") : new Error("Corrupted zip: can't find end of central directory");
            this.reader.setIndex(e2);
            var t2 = e2;
            if (this.checkSignature(s.CENTRAL_DIRECTORY_END), this.readBlockEndOfCentral(), this.diskNumber === i.MAX_VALUE_16BITS || this.diskWithCentralDirStart === i.MAX_VALUE_16BITS || this.centralDirRecordsOnThisDisk === i.MAX_VALUE_16BITS || this.centralDirRecords === i.MAX_VALUE_16BITS || this.centralDirSize === i.MAX_VALUE_32BITS || this.centralDirOffset === i.MAX_VALUE_32BITS) {
              if (this.zip64 = true, (e2 = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR)) < 0) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory locator");
              if (this.reader.setIndex(e2), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_LOCATOR), this.readBlockZip64EndOfCentralLocator(), !this.isSignature(this.relativeOffsetEndOfZip64CentralDir, s.ZIP64_CENTRAL_DIRECTORY_END) && (this.relativeOffsetEndOfZip64CentralDir = this.reader.lastIndexOfSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.relativeOffsetEndOfZip64CentralDir < 0)) throw new Error("Corrupted zip: can't find the ZIP64 end of central directory");
              this.reader.setIndex(this.relativeOffsetEndOfZip64CentralDir), this.checkSignature(s.ZIP64_CENTRAL_DIRECTORY_END), this.readBlockZip64EndOfCentral();
            }
            var r2 = this.centralDirOffset + this.centralDirSize;
            this.zip64 && (r2 += 20, r2 += 12 + this.zip64EndOfCentralSize);
            var n2 = t2 - r2;
            if (0 < n2) this.isSignature(t2, s.CENTRAL_FILE_HEADER) || (this.reader.zero = n2);
            else if (n2 < 0) throw new Error("Corrupted zip: missing " + Math.abs(n2) + " bytes.");
          }, prepareReader: function(e2) {
            this.reader = n(e2);
          }, load: function(e2) {
            this.prepareReader(e2), this.readEndOfCentral(), this.readCentralDir(), this.readLocalFiles();
          } }, t.exports = h;
        }, { "./reader/readerFor": 22, "./signature": 23, "./support": 30, "./utils": 32, "./zipEntry": 34 }], 34: [function(e, t, r) {
          "use strict";
          var n = e("./reader/readerFor"), s = e("./utils"), i = e("./compressedObject"), a = e("./crc32"), o = e("./utf8"), h = e("./compressions"), u = e("./support");
          function l(e2, t2) {
            this.options = e2, this.loadOptions = t2;
          }
          l.prototype = { isEncrypted: function() {
            return 1 == (1 & this.bitFlag);
          }, useUTF8: function() {
            return 2048 == (2048 & this.bitFlag);
          }, readLocalPart: function(e2) {
            var t2, r2;
            if (e2.skip(22), this.fileNameLength = e2.readInt(2), r2 = e2.readInt(2), this.fileName = e2.readData(this.fileNameLength), e2.skip(r2), -1 === this.compressedSize || -1 === this.uncompressedSize) throw new Error("Bug or corrupted zip : didn't get enough information from the central directory (compressedSize === -1 || uncompressedSize === -1)");
            if (null === (t2 = (function(e3) {
              for (var t3 in h) if (Object.prototype.hasOwnProperty.call(h, t3) && h[t3].magic === e3) return h[t3];
              return null;
            })(this.compressionMethod))) throw new Error("Corrupted zip : compression " + s.pretty(this.compressionMethod) + " unknown (inner file : " + s.transformTo("string", this.fileName) + ")");
            this.decompressed = new i(this.compressedSize, this.uncompressedSize, this.crc32, t2, e2.readData(this.compressedSize));
          }, readCentralPart: function(e2) {
            this.versionMadeBy = e2.readInt(2), e2.skip(2), this.bitFlag = e2.readInt(2), this.compressionMethod = e2.readString(2), this.date = e2.readDate(), this.crc32 = e2.readInt(4), this.compressedSize = e2.readInt(4), this.uncompressedSize = e2.readInt(4);
            var t2 = e2.readInt(2);
            if (this.extraFieldsLength = e2.readInt(2), this.fileCommentLength = e2.readInt(2), this.diskNumberStart = e2.readInt(2), this.internalFileAttributes = e2.readInt(2), this.externalFileAttributes = e2.readInt(4), this.localHeaderOffset = e2.readInt(4), this.isEncrypted()) throw new Error("Encrypted zip are not supported");
            e2.skip(t2), this.readExtraFields(e2), this.parseZIP64ExtraField(e2), this.fileComment = e2.readData(this.fileCommentLength);
          }, processAttributes: function() {
            this.unixPermissions = null, this.dosPermissions = null;
            var e2 = this.versionMadeBy >> 8;
            this.dir = !!(16 & this.externalFileAttributes), 0 == e2 && (this.dosPermissions = 63 & this.externalFileAttributes), 3 == e2 && (this.unixPermissions = this.externalFileAttributes >> 16 & 65535), this.dir || "/" !== this.fileNameStr.slice(-1) || (this.dir = true);
          }, parseZIP64ExtraField: function() {
            if (this.extraFields[1]) {
              var e2 = n(this.extraFields[1].value);
              this.uncompressedSize === s.MAX_VALUE_32BITS && (this.uncompressedSize = e2.readInt(8)), this.compressedSize === s.MAX_VALUE_32BITS && (this.compressedSize = e2.readInt(8)), this.localHeaderOffset === s.MAX_VALUE_32BITS && (this.localHeaderOffset = e2.readInt(8)), this.diskNumberStart === s.MAX_VALUE_32BITS && (this.diskNumberStart = e2.readInt(4));
            }
          }, readExtraFields: function(e2) {
            var t2, r2, n2, i2 = e2.index + this.extraFieldsLength;
            for (this.extraFields || (this.extraFields = {}); e2.index + 4 < i2; ) t2 = e2.readInt(2), r2 = e2.readInt(2), n2 = e2.readData(r2), this.extraFields[t2] = { id: t2, length: r2, value: n2 };
            e2.setIndex(i2);
          }, handleUTF8: function() {
            var e2 = u.uint8array ? "uint8array" : "array";
            if (this.useUTF8()) this.fileNameStr = o.utf8decode(this.fileName), this.fileCommentStr = o.utf8decode(this.fileComment);
            else {
              var t2 = this.findExtraFieldUnicodePath();
              if (null !== t2) this.fileNameStr = t2;
              else {
                var r2 = s.transformTo(e2, this.fileName);
                this.fileNameStr = this.loadOptions.decodeFileName(r2);
              }
              var n2 = this.findExtraFieldUnicodeComment();
              if (null !== n2) this.fileCommentStr = n2;
              else {
                var i2 = s.transformTo(e2, this.fileComment);
                this.fileCommentStr = this.loadOptions.decodeFileName(i2);
              }
            }
          }, findExtraFieldUnicodePath: function() {
            var e2 = this.extraFields[28789];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileName) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          }, findExtraFieldUnicodeComment: function() {
            var e2 = this.extraFields[25461];
            if (e2) {
              var t2 = n(e2.value);
              return 1 !== t2.readInt(1) ? null : a(this.fileComment) !== t2.readInt(4) ? null : o.utf8decode(t2.readData(e2.length - 5));
            }
            return null;
          } }, t.exports = l;
        }, { "./compressedObject": 2, "./compressions": 3, "./crc32": 4, "./reader/readerFor": 22, "./support": 30, "./utf8": 31, "./utils": 32 }], 35: [function(e, t, r) {
          "use strict";
          function n(e2, t2, r2) {
            this.name = e2, this.dir = r2.dir, this.date = r2.date, this.comment = r2.comment, this.unixPermissions = r2.unixPermissions, this.dosPermissions = r2.dosPermissions, this._data = t2, this._dataBinary = r2.binary, this.options = { compression: r2.compression, compressionOptions: r2.compressionOptions };
          }
          var s = e("./stream/StreamHelper"), i = e("./stream/DataWorker"), a = e("./utf8"), o = e("./compressedObject"), h = e("./stream/GenericWorker");
          n.prototype = { internalStream: function(e2) {
            var t2 = null, r2 = "string";
            try {
              if (!e2) throw new Error("No output type specified.");
              var n2 = "string" === (r2 = e2.toLowerCase()) || "text" === r2;
              "binarystring" !== r2 && "text" !== r2 || (r2 = "string"), t2 = this._decompressWorker();
              var i2 = !this._dataBinary;
              i2 && !n2 && (t2 = t2.pipe(new a.Utf8EncodeWorker())), !i2 && n2 && (t2 = t2.pipe(new a.Utf8DecodeWorker()));
            } catch (e3) {
              (t2 = new h("error")).error(e3);
            }
            return new s(t2, r2, "");
          }, async: function(e2, t2) {
            return this.internalStream(e2).accumulate(t2);
          }, nodeStream: function(e2, t2) {
            return this.internalStream(e2 || "nodebuffer").toNodejsStream(t2);
          }, _compressWorker: function(e2, t2) {
            if (this._data instanceof o && this._data.compression.magic === e2.magic) return this._data.getCompressedWorker();
            var r2 = this._decompressWorker();
            return this._dataBinary || (r2 = r2.pipe(new a.Utf8EncodeWorker())), o.createWorkerFrom(r2, e2, t2);
          }, _decompressWorker: function() {
            return this._data instanceof o ? this._data.getContentWorker() : this._data instanceof h ? this._data : new i(this._data);
          } };
          for (var u = ["asText", "asBinary", "asNodeBuffer", "asUint8Array", "asArrayBuffer"], l = function() {
            throw new Error("This method has been removed in JSZip 3.0, please check the upgrade guide.");
          }, f = 0; f < u.length; f++) n.prototype[u[f]] = l;
          t.exports = n;
        }, { "./compressedObject": 2, "./stream/DataWorker": 27, "./stream/GenericWorker": 28, "./stream/StreamHelper": 29, "./utf8": 31 }], 36: [function(e, l, t) {
          (function(t2) {
            "use strict";
            var r, n, e2 = t2.MutationObserver || t2.WebKitMutationObserver;
            if (e2) {
              var i = 0, s = new e2(u), a = t2.document.createTextNode("");
              s.observe(a, { characterData: true }), r = function() {
                a.data = i = ++i % 2;
              };
            } else if (t2.setImmediate || void 0 === t2.MessageChannel) r = "document" in t2 && "onreadystatechange" in t2.document.createElement("script") ? function() {
              var e3 = t2.document.createElement("script");
              e3.onreadystatechange = function() {
                u(), e3.onreadystatechange = null, e3.parentNode.removeChild(e3), e3 = null;
              }, t2.document.documentElement.appendChild(e3);
            } : function() {
              setTimeout(u, 0);
            };
            else {
              var o = new t2.MessageChannel();
              o.port1.onmessage = u, r = function() {
                o.port2.postMessage(0);
              };
            }
            var h = [];
            function u() {
              var e3, t3;
              n = true;
              for (var r2 = h.length; r2; ) {
                for (t3 = h, h = [], e3 = -1; ++e3 < r2; ) t3[e3]();
                r2 = h.length;
              }
              n = false;
            }
            l.exports = function(e3) {
              1 !== h.push(e3) || n || r();
            };
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}], 37: [function(e, t, r) {
          "use strict";
          var i = e("immediate");
          function u() {
          }
          var l = {}, s = ["REJECTED"], a = ["FULFILLED"], n = ["PENDING"];
          function o(e2) {
            if ("function" != typeof e2) throw new TypeError("resolver must be a function");
            this.state = n, this.queue = [], this.outcome = void 0, e2 !== u && d(this, e2);
          }
          function h(e2, t2, r2) {
            this.promise = e2, "function" == typeof t2 && (this.onFulfilled = t2, this.callFulfilled = this.otherCallFulfilled), "function" == typeof r2 && (this.onRejected = r2, this.callRejected = this.otherCallRejected);
          }
          function f(t2, r2, n2) {
            i(function() {
              var e2;
              try {
                e2 = r2(n2);
              } catch (e3) {
                return l.reject(t2, e3);
              }
              e2 === t2 ? l.reject(t2, new TypeError("Cannot resolve promise with itself")) : l.resolve(t2, e2);
            });
          }
          function c(e2) {
            var t2 = e2 && e2.then;
            if (e2 && ("object" == typeof e2 || "function" == typeof e2) && "function" == typeof t2) return function() {
              t2.apply(e2, arguments);
            };
          }
          function d(t2, e2) {
            var r2 = false;
            function n2(e3) {
              r2 || (r2 = true, l.reject(t2, e3));
            }
            function i2(e3) {
              r2 || (r2 = true, l.resolve(t2, e3));
            }
            var s2 = p(function() {
              e2(i2, n2);
            });
            "error" === s2.status && n2(s2.value);
          }
          function p(e2, t2) {
            var r2 = {};
            try {
              r2.value = e2(t2), r2.status = "success";
            } catch (e3) {
              r2.status = "error", r2.value = e3;
            }
            return r2;
          }
          (t.exports = o).prototype.finally = function(t2) {
            if ("function" != typeof t2) return this;
            var r2 = this.constructor;
            return this.then(function(e2) {
              return r2.resolve(t2()).then(function() {
                return e2;
              });
            }, function(e2) {
              return r2.resolve(t2()).then(function() {
                throw e2;
              });
            });
          }, o.prototype.catch = function(e2) {
            return this.then(null, e2);
          }, o.prototype.then = function(e2, t2) {
            if ("function" != typeof e2 && this.state === a || "function" != typeof t2 && this.state === s) return this;
            var r2 = new this.constructor(u);
            this.state !== n ? f(r2, this.state === a ? e2 : t2, this.outcome) : this.queue.push(new h(r2, e2, t2));
            return r2;
          }, h.prototype.callFulfilled = function(e2) {
            l.resolve(this.promise, e2);
          }, h.prototype.otherCallFulfilled = function(e2) {
            f(this.promise, this.onFulfilled, e2);
          }, h.prototype.callRejected = function(e2) {
            l.reject(this.promise, e2);
          }, h.prototype.otherCallRejected = function(e2) {
            f(this.promise, this.onRejected, e2);
          }, l.resolve = function(e2, t2) {
            var r2 = p(c, t2);
            if ("error" === r2.status) return l.reject(e2, r2.value);
            var n2 = r2.value;
            if (n2) d(e2, n2);
            else {
              e2.state = a, e2.outcome = t2;
              for (var i2 = -1, s2 = e2.queue.length; ++i2 < s2; ) e2.queue[i2].callFulfilled(t2);
            }
            return e2;
          }, l.reject = function(e2, t2) {
            e2.state = s, e2.outcome = t2;
            for (var r2 = -1, n2 = e2.queue.length; ++r2 < n2; ) e2.queue[r2].callRejected(t2);
            return e2;
          }, o.resolve = function(e2) {
            if (e2 instanceof this) return e2;
            return l.resolve(new this(u), e2);
          }, o.reject = function(e2) {
            var t2 = new this(u);
            return l.reject(t2, e2);
          }, o.all = function(e2) {
            var r2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
            var n2 = e2.length, i2 = false;
            if (!n2) return this.resolve([]);
            var s2 = new Array(n2), a2 = 0, t2 = -1, o2 = new this(u);
            for (; ++t2 < n2; ) h2(e2[t2], t2);
            return o2;
            function h2(e3, t3) {
              r2.resolve(e3).then(function(e4) {
                s2[t3] = e4, ++a2 !== n2 || i2 || (i2 = true, l.resolve(o2, s2));
              }, function(e4) {
                i2 || (i2 = true, l.reject(o2, e4));
              });
            }
          }, o.race = function(e2) {
            var t2 = this;
            if ("[object Array]" !== Object.prototype.toString.call(e2)) return this.reject(new TypeError("must be an array"));
            var r2 = e2.length, n2 = false;
            if (!r2) return this.resolve([]);
            var i2 = -1, s2 = new this(u);
            for (; ++i2 < r2; ) a2 = e2[i2], t2.resolve(a2).then(function(e3) {
              n2 || (n2 = true, l.resolve(s2, e3));
            }, function(e3) {
              n2 || (n2 = true, l.reject(s2, e3));
            });
            var a2;
            return s2;
          };
        }, { immediate: 36 }], 38: [function(e, t, r) {
          "use strict";
          var n = {};
          (0, e("./lib/utils/common").assign)(n, e("./lib/deflate"), e("./lib/inflate"), e("./lib/zlib/constants")), t.exports = n;
        }, { "./lib/deflate": 39, "./lib/inflate": 40, "./lib/utils/common": 41, "./lib/zlib/constants": 44 }], 39: [function(e, t, r) {
          "use strict";
          var a = e("./zlib/deflate"), o = e("./utils/common"), h = e("./utils/strings"), i = e("./zlib/messages"), s = e("./zlib/zstream"), u = Object.prototype.toString, l = 0, f = -1, c = 0, d = 8;
          function p(e2) {
            if (!(this instanceof p)) return new p(e2);
            this.options = o.assign({ level: f, method: d, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: c, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 < t2.windowBits ? t2.windowBits = -t2.windowBits : t2.gzip && 0 < t2.windowBits && t2.windowBits < 16 && (t2.windowBits += 16), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new s(), this.strm.avail_out = 0;
            var r2 = a.deflateInit2(this.strm, t2.level, t2.method, t2.windowBits, t2.memLevel, t2.strategy);
            if (r2 !== l) throw new Error(i[r2]);
            if (t2.header && a.deflateSetHeader(this.strm, t2.header), t2.dictionary) {
              var n2;
              if (n2 = "string" == typeof t2.dictionary ? h.string2buf(t2.dictionary) : "[object ArrayBuffer]" === u.call(t2.dictionary) ? new Uint8Array(t2.dictionary) : t2.dictionary, (r2 = a.deflateSetDictionary(this.strm, n2)) !== l) throw new Error(i[r2]);
              this._dict_set = true;
            }
          }
          function n(e2, t2) {
            var r2 = new p(t2);
            if (r2.push(e2, true), r2.err) throw r2.msg || i[r2.err];
            return r2.result;
          }
          p.prototype.push = function(e2, t2) {
            var r2, n2, i2 = this.strm, s2 = this.options.chunkSize;
            if (this.ended) return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? 4 : 0, "string" == typeof e2 ? i2.input = h.string2buf(e2) : "[object ArrayBuffer]" === u.call(e2) ? i2.input = new Uint8Array(e2) : i2.input = e2, i2.next_in = 0, i2.avail_in = i2.input.length;
            do {
              if (0 === i2.avail_out && (i2.output = new o.Buf8(s2), i2.next_out = 0, i2.avail_out = s2), 1 !== (r2 = a.deflate(i2, n2)) && r2 !== l) return this.onEnd(r2), !(this.ended = true);
              0 !== i2.avail_out && (0 !== i2.avail_in || 4 !== n2 && 2 !== n2) || ("string" === this.options.to ? this.onData(h.buf2binstring(o.shrinkBuf(i2.output, i2.next_out))) : this.onData(o.shrinkBuf(i2.output, i2.next_out)));
            } while ((0 < i2.avail_in || 0 === i2.avail_out) && 1 !== r2);
            return 4 === n2 ? (r2 = a.deflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === l) : 2 !== n2 || (this.onEnd(l), !(i2.avail_out = 0));
          }, p.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, p.prototype.onEnd = function(e2) {
            e2 === l && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = o.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Deflate = p, r.deflate = n, r.deflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, n(e2, t2);
          }, r.gzip = function(e2, t2) {
            return (t2 = t2 || {}).gzip = true, n(e2, t2);
          };
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/deflate": 46, "./zlib/messages": 51, "./zlib/zstream": 53 }], 40: [function(e, t, r) {
          "use strict";
          var c = e("./zlib/inflate"), d = e("./utils/common"), p = e("./utils/strings"), m = e("./zlib/constants"), n = e("./zlib/messages"), i = e("./zlib/zstream"), s = e("./zlib/gzheader"), _ = Object.prototype.toString;
          function a(e2) {
            if (!(this instanceof a)) return new a(e2);
            this.options = d.assign({ chunkSize: 16384, windowBits: 0, to: "" }, e2 || {});
            var t2 = this.options;
            t2.raw && 0 <= t2.windowBits && t2.windowBits < 16 && (t2.windowBits = -t2.windowBits, 0 === t2.windowBits && (t2.windowBits = -15)), !(0 <= t2.windowBits && t2.windowBits < 16) || e2 && e2.windowBits || (t2.windowBits += 32), 15 < t2.windowBits && t2.windowBits < 48 && 0 == (15 & t2.windowBits) && (t2.windowBits |= 15), this.err = 0, this.msg = "", this.ended = false, this.chunks = [], this.strm = new i(), this.strm.avail_out = 0;
            var r2 = c.inflateInit2(this.strm, t2.windowBits);
            if (r2 !== m.Z_OK) throw new Error(n[r2]);
            this.header = new s(), c.inflateGetHeader(this.strm, this.header);
          }
          function o(e2, t2) {
            var r2 = new a(t2);
            if (r2.push(e2, true), r2.err) throw r2.msg || n[r2.err];
            return r2.result;
          }
          a.prototype.push = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h = this.strm, u = this.options.chunkSize, l = this.options.dictionary, f = false;
            if (this.ended) return false;
            n2 = t2 === ~~t2 ? t2 : true === t2 ? m.Z_FINISH : m.Z_NO_FLUSH, "string" == typeof e2 ? h.input = p.binstring2buf(e2) : "[object ArrayBuffer]" === _.call(e2) ? h.input = new Uint8Array(e2) : h.input = e2, h.next_in = 0, h.avail_in = h.input.length;
            do {
              if (0 === h.avail_out && (h.output = new d.Buf8(u), h.next_out = 0, h.avail_out = u), (r2 = c.inflate(h, m.Z_NO_FLUSH)) === m.Z_NEED_DICT && l && (o2 = "string" == typeof l ? p.string2buf(l) : "[object ArrayBuffer]" === _.call(l) ? new Uint8Array(l) : l, r2 = c.inflateSetDictionary(this.strm, o2)), r2 === m.Z_BUF_ERROR && true === f && (r2 = m.Z_OK, f = false), r2 !== m.Z_STREAM_END && r2 !== m.Z_OK) return this.onEnd(r2), !(this.ended = true);
              h.next_out && (0 !== h.avail_out && r2 !== m.Z_STREAM_END && (0 !== h.avail_in || n2 !== m.Z_FINISH && n2 !== m.Z_SYNC_FLUSH) || ("string" === this.options.to ? (i2 = p.utf8border(h.output, h.next_out), s2 = h.next_out - i2, a2 = p.buf2string(h.output, i2), h.next_out = s2, h.avail_out = u - s2, s2 && d.arraySet(h.output, h.output, i2, s2, 0), this.onData(a2)) : this.onData(d.shrinkBuf(h.output, h.next_out)))), 0 === h.avail_in && 0 === h.avail_out && (f = true);
            } while ((0 < h.avail_in || 0 === h.avail_out) && r2 !== m.Z_STREAM_END);
            return r2 === m.Z_STREAM_END && (n2 = m.Z_FINISH), n2 === m.Z_FINISH ? (r2 = c.inflateEnd(this.strm), this.onEnd(r2), this.ended = true, r2 === m.Z_OK) : n2 !== m.Z_SYNC_FLUSH || (this.onEnd(m.Z_OK), !(h.avail_out = 0));
          }, a.prototype.onData = function(e2) {
            this.chunks.push(e2);
          }, a.prototype.onEnd = function(e2) {
            e2 === m.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = d.flattenChunks(this.chunks)), this.chunks = [], this.err = e2, this.msg = this.strm.msg;
          }, r.Inflate = a, r.inflate = o, r.inflateRaw = function(e2, t2) {
            return (t2 = t2 || {}).raw = true, o(e2, t2);
          }, r.ungzip = o;
        }, { "./utils/common": 41, "./utils/strings": 42, "./zlib/constants": 44, "./zlib/gzheader": 47, "./zlib/inflate": 49, "./zlib/messages": 51, "./zlib/zstream": 53 }], 41: [function(e, t, r) {
          "use strict";
          var n = "undefined" != typeof Uint8Array && "undefined" != typeof Uint16Array && "undefined" != typeof Int32Array;
          r.assign = function(e2) {
            for (var t2 = Array.prototype.slice.call(arguments, 1); t2.length; ) {
              var r2 = t2.shift();
              if (r2) {
                if ("object" != typeof r2) throw new TypeError(r2 + "must be non-object");
                for (var n2 in r2) r2.hasOwnProperty(n2) && (e2[n2] = r2[n2]);
              }
            }
            return e2;
          }, r.shrinkBuf = function(e2, t2) {
            return e2.length === t2 ? e2 : e2.subarray ? e2.subarray(0, t2) : (e2.length = t2, e2);
          };
          var i = { arraySet: function(e2, t2, r2, n2, i2) {
            if (t2.subarray && e2.subarray) e2.set(t2.subarray(r2, r2 + n2), i2);
            else for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            var t2, r2, n2, i2, s2, a;
            for (t2 = n2 = 0, r2 = e2.length; t2 < r2; t2++) n2 += e2[t2].length;
            for (a = new Uint8Array(n2), t2 = i2 = 0, r2 = e2.length; t2 < r2; t2++) s2 = e2[t2], a.set(s2, i2), i2 += s2.length;
            return a;
          } }, s = { arraySet: function(e2, t2, r2, n2, i2) {
            for (var s2 = 0; s2 < n2; s2++) e2[i2 + s2] = t2[r2 + s2];
          }, flattenChunks: function(e2) {
            return [].concat.apply([], e2);
          } };
          r.setTyped = function(e2) {
            e2 ? (r.Buf8 = Uint8Array, r.Buf16 = Uint16Array, r.Buf32 = Int32Array, r.assign(r, i)) : (r.Buf8 = Array, r.Buf16 = Array, r.Buf32 = Array, r.assign(r, s));
          }, r.setTyped(n);
        }, {}], 42: [function(e, t, r) {
          "use strict";
          var h = e("./common"), i = true, s = true;
          try {
            String.fromCharCode.apply(null, [0]);
          } catch (e2) {
            i = false;
          }
          try {
            String.fromCharCode.apply(null, new Uint8Array(1));
          } catch (e2) {
            s = false;
          }
          for (var u = new h.Buf8(256), n = 0; n < 256; n++) u[n] = 252 <= n ? 6 : 248 <= n ? 5 : 240 <= n ? 4 : 224 <= n ? 3 : 192 <= n ? 2 : 1;
          function l(e2, t2) {
            if (t2 < 65537 && (e2.subarray && s || !e2.subarray && i)) return String.fromCharCode.apply(null, h.shrinkBuf(e2, t2));
            for (var r2 = "", n2 = 0; n2 < t2; n2++) r2 += String.fromCharCode(e2[n2]);
            return r2;
          }
          u[254] = u[254] = 1, r.string2buf = function(e2) {
            var t2, r2, n2, i2, s2, a = e2.length, o = 0;
            for (i2 = 0; i2 < a; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), o += r2 < 128 ? 1 : r2 < 2048 ? 2 : r2 < 65536 ? 3 : 4;
            for (t2 = new h.Buf8(o), i2 = s2 = 0; s2 < o; i2++) 55296 == (64512 & (r2 = e2.charCodeAt(i2))) && i2 + 1 < a && 56320 == (64512 & (n2 = e2.charCodeAt(i2 + 1))) && (r2 = 65536 + (r2 - 55296 << 10) + (n2 - 56320), i2++), r2 < 128 ? t2[s2++] = r2 : (r2 < 2048 ? t2[s2++] = 192 | r2 >>> 6 : (r2 < 65536 ? t2[s2++] = 224 | r2 >>> 12 : (t2[s2++] = 240 | r2 >>> 18, t2[s2++] = 128 | r2 >>> 12 & 63), t2[s2++] = 128 | r2 >>> 6 & 63), t2[s2++] = 128 | 63 & r2);
            return t2;
          }, r.buf2binstring = function(e2) {
            return l(e2, e2.length);
          }, r.binstring2buf = function(e2) {
            for (var t2 = new h.Buf8(e2.length), r2 = 0, n2 = t2.length; r2 < n2; r2++) t2[r2] = e2.charCodeAt(r2);
            return t2;
          }, r.buf2string = function(e2, t2) {
            var r2, n2, i2, s2, a = t2 || e2.length, o = new Array(2 * a);
            for (r2 = n2 = 0; r2 < a; ) if ((i2 = e2[r2++]) < 128) o[n2++] = i2;
            else if (4 < (s2 = u[i2])) o[n2++] = 65533, r2 += s2 - 1;
            else {
              for (i2 &= 2 === s2 ? 31 : 3 === s2 ? 15 : 7; 1 < s2 && r2 < a; ) i2 = i2 << 6 | 63 & e2[r2++], s2--;
              1 < s2 ? o[n2++] = 65533 : i2 < 65536 ? o[n2++] = i2 : (i2 -= 65536, o[n2++] = 55296 | i2 >> 10 & 1023, o[n2++] = 56320 | 1023 & i2);
            }
            return l(o, n2);
          }, r.utf8border = function(e2, t2) {
            var r2;
            for ((t2 = t2 || e2.length) > e2.length && (t2 = e2.length), r2 = t2 - 1; 0 <= r2 && 128 == (192 & e2[r2]); ) r2--;
            return r2 < 0 ? t2 : 0 === r2 ? t2 : r2 + u[e2[r2]] > t2 ? r2 : t2;
          };
        }, { "./common": 41 }], 43: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2, r2, n) {
            for (var i = 65535 & e2 | 0, s = e2 >>> 16 & 65535 | 0, a = 0; 0 !== r2; ) {
              for (r2 -= a = 2e3 < r2 ? 2e3 : r2; s = s + (i = i + t2[n++] | 0) | 0, --a; ) ;
              i %= 65521, s %= 65521;
            }
            return i | s << 16 | 0;
          };
        }, {}], 44: [function(e, t, r) {
          "use strict";
          t.exports = { Z_NO_FLUSH: 0, Z_PARTIAL_FLUSH: 1, Z_SYNC_FLUSH: 2, Z_FULL_FLUSH: 3, Z_FINISH: 4, Z_BLOCK: 5, Z_TREES: 6, Z_OK: 0, Z_STREAM_END: 1, Z_NEED_DICT: 2, Z_ERRNO: -1, Z_STREAM_ERROR: -2, Z_DATA_ERROR: -3, Z_BUF_ERROR: -5, Z_NO_COMPRESSION: 0, Z_BEST_SPEED: 1, Z_BEST_COMPRESSION: 9, Z_DEFAULT_COMPRESSION: -1, Z_FILTERED: 1, Z_HUFFMAN_ONLY: 2, Z_RLE: 3, Z_FIXED: 4, Z_DEFAULT_STRATEGY: 0, Z_BINARY: 0, Z_TEXT: 1, Z_UNKNOWN: 2, Z_DEFLATED: 8 };
        }, {}], 45: [function(e, t, r) {
          "use strict";
          var o = (function() {
            for (var e2, t2 = [], r2 = 0; r2 < 256; r2++) {
              e2 = r2;
              for (var n = 0; n < 8; n++) e2 = 1 & e2 ? 3988292384 ^ e2 >>> 1 : e2 >>> 1;
              t2[r2] = e2;
            }
            return t2;
          })();
          t.exports = function(e2, t2, r2, n) {
            var i = o, s = n + r2;
            e2 ^= -1;
            for (var a = n; a < s; a++) e2 = e2 >>> 8 ^ i[255 & (e2 ^ t2[a])];
            return -1 ^ e2;
          };
        }, {}], 46: [function(e, t, r) {
          "use strict";
          var h, c = e("../utils/common"), u = e("./trees"), d = e("./adler32"), p = e("./crc32"), n = e("./messages"), l = 0, f = 4, m = 0, _ = -2, g = -1, b = 4, i = 2, v = 8, y = 9, s = 286, a = 30, o = 19, w = 2 * s + 1, k = 15, x = 3, S = 258, z = S + x + 1, C = 42, E = 113, A = 1, I = 2, O = 3, B = 4;
          function R(e2, t2) {
            return e2.msg = n[t2], t2;
          }
          function T(e2) {
            return (e2 << 1) - (4 < e2 ? 9 : 0);
          }
          function D(e2) {
            for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
          }
          function F(e2) {
            var t2 = e2.state, r2 = t2.pending;
            r2 > e2.avail_out && (r2 = e2.avail_out), 0 !== r2 && (c.arraySet(e2.output, t2.pending_buf, t2.pending_out, r2, e2.next_out), e2.next_out += r2, t2.pending_out += r2, e2.total_out += r2, e2.avail_out -= r2, t2.pending -= r2, 0 === t2.pending && (t2.pending_out = 0));
          }
          function N(e2, t2) {
            u._tr_flush_block(e2, 0 <= e2.block_start ? e2.block_start : -1, e2.strstart - e2.block_start, t2), e2.block_start = e2.strstart, F(e2.strm);
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = t2;
          }
          function P(e2, t2) {
            e2.pending_buf[e2.pending++] = t2 >>> 8 & 255, e2.pending_buf[e2.pending++] = 255 & t2;
          }
          function L(e2, t2) {
            var r2, n2, i2 = e2.max_chain_length, s2 = e2.strstart, a2 = e2.prev_length, o2 = e2.nice_match, h2 = e2.strstart > e2.w_size - z ? e2.strstart - (e2.w_size - z) : 0, u2 = e2.window, l2 = e2.w_mask, f2 = e2.prev, c2 = e2.strstart + S, d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
            e2.prev_length >= e2.good_match && (i2 >>= 2), o2 > e2.lookahead && (o2 = e2.lookahead);
            do {
              if (u2[(r2 = t2) + a2] === p2 && u2[r2 + a2 - 1] === d2 && u2[r2] === u2[s2] && u2[++r2] === u2[s2 + 1]) {
                s2 += 2, r2++;
                do {
                } while (u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && u2[++s2] === u2[++r2] && s2 < c2);
                if (n2 = S - (c2 - s2), s2 = c2 - S, a2 < n2) {
                  if (e2.match_start = t2, o2 <= (a2 = n2)) break;
                  d2 = u2[s2 + a2 - 1], p2 = u2[s2 + a2];
                }
              }
            } while ((t2 = f2[t2 & l2]) > h2 && 0 != --i2);
            return a2 <= e2.lookahead ? a2 : e2.lookahead;
          }
          function j(e2) {
            var t2, r2, n2, i2, s2, a2, o2, h2, u2, l2, f2 = e2.w_size;
            do {
              if (i2 = e2.window_size - e2.lookahead - e2.strstart, e2.strstart >= f2 + (f2 - z)) {
                for (c.arraySet(e2.window, e2.window, f2, f2, 0), e2.match_start -= f2, e2.strstart -= f2, e2.block_start -= f2, t2 = r2 = e2.hash_size; n2 = e2.head[--t2], e2.head[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
                for (t2 = r2 = f2; n2 = e2.prev[--t2], e2.prev[t2] = f2 <= n2 ? n2 - f2 : 0, --r2; ) ;
                i2 += f2;
              }
              if (0 === e2.strm.avail_in) break;
              if (a2 = e2.strm, o2 = e2.window, h2 = e2.strstart + e2.lookahead, u2 = i2, l2 = void 0, l2 = a2.avail_in, u2 < l2 && (l2 = u2), r2 = 0 === l2 ? 0 : (a2.avail_in -= l2, c.arraySet(o2, a2.input, a2.next_in, l2, h2), 1 === a2.state.wrap ? a2.adler = d(a2.adler, o2, l2, h2) : 2 === a2.state.wrap && (a2.adler = p(a2.adler, o2, l2, h2)), a2.next_in += l2, a2.total_in += l2, l2), e2.lookahead += r2, e2.lookahead + e2.insert >= x) for (s2 = e2.strstart - e2.insert, e2.ins_h = e2.window[s2], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + 1]) & e2.hash_mask; e2.insert && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[s2 + x - 1]) & e2.hash_mask, e2.prev[s2 & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = s2, s2++, e2.insert--, !(e2.lookahead + e2.insert < x)); ) ;
            } while (e2.lookahead < z && 0 !== e2.strm.avail_in);
          }
          function Z(e2, t2) {
            for (var r2, n2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 !== r2 && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2)), e2.match_length >= x) if (n2 = u._tr_tally(e2, e2.strstart - e2.match_start, e2.match_length - x), e2.lookahead -= e2.match_length, e2.match_length <= e2.max_lazy_match && e2.lookahead >= x) {
                for (e2.match_length--; e2.strstart++, e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart, 0 != --e2.match_length; ) ;
                e2.strstart++;
              } else e2.strstart += e2.match_length, e2.match_length = 0, e2.ins_h = e2.window[e2.strstart], e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + 1]) & e2.hash_mask;
              else n2 = u._tr_tally(e2, 0, e2.window[e2.strstart]), e2.lookahead--, e2.strstart++;
              if (n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            }
            return e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function W(e2, t2) {
            for (var r2, n2, i2; ; ) {
              if (e2.lookahead < z) {
                if (j(e2), e2.lookahead < z && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              if (r2 = 0, e2.lookahead >= x && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), e2.prev_length = e2.match_length, e2.prev_match = e2.match_start, e2.match_length = x - 1, 0 !== r2 && e2.prev_length < e2.max_lazy_match && e2.strstart - r2 <= e2.w_size - z && (e2.match_length = L(e2, r2), e2.match_length <= 5 && (1 === e2.strategy || e2.match_length === x && 4096 < e2.strstart - e2.match_start) && (e2.match_length = x - 1)), e2.prev_length >= x && e2.match_length <= e2.prev_length) {
                for (i2 = e2.strstart + e2.lookahead - x, n2 = u._tr_tally(e2, e2.strstart - 1 - e2.prev_match, e2.prev_length - x), e2.lookahead -= e2.prev_length - 1, e2.prev_length -= 2; ++e2.strstart <= i2 && (e2.ins_h = (e2.ins_h << e2.hash_shift ^ e2.window[e2.strstart + x - 1]) & e2.hash_mask, r2 = e2.prev[e2.strstart & e2.w_mask] = e2.head[e2.ins_h], e2.head[e2.ins_h] = e2.strstart), 0 != --e2.prev_length; ) ;
                if (e2.match_available = 0, e2.match_length = x - 1, e2.strstart++, n2 && (N(e2, false), 0 === e2.strm.avail_out)) return A;
              } else if (e2.match_available) {
                if ((n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1])) && N(e2, false), e2.strstart++, e2.lookahead--, 0 === e2.strm.avail_out) return A;
              } else e2.match_available = 1, e2.strstart++, e2.lookahead--;
            }
            return e2.match_available && (n2 = u._tr_tally(e2, 0, e2.window[e2.strstart - 1]), e2.match_available = 0), e2.insert = e2.strstart < x - 1 ? e2.strstart : x - 1, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : e2.last_lit && (N(e2, false), 0 === e2.strm.avail_out) ? A : I;
          }
          function M(e2, t2, r2, n2, i2) {
            this.good_length = e2, this.max_lazy = t2, this.nice_length = r2, this.max_chain = n2, this.func = i2;
          }
          function H() {
            this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = v, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new c.Buf16(2 * w), this.dyn_dtree = new c.Buf16(2 * (2 * a + 1)), this.bl_tree = new c.Buf16(2 * (2 * o + 1)), D(this.dyn_ltree), D(this.dyn_dtree), D(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new c.Buf16(k + 1), this.heap = new c.Buf16(2 * s + 1), D(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new c.Buf16(2 * s + 1), D(this.depth), this.l_buf = 0, this.lit_bufsize = 0, this.last_lit = 0, this.d_buf = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
          }
          function G(e2) {
            var t2;
            return e2 && e2.state ? (e2.total_in = e2.total_out = 0, e2.data_type = i, (t2 = e2.state).pending = 0, t2.pending_out = 0, t2.wrap < 0 && (t2.wrap = -t2.wrap), t2.status = t2.wrap ? C : E, e2.adler = 2 === t2.wrap ? 0 : 1, t2.last_flush = l, u._tr_init(t2), m) : R(e2, _);
          }
          function K(e2) {
            var t2 = G(e2);
            return t2 === m && (function(e3) {
              e3.window_size = 2 * e3.w_size, D(e3.head), e3.max_lazy_match = h[e3.level].max_lazy, e3.good_match = h[e3.level].good_length, e3.nice_match = h[e3.level].nice_length, e3.max_chain_length = h[e3.level].max_chain, e3.strstart = 0, e3.block_start = 0, e3.lookahead = 0, e3.insert = 0, e3.match_length = e3.prev_length = x - 1, e3.match_available = 0, e3.ins_h = 0;
            })(e2.state), t2;
          }
          function Y(e2, t2, r2, n2, i2, s2) {
            if (!e2) return _;
            var a2 = 1;
            if (t2 === g && (t2 = 6), n2 < 0 ? (a2 = 0, n2 = -n2) : 15 < n2 && (a2 = 2, n2 -= 16), i2 < 1 || y < i2 || r2 !== v || n2 < 8 || 15 < n2 || t2 < 0 || 9 < t2 || s2 < 0 || b < s2) return R(e2, _);
            8 === n2 && (n2 = 9);
            var o2 = new H();
            return (e2.state = o2).strm = e2, o2.wrap = a2, o2.gzhead = null, o2.w_bits = n2, o2.w_size = 1 << o2.w_bits, o2.w_mask = o2.w_size - 1, o2.hash_bits = i2 + 7, o2.hash_size = 1 << o2.hash_bits, o2.hash_mask = o2.hash_size - 1, o2.hash_shift = ~~((o2.hash_bits + x - 1) / x), o2.window = new c.Buf8(2 * o2.w_size), o2.head = new c.Buf16(o2.hash_size), o2.prev = new c.Buf16(o2.w_size), o2.lit_bufsize = 1 << i2 + 6, o2.pending_buf_size = 4 * o2.lit_bufsize, o2.pending_buf = new c.Buf8(o2.pending_buf_size), o2.d_buf = 1 * o2.lit_bufsize, o2.l_buf = 3 * o2.lit_bufsize, o2.level = t2, o2.strategy = s2, o2.method = r2, K(e2);
          }
          h = [new M(0, 0, 0, 0, function(e2, t2) {
            var r2 = 65535;
            for (r2 > e2.pending_buf_size - 5 && (r2 = e2.pending_buf_size - 5); ; ) {
              if (e2.lookahead <= 1) {
                if (j(e2), 0 === e2.lookahead && t2 === l) return A;
                if (0 === e2.lookahead) break;
              }
              e2.strstart += e2.lookahead, e2.lookahead = 0;
              var n2 = e2.block_start + r2;
              if ((0 === e2.strstart || e2.strstart >= n2) && (e2.lookahead = e2.strstart - n2, e2.strstart = n2, N(e2, false), 0 === e2.strm.avail_out)) return A;
              if (e2.strstart - e2.block_start >= e2.w_size - z && (N(e2, false), 0 === e2.strm.avail_out)) return A;
            }
            return e2.insert = 0, t2 === f ? (N(e2, true), 0 === e2.strm.avail_out ? O : B) : (e2.strstart > e2.block_start && (N(e2, false), e2.strm.avail_out), A);
          }), new M(4, 4, 8, 4, Z), new M(4, 5, 16, 8, Z), new M(4, 6, 32, 32, Z), new M(4, 4, 16, 16, W), new M(8, 16, 32, 32, W), new M(8, 16, 128, 128, W), new M(8, 32, 128, 256, W), new M(32, 128, 258, 1024, W), new M(32, 258, 258, 4096, W)], r.deflateInit = function(e2, t2) {
            return Y(e2, t2, v, 15, 8, 0);
          }, r.deflateInit2 = Y, r.deflateReset = K, r.deflateResetKeep = G, r.deflateSetHeader = function(e2, t2) {
            return e2 && e2.state ? 2 !== e2.state.wrap ? _ : (e2.state.gzhead = t2, m) : _;
          }, r.deflate = function(e2, t2) {
            var r2, n2, i2, s2;
            if (!e2 || !e2.state || 5 < t2 || t2 < 0) return e2 ? R(e2, _) : _;
            if (n2 = e2.state, !e2.output || !e2.input && 0 !== e2.avail_in || 666 === n2.status && t2 !== f) return R(e2, 0 === e2.avail_out ? -5 : _);
            if (n2.strm = e2, r2 = n2.last_flush, n2.last_flush = t2, n2.status === C) if (2 === n2.wrap) e2.adler = 0, U(n2, 31), U(n2, 139), U(n2, 8), n2.gzhead ? (U(n2, (n2.gzhead.text ? 1 : 0) + (n2.gzhead.hcrc ? 2 : 0) + (n2.gzhead.extra ? 4 : 0) + (n2.gzhead.name ? 8 : 0) + (n2.gzhead.comment ? 16 : 0)), U(n2, 255 & n2.gzhead.time), U(n2, n2.gzhead.time >> 8 & 255), U(n2, n2.gzhead.time >> 16 & 255), U(n2, n2.gzhead.time >> 24 & 255), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 255 & n2.gzhead.os), n2.gzhead.extra && n2.gzhead.extra.length && (U(n2, 255 & n2.gzhead.extra.length), U(n2, n2.gzhead.extra.length >> 8 & 255)), n2.gzhead.hcrc && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending, 0)), n2.gzindex = 0, n2.status = 69) : (U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 0), U(n2, 9 === n2.level ? 2 : 2 <= n2.strategy || n2.level < 2 ? 4 : 0), U(n2, 3), n2.status = E);
            else {
              var a2 = v + (n2.w_bits - 8 << 4) << 8;
              a2 |= (2 <= n2.strategy || n2.level < 2 ? 0 : n2.level < 6 ? 1 : 6 === n2.level ? 2 : 3) << 6, 0 !== n2.strstart && (a2 |= 32), a2 += 31 - a2 % 31, n2.status = E, P(n2, a2), 0 !== n2.strstart && (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), e2.adler = 1;
            }
            if (69 === n2.status) if (n2.gzhead.extra) {
              for (i2 = n2.pending; n2.gzindex < (65535 & n2.gzhead.extra.length) && (n2.pending !== n2.pending_buf_size || (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending !== n2.pending_buf_size)); ) U(n2, 255 & n2.gzhead.extra[n2.gzindex]), n2.gzindex++;
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), n2.gzindex === n2.gzhead.extra.length && (n2.gzindex = 0, n2.status = 73);
            } else n2.status = 73;
            if (73 === n2.status) if (n2.gzhead.name) {
              i2 = n2.pending;
              do {
                if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                  s2 = 1;
                  break;
                }
                s2 = n2.gzindex < n2.gzhead.name.length ? 255 & n2.gzhead.name.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
              } while (0 !== s2);
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.gzindex = 0, n2.status = 91);
            } else n2.status = 91;
            if (91 === n2.status) if (n2.gzhead.comment) {
              i2 = n2.pending;
              do {
                if (n2.pending === n2.pending_buf_size && (n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), F(e2), i2 = n2.pending, n2.pending === n2.pending_buf_size)) {
                  s2 = 1;
                  break;
                }
                s2 = n2.gzindex < n2.gzhead.comment.length ? 255 & n2.gzhead.comment.charCodeAt(n2.gzindex++) : 0, U(n2, s2);
              } while (0 !== s2);
              n2.gzhead.hcrc && n2.pending > i2 && (e2.adler = p(e2.adler, n2.pending_buf, n2.pending - i2, i2)), 0 === s2 && (n2.status = 103);
            } else n2.status = 103;
            if (103 === n2.status && (n2.gzhead.hcrc ? (n2.pending + 2 > n2.pending_buf_size && F(e2), n2.pending + 2 <= n2.pending_buf_size && (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), e2.adler = 0, n2.status = E)) : n2.status = E), 0 !== n2.pending) {
              if (F(e2), 0 === e2.avail_out) return n2.last_flush = -1, m;
            } else if (0 === e2.avail_in && T(t2) <= T(r2) && t2 !== f) return R(e2, -5);
            if (666 === n2.status && 0 !== e2.avail_in) return R(e2, -5);
            if (0 !== e2.avail_in || 0 !== n2.lookahead || t2 !== l && 666 !== n2.status) {
              var o2 = 2 === n2.strategy ? (function(e3, t3) {
                for (var r3; ; ) {
                  if (0 === e3.lookahead && (j(e3), 0 === e3.lookahead)) {
                    if (t3 === l) return A;
                    break;
                  }
                  if (e3.match_length = 0, r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++, r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              })(n2, t2) : 3 === n2.strategy ? (function(e3, t3) {
                for (var r3, n3, i3, s3, a3 = e3.window; ; ) {
                  if (e3.lookahead <= S) {
                    if (j(e3), e3.lookahead <= S && t3 === l) return A;
                    if (0 === e3.lookahead) break;
                  }
                  if (e3.match_length = 0, e3.lookahead >= x && 0 < e3.strstart && (n3 = a3[i3 = e3.strstart - 1]) === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3]) {
                    s3 = e3.strstart + S;
                    do {
                    } while (n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && n3 === a3[++i3] && i3 < s3);
                    e3.match_length = S - (s3 - i3), e3.match_length > e3.lookahead && (e3.match_length = e3.lookahead);
                  }
                  if (e3.match_length >= x ? (r3 = u._tr_tally(e3, 1, e3.match_length - x), e3.lookahead -= e3.match_length, e3.strstart += e3.match_length, e3.match_length = 0) : (r3 = u._tr_tally(e3, 0, e3.window[e3.strstart]), e3.lookahead--, e3.strstart++), r3 && (N(e3, false), 0 === e3.strm.avail_out)) return A;
                }
                return e3.insert = 0, t3 === f ? (N(e3, true), 0 === e3.strm.avail_out ? O : B) : e3.last_lit && (N(e3, false), 0 === e3.strm.avail_out) ? A : I;
              })(n2, t2) : h[n2.level].func(n2, t2);
              if (o2 !== O && o2 !== B || (n2.status = 666), o2 === A || o2 === O) return 0 === e2.avail_out && (n2.last_flush = -1), m;
              if (o2 === I && (1 === t2 ? u._tr_align(n2) : 5 !== t2 && (u._tr_stored_block(n2, 0, 0, false), 3 === t2 && (D(n2.head), 0 === n2.lookahead && (n2.strstart = 0, n2.block_start = 0, n2.insert = 0))), F(e2), 0 === e2.avail_out)) return n2.last_flush = -1, m;
            }
            return t2 !== f ? m : n2.wrap <= 0 ? 1 : (2 === n2.wrap ? (U(n2, 255 & e2.adler), U(n2, e2.adler >> 8 & 255), U(n2, e2.adler >> 16 & 255), U(n2, e2.adler >> 24 & 255), U(n2, 255 & e2.total_in), U(n2, e2.total_in >> 8 & 255), U(n2, e2.total_in >> 16 & 255), U(n2, e2.total_in >> 24 & 255)) : (P(n2, e2.adler >>> 16), P(n2, 65535 & e2.adler)), F(e2), 0 < n2.wrap && (n2.wrap = -n2.wrap), 0 !== n2.pending ? m : 1);
          }, r.deflateEnd = function(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state.status) !== C && 69 !== t2 && 73 !== t2 && 91 !== t2 && 103 !== t2 && t2 !== E && 666 !== t2 ? R(e2, _) : (e2.state = null, t2 === E ? R(e2, -3) : m) : _;
          }, r.deflateSetDictionary = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2 = t2.length;
            if (!e2 || !e2.state) return _;
            if (2 === (s2 = (r2 = e2.state).wrap) || 1 === s2 && r2.status !== C || r2.lookahead) return _;
            for (1 === s2 && (e2.adler = d(e2.adler, t2, l2, 0)), r2.wrap = 0, l2 >= r2.w_size && (0 === s2 && (D(r2.head), r2.strstart = 0, r2.block_start = 0, r2.insert = 0), u2 = new c.Buf8(r2.w_size), c.arraySet(u2, t2, l2 - r2.w_size, r2.w_size, 0), t2 = u2, l2 = r2.w_size), a2 = e2.avail_in, o2 = e2.next_in, h2 = e2.input, e2.avail_in = l2, e2.next_in = 0, e2.input = t2, j(r2); r2.lookahead >= x; ) {
              for (n2 = r2.strstart, i2 = r2.lookahead - (x - 1); r2.ins_h = (r2.ins_h << r2.hash_shift ^ r2.window[n2 + x - 1]) & r2.hash_mask, r2.prev[n2 & r2.w_mask] = r2.head[r2.ins_h], r2.head[r2.ins_h] = n2, n2++, --i2; ) ;
              r2.strstart = n2, r2.lookahead = x - 1, j(r2);
            }
            return r2.strstart += r2.lookahead, r2.block_start = r2.strstart, r2.insert = r2.lookahead, r2.lookahead = 0, r2.match_length = r2.prev_length = x - 1, r2.match_available = 0, e2.next_in = o2, e2.input = h2, e2.avail_in = a2, r2.wrap = s2, m;
          }, r.deflateInfo = "pako deflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./messages": 51, "./trees": 52 }], 47: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = false;
          };
        }, {}], 48: [function(e, t, r) {
          "use strict";
          t.exports = function(e2, t2) {
            var r2, n, i, s, a, o, h, u, l, f, c, d, p, m, _, g, b, v, y, w, k, x, S, z, C;
            r2 = e2.state, n = e2.next_in, z = e2.input, i = n + (e2.avail_in - 5), s = e2.next_out, C = e2.output, a = s - (t2 - e2.avail_out), o = s + (e2.avail_out - 257), h = r2.dmax, u = r2.wsize, l = r2.whave, f = r2.wnext, c = r2.window, d = r2.hold, p = r2.bits, m = r2.lencode, _ = r2.distcode, g = (1 << r2.lenbits) - 1, b = (1 << r2.distbits) - 1;
            e: do {
              p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = m[d & g];
              t: for (; ; ) {
                if (d >>>= y = v >>> 24, p -= y, 0 === (y = v >>> 16 & 255)) C[s++] = 65535 & v;
                else {
                  if (!(16 & y)) {
                    if (0 == (64 & y)) {
                      v = m[(65535 & v) + (d & (1 << y) - 1)];
                      continue t;
                    }
                    if (32 & y) {
                      r2.mode = 12;
                      break e;
                    }
                    e2.msg = "invalid literal/length code", r2.mode = 30;
                    break e;
                  }
                  w = 65535 & v, (y &= 15) && (p < y && (d += z[n++] << p, p += 8), w += d & (1 << y) - 1, d >>>= y, p -= y), p < 15 && (d += z[n++] << p, p += 8, d += z[n++] << p, p += 8), v = _[d & b];
                  r: for (; ; ) {
                    if (d >>>= y = v >>> 24, p -= y, !(16 & (y = v >>> 16 & 255))) {
                      if (0 == (64 & y)) {
                        v = _[(65535 & v) + (d & (1 << y) - 1)];
                        continue r;
                      }
                      e2.msg = "invalid distance code", r2.mode = 30;
                      break e;
                    }
                    if (k = 65535 & v, p < (y &= 15) && (d += z[n++] << p, (p += 8) < y && (d += z[n++] << p, p += 8)), h < (k += d & (1 << y) - 1)) {
                      e2.msg = "invalid distance too far back", r2.mode = 30;
                      break e;
                    }
                    if (d >>>= y, p -= y, (y = s - a) < k) {
                      if (l < (y = k - y) && r2.sane) {
                        e2.msg = "invalid distance too far back", r2.mode = 30;
                        break e;
                      }
                      if (S = c, (x = 0) === f) {
                        if (x += u - y, y < w) {
                          for (w -= y; C[s++] = c[x++], --y; ) ;
                          x = s - k, S = C;
                        }
                      } else if (f < y) {
                        if (x += u + f - y, (y -= f) < w) {
                          for (w -= y; C[s++] = c[x++], --y; ) ;
                          if (x = 0, f < w) {
                            for (w -= y = f; C[s++] = c[x++], --y; ) ;
                            x = s - k, S = C;
                          }
                        }
                      } else if (x += f - y, y < w) {
                        for (w -= y; C[s++] = c[x++], --y; ) ;
                        x = s - k, S = C;
                      }
                      for (; 2 < w; ) C[s++] = S[x++], C[s++] = S[x++], C[s++] = S[x++], w -= 3;
                      w && (C[s++] = S[x++], 1 < w && (C[s++] = S[x++]));
                    } else {
                      for (x = s - k; C[s++] = C[x++], C[s++] = C[x++], C[s++] = C[x++], 2 < (w -= 3); ) ;
                      w && (C[s++] = C[x++], 1 < w && (C[s++] = C[x++]));
                    }
                    break;
                  }
                }
                break;
              }
            } while (n < i && s < o);
            n -= w = p >> 3, d &= (1 << (p -= w << 3)) - 1, e2.next_in = n, e2.next_out = s, e2.avail_in = n < i ? i - n + 5 : 5 - (n - i), e2.avail_out = s < o ? o - s + 257 : 257 - (s - o), r2.hold = d, r2.bits = p;
          };
        }, {}], 49: [function(e, t, r) {
          "use strict";
          var I = e("../utils/common"), O = e("./adler32"), B = e("./crc32"), R = e("./inffast"), T = e("./inftrees"), D = 1, F = 2, N = 0, U = -2, P = 1, n = 852, i = 592;
          function L(e2) {
            return (e2 >>> 24 & 255) + (e2 >>> 8 & 65280) + ((65280 & e2) << 8) + ((255 & e2) << 24);
          }
          function s() {
            this.mode = 0, this.last = false, this.wrap = 0, this.havedict = false, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new I.Buf16(320), this.work = new I.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
          }
          function a(e2) {
            var t2;
            return e2 && e2.state ? (t2 = e2.state, e2.total_in = e2.total_out = t2.total = 0, e2.msg = "", t2.wrap && (e2.adler = 1 & t2.wrap), t2.mode = P, t2.last = 0, t2.havedict = 0, t2.dmax = 32768, t2.head = null, t2.hold = 0, t2.bits = 0, t2.lencode = t2.lendyn = new I.Buf32(n), t2.distcode = t2.distdyn = new I.Buf32(i), t2.sane = 1, t2.back = -1, N) : U;
          }
          function o(e2) {
            var t2;
            return e2 && e2.state ? ((t2 = e2.state).wsize = 0, t2.whave = 0, t2.wnext = 0, a(e2)) : U;
          }
          function h(e2, t2) {
            var r2, n2;
            return e2 && e2.state ? (n2 = e2.state, t2 < 0 ? (r2 = 0, t2 = -t2) : (r2 = 1 + (t2 >> 4), t2 < 48 && (t2 &= 15)), t2 && (t2 < 8 || 15 < t2) ? U : (null !== n2.window && n2.wbits !== t2 && (n2.window = null), n2.wrap = r2, n2.wbits = t2, o(e2))) : U;
          }
          function u(e2, t2) {
            var r2, n2;
            return e2 ? (n2 = new s(), (e2.state = n2).window = null, (r2 = h(e2, t2)) !== N && (e2.state = null), r2) : U;
          }
          var l, f, c = true;
          function j(e2) {
            if (c) {
              var t2;
              for (l = new I.Buf32(512), f = new I.Buf32(32), t2 = 0; t2 < 144; ) e2.lens[t2++] = 8;
              for (; t2 < 256; ) e2.lens[t2++] = 9;
              for (; t2 < 280; ) e2.lens[t2++] = 7;
              for (; t2 < 288; ) e2.lens[t2++] = 8;
              for (T(D, e2.lens, 0, 288, l, 0, e2.work, { bits: 9 }), t2 = 0; t2 < 32; ) e2.lens[t2++] = 5;
              T(F, e2.lens, 0, 32, f, 0, e2.work, { bits: 5 }), c = false;
            }
            e2.lencode = l, e2.lenbits = 9, e2.distcode = f, e2.distbits = 5;
          }
          function Z(e2, t2, r2, n2) {
            var i2, s2 = e2.state;
            return null === s2.window && (s2.wsize = 1 << s2.wbits, s2.wnext = 0, s2.whave = 0, s2.window = new I.Buf8(s2.wsize)), n2 >= s2.wsize ? (I.arraySet(s2.window, t2, r2 - s2.wsize, s2.wsize, 0), s2.wnext = 0, s2.whave = s2.wsize) : (n2 < (i2 = s2.wsize - s2.wnext) && (i2 = n2), I.arraySet(s2.window, t2, r2 - n2, i2, s2.wnext), (n2 -= i2) ? (I.arraySet(s2.window, t2, r2 - n2, n2, 0), s2.wnext = n2, s2.whave = s2.wsize) : (s2.wnext += i2, s2.wnext === s2.wsize && (s2.wnext = 0), s2.whave < s2.wsize && (s2.whave += i2))), 0;
          }
          r.inflateReset = o, r.inflateReset2 = h, r.inflateResetKeep = a, r.inflateInit = function(e2) {
            return u(e2, 15);
          }, r.inflateInit2 = u, r.inflate = function(e2, t2) {
            var r2, n2, i2, s2, a2, o2, h2, u2, l2, f2, c2, d, p, m, _, g, b, v, y, w, k, x, S, z, C = 0, E = new I.Buf8(4), A = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
            if (!e2 || !e2.state || !e2.output || !e2.input && 0 !== e2.avail_in) return U;
            12 === (r2 = e2.state).mode && (r2.mode = 13), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, f2 = o2, c2 = h2, x = N;
            e: for (; ; ) switch (r2.mode) {
              case P:
                if (0 === r2.wrap) {
                  r2.mode = 13;
                  break;
                }
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (2 & r2.wrap && 35615 === u2) {
                  E[r2.check = 0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0), l2 = u2 = 0, r2.mode = 2;
                  break;
                }
                if (r2.flags = 0, r2.head && (r2.head.done = false), !(1 & r2.wrap) || (((255 & u2) << 8) + (u2 >> 8)) % 31) {
                  e2.msg = "incorrect header check", r2.mode = 30;
                  break;
                }
                if (8 != (15 & u2)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (l2 -= 4, k = 8 + (15 & (u2 >>>= 4)), 0 === r2.wbits) r2.wbits = k;
                else if (k > r2.wbits) {
                  e2.msg = "invalid window size", r2.mode = 30;
                  break;
                }
                r2.dmax = 1 << k, e2.adler = r2.check = 1, r2.mode = 512 & u2 ? 10 : 12, l2 = u2 = 0;
                break;
              case 2:
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.flags = u2, 8 != (255 & r2.flags)) {
                  e2.msg = "unknown compression method", r2.mode = 30;
                  break;
                }
                if (57344 & r2.flags) {
                  e2.msg = "unknown header flags set", r2.mode = 30;
                  break;
                }
                r2.head && (r2.head.text = u2 >> 8 & 1), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 3;
              case 3:
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.time = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, E[2] = u2 >>> 16 & 255, E[3] = u2 >>> 24 & 255, r2.check = B(r2.check, E, 4, 0)), l2 = u2 = 0, r2.mode = 4;
              case 4:
                for (; l2 < 16; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                r2.head && (r2.head.xflags = 255 & u2, r2.head.os = u2 >> 8), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0, r2.mode = 5;
              case 5:
                if (1024 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length = u2, r2.head && (r2.head.extra_len = u2), 512 & r2.flags && (E[0] = 255 & u2, E[1] = u2 >>> 8 & 255, r2.check = B(r2.check, E, 2, 0)), l2 = u2 = 0;
                } else r2.head && (r2.head.extra = null);
                r2.mode = 6;
              case 6:
                if (1024 & r2.flags && (o2 < (d = r2.length) && (d = o2), d && (r2.head && (k = r2.head.extra_len - r2.length, r2.head.extra || (r2.head.extra = new Array(r2.head.extra_len)), I.arraySet(r2.head.extra, n2, s2, d, k)), 512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, r2.length -= d), r2.length)) break e;
                r2.length = 0, r2.mode = 7;
              case 7:
                if (2048 & r2.flags) {
                  if (0 === o2) break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.name += String.fromCharCode(k)), k && d < o2; ) ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
                } else r2.head && (r2.head.name = null);
                r2.length = 0, r2.mode = 8;
              case 8:
                if (4096 & r2.flags) {
                  if (0 === o2) break e;
                  for (d = 0; k = n2[s2 + d++], r2.head && k && r2.length < 65536 && (r2.head.comment += String.fromCharCode(k)), k && d < o2; ) ;
                  if (512 & r2.flags && (r2.check = B(r2.check, n2, d, s2)), o2 -= d, s2 += d, k) break e;
                } else r2.head && (r2.head.comment = null);
                r2.mode = 9;
              case 9:
                if (512 & r2.flags) {
                  for (; l2 < 16; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (65535 & r2.check)) {
                    e2.msg = "header crc mismatch", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.head && (r2.head.hcrc = r2.flags >> 9 & 1, r2.head.done = true), e2.adler = r2.check = 0, r2.mode = 12;
                break;
              case 10:
                for (; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                e2.adler = r2.check = L(u2), l2 = u2 = 0, r2.mode = 11;
              case 11:
                if (0 === r2.havedict) return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, 2;
                e2.adler = r2.check = 1, r2.mode = 12;
              case 12:
                if (5 === t2 || 6 === t2) break e;
              case 13:
                if (r2.last) {
                  u2 >>>= 7 & l2, l2 -= 7 & l2, r2.mode = 27;
                  break;
                }
                for (; l2 < 3; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                switch (r2.last = 1 & u2, l2 -= 1, 3 & (u2 >>>= 1)) {
                  case 0:
                    r2.mode = 14;
                    break;
                  case 1:
                    if (j(r2), r2.mode = 20, 6 !== t2) break;
                    u2 >>>= 2, l2 -= 2;
                    break e;
                  case 2:
                    r2.mode = 17;
                    break;
                  case 3:
                    e2.msg = "invalid block type", r2.mode = 30;
                }
                u2 >>>= 2, l2 -= 2;
                break;
              case 14:
                for (u2 >>>= 7 & l2, l2 -= 7 & l2; l2 < 32; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if ((65535 & u2) != (u2 >>> 16 ^ 65535)) {
                  e2.msg = "invalid stored block lengths", r2.mode = 30;
                  break;
                }
                if (r2.length = 65535 & u2, l2 = u2 = 0, r2.mode = 15, 6 === t2) break e;
              case 15:
                r2.mode = 16;
              case 16:
                if (d = r2.length) {
                  if (o2 < d && (d = o2), h2 < d && (d = h2), 0 === d) break e;
                  I.arraySet(i2, n2, s2, d, a2), o2 -= d, s2 += d, h2 -= d, a2 += d, r2.length -= d;
                  break;
                }
                r2.mode = 12;
                break;
              case 17:
                for (; l2 < 14; ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (r2.nlen = 257 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ndist = 1 + (31 & u2), u2 >>>= 5, l2 -= 5, r2.ncode = 4 + (15 & u2), u2 >>>= 4, l2 -= 4, 286 < r2.nlen || 30 < r2.ndist) {
                  e2.msg = "too many length or distance symbols", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 18;
              case 18:
                for (; r2.have < r2.ncode; ) {
                  for (; l2 < 3; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.lens[A[r2.have++]] = 7 & u2, u2 >>>= 3, l2 -= 3;
                }
                for (; r2.have < 19; ) r2.lens[A[r2.have++]] = 0;
                if (r2.lencode = r2.lendyn, r2.lenbits = 7, S = { bits: r2.lenbits }, x = T(0, r2.lens, 0, 19, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid code lengths set", r2.mode = 30;
                  break;
                }
                r2.have = 0, r2.mode = 19;
              case 19:
                for (; r2.have < r2.nlen + r2.ndist; ) {
                  for (; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (b < 16) u2 >>>= _, l2 -= _, r2.lens[r2.have++] = b;
                  else {
                    if (16 === b) {
                      for (z = _ + 2; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      if (u2 >>>= _, l2 -= _, 0 === r2.have) {
                        e2.msg = "invalid bit length repeat", r2.mode = 30;
                        break;
                      }
                      k = r2.lens[r2.have - 1], d = 3 + (3 & u2), u2 >>>= 2, l2 -= 2;
                    } else if (17 === b) {
                      for (z = _ + 3; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 3 + (7 & (u2 >>>= _)), u2 >>>= 3, l2 -= 3;
                    } else {
                      for (z = _ + 7; l2 < z; ) {
                        if (0 === o2) break e;
                        o2--, u2 += n2[s2++] << l2, l2 += 8;
                      }
                      l2 -= _, k = 0, d = 11 + (127 & (u2 >>>= _)), u2 >>>= 7, l2 -= 7;
                    }
                    if (r2.have + d > r2.nlen + r2.ndist) {
                      e2.msg = "invalid bit length repeat", r2.mode = 30;
                      break;
                    }
                    for (; d--; ) r2.lens[r2.have++] = k;
                  }
                }
                if (30 === r2.mode) break;
                if (0 === r2.lens[256]) {
                  e2.msg = "invalid code -- missing end-of-block", r2.mode = 30;
                  break;
                }
                if (r2.lenbits = 9, S = { bits: r2.lenbits }, x = T(D, r2.lens, 0, r2.nlen, r2.lencode, 0, r2.work, S), r2.lenbits = S.bits, x) {
                  e2.msg = "invalid literal/lengths set", r2.mode = 30;
                  break;
                }
                if (r2.distbits = 6, r2.distcode = r2.distdyn, S = { bits: r2.distbits }, x = T(F, r2.lens, r2.nlen, r2.ndist, r2.distcode, 0, r2.work, S), r2.distbits = S.bits, x) {
                  e2.msg = "invalid distances set", r2.mode = 30;
                  break;
                }
                if (r2.mode = 20, 6 === t2) break e;
              case 20:
                r2.mode = 21;
              case 21:
                if (6 <= o2 && 258 <= h2) {
                  e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, R(e2, c2), a2 = e2.next_out, i2 = e2.output, h2 = e2.avail_out, s2 = e2.next_in, n2 = e2.input, o2 = e2.avail_in, u2 = r2.hold, l2 = r2.bits, 12 === r2.mode && (r2.back = -1);
                  break;
                }
                for (r2.back = 0; g = (C = r2.lencode[u2 & (1 << r2.lenbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (g && 0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.lencode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, r2.length = b, 0 === g) {
                  r2.mode = 26;
                  break;
                }
                if (32 & g) {
                  r2.back = -1, r2.mode = 12;
                  break;
                }
                if (64 & g) {
                  e2.msg = "invalid literal/length code", r2.mode = 30;
                  break;
                }
                r2.extra = 15 & g, r2.mode = 22;
              case 22:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.length += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                r2.was = r2.length, r2.mode = 23;
              case 23:
                for (; g = (C = r2.distcode[u2 & (1 << r2.distbits) - 1]) >>> 16 & 255, b = 65535 & C, !((_ = C >>> 24) <= l2); ) {
                  if (0 === o2) break e;
                  o2--, u2 += n2[s2++] << l2, l2 += 8;
                }
                if (0 == (240 & g)) {
                  for (v = _, y = g, w = b; g = (C = r2.distcode[w + ((u2 & (1 << v + y) - 1) >> v)]) >>> 16 & 255, b = 65535 & C, !(v + (_ = C >>> 24) <= l2); ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  u2 >>>= v, l2 -= v, r2.back += v;
                }
                if (u2 >>>= _, l2 -= _, r2.back += _, 64 & g) {
                  e2.msg = "invalid distance code", r2.mode = 30;
                  break;
                }
                r2.offset = b, r2.extra = 15 & g, r2.mode = 24;
              case 24:
                if (r2.extra) {
                  for (z = r2.extra; l2 < z; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  r2.offset += u2 & (1 << r2.extra) - 1, u2 >>>= r2.extra, l2 -= r2.extra, r2.back += r2.extra;
                }
                if (r2.offset > r2.dmax) {
                  e2.msg = "invalid distance too far back", r2.mode = 30;
                  break;
                }
                r2.mode = 25;
              case 25:
                if (0 === h2) break e;
                if (d = c2 - h2, r2.offset > d) {
                  if ((d = r2.offset - d) > r2.whave && r2.sane) {
                    e2.msg = "invalid distance too far back", r2.mode = 30;
                    break;
                  }
                  p = d > r2.wnext ? (d -= r2.wnext, r2.wsize - d) : r2.wnext - d, d > r2.length && (d = r2.length), m = r2.window;
                } else m = i2, p = a2 - r2.offset, d = r2.length;
                for (h2 < d && (d = h2), h2 -= d, r2.length -= d; i2[a2++] = m[p++], --d; ) ;
                0 === r2.length && (r2.mode = 21);
                break;
              case 26:
                if (0 === h2) break e;
                i2[a2++] = r2.length, h2--, r2.mode = 21;
                break;
              case 27:
                if (r2.wrap) {
                  for (; l2 < 32; ) {
                    if (0 === o2) break e;
                    o2--, u2 |= n2[s2++] << l2, l2 += 8;
                  }
                  if (c2 -= h2, e2.total_out += c2, r2.total += c2, c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, a2 - c2) : O(r2.check, i2, c2, a2 - c2)), c2 = h2, (r2.flags ? u2 : L(u2)) !== r2.check) {
                    e2.msg = "incorrect data check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 28;
              case 28:
                if (r2.wrap && r2.flags) {
                  for (; l2 < 32; ) {
                    if (0 === o2) break e;
                    o2--, u2 += n2[s2++] << l2, l2 += 8;
                  }
                  if (u2 !== (4294967295 & r2.total)) {
                    e2.msg = "incorrect length check", r2.mode = 30;
                    break;
                  }
                  l2 = u2 = 0;
                }
                r2.mode = 29;
              case 29:
                x = 1;
                break e;
              case 30:
                x = -3;
                break e;
              case 31:
                return -4;
              case 32:
              default:
                return U;
            }
            return e2.next_out = a2, e2.avail_out = h2, e2.next_in = s2, e2.avail_in = o2, r2.hold = u2, r2.bits = l2, (r2.wsize || c2 !== e2.avail_out && r2.mode < 30 && (r2.mode < 27 || 4 !== t2)) && Z(e2, e2.output, e2.next_out, c2 - e2.avail_out) ? (r2.mode = 31, -4) : (f2 -= e2.avail_in, c2 -= e2.avail_out, e2.total_in += f2, e2.total_out += c2, r2.total += c2, r2.wrap && c2 && (e2.adler = r2.check = r2.flags ? B(r2.check, i2, c2, e2.next_out - c2) : O(r2.check, i2, c2, e2.next_out - c2)), e2.data_type = r2.bits + (r2.last ? 64 : 0) + (12 === r2.mode ? 128 : 0) + (20 === r2.mode || 15 === r2.mode ? 256 : 0), (0 == f2 && 0 === c2 || 4 === t2) && x === N && (x = -5), x);
          }, r.inflateEnd = function(e2) {
            if (!e2 || !e2.state) return U;
            var t2 = e2.state;
            return t2.window && (t2.window = null), e2.state = null, N;
          }, r.inflateGetHeader = function(e2, t2) {
            var r2;
            return e2 && e2.state ? 0 == (2 & (r2 = e2.state).wrap) ? U : ((r2.head = t2).done = false, N) : U;
          }, r.inflateSetDictionary = function(e2, t2) {
            var r2, n2 = t2.length;
            return e2 && e2.state ? 0 !== (r2 = e2.state).wrap && 11 !== r2.mode ? U : 11 === r2.mode && O(1, t2, n2, 0) !== r2.check ? -3 : Z(e2, t2, n2, n2) ? (r2.mode = 31, -4) : (r2.havedict = 1, N) : U;
          }, r.inflateInfo = "pako inflate (from Nodeca project)";
        }, { "../utils/common": 41, "./adler32": 43, "./crc32": 45, "./inffast": 48, "./inftrees": 50 }], 50: [function(e, t, r) {
          "use strict";
          var D = e("../utils/common"), F = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0], N = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78], U = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0], P = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
          t.exports = function(e2, t2, r2, n, i, s, a, o) {
            var h, u, l, f, c, d, p, m, _, g = o.bits, b = 0, v = 0, y = 0, w = 0, k = 0, x = 0, S = 0, z = 0, C = 0, E = 0, A = null, I = 0, O = new D.Buf16(16), B = new D.Buf16(16), R = null, T = 0;
            for (b = 0; b <= 15; b++) O[b] = 0;
            for (v = 0; v < n; v++) O[t2[r2 + v]]++;
            for (k = g, w = 15; 1 <= w && 0 === O[w]; w--) ;
            if (w < k && (k = w), 0 === w) return i[s++] = 20971520, i[s++] = 20971520, o.bits = 1, 0;
            for (y = 1; y < w && 0 === O[y]; y++) ;
            for (k < y && (k = y), b = z = 1; b <= 15; b++) if (z <<= 1, (z -= O[b]) < 0) return -1;
            if (0 < z && (0 === e2 || 1 !== w)) return -1;
            for (B[1] = 0, b = 1; b < 15; b++) B[b + 1] = B[b] + O[b];
            for (v = 0; v < n; v++) 0 !== t2[r2 + v] && (a[B[t2[r2 + v]]++] = v);
            if (d = 0 === e2 ? (A = R = a, 19) : 1 === e2 ? (A = F, I -= 257, R = N, T -= 257, 256) : (A = U, R = P, -1), b = y, c = s, S = v = E = 0, l = -1, f = (C = 1 << (x = k)) - 1, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
            for (; ; ) {
              for (p = b - S, _ = a[v] < d ? (m = 0, a[v]) : a[v] > d ? (m = R[T + a[v]], A[I + a[v]]) : (m = 96, 0), h = 1 << b - S, y = u = 1 << x; i[c + (E >> S) + (u -= h)] = p << 24 | m << 16 | _ | 0, 0 !== u; ) ;
              for (h = 1 << b - 1; E & h; ) h >>= 1;
              if (0 !== h ? (E &= h - 1, E += h) : E = 0, v++, 0 == --O[b]) {
                if (b === w) break;
                b = t2[r2 + a[v]];
              }
              if (k < b && (E & f) !== l) {
                for (0 === S && (S = k), c += y, z = 1 << (x = b - S); x + S < w && !((z -= O[x + S]) <= 0); ) x++, z <<= 1;
                if (C += 1 << x, 1 === e2 && 852 < C || 2 === e2 && 592 < C) return 1;
                i[l = E & f] = k << 24 | x << 16 | c - s | 0;
              }
            }
            return 0 !== E && (i[c + E] = b - S << 24 | 64 << 16 | 0), o.bits = k, 0;
          };
        }, { "../utils/common": 41 }], 51: [function(e, t, r) {
          "use strict";
          t.exports = { 2: "need dictionary", 1: "stream end", 0: "", "-1": "file error", "-2": "stream error", "-3": "data error", "-4": "insufficient memory", "-5": "buffer error", "-6": "incompatible version" };
        }, {}], 52: [function(e, t, r) {
          "use strict";
          var i = e("../utils/common"), o = 0, h = 1;
          function n(e2) {
            for (var t2 = e2.length; 0 <= --t2; ) e2[t2] = 0;
          }
          var s = 0, a = 29, u = 256, l = u + 1 + a, f = 30, c = 19, _ = 2 * l + 1, g = 15, d = 16, p = 7, m = 256, b = 16, v = 17, y = 18, w = [0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0], k = [0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13], x = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7], S = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15], z = new Array(2 * (l + 2));
          n(z);
          var C = new Array(2 * f);
          n(C);
          var E = new Array(512);
          n(E);
          var A = new Array(256);
          n(A);
          var I = new Array(a);
          n(I);
          var O, B, R, T = new Array(f);
          function D(e2, t2, r2, n2, i2) {
            this.static_tree = e2, this.extra_bits = t2, this.extra_base = r2, this.elems = n2, this.max_length = i2, this.has_stree = e2 && e2.length;
          }
          function F(e2, t2) {
            this.dyn_tree = e2, this.max_code = 0, this.stat_desc = t2;
          }
          function N(e2) {
            return e2 < 256 ? E[e2] : E[256 + (e2 >>> 7)];
          }
          function U(e2, t2) {
            e2.pending_buf[e2.pending++] = 255 & t2, e2.pending_buf[e2.pending++] = t2 >>> 8 & 255;
          }
          function P(e2, t2, r2) {
            e2.bi_valid > d - r2 ? (e2.bi_buf |= t2 << e2.bi_valid & 65535, U(e2, e2.bi_buf), e2.bi_buf = t2 >> d - e2.bi_valid, e2.bi_valid += r2 - d) : (e2.bi_buf |= t2 << e2.bi_valid & 65535, e2.bi_valid += r2);
          }
          function L(e2, t2, r2) {
            P(e2, r2[2 * t2], r2[2 * t2 + 1]);
          }
          function j(e2, t2) {
            for (var r2 = 0; r2 |= 1 & e2, e2 >>>= 1, r2 <<= 1, 0 < --t2; ) ;
            return r2 >>> 1;
          }
          function Z(e2, t2, r2) {
            var n2, i2, s2 = new Array(g + 1), a2 = 0;
            for (n2 = 1; n2 <= g; n2++) s2[n2] = a2 = a2 + r2[n2 - 1] << 1;
            for (i2 = 0; i2 <= t2; i2++) {
              var o2 = e2[2 * i2 + 1];
              0 !== o2 && (e2[2 * i2] = j(s2[o2]++, o2));
            }
          }
          function W(e2) {
            var t2;
            for (t2 = 0; t2 < l; t2++) e2.dyn_ltree[2 * t2] = 0;
            for (t2 = 0; t2 < f; t2++) e2.dyn_dtree[2 * t2] = 0;
            for (t2 = 0; t2 < c; t2++) e2.bl_tree[2 * t2] = 0;
            e2.dyn_ltree[2 * m] = 1, e2.opt_len = e2.static_len = 0, e2.last_lit = e2.matches = 0;
          }
          function M(e2) {
            8 < e2.bi_valid ? U(e2, e2.bi_buf) : 0 < e2.bi_valid && (e2.pending_buf[e2.pending++] = e2.bi_buf), e2.bi_buf = 0, e2.bi_valid = 0;
          }
          function H(e2, t2, r2, n2) {
            var i2 = 2 * t2, s2 = 2 * r2;
            return e2[i2] < e2[s2] || e2[i2] === e2[s2] && n2[t2] <= n2[r2];
          }
          function G(e2, t2, r2) {
            for (var n2 = e2.heap[r2], i2 = r2 << 1; i2 <= e2.heap_len && (i2 < e2.heap_len && H(t2, e2.heap[i2 + 1], e2.heap[i2], e2.depth) && i2++, !H(t2, n2, e2.heap[i2], e2.depth)); ) e2.heap[r2] = e2.heap[i2], r2 = i2, i2 <<= 1;
            e2.heap[r2] = n2;
          }
          function K(e2, t2, r2) {
            var n2, i2, s2, a2, o2 = 0;
            if (0 !== e2.last_lit) for (; n2 = e2.pending_buf[e2.d_buf + 2 * o2] << 8 | e2.pending_buf[e2.d_buf + 2 * o2 + 1], i2 = e2.pending_buf[e2.l_buf + o2], o2++, 0 === n2 ? L(e2, i2, t2) : (L(e2, (s2 = A[i2]) + u + 1, t2), 0 !== (a2 = w[s2]) && P(e2, i2 -= I[s2], a2), L(e2, s2 = N(--n2), r2), 0 !== (a2 = k[s2]) && P(e2, n2 -= T[s2], a2)), o2 < e2.last_lit; ) ;
            L(e2, m, t2);
          }
          function Y(e2, t2) {
            var r2, n2, i2, s2 = t2.dyn_tree, a2 = t2.stat_desc.static_tree, o2 = t2.stat_desc.has_stree, h2 = t2.stat_desc.elems, u2 = -1;
            for (e2.heap_len = 0, e2.heap_max = _, r2 = 0; r2 < h2; r2++) 0 !== s2[2 * r2] ? (e2.heap[++e2.heap_len] = u2 = r2, e2.depth[r2] = 0) : s2[2 * r2 + 1] = 0;
            for (; e2.heap_len < 2; ) s2[2 * (i2 = e2.heap[++e2.heap_len] = u2 < 2 ? ++u2 : 0)] = 1, e2.depth[i2] = 0, e2.opt_len--, o2 && (e2.static_len -= a2[2 * i2 + 1]);
            for (t2.max_code = u2, r2 = e2.heap_len >> 1; 1 <= r2; r2--) G(e2, s2, r2);
            for (i2 = h2; r2 = e2.heap[1], e2.heap[1] = e2.heap[e2.heap_len--], G(e2, s2, 1), n2 = e2.heap[1], e2.heap[--e2.heap_max] = r2, e2.heap[--e2.heap_max] = n2, s2[2 * i2] = s2[2 * r2] + s2[2 * n2], e2.depth[i2] = (e2.depth[r2] >= e2.depth[n2] ? e2.depth[r2] : e2.depth[n2]) + 1, s2[2 * r2 + 1] = s2[2 * n2 + 1] = i2, e2.heap[1] = i2++, G(e2, s2, 1), 2 <= e2.heap_len; ) ;
            e2.heap[--e2.heap_max] = e2.heap[1], (function(e3, t3) {
              var r3, n3, i3, s3, a3, o3, h3 = t3.dyn_tree, u3 = t3.max_code, l2 = t3.stat_desc.static_tree, f2 = t3.stat_desc.has_stree, c2 = t3.stat_desc.extra_bits, d2 = t3.stat_desc.extra_base, p2 = t3.stat_desc.max_length, m2 = 0;
              for (s3 = 0; s3 <= g; s3++) e3.bl_count[s3] = 0;
              for (h3[2 * e3.heap[e3.heap_max] + 1] = 0, r3 = e3.heap_max + 1; r3 < _; r3++) p2 < (s3 = h3[2 * h3[2 * (n3 = e3.heap[r3]) + 1] + 1] + 1) && (s3 = p2, m2++), h3[2 * n3 + 1] = s3, u3 < n3 || (e3.bl_count[s3]++, a3 = 0, d2 <= n3 && (a3 = c2[n3 - d2]), o3 = h3[2 * n3], e3.opt_len += o3 * (s3 + a3), f2 && (e3.static_len += o3 * (l2[2 * n3 + 1] + a3)));
              if (0 !== m2) {
                do {
                  for (s3 = p2 - 1; 0 === e3.bl_count[s3]; ) s3--;
                  e3.bl_count[s3]--, e3.bl_count[s3 + 1] += 2, e3.bl_count[p2]--, m2 -= 2;
                } while (0 < m2);
                for (s3 = p2; 0 !== s3; s3--) for (n3 = e3.bl_count[s3]; 0 !== n3; ) u3 < (i3 = e3.heap[--r3]) || (h3[2 * i3 + 1] !== s3 && (e3.opt_len += (s3 - h3[2 * i3 + 1]) * h3[2 * i3], h3[2 * i3 + 1] = s3), n3--);
              }
            })(e2, t2), Z(s2, u2, e2.bl_count);
          }
          function X(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), t2[2 * (r2 + 1) + 1] = 65535, n2 = 0; n2 <= r2; n2++) i2 = a2, a2 = t2[2 * (n2 + 1) + 1], ++o2 < h2 && i2 === a2 || (o2 < u2 ? e2.bl_tree[2 * i2] += o2 : 0 !== i2 ? (i2 !== s2 && e2.bl_tree[2 * i2]++, e2.bl_tree[2 * b]++) : o2 <= 10 ? e2.bl_tree[2 * v]++ : e2.bl_tree[2 * y]++, s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4));
          }
          function V(e2, t2, r2) {
            var n2, i2, s2 = -1, a2 = t2[1], o2 = 0, h2 = 7, u2 = 4;
            for (0 === a2 && (h2 = 138, u2 = 3), n2 = 0; n2 <= r2; n2++) if (i2 = a2, a2 = t2[2 * (n2 + 1) + 1], !(++o2 < h2 && i2 === a2)) {
              if (o2 < u2) for (; L(e2, i2, e2.bl_tree), 0 != --o2; ) ;
              else 0 !== i2 ? (i2 !== s2 && (L(e2, i2, e2.bl_tree), o2--), L(e2, b, e2.bl_tree), P(e2, o2 - 3, 2)) : o2 <= 10 ? (L(e2, v, e2.bl_tree), P(e2, o2 - 3, 3)) : (L(e2, y, e2.bl_tree), P(e2, o2 - 11, 7));
              s2 = i2, u2 = (o2 = 0) === a2 ? (h2 = 138, 3) : i2 === a2 ? (h2 = 6, 3) : (h2 = 7, 4);
            }
          }
          n(T);
          var q = false;
          function J(e2, t2, r2, n2) {
            P(e2, (s << 1) + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
              M(e3), n3 && (U(e3, r3), U(e3, ~r3)), i.arraySet(e3.pending_buf, e3.window, t3, r3, e3.pending), e3.pending += r3;
            })(e2, t2, r2, true);
          }
          r._tr_init = function(e2) {
            q || ((function() {
              var e3, t2, r2, n2, i2, s2 = new Array(g + 1);
              for (n2 = r2 = 0; n2 < a - 1; n2++) for (I[n2] = r2, e3 = 0; e3 < 1 << w[n2]; e3++) A[r2++] = n2;
              for (A[r2 - 1] = n2, n2 = i2 = 0; n2 < 16; n2++) for (T[n2] = i2, e3 = 0; e3 < 1 << k[n2]; e3++) E[i2++] = n2;
              for (i2 >>= 7; n2 < f; n2++) for (T[n2] = i2 << 7, e3 = 0; e3 < 1 << k[n2] - 7; e3++) E[256 + i2++] = n2;
              for (t2 = 0; t2 <= g; t2++) s2[t2] = 0;
              for (e3 = 0; e3 <= 143; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (; e3 <= 255; ) z[2 * e3 + 1] = 9, e3++, s2[9]++;
              for (; e3 <= 279; ) z[2 * e3 + 1] = 7, e3++, s2[7]++;
              for (; e3 <= 287; ) z[2 * e3 + 1] = 8, e3++, s2[8]++;
              for (Z(z, l + 1, s2), e3 = 0; e3 < f; e3++) C[2 * e3 + 1] = 5, C[2 * e3] = j(e3, 5);
              O = new D(z, w, u + 1, l, g), B = new D(C, k, 0, f, g), R = new D(new Array(0), x, 0, c, p);
            })(), q = true), e2.l_desc = new F(e2.dyn_ltree, O), e2.d_desc = new F(e2.dyn_dtree, B), e2.bl_desc = new F(e2.bl_tree, R), e2.bi_buf = 0, e2.bi_valid = 0, W(e2);
          }, r._tr_stored_block = J, r._tr_flush_block = function(e2, t2, r2, n2) {
            var i2, s2, a2 = 0;
            0 < e2.level ? (2 === e2.strm.data_type && (e2.strm.data_type = (function(e3) {
              var t3, r3 = 4093624447;
              for (t3 = 0; t3 <= 31; t3++, r3 >>>= 1) if (1 & r3 && 0 !== e3.dyn_ltree[2 * t3]) return o;
              if (0 !== e3.dyn_ltree[18] || 0 !== e3.dyn_ltree[20] || 0 !== e3.dyn_ltree[26]) return h;
              for (t3 = 32; t3 < u; t3++) if (0 !== e3.dyn_ltree[2 * t3]) return h;
              return o;
            })(e2)), Y(e2, e2.l_desc), Y(e2, e2.d_desc), a2 = (function(e3) {
              var t3;
              for (X(e3, e3.dyn_ltree, e3.l_desc.max_code), X(e3, e3.dyn_dtree, e3.d_desc.max_code), Y(e3, e3.bl_desc), t3 = c - 1; 3 <= t3 && 0 === e3.bl_tree[2 * S[t3] + 1]; t3--) ;
              return e3.opt_len += 3 * (t3 + 1) + 5 + 5 + 4, t3;
            })(e2), i2 = e2.opt_len + 3 + 7 >>> 3, (s2 = e2.static_len + 3 + 7 >>> 3) <= i2 && (i2 = s2)) : i2 = s2 = r2 + 5, r2 + 4 <= i2 && -1 !== t2 ? J(e2, t2, r2, n2) : 4 === e2.strategy || s2 === i2 ? (P(e2, 2 + (n2 ? 1 : 0), 3), K(e2, z, C)) : (P(e2, 4 + (n2 ? 1 : 0), 3), (function(e3, t3, r3, n3) {
              var i3;
              for (P(e3, t3 - 257, 5), P(e3, r3 - 1, 5), P(e3, n3 - 4, 4), i3 = 0; i3 < n3; i3++) P(e3, e3.bl_tree[2 * S[i3] + 1], 3);
              V(e3, e3.dyn_ltree, t3 - 1), V(e3, e3.dyn_dtree, r3 - 1);
            })(e2, e2.l_desc.max_code + 1, e2.d_desc.max_code + 1, a2 + 1), K(e2, e2.dyn_ltree, e2.dyn_dtree)), W(e2), n2 && M(e2);
          }, r._tr_tally = function(e2, t2, r2) {
            return e2.pending_buf[e2.d_buf + 2 * e2.last_lit] = t2 >>> 8 & 255, e2.pending_buf[e2.d_buf + 2 * e2.last_lit + 1] = 255 & t2, e2.pending_buf[e2.l_buf + e2.last_lit] = 255 & r2, e2.last_lit++, 0 === t2 ? e2.dyn_ltree[2 * r2]++ : (e2.matches++, t2--, e2.dyn_ltree[2 * (A[r2] + u + 1)]++, e2.dyn_dtree[2 * N(t2)]++), e2.last_lit === e2.lit_bufsize - 1;
          }, r._tr_align = function(e2) {
            P(e2, 2, 3), L(e2, m, z), (function(e3) {
              16 === e3.bi_valid ? (U(e3, e3.bi_buf), e3.bi_buf = 0, e3.bi_valid = 0) : 8 <= e3.bi_valid && (e3.pending_buf[e3.pending++] = 255 & e3.bi_buf, e3.bi_buf >>= 8, e3.bi_valid -= 8);
            })(e2);
          };
        }, { "../utils/common": 41 }], 53: [function(e, t, r) {
          "use strict";
          t.exports = function() {
            this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
          };
        }, {}], 54: [function(e, t, r) {
          (function(e2) {
            !(function(r2, n) {
              "use strict";
              if (!r2.setImmediate) {
                var i, s, t2, a, o = 1, h = {}, u = false, l = r2.document, e3 = Object.getPrototypeOf && Object.getPrototypeOf(r2);
                e3 = e3 && e3.setTimeout ? e3 : r2, i = "[object process]" === {}.toString.call(r2.process) ? function(e4) {
                  process.nextTick(function() {
                    c(e4);
                  });
                } : (function() {
                  if (r2.postMessage && !r2.importScripts) {
                    var e4 = true, t3 = r2.onmessage;
                    return r2.onmessage = function() {
                      e4 = false;
                    }, r2.postMessage("", "*"), r2.onmessage = t3, e4;
                  }
                })() ? (a = "setImmediate$" + Math.random() + "$", r2.addEventListener ? r2.addEventListener("message", d, false) : r2.attachEvent("onmessage", d), function(e4) {
                  r2.postMessage(a + e4, "*");
                }) : r2.MessageChannel ? ((t2 = new MessageChannel()).port1.onmessage = function(e4) {
                  c(e4.data);
                }, function(e4) {
                  t2.port2.postMessage(e4);
                }) : l && "onreadystatechange" in l.createElement("script") ? (s = l.documentElement, function(e4) {
                  var t3 = l.createElement("script");
                  t3.onreadystatechange = function() {
                    c(e4), t3.onreadystatechange = null, s.removeChild(t3), t3 = null;
                  }, s.appendChild(t3);
                }) : function(e4) {
                  setTimeout(c, 0, e4);
                }, e3.setImmediate = function(e4) {
                  "function" != typeof e4 && (e4 = new Function("" + e4));
                  for (var t3 = new Array(arguments.length - 1), r3 = 0; r3 < t3.length; r3++) t3[r3] = arguments[r3 + 1];
                  var n2 = { callback: e4, args: t3 };
                  return h[o] = n2, i(o), o++;
                }, e3.clearImmediate = f;
              }
              function f(e4) {
                delete h[e4];
              }
              function c(e4) {
                if (u) setTimeout(c, 0, e4);
                else {
                  var t3 = h[e4];
                  if (t3) {
                    u = true;
                    try {
                      !(function(e5) {
                        var t4 = e5.callback, r3 = e5.args;
                        switch (r3.length) {
                          case 0:
                            t4();
                            break;
                          case 1:
                            t4(r3[0]);
                            break;
                          case 2:
                            t4(r3[0], r3[1]);
                            break;
                          case 3:
                            t4(r3[0], r3[1], r3[2]);
                            break;
                          default:
                            t4.apply(n, r3);
                        }
                      })(t3);
                    } finally {
                      f(e4), u = false;
                    }
                  }
                }
              }
              function d(e4) {
                e4.source === r2 && "string" == typeof e4.data && 0 === e4.data.indexOf(a) && c(+e4.data.slice(a.length));
              }
            })("undefined" == typeof self ? void 0 === e2 ? this : e2 : self);
          }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {});
        }, {}] }, {}, [10])(10);
      });
    }
  });

  // js/types.js
  var PLAYBACK_BUTTON = Object.freeze({ PLAY: "Play", PAUSE: "Pause" });

  // js/annotations.js
  var annotations = /* @__PURE__ */ new Map();
  function getFrameAnnotations(frame) {
    return annotations.get(frame) ?? [];
  }
  function getMarkedFrames() {
    return Array.from(annotations.keys());
  }
  function clearAnnotations() {
    annotations.clear();
  }
  function removeFrameAnnotations(frame) {
    annotations.delete(frame);
  }
  function removeLastAnnotation(frame) {
    if (!annotations.has(frame)) return;
    annotations.get(frame).pop();
  }
  function addFrameAnnotation(frame, annotation) {
    if (!annotations.has(frame)) {
      annotations.set(frame, []);
    }
    ;
    annotations.get(frame).push(annotation);
  }
  function exportAnnotations() {
    return Object.fromEntries(annotations);
  }
  function importAnnotations(data) {
    annotations.clear();
    for (const [frame, strokes] of Object.entries(data)) {
      annotations.set(Number(frame), strokes);
    }
  }
  var annotations_default = {
    getFrameAnnotations,
    removeLastAnnotation,
    addFrameAnnotation,
    exportAnnotations,
    importAnnotations,
    getMarkedFrames,
    clearAnnotations,
    removeFrameAnnotations
  };

  // node_modules/mp4box/dist/rolldown-runtime-w6R9maHv.mjs
  var __defProp2 = Object.defineProperty;
  var __exportAll = (all, no_symbols) => {
    let target = {};
    for (var name in all) {
      __defProp2(target, name, {
        get: all[name],
        enumerable: true
      });
    }
    if (!no_symbols) {
      __defProp2(target, Symbol.toStringTag, { value: "Module" });
    }
    return target;
  };

  // node_modules/mp4box/dist/styp-9TIZZDLN.mjs
  var MAX_SIZE = Math.pow(2, 32);
  var MAX_UINT32 = Math.pow(2, 32) - 1;
  var TFHD_FLAG_DEFAULT_BASE_IS_MOOF = 131072;
  var TRUN_FLAGS_FLAGS = 1024;
  var TRUN_FLAGS_CTS_OFFSET = 2048;
  var MP4BoxBuffer = class MP4BoxBuffer2 extends ArrayBuffer {
    constructor(byteLength) {
      super(byteLength);
      this.fileStart = 0;
      this.usedBytes = 0;
    }
    static fromArrayBuffer(buffer, fileStart) {
      const mp4BoxBuffer = new MP4BoxBuffer2(buffer.byteLength);
      new Uint8Array(mp4BoxBuffer).set(new Uint8Array(buffer));
      mp4BoxBuffer.fileStart = fileStart;
      return mp4BoxBuffer;
    }
  };
  var DataStream = class DataStream2 {
    static {
      this.ENDIANNESS = new Int8Array(new Int16Array([1]).buffer)[0] > 0 ? 2 : 1;
    }
    /**
    * DataStream reads scalars, arrays and structs of data from an ArrayBuffer.
    * It's like a file-like DataView on steroids.
    *
    * @param arrayBuffer ArrayBuffer to read from.
    * @param byteOffset Offset from arrayBuffer beginning for the DataStream.
    * @param endianness Endianness of the DataStream (default: BIG_ENDIAN).
    */
    constructor(arrayBuffer, byteOffset, endianness) {
      this._byteLength = 0;
      this.failurePosition = 0;
      this._dynamicSize = 1;
      this._byteOffset = byteOffset || 0;
      if (arrayBuffer instanceof ArrayBuffer) this.buffer = MP4BoxBuffer.fromArrayBuffer(arrayBuffer, 0);
      else if (arrayBuffer instanceof DataView) {
        this.dataView = arrayBuffer;
        if (byteOffset) this._byteOffset += byteOffset;
      } else this.buffer = new MP4BoxBuffer(arrayBuffer || 0);
      this.position = 0;
      this.endianness = endianness ? endianness : 1;
    }
    getPosition() {
      return this.position;
    }
    /**
    * Internal function to resize the DataStream buffer when required.
    * @param extra Number of bytes to add to the buffer allocation.
    */
    _realloc(extra) {
      if (!this._dynamicSize) return;
      const req = this._byteOffset + this.position + extra;
      let blen = this._buffer.byteLength;
      if (req <= blen) {
        if (req > this._byteLength) this._byteLength = req;
        return;
      }
      if (blen < 1) blen = 1;
      while (req > blen) blen *= 2;
      const buf = new MP4BoxBuffer(blen);
      const src = new Uint8Array(this._buffer);
      new Uint8Array(buf, 0, src.length).set(src);
      this.buffer = buf;
      this._byteLength = req;
    }
    /**
    * Internal function to trim the DataStream buffer when required.
    * Used for stripping out the extra bytes from the backing buffer when
    * the virtual byteLength is smaller than the buffer byteLength (happens after
    * growing the buffer with writes and not filling the extra space completely).
    */
    _trimAlloc() {
      if (this._byteLength === this._buffer.byteLength) return;
      const buf = new MP4BoxBuffer(this._byteLength);
      const dst = new Uint8Array(buf);
      const src = new Uint8Array(this._buffer, 0, dst.length);
      dst.set(src);
      this.buffer = buf;
    }
    /**
    * Returns the byte length of the DataStream object.
    * @type {number}
    */
    get byteLength() {
      return this._byteLength - this._byteOffset;
    }
    /**
    * Set/get the backing ArrayBuffer of the DataStream object.
    * The setter updates the DataView to point to the new buffer.
    * @type {Object}
    */
    get buffer() {
      this._trimAlloc();
      return this._buffer;
    }
    set buffer(value) {
      this._buffer = value;
      this._dataView = new DataView(value, this._byteOffset);
      this._byteLength = value.byteLength;
    }
    /**
    * Set/get the byteOffset of the DataStream object.
    * The setter updates the DataView to point to the new byteOffset.
    * @type {number}
    */
    get byteOffset() {
      return this._byteOffset;
    }
    set byteOffset(value) {
      this._byteOffset = value;
      this._dataView = new DataView(this._buffer, this._byteOffset);
      this._byteLength = this._buffer.byteLength;
    }
    /**
    * Set/get the byteOffset of the DataStream object.
    * The setter updates the DataView to point to the new byteOffset.
    * @type {number}
    */
    get dataView() {
      return this._dataView;
    }
    set dataView(value) {
      this._byteOffset = value.byteOffset;
      this._buffer = MP4BoxBuffer.fromArrayBuffer(value.buffer, 0);
      this._dataView = new DataView(this._buffer, this._byteOffset);
      this._byteLength = this._byteOffset + value.byteLength;
    }
    /**
    *   Sets the DataStream read/write position to given position.
    *   Clamps between 0 and DataStream length.
    *
    *   @param pos Position to seek to.
    *   @return
    */
    seek(pos) {
      const npos = Math.max(0, Math.min(this.byteLength, pos));
      this.position = isNaN(npos) || !isFinite(npos) ? 0 : npos;
    }
    /**
    * Returns true if the DataStream seek pointer is at the end of buffer and
    * there's no more data to read.
    *
    * @return True if the seek pointer is at the end of the buffer.
    */
    isEof() {
      return this.position >= this._byteLength;
    }
    #isTupleType(type) {
      return Array.isArray(type) && type.length === 3 && type[0] === "[]";
    }
    /**
    * Maps a Uint8Array into the DataStream buffer.
    *
    * Nice for quickly reading in data.
    *
    * @param length Number of elements to map.
    * @param e Endianness of the data to read.
    * @return Uint8Array to the DataStream backing buffer.
    */
    mapUint8Array(length) {
      this._realloc(length * 1);
      const arr = new Uint8Array(this._buffer, this.byteOffset + this.position, length);
      this.position += length * 1;
      return arr;
    }
    /**
    * Reads an Int32Array of desired length and endianness from the DataStream.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return The read Int32Array.
    */
    readInt32Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 4 : length;
      const arr = new Int32Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads an Int16Array of desired length and endianness from the DataStream.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return The read Int16Array.
    */
    readInt16Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 2 : length;
      const arr = new Int16Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads an Int8Array of desired length from the DataStream.
    *
    * @param length Number of elements to map.
    * @param e Endianness of the data to read.
    * @return The read Int8Array.
    */
    readInt8Array(length) {
      length = length === void 0 ? this.byteLength - this.position : length;
      const arr = new Int8Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a Uint32Array of desired length and endianness from the DataStream.
    *
    *  @param length Number of elements to map.
    *  @param endianness Endianness of the data to read.
    *  @return The read Uint32Array.
    */
    readUint32Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 4 : length;
      const arr = new Uint32Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a Uint16Array of desired length and endianness from the DataStream.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return The read Uint16Array.
    */
    readUint16Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 2 : length;
      const arr = new Uint16Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a Uint8Array of desired length from the DataStream.
    *
    * @param length Number of elements to map.
    * @param e Endianness of the data to read.
    * @return The read Uint8Array.
    */
    readUint8Array(length) {
      length = length === void 0 ? this.byteLength - this.position : length;
      const arr = new Uint8Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a Float64Array of desired length and endianness from the DataStream.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return The read Float64Array.
    */
    readFloat64Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 8 : length;
      const arr = new Float64Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a Float32Array of desired length and endianness from the DataStream.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return The read Float32Array.
    */
    readFloat32Array(length, endianness) {
      length = length === void 0 ? this.byteLength - this.position / 4 : length;
      const arr = new Float32Array(length);
      DataStream2.memcpy(arr.buffer, 0, this.buffer, this.byteOffset + this.position, length * arr.BYTES_PER_ELEMENT);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += arr.byteLength;
      return arr;
    }
    /**
    * Reads a 32-bit int from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readInt32(endianness) {
      const v = this._dataView.getInt32(this.position, (endianness ?? this.endianness) === 2);
      this.position += 4;
      return v;
    }
    /**
    * Reads a 16-bit int from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readInt16(endianness) {
      const v = this._dataView.getInt16(this.position, (endianness ?? this.endianness) === 2);
      this.position += 2;
      return v;
    }
    /**
    * Reads an 8-bit int from the DataStream.
    *
    * @return The read number.
    */
    readInt8() {
      const v = this._dataView.getInt8(this.position);
      this.position += 1;
      return v;
    }
    /**
    * Reads a 32-bit unsigned int from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readUint32(endianness) {
      const v = this._dataView.getUint32(this.position, (endianness ?? this.endianness) === 2);
      this.position += 4;
      return v;
    }
    /**
    * Reads a 16-bit unsigned int from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readUint16(endianness) {
      const v = this._dataView.getUint16(this.position, (endianness ?? this.endianness) === 2);
      this.position += 2;
      return v;
    }
    /**
    * Reads an 8-bit unsigned int from the DataStream.
    *
    * @return The read number.
    */
    readUint8() {
      const v = this._dataView.getUint8(this.position);
      this.position += 1;
      return v;
    }
    /**
    * Reads a 32-bit float from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readFloat32(endianness) {
      const value = this._dataView.getFloat32(this.position, (endianness ?? this.endianness) === 2);
      this.position += 4;
      return value;
    }
    /**
    * Reads a 64-bit float from the DataStream with the desired endianness.
    *
    * @param endianness Endianness of the number.
    * @return The read number.
    */
    readFloat64(endianness) {
      const value = this._dataView.getFloat64(this.position, (endianness ?? this.endianness) === 2);
      this.position += 8;
      return value;
    }
    /**
    * Copies byteLength bytes from the src buffer at srcOffset to the
    * dst buffer at dstOffset.
    *
    * @param dst Destination ArrayBuffer to write to.
    * @param dstOffset Offset to the destination ArrayBuffer.
    * @param src Source ArrayBuffer to read from.
    * @param srcOffset Offset to the source ArrayBuffer.
    * @param byteLength Number of bytes to copy.
    */
    static memcpy(dst, dstOffset, src, srcOffset, byteLength) {
      const dstU8 = new Uint8Array(dst, dstOffset, byteLength);
      const srcU8 = new Uint8Array(src, srcOffset, byteLength);
      dstU8.set(srcU8);
    }
    /**
    * Converts array to native endianness in-place.
    *
    * @param typedArray Typed array to convert.
    * @param endianness True if the data in the array is
    *                                      little-endian. Set false for big-endian.
    * @return The converted typed array.
    */
    static arrayToNative(typedArray, endianness) {
      if (endianness === DataStream2.ENDIANNESS) return typedArray;
      else return this.flipArrayEndianness(typedArray);
    }
    /**
    * Converts native endianness array to desired endianness in-place.
    *
    * @param typedArray Typed array to convert.
    * @param littleEndian True if the converted array should be
    *                               little-endian. Set false for big-endian.
    * @return The converted typed array.
    */
    static nativeToEndian(typedArray, littleEndian) {
      if (littleEndian && DataStream2.ENDIANNESS === 2) return typedArray;
      else return this.flipArrayEndianness(typedArray);
    }
    /**
    * Flips typed array endianness in-place.
    *
    * @param typedArray Typed array to flip.
    * @return The converted typed array.
    */
    static flipArrayEndianness(typedArray) {
      const u8 = new Uint8Array(typedArray.buffer, typedArray.byteOffset, typedArray.byteLength);
      for (let i = 0; i < typedArray.byteLength; i += typedArray.BYTES_PER_ELEMENT) for (let j = i + typedArray.BYTES_PER_ELEMENT - 1, k = i; j > k; j--, k++) {
        const tmp = u8[k];
        u8[k] = u8[j];
        u8[j] = tmp;
      }
      return typedArray;
    }
    /**
    * Read a string of desired length and encoding from the DataStream.
    *
    * @param length The length of the string to read in bytes.
    * @param encoding The encoding of the string data in the DataStream.
    *                           Defaults to ASCII.
    * @return The read string.
    */
    readString(length, encoding) {
      if (encoding === void 0 || encoding === "ASCII") return fromCharCodeUint8(this.mapUint8Array(length === void 0 ? this.byteLength - this.position : length));
      else return new TextDecoder(encoding).decode(this.mapUint8Array(length));
    }
    /**
    * Read null-terminated string of desired length from the DataStream. Truncates
    * the returned string so that the null byte is not a part of it.
    *
    * @param length The length of the string to read.
    * @return The read string.
    */
    readCString(length) {
      let i = 0;
      const blen = this.byteLength - this.position;
      const u8 = new Uint8Array(this._buffer, this._byteOffset + this.position);
      const len = length !== void 0 ? Math.min(length, blen) : blen;
      for (; i < len && u8[i] !== 0; i++) ;
      const s = fromCharCodeUint8(this.mapUint8Array(i));
      if (length !== void 0) this.position += len - i;
      else if (i !== blen) this.position += 1;
      return s;
    }
    readInt64() {
      return this.readInt32() * MAX_SIZE + this.readUint32();
    }
    readUint64() {
      return this.readUint32() * MAX_SIZE + this.readUint32();
    }
    readUint24() {
      return (this.readUint8() << 16) + (this.readUint8() << 8) + this.readUint8();
    }
    /**
    * Saves the DataStream contents to the given filename.
    * Uses Chrome's anchor download property to initiate download.
    *
    * @param filename Filename to save as.
    * @return
    * @bundle DataStream-write.js
    */
    save(filename) {
      const blob = new Blob([this.buffer]);
      if (typeof window !== "undefined" && typeof document !== "undefined") if (window.URL && URL.createObjectURL) {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement("a");
        document.body.appendChild(a);
        a.setAttribute("href", url);
        a.setAttribute("download", filename);
        a.setAttribute("target", "_self");
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else throw new Error("DataStream.save: Can't create object URL.");
      return blob;
    }
    /** @bundle DataStream-write.js */
    get dynamicSize() {
      return this._dynamicSize;
    }
    /** @bundle DataStream-write.js */
    set dynamicSize(v) {
      if (!v) this._trimAlloc();
      this._dynamicSize = v;
    }
    /**
    * Internal function to trim the DataStream buffer when required.
    * Used for stripping out the first bytes when not needed anymore.
    *
    * @return
    * @bundle DataStream-write.js
    */
    shift(offset) {
      const buf = new MP4BoxBuffer(this._byteLength - offset);
      const dst = new Uint8Array(buf);
      const src = new Uint8Array(this._buffer, offset, dst.length);
      dst.set(src);
      this.buffer = buf;
      this.position -= offset;
    }
    /**
    * Writes an Int32Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeInt32Array(array, endianness) {
      this._realloc(array.length * 4);
      if (array instanceof Int32Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapInt32Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeInt32(array[i], endianness);
    }
    /**
    * Writes an Int16Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeInt16Array(array, endianness) {
      this._realloc(array.length * 2);
      if (array instanceof Int16Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapInt16Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeInt16(array[i], endianness);
    }
    /**
    * Writes an Int8Array to the DataStream.
    *
    * @param array The array to write.
    * @bundle DataStream-write.js
    */
    writeInt8Array(array) {
      this._realloc(array.length * 1);
      if (array instanceof Int8Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapInt8Array(array.length);
      } else for (let i = 0; i < array.length; i++) this.writeInt8(array[i]);
    }
    /**
    * Writes a Uint32Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeUint32Array(array, endianness) {
      this._realloc(array.length * 4);
      if (array instanceof Uint32Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapUint32Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeUint32(array[i], endianness);
    }
    /**
    * Writes a Uint16Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeUint16Array(array, endianness) {
      this._realloc(array.length * 2);
      if (array instanceof Uint16Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapUint16Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeUint16(array[i], endianness);
    }
    /**
    * Writes a Uint8Array to the DataStream.
    *
    * @param array The array to write.
    * @bundle DataStream-write.js
    */
    writeUint8Array(array) {
      this._realloc(array.length * 1);
      if (array instanceof Uint8Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapUint8Array(array.length);
      } else for (let i = 0; i < array.length; i++) this.writeUint8(array[i]);
    }
    /**
    * Writes a Float64Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeFloat64Array(array, endianness) {
      this._realloc(array.length * 8);
      if (array instanceof Float64Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapFloat64Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeFloat64(array[i], endianness);
    }
    /**
    * Writes a Float32Array of specified endianness to the DataStream.
    *
    * @param array The array to write.
    * @param endianness Endianness of the data to write.
    * @bundle DataStream-write.js
    */
    writeFloat32Array(array, endianness) {
      this._realloc(array.length * 4);
      if (array instanceof Float32Array && this.byteOffset + this.position % array.BYTES_PER_ELEMENT === 0) {
        DataStream2.memcpy(this._buffer, this.byteOffset + this.position, array.buffer, 0, array.byteLength);
        this.mapFloat32Array(array.length, endianness);
      } else for (let i = 0; i < array.length; i++) this.writeFloat32(array[i], endianness);
    }
    /**
    * Writes a 64-bit int to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeInt64(value, endianness) {
      this._realloc(8);
      this._dataView.setBigInt64(this.position, BigInt(value), (endianness ?? this.endianness) === 2);
      this.position += 8;
    }
    /**
    * Writes a 32-bit int to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeInt32(value, endianness) {
      this._realloc(4);
      this._dataView.setInt32(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 4;
    }
    /**
    * Writes a 16-bit int to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeInt16(value, endianness) {
      this._realloc(2);
      this._dataView.setInt16(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 2;
    }
    /**
    * Writes an 8-bit int to the DataStream.
    *
    * @param value Number to write.
    * @bundle DataStream-write.js
    */
    writeInt8(value) {
      this._realloc(1);
      this._dataView.setInt8(this.position, value);
      this.position += 1;
    }
    /**
    * Writes a 32-bit unsigned int to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeUint32(value, endianness) {
      this._realloc(4);
      this._dataView.setUint32(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 4;
    }
    /**
    * Writes a 16-bit unsigned int to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeUint16(value, endianness) {
      this._realloc(2);
      this._dataView.setUint16(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 2;
    }
    /**
    * Writes an 8-bit unsigned  int to the DataStream.
    *
    * @param value Number to write.
    * @bundle DataStream-write.js
    */
    writeUint8(value) {
      this._realloc(1);
      this._dataView.setUint8(this.position, value);
      this.position += 1;
    }
    /**
    * Writes a 32-bit float to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeFloat32(value, endianness) {
      this._realloc(4);
      this._dataView.setFloat32(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 4;
    }
    /**
    * Writes a 64-bit float to the DataStream with the desired endianness.
    *
    * @param value Number to write.
    * @param endianness Endianness of the number.
    * @bundle DataStream-write.js
    */
    writeFloat64(value, endianness) {
      this._realloc(8);
      this._dataView.setFloat64(this.position, value, (endianness ?? this.endianness) === 2);
      this.position += 8;
    }
    /**
    * Write a UCS-2 string of desired endianness to the DataStream. The
    * lengthOverride argument lets you define the number of characters to write.
    * If the string is shorter than lengthOverride, the extra space is padded with
    * zeroes.
    *
    * @param value The string to write.
    * @param endianness The endianness to use for the written string data.
    * @param lengthOverride The number of characters to write.
    * @bundle DataStream-write.js
    */
    writeUCS2String(value, endianness, lengthOverride) {
      if (lengthOverride === void 0) lengthOverride = value.length;
      let i;
      for (i = 0; i < value.length && i < lengthOverride; i++) this.writeUint16(value.charCodeAt(i), endianness);
      for (; i < lengthOverride; i++) this.writeUint16(0);
    }
    /**
    * Writes a string of desired length and encoding to the DataStream.
    *
    * @param value The string to write.
    * @param encoding The encoding for the written string data.
    *                           Defaults to ASCII.
    * @param length The number of characters to write.
    * @bundle DataStream-write.js
    */
    writeString(value, encoding, length) {
      let i = 0;
      if (encoding === void 0 || encoding === "ASCII") if (length !== void 0) {
        const len = Math.min(value.length, length);
        for (i = 0; i < len; i++) this.writeUint8(value.charCodeAt(i));
        for (; i < length; i++) this.writeUint8(0);
      } else for (i = 0; i < value.length; i++) this.writeUint8(value.charCodeAt(i));
      else this.writeUint8Array(new TextEncoder(encoding).encode(value.substring(0, length)));
    }
    /**
    * Writes a null-terminated string to DataStream and zero-pads it to length
    * bytes. If length is not given, writes the string followed by a zero.
    * If string is longer than length, the written part of the string does not have
    * a trailing zero.
    *
    * @param value The string to write.
    * @param length The number of characters to write.
    * @bundle DataStream-write.js
    */
    writeCString(value, length) {
      let i = 0;
      if (length !== void 0) {
        const len = Math.min(value.length, length);
        for (i = 0; i < len; i++) this.writeUint8(value.charCodeAt(i));
        for (; i < length; i++) this.writeUint8(0);
      } else {
        for (i = 0; i < value.length; i++) this.writeUint8(value.charCodeAt(i));
        this.writeUint8(0);
      }
    }
    /**
    * Writes a struct to the DataStream. Takes a structDefinition that gives the
    * types and a struct object that gives the values. Refer to readStruct for the
    * structure of structDefinition.
    *
    * @param structDefinition Type definition of the struct.
    * @param struct The struct data object.
    * @bundle DataStream-write.js
    */
    writeStruct(structDefinition, struct) {
      for (let i = 0; i < structDefinition.length; i++) {
        const [structName, structType] = structDefinition[i];
        const structValue = struct[structName];
        this.writeType(structType, structValue, struct);
      }
    }
    /**
    * Writes object v of type t to the DataStream.
    *
    * @param type Type of data to write.
    * @param value Value of data to write.
    * @param struct Struct to pass to write callback functions.
    * @bundle DataStream-write.js
    */
    writeType(type, value, struct) {
      if (typeof type === "function") return type(this, value);
      else if (typeof type === "object" && !(type instanceof Array)) return type.set(this, value, struct);
      let lengthOverride;
      let charset = "ASCII";
      const pos = this.position;
      let parsedType = type;
      if (typeof type === "string" && /:/.test(type)) {
        const tp = type.split(":");
        parsedType = tp[0];
        lengthOverride = parseInt(tp[1]);
      }
      if (typeof parsedType === "string" && /,/.test(parsedType)) {
        const tp = parsedType.split(",");
        parsedType = tp[0];
        charset = tp[1];
      }
      switch (parsedType) {
        case "uint8":
          this.writeUint8(value);
          break;
        case "int8":
          this.writeInt8(value);
          break;
        case "uint16":
          this.writeUint16(value, this.endianness);
          break;
        case "int16":
          this.writeInt16(value, this.endianness);
          break;
        case "uint32":
          this.writeUint32(value, this.endianness);
          break;
        case "int32":
          this.writeInt32(value, this.endianness);
          break;
        case "float32":
          this.writeFloat32(value, this.endianness);
          break;
        case "float64":
          this.writeFloat64(value, this.endianness);
          break;
        case "uint16be":
          this.writeUint16(value, 1);
          break;
        case "int16be":
          this.writeInt16(value, 1);
          break;
        case "uint32be":
          this.writeUint32(value, 1);
          break;
        case "int32be":
          this.writeInt32(value, 1);
          break;
        case "float32be":
          this.writeFloat32(value, 1);
          break;
        case "float64be":
          this.writeFloat64(value, 1);
          break;
        case "uint16le":
          this.writeUint16(value, 2);
          break;
        case "int16le":
          this.writeInt16(value, 2);
          break;
        case "uint32le":
          this.writeUint32(value, 2);
          break;
        case "int32le":
          this.writeInt32(value, 2);
          break;
        case "float32le":
          this.writeFloat32(value, 2);
          break;
        case "float64le":
          this.writeFloat64(value, 2);
          break;
        case "cstring":
          this.writeCString(value, lengthOverride);
          break;
        case "string":
          this.writeString(value, charset, lengthOverride);
          break;
        case "u16string":
          this.writeUCS2String(value, this.endianness, lengthOverride);
          break;
        case "u16stringle":
          this.writeUCS2String(value, 2, lengthOverride);
          break;
        case "u16stringbe":
          this.writeUCS2String(value, 1, lengthOverride);
          break;
        default:
          if (this.#isTupleType(parsedType)) {
            const [, ta] = parsedType;
            for (let i = 0; i < value.length; i++) this.writeType(ta, value[i]);
            break;
          } else {
            this.writeStruct(parsedType, value);
            break;
          }
      }
      if (lengthOverride) {
        this.position = pos;
        this._realloc(lengthOverride);
        this.position = pos + lengthOverride;
      }
    }
    /** @bundle DataStream-write.js */
    writeUint64(value) {
      const h = Math.floor(value / MAX_SIZE);
      this.writeUint32(h);
      this.writeUint32(value & 4294967295);
    }
    /** @bundle DataStream-write.js */
    writeUint24(value) {
      this.writeUint8((value & 16711680) >> 16);
      this.writeUint8((value & 65280) >> 8);
      this.writeUint8(value & 255);
    }
    /** @bundle DataStream-write.js */
    adjustUint32(position, value) {
      const pos = this.position;
      this.seek(position);
      this.writeUint32(value);
      this.seek(pos);
    }
    /**
    * Reads a struct of data from the DataStream. The struct is defined as
    * an array of [name, type]-pairs. See the example below:
    *
    * ```ts
    * ds.readStruct([
    *   ['headerTag', 'uint32'], // Uint32 in DataStream endianness.
    *   ['headerTag2', 'uint32be'], // Big-endian Uint32.
    *   ['headerTag3', 'uint32le'], // Little-endian Uint32.
    *   ['array', ['[]', 'uint32', 16]], // Uint32Array of length 16.
    *   ['array2', ['[]', 'uint32', 'array2Length']] // Uint32Array of length array2Length
    * ]);
    * ```
    *
    * The possible values for the type are as follows:
    *
    * ## Number types
    *
    * Unsuffixed number types use DataStream endianness.
    * To explicitly specify endianness, suffix the type with
    * 'le' for little-endian or 'be' for big-endian,
    * e.g. 'int32be' for big-endian int32.
    *
    * - `uint8` -- 8-bit unsigned int
    * - `uint16` -- 16-bit unsigned int
    * - `uint32` -- 32-bit unsigned int
    * - `int8` -- 8-bit int
    * - `int16` -- 16-bit int
    * - `int32` -- 32-bit int
    * - `float32` -- 32-bit float
    * - `float64` -- 64-bit float
    *
    * ## String types
    *
    * - `cstring` -- ASCII string terminated by a zero byte.
    * - `string:N` -- ASCII string of length N.
    * - `string,CHARSET:N` -- String of byteLength N encoded with given CHARSET.
    * - `u16string:N` -- UCS-2 string of length N in DataStream endianness.
    * - `u16stringle:N` -- UCS-2 string of length N in little-endian.
    * - `u16stringbe:N` -- UCS-2 string of length N in big-endian.
    *
    * ## Complex types
    *
    * ### Struct
    * ```ts
    * [[name, type], [name_2, type_2], ..., [name_N, type_N]]
    * ```
    *
    * ### Callback function to read and return data
    * ```ts
    * function(dataStream, struct) {}
    * ```
    *
    * ###  Getter/setter functions
    * to read and return data, handy for using the same struct definition
    * for reading and writing structs.
    * ```ts
    * {
    *    get: function(dataStream, struct) {},
    *    set: function(dataStream, struct) {}
    * }
    * ```
    *
    * ### Array
    * Array of given type and length. The length can be either
    * - a number
    * - a string that references a previously-read field
    * - `*`
    * - a callback: `function(struct, dataStream, type){}`
    *
    * If length is `*`, reads in as many elements as it can.
    * ```ts
    * ['[]', type, length]
    * ```
    *
    * @param structDefinition Struct definition object.
    * @return The read struct. Null if failed to read struct.
    * @bundle DataStream-read-struct.js
    */
    readStruct(structDefinition) {
      const struct = {};
      const p = this.position;
      for (let i = 0; i < structDefinition.length; i += 1) {
        const t = structDefinition[i][1];
        const v = this.readType(t, struct);
        if (!v) {
          if (this.failurePosition === 0) this.failurePosition = this.position;
          this.position = p;
          return;
        }
        struct[structDefinition[i][0]] = v;
      }
      return struct;
    }
    /**
    * Read UCS-2 string of desired length and endianness from the DataStream.
    *
    * @param length The length of the string to read.
    * @param endianness The endianness of the string data in the DataStream.
    * @return The read string.
    * @bundle DataStream-read-struct.js
    */
    readUCS2String(length, endianness) {
      return String.fromCharCode.apply(void 0, this.readUint16Array(length, endianness));
    }
    /**
    * Reads an object of type t from the DataStream, passing struct as the thus-far
    * read struct to possible callbacks that refer to it. Used by readStruct for
    * reading in the values, so the type is one of the readStruct types.
    *
    * @param type Type of the object to read.
    * @param struct Struct to refer to when resolving length references
    *                         and for calling callbacks.
    * @return  Returns the object on successful read, null on unsuccessful.
    * @bundle DataStream-read-struct.js
    */
    readType(type, struct) {
      if (typeof type === "function") return type(this, struct);
      if (typeof type === "object" && !(type instanceof Array)) return type.get(this, struct);
      if (type instanceof Array && type.length !== 3) return this.readStruct(type);
      let value;
      let lengthOverride;
      let charset = "ASCII";
      const pos = this.position;
      let parsedType = type;
      if (typeof parsedType === "string" && /:/.test(parsedType)) {
        const tp = parsedType.split(":");
        parsedType = tp[0];
        lengthOverride = parseInt(tp[1]);
      }
      if (typeof parsedType === "string" && /,/.test(parsedType)) {
        const tp = parsedType.split(",");
        parsedType = tp[0];
        charset = tp[1];
      }
      switch (parsedType) {
        case "uint8":
          value = this.readUint8();
          break;
        case "int8":
          value = this.readInt8();
          break;
        case "uint16":
          value = this.readUint16(this.endianness);
          break;
        case "int16":
          value = this.readInt16(this.endianness);
          break;
        case "uint32":
          value = this.readUint32(this.endianness);
          break;
        case "int32":
          value = this.readInt32(this.endianness);
          break;
        case "float32":
          value = this.readFloat32(this.endianness);
          break;
        case "float64":
          value = this.readFloat64(this.endianness);
          break;
        case "uint16be":
          value = this.readUint16(1);
          break;
        case "int16be":
          value = this.readInt16(1);
          break;
        case "uint32be":
          value = this.readUint32(1);
          break;
        case "int32be":
          value = this.readInt32(1);
          break;
        case "float32be":
          value = this.readFloat32(1);
          break;
        case "float64be":
          value = this.readFloat64(1);
          break;
        case "uint16le":
          value = this.readUint16(2);
          break;
        case "int16le":
          value = this.readInt16(2);
          break;
        case "uint32le":
          value = this.readUint32(2);
          break;
        case "int32le":
          value = this.readInt32(2);
          break;
        case "float32le":
          value = this.readFloat32(2);
          break;
        case "float64le":
          value = this.readFloat64(2);
          break;
        case "cstring":
          value = this.readCString(lengthOverride);
          break;
        case "string":
          value = this.readString(lengthOverride, charset);
          break;
        case "u16string":
          value = this.readUCS2String(lengthOverride, this.endianness);
          break;
        case "u16stringle":
          value = this.readUCS2String(lengthOverride, 2);
          break;
        case "u16stringbe":
          value = this.readUCS2String(lengthOverride, 1);
          break;
        default:
          if (this.#isTupleType(parsedType)) {
            const [, ta, len] = parsedType;
            const length = typeof len === "function" ? len(struct, this, parsedType) : typeof len === "string" && struct[len] !== void 0 ? parseInt(struct[len]) : typeof len === "number" ? len : len === "*" ? void 0 : parseInt(len);
            if (typeof ta === "string") {
              const tap = ta.replace(/(le|be)$/, "");
              let endianness;
              if (/le$/.test(ta)) endianness = 2;
              else if (/be$/.test(ta)) endianness = 1;
              switch (tap) {
                case "uint8":
                  value = this.readUint8Array(length);
                  break;
                case "uint16":
                  value = this.readUint16Array(length, endianness);
                  break;
                case "uint32":
                  value = this.readUint32Array(length, endianness);
                  break;
                case "int8":
                  value = this.readInt8Array(length);
                  break;
                case "int16":
                  value = this.readInt16Array(length, endianness);
                  break;
                case "int32":
                  value = this.readInt32Array(length, endianness);
                  break;
                case "float32":
                  value = this.readFloat32Array(length, endianness);
                  break;
                case "float64":
                  value = this.readFloat64Array(length, endianness);
                  break;
                case "cstring":
                case "utf16string":
                case "string":
                  if (!length) {
                    value = [];
                    while (!this.isEof()) {
                      const u = this.readType(ta, struct);
                      if (!u) break;
                      value.push(u);
                    }
                  } else {
                    value = new Array(length);
                    for (let i = 0; i < length; i++) value[i] = this.readType(ta, struct);
                  }
                  break;
              }
            } else if (!length) {
              value = [];
              while (true) {
                const pos2 = this.position;
                try {
                  const type2 = this.readType(ta, struct);
                  if (!type2) {
                    this.position = pos2;
                    break;
                  }
                  value.push(type2);
                } catch {
                  this.position = pos2;
                  break;
                }
              }
            } else {
              value = new Array(length);
              for (let i = 0; i < length; i++) {
                const type2 = this.readType(ta, struct);
                if (!type2) return;
                value[i] = type2;
              }
            }
            break;
          }
      }
      if (lengthOverride) this.position = pos + lengthOverride;
      return value;
    }
    /**
    * Maps an Int32Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Int32Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapInt32Array(length, endianness) {
      this._realloc(length * 4);
      const arr = new Int32Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 4;
      return arr;
    }
    /**
    * Maps an Int16Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Int16Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapInt16Array(length, endianness) {
      this._realloc(length * 2);
      const arr = new Int16Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 2;
      return arr;
    }
    /**
    * Maps an Int8Array into the DataStream buffer.
    *
    * Nice for quickly reading in data.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Int8Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapInt8Array(length, _endianness) {
      this._realloc(length * 1);
      const arr = new Int8Array(this._buffer, this.byteOffset + this.position, length);
      this.position += length * 1;
      return arr;
    }
    /**
    * Maps a Uint32Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Uint32Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapUint32Array(length, endianness) {
      this._realloc(length * 4);
      const arr = new Uint32Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 4;
      return arr;
    }
    /**
    * Maps a Uint16Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Uint16Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapUint16Array(length, endianness) {
      this._realloc(length * 2);
      const arr = new Uint16Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 2;
      return arr;
    }
    /**
    * Maps a Float64Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Float64Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapFloat64Array(length, endianness) {
      this._realloc(length * 8);
      const arr = new Float64Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 8;
      return arr;
    }
    /**
    * Maps a Float32Array into the DataStream buffer, swizzling it to native
    * endianness in-place. The current offset from the start of the buffer needs to
    * be a multiple of element size, just like with typed array views.
    *
    * Nice for quickly reading in data. Warning: potentially modifies the buffer
    * contents.
    *
    * @param length Number of elements to map.
    * @param endianness Endianness of the data to read.
    * @return Float32Array to the DataStream backing buffer.
    * @bundle DataStream-map.js
    */
    mapFloat32Array(length, endianness) {
      this._realloc(length * 4);
      const arr = new Float32Array(this._buffer, this.byteOffset + this.position, length);
      DataStream2.arrayToNative(arr, endianness ?? this.endianness);
      this.position += length * 4;
      return arr;
    }
  };
  function fromCharCodeUint8(uint8arr) {
    const arr = [];
    for (let i = 0; i < uint8arr.length; i++) arr[i] = uint8arr[i];
    return String.fromCharCode.apply(void 0, arr);
  }
  var start = /* @__PURE__ */ new Date();
  var LOG_LEVEL_ERROR = 4;
  var LOG_LEVEL_WARNING = 3;
  var LOG_LEVEL_INFO = 2;
  var LOG_LEVEL_DEBUG = 1;
  var log_level = LOG_LEVEL_ERROR;
  var Log = {
    setLogLevel(level) {
      if (level === this.debug) log_level = LOG_LEVEL_DEBUG;
      else if (level === this.info) log_level = LOG_LEVEL_INFO;
      else if (level === this.warn) log_level = LOG_LEVEL_WARNING;
      else if (level === this.error) log_level = LOG_LEVEL_ERROR;
      else log_level = LOG_LEVEL_ERROR;
    },
    debug(module, msg) {
      if (console.debug === void 0) console.debug = console.log;
      if (LOG_LEVEL_DEBUG >= log_level) console.debug("[" + Log.getDurationString((/* @__PURE__ */ new Date()).getTime() - start.getTime(), 1e3) + "]", "[" + module + "]", msg);
    },
    log(module, _msg) {
      this.debug(module.msg);
    },
    info(module, msg) {
      if (LOG_LEVEL_INFO >= log_level) console.info("[" + Log.getDurationString((/* @__PURE__ */ new Date()).getTime() - start.getTime(), 1e3) + "]", "[" + module + "]", msg);
    },
    warn(module, msg) {
      if (LOG_LEVEL_WARNING >= log_level) console.warn("[" + Log.getDurationString((/* @__PURE__ */ new Date()).getTime() - start.getTime(), 1e3) + "]", "[" + module + "]", msg);
    },
    error(module, msg, isofile) {
      if (isofile?.onError) isofile.onError(module, msg);
      else if (LOG_LEVEL_ERROR >= log_level) console.error("[" + Log.getDurationString((/* @__PURE__ */ new Date()).getTime() - start.getTime(), 1e3) + "]", "[" + module + "]", msg);
    },
    getDurationString(duration, _timescale) {
      let neg;
      function pad(number, length) {
        const a = ("" + number).split(".");
        while (a[0].length < length) a[0] = "0" + a[0];
        return a.join(".");
      }
      if (duration < 0) {
        neg = true;
        duration = -duration;
      } else neg = false;
      let duration_sec = duration / (_timescale || 1);
      const hours = Math.floor(duration_sec / 3600);
      duration_sec -= hours * 3600;
      const minutes = Math.floor(duration_sec / 60);
      duration_sec -= minutes * 60;
      let msec = duration_sec * 1e3;
      duration_sec = Math.floor(duration_sec);
      msec -= duration_sec * 1e3;
      msec = Math.floor(msec);
      return (neg ? "-" : "") + hours + ":" + pad(minutes, 2) + ":" + pad(duration_sec, 2) + "." + pad(msec, 3);
    },
    printRanges(ranges) {
      const length = ranges.length;
      if (length > 0) {
        let str = "";
        for (let i = 0; i < length; i++) {
          if (i > 0) str += ",";
          str += "[" + Log.getDurationString(ranges.start(i)) + "," + Log.getDurationString(ranges.end(i)) + "]";
        }
        return str;
      } else return "(empty)";
    }
  };
  function concatBuffers(buffer1, buffer2) {
    Log.debug("ArrayBuffer", "Trying to create a new buffer of size: " + (buffer1.byteLength + buffer2.byteLength));
    const tmp = new Uint8Array(buffer1.byteLength + buffer2.byteLength);
    tmp.set(new Uint8Array(buffer1), 0);
    tmp.set(new Uint8Array(buffer2), buffer1.byteLength);
    return tmp.buffer;
  }
  var MultiBufferStream = class extends DataStream {
    constructor(buffer) {
      super(/* @__PURE__ */ new ArrayBuffer(), 0);
      this.buffers = [];
      this.bufferIndex = -1;
      if (buffer) {
        this.insertBuffer(buffer);
        this.bufferIndex = 0;
      }
    }
    /***********************************************************************************
    *                     Methods for the managnement of the buffers                  *
    *                     (insertion, removal, concatenation, ...)                    *
    ***********************************************************************************/
    initialized() {
      if (this.bufferIndex > -1) return true;
      else if (this.buffers.length > 0) {
        const firstBuffer = this.buffers[0];
        if (firstBuffer.fileStart === 0) {
          this.buffer = firstBuffer;
          this.bufferIndex = 0;
          Log.debug("MultiBufferStream", "Stream ready for parsing");
          return true;
        } else {
          Log.warn("MultiBufferStream", "The first buffer should have a fileStart of 0");
          this.logBufferLevel();
          return false;
        }
      } else {
        Log.warn("MultiBufferStream", "No buffer to start parsing from");
        this.logBufferLevel();
        return false;
      }
    }
    /**
    * Reduces the size of a given buffer, but taking the part between offset and offset+newlength
    * @param  {ArrayBuffer} buffer
    * @param  {Number}      offset    the start of new buffer
    * @param  {Number}      newLength the length of the new buffer
    * @return {ArrayBuffer}           the new buffer
    */
    reduceBuffer(buffer, offset, newLength) {
      const smallB = new Uint8Array(newLength);
      smallB.set(new Uint8Array(buffer, offset, newLength));
      smallB.buffer.fileStart = buffer.fileStart + offset;
      smallB.buffer.usedBytes = 0;
      return smallB.buffer;
    }
    /**
    * Inserts the new buffer in the sorted list of buffers,
    *  making sure, it is not overlapping with existing ones (possibly reducing its size).
    *  if the new buffer overrides/replaces the 0-th buffer (for instance because it is bigger),
    *  updates the DataStream buffer for parsing
    */
    insertBuffer(ab) {
      let to_add = true;
      let i = 0;
      for (; i < this.buffers.length; i++) {
        const b = this.buffers[i];
        if (ab.fileStart <= b.fileStart) {
          if (ab.fileStart === b.fileStart) if (ab.byteLength > b.byteLength) {
            this.buffers.splice(i, 1);
            i--;
            continue;
          } else Log.warn("MultiBufferStream", "Buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ") already appended, ignoring");
          else {
            if (ab.fileStart + ab.byteLength <= b.fileStart) {
            } else ab = this.reduceBuffer(ab, 0, b.fileStart - ab.fileStart);
            Log.debug("MultiBufferStream", "Appending new buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ")");
            this.buffers.splice(i, 0, ab);
            if (i === 0) this.buffer = ab;
          }
          to_add = false;
          break;
        } else if (ab.fileStart < b.fileStart + b.byteLength) {
          const offset = b.fileStart + b.byteLength - ab.fileStart;
          const newLength = ab.byteLength - offset;
          if (newLength > 0) ab = this.reduceBuffer(ab, offset, newLength);
          else {
            to_add = false;
            break;
          }
        }
      }
      if (to_add) {
        Log.debug("MultiBufferStream", "Appending new buffer (fileStart: " + ab.fileStart + " - Length: " + ab.byteLength + ")");
        this.buffers.push(ab);
        if (i === 0) this.buffer = ab;
      }
    }
    /**
    * Displays the status of the buffers (number and used bytes)
    * @param  {Object} info callback method for display
    */
    logBufferLevel(info) {
      const ranges = [];
      let bufferedString = "";
      let range;
      let used = 0;
      let total = 0;
      for (let i = 0; i < this.buffers.length; i++) {
        const buffer = this.buffers[i];
        if (i === 0) {
          range = {
            start: buffer.fileStart,
            end: buffer.fileStart + buffer.byteLength
          };
          ranges.push(range);
          bufferedString += "[" + range.start + "-";
        } else if (range.end === buffer.fileStart) range.end = buffer.fileStart + buffer.byteLength;
        else {
          range = {
            start: buffer.fileStart,
            end: buffer.fileStart + buffer.byteLength
          };
          bufferedString += ranges[ranges.length - 1].end - 1 + "], [" + range.start + "-";
          ranges.push(range);
        }
        used += buffer.usedBytes;
        total += buffer.byteLength;
      }
      if (ranges.length > 0) bufferedString += range.end - 1 + "]";
      const log = info ? Log.info : Log.debug;
      if (this.buffers.length === 0) log("MultiBufferStream", "No more buffer in memory");
      else log("MultiBufferStream", "" + this.buffers.length + " stored buffer(s) (" + used + "/" + total + " bytes), continuous ranges: " + bufferedString);
    }
    cleanBuffers() {
      for (let i = 0; i < this.buffers.length; i++) {
        const buffer = this.buffers[i];
        if (buffer.usedBytes === buffer.byteLength) {
          Log.debug("MultiBufferStream", "Removing buffer #" + i);
          this.buffers.splice(i, 1);
          i--;
        }
      }
    }
    mergeNextBuffer() {
      if (this.bufferIndex + 1 < this.buffers.length) {
        const next_buffer = this.buffers[this.bufferIndex + 1];
        if (next_buffer.fileStart === this.buffer.fileStart + this.buffer.byteLength) {
          const oldLength = this.buffer.byteLength;
          const oldUsedBytes = this.buffer.usedBytes;
          const oldFileStart = this.buffer.fileStart;
          this.buffers[this.bufferIndex] = concatBuffers(this.buffer, next_buffer);
          this.buffer = this.buffers[this.bufferIndex];
          this.buffers.splice(this.bufferIndex + 1, 1);
          this.buffer.usedBytes = oldUsedBytes;
          this.buffer.fileStart = oldFileStart;
          Log.debug("ISOFile", "Concatenating buffer for box parsing (length: " + oldLength + "->" + this.buffer.byteLength + ")");
          return true;
        } else return false;
      } else return false;
    }
    /*************************************************************************
    *                        Seek-related functions                         *
    *************************************************************************/
    /**
    * Finds the buffer that holds the given file position
    * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false)
    *                                or from the first buffer (true)
    * @param  {Number}  filePosition position in the file to seek to
    * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position
    *                                should be marked as used for garbage collection
    * @return {Number}               the index of the buffer holding the seeked file position, -1 if not found.
    */
    findPosition(fromStart, filePosition, markAsUsed) {
      let index = -1;
      let i = fromStart === true ? 0 : this.bufferIndex;
      while (i < this.buffers.length) {
        const abuffer2 = this.buffers[i];
        if (abuffer2 && abuffer2.fileStart <= filePosition) {
          index = i;
          if (markAsUsed) {
            if (abuffer2.fileStart + abuffer2.byteLength <= filePosition) abuffer2.usedBytes = abuffer2.byteLength;
            else abuffer2.usedBytes = filePosition - abuffer2.fileStart;
            this.logBufferLevel();
          }
        } else break;
        i++;
      }
      if (index === -1) return -1;
      const abuffer = this.buffers[index];
      if (abuffer.fileStart + abuffer.byteLength >= filePosition) {
        Log.debug("MultiBufferStream", "Found position in existing buffer #" + index);
        return index;
      } else return -1;
    }
    /**
    * Finds the largest file position contained in a buffer or in the next buffers if they are contiguous (no gap)
    * starting from the given buffer index or from the current buffer if the index is not given
    *
    * @param  {Number} inputindex Index of the buffer to start from
    * @return {Number}            The largest file position found in the buffers
    */
    findEndContiguousBuf(inputindex) {
      const index = inputindex !== void 0 ? inputindex : this.bufferIndex;
      let currentBuf = this.buffers[index];
      if (this.buffers.length > index + 1) for (let i = index + 1; i < this.buffers.length; i++) {
        const nextBuf = this.buffers[i];
        if (nextBuf.fileStart === currentBuf.fileStart + currentBuf.byteLength) currentBuf = nextBuf;
        else break;
      }
      return currentBuf.fileStart + currentBuf.byteLength;
    }
    /**
    * Returns the largest file position contained in the buffers, larger than the given position
    * @param  {Number} pos the file position to start from
    * @return {Number}     the largest position in the current buffer or in the buffer and the next contiguous
    *                      buffer that holds the given position
    */
    getEndFilePositionAfter(pos) {
      const index = this.findPosition(true, pos, false);
      if (index !== -1) return this.findEndContiguousBuf(index);
      else return pos;
    }
    /*************************************************************************
    *                  Garbage collection related functions                 *
    *************************************************************************/
    /**
    * Marks a given number of bytes as used in the current buffer for garbage collection
    * @param {Number} nbBytes
    */
    addUsedBytes(nbBytes) {
      this.buffer.usedBytes += nbBytes;
      this.logBufferLevel();
    }
    /**
    * Marks the entire current buffer as used, ready for garbage collection
    */
    setAllUsedBytes() {
      this.buffer.usedBytes = this.buffer.byteLength;
      this.logBufferLevel();
    }
    /*************************************************************************
    *          Common API between MultiBufferStream and SimpleStream        *
    *************************************************************************/
    /**
    * Tries to seek to a given file position
    * if possible, repositions the parsing from there and returns true
    * if not possible, does not change anything and returns false
    * @param  {Number}  filePosition position in the file to seek to
    * @param  {Boolean} fromStart    indicates if the search should start from the current buffer (false)
    *                                or from the first buffer (true)
    * @param  {Boolean} markAsUsed   indicates if the bytes in between the current position and the seek position
    *                                should be marked as used for garbage collection
    * @return {Boolean}              true if the seek succeeded, false otherwise
    */
    seek(filePosition, fromStart, markAsUsed) {
      const index = this.findPosition(fromStart, filePosition, markAsUsed);
      if (index !== -1) {
        this.buffer = this.buffers[index];
        this.bufferIndex = index;
        this.position = filePosition - this.buffer.fileStart;
        Log.debug("MultiBufferStream", "Repositioning parser at buffer position: " + this.position);
        return true;
      } else {
        Log.debug("MultiBufferStream", "Position " + filePosition + " not found in buffered data");
        return false;
      }
    }
    /**
    * Returns the current position in the file
    * @return {Number} the position in the file
    */
    getPosition() {
      if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === void 0) return 0;
      return this.buffers[this.bufferIndex].fileStart + this.position;
    }
    /**
    * Returns the length of the current buffer
    * @return {Number} the length of the current buffer
    */
    getLength() {
      return this.byteLength;
    }
    getEndPosition() {
      if (this.bufferIndex === -1 || this.buffers[this.bufferIndex] === void 0) return 0;
      return this.buffers[this.bufferIndex].fileStart + this.byteLength;
    }
    getAbsoluteEndPosition() {
      if (this.buffers.length === 0) return 0;
      const lastBuffer = this.buffers[this.buffers.length - 1];
      return lastBuffer.fileStart + lastBuffer.byteLength;
    }
  };
  var Box = class {
    static {
      this.registryId = /* @__PURE__ */ Symbol.for("BoxIdentifier");
    }
    #type;
    get type() {
      return this.constructor.fourcc ?? this.#type;
    }
    set type(value) {
      this.#type = value;
    }
    constructor(size = 0) {
      this.size = size;
    }
    addBox(box) {
      if (!this.boxes) this.boxes = [];
      this.boxes.push(box);
      if (this[box.type + "s"]) this[box.type + "s"].push(box);
      else this[box.type] = box;
      return box;
    }
    set(prop, value) {
      this[prop] = value;
      return this;
    }
    addEntry(value, _prop) {
      const prop = _prop || "entries";
      if (!this[prop]) this[prop] = [];
      this[prop].push(value);
      return this;
    }
    /** @bundle box-write.js */
    writeHeader(stream, msg) {
      this.size += 8;
      if (this.size > MAX_UINT32 || this.original_size === 1) this.size += 8;
      if (this.type === "uuid") this.size += 16;
      Log.debug("BoxWriter", "Writing box " + this.type + " of size: " + this.size + " at position " + stream.getPosition() + (msg || ""));
      if (this.original_size === 0) stream.writeUint32(0);
      else if (this.size > MAX_UINT32 || this.original_size === 1) stream.writeUint32(1);
      else {
        this.sizePosition = stream.getPosition();
        stream.writeUint32(this.size);
      }
      stream.writeString(this.type, void 0, 4);
      if (this.type === "uuid") {
        const uuidBytes = /* @__PURE__ */ new Uint8Array(16);
        for (let i = 0; i < 16; i++) uuidBytes[i] = parseInt(this.uuid.substring(i * 2, i * 2 + 2), 16);
        stream.writeUint8Array(uuidBytes);
      }
      if (this.size > MAX_UINT32 || this.original_size === 1) {
        this.sizePosition = stream.getPosition();
        stream.writeUint64(this.size);
      }
    }
    /** @bundle box-write.js */
    write(stream) {
      if (this.type === "mdat") {
        const box = this;
        if (box.stream) {
          this.size = box.stream.getAbsoluteEndPosition();
          this.writeHeader(stream);
          for (const buffer of box.stream.buffers) {
            const u8 = new Uint8Array(buffer);
            stream.writeUint8Array(u8);
          }
        } else if (box.data) {
          this.size = box.data.length;
          this.writeHeader(stream);
          stream.writeUint8Array(box.data);
        }
      } else {
        this.size = this.data ? this.data.length : 0;
        this.writeHeader(stream);
        if (this.data) stream.writeUint8Array(this.data);
      }
    }
    /** @bundle box-print.js */
    printHeader(output) {
      this.size += 8;
      if (this.size > MAX_UINT32) this.size += 8;
      if (this.type === "uuid") this.size += 16;
      output.log(output.indent + "size:" + this.size);
      output.log(output.indent + "type:" + this.type);
    }
    /** @bundle box-print.js */
    print(output) {
      this.printHeader(output);
    }
    /** @bundle box-parse.js */
    parse(stream) {
      if (this.type !== "mdat") this.data = stream.readUint8Array(this.size - this.hdr_size);
      else if (this.size === 0) stream.seek(stream.getEndPosition());
      else stream.seek(this.start + this.size);
    }
    /** @bundle box-parse.js */
    parseDataAndRewind(stream) {
      this.data = stream.readUint8Array(this.size - this.hdr_size);
      stream.seek(this.start + this.hdr_size);
    }
    /** @bundle box-parse.js */
    parseLanguage(stream) {
      this.language = stream.readUint16();
      const chars = [];
      chars[0] = this.language >> 10 & 31;
      chars[1] = this.language >> 5 & 31;
      chars[2] = this.language & 31;
      this.languageString = String.fromCharCode(chars[0] + 96, chars[1] + 96, chars[2] + 96);
    }
    /** @bundle isofile-advanced-creation.js */
    computeSize(stream_) {
      const stream = stream_ || new MultiBufferStream();
      this.write(stream);
    }
    isEndOfBox(stream) {
      return stream.getPosition() === this.start + this.size;
    }
  };
  var FullBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.flags = 0;
      this.version = 0;
    }
    /** @bundle box-write.js */
    writeHeader(stream) {
      this.size += 4;
      super.writeHeader(stream, " v=" + this.version + " f=" + this.flags);
      stream.writeUint8(this.version);
      stream.writeUint24(this.flags);
    }
    /** @bundle box-print.js */
    printHeader(output) {
      this.size += 4;
      super.printHeader(output);
      output.log(output.indent + "version:" + this.version);
      output.log(output.indent + "flags:" + this.flags);
    }
    /** @bundle box-parse.js */
    parseDataAndRewind(stream) {
      this.parseFullHeader(stream);
      this.data = stream.readUint8Array(this.size - this.hdr_size);
      this.hdr_size -= 4;
      stream.seek(this.start + this.hdr_size);
    }
    /** @bundle box-parse.js */
    parseFullHeader(stream) {
      this.version = stream.readUint8();
      this.flags = stream.readUint24();
      this.hdr_size += 4;
    }
    /** @bundle box-parse.js */
    parse(stream) {
      this.parseFullHeader(stream);
      this.data = stream.readUint8Array(this.size - this.hdr_size);
    }
  };
  var SampleGroupEntry = class {
    static {
      this.registryId = /* @__PURE__ */ Symbol.for("SampleGroupEntryIdentifier");
    }
    constructor(grouping_type) {
      this.grouping_type = grouping_type;
    }
    /** @bundle writing/samplegroups/samplegroup.js */
    write(stream) {
      stream.writeUint8Array(this.data);
    }
    /** @bundle parsing/samplegroups/samplegroup.js */
    parse(stream) {
      Log.warn("BoxParser", `Unknown sample group type: '${this.grouping_type}'`);
      this.data = stream.readUint8Array(this.description_length);
    }
  };
  var TrackGroupTypeBox = class extends FullBox {
    /** @bundle parsing/TrackGroup.js */
    parse(stream) {
      this.parseFullHeader(stream);
      this.track_group_id = stream.readUint32();
    }
  };
  var SingleItemTypeReferenceBox = class extends Box {
    constructor(fourcc, size, box_name, hdr_size, start2) {
      super(size);
      this.box_name = box_name;
      this.hdr_size = hdr_size;
      this.start = start2;
      this.type = fourcc;
    }
    parse(stream) {
      this.from_item_ID = stream.readUint16();
      const count = stream.readUint16();
      this.references = [];
      for (let i = 0; i < count; i++) this.references[i] = { to_item_ID: stream.readUint16() };
    }
  };
  var SingleItemTypeReferenceBoxLarge = class extends Box {
    constructor(fourcc, size, box_name, hdr_size, start2) {
      super(size);
      this.box_name = box_name;
      this.hdr_size = hdr_size;
      this.start = start2;
      this.type = fourcc;
    }
    parse(stream) {
      this.from_item_ID = stream.readUint32();
      const count = stream.readUint16();
      this.references = [];
      for (let i = 0; i < count; i++) this.references[i] = { to_item_ID: stream.readUint32() };
    }
  };
  var TrackReferenceTypeBox = class extends Box {
    constructor(fourcc, size, hdr_size, start2) {
      super(size);
      this.hdr_size = hdr_size;
      this.start = start2;
      this.type = fourcc;
    }
    parse(stream) {
      this.track_ids = stream.readUint32Array((this.size - this.hdr_size) / 4);
    }
    /** @bundle box-write.js */
    write(stream) {
      this.size = this.track_ids.length * 4;
      this.writeHeader(stream);
      stream.writeUint32Array(this.track_ids);
    }
  };
  var DIFF_BOXES_PROP_NAMES = [
    "boxes",
    "entries",
    "references",
    "subsamples",
    "items",
    "item_infos",
    "extents",
    "associations",
    "subsegments",
    "ranges",
    "seekLists",
    "seekPoints",
    "esd",
    "levels"
  ];
  var DIFF_PRIMITIVE_ARRAY_PROP_NAMES = [
    "compatible_brands",
    "matrix",
    "opcolor",
    "sample_counts",
    "sample_deltas",
    "first_chunk",
    "samples_per_chunk",
    "sample_sizes",
    "chunk_offsets",
    "sample_offsets",
    "sample_description_index",
    "sample_duration"
  ];
  function boxEqualFields(box_a, box_b) {
    if (box_a && !box_b) return false;
    let prop;
    for (prop in box_a) if (DIFF_BOXES_PROP_NAMES.find((name) => name === prop)) continue;
    else if (box_a[prop] instanceof Box || box_b[prop] instanceof Box) continue;
    else if (typeof box_a[prop] === "undefined" || typeof box_b[prop] === "undefined") continue;
    else if (typeof box_a[prop] === "function" || typeof box_b[prop] === "function") continue;
    else if ("subBoxNames" in box_a && box_a.subBoxNames.indexOf(prop.slice(0, 4)) > -1 || "subBoxNames" in box_b && box_b.subBoxNames.indexOf(prop.slice(0, 4)) > -1) continue;
    else if (prop === "data" || prop === "start" || prop === "size" || prop === "creation_time" || prop === "modification_time") continue;
    else if (DIFF_PRIMITIVE_ARRAY_PROP_NAMES.find((name) => name === prop)) continue;
    else if (box_a[prop] !== box_b[prop]) return false;
    return true;
  }
  function boxEqual(box_a, box_b) {
    if (!boxEqualFields(box_a, box_b)) return false;
    for (let j = 0; j < DIFF_BOXES_PROP_NAMES.length; j++) {
      const name = DIFF_BOXES_PROP_NAMES[j];
      if (box_a[name] && box_b[name]) {
        if (!boxEqual(box_a[name], box_b[name])) return false;
      }
    }
    return true;
  }
  function getRegistryId(boxClass) {
    let current = boxClass;
    while (current) {
      if ("registryId" in current) return current["registryId"];
      current = Object.getPrototypeOf(current);
    }
  }
  var isSampleGroupEntry = (value) => {
    const symbol = /* @__PURE__ */ Symbol.for("SampleGroupEntryIdentifier");
    return getRegistryId(value) === symbol;
  };
  var isSampleEntry = (value) => {
    const symbol = /* @__PURE__ */ Symbol.for("SampleEntryIdentifier");
    return getRegistryId(value) === symbol;
  };
  var isBox = (value) => {
    const symbol = /* @__PURE__ */ Symbol.for("BoxIdentifier");
    return getRegistryId(value) === symbol;
  };
  var BoxRegistry = {
    uuid: {},
    sampleEntry: {},
    sampleGroupEntry: {},
    box: {}
  };
  function registerBoxes(registry) {
    const localRegistry = {
      uuid: {},
      sampleEntry: {},
      sampleGroupEntry: {},
      box: {}
    };
    for (const [key, value] of Object.entries(registry)) {
      if (isSampleGroupEntry(value)) {
        const groupingType = "grouping_type" in value ? value.grouping_type : void 0;
        if (!groupingType) throw new Error(`SampleGroupEntry class ${key} does not have a valid static grouping_type. Please ensure it is defined correctly.`);
        if (groupingType in localRegistry.sampleGroupEntry) throw new Error(`SampleGroupEntry class ${key} has a grouping_type that is already registered. Please ensure it is unique.`);
        localRegistry.sampleGroupEntry[groupingType] = value;
        continue;
      }
      if (isSampleEntry(value)) {
        const fourcc = "fourcc" in value ? value.fourcc : void 0;
        if (!fourcc) throw new Error(`SampleEntry class ${key} does not have a valid static fourcc. Please ensure it is defined correctly.`);
        if (fourcc in localRegistry.sampleEntry) throw new Error(`SampleEntry class ${key} has a fourcc that is already registered. Please ensure it is unique.`);
        localRegistry.sampleEntry[fourcc] = value;
        continue;
      }
      if (isBox(value)) {
        const fourcc = "fourcc" in value ? value.fourcc : void 0;
        const uuid = "uuid" in value ? value.uuid : void 0;
        if (fourcc === "uuid") {
          if (!uuid) throw new Error(`Box class ${key} has a fourcc of 'uuid' but does not have a valid uuid. Please ensure it is defined correctly.`);
          if (uuid in localRegistry.uuid) throw new Error(`Box class ${key} has a uuid that is already registered. Please ensure it is unique.`);
          localRegistry.uuid[uuid] = value;
          continue;
        }
        localRegistry.box[fourcc] = value;
        continue;
      }
      throw new Error(`Box class ${key} does not have a valid static fourcc, uuid, or grouping_type. Please ensure it is defined correctly.`);
    }
    BoxRegistry.uuid = { ...localRegistry.uuid };
    BoxRegistry.sampleEntry = { ...localRegistry.sampleEntry };
    BoxRegistry.sampleGroupEntry = { ...localRegistry.sampleGroupEntry };
    BoxRegistry.box = { ...localRegistry.box };
    return BoxRegistry;
  }
  var DescriptorRegistry = {};
  function registerDescriptors(registry) {
    Object.entries(registry).forEach(([key, value]) => DescriptorRegistry[key] = value);
    return DescriptorRegistry;
  }
  function parseUUID(stream) {
    return parseHex16(stream);
  }
  function parseHex16(stream) {
    let hex16 = "";
    for (let i = 0; i < 16; i++) {
      const hex = stream.readUint8().toString(16);
      hex16 += hex.length === 1 ? "0" + hex : hex;
    }
    return hex16;
  }
  function parseOneBox(stream, headerOnly, parentSize) {
    let box;
    let originalSize;
    const start2 = stream.getPosition();
    let hdr_size = 0;
    let uuid;
    if (stream.getEndPosition() - start2 < 8) {
      Log.debug("BoxParser", "Not enough data in stream to parse the type and size of the box");
      return { code: 0 };
    }
    if (parentSize && parentSize < 8) {
      Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a new box");
      return { code: 0 };
    }
    let size = stream.readUint32();
    const type = stream.readString(4);
    if (type.length !== 4 || !/^[\x20-\x7E]{4}$/.test(type)) {
      Log.error("BoxParser", `Invalid box type: '${type}'`);
      return {
        code: -1,
        start: start2,
        type
      };
    }
    let box_type = type;
    Log.debug("BoxParser", "Found box of type '" + type + "' and size " + size + " at position " + start2);
    hdr_size = 8;
    if (type === "uuid") {
      if (stream.getEndPosition() - stream.getPosition() < 16 || parentSize - hdr_size < 16) {
        stream.seek(start2);
        Log.debug("BoxParser", "Not enough bytes left in the parent box to parse a UUID box");
        return { code: 0 };
      }
      uuid = parseUUID(stream);
      hdr_size += 16;
      box_type = uuid;
    }
    if (size === 1) {
      if (stream.getEndPosition() - stream.getPosition() < 8 || parentSize && parentSize - hdr_size < 8) {
        stream.seek(start2);
        Log.warn("BoxParser", 'Not enough data in stream to parse the extended size of the "' + type + '" box');
        return { code: 0 };
      }
      originalSize = size;
      size = stream.readUint64();
      hdr_size += 8;
    } else if (size === 0) if (parentSize) size = parentSize;
    else if (type !== "mdat") {
      Log.error("BoxParser", "Unlimited box size not supported for type: '" + type + "'");
      box = new Box(size);
      box.type = type;
      return {
        code: 1,
        box,
        size: box.size
      };
    } else size = stream.getEndPosition() - start2;
    if (size !== 0 && size < hdr_size) {
      Log.error("BoxParser", "Box of type " + type + " has an invalid size " + size + " (too small to be a box)");
      return {
        code: 0,
        type,
        size,
        hdr_size,
        start: start2
      };
    }
    if (size !== 0 && parentSize && size > parentSize) {
      Log.error("BoxParser", "Box of type '" + type + "' has a size " + size + " greater than its container size " + parentSize);
      return {
        code: 0,
        type,
        size,
        hdr_size,
        start: start2
      };
    }
    if (size !== 0 && start2 + size > stream.getEndPosition()) {
      stream.seek(start2);
      Log.info("BoxParser", "Not enough data in stream to parse the entire '" + type + "' box");
      return {
        code: 0,
        type,
        size,
        hdr_size,
        start: start2,
        original_size: originalSize
      };
    }
    if (headerOnly) return {
      code: 1,
      type,
      size,
      hdr_size,
      start: start2
    };
    else if (type in BoxRegistry.box) box = new BoxRegistry.box[type](size);
    else if (type !== "uuid") {
      Log.warn("BoxParser", `Unknown box type: '${type}'`);
      box = new Box(size);
      box.type = type;
      box.has_unparsed_data = true;
    } else if (uuid in BoxRegistry.uuid) box = new BoxRegistry.uuid[uuid](size);
    else {
      Log.warn("BoxParser", `Unknown UUID box type: '${uuid}'`);
      box = new Box(size);
      box.type = type;
      box.uuid = uuid;
      box.has_unparsed_data = true;
    }
    box.original_size = originalSize;
    box.hdr_size = hdr_size;
    box.start = start2;
    if (box.write === Box.prototype.write && box.type !== "mdat") {
      Log.info("BoxParser", "'" + box_type + "' box writing not yet implemented, keeping unparsed data in memory for later write");
      box.parseDataAndRewind(stream);
    }
    box.parse(stream);
    const diff = stream.getPosition() - (box.start + box.size);
    if (diff < 0) {
      Log.warn("BoxParser", "Parsing of box '" + box_type + "' did not read the entire indicated box data size (missing " + -diff + " bytes), seeking forward");
      stream.seek(box.start + box.size);
    } else if (diff > 0 && box.size !== 0) {
      Log.error("BoxParser", "Parsing of box '" + box_type + "' read " + diff + " more bytes than the indicated box data size, seeking backwards");
      stream.seek(box.start + box.size);
    }
    return {
      code: 1,
      box,
      size: box.size
    };
  }
  var ContainerBox = class extends Box {
    /** @bundle box-write.js */
    write(stream) {
      this.size = 0;
      this.writeHeader(stream);
      if (this.boxes) {
        for (let i = 0; i < this.boxes.length; i++) if (this.boxes[i]) {
          this.boxes[i].write(stream);
          this.size += this.boxes[i].size;
        }
      }
      Log.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
      stream.adjustUint32(this.sizePosition, this.size);
    }
    /** @bundle box-print.js */
    print(output) {
      this.printHeader(output);
      for (let i = 0; i < this.boxes.length; i++) if (this.boxes[i]) {
        const prev_indent = output.indent;
        output.indent += " ";
        this.boxes[i].print(output);
        output.indent = prev_indent;
      }
    }
    /** @bundle box-parse.js */
    parse(stream) {
      let ret;
      while (stream.getPosition() < this.start + this.size) {
        ret = parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          const box = ret.box;
          if (!this.boxes) this.boxes = [];
          this.boxes.push(box);
          if (this.subBoxNames && this.subBoxNames.indexOf(box.type) !== -1) {
            const fourcc = this.subBoxNames[this.subBoxNames.indexOf(box.type)] + "s";
            if (!this[fourcc]) this[fourcc] = [];
            this[fourcc].push(box);
          } else {
            const box_type = box.type !== "uuid" ? box.type : box.uuid;
            if (this[box_type]) Log.warn("ContainerBox", `Box of type ${box_type} already exists in container box ${this.type}.`);
            else this[box_type] = box;
          }
        } else return;
      }
    }
  };
  var SampleEntry = class extends ContainerBox {
    static {
      this.registryId = /* @__PURE__ */ Symbol.for("SampleEntryIdentifier");
    }
    constructor(size, hdr_size, start2) {
      super(size);
      this.hdr_size = hdr_size;
      this.start = start2;
    }
    /** @bundle box-codecs.js */
    isVideo() {
      return false;
    }
    /** @bundle box-codecs.js */
    isAudio() {
      return false;
    }
    /** @bundle box-codecs.js */
    isSubtitle() {
      return false;
    }
    /** @bundle box-codecs.js */
    isMetadata() {
      return false;
    }
    /** @bundle box-codecs.js */
    isHint() {
      return false;
    }
    /** @bundle box-codecs.js */
    getCodec() {
      return this.type.replace(".", "");
    }
    /** @bundle box-codecs.js */
    getWidth() {
      return "";
    }
    /** @bundle box-codecs.js */
    getHeight() {
      return "";
    }
    /** @bundle box-codecs.js */
    getChannelCount() {
      return "";
    }
    /** @bundle box-codecs.js */
    getSampleRate() {
      return "";
    }
    /** @bundle box-codecs.js */
    getSampleSize() {
      return "";
    }
    /** @bundle parsing/sampleentries/sampleentry.js */
    parseHeader(stream) {
      stream.readUint8Array(6);
      this.data_reference_index = stream.readUint16();
      this.hdr_size += 8;
    }
    /** @bundle parsing/sampleentries/sampleentry.js */
    parse(stream) {
      this.parseHeader(stream);
      this.data = stream.readUint8Array(this.size - this.hdr_size);
    }
    /** @bundle parsing/sampleentries/sampleentry.js */
    parseDataAndRewind(stream) {
      this.parseHeader(stream);
      this.data = stream.readUint8Array(this.size - this.hdr_size);
      this.hdr_size -= 8;
      stream.seek(this.start + this.hdr_size);
    }
    /** @bundle parsing/sampleentries/sampleentry.js */
    parseFooter(stream) {
      super.parse(stream);
    }
    /** @bundle writing/sampleentry.js */
    writeHeader(stream) {
      this.size = 8;
      super.writeHeader(stream);
      stream.writeUint8(0);
      stream.writeUint8(0);
      stream.writeUint8(0);
      stream.writeUint8(0);
      stream.writeUint8(0);
      stream.writeUint8(0);
      stream.writeUint16(this.data_reference_index);
    }
    /** @bundle writing/sampleentry.js */
    writeFooter(stream) {
      if (this.boxes) for (let i = 0; i < this.boxes.length; i++) {
        this.boxes[i].write(stream);
        this.size += this.boxes[i].size;
      }
      Log.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
      stream.adjustUint32(this.sizePosition, this.size);
    }
    /** @bundle writing/sampleentry.js */
    write(stream) {
      this.writeHeader(stream);
      stream.writeUint8Array(this.data);
      this.size += this.data.length;
      Log.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
      stream.adjustUint32(this.sizePosition, this.size);
    }
  };
  var HintSampleEntry = class extends SampleEntry {
  };
  var MetadataSampleEntry = class extends SampleEntry {
    /** @bundle box-codecs.js */
    isMetadata() {
      return true;
    }
  };
  var SubtitleSampleEntry = class extends SampleEntry {
    /** @bundle box-codecs.js */
    isSubtitle() {
      return true;
    }
  };
  var TextSampleEntry = class extends SampleEntry {
  };
  var VisualSampleEntry = class extends SampleEntry {
    parse(stream) {
      this.parseHeader(stream);
      stream.readUint16();
      stream.readUint16();
      stream.readUint32Array(3);
      this.width = stream.readUint16();
      this.height = stream.readUint16();
      this.horizresolution = stream.readUint32();
      this.vertresolution = stream.readUint32();
      stream.readUint32();
      this.frame_count = stream.readUint16();
      const compressorname_length = Math.min(31, stream.readUint8());
      this.compressorname = stream.readString(compressorname_length);
      if (compressorname_length < 31) stream.readString(31 - compressorname_length);
      this.depth = stream.readUint16();
      stream.readUint16();
      this.parseFooter(stream);
    }
    /** @bundle box-codecs.js */
    isVideo() {
      return true;
    }
    /** @bundle box-codecs.js */
    getWidth() {
      return this.width;
    }
    /** @bundle box-codecs.js */
    getHeight() {
      return this.height;
    }
    /** @bundle writing/sampleentries/sampleentry.js */
    write(stream) {
      this.writeHeader(stream);
      this.size += 70;
      stream.writeUint16(0);
      stream.writeUint16(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint16(this.width);
      stream.writeUint16(this.height);
      stream.writeUint32(this.horizresolution);
      stream.writeUint32(this.vertresolution);
      stream.writeUint32(0);
      stream.writeUint16(this.frame_count);
      stream.writeUint8(Math.min(31, this.compressorname.length));
      stream.writeString(this.compressorname, void 0, 31);
      stream.writeUint16(this.depth);
      stream.writeInt16(-1);
      this.writeFooter(stream);
    }
  };
  var AudioSampleEntry = class extends SampleEntry {
    parse(stream) {
      this.parseHeader(stream);
      this.version = stream.readUint16();
      stream.readUint16();
      stream.readUint32();
      this.channel_count = stream.readUint16();
      this.samplesize = stream.readUint16();
      stream.readUint16();
      stream.readUint16();
      this.samplerate = stream.readUint32() / 65536;
      if (stream.isofile?.ftyp?.major_brand.includes("qt")) {
        if (this.version === 1) this.extensions = stream.readUint8Array(16);
        else if (this.version === 2) this.extensions = stream.readUint8Array(36);
      }
      this.parseFooter(stream);
    }
    /** @bundle box-codecs.js */
    isAudio() {
      return true;
    }
    /** @bundle box-codecs.js */
    getChannelCount() {
      return this.channel_count;
    }
    /** @bundle box-codecs.js */
    getSampleRate() {
      return this.samplerate;
    }
    /** @bundle box-codecs.js */
    getSampleSize() {
      return this.samplesize;
    }
    /** @bundle writing/sampleentry.js */
    write(stream) {
      this.writeHeader(stream);
      this.size += 20;
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint16(this.channel_count);
      stream.writeUint16(this.samplesize);
      stream.writeUint16(0);
      stream.writeUint16(0);
      stream.writeUint32(this.samplerate << 16);
      this.writeFooter(stream);
    }
  };
  var SystemSampleEntry = class extends SampleEntry {
    parse(stream) {
      this.parseHeader(stream);
      this.parseFooter(stream);
    }
    /** @bundle writing/sampleentry.js */
    write(stream) {
      this.writeHeader(stream);
      this.writeFooter(stream);
    }
  };
  var ParameterSetArray = class extends Array {
    toString() {
      let str = "<table class='inner-table'>";
      str += "<thead><tr><th>length</th><th>nalu_data</th></tr></thead>";
      str += "<tbody>";
      for (let i = 0; i < this.length; i++) {
        const nalu = this[i];
        str += "<tr>";
        str += "<td>" + nalu.length + "</td>";
        str += "<td>";
        str += nalu.data.reduce(function(str2, byte) {
          return str2 + byte.toString(16).padStart(2, "0");
        }, "0x");
        str += "</td></tr>";
      }
      str += "</tbody></table>";
      return str;
    }
  };
  var avcCBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AVCConfigurationBox";
    }
    static {
      this.fourcc = "avcC";
    }
    parse(stream) {
      this.configurationVersion = stream.readUint8();
      this.AVCProfileIndication = stream.readUint8();
      this.profile_compatibility = stream.readUint8();
      this.AVCLevelIndication = stream.readUint8();
      this.lengthSizeMinusOne = stream.readUint8() & 3;
      this.nb_SPS_nalus = stream.readUint8() & 31;
      let toparse = this.size - this.hdr_size - 6;
      this.SPS = new ParameterSetArray();
      for (let i = 0; i < this.nb_SPS_nalus; i++) {
        const length = stream.readUint16();
        this.SPS.push({
          length,
          data: stream.readUint8Array(length)
        });
        toparse -= 2 + length;
      }
      this.nb_PPS_nalus = stream.readUint8();
      toparse--;
      this.PPS = new ParameterSetArray();
      for (let i = 0; i < this.nb_PPS_nalus; i++) {
        const length = stream.readUint16();
        this.PPS.push({
          length,
          data: stream.readUint8Array(length)
        });
        toparse -= 2 + length;
      }
      if (toparse > 0) this.ext = stream.readUint8Array(toparse);
    }
    /** @bundle writing/avcC.js */
    write(stream) {
      this.size = 7;
      for (let i = 0; i < this.SPS.length; i++) this.size += 2 + this.SPS[i].length;
      for (let i = 0; i < this.PPS.length; i++) this.size += 2 + this.PPS[i].length;
      if (this.ext) this.size += this.ext.length;
      this.writeHeader(stream);
      stream.writeUint8(this.configurationVersion);
      stream.writeUint8(this.AVCProfileIndication);
      stream.writeUint8(this.profile_compatibility);
      stream.writeUint8(this.AVCLevelIndication);
      stream.writeUint8(this.lengthSizeMinusOne + 252);
      stream.writeUint8(this.SPS.length + 224);
      for (let i = 0; i < this.SPS.length; i++) {
        stream.writeUint16(this.SPS[i].length);
        stream.writeUint8Array(this.SPS[i].data);
      }
      stream.writeUint8(this.PPS.length);
      for (let i = 0; i < this.PPS.length; i++) {
        stream.writeUint16(this.PPS[i].length);
        stream.writeUint8Array(this.PPS[i].data);
      }
      if (this.ext) stream.writeUint8Array(this.ext);
    }
  };
  var mdatBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MediaDataBox";
    }
    static {
      this.fourcc = "mdat";
    }
  };
  var idatBox = class extends Box {
    constructor(..._args2) {
      super(..._args2);
      this.box_name = "ItemDataBox";
    }
    static {
      this.fourcc = "idat";
    }
  };
  var freeBox = class extends Box {
    constructor(..._args3) {
      super(..._args3);
      this.box_name = "FreeSpaceBox";
    }
    static {
      this.fourcc = "free";
    }
  };
  var skipBox = class extends Box {
    constructor(..._args4) {
      super(..._args4);
      this.box_name = "FreeSpaceBox";
    }
    static {
      this.fourcc = "skip";
    }
  };
  var hmhdBox = class extends FullBox {
    constructor(..._args5) {
      super(..._args5);
      this.box_name = "HintMediaHeaderBox";
    }
    static {
      this.fourcc = "hmhd";
    }
  };
  var nmhdBox = class extends FullBox {
    constructor(..._args6) {
      super(..._args6);
      this.box_name = "NullMediaHeaderBox";
    }
    static {
      this.fourcc = "nmhd";
    }
  };
  var iodsBox = class extends FullBox {
    constructor(..._args7) {
      super(..._args7);
      this.box_name = "ObjectDescriptorBox";
    }
    static {
      this.fourcc = "iods";
    }
  };
  var xmlBox = class extends FullBox {
    constructor(..._args8) {
      super(..._args8);
      this.box_name = "XMLBox";
    }
    static {
      this.fourcc = "xml ";
    }
  };
  var bxmlBox = class extends FullBox {
    constructor(..._args9) {
      super(..._args9);
      this.box_name = "BinaryXMLBox";
    }
    static {
      this.fourcc = "bxml";
    }
  };
  var iproBox = class extends FullBox {
    constructor(..._args10) {
      super(..._args10);
      this.box_name = "ItemProtectionBox";
      this.sinfs = [];
    }
    static {
      this.fourcc = "ipro";
    }
    get protections() {
      return this.sinfs;
    }
  };
  var moovBox = class extends ContainerBox {
    constructor(..._args11) {
      super(..._args11);
      this.box_name = "MovieBox";
      this.traks = [];
      this.psshs = [];
      this.subBoxNames = ["trak", "pssh"];
    }
    static {
      this.fourcc = "moov";
    }
  };
  var trakBox = class extends ContainerBox {
    constructor(..._args12) {
      super(..._args12);
      this.box_name = "TrackBox";
      this.samples = [];
    }
    static {
      this.fourcc = "trak";
    }
  };
  var edtsBox = class extends ContainerBox {
    constructor(..._args13) {
      super(..._args13);
      this.box_name = "EditBox";
    }
    static {
      this.fourcc = "edts";
    }
  };
  var mdiaBox = class extends ContainerBox {
    constructor(..._args14) {
      super(..._args14);
      this.box_name = "MediaBox";
    }
    static {
      this.fourcc = "mdia";
    }
  };
  var minfBox = class extends ContainerBox {
    constructor(..._args15) {
      super(..._args15);
      this.box_name = "MediaInformationBox";
    }
    static {
      this.fourcc = "minf";
    }
  };
  var dinfBox = class extends ContainerBox {
    constructor(..._args16) {
      super(..._args16);
      this.box_name = "DataInformationBox";
    }
    static {
      this.fourcc = "dinf";
    }
  };
  var stblBox = class extends ContainerBox {
    constructor(..._args17) {
      super(..._args17);
      this.box_name = "SampleTableBox";
      this.sgpds = [];
      this.sbgps = [];
      this.subBoxNames = ["sgpd", "sbgp"];
    }
    static {
      this.fourcc = "stbl";
    }
  };
  var mvexBox = class extends ContainerBox {
    constructor(..._args18) {
      super(..._args18);
      this.box_name = "MovieExtendsBox";
      this.trexs = [];
      this.subBoxNames = ["trex"];
    }
    static {
      this.fourcc = "mvex";
    }
  };
  var moofBox = class extends ContainerBox {
    constructor(..._args19) {
      super(..._args19);
      this.box_name = "MovieFragmentBox";
      this.trafs = [];
      this.subBoxNames = ["traf"];
    }
    static {
      this.fourcc = "moof";
    }
  };
  var trafBox = class extends ContainerBox {
    constructor(..._args20) {
      super(..._args20);
      this.box_name = "TrackFragmentBox";
      this.truns = [];
      this.sgpds = [];
      this.sbgps = [];
      this.subBoxNames = [
        "trun",
        "sgpd",
        "sbgp"
      ];
    }
    static {
      this.fourcc = "traf";
    }
  };
  var vttcBox = class extends ContainerBox {
    constructor(..._args21) {
      super(..._args21);
      this.box_name = "VTTCueBox";
    }
    static {
      this.fourcc = "vttc";
    }
  };
  var mfraBox = class extends ContainerBox {
    constructor(..._args22) {
      super(..._args22);
      this.box_name = "MovieFragmentRandomAccessBox";
      this.tfras = [];
      this.subBoxNames = ["tfra"];
    }
    static {
      this.fourcc = "mfra";
    }
  };
  var mecoBox = class extends ContainerBox {
    constructor(..._args23) {
      super(..._args23);
      this.box_name = "AdditionalMetadataContainerBox";
    }
    static {
      this.fourcc = "meco";
    }
  };
  var hntiBox = class extends ContainerBox {
    constructor(..._args24) {
      super(..._args24);
      this.box_name = "trackhintinformation";
      this.subBoxNames = ["sdp ", "rtp "];
    }
    static {
      this.fourcc = "hnti";
    }
  };
  var hinfBox = class extends ContainerBox {
    constructor(..._args25) {
      super(..._args25);
      this.box_name = "hintstatisticsbox";
      this.maxrs = [];
      this.subBoxNames = ["maxr"];
    }
    static {
      this.fourcc = "hinf";
    }
  };
  var strkBox = class extends ContainerBox {
    constructor(..._args26) {
      super(..._args26);
      this.box_name = "SubTrackBox";
    }
    static {
      this.fourcc = "strk";
    }
  };
  var strdBox = class extends ContainerBox {
    constructor(..._args27) {
      super(..._args27);
      this.box_name = "SubTrackDefinitionBox";
    }
    static {
      this.fourcc = "strd";
    }
  };
  var sinfBox = class extends ContainerBox {
    constructor(..._args28) {
      super(..._args28);
      this.box_name = "ProtectionSchemeInfoBox";
    }
    static {
      this.fourcc = "sinf";
    }
  };
  var rinfBox = class extends ContainerBox {
    constructor(..._args29) {
      super(..._args29);
      this.box_name = "RestrictedSchemeInfoBox";
    }
    static {
      this.fourcc = "rinf";
    }
  };
  var schiBox = class extends ContainerBox {
    constructor(..._args30) {
      super(..._args30);
      this.box_name = "SchemeInformationBox";
    }
    static {
      this.fourcc = "schi";
    }
  };
  var trgrBox = class extends ContainerBox {
    constructor(..._args31) {
      super(..._args31);
      this.box_name = "TrackGroupBox";
    }
    static {
      this.fourcc = "trgr";
    }
  };
  var udtaBox = class extends ContainerBox {
    constructor(..._args32) {
      super(..._args32);
      this.box_name = "UserDataBox";
      this.kinds = [];
      this.strks = [];
      this.subBoxNames = ["kind", "strk"];
    }
    static {
      this.fourcc = "udta";
    }
  };
  var iprpBox = class extends ContainerBox {
    constructor(..._args33) {
      super(..._args33);
      this.box_name = "ItemPropertiesBox";
      this.ipmas = [];
      this.subBoxNames = ["ipma"];
    }
    static {
      this.fourcc = "iprp";
    }
  };
  var ipcoBox = class extends ContainerBox {
    constructor(..._args34) {
      super(..._args34);
      this.box_name = "ItemPropertyContainerBox";
      this.hvcCs = [];
      this.ispes = [];
      this.claps = [];
      this.irots = [];
      this.subBoxNames = [
        "hvcC",
        "ispe",
        "clap",
        "irot"
      ];
    }
    static {
      this.fourcc = "ipco";
    }
  };
  var grplBox = class extends ContainerBox {
    constructor(..._args35) {
      super(..._args35);
      this.box_name = "GroupsListBox";
    }
    static {
      this.fourcc = "grpl";
    }
  };
  var j2kHBox = class extends ContainerBox {
    constructor(..._args36) {
      super(..._args36);
      this.box_name = "J2KHeaderInfoBox";
    }
    static {
      this.fourcc = "j2kH";
    }
  };
  var etypBox = class extends ContainerBox {
    constructor(..._args37) {
      super(..._args37);
      this.box_name = "ExtendedTypeBox";
      this.tycos = [];
      this.subBoxNames = ["tyco"];
    }
    static {
      this.fourcc = "etyp";
    }
  };
  var povdBox = class extends ContainerBox {
    constructor(..._args38) {
      super(..._args38);
      this.box_name = "ProjectedOmniVideoBox";
      this.subBoxNames = ["prfr"];
    }
    static {
      this.fourcc = "povd";
    }
  };
  var drefBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "DataReferenceBox";
    }
    static {
      this.fourcc = "dref";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.entries = [];
      const entry_count = stream.readUint32();
      for (let i = 0; i < entry_count; i++) {
        const ret = parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          const box = ret.box;
          this.entries.push(box);
        } else return;
      }
    }
    /** @bundle writing/dref.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4;
      this.writeHeader(stream);
      stream.writeUint32(this.entries.length);
      for (let i = 0; i < this.entries.length; i++) {
        this.entries[i].write(stream);
        this.size += this.entries[i].size;
      }
      Log.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
      stream.adjustUint32(this.sizePosition, this.size);
    }
  };
  var elngBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ExtendedLanguageBox";
    }
    static {
      this.fourcc = "elng";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.extended_language = stream.readString(this.size - this.hdr_size);
    }
    /** @bundle writing/elng.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = this.extended_language.length;
      this.writeHeader(stream);
      stream.writeString(this.extended_language);
    }
  };
  var ftypBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "FileTypeBox";
    }
    static {
      this.fourcc = "ftyp";
    }
    parse(stream) {
      let toparse = this.size - this.hdr_size;
      this.major_brand = stream.readString(4);
      this.minor_version = stream.readUint32();
      const minor_version_str = String.fromCharCode(this.minor_version >> 24, this.minor_version >> 16 & 255, this.minor_version >> 8 & 255, this.minor_version & 255);
      if (minor_version_str.match("[a-zA-Z0-9]{4}")) this.minor_version = minor_version_str;
      toparse -= 8;
      this.compatible_brands = [];
      let i = 0;
      while (toparse >= 4) {
        this.compatible_brands[i] = stream.readString(4);
        toparse -= 4;
        i++;
      }
    }
    /** @bundle writing/ftyp.js */
    write(stream) {
      this.size = 8 + 4 * this.compatible_brands.length;
      this.writeHeader(stream);
      stream.writeString(this.major_brand, void 0, 4);
      if (typeof this.minor_version === "number") stream.writeUint32(this.minor_version);
      else stream.writeString(this.minor_version, void 0, 4);
      for (let i = 0; i < this.compatible_brands.length; i++) stream.writeString(this.compatible_brands[i], void 0, 4);
    }
  };
  var hdlrBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "HandlerBox";
    }
    static {
      this.fourcc = "hdlr";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 0) {
        stream.readUint32();
        this.handler = stream.readString(4);
        stream.readUint32Array(3);
        if (!this.isEndOfBox(stream)) {
          const name_size = this.start + this.size - stream.getPosition();
          this.name = stream.readCString();
          const end = this.start + this.size - 1;
          stream.seek(end);
          if (stream.readUint8() !== 0 && name_size > 1) {
            Log.info("BoxParser", "Warning: hdlr name is not null-terminated, possibly length-prefixed string. Trimming first byte.");
            this.name = this.name.slice(1);
          }
        }
      }
    }
    /** @bundle writing/hldr.js */
    write(stream) {
      this.size = 20 + this.name.length + 1;
      this.version = 0;
      this.flags = 0;
      this.writeHeader(stream);
      stream.writeUint32(0);
      stream.writeString(this.handler, void 0, 4);
      stream.writeUint32Array([
        0,
        0,
        0
      ]);
      stream.writeCString(this.name);
    }
  };
  var hvcCBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "HEVCConfigurationBox";
    }
    static {
      this.fourcc = "hvcC";
    }
    parse(stream) {
      this.configurationVersion = stream.readUint8();
      let tmp_byte = stream.readUint8();
      this.general_profile_space = tmp_byte >> 6;
      this.general_tier_flag = (tmp_byte & 32) >> 5;
      this.general_profile_idc = tmp_byte & 31;
      this.general_profile_compatibility = stream.readUint32();
      this.general_constraint_indicator = stream.readUint8Array(6);
      this.general_level_idc = stream.readUint8();
      this.min_spatial_segmentation_idc = stream.readUint16() & 4095;
      this.parallelismType = stream.readUint8() & 3;
      this.chroma_format_idc = stream.readUint8() & 3;
      this.bit_depth_luma_minus8 = stream.readUint8() & 7;
      this.bit_depth_chroma_minus8 = stream.readUint8() & 7;
      this.avgFrameRate = stream.readUint16();
      tmp_byte = stream.readUint8();
      this.constantFrameRate = tmp_byte >> 6;
      this.numTemporalLayers = (tmp_byte & 13) >> 3;
      this.temporalIdNested = (tmp_byte & 4) >> 2;
      this.lengthSizeMinusOne = tmp_byte & 3;
      this.nalu_arrays = [];
      const numOfArrays = stream.readUint8();
      for (let i = 0; i < numOfArrays; i++) {
        const nalu_array = [];
        this.nalu_arrays.push(nalu_array);
        tmp_byte = stream.readUint8();
        nalu_array.completeness = (tmp_byte & 128) >> 7;
        nalu_array.nalu_type = tmp_byte & 63;
        const numNalus = stream.readUint16();
        for (let j = 0; j < numNalus; j++) {
          const length = stream.readUint16();
          nalu_array.push({ data: stream.readUint8Array(length) });
        }
      }
    }
    /** @bundle writing/write.js */
    write(stream) {
      this.size = 23;
      for (let i = 0; i < this.nalu_arrays.length; i++) {
        this.size += 3;
        for (let j = 0; j < this.nalu_arrays[i].length; j++) this.size += 2 + this.nalu_arrays[i][j].data.length;
      }
      this.writeHeader(stream);
      stream.writeUint8(this.configurationVersion);
      stream.writeUint8((this.general_profile_space << 6) + (this.general_tier_flag << 5) + this.general_profile_idc);
      stream.writeUint32(this.general_profile_compatibility);
      stream.writeUint8Array(this.general_constraint_indicator);
      stream.writeUint8(this.general_level_idc);
      stream.writeUint16(this.min_spatial_segmentation_idc + (15 << 24));
      stream.writeUint8(this.parallelismType + 252);
      stream.writeUint8(this.chroma_format_idc + 252);
      stream.writeUint8(this.bit_depth_luma_minus8 + 248);
      stream.writeUint8(this.bit_depth_chroma_minus8 + 248);
      stream.writeUint16(this.avgFrameRate);
      stream.writeUint8((this.constantFrameRate << 6) + (this.numTemporalLayers << 3) + (this.temporalIdNested << 2) + this.lengthSizeMinusOne);
      stream.writeUint8(this.nalu_arrays.length);
      for (let i = 0; i < this.nalu_arrays.length; i++) {
        stream.writeUint8((this.nalu_arrays[i].completeness << 7) + this.nalu_arrays[i].nalu_type);
        stream.writeUint16(this.nalu_arrays[i].length);
        for (let j = 0; j < this.nalu_arrays[i].length; j++) {
          stream.writeUint16(this.nalu_arrays[i][j].data.length);
          stream.writeUint8Array(this.nalu_arrays[i][j].data);
        }
      }
    }
  };
  var mdhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MediaHeaderBox";
    }
    static {
      this.fourcc = "mdhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.creation_time = stream.readUint64();
        this.modification_time = stream.readUint64();
        this.timescale = stream.readUint32();
        this.duration = stream.readUint64();
      } else {
        this.creation_time = stream.readUint32();
        this.modification_time = stream.readUint32();
        this.timescale = stream.readUint32();
        this.duration = stream.readUint32();
      }
      this.parseLanguage(stream);
      stream.readUint16();
    }
    /** @bundle writing/mdhd.js */
    write(stream) {
      const useVersion1 = this.modification_time > MAX_UINT32 || this.creation_time > MAX_UINT32 || this.duration > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 20;
      this.size += useVersion1 ? 12 : 0;
      this.flags = 0;
      this.writeHeader(stream);
      if (useVersion1) {
        stream.writeUint64(this.creation_time);
        stream.writeUint64(this.modification_time);
        stream.writeUint32(this.timescale);
        stream.writeUint64(this.duration);
      } else {
        stream.writeUint32(this.creation_time);
        stream.writeUint32(this.modification_time);
        stream.writeUint32(this.timescale);
        stream.writeUint32(this.duration);
      }
      stream.writeUint16(this.language);
      stream.writeUint16(0);
    }
  };
  var mehdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MovieExtendsHeaderBox";
    }
    static {
      this.fourcc = "mehd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.flags & 1) {
        Log.warn("BoxParser", "mehd box incorrectly uses flags set to 1, converting version to 1");
        this.version = 1;
      }
      if (this.version === 1) this.fragment_duration = stream.readUint64();
      else this.fragment_duration = stream.readUint32();
    }
    /** @bundle writing/mehd.js */
    write(stream) {
      const useVersion1 = this.fragment_duration > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 4;
      this.size += useVersion1 ? 4 : 0;
      this.flags = 0;
      this.writeHeader(stream);
      if (useVersion1) stream.writeUint64(this.fragment_duration);
      else stream.writeUint32(this.fragment_duration);
    }
  };
  var infeBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ItemInfoEntry";
    }
    static {
      this.fourcc = "infe";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 0 || this.version === 1) {
        this.item_ID = stream.readUint16();
        this.item_protection_index = stream.readUint16();
        this.item_name = stream.readCString();
        this.content_type = stream.readCString();
        if (!this.isEndOfBox(stream)) this.content_encoding = stream.readCString();
      }
      if (this.version === 1) {
        this.extension_type = stream.readString(4);
        Log.warn("BoxParser", "Cannot parse extension type");
        stream.seek(this.start + this.size);
        return;
      }
      if (this.version >= 2) {
        if (this.version === 2) this.item_ID = stream.readUint16();
        else if (this.version === 3) this.item_ID = stream.readUint32();
        this.item_protection_index = stream.readUint16();
        this.item_type = stream.readString(4);
        this.item_name = stream.readCString();
        if (this.item_type === "mime") {
          this.content_type = stream.readCString();
          this.content_encoding = stream.readCString();
        } else if (this.item_type === "uri ") this.item_uri_type = stream.readCString();
      }
    }
  };
  var iinfBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ItemInfoBox";
    }
    static {
      this.fourcc = "iinf";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 0) this.entry_count = stream.readUint16();
      else this.entry_count = stream.readUint32();
      this.item_infos = [];
      for (let i = 0; i < this.entry_count; i++) {
        const ret = parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          const box = ret.box;
          if (box.type === "infe") this.item_infos[i] = box;
          else Log.error("BoxParser", "Expected 'infe' box, got " + ret.box.type, stream.isofile);
        } else return;
      }
    }
  };
  var ilocBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ItemLocationBox";
    }
    static {
      this.fourcc = "iloc";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      let byte;
      byte = stream.readUint8();
      this.offset_size = byte >> 4 & 15;
      this.length_size = byte & 15;
      byte = stream.readUint8();
      this.base_offset_size = byte >> 4 & 15;
      if (this.version === 1 || this.version === 2) this.index_size = byte & 15;
      else this.index_size = 0;
      this.items = [];
      let item_count = 0;
      if (this.version < 2) item_count = stream.readUint16();
      else if (this.version === 2) item_count = stream.readUint32();
      else throw new Error("version of iloc box not supported");
      for (let i = 0; i < item_count; i++) {
        let item_ID = 0;
        let construction_method = 0;
        let base_offset = 0;
        if (this.version < 2) item_ID = stream.readUint16();
        else if (this.version === 2) item_ID = stream.readUint32();
        else throw new Error("version of iloc box not supported");
        if (this.version === 1 || this.version === 2) construction_method = stream.readUint16() & 15;
        else construction_method = 0;
        const data_reference_index = stream.readUint16();
        switch (this.base_offset_size) {
          case 0:
            base_offset = 0;
            break;
          case 4:
            base_offset = stream.readUint32();
            break;
          case 8:
            base_offset = stream.readUint64();
            break;
          default:
            throw new Error("Error reading base offset size");
        }
        const extents = [];
        const extent_count = stream.readUint16();
        for (let j = 0; j < extent_count; j++) {
          let extent_index = 0;
          let extent_offset = 0;
          let extent_length = 0;
          if (this.version === 1 || this.version === 2) switch (this.index_size) {
            case 0:
              extent_index = 0;
              break;
            case 4:
              extent_index = stream.readUint32();
              break;
            case 8:
              extent_index = stream.readUint64();
              break;
            default:
              throw new Error("Error reading extent index");
          }
          switch (this.offset_size) {
            case 0:
              extent_offset = 0;
              break;
            case 4:
              extent_offset = stream.readUint32();
              break;
            case 8:
              extent_offset = stream.readUint64();
              break;
            default:
              throw new Error("Error reading extent index");
          }
          switch (this.length_size) {
            case 0:
              extent_length = 0;
              break;
            case 4:
              extent_length = stream.readUint32();
              break;
            case 8:
              extent_length = stream.readUint64();
              break;
            default:
              throw new Error("Error reading extent index");
          }
          extents.push({
            extent_index,
            extent_length,
            extent_offset
          });
        }
        this.items.push({
          base_offset,
          construction_method,
          item_ID,
          data_reference_index,
          extents
        });
      }
    }
  };
  var REFERENCE_TYPE_NAMES = {
    auxl: "Auxiliary image item",
    base: "Pre-derived image item base",
    cdsc: "Item describes referenced item",
    dimg: "Derived image item",
    dpnd: "Item coding dependency",
    eroi: "Region",
    evir: "EVC slice",
    exbl: "Scalable image item",
    "fdl ": "File delivery",
    font: "Font item",
    iloc: "Item data location",
    mask: "Region mask",
    mint: "Data integrity",
    pred: "Predictively coded item",
    prem: "Pre-multiplied item",
    tbas: "HEVC tile track base item",
    text: "Text item",
    thmb: "Thumbnail image item"
  };
  var irefBox = class irefBox2 extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ItemReferenceBox";
      this.references = [];
    }
    static {
      this.fourcc = "iref";
    }
    static {
      this.allowed_types = [
        "auxl",
        "base",
        "cdsc",
        "dimg",
        "dpnd",
        "eroi",
        "evir",
        "exbl",
        "fdl ",
        "font",
        "iloc",
        "mask",
        "mint",
        "pred",
        "prem",
        "tbas",
        "text",
        "thmb"
      ];
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.references = [];
      while (stream.getPosition() < this.start + this.size) {
        const ret = parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          let name = "Unknown item reference";
          if (!irefBox2.allowed_types.includes(ret.type)) Log.warn("BoxParser", `Unknown item reference type: '${ret.type}'`);
          else name = REFERENCE_TYPE_NAMES[ret.type];
          const box = this.version === 0 ? new SingleItemTypeReferenceBox(ret.type, ret.size, name, ret.hdr_size, ret.start) : new SingleItemTypeReferenceBoxLarge(ret.type, ret.size, name, ret.hdr_size, ret.start);
          if (box.write === Box.prototype.write && box.type !== "mdat") {
            Log.warn("BoxParser", box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            box.parseDataAndRewind(stream);
          }
          box.parse(stream);
          this.references.push(box);
        } else return;
      }
    }
  };
  var pitmBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "PrimaryItemBox";
    }
    static {
      this.fourcc = "pitm";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 0) this.item_id = stream.readUint16();
      else this.item_id = stream.readUint32();
    }
  };
  var metaBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MetaBox";
      this.isQT = false;
    }
    static {
      this.fourcc = "meta";
    }
    parse(stream) {
      const pos = stream.getPosition();
      if (this.size > 8) {
        stream.readUint32();
        switch (stream.readString(4)) {
          case "hdlr":
          case "mhdr":
          case "keys":
          case "ilst":
          case "ctry":
          case "lang":
            this.isQT = true;
            break;
          default:
            break;
        }
        stream.seek(pos);
      }
      if (!this.isQT) this.parseFullHeader(stream);
      ContainerBox.prototype.parse.call(this, stream);
    }
  };
  var mfhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MovieFragmentHeaderBox";
    }
    static {
      this.fourcc = "mfhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.sequence_number = stream.readUint32();
    }
    /** @bundle writing/mfhd.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4;
      this.writeHeader(stream);
      stream.writeUint32(this.sequence_number);
    }
  };
  var mvhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MovieHeaderBox";
    }
    static {
      this.fourcc = "mvhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.creation_time = stream.readUint64();
        this.modification_time = stream.readUint64();
        this.timescale = stream.readUint32();
        this.duration = stream.readUint64();
      } else {
        this.creation_time = stream.readUint32();
        this.modification_time = stream.readUint32();
        this.timescale = stream.readUint32();
        this.duration = stream.readUint32();
      }
      this.rate = stream.readUint32();
      this.volume = stream.readUint16() >> 8;
      stream.readUint16();
      stream.readUint32Array(2);
      this.matrix = stream.readInt32Array(9);
      stream.readUint32Array(6);
      this.next_track_id = stream.readUint32();
    }
    /** @bundle writing/mvhd.js */
    write(stream) {
      const useVersion1 = this.modification_time > MAX_UINT32 || this.creation_time > MAX_UINT32 || this.duration > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 96;
      this.size += useVersion1 ? 12 : 0;
      this.flags = 0;
      this.writeHeader(stream);
      if (useVersion1) {
        stream.writeUint64(this.creation_time);
        stream.writeUint64(this.modification_time);
        stream.writeUint32(this.timescale);
        stream.writeUint64(this.duration);
      } else {
        stream.writeUint32(this.creation_time);
        stream.writeUint32(this.modification_time);
        stream.writeUint32(this.timescale);
        stream.writeUint32(this.duration);
      }
      stream.writeUint32(this.rate);
      stream.writeUint16(this.volume << 8);
      stream.writeUint16(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeInt32Array(this.matrix);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(0);
      stream.writeUint32(this.next_track_id);
    }
    /** @bundle box-print.js */
    print(output) {
      super.printHeader(output);
      output.log(output.indent + "creation_time: " + this.creation_time);
      output.log(output.indent + "modification_time: " + this.modification_time);
      output.log(output.indent + "timescale: " + this.timescale);
      output.log(output.indent + "duration: " + this.duration);
      output.log(output.indent + "rate: " + this.rate);
      output.log(output.indent + "volume: " + (this.volume >> 8));
      output.log(output.indent + "matrix: " + this.matrix.join(", "));
      output.log(output.indent + "next_track_id: " + this.next_track_id);
    }
  };
  var mettSampleEntry = class extends MetadataSampleEntry {
    static {
      this.fourcc = "mett";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.content_encoding = stream.readCString();
      this.mime_format = stream.readCString();
      this.parseFooter(stream);
    }
  };
  var metxSampleEntry = class extends MetadataSampleEntry {
    static {
      this.fourcc = "metx";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.content_encoding = stream.readCString();
      this.namespace = stream.readCString();
      this.schema_location = stream.readCString();
      this.parseFooter(stream);
    }
  };
  var av1CBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AV1CodecConfigurationBox";
    }
    static {
      this.fourcc = "av1C";
    }
    parse(stream) {
      let tmp = stream.readUint8();
      if ((tmp >> 7 & 1) !== 1) {
        Log.error("BoxParser", "av1C marker problem", stream.isofile);
        return;
      }
      this.version = tmp & 127;
      if (this.version !== 1) {
        Log.error("BoxParser", "av1C version " + this.version + " not supported", stream.isofile);
        return;
      }
      tmp = stream.readUint8();
      this.seq_profile = tmp >> 5 & 7;
      this.seq_level_idx_0 = tmp & 31;
      tmp = stream.readUint8();
      this.seq_tier_0 = tmp >> 7 & 1;
      this.high_bitdepth = tmp >> 6 & 1;
      this.twelve_bit = tmp >> 5 & 1;
      this.monochrome = tmp >> 4 & 1;
      this.chroma_subsampling_x = tmp >> 3 & 1;
      this.chroma_subsampling_y = tmp >> 2 & 1;
      this.chroma_sample_position = tmp & 3;
      tmp = stream.readUint8();
      this.reserved_1 = tmp >> 5 & 7;
      if (this.reserved_1 !== 0) {
        Log.error("BoxParser", "av1C reserved_1 parsing problem", stream.isofile);
        return;
      }
      this.initial_presentation_delay_present = tmp >> 4 & 1;
      if (this.initial_presentation_delay_present === 1) this.initial_presentation_delay_minus_one = tmp & 15;
      else {
        this.reserved_2 = tmp & 15;
        if (this.reserved_2 !== 0) {
          Log.error("BoxParser", "av1C reserved_2 parsing problem", stream.isofile);
          return;
        }
      }
      const configOBUs_length = this.size - this.hdr_size - 4;
      this.configOBUs = stream.readUint8Array(configOBUs_length);
    }
  };
  var esdsBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ElementaryStreamDescriptorBox";
    }
    static {
      this.fourcc = "esds";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const esd_data = stream.readUint8Array(this.size - this.hdr_size);
      if ("MPEG4DescriptorParser" in DescriptorRegistry) {
        const esd_parser = new DescriptorRegistry.MPEG4DescriptorParser();
        this.esd = esd_parser.parseOneDescriptor(new DataStream(esd_data.buffer, 0));
      }
    }
  };
  var waveBox = class extends ContainerBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "siDecompressionParamBox";
    }
    static {
      this.fourcc = "wave";
    }
  };
  var lvcCBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "LCEVCConfigurationBox";
    }
    static {
      this.fourcc = "lvcC";
    }
    parse(stream) {
      this.configurationVersion = stream.readUint8();
      if (this.configurationVersion !== 1) {
        Log.error("BoxParser", "lvcC version " + this.configurationVersion + " not supported", stream.isofile);
        return;
      }
      this.LCEVCProfileIndication = stream.readUint8();
      this.LCEVCLevelIndication = stream.readUint8();
      let tmp_byte = stream.readUint8();
      this.chroma_format_idc = tmp_byte >> 6 & 3;
      this.bit_depth_luma_minus8 = tmp_byte >> 3 & 7;
      this.bit_depth_chroma_minus8 = tmp_byte & 7;
      tmp_byte = stream.readUint8();
      this.lengthSizeMinusOne = tmp_byte >> 6 & 3;
      let reserved = tmp_byte & 63;
      if (reserved !== 63) {
        Log.error("BoxParser", "lvcC reserved parsing problem", stream.isofile);
        return;
      }
      this.pic_width_in_luma_samples = stream.readUint32();
      this.pic_height_in_luma_samples = stream.readUint32();
      tmp_byte = stream.readUint8();
      this.sc_in_stream = tmp_byte >> 7 & 1;
      this.gc_in_stream = tmp_byte >> 6 & 1;
      this.ai_in_stream = tmp_byte >> 5 & 1;
      reserved = tmp_byte & 31;
      if (reserved !== 31) {
        Log.error("BoxParser", "lvcC reserved parsing problem", stream.isofile);
        return;
      }
      this.nalu_arrays = [];
      const numOfArrays = stream.readUint8();
      for (let i = 0; i < numOfArrays; i++) {
        const nalu_array = [];
        this.nalu_arrays.push(nalu_array);
        tmp_byte = stream.readUint8();
        reserved = tmp_byte >> 6 & 3;
        if (reserved !== 0) {
          Log.error("BoxParser", "lvcC reserved parsing problem", stream.isofile);
          return;
        }
        nalu_array.nalu_type = tmp_byte & 63;
        const numOfNalus = stream.readUint16();
        for (let j = 0; j < numOfNalus; j++) {
          const length = stream.readUint16();
          nalu_array.push({ data: stream.readUint8Array(length) });
        }
      }
    }
  };
  var vpcCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "VPCodecConfigurationRecord";
    }
    static {
      this.fourcc = "vpcC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.profile = stream.readUint8();
        this.level = stream.readUint8();
        const tmp = stream.readUint8();
        this.bitDepth = tmp >> 4;
        this.chromaSubsampling = tmp >> 1 & 7;
        this.videoFullRangeFlag = tmp & 1;
        this.colourPrimaries = stream.readUint8();
        this.transferCharacteristics = stream.readUint8();
        this.matrixCoefficients = stream.readUint8();
        this.codecIntializationDataSize = stream.readUint16();
        this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
      } else {
        this.profile = stream.readUint8();
        this.level = stream.readUint8();
        let tmp = stream.readUint8();
        this.bitDepth = tmp >> 4 & 15;
        this.colorSpace = tmp & 15;
        tmp = stream.readUint8();
        this.chromaSubsampling = tmp >> 4 & 15;
        this.transferFunction = tmp >> 1 & 7;
        this.videoFullRangeFlag = tmp & 1;
        this.codecIntializationDataSize = stream.readUint16();
        this.codecIntializationData = stream.readUint8Array(this.codecIntializationDataSize);
      }
    }
  };
  var vvcCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "VvcConfigurationBox";
    }
    static {
      this.fourcc = "vvcC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const bitReader = {
        held_bits: void 0,
        num_held_bits: 0,
        stream_read_1_bytes: function(strm) {
          this.held_bits = strm.readUint8();
          this.num_held_bits = 8;
        },
        stream_read_2_bytes: function(strm) {
          this.held_bits = strm.readUint16();
          this.num_held_bits = 16;
        },
        extract_bits: function(num_bits) {
          const ret = this.held_bits >> this.num_held_bits - num_bits & (1 << num_bits) - 1;
          this.num_held_bits -= num_bits;
          return ret;
        }
      };
      bitReader.stream_read_1_bytes(stream);
      bitReader.extract_bits(5);
      this.lengthSizeMinusOne = bitReader.extract_bits(2);
      this.ptl_present_flag = bitReader.extract_bits(1);
      if (this.ptl_present_flag) {
        bitReader.stream_read_2_bytes(stream);
        this.ols_idx = bitReader.extract_bits(9);
        this.num_sublayers = bitReader.extract_bits(3);
        this.constant_frame_rate = bitReader.extract_bits(2);
        this.chroma_format_idc = bitReader.extract_bits(2);
        bitReader.stream_read_1_bytes(stream);
        this.bit_depth_minus8 = bitReader.extract_bits(3);
        bitReader.extract_bits(5);
        bitReader.stream_read_2_bytes(stream);
        bitReader.extract_bits(2);
        this.num_bytes_constraint_info = bitReader.extract_bits(6);
        this.general_profile_idc = bitReader.extract_bits(7);
        this.general_tier_flag = bitReader.extract_bits(1);
        this.general_level_idc = stream.readUint8();
        bitReader.stream_read_1_bytes(stream);
        this.ptl_frame_only_constraint_flag = bitReader.extract_bits(1);
        this.ptl_multilayer_enabled_flag = bitReader.extract_bits(1);
        this.general_constraint_info = new Uint8Array(this.num_bytes_constraint_info);
        if (this.num_bytes_constraint_info) {
          for (let i = 0; i < this.num_bytes_constraint_info - 1; i++) {
            const cnstr1 = bitReader.extract_bits(6);
            bitReader.stream_read_1_bytes(stream);
            const cnstr2 = bitReader.extract_bits(2);
            this.general_constraint_info[i] = cnstr1 << 2 | cnstr2;
          }
          this.general_constraint_info[this.num_bytes_constraint_info - 1] = bitReader.extract_bits(6);
        } else bitReader.extract_bits(6);
        if (this.num_sublayers > 1) {
          bitReader.stream_read_1_bytes(stream);
          this.ptl_sublayer_present_mask = 0;
          for (let j = this.num_sublayers - 2; j >= 0; --j) {
            const val = bitReader.extract_bits(1);
            this.ptl_sublayer_present_mask |= val << j;
          }
          for (let j = this.num_sublayers; j <= 8 && this.num_sublayers > 1; ++j) bitReader.extract_bits(1);
          this.sublayer_level_idc = [];
          for (let j = this.num_sublayers - 2; j >= 0; --j) if (this.ptl_sublayer_present_mask & 1 << j) this.sublayer_level_idc[j] = stream.readUint8();
        }
        this.ptl_num_sub_profiles = stream.readUint8();
        this.general_sub_profile_idc = [];
        if (this.ptl_num_sub_profiles) for (let i = 0; i < this.ptl_num_sub_profiles; i++) this.general_sub_profile_idc.push(stream.readUint32());
        this.max_picture_width = stream.readUint16();
        this.max_picture_height = stream.readUint16();
        this.avg_frame_rate = stream.readUint16();
      }
      const VVC_NALU_OPI = 12;
      const VVC_NALU_DEC_PARAM = 13;
      this.nalu_arrays = [];
      const num_of_arrays = stream.readUint8();
      for (let i = 0; i < num_of_arrays; i++) {
        const nalu_array = [];
        this.nalu_arrays.push(nalu_array);
        bitReader.stream_read_1_bytes(stream);
        nalu_array.completeness = bitReader.extract_bits(1);
        bitReader.extract_bits(2);
        nalu_array.nalu_type = bitReader.extract_bits(5);
        let numNalus = 1;
        if (nalu_array.nalu_type !== VVC_NALU_DEC_PARAM && nalu_array.nalu_type !== VVC_NALU_OPI) numNalus = stream.readUint16();
        for (let j = 0; j < numNalus; j++) {
          const len = stream.readUint16();
          nalu_array.push({
            data: stream.readUint8Array(len),
            length: len
          });
        }
      }
    }
  };
  var colrBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ColourInformationBox";
    }
    static {
      this.fourcc = "colr";
    }
    parse(stream) {
      this.colour_type = stream.readString(4);
      if (this.colour_type === "nclx") {
        this.colour_primaries = stream.readUint16();
        this.transfer_characteristics = stream.readUint16();
        this.matrix_coefficients = stream.readUint16();
        const tmp = stream.readUint8();
        this.full_range_flag = tmp >> 7;
      } else if (this.colour_type === "rICC") this.ICC_profile = stream.readUint8Array(this.size - 4);
      else if (this.colour_type === "prof") this.ICC_profile = stream.readUint8Array(this.size - 4);
    }
  };
  function decimalToHex(d, padding) {
    let hex = Number(d).toString(16);
    padding = typeof padding === "undefined" ? 2 : padding;
    while (hex.length < padding) hex = "0" + hex;
    return hex;
  }
  var avcCSampleEntryBase = class extends VisualSampleEntry {
    /** @bundle box-codecs.js */
    getCodec() {
      const baseCodec = super.getCodec();
      if (this.avcC) return `${baseCodec}.${decimalToHex(this.avcC.AVCProfileIndication)}${decimalToHex(this.avcC.profile_compatibility)}${decimalToHex(this.avcC.AVCLevelIndication)}`;
      else return baseCodec;
    }
  };
  var avc1SampleEntry = class extends avcCSampleEntryBase {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AVCSampleEntry";
    }
    static {
      this.fourcc = "avc1";
    }
  };
  var avc2SampleEntry = class extends avcCSampleEntryBase {
    constructor(..._args2) {
      super(..._args2);
      this.box_name = "AVC2SampleEntry";
    }
    static {
      this.fourcc = "avc2";
    }
  };
  var avc3SampleEntry = class extends avcCSampleEntryBase {
    constructor(..._args3) {
      super(..._args3);
      this.box_name = "AVCSampleEntry";
    }
    static {
      this.fourcc = "avc3";
    }
  };
  var avc4SampleEntry = class extends avcCSampleEntryBase {
    constructor(..._args4) {
      super(..._args4);
      this.box_name = "AVC2SampleEntry";
    }
    static {
      this.fourcc = "avc4";
    }
  };
  var av01SampleEntry = class extends VisualSampleEntry {
    constructor(..._args5) {
      super(..._args5);
      this.box_name = "AV1SampleEntry";
    }
    static {
      this.fourcc = "av01";
    }
    /** @bundle box-codecs.js */
    getCodec() {
      const baseCodec = super.getCodec();
      const level_idx_0 = this.av1C.seq_level_idx_0;
      const level = level_idx_0 < 10 ? "0" + level_idx_0 : level_idx_0;
      let bitdepth;
      if (this.av1C.seq_profile === 2 && this.av1C.high_bitdepth === 1) bitdepth = this.av1C.twelve_bit === 1 ? "12" : "10";
      else if (this.av1C.seq_profile <= 2) bitdepth = this.av1C.high_bitdepth === 1 ? "10" : "08";
      return baseCodec + "." + this.av1C.seq_profile + "." + level + (this.av1C.seq_tier_0 ? "H" : "M") + "." + bitdepth;
    }
  };
  var dav1SampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "dav1";
    }
  };
  var hvcCSampleEntryBase = class extends VisualSampleEntry {
    /** @bundle box-codecs.js */
    getCodec() {
      let baseCodec = super.getCodec();
      if (this.hvcC) {
        baseCodec += ".";
        switch (this.hvcC.general_profile_space) {
          case 0:
            baseCodec += "";
            break;
          case 1:
            baseCodec += "A";
            break;
          case 2:
            baseCodec += "B";
            break;
          case 3:
            baseCodec += "C";
            break;
        }
        baseCodec += this.hvcC.general_profile_idc;
        baseCodec += ".";
        let val = this.hvcC.general_profile_compatibility;
        let reversed = 0;
        for (let i = 0; i < 32; i++) {
          reversed |= val & 1;
          if (i === 31) break;
          reversed <<= 1;
          val >>= 1;
        }
        baseCodec += decimalToHex(reversed, 0);
        baseCodec += ".";
        if (this.hvcC.general_tier_flag === 0) baseCodec += "L";
        else baseCodec += "H";
        baseCodec += this.hvcC.general_level_idc;
        let hasByte = false;
        let constraint_string = "";
        for (let i = 5; i >= 0; i--) if (this.hvcC.general_constraint_indicator[i] || hasByte) {
          constraint_string = "." + decimalToHex(this.hvcC.general_constraint_indicator[i], 0) + constraint_string;
          hasByte = true;
        }
        baseCodec += constraint_string;
      }
      return baseCodec;
    }
  };
  var hvc1SampleEntry = class extends hvcCSampleEntryBase {
    constructor(..._args6) {
      super(..._args6);
      this.box_name = "HEVCSampleEntry";
    }
    static {
      this.fourcc = "hvc1";
    }
  };
  var hvc2SampleEntry = class extends hvcCSampleEntryBase {
    static {
      this.fourcc = "hvc2";
    }
  };
  var hev1SampleEntry = class extends hvcCSampleEntryBase {
    constructor(..._args7) {
      super(..._args7);
      this.box_name = "HEVCSampleEntry";
      this.colrs = [];
      this.subBoxNames = ["colr"];
    }
    static {
      this.fourcc = "hev1";
    }
  };
  var hev2SampleEntry = class extends hvcCSampleEntryBase {
    static {
      this.fourcc = "hev2";
    }
  };
  var hvt1SampleEntry = class extends VisualSampleEntry {
    constructor(..._args8) {
      super(..._args8);
      this.box_name = "HEVCTileSampleSampleEntry";
    }
    static {
      this.fourcc = "hvt1";
    }
  };
  var lhe1SampleEntry = class extends VisualSampleEntry {
    constructor(..._args9) {
      super(..._args9);
      this.box_name = "LHEVCSampleEntry";
    }
    static {
      this.fourcc = "lhe1";
    }
  };
  var lhv1SampleEntry = class extends VisualSampleEntry {
    constructor(..._args10) {
      super(..._args10);
      this.box_name = "LHEVCSampleEntry";
    }
    static {
      this.fourcc = "lhv1";
    }
  };
  var lvc1SampleEntry = class extends VisualSampleEntry {
    constructor(..._args11) {
      super(..._args11);
      this.box_name = "LCEVCSampleEntry";
    }
    static {
      this.fourcc = "lvc1";
    }
    /** @bundle box-codecs.js */
    getCodec() {
      let baseCodec = super.getCodec();
      if (this.lvcC) {
        baseCodec += ".";
        baseCodec += "vprf";
        baseCodec += this.lvcC.LCEVCProfileIndication;
        baseCodec += ".";
        baseCodec += "vlev";
        baseCodec += this.lvcC.LCEVCLevelIndication;
      }
      return baseCodec;
    }
  };
  var dvh1SampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "dvh1";
    }
  };
  var dvheSampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "dvhe";
    }
  };
  var vvcCSampleEntryBase = class extends VisualSampleEntry {
    getCodec() {
      let baseCodec = super.getCodec();
      if (this.vvcC) {
        baseCodec += "." + this.vvcC.general_profile_idc;
        if (this.vvcC.general_tier_flag) baseCodec += ".H";
        else baseCodec += ".L";
        baseCodec += this.vvcC.general_level_idc;
        let constraint_string = "";
        if (this.vvcC.general_constraint_info) {
          const bytes = [];
          let byte = 0;
          byte |= this.vvcC.ptl_frame_only_constraint_flag << 7;
          byte |= this.vvcC.ptl_multilayer_enabled_flag << 6;
          let last_nonzero;
          for (let i = 0; i < this.vvcC.general_constraint_info.length; ++i) {
            byte |= this.vvcC.general_constraint_info[i] >> 2 & 63;
            bytes.push(byte);
            if (byte) last_nonzero = i;
            byte = this.vvcC.general_constraint_info[i] >> 2 & 3;
          }
          if (last_nonzero === void 0) constraint_string = ".CA";
          else {
            constraint_string = ".C";
            const base32_chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
            let held_bits = 0;
            let num_held_bits = 0;
            for (let i = 0; i <= last_nonzero; ++i) {
              held_bits = held_bits << 8 | bytes[i];
              num_held_bits += 8;
              while (num_held_bits >= 5) {
                const val = held_bits >> num_held_bits - 5 & 31;
                constraint_string += base32_chars[val];
                num_held_bits -= 5;
                held_bits &= (1 << num_held_bits) - 1;
              }
            }
            if (num_held_bits) {
              held_bits <<= 5 - num_held_bits;
              constraint_string += base32_chars[held_bits & 31];
            }
          }
        }
        baseCodec += constraint_string;
      }
      return baseCodec;
    }
  };
  var vvc1SampleEntry = class extends vvcCSampleEntryBase {
    constructor(..._args12) {
      super(..._args12);
      this.box_name = "VvcSampleEntry";
    }
    static {
      this.fourcc = "vvc1";
    }
  };
  var vvi1SampleEntry = class extends vvcCSampleEntryBase {
    constructor(..._args13) {
      super(..._args13);
      this.box_name = "VvcSampleEntry";
    }
    static {
      this.fourcc = "vvi1";
    }
  };
  var vvs1SampleEntry = class extends VisualSampleEntry {
    constructor(..._args14) {
      super(..._args14);
      this.box_name = "VvcSampleEntry";
    }
    static {
      this.fourcc = "vvs1";
    }
  };
  var vvcNSampleEntry = class extends VisualSampleEntry {
    constructor(..._args15) {
      super(..._args15);
      this.box_name = "VvcNonVCLSampleEntry";
    }
    static {
      this.fourcc = "vvcN";
    }
  };
  var vpcCSampleEntryBase = class extends VisualSampleEntry {
    getCodec() {
      const baseCodec = super.getCodec();
      let level = this.vpcC.level;
      if (level === 0) level = "00";
      let bitDepth = this.vpcC.bitDepth;
      if (bitDepth === 8) bitDepth = "08";
      return `${baseCodec}.0${this.vpcC.profile}.${level}.${bitDepth}`;
    }
  };
  var vp08SampleEntry = class extends vpcCSampleEntryBase {
    static {
      this.fourcc = "vp08";
    }
  };
  var vp09SampleEntry = class extends vpcCSampleEntryBase {
    static {
      this.fourcc = "vp09";
    }
  };
  var avs3SampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "avs3";
    }
  };
  var j2kiSampleEntry = class extends VisualSampleEntry {
    constructor(..._args16) {
      super(..._args16);
      this.box_name = "J2KSampleEntry";
    }
    static {
      this.fourcc = "j2ki";
    }
  };
  var mjp2SampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "mjp2";
    }
  };
  var mjpgSampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "mjpg";
    }
  };
  var uncvSampleEntry = class extends VisualSampleEntry {
    constructor(..._args17) {
      super(..._args17);
      this.box_name = "UncompressedVideoSampleEntry";
    }
    static {
      this.fourcc = "uncv";
    }
  };
  var mp4vSampleEntry = class extends VisualSampleEntry {
    constructor(..._args18) {
      super(..._args18);
      this.box_name = "MP4VisualSampleEntry";
    }
    static {
      this.fourcc = "mp4v";
    }
  };
  var mp4aSampleEntry = class extends AudioSampleEntry {
    constructor(..._args19) {
      super(..._args19);
      this.box_name = "MP4AudioSampleEntry";
    }
    static {
      this.fourcc = "mp4a";
    }
    getCodec() {
      const baseCodec = super.getCodec();
      const esds = this.esds ?? this.wave?.esds;
      if (esds && esds.esd) {
        const oti = esds.esd.getOTI();
        const dsi = esds.esd.getAudioConfig();
        return baseCodec + "." + decimalToHex(oti) + (dsi ? "." + dsi : "");
      } else return baseCodec;
    }
  };
  var m4aeSampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "m4ae";
    }
  };
  var ac_3SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "ac-3";
    }
  };
  var ac_4SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "ac-4";
    }
  };
  var ec_3SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "ec-3";
    }
  };
  var OpusSampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "Opus";
    }
  };
  var mha1SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "mha1";
    }
  };
  var mha2SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "mha2";
    }
  };
  var mhm1SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "mhm1";
    }
  };
  var mhm2SampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "mhm2";
    }
  };
  var fLaCSampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "fLaC";
    }
  };
  var encvSampleEntry = class extends VisualSampleEntry {
    static {
      this.fourcc = "encv";
    }
  };
  var encaSampleEntry = class extends AudioSampleEntry {
    static {
      this.fourcc = "enca";
    }
  };
  var encuSampleEntry = class extends SubtitleSampleEntry {
    constructor(..._args20) {
      super(..._args20);
      this.subBoxNames = ["sinf"];
      this.sinfs = [];
    }
    static {
      this.fourcc = "encu";
    }
  };
  var encsSampleEntry = class extends SystemSampleEntry {
    constructor(..._args21) {
      super(..._args21);
      this.subBoxNames = ["sinf"];
      this.sinfs = [];
    }
    static {
      this.fourcc = "encs";
    }
  };
  var mp4sSampleEntry = class extends SystemSampleEntry {
    static {
      this.fourcc = "mp4s";
    }
  };
  var enctSampleEntry = class extends TextSampleEntry {
    constructor(..._args22) {
      super(..._args22);
      this.subBoxNames = ["sinf"];
      this.sinfs = [];
    }
    static {
      this.fourcc = "enct";
    }
  };
  var encmSampleEntry = class extends MetadataSampleEntry {
    constructor(..._args23) {
      super(..._args23);
      this.subBoxNames = ["sinf"];
      this.sinfs = [];
    }
    static {
      this.fourcc = "encm";
    }
  };
  var resvSampleEntry = class extends VisualSampleEntry {
    constructor(..._args24) {
      super(..._args24);
      this.box_name = "RestrictedVideoSampleEntry";
    }
    static {
      this.fourcc = "resv";
    }
  };
  var sbttSampleEntry = class extends SubtitleSampleEntry {
    static {
      this.fourcc = "sbtt";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.content_encoding = stream.readCString();
      this.mime_format = stream.readCString();
      this.parseFooter(stream);
    }
  };
  var stppSampleEntry = class extends SubtitleSampleEntry {
    static {
      this.fourcc = "stpp";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.namespace = stream.readCString();
      this.schema_location = stream.readCString();
      this.auxiliary_mime_types = stream.readCString();
      this.parseFooter(stream);
    }
    /** @bundle writing/sampleentry.js */
    write(stream) {
      this.writeHeader(stream);
      this.size += this.namespace.length + 1 + this.schema_location.length + 1 + this.auxiliary_mime_types.length + 1;
      stream.writeCString(this.namespace);
      stream.writeCString(this.schema_location);
      stream.writeCString(this.auxiliary_mime_types);
      this.writeFooter(stream);
    }
  };
  var stxtSampleEntry = class extends SubtitleSampleEntry {
    static {
      this.fourcc = "stxt";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.content_encoding = stream.readCString();
      this.mime_format = stream.readCString();
      this.parseFooter(stream);
    }
    getCodec() {
      const baseCodec = super.getCodec();
      if (this.mime_format) return baseCodec + "." + this.mime_format;
      else return baseCodec;
    }
  };
  var tx3gSampleEntry = class extends SubtitleSampleEntry {
    static {
      this.fourcc = "tx3g";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.displayFlags = stream.readUint32();
      this.horizontal_justification = stream.readInt8();
      this.vertical_justification = stream.readInt8();
      this.bg_color_rgba = stream.readUint8Array(4);
      this.box_record = stream.readInt16Array(4);
      this.style_record = stream.readUint8Array(12);
      this.parseFooter(stream);
    }
  };
  var wvttSampleEntry = class extends MetadataSampleEntry {
    static {
      this.fourcc = "wvtt";
    }
    parse(stream) {
      this.parseHeader(stream);
      this.parseFooter(stream);
    }
  };
  var sbgpBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleToGroupBox";
    }
    static {
      this.fourcc = "sbgp";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.grouping_type = stream.readString(4);
      if (this.version === 1) this.grouping_type_parameter = stream.readUint32();
      else this.grouping_type_parameter = 0;
      this.entries = [];
      const entry_count = stream.readUint32();
      for (let i = 0; i < entry_count; i++) this.entries.push({
        sample_count: stream.readInt32(),
        group_description_index: stream.readInt32()
      });
    }
    /** @bundle writing/sbgp.js */
    write(stream) {
      if (this.grouping_type_parameter) this.version = 1;
      else this.version = 0;
      this.flags = 0;
      this.size = 8 + 8 * this.entries.length + (this.version === 1 ? 4 : 0);
      this.writeHeader(stream);
      stream.writeString(this.grouping_type, void 0, 4);
      if (this.version === 1) stream.writeUint32(this.grouping_type_parameter);
      stream.writeUint32(this.entries.length);
      for (let i = 0; i < this.entries.length; i++) {
        const entry = this.entries[i];
        stream.writeInt32(entry.sample_count);
        stream.writeInt32(entry.group_description_index);
      }
    }
  };
  var sdtpBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleDependencyTypeBox";
    }
    static {
      this.fourcc = "sdtp";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const count = this.size - this.hdr_size;
      this.is_leading = [];
      this.sample_depends_on = [];
      this.sample_is_depended_on = [];
      this.sample_has_redundancy = [];
      for (let i = 0; i < count; i++) {
        const tmp_byte = stream.readUint8();
        this.is_leading[i] = tmp_byte >> 6;
        this.sample_depends_on[i] = tmp_byte >> 4 & 3;
        this.sample_is_depended_on[i] = tmp_byte >> 2 & 3;
        this.sample_has_redundancy[i] = tmp_byte & 3;
      }
    }
  };
  var sgpdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleGroupDescriptionBox";
    }
    static {
      this.fourcc = "sgpd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.grouping_type = stream.readString(4);
      Log.debug("BoxParser", "Found Sample Groups of type " + this.grouping_type);
      if (this.version === 1) this.default_length = stream.readUint32();
      else this.default_length = 0;
      if (this.version >= 2) this.default_group_description_index = stream.readUint32();
      this.entries = [];
      const entry_count = stream.readUint32();
      for (let i = 0; i < entry_count; i++) {
        let entry;
        if (this.grouping_type in BoxRegistry.sampleGroupEntry) entry = new BoxRegistry.sampleGroupEntry[this.grouping_type](this.grouping_type);
        else entry = new SampleGroupEntry(this.grouping_type);
        this.entries.push(entry);
        if (this.version === 1) if (this.default_length === 0) entry.description_length = stream.readUint32();
        else entry.description_length = this.default_length;
        else entry.description_length = this.default_length;
        if (entry.write === SampleGroupEntry.prototype.write) {
          Log.info("BoxParser", "SampleGroup for type " + this.grouping_type + " writing not yet implemented, keeping unparsed data in memory for later write");
          entry.data = stream.readUint8Array(entry.description_length);
          stream.seek(stream.getPosition() - entry.description_length);
        }
        entry.parse(stream);
      }
    }
    /** @bundle writing/sgpd.js */
    write(stream) {
      this.flags = 0;
      this.size = 12;
      for (let i = 0; i < this.entries.length; i++) {
        const entry = this.entries[i];
        if (this.version === 1) {
          if (this.default_length === 0) this.size += 4;
          this.size += entry.data.length;
        }
      }
      this.writeHeader(stream);
      stream.writeString(this.grouping_type, void 0, 4);
      if (this.version === 1) stream.writeUint32(this.default_length);
      if (this.version >= 2) stream.writeUint32(this.default_sample_description_index);
      stream.writeUint32(this.entries.length);
      for (let i = 0; i < this.entries.length; i++) {
        const entry = this.entries[i];
        if (this.version === 1) {
          if (this.default_length === 0) stream.writeUint32(entry.description_length);
        }
        entry.write(stream);
      }
    }
  };
  var sidxBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompressedSegmentIndexBox";
    }
    static {
      this.fourcc = "sidx";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.reference_ID = stream.readUint32();
      this.timescale = stream.readUint32();
      if (this.version === 0) {
        this.earliest_presentation_time = stream.readUint32();
        this.first_offset = stream.readUint32();
      } else {
        this.earliest_presentation_time = stream.readUint64();
        this.first_offset = stream.readUint64();
      }
      stream.readUint16();
      this.references = [];
      const count = stream.readUint16();
      for (let i = 0; i < count; i++) {
        const type = stream.readUint32();
        const subsegment_duration = stream.readUint32();
        const sap = stream.readUint32();
        this.references.push({
          reference_type: type >> 31 & 1,
          referenced_size: type & 2147483647,
          subsegment_duration,
          starts_with_SAP: sap >> 31 & 1,
          SAP_type: sap >> 28 & 7,
          SAP_delta_time: sap & 268435455
        });
      }
    }
    /** @bundle writing/sidx.js */
    write(stream) {
      const useVersion1 = this.earliest_presentation_time > MAX_UINT32 || this.first_offset > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 12 + 12 * this.references.length;
      this.size += useVersion1 ? 16 : 8;
      this.flags = 0;
      this.writeHeader(stream);
      stream.writeUint32(this.reference_ID);
      stream.writeUint32(this.timescale);
      if (useVersion1) {
        stream.writeUint64(this.earliest_presentation_time);
        stream.writeUint64(this.first_offset);
      } else {
        stream.writeUint32(this.earliest_presentation_time);
        stream.writeUint32(this.first_offset);
      }
      stream.writeUint16(0);
      stream.writeUint16(this.references.length);
      for (let i = 0; i < this.references.length; i++) {
        const ref = this.references[i];
        stream.writeUint32(ref.reference_type << 31 | ref.referenced_size);
        stream.writeUint32(ref.subsegment_duration);
        stream.writeUint32(ref.starts_with_SAP << 31 | ref.SAP_type << 28 | ref.SAP_delta_time);
      }
    }
  };
  var smhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SoundMediaHeaderBox";
    }
    static {
      this.fourcc = "smhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.balance = stream.readUint16();
      stream.readUint16();
    }
    /** @bundle writing/smhd.js */
    write(stream) {
      this.version = 0;
      this.size = 4;
      this.writeHeader(stream);
      stream.writeUint16(this.balance);
      stream.writeUint16(0);
    }
  };
  var stcoBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ChunkOffsetBox";
    }
    static {
      this.fourcc = "stco";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.chunk_offsets = [];
      if (this.version === 0) for (let i = 0; i < entry_count; i++) this.chunk_offsets.push(stream.readUint32());
    }
    /** @bundle writings/stco.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 4 * this.chunk_offsets.length;
      this.writeHeader(stream);
      stream.writeUint32(this.chunk_offsets.length);
      stream.writeUint32Array(this.chunk_offsets);
    }
    /** @bundle box-unpack.js */
    unpack(samples) {
      for (let i = 0; i < this.chunk_offsets.length; i++) samples[i].offset = this.chunk_offsets[i];
    }
  };
  var sthdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SubtitleMediaHeaderBox";
    }
    static {
      this.fourcc = "sthd";
    }
  };
  var stscBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleToChunkBox";
    }
    static {
      this.fourcc = "stsc";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.first_chunk = [];
      this.samples_per_chunk = [];
      this.sample_description_index = [];
      if (this.version === 0) for (let i = 0; i < entry_count; i++) {
        this.first_chunk.push(stream.readUint32());
        this.samples_per_chunk.push(stream.readUint32());
        this.sample_description_index.push(stream.readUint32());
      }
    }
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 12 * this.first_chunk.length;
      this.writeHeader(stream);
      stream.writeUint32(this.first_chunk.length);
      for (let i = 0; i < this.first_chunk.length; i++) {
        stream.writeUint32(this.first_chunk[i]);
        stream.writeUint32(this.samples_per_chunk[i]);
        stream.writeUint32(this.sample_description_index[i]);
      }
    }
    unpack(samples) {
      let l = 0;
      let m = 0;
      for (let i = 0; i < this.first_chunk.length; i++) for (let j = 0; j < (i + 1 < this.first_chunk.length ? this.first_chunk[i + 1] : Infinity); j++) {
        m++;
        for (let k = 0; k < this.samples_per_chunk[i]; k++) {
          if (samples[l]) {
            samples[l].description_index = this.sample_description_index[i];
            samples[l].chunk_index = m;
          } else return;
          l++;
        }
      }
    }
  };
  var stsdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleDescriptionBox";
    }
    static {
      this.fourcc = "stsd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.entries = [];
      const entryCount = stream.readUint32();
      for (let i = 1; i <= entryCount; i++) {
        const ret = parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          let box;
          if (ret.type in BoxRegistry.sampleEntry) {
            box = new BoxRegistry.sampleEntry[ret.type](ret.size);
            box.hdr_size = ret.hdr_size;
            box.start = ret.start;
          } else {
            Log.warn("BoxParser", `Unknown sample entry type: '${ret.type}'`);
            box = new SampleEntry(ret.size, ret.hdr_size, ret.start);
            box.type = ret.type;
          }
          if (box.write === SampleEntry.prototype.write) {
            Log.info("BoxParser", "SampleEntry " + box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            box.parseDataAndRewind(stream);
          }
          box.parse(stream);
          this.entries.push(box);
        } else return;
      }
    }
    /** @bundle writing/stsd.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 0;
      this.writeHeader(stream);
      stream.writeUint32(this.entries.length);
      this.size += 4;
      for (let i = 0; i < this.entries.length; i++) {
        this.entries[i].write(stream);
        this.size += this.entries[i].size;
      }
      Log.debug("BoxWriter", "Adjusting box " + this.type + " with new size " + this.size);
      stream.adjustUint32(this.sizePosition, this.size);
    }
  };
  var stszBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleSizeBox";
    }
    static {
      this.fourcc = "stsz";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.sample_sizes = [];
      if (this.version === 0) {
        this.sample_size = stream.readUint32();
        this.sample_count = stream.readUint32();
        for (let i = 0; i < this.sample_count; i++) if (this.sample_size === 0) this.sample_sizes.push(stream.readUint32());
        else this.sample_sizes[i] = this.sample_size;
      }
    }
    /** @bundle writing/stsz.js */
    write(stream) {
      let constant = true;
      this.version = 0;
      this.flags = 0;
      if (this.sample_sizes.length > 0 && this.sample_size === 0) constant = false;
      this.size = 8;
      if (!constant) this.size += 4 * this.sample_sizes.length;
      this.writeHeader(stream);
      stream.writeUint32(this.sample_size);
      stream.writeUint32(this.sample_sizes.length);
      if (!constant) stream.writeUint32Array(this.sample_sizes);
    }
    /** @bundle box-unpack.js */
    unpack(samples) {
      for (let i = 0; i < this.sample_sizes.length; i++) samples[i].size = this.sample_sizes[i];
    }
  };
  var sttsBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TimeToSampleBox";
      this.sample_counts = [];
      this.sample_deltas = [];
    }
    static {
      this.fourcc = "stts";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.sample_counts.length = 0;
      this.sample_deltas.length = 0;
      if (this.version === 0) for (let i = 0; i < entry_count; i++) {
        this.sample_counts.push(stream.readUint32());
        let delta = stream.readInt32();
        if (delta < 0) {
          Log.warn("BoxParser", "File uses negative stts sample delta, using value 1 instead, sync may be lost!");
          delta = 1;
        }
        this.sample_deltas.push(delta);
      }
    }
    /** @bundle writing/stts.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 8 * this.sample_counts.length;
      this.writeHeader(stream);
      stream.writeUint32(this.sample_counts.length);
      for (let i = 0; i < this.sample_counts.length; i++) {
        stream.writeUint32(this.sample_counts[i]);
        stream.writeUint32(this.sample_deltas[i]);
      }
    }
    /** @bundle box-unpack.js */
    unpack(samples) {
      let k = 0;
      for (let i = 0; i < this.sample_counts.length; i++) for (let j = 0; j < this.sample_counts[i]; j++) {
        if (k === 0) samples[k].dts = 0;
        else samples[k].dts = samples[k - 1].dts + this.sample_deltas[i];
        k++;
      }
    }
  };
  var tfdtBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackFragmentBaseMediaDecodeTimeBox";
    }
    static {
      this.fourcc = "tfdt";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) this.baseMediaDecodeTime = stream.readUint64();
      else this.baseMediaDecodeTime = stream.readUint32();
    }
    /** @bundle writing/tdft.js */
    write(stream) {
      const useVersion1 = this.baseMediaDecodeTime > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 4;
      this.size += useVersion1 ? 4 : 0;
      this.flags = 0;
      this.writeHeader(stream);
      if (useVersion1) stream.writeUint64(this.baseMediaDecodeTime);
      else stream.writeUint32(this.baseMediaDecodeTime);
    }
  };
  var tfhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackFragmentHeaderBox";
    }
    static {
      this.fourcc = "tfhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      let readBytes = 0;
      this.track_id = stream.readUint32();
      if (this.size - this.hdr_size > readBytes && this.flags & 1) {
        this.base_data_offset = stream.readUint64();
        readBytes += 8;
      } else this.base_data_offset = 0;
      if (this.size - this.hdr_size > readBytes && this.flags & 2) {
        this.default_sample_description_index = stream.readUint32();
        readBytes += 4;
      } else this.default_sample_description_index = 0;
      if (this.size - this.hdr_size > readBytes && this.flags & 8) {
        this.default_sample_duration = stream.readUint32();
        readBytes += 4;
      } else this.default_sample_duration = 0;
      if (this.size - this.hdr_size > readBytes && this.flags & 16) {
        this.default_sample_size = stream.readUint32();
        readBytes += 4;
      } else this.default_sample_size = 0;
      if (this.size - this.hdr_size > readBytes && this.flags & 32) {
        this.default_sample_flags = stream.readUint32();
        readBytes += 4;
      } else this.default_sample_flags = 0;
    }
    /** @bundle writing/tfhd.js */
    write(stream) {
      this.version = 0;
      this.size = 4;
      if (this.flags & 1) this.size += 8;
      if (this.flags & 2) this.size += 4;
      if (this.flags & 8) this.size += 4;
      if (this.flags & 16) this.size += 4;
      if (this.flags & 32) this.size += 4;
      this.writeHeader(stream);
      stream.writeUint32(this.track_id);
      if (this.flags & 1) stream.writeUint64(this.base_data_offset);
      if (this.flags & 2) stream.writeUint32(this.default_sample_description_index);
      if (this.flags & 8) stream.writeUint32(this.default_sample_duration);
      if (this.flags & 16) stream.writeUint32(this.default_sample_size);
      if (this.flags & 32) stream.writeUint32(this.default_sample_flags);
    }
  };
  var tkhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackHeaderBox";
      this.layer = 0;
      this.alternate_group = 0;
    }
    static {
      this.fourcc = "tkhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.creation_time = stream.readUint64();
        this.modification_time = stream.readUint64();
        this.track_id = stream.readUint32();
        stream.readUint32();
        this.duration = stream.readUint64();
      } else {
        this.creation_time = stream.readUint32();
        this.modification_time = stream.readUint32();
        this.track_id = stream.readUint32();
        stream.readUint32();
        this.duration = stream.readUint32();
      }
      stream.readUint32Array(2);
      this.layer = stream.readInt16();
      this.alternate_group = stream.readInt16();
      this.volume = stream.readInt16() >> 8;
      stream.readUint16();
      this.matrix = stream.readInt32Array(9);
      this.width = stream.readUint32();
      this.height = stream.readUint32();
    }
    write(stream) {
      const useVersion1 = this.modification_time > MAX_UINT32 || this.creation_time > MAX_UINT32 || this.duration > MAX_UINT32 || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 80;
      this.size += useVersion1 ? 12 : 0;
      this.flags = this.flags ?? 3;
      this.writeHeader(stream);
      if (useVersion1) {
        stream.writeUint64(this.creation_time);
        stream.writeUint64(this.modification_time);
        stream.writeUint32(this.track_id);
        stream.writeUint32(0);
        stream.writeUint64(this.duration);
      } else {
        stream.writeUint32(this.creation_time);
        stream.writeUint32(this.modification_time);
        stream.writeUint32(this.track_id);
        stream.writeUint32(0);
        stream.writeUint32(this.duration);
      }
      stream.writeUint32Array([0, 0]);
      stream.writeInt16(this.layer);
      stream.writeInt16(this.alternate_group);
      stream.writeInt16(this.volume << 8);
      stream.writeInt16(0);
      stream.writeInt32Array(this.matrix);
      stream.writeUint32(this.width);
      stream.writeUint32(this.height);
    }
    /** @bundle box-print.js */
    print(output) {
      super.printHeader(output);
      output.log(output.indent + "creation_time: " + this.creation_time);
      output.log(output.indent + "modification_time: " + this.modification_time);
      output.log(output.indent + "track_id: " + this.track_id);
      output.log(output.indent + "duration: " + this.duration);
      output.log(output.indent + "volume: " + (this.volume >> 8));
      output.log(output.indent + "matrix: " + this.matrix.join(", "));
      output.log(output.indent + "layer: " + this.layer);
      output.log(output.indent + "alternate_group: " + this.alternate_group);
      output.log(output.indent + "width: " + this.width);
      output.log(output.indent + "height: " + this.height);
    }
  };
  var trexBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackExtendsBox";
    }
    static {
      this.fourcc = "trex";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.track_id = stream.readUint32();
      this.default_sample_description_index = stream.readUint32();
      this.default_sample_duration = stream.readUint32();
      this.default_sample_size = stream.readUint32();
      this.default_sample_flags = stream.readUint32();
    }
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 20;
      this.writeHeader(stream);
      stream.writeUint32(this.track_id);
      stream.writeUint32(this.default_sample_description_index);
      stream.writeUint32(this.default_sample_duration);
      stream.writeUint32(this.default_sample_size);
      stream.writeUint32(this.default_sample_flags);
    }
  };
  var trunBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackRunBox";
      this.sample_duration = [];
      this.sample_size = [];
      this.sample_flags = [];
      this.sample_composition_time_offset = [];
    }
    static {
      this.fourcc = "trun";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      let readBytes = 0;
      this.sample_count = stream.readUint32();
      readBytes += 4;
      if (this.size - this.hdr_size > readBytes && this.flags & 1) {
        this.data_offset = stream.readInt32();
        readBytes += 4;
      } else this.data_offset = 0;
      if (this.size - this.hdr_size > readBytes && this.flags & 4) {
        this.first_sample_flags = stream.readUint32();
        readBytes += 4;
      } else this.first_sample_flags = 0;
      this.sample_duration = [];
      this.sample_size = [];
      this.sample_flags = [];
      this.sample_composition_time_offset = [];
      if (this.size - this.hdr_size > readBytes) for (let i = 0; i < this.sample_count; i++) {
        if (this.flags & 256) this.sample_duration[i] = stream.readUint32();
        if (this.flags & 512) this.sample_size[i] = stream.readUint32();
        if (this.flags & 1024) this.sample_flags[i] = stream.readUint32();
        if (this.flags & 2048) if (this.version === 0) this.sample_composition_time_offset[i] = stream.readUint32();
        else this.sample_composition_time_offset[i] = stream.readInt32();
      }
    }
    /** @bundle writing/trun.js */
    write(stream) {
      this.size = 4;
      if (this.flags & 1) this.size += 4;
      if (this.flags & 4) this.size += 4;
      if (this.flags & 256) this.size += 4 * this.sample_duration.length;
      if (this.flags & 512) this.size += 4 * this.sample_size.length;
      if (this.flags & 1024) this.size += 4 * this.sample_flags.length;
      if (this.flags & 2048) this.size += 4 * this.sample_composition_time_offset.length;
      this.writeHeader(stream);
      stream.writeUint32(this.sample_count);
      if (this.flags & 1) {
        this.data_offset_position = stream.getPosition();
        stream.writeInt32(this.data_offset);
      }
      if (this.flags & 4) stream.writeUint32(this.first_sample_flags);
      for (let i = 0; i < this.sample_count; i++) {
        if (this.flags & 256) stream.writeUint32(this.sample_duration[i]);
        if (this.flags & 512) stream.writeUint32(this.sample_size[i]);
        if (this.flags & 1024) stream.writeUint32(this.sample_flags[i]);
        if (this.flags & 2048) if (this.version === 0) stream.writeUint32(this.sample_composition_time_offset[i]);
        else stream.writeInt32(this.sample_composition_time_offset[i]);
      }
    }
  };
  var urlBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "DataEntryUrlBox";
    }
    static {
      this.fourcc = "url ";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.flags !== 1) this.location = stream.readCString();
    }
    /** @bundle writing/url.js */
    write(stream) {
      this.version = 0;
      if (this.location) {
        this.flags = 0;
        this.size = this.location.length + 1;
      } else {
        this.flags = 1;
        this.size = 0;
      }
      this.writeHeader(stream);
      if (this.location) stream.writeCString(this.location);
    }
  };
  var vmhdBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "VideoMediaHeaderBox";
    }
    static {
      this.fourcc = "vmhd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.graphicsmode = stream.readUint16();
      this.opcolor = stream.readUint16Array(3);
    }
    /** @bundle writing/vmhd.js */
    write(stream) {
      this.version = 0;
      this.size = 8;
      this.writeHeader(stream);
      stream.writeUint16(this.graphicsmode);
      stream.writeUint16Array(this.opcolor);
    }
  };
  var SampleGroupInfo = class {
    constructor(grouping_type, grouping_type_parameter, sbgp) {
      this.grouping_type = grouping_type;
      this.grouping_type_parameter = grouping_type_parameter;
      this.sbgp = sbgp;
      this.last_sample_in_run = -1;
      this.entry_index = -1;
    }
  };
  var ISOFile = class ISOFile2 {
    constructor(stream, discardMdatData = true) {
      this.boxes = [];
      this.mdats = [];
      this.moofs = [];
      this.isProgressive = false;
      this.moovStartFound = false;
      this.moovStartSent = false;
      this.readySent = false;
      this.sampleListBuilt = false;
      this.fragmentedTracks = [];
      this.extractedTracks = [];
      this.isFragmentationInitialized = false;
      this.sampleProcessingStarted = false;
      this.nextMoofNumber = 0;
      this.itemListBuilt = false;
      this.sidxSent = false;
      this.items = [];
      this.entity_groups = [];
      this.itemsDataSize = 0;
      this.lastMoofIndex = 0;
      this.samplesDataSize = 0;
      this.lastBoxStartPosition = 0;
      this.nextParsePosition = 0;
      this.discardMdatData = true;
      this.discardMdatData = discardMdatData;
      if (stream) {
        this.stream = stream;
        this.parse();
      } else this.stream = new MultiBufferStream();
      this.stream.isofile = this;
    }
    setSegmentOptions(id, user, opts) {
      const { sizePerSegment = Number.MAX_SAFE_INTEGER, rapAlignement = true, normalizeAudioSampleEntriesForMSE = true } = opts;
      let nbSamples = opts.nbSamples ?? opts.nbSamplesPerFragment ?? 1e3;
      const nbSamplesPerFragment = opts.nbSamplesPerFragment ?? nbSamples;
      if (nbSamples <= 0 || nbSamplesPerFragment <= 0 || sizePerSegment <= 0) {
        Log.error("ISOFile", `Invalid segment options: nbSamples=${nbSamples}, nbSamplesPerFragment=${nbSamplesPerFragment}, sizePerSegment=${sizePerSegment}`);
        return;
      }
      if (nbSamples < nbSamplesPerFragment) {
        Log.warn("ISOFile", `nbSamples (${nbSamples}) is less than nbSamplesPerFragment (${nbSamplesPerFragment}), setting nbSamples to nbSamplesPerFragment`);
        nbSamples = nbSamplesPerFragment;
      }
      if (this.fragmentedTracks.some((track) => track.nb_samples !== nbSamples)) {
        Log.error("ISOFile", `Cannot set segment options for track ${id}: nbSamples (${nbSamples}) does not match existing tracks`);
        return;
      }
      const trak = this.getTrackById(id);
      if (trak) {
        const fragTrack = {
          id,
          user,
          trak,
          segmentStream: void 0,
          nb_samples: nbSamples,
          nb_samples_per_fragment: nbSamplesPerFragment,
          size_per_segment: sizePerSegment,
          rapAlignement,
          normalizeAudioSampleEntriesForMSE,
          state: {
            lastFragmentSampleNumber: 0,
            lastSegmentSampleNumber: 0,
            accumulatedSize: 0
          }
        };
        this.fragmentedTracks.push(fragTrack);
        trak.nextSample = 0;
      }
      if (this.discardMdatData) Log.warn("ISOFile", "Segmentation options set but discardMdatData is true, samples will not be segmented");
    }
    unsetSegmentOptions(id) {
      let index = -1;
      for (let i = 0; i < this.fragmentedTracks.length; i++) if (this.fragmentedTracks[i].id === id) index = i;
      if (index > -1) this.fragmentedTracks.splice(index, 1);
    }
    setExtractionOptions(id, user, { nbSamples: nb_samples = 1e3 } = {}) {
      const trak = this.getTrackById(id);
      if (trak) {
        this.extractedTracks.push({
          id,
          user,
          trak,
          nb_samples,
          samples: []
        });
        trak.nextSample = 0;
      }
      if (this.discardMdatData) Log.warn("ISOFile", "Extraction options set but discardMdatData is true, samples will not be extracted");
    }
    unsetExtractionOptions(id) {
      let index = -1;
      for (let i = 0; i < this.extractedTracks.length; i++) if (this.extractedTracks[i].id === id) index = i;
      if (index > -1) this.extractedTracks.splice(index, 1);
    }
    parse() {
      const parseBoxHeadersOnly = false;
      if (this.restoreParsePosition) {
        if (!this.restoreParsePosition()) return;
      }
      while (true) if (this.hasIncompleteMdat && this.hasIncompleteMdat()) if (this.processIncompleteMdat()) continue;
      else return;
      else {
        if (this.saveParsePosition) this.saveParsePosition();
        const ret = parseOneBox(this.stream, parseBoxHeadersOnly);
        if (ret.code === 0) if (this.processIncompleteBox) if (this.processIncompleteBox(ret)) continue;
        else return;
        else return;
        else if (ret.code === 1) {
          const box = ret.box;
          this.boxes.push(box);
          if (box.type === "uuid") {
            if (this[box.uuid] !== void 0) Log.warn("ISOFile", "Duplicate Box of uuid: " + box.uuid + ", overriding previous occurrence");
            this[box.uuid] = box;
          } else switch (box.type) {
            case "mdat":
              this.mdats.push(box);
              this.transferMdatData(box);
              break;
            case "moof":
              this.moofs.push(box);
              break;
            case "free":
            case "skip":
              break;
            case "moov":
              this.moovStartFound = true;
              if (this.mdats.length === 0) this.isProgressive = true;
            default:
              if (this[box.type] !== void 0) if (Array.isArray(this[box.type + "s"])) {
                Log.info("ISOFile", `Found multiple boxes of type ${box.type} in ISOFile, adding to array`);
                this[box.type + "s"].push(box);
              } else {
                Log.warn("ISOFile", `Found multiple boxes of type ${box.type} but no array exists. Creating array dynamically.`);
                this[box.type + "s"] = [this[box.type], box];
              }
              else {
                this[box.type] = box;
                if (Array.isArray(this[box.type + "s"])) this[box.type + "s"].push(box);
              }
              break;
          }
          if (this.updateUsedBytes) this.updateUsedBytes(box, ret);
        } else if (ret.code === -1) {
          Log.error("ISOFile", `Invalid data found while parsing box of type '${ret.type}' at position ${ret.start}. Aborting parsing.`, this);
          break;
        }
      }
    }
    checkBuffer(ab) {
      if (!ab) throw new Error("Buffer must be defined and non empty");
      if (ab.byteLength === 0) {
        Log.warn("ISOFile", "Ignoring empty buffer (fileStart: " + ab.fileStart + ")");
        this.stream.logBufferLevel();
        return false;
      }
      Log.info("ISOFile", "Processing buffer (fileStart: " + ab.fileStart + ")");
      ab.usedBytes = 0;
      this.stream.insertBuffer(ab);
      this.stream.logBufferLevel();
      if (!this.stream.initialized()) {
        Log.warn("ISOFile", "Not ready to start parsing");
        return false;
      }
      return true;
    }
    /**
    * Processes a new ArrayBuffer (with a fileStart property)
    * Returns the next expected file position, or undefined if not ready to parse
    */
    appendBuffer(ab, last) {
      let nextFileStart;
      if (!this.checkBuffer(ab)) return;
      this.parse();
      if (this.moovStartFound && !this.moovStartSent) {
        this.moovStartSent = true;
        if (this.onMoovStart) this.onMoovStart();
      }
      if (this.moov) {
        if (!this.sampleListBuilt) {
          this.buildSampleLists();
          this.sampleListBuilt = true;
        }
        this.updateSampleLists();
        if (this.onReady && !this.readySent) {
          this.readySent = true;
          this.onReady(this.getInfo());
        }
        this.processSamples(last);
        if (this.nextSeekPosition) {
          nextFileStart = this.nextSeekPosition;
          this.nextSeekPosition = void 0;
        } else nextFileStart = this.nextParsePosition;
        if (this.stream.getEndFilePositionAfter) nextFileStart = this.stream.getEndFilePositionAfter(nextFileStart);
      } else if (this.nextParsePosition) nextFileStart = this.nextParsePosition;
      else nextFileStart = 0;
      if (this.sidx) {
        if (this.onSidx && !this.sidxSent) {
          this.onSidx(this.sidx);
          this.sidxSent = true;
        }
      }
      if (this.meta) {
        if (this.flattenItemInfo && !this.itemListBuilt) {
          this.flattenItemInfo();
          this.itemListBuilt = true;
        }
        if (this.processItems) this.processItems(this.onItem);
      }
      if (this.stream.cleanBuffers) {
        Log.info("ISOFile", "Done processing buffer (fileStart: " + ab.fileStart + ") - next buffer to fetch should have a fileStart position of " + nextFileStart);
        this.stream.logBufferLevel();
        this.stream.cleanBuffers();
        this.stream.logBufferLevel(true);
        Log.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
      }
      return nextFileStart;
    }
    getFragmentDuration() {
      const mvex = this.getBox("mvex");
      if (!mvex) return;
      if (mvex.mehd) return {
        num: mvex.mehd.fragment_duration,
        den: this.moov.mvhd.timescale
      };
      const traks = this.getBoxes("trak", false);
      let maximum = {
        num: 0,
        den: 1
      };
      for (const trak of traks) {
        const duration = trak.samples_duration;
        const timescale = trak.mdia.mdhd.timescale;
        if (duration && timescale) {
          if (duration / timescale > maximum.num / maximum.den) maximum = {
            num: duration,
            den: timescale
          };
        }
      }
      return maximum;
    }
    getInfo() {
      if (!this.moov) return {
        hasMoov: false,
        mime: ""
      };
      const _1904 = (/* @__PURE__ */ new Date("1904-01-01T00:00:00Z")).getTime();
      const isFragmented = this.getBox("mvex") !== void 0;
      const movie = {
        hasMoov: true,
        duration: this.moov.mvhd.duration,
        timescale: this.moov.mvhd.timescale,
        isFragmented,
        fragment_duration: this.getFragmentDuration(),
        isProgressive: this.isProgressive,
        hasIOD: this.moov.iods !== void 0,
        brands: [this.ftyp.major_brand].concat(this.ftyp.compatible_brands),
        created: new Date(_1904 + this.moov.mvhd.creation_time * 1e3),
        modified: new Date(_1904 + this.moov.mvhd.modification_time * 1e3),
        tracks: [],
        audioTracks: [],
        videoTracks: [],
        subtitleTracks: [],
        metadataTracks: [],
        hintTracks: [],
        otherTracks: [],
        mime: ""
      };
      for (let i = 0; i < this.moov.traks.length; i++) {
        const trak = this.moov.traks[i];
        const sample_desc = trak.mdia.minf.stbl.stsd.entries[0];
        const size = trak.samples_size;
        const track_timescale = trak.mdia.mdhd.timescale;
        const samples_duration = trak.samples_duration;
        const track = {
          samples_duration,
          bitrate: size * 8 * track_timescale / samples_duration,
          size,
          timescale: track_timescale,
          alternate_group: trak.tkhd.alternate_group,
          codec: sample_desc.getCodec(),
          created: new Date(_1904 + trak.tkhd.creation_time * 1e3),
          cts_shift: trak.mdia.minf.stbl.cslg,
          duration: trak.mdia.mdhd.duration,
          id: trak.tkhd.track_id,
          kind: trak.udta && trak.udta.kinds.length ? trak.udta.kinds[0] : {
            schemeURI: "",
            value: ""
          },
          language: trak.mdia.elng ? trak.mdia.elng.extended_language : trak.mdia.mdhd.languageString,
          layer: trak.tkhd.layer,
          matrix: trak.tkhd.matrix,
          modified: new Date(_1904 + trak.tkhd.modification_time * 1e3),
          movie_duration: trak.tkhd.duration,
          movie_timescale: movie.timescale,
          name: trak.mdia.hdlr.name,
          nb_samples: trak.samples.length,
          references: [],
          track_height: trak.tkhd.height / 65536,
          track_width: trak.tkhd.width / 65536,
          volume: trak.tkhd.volume
        };
        movie.tracks.push(track);
        if (trak.tref) for (let j = 0; j < trak.tref.references.length; j++) track.references.push({
          type: trak.tref.references[j].type,
          track_ids: trak.tref.references[j].track_ids
        });
        if (trak.edts !== void 0 && trak.edts.elst !== void 0) track.edits = trak.edts.elst.entries;
        if (sample_desc instanceof AudioSampleEntry) {
          track.type = "audio";
          movie.audioTracks.push(track);
          track.audio = {
            sample_rate: sample_desc.getSampleRate(),
            channel_count: sample_desc.getChannelCount(),
            sample_size: sample_desc.getSampleSize()
          };
        } else if (sample_desc instanceof VisualSampleEntry) {
          track.type = "video";
          movie.videoTracks.push(track);
          track.video = {
            width: sample_desc.getWidth(),
            height: sample_desc.getHeight()
          };
        } else if (sample_desc instanceof SubtitleSampleEntry) {
          track.type = "subtitles";
          movie.subtitleTracks.push(track);
        } else if (sample_desc instanceof HintSampleEntry) {
          track.type = "metadata";
          movie.hintTracks.push(track);
        } else if (sample_desc instanceof MetadataSampleEntry) {
          track.type = "metadata";
          movie.metadataTracks.push(track);
        } else {
          track.type = "metadata";
          movie.otherTracks.push(track);
        }
      }
      if (movie.videoTracks && movie.videoTracks.length > 0) movie.mime += 'video/mp4; codecs="';
      else if (movie.audioTracks && movie.audioTracks.length > 0) movie.mime += 'audio/mp4; codecs="';
      else movie.mime += 'application/mp4; codecs="';
      for (let i = 0; i < movie.tracks.length; i++) {
        if (i !== 0) movie.mime += ",";
        movie.mime += movie.tracks[i].codec;
      }
      movie.mime += '"; profiles="';
      movie.mime += this.ftyp.compatible_brands.join();
      movie.mime += '"';
      return movie;
    }
    setNextSeekPositionFromSample(sample) {
      if (!sample) return;
      if (this.nextSeekPosition) this.nextSeekPosition = Math.min(sample.offset + sample.alreadyRead, this.nextSeekPosition);
      else this.nextSeekPosition = sample.offset + sample.alreadyRead;
    }
    processSamples(last) {
      if (!this.sampleProcessingStarted) return;
      if (this.isFragmentationInitialized && this.onSegment !== void 0) {
        const consumedTracks = /* @__PURE__ */ new Set();
        while (consumedTracks.size < this.fragmentedTracks.length && this.fragmentedTracks.some((track) => track.trak.nextSample < track.trak.samples.length) && this.sampleProcessingStarted) for (const fragTrak of this.fragmentedTracks) {
          const trak = fragTrak.trak;
          if (!consumedTracks.has(fragTrak.id)) {
            const sample = trak.nextSample < trak.samples.length ? this.getSample(trak, trak.nextSample) : void 0;
            if (!sample) {
              this.setNextSeekPositionFromSample(trak.samples[trak.nextSample]);
              consumedTracks.add(fragTrak.id);
              continue;
            }
            fragTrak.state.accumulatedSize += sample.size;
            const sampleNum = trak.nextSample + 1;
            const isFragmentOverdue = sampleNum - fragTrak.state.lastFragmentSampleNumber > fragTrak.nb_samples_per_fragment;
            const isSegmentOverdue = sampleNum - fragTrak.state.lastSegmentSampleNumber > fragTrak.nb_samples;
            let isFragmentBoundary = isFragmentOverdue || sampleNum % fragTrak.nb_samples_per_fragment === 0;
            let isSegmentBoundary = isSegmentOverdue || sampleNum % fragTrak.nb_samples === 0;
            let isSizeBoundary = fragTrak.state.accumulatedSize >= fragTrak.size_per_segment;
            const isRAP = !fragTrak.rapAlignement || sample.is_sync;
            const isFlush = last || trak.nextSample + 1 >= trak.samples.length;
            if (isFlush && !isRAP) Log.warn("ISOFile", "Flushing track #" + fragTrak.id + " at sample #" + trak.nextSample + " which is not a RAP, this may lead to playback issues");
            isFragmentBoundary = isFragmentBoundary && isRAP;
            isSegmentBoundary = isSegmentBoundary && isRAP;
            isSizeBoundary = isSizeBoundary && isRAP;
            if (isFragmentBoundary || isSizeBoundary || isFlush) {
              if (isFragmentOverdue) Log.warn("ISOFile", "Fragment on track #" + fragTrak.id + " is overdue, creating it with samples [" + fragTrak.state.lastFragmentSampleNumber + ", " + trak.nextSample + "]");
              else Log.debug("ISOFile", "Creating media fragment on track #" + fragTrak.id + " for samples [" + fragTrak.state.lastFragmentSampleNumber + ", " + trak.nextSample + "]");
              const result = this.createFragment(fragTrak.id, fragTrak.state.lastFragmentSampleNumber, trak.nextSample, fragTrak.segmentStream);
              if (result) {
                fragTrak.segmentStream = result;
                fragTrak.state.lastFragmentSampleNumber = trak.nextSample + 1;
              } else {
                consumedTracks.add(fragTrak.id);
                continue;
              }
            }
            if (isSegmentBoundary || isSizeBoundary || isFlush) {
              if (isSegmentOverdue) Log.warn("ISOFile", "Segment on track #" + fragTrak.id + " is overdue, sending it with samples [" + Math.max(0, trak.nextSample - fragTrak.nb_samples) + ", " + (trak.nextSample - 1) + "]");
              else Log.info("ISOFile", "Sending fragmented data on track #" + fragTrak.id + " for samples [" + Math.max(0, trak.nextSample - fragTrak.nb_samples) + ", " + (trak.nextSample - 1) + "]");
              Log.info("ISOFile", "Sample data size in memory: " + this.getAllocatedSampleDataSize());
              if (this.onSegment) this.onSegment(fragTrak.id, fragTrak.user, fragTrak.segmentStream.buffer, trak.nextSample + 1, last || trak.nextSample + 1 >= trak.samples.length);
              fragTrak.segmentStream = void 0;
              fragTrak.state.accumulatedSize = 0;
              fragTrak.state.lastSegmentSampleNumber = trak.nextSample + 1;
            }
            trak.nextSample++;
          }
        }
      }
      if (this.onSamples !== void 0) for (let i = 0; i < this.extractedTracks.length; i++) {
        const extractTrak = this.extractedTracks[i];
        const trak = extractTrak.trak;
        while (trak.nextSample < trak.samples.length && this.sampleProcessingStarted) {
          Log.debug("ISOFile", "Exporting on track #" + extractTrak.id + " sample #" + trak.nextSample);
          const sample = this.getSample(trak, trak.nextSample);
          if (sample) {
            trak.nextSample++;
            extractTrak.samples.push(sample);
          } else {
            this.setNextSeekPositionFromSample(trak.samples[trak.nextSample]);
            break;
          }
          if (trak.nextSample % extractTrak.nb_samples === 0 || trak.nextSample >= trak.samples.length) {
            Log.debug("ISOFile", "Sending samples on track #" + extractTrak.id + " for sample " + trak.nextSample);
            if (this.onSamples) this.onSamples(extractTrak.id, extractTrak.user, extractTrak.samples);
            extractTrak.samples = [];
            if (extractTrak !== this.extractedTracks[i]) break;
          }
        }
      }
    }
    getBox(type) {
      const result = this.getBoxes(type, true);
      return result.length ? result[0] : void 0;
    }
    getBoxes(type, returnEarly) {
      const result = [];
      const sweep = (root) => {
        if (root instanceof Box && root.type && root.type === type) result.push(root);
        const inner = [];
        if (root["boxes"]) inner.push(...root.boxes);
        if (root["entries"]) inner.push(...root["entries"]);
        if (root["item_infos"]) inner.push(...root["item_infos"]);
        if (root["references"]) inner.push(...root["references"]);
        for (const box of inner) {
          if (result.length && returnEarly) return;
          sweep(box);
        }
      };
      sweep(this);
      return result;
    }
    getTrackSamplesInfo(track_id) {
      const track = this.getTrackById(track_id);
      if (track) return track.samples;
    }
    getTrackSample(track_id, number) {
      const track = this.getTrackById(track_id);
      return this.getSample(track, number);
    }
    releaseUsedSamples(id, sampleNum) {
      let size = 0;
      const trak = this.getTrackById(id);
      if (!trak.lastValidSample) trak.lastValidSample = 0;
      for (let i = trak.lastValidSample; i < sampleNum; i++) size += this.releaseSample(trak, i);
      Log.info("ISOFile", "Track #" + id + " released samples up to " + sampleNum + " (released size: " + size + ", remaining: " + this.samplesDataSize + ")");
      trak.lastValidSample = sampleNum;
    }
    start() {
      this.sampleProcessingStarted = true;
      this.processSamples(false);
    }
    stop() {
      this.sampleProcessingStarted = false;
    }
    flush() {
      Log.info("ISOFile", "Flushing remaining samples");
      this.updateSampleLists();
      this.processSamples(true);
      this.stream.cleanBuffers();
      this.stream.logBufferLevel(true);
    }
    seekTrack(time, useRap, trak) {
      let rap_seek_sample_num = 0;
      let seek_sample_num = 0;
      let timescale;
      if (trak.samples.length === 0) {
        Log.info("ISOFile", "No sample in track, cannot seek! Using time " + Log.getDurationString(0, 1) + " and offset: 0");
        return {
          offset: 0,
          time: 0
        };
      }
      for (let j = 0; j < trak.samples.length; j++) {
        const sample = trak.samples[j];
        if (j === 0) {
          seek_sample_num = 0;
          timescale = sample.timescale;
        } else if (sample.cts > time * sample.timescale) {
          seek_sample_num = j - 1;
          break;
        }
        if (useRap && sample.is_sync) rap_seek_sample_num = j;
      }
      if (useRap) seek_sample_num = rap_seek_sample_num;
      time = trak.samples[seek_sample_num].cts;
      trak.nextSample = seek_sample_num;
      this.resetFragmentedTrackStateAfterSeek(trak, seek_sample_num);
      this.resetExtractedTrackStateAfterSeek(trak);
      while (trak.samples[seek_sample_num].alreadyRead === trak.samples[seek_sample_num].size) {
        if (!trak.samples[seek_sample_num + 1]) break;
        seek_sample_num++;
      }
      const seek_offset = trak.samples[seek_sample_num].offset + trak.samples[seek_sample_num].alreadyRead;
      Log.info("ISOFile", "Seeking to " + (useRap ? "RAP" : "") + " sample #" + trak.nextSample + " on track " + trak.tkhd.track_id + ", time " + Log.getDurationString(time, timescale) + " and offset: " + seek_offset);
      return {
        offset: seek_offset,
        time: time / timescale
      };
    }
    resetFragmentedTrackStateAfterSeek(trak, seekSampleNumber) {
      const fragTrack = this.fragmentedTracks.find((t) => t.trak === trak);
      if (!fragTrack) return;
      fragTrack.state.lastFragmentSampleNumber = seekSampleNumber;
      fragTrack.state.lastSegmentSampleNumber = seekSampleNumber;
      fragTrack.state.accumulatedSize = 0;
      fragTrack.segmentStream = void 0;
    }
    resetExtractedTrackStateAfterSeek(trak) {
      const extractTrack = this.extractedTracks.find((t) => t.trak === trak);
      if (!extractTrack) return;
      extractTrack.samples = [];
    }
    getTrackDuration(trak) {
      if (!trak.samples) return Infinity;
      const sample = trak.samples[trak.samples.length - 1];
      return (sample.cts + sample.duration) / sample.timescale;
    }
    seek(time, useRap) {
      const moov = this.moov;
      let seek_info = {
        offset: Infinity,
        time: Infinity
      };
      if (!this.moov) throw new Error("Cannot seek: moov not received!");
      else {
        for (let i = 0; i < moov.traks.length; i++) {
          const trak = moov.traks[i];
          if (time > this.getTrackDuration(trak)) continue;
          const trak_seek_info = this.seekTrack(time, useRap, trak);
          if (trak_seek_info.offset < seek_info.offset) seek_info.offset = trak_seek_info.offset;
          if (trak_seek_info.time < seek_info.time) seek_info.time = trak_seek_info.time;
        }
        Log.info("ISOFile", "Seeking at time " + Log.getDurationString(seek_info.time, 1) + " needs a buffer with a fileStart position of " + seek_info.offset);
        if (seek_info.offset === Infinity) seek_info = {
          offset: this.nextParsePosition,
          time: 0
        };
        else seek_info.offset = this.stream.getEndFilePositionAfter(seek_info.offset);
        Log.info("ISOFile", "Adjusted seek position (after checking data already in buffer): " + seek_info.offset);
        return seek_info;
      }
    }
    equal(b) {
      let box_index = 0;
      while (box_index < this.boxes.length && box_index < b.boxes.length) {
        const a_box = this.boxes[box_index];
        const b_box = b.boxes[box_index];
        if (!boxEqual(a_box, b_box)) return false;
        box_index++;
      }
      return true;
    }
    /**
    * Rewrite the entire file
    * @bundle isofile-write.js
    */
    write(outstream) {
      for (let i = 0; i < this.boxes.length; i++) this.boxes[i].write(outstream);
    }
    /** @bundle isofile-write.js */
    createFragment(track_id, sampleStart, sampleEnd, existingStream) {
      if (sampleEnd < sampleStart) {
        Log.warn("ISOFile", `Skipping fragment creation on track #${track_id}: invalid sample range [${sampleStart}, ${sampleEnd}]`);
        return existingStream || new DataStream();
      }
      const samples = [];
      for (let i = sampleStart; i <= sampleEnd; i++) {
        const trak = this.getTrackById(track_id);
        const sample = this.getSample(trak, i);
        if (!sample) {
          this.setNextSeekPositionFromSample(trak.samples[i]);
          return;
        }
        samples.push(sample);
      }
      const stream = existingStream || new DataStream();
      const moof = this.createMoof(samples);
      moof.write(stream);
      moof.trafs[0].truns[0].data_offset = moof.size + 8;
      Log.debug("MP4Box", "Adjusting data_offset with new value " + moof.trafs[0].truns[0].data_offset);
      stream.adjustUint32(moof.trafs[0].truns[0].data_offset_position, moof.trafs[0].truns[0].data_offset);
      const mdat = new mdatBox();
      mdat.stream = new MultiBufferStream();
      let offset = 0;
      for (const sample of samples) if (sample.data) {
        const mp4Buffer = MP4BoxBuffer.fromArrayBuffer(sample.data.buffer, offset);
        mdat.stream.insertBuffer(mp4Buffer);
        offset += sample.data.byteLength;
      }
      mdat.write(stream);
      return stream;
    }
    /**
    * Modify the file and create the initialization segment
    * @bundle isofile-write.js
    */
    static writeInitializationSegment(ftyp, moov, total_duration, normalizeAudioSampleEntryTrackIds) {
      Log.debug("ISOFile", "Generating initialization segment");
      const stream = new DataStream();
      ftyp.write(stream);
      const restoreCallbacks = ISOFile2.normalizeAudioSampleEntriesForMSEFragmentedInit(moov.traks, normalizeAudioSampleEntryTrackIds);
      try {
        const mvex = moov.addBox(new mvexBox());
        if (total_duration) {
          const mehd = mvex.addBox(new mehdBox());
          mehd.fragment_duration = total_duration;
        }
        for (let i = 0; i < moov.traks.length; i++) {
          const trex = mvex.addBox(new trexBox());
          trex.track_id = moov.traks[i].tkhd.track_id;
          trex.default_sample_description_index = 1;
          trex.default_sample_duration = moov.traks[i].samples[0]?.duration ?? 0;
          trex.default_sample_size = 0;
          trex.default_sample_flags = 65536;
        }
        moov.write(stream);
      } finally {
        for (let i = restoreCallbacks.length - 1; i >= 0; i--) restoreCallbacks[i]();
      }
      return stream.buffer;
    }
    /** @bundle isofile-write.js */
    save(name) {
      const stream = new DataStream();
      stream.isofile = this;
      this.write(stream);
      return stream.save(name);
    }
    /** @bundle isofile-write.js */
    getBuffer() {
      const stream = new DataStream();
      stream.isofile = this;
      this.write(stream);
      return stream;
    }
    /** @bundle isofile-write.js */
    static normalizeAudioSampleEntriesForMSEFragmentedInit(traks, normalizeAudioSampleEntryTrackIds) {
      const restoreCallbacks = [];
      for (const trak of traks) {
        if (!normalizeAudioSampleEntryTrackIds?.has(trak.tkhd.track_id)) continue;
        for (const sampleEntry of trak.mdia.minf.stbl.stsd?.entries ?? []) {
          if (!(sampleEntry instanceof mp4aSampleEntry)) continue;
          const esds = sampleEntry.wave?.esds;
          if (sampleEntry.esds || !esds) continue;
          const previousEsds = sampleEntry.esds;
          const previousWave = sampleEntry.wave;
          const previousBoxes = sampleEntry.boxes;
          restoreCallbacks.push(() => {
            sampleEntry.esds = previousEsds;
            sampleEntry.wave = previousWave;
            sampleEntry.boxes = previousBoxes;
          });
          const boxesWithoutWave = Array.isArray(sampleEntry.boxes) ? sampleEntry.boxes.filter((box) => box?.type !== "wave" && box?.type !== "esds") : [];
          sampleEntry.esds = esds;
          sampleEntry.boxes = [...boxesWithoutWave, esds];
          sampleEntry.wave = void 0;
        }
      }
      return restoreCallbacks;
    }
    initializeSegmentation(mode) {
      if (!this.onSegment) Log.warn("MP4Box", "No segmentation callback set!");
      if (mode !== void 0 && mode !== "combined" && mode !== "per-track") throw new Error(`Invalid segmentation mode: ${mode}`);
      if (!this.isFragmentationInitialized) {
        this.isFragmentationInitialized = true;
        this.resetTables();
      }
      const tracksToInitialize = [];
      for (const fragmentedTrack of this.fragmentedTracks) {
        const trak = this.getTrackById(fragmentedTrack.id);
        if (!trak) {
          Log.warn("ISOFile", `Track with id ${fragmentedTrack.id} not found, skipping fragmentation initialization`);
          continue;
        }
        tracksToInitialize.push({
          id: fragmentedTrack.id,
          user: fragmentedTrack.user,
          trak
        });
      }
      const fragmentDuration = this.moov?.mvex?.mehd?.fragment_duration;
      const normalizeAudioSampleEntryTrackIds = new Set(this.fragmentedTracks.filter((track) => track.normalizeAudioSampleEntriesForMSE !== false).map((track) => track.id));
      if (mode === "per-track") return tracksToInitialize.map(({ id, user, trak }) => {
        const moov2 = new moovBox();
        moov2.addBox(this.moov.mvhd);
        moov2.addBox(trak);
        return {
          id,
          user,
          buffer: ISOFile2.writeInitializationSegment(this.ftyp, moov2, fragmentDuration, normalizeAudioSampleEntryTrackIds)
        };
      });
      const moov = new moovBox();
      moov.addBox(this.moov.mvhd);
      for (const track of tracksToInitialize) moov.addBox(track.trak);
      return {
        tracks: tracksToInitialize.map(({ id, user }) => ({
          id,
          user
        })),
        buffer: ISOFile2.writeInitializationSegment(this.ftyp, moov, fragmentDuration, normalizeAudioSampleEntryTrackIds)
      };
    }
    /**
    * Resets all sample tables
    * @bundle isofile-sample-processing.js
    */
    resetTables() {
      this.initial_duration = this.moov.mvhd.duration;
      this.moov.mvhd.duration = 0;
      for (let i = 0; i < this.moov.traks.length; i++) {
        const trak = this.moov.traks[i];
        trak.tkhd.duration = 0;
        trak.mdia.mdhd.duration = 0;
        const stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
        stco.chunk_offsets = [];
        const stsc = trak.mdia.minf.stbl.stsc;
        stsc.first_chunk = [];
        stsc.samples_per_chunk = [];
        stsc.sample_description_index = [];
        const stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
        stsz.sample_sizes = [];
        const stts = trak.mdia.minf.stbl.stts;
        stts.sample_counts = [];
        stts.sample_deltas = [];
        const ctts = trak.mdia.minf.stbl.ctts;
        if (ctts) {
          ctts.sample_counts = [];
          ctts.sample_offsets = [];
        }
        const stss = trak.mdia.minf.stbl.stss;
        const k = trak.mdia.minf.stbl.boxes.indexOf(stss);
        if (k !== -1) trak.mdia.minf.stbl.boxes[k] = void 0;
      }
    }
    /** @bundle isofile-sample-processing.js */
    static initSampleGroups(trak, traf, sbgps, trak_sgpds, traf_sgpds) {
      if (traf) traf.sample_groups_info = [];
      if (!trak.sample_groups_info) trak.sample_groups_info = [];
      for (let k = 0; k < sbgps.length; k++) {
        const sample_group_key = sbgps[k].grouping_type + "/" + sbgps[k].grouping_type_parameter;
        const sample_group_info = new SampleGroupInfo(sbgps[k].grouping_type, sbgps[k].grouping_type_parameter, sbgps[k]);
        if (traf) traf.sample_groups_info[sample_group_key] = sample_group_info;
        if (!trak.sample_groups_info[sample_group_key]) trak.sample_groups_info[sample_group_key] = sample_group_info;
        for (let l = 0; l < trak_sgpds.length; l++) if (trak_sgpds[l].grouping_type === sbgps[k].grouping_type) {
          sample_group_info.description = trak_sgpds[l];
          sample_group_info.description.used = true;
        }
        if (traf_sgpds) {
          for (let l = 0; l < traf_sgpds.length; l++) if (traf_sgpds[l].grouping_type === sbgps[k].grouping_type) {
            sample_group_info.fragment_description = traf_sgpds[l];
            sample_group_info.fragment_description.used = true;
            sample_group_info.is_fragment = true;
          }
        }
      }
      if (!traf) {
        for (let k = 0; k < trak_sgpds.length; k++) if (!trak_sgpds[k].used && trak_sgpds[k].version >= 2) {
          const sample_group_key = trak_sgpds[k].grouping_type + "/0";
          const sample_group_info = new SampleGroupInfo(trak_sgpds[k].grouping_type, 0);
          if (!trak.sample_groups_info[sample_group_key]) trak.sample_groups_info[sample_group_key] = sample_group_info;
        }
      } else if (traf_sgpds) {
        for (let k = 0; k < traf_sgpds.length; k++) if (!traf_sgpds[k].used && traf_sgpds[k].version >= 2) {
          const sample_group_key = traf_sgpds[k].grouping_type + "/0";
          const sample_group_info = new SampleGroupInfo(traf_sgpds[k].grouping_type, 0);
          sample_group_info.is_fragment = true;
          if (!traf.sample_groups_info[sample_group_key]) traf.sample_groups_info[sample_group_key] = sample_group_info;
        }
      }
    }
    /** @bundle isofile-sample-processing.js */
    static setSampleGroupProperties(trak, sample, sample_number, sample_groups_info) {
      sample.sample_groups = [];
      for (const k in sample_groups_info) {
        sample.sample_groups[k] = {
          grouping_type: sample_groups_info[k].grouping_type,
          grouping_type_parameter: sample_groups_info[k].grouping_type_parameter
        };
        if (sample_number >= sample_groups_info[k].last_sample_in_run) {
          if (sample_groups_info[k].last_sample_in_run < 0) sample_groups_info[k].last_sample_in_run = 0;
          sample_groups_info[k].entry_index++;
          if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) sample_groups_info[k].last_sample_in_run += sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].sample_count;
        }
        if (sample_groups_info[k].entry_index <= sample_groups_info[k].sbgp.entries.length - 1) sample.sample_groups[k].group_description_index = sample_groups_info[k].sbgp.entries[sample_groups_info[k].entry_index].group_description_index;
        else sample.sample_groups[k].group_description_index = -1;
        if (sample.sample_groups[k].group_description_index !== 0) {
          let description;
          if (sample_groups_info[k].fragment_description) description = sample_groups_info[k].fragment_description;
          else description = sample_groups_info[k].description;
          if (sample.sample_groups[k].group_description_index > 0) {
            let index;
            if (sample.sample_groups[k].group_description_index > 65535) index = (sample.sample_groups[k].group_description_index >> 16) - 1;
            else index = sample.sample_groups[k].group_description_index - 1;
            if (description && index >= 0) sample.sample_groups[k].description = description.entries[index];
          } else if (description && description.version >= 2) {
            if (description.default_group_description_index > 0) sample.sample_groups[k].description = description.entries[description.default_group_description_index - 1];
          }
        }
      }
    }
    /** @bundle isofile-sample-processing.js */
    static process_sdtp(sdtp, sample, number) {
      if (!sample) return;
      if (sdtp) {
        sample.is_leading = sdtp.is_leading[number];
        sample.depends_on = sdtp.sample_depends_on[number];
        sample.is_depended_on = sdtp.sample_is_depended_on[number];
        sample.has_redundancy = sdtp.sample_has_redundancy[number];
      } else {
        sample.is_leading = 0;
        sample.depends_on = 0;
        sample.is_depended_on = 0;
        sample.has_redundancy = 0;
      }
    }
    buildSampleLists() {
      for (let i = 0; i < this.moov.traks.length; i++) this.buildTrakSampleLists(this.moov.traks[i]);
    }
    buildTrakSampleLists(trak) {
      let j;
      let chunk_run_index;
      let chunk_index;
      let last_chunk_in_run;
      let offset_in_chunk;
      let last_sample_in_chunk;
      trak.samples = [];
      trak.samples_duration = 0;
      trak.samples_size = 0;
      const stco = trak.mdia.minf.stbl.stco || trak.mdia.minf.stbl.co64;
      const stsc = trak.mdia.minf.stbl.stsc;
      const stsz = trak.mdia.minf.stbl.stsz || trak.mdia.minf.stbl.stz2;
      const stts = trak.mdia.minf.stbl.stts;
      const ctts = trak.mdia.minf.stbl.ctts;
      const stss = trak.mdia.minf.stbl.stss;
      const stsd = trak.mdia.minf.stbl.stsd;
      const subs = trak.mdia.minf.stbl.subs;
      const stdp = trak.mdia.minf.stbl.stdp;
      const sbgps = trak.mdia.minf.stbl.sbgps;
      const sgpds = trak.mdia.minf.stbl.sgpds;
      let last_sample_in_stts_run = -1;
      let stts_run_index = -1;
      let last_sample_in_ctts_run = -1;
      let ctts_run_index = -1;
      let last_stss_index = 0;
      let subs_entry_index = 0;
      let last_subs_sample_index = 0;
      ISOFile2.initSampleGroups(trak, void 0, sbgps, sgpds);
      if (typeof stsz === "undefined") return;
      for (j = 0; j < stsz.sample_sizes.length; j++) {
        const sample = {
          number: j,
          track_id: trak.tkhd.track_id,
          timescale: trak.mdia.mdhd.timescale,
          alreadyRead: 0,
          size: stsz.sample_sizes[j]
        };
        trak.samples[j] = sample;
        trak.samples_size += sample.size;
        if (j === 0) {
          chunk_index = 1;
          chunk_run_index = 0;
          sample.chunk_index = chunk_index;
          sample.chunk_run_index = chunk_run_index;
          last_sample_in_chunk = stsc.samples_per_chunk[chunk_run_index];
          offset_in_chunk = 0;
          if (chunk_run_index + 1 < stsc.first_chunk.length) last_chunk_in_run = stsc.first_chunk[chunk_run_index + 1] - 1;
          else last_chunk_in_run = Infinity;
        } else if (j < last_sample_in_chunk) {
          sample.chunk_index = chunk_index;
          sample.chunk_run_index = chunk_run_index;
        } else {
          chunk_index++;
          sample.chunk_index = chunk_index;
          offset_in_chunk = 0;
          if (chunk_index <= last_chunk_in_run) {
          } else {
            chunk_run_index++;
            if (chunk_run_index + 1 < stsc.first_chunk.length) last_chunk_in_run = stsc.first_chunk[chunk_run_index + 1] - 1;
            else last_chunk_in_run = Infinity;
          }
          sample.chunk_run_index = chunk_run_index;
          last_sample_in_chunk += stsc.samples_per_chunk[chunk_run_index];
        }
        sample.description_index = stsc.sample_description_index[sample.chunk_run_index] - 1;
        sample.description = stsd.entries[sample.description_index];
        sample.offset = stco.chunk_offsets[sample.chunk_index - 1] + offset_in_chunk;
        offset_in_chunk += sample.size;
        if (j > last_sample_in_stts_run) {
          stts_run_index++;
          if (last_sample_in_stts_run < 0) last_sample_in_stts_run = 0;
          last_sample_in_stts_run += stts.sample_counts[stts_run_index];
        }
        if (j > 0) {
          trak.samples[j - 1].duration = stts.sample_deltas[stts_run_index];
          trak.samples_duration += trak.samples[j - 1].duration;
          sample.dts = trak.samples[j - 1].dts + trak.samples[j - 1].duration;
        } else sample.dts = 0;
        if (ctts) {
          if (j >= last_sample_in_ctts_run) {
            ctts_run_index++;
            if (last_sample_in_ctts_run < 0) last_sample_in_ctts_run = 0;
            last_sample_in_ctts_run += ctts.sample_counts[ctts_run_index];
          }
          sample.cts = trak.samples[j].dts + ctts.sample_offsets[ctts_run_index];
        } else sample.cts = sample.dts;
        if (stss) {
          if (j === stss.sample_numbers[last_stss_index] - 1) {
            sample.is_sync = true;
            last_stss_index++;
          } else {
            sample.is_sync = false;
            sample.degradation_priority = 0;
          }
          if (subs) {
            if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index === j + 1) {
              sample.subsamples = subs.entries[subs_entry_index].subsamples;
              last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
              subs_entry_index++;
            }
          }
        } else sample.is_sync = true;
        ISOFile2.process_sdtp(trak.mdia.minf.stbl.sdtp, sample, sample.number);
        if (stdp) sample.degradation_priority = stdp.priority[j];
        else sample.degradation_priority = 0;
        if (subs) {
          if (subs.entries[subs_entry_index].sample_delta + last_subs_sample_index === j) {
            sample.subsamples = subs.entries[subs_entry_index].subsamples;
            last_subs_sample_index += subs.entries[subs_entry_index].sample_delta;
          }
        }
        if (sbgps.length > 0 || sgpds.length > 0) ISOFile2.setSampleGroupProperties(trak, sample, j, trak.sample_groups_info);
      }
      if (j > 0) {
        trak.samples[j - 1].duration = Math.max(trak.mdia.mdhd.duration - trak.samples[j - 1].dts, 0);
        trak.samples_duration += trak.samples[j - 1].duration;
      }
    }
    /**
    * Update sample list when new 'moof' boxes are received
    * @bundle isofile-sample-processing.js
    */
    updateSampleLists() {
      let default_sample_description_index;
      let default_sample_duration;
      let default_sample_size;
      let default_sample_flags;
      let last_run_position;
      if (this.moov === void 0) return;
      while (this.lastMoofIndex < this.moofs.length) {
        const box = this.moofs[this.lastMoofIndex];
        this.lastMoofIndex++;
        if (box.type === "moof") {
          const moof = box;
          for (let i = 0; i < moof.trafs.length; i++) {
            const traf = moof.trafs[i];
            const trak = this.getTrackById(traf.tfhd.track_id);
            const trex = this.getTrexById(traf.tfhd.track_id);
            if (traf.tfhd.flags & 2) default_sample_description_index = traf.tfhd.default_sample_description_index;
            else default_sample_description_index = trex ? trex.default_sample_description_index : 1;
            if (traf.tfhd.flags & 8) default_sample_duration = traf.tfhd.default_sample_duration;
            else default_sample_duration = trex ? trex.default_sample_duration : 0;
            if (traf.tfhd.flags & 16) default_sample_size = traf.tfhd.default_sample_size;
            else default_sample_size = trex ? trex.default_sample_size : 0;
            if (traf.tfhd.flags & 32) default_sample_flags = traf.tfhd.default_sample_flags;
            else default_sample_flags = trex ? trex.default_sample_flags : 0;
            traf.sample_number = 0;
            if (traf.sbgps.length > 0) ISOFile2.initSampleGroups(trak, traf, traf.sbgps, trak.mdia.minf.stbl.sgpds, traf.sgpds);
            for (let j = 0; j < traf.truns.length; j++) {
              const trun = traf.truns[j];
              for (let k = 0; k < trun.sample_count; k++) {
                const description_index = default_sample_description_index - 1;
                let sample_flags = default_sample_flags;
                if (trun.flags & 1024) sample_flags = trun.sample_flags[k];
                else if (k === 0 && trun.flags & 4) sample_flags = trun.first_sample_flags;
                let size = default_sample_size;
                if (trun.flags & 512) size = trun.sample_size[k];
                trak.samples_size += size;
                let duration = default_sample_duration;
                if (trun.flags & 256) duration = trun.sample_duration[k];
                trak.samples_duration += duration;
                let dts;
                if (trak.first_traf_merged || k > 0) dts = trak.samples[trak.samples.length - 1].dts + trak.samples[trak.samples.length - 1].duration;
                else {
                  if (traf.tfdt) dts = traf.tfdt.baseMediaDecodeTime;
                  else dts = 0;
                  trak.first_traf_merged = true;
                }
                let cts = dts;
                if (trun.flags & 2048) cts = dts + trun.sample_composition_time_offset[k];
                const bdop = traf.tfhd.flags & 1 ? true : false;
                const dbim = traf.tfhd.flags & 131072 ? true : false;
                const dop = trun.flags & 1 ? true : false;
                let bdo = 0;
                if (!bdop) if (!dbim) if (j === 0) bdo = moof.start;
                else bdo = last_run_position;
                else bdo = moof.start;
                else bdo = traf.tfhd.base_data_offset;
                let offset;
                if (j === 0 && k === 0) if (dop) offset = bdo + trun.data_offset;
                else offset = bdo;
                else offset = last_run_position;
                last_run_position = offset + size;
                const number_in_traf = traf.sample_number;
                traf.sample_number++;
                const sample = {
                  cts,
                  description_index,
                  description: trak.mdia.minf.stbl.stsd.entries[description_index],
                  dts,
                  duration,
                  moof_number: this.lastMoofIndex,
                  number_in_traf,
                  number: trak.samples.length,
                  offset,
                  size,
                  timescale: trak.mdia.mdhd.timescale,
                  track_id: trak.tkhd.track_id,
                  is_sync: sample_flags >> 16 & 1 ? false : true,
                  is_leading: sample_flags >> 26 & 3,
                  depends_on: sample_flags >> 24 & 3,
                  is_depended_on: sample_flags >> 22 & 3,
                  has_redundancy: sample_flags >> 20 & 3,
                  degradation_priority: sample_flags & 65535
                };
                traf.first_sample_index = trak.samples.length;
                trak.samples.push(sample);
                if (traf.sbgps.length > 0 || traf.sgpds.length > 0 || trak.mdia.minf.stbl.sbgps.length > 0 || trak.mdia.minf.stbl.sgpds.length > 0) ISOFile2.setSampleGroupProperties(trak, sample, sample.number_in_traf, traf.sample_groups_info);
              }
            }
            if (traf.subs) {
              trak.has_fragment_subsamples = true;
              let sample_index = traf.first_sample_index;
              for (let j = 0; j < traf.subs.entries.length; j++) {
                sample_index += traf.subs.entries[j].sample_delta;
                const sample = trak.samples[sample_index - 1];
                sample.subsamples = traf.subs.entries[j].subsamples;
              }
            }
          }
        }
      }
    }
    /**
    * Try to get sample data for a given sample:
    * returns null if not found
    * returns the same sample if already requested
    *
    * @bundle isofile-sample-processing.js
    */
    getSample(trak, sampleNum) {
      const sample = trak.samples[sampleNum];
      if (!this.moov) return;
      if (!sample.data) {
        sample.data = new Uint8Array(sample.size);
        sample.alreadyRead = 0;
        this.samplesDataSize += sample.size;
        Log.debug("ISOFile", "Allocating sample #" + sampleNum + " on track #" + trak.tkhd.track_id + " of size " + sample.size + " (total: " + this.samplesDataSize + ")");
      } else if (sample.alreadyRead === sample.size) return sample;
      while (true) {
        let stream = this.stream;
        let index = stream.findPosition(true, sample.offset + sample.alreadyRead, false);
        let buffer;
        let fileStart;
        if (index > -1) {
          buffer = stream.buffers[index];
          fileStart = buffer.fileStart;
        } else for (const mdat of this.mdats) {
          if (!mdat.stream) {
            Log.debug("ISOFile", "mdat stream not yet fully read for #" + this.mdats.indexOf(mdat) + " mdat");
            continue;
          }
          index = mdat.stream.findPosition(true, sample.offset + sample.alreadyRead - mdat.start - mdat.hdr_size, false);
          if (index > -1) {
            stream = mdat.stream;
            buffer = mdat.stream.buffers[index];
            fileStart = mdat.start + mdat.hdr_size + buffer.fileStart;
            break;
          }
        }
        if (buffer) {
          const lengthAfterStart = buffer.byteLength - (sample.offset + sample.alreadyRead - fileStart);
          if (sample.size - sample.alreadyRead <= lengthAfterStart) {
            Log.debug("ISOFile", "Getting sample #" + sampleNum + " data (alreadyRead: " + sample.alreadyRead + " offset: " + (sample.offset + sample.alreadyRead - fileStart) + " read size: " + (sample.size - sample.alreadyRead) + " full size: " + sample.size + ")");
            DataStream.memcpy(sample.data.buffer, sample.alreadyRead, buffer, sample.offset + sample.alreadyRead - fileStart, sample.size - sample.alreadyRead);
            buffer.usedBytes += sample.size - sample.alreadyRead;
            stream.logBufferLevel();
            sample.alreadyRead = sample.size;
            return sample;
          } else {
            if (lengthAfterStart === 0) return;
            Log.debug("ISOFile", "Getting sample #" + sampleNum + " partial data (alreadyRead: " + sample.alreadyRead + " offset: " + (sample.offset + sample.alreadyRead - fileStart) + " read size: " + lengthAfterStart + " full size: " + sample.size + ")");
            DataStream.memcpy(sample.data.buffer, sample.alreadyRead, buffer, sample.offset + sample.alreadyRead - fileStart, lengthAfterStart);
            sample.alreadyRead += lengthAfterStart;
            buffer.usedBytes += lengthAfterStart;
            stream.logBufferLevel();
          }
        } else return;
      }
    }
    /**
    * Release the memory used to store the data of the sample
    *
    * @bundle isofile-sample-processing.js
    */
    releaseSample(trak, sampleNum) {
      const sample = trak.samples[sampleNum];
      if (sample.data) {
        this.samplesDataSize -= sample.size;
        sample.data = void 0;
        sample.alreadyRead = 0;
        return sample.size;
      } else return 0;
    }
    /** @bundle isofile-sample-processing.js */
    getAllocatedSampleDataSize() {
      return this.samplesDataSize;
    }
    /**
    * Builds the MIME Type 'codecs' sub-parameters for the whole file
    *
    * @bundle isofile-sample-processing.js
    */
    getCodecs() {
      let codecs = "";
      for (let i = 0; i < this.moov.traks.length; i++) {
        const trak = this.moov.traks[i];
        if (i > 0) codecs += ",";
        codecs += trak.mdia.minf.stbl.stsd.entries[0].getCodec();
      }
      return codecs;
    }
    /**
    * Helper function
    *
    * @bundle isofile-sample-processing.js
    */
    getTrexById(id) {
      if (!this.moov || !this.moov.mvex) return;
      for (let i = 0; i < this.moov.mvex.trexs.length; i++) {
        const trex = this.moov.mvex.trexs[i];
        if (trex.track_id === id) return trex;
      }
    }
    /**
    * Helper function
    *
    * @bundle isofile-sample-processing.js
    */
    getTrackById(id) {
      if (!this.moov) return;
      for (let j = 0; j < this.moov.traks.length; j++) {
        const trak = this.moov.traks[j];
        if (trak.tkhd.track_id === id) return trak;
      }
    }
    /** @bundle isofile-item-processing.js */
    flattenItemInfo() {
      const items = this.items;
      const entity_groups = this.entity_groups;
      const meta = this.meta;
      if (!meta || !meta.hdlr || !meta.iinf) return;
      for (let i = 0; i < meta.iinf.item_infos.length; i++) {
        const id = meta.iinf.item_infos[i].item_ID;
        items[id] = {
          id,
          name: meta.iinf.item_infos[i].item_name,
          ref_to: [],
          content_type: meta.iinf.item_infos[i].content_type,
          content_encoding: meta.iinf.item_infos[i].content_encoding,
          item_uri_type: meta.iinf.item_infos[i].item_uri_type,
          type: meta.iinf.item_infos[i].item_type ? meta.iinf.item_infos[i].item_type : "mime",
          protection: meta.iinf.item_infos[i].item_protection_index > 0 ? meta.ipro.protections[meta.iinf.item_infos[i].item_protection_index - 1] : void 0
        };
      }
      if (meta.grpl) for (let i = 0; i < meta.grpl.boxes.length; i++) {
        const entityGroup = meta.grpl.boxes[i];
        entity_groups[entityGroup.group_id] = {
          id: entityGroup.group_id,
          entity_ids: entityGroup.entity_ids,
          type: entityGroup.type
        };
      }
      if (meta.iloc) for (let i = 0; i < meta.iloc.items.length; i++) {
        const itemloc = meta.iloc.items[i];
        const item = items[itemloc.item_ID];
        if (itemloc.data_reference_index !== 0) {
          Log.warn("Item storage with reference to other files: not supported");
          item.source = meta.dinf.boxes[itemloc.data_reference_index - 1];
        }
        item.extents = [];
        item.size = 0;
        for (let j = 0; j < itemloc.extents.length; j++) {
          item.extents[j] = {
            offset: itemloc.extents[j].extent_offset + itemloc.base_offset,
            length: itemloc.extents[j].extent_length,
            alreadyRead: 0
          };
          if (itemloc.construction_method === 1) item.extents[j].offset += meta.idat.start + meta.idat.hdr_size;
          item.size += item.extents[j].length;
        }
      }
      if (meta.pitm) {
        const id = meta.pitm.item_id;
        if (!items[id]) Log.warn("ISOFile", "Primary item_id #" + id + " does not exist in items");
        else items[id].primary = true;
      }
      if (meta.iref) for (let i = 0; i < meta.iref.references.length; i++) {
        const ref = meta.iref.references[i];
        for (let j = 0; j < ref.references.length; j++) items[ref.from_item_ID].ref_to.push({
          type: ref.type,
          id: ref.references[j]
        });
      }
      if (meta.iprp) for (let k = 0; k < meta.iprp.ipmas.length; k++) {
        const ipma = meta.iprp.ipmas[k];
        for (let i = 0; i < ipma.associations.length; i++) {
          const association = ipma.associations[i];
          const item = items[association.id] ?? entity_groups[association.id];
          if (item) {
            if (item.properties === void 0) item.properties = { boxes: [] };
            for (let j = 0; j < association.props.length; j++) {
              const propEntry = association.props[j];
              if (propEntry.property_index > 0 && propEntry.property_index - 1 < meta.iprp.ipco.boxes.length) {
                const propbox = meta.iprp.ipco.boxes[propEntry.property_index - 1];
                item.properties[propbox.type] = propbox;
                item.properties.boxes.push(propbox);
              }
            }
          }
        }
      }
    }
    /** @bundle isofile-item-processing.js */
    getItem(item_id) {
      if (!this.meta) return;
      const item = this.items[item_id];
      if (!item.data && item.size) {
        item.data = new Uint8Array(item.size);
        item.alreadyRead = 0;
        this.itemsDataSize += item.size;
        Log.debug("ISOFile", "Allocating item #" + item_id + " of size " + item.size + " (total: " + this.itemsDataSize + ")");
      } else if (item.alreadyRead === item.size) return item;
      for (let i = 0; i < item.extents.length; i++) {
        const extent = item.extents[i];
        if (extent.alreadyRead === extent.length) continue;
        else {
          const index = this.stream.findPosition(true, extent.offset + extent.alreadyRead, false);
          if (index > -1) {
            const buffer = this.stream.buffers[index];
            const lengthAfterStart = buffer.byteLength - (extent.offset + extent.alreadyRead - buffer.fileStart);
            if (extent.length - extent.alreadyRead <= lengthAfterStart) {
              Log.debug("ISOFile", "Getting item #" + item_id + " extent #" + i + " data (alreadyRead: " + extent.alreadyRead + " offset: " + (extent.offset + extent.alreadyRead - buffer.fileStart) + " read size: " + (extent.length - extent.alreadyRead) + " full extent size: " + extent.length + " full item size: " + item.size + ")");
              DataStream.memcpy(item.data.buffer, item.alreadyRead, buffer, extent.offset + extent.alreadyRead - buffer.fileStart, extent.length - extent.alreadyRead);
              if (!this.parsingMdat || this.discardMdatData) buffer.usedBytes += extent.length - extent.alreadyRead;
              this.stream.logBufferLevel();
              item.alreadyRead += extent.length - extent.alreadyRead;
              extent.alreadyRead = extent.length;
            } else {
              Log.debug("ISOFile", "Getting item #" + item_id + " extent #" + i + " partial data (alreadyRead: " + extent.alreadyRead + " offset: " + (extent.offset + extent.alreadyRead - buffer.fileStart) + " read size: " + lengthAfterStart + " full extent size: " + extent.length + " full item size: " + item.size + ")");
              DataStream.memcpy(item.data.buffer, item.alreadyRead, buffer, extent.offset + extent.alreadyRead - buffer.fileStart, lengthAfterStart);
              extent.alreadyRead += lengthAfterStart;
              item.alreadyRead += lengthAfterStart;
              if (!this.parsingMdat || this.discardMdatData) buffer.usedBytes += lengthAfterStart;
              this.stream.logBufferLevel();
              return;
            }
          } else return;
        }
      }
      if (item.alreadyRead === item.size) return item;
    }
    /**
    * Release the memory used to store the data of the item
    *
    * @bundle isofile-item-processing.js
    */
    releaseItem(item_id) {
      const item = this.items[item_id];
      if (item.data) {
        this.itemsDataSize -= item.size;
        item.data = void 0;
        item.alreadyRead = 0;
        for (let i = 0; i < item.extents.length; i++) {
          const extent = item.extents[i];
          extent.alreadyRead = 0;
        }
        return item.size;
      } else return 0;
    }
    /** @bundle isofile-item-processing.js */
    processItems(callback) {
      for (const i in this.items) {
        const item = this.items[i];
        this.getItem(item.id);
        if (callback && !item.sent) {
          callback(item);
          item.sent = true;
          item.data = void 0;
        }
      }
    }
    /** @bundle isofile-item-processing.js */
    hasItem(name) {
      for (const i in this.items) {
        const item = this.items[i];
        if (item.name === name) return item.id;
      }
      return -1;
    }
    /** @bundle isofile-item-processing.js */
    getMetaHandler() {
      if (this.meta) return this.meta.hdlr.handler;
    }
    /** @bundle isofile-item-processing.js */
    getPrimaryItem() {
      if (this.meta && this.meta.pitm) return this.getItem(this.meta.pitm.item_id);
    }
    /** @bundle isofile-item-processing.js */
    itemToFragmentedTrackFile({ itemId } = {}) {
      let item;
      if (itemId) item = this.getItem(itemId);
      else item = this.getPrimaryItem();
      if (!item) return;
      const file = new ISOFile2();
      file.discardMdatData = false;
      const trackOptions = {
        type: item.type,
        description_boxes: item.properties.boxes
      };
      if (item.properties.ispe) {
        trackOptions.width = item.properties.ispe.image_width;
        trackOptions.height = item.properties.ispe.image_height;
      }
      const trackId = file.addTrack(trackOptions);
      if (trackId) {
        file.addSample(trackId, item.data);
        return file;
      }
    }
    /** @bundle isofile-advanced-parsing.js */
    processIncompleteBox(ret) {
      if (ret.type === "mdat") {
        const box = new mdatBox(ret.size);
        this.parsingMdat = box;
        this.boxes.push(box);
        this.mdats.push(box);
        box.start = ret.start;
        box.hdr_size = ret.hdr_size;
        box.original_size = ret.original_size;
        this.stream.addUsedBytes(box.hdr_size);
        this.lastBoxStartPosition = box.start + box.size;
        if (this.stream.seek(box.start + box.size, false, this.discardMdatData)) {
          this.transferMdatData();
          this.parsingMdat = void 0;
          return true;
        } else {
          if (!this.moovStartFound) this.nextParsePosition = box.start + box.size;
          else this.nextParsePosition = this.stream.findEndContiguousBuf();
          return false;
        }
      } else {
        if (ret.type === "moov") {
          this.moovStartFound = true;
          if (this.mdats.length === 0) this.isProgressive = true;
        }
        if (this.stream.mergeNextBuffer ? this.stream.mergeNextBuffer() : false) {
          this.nextParsePosition = this.stream.getEndPosition();
          return true;
        } else {
          if (!ret.type) this.nextParsePosition = this.stream.getEndPosition();
          else if (this.moovStartFound) this.nextParsePosition = this.stream.getEndPosition();
          else this.nextParsePosition = this.stream.getPosition() + ret.size;
          return false;
        }
      }
    }
    /** @bundle isofile-advanced-parsing.js */
    hasIncompleteMdat() {
      return this.parsingMdat !== void 0;
    }
    /**
    * Transfer the data of the mdat box to its stream
    * @param mdat the mdat box to use
    */
    transferMdatData(inMdat) {
      const mdat = inMdat ?? this.parsingMdat;
      if (this.discardMdatData) {
        Log.debug("ISOFile", "Discarding 'mdat' data, not transferring it to the mdat box stream");
        return;
      }
      if (!mdat) {
        Log.warn("ISOFile", "Cannot transfer 'mdat' data, no mdat box is being parsed");
        return;
      }
      const startBufferIndex = this.stream.findPosition(true, mdat.start + mdat.hdr_size, false);
      const endBufferIndex = this.stream.findPosition(true, mdat.start + mdat.size, false);
      if (startBufferIndex === -1 || endBufferIndex === -1) {
        Log.warn("ISOFile", "Cannot transfer 'mdat' data, start or end buffer not found");
        return;
      }
      mdat.stream = new MultiBufferStream();
      for (let i = startBufferIndex; i <= endBufferIndex; i++) {
        const buffer = this.stream.buffers[i];
        const startOffset = i === startBufferIndex ? mdat.start + mdat.hdr_size - buffer.fileStart : 0;
        const endOffset = i === endBufferIndex ? mdat.start + mdat.size - buffer.fileStart : buffer.byteLength;
        if (endOffset > startOffset) {
          Log.debug("ISOFile", "Transferring 'mdat' data from buffer #" + i + " (" + startOffset + " to " + endOffset + ")");
          const transferSize = endOffset - startOffset;
          const newBuffer = new MP4BoxBuffer(transferSize);
          const lastPosition = mdat.stream.getAbsoluteEndPosition();
          DataStream.memcpy(newBuffer, 0, buffer, startOffset, transferSize);
          newBuffer.fileStart = lastPosition;
          mdat.stream.insertBuffer(newBuffer);
          buffer.usedBytes += transferSize;
        }
      }
    }
    /** @bundle isofile-advanced-parsing.js */
    processIncompleteMdat() {
      const box = this.parsingMdat;
      if (this.stream.seek(box.start + box.size, false, this.discardMdatData)) {
        Log.debug("ISOFile", "Found 'mdat' end in buffered data");
        this.transferMdatData();
        this.parsingMdat = void 0;
        return true;
      } else {
        this.nextParsePosition = this.stream.findEndContiguousBuf();
        return false;
      }
    }
    /** @bundle isofile-advanced-parsing.js */
    restoreParsePosition() {
      return this.stream.seek(this.lastBoxStartPosition, true, this.discardMdatData);
    }
    /** @bundle isofile-advanced-parsing.js */
    saveParsePosition() {
      this.lastBoxStartPosition = this.stream.getPosition();
    }
    /** @bundle isofile-advanced-parsing.js */
    updateUsedBytes(box, _ret) {
      if (this.stream.addUsedBytes) if (box.type === "mdat") {
        this.stream.addUsedBytes(box.hdr_size);
        if (this.discardMdatData) this.stream.addUsedBytes(box.size - box.hdr_size);
      } else this.stream.addUsedBytes(box.size);
    }
    /** @bundle isofile-advanced-creation.js */
    addBox(box) {
      return Box.prototype.addBox.call(this, box);
    }
    /** @bundle isofile-advanced-creation.js */
    init(options = {}) {
      const ftyp = this.addBox(new ftypBox());
      ftyp.major_brand = options.brands && options.brands[0] || "iso4";
      ftyp.minor_version = 0;
      ftyp.compatible_brands = options.brands || ["iso4"];
      const moov = this.addBox(new moovBox());
      moov.addBox(new mvexBox());
      const mvhd = moov.addBox(new mvhdBox());
      mvhd.timescale = options.timescale || 600;
      mvhd.rate = options.rate || 65536;
      mvhd.creation_time = 0;
      mvhd.modification_time = 0;
      mvhd.duration = options.duration || 0;
      mvhd.volume = options.width ? 0 : 256;
      mvhd.matrix = [
        65536,
        0,
        0,
        0,
        65536,
        0,
        0,
        0,
        1073741824
      ];
      mvhd.next_track_id = 1;
      return this;
    }
    /** @bundle isofile-advanced-creation.js */
    addTrack(_options = {}) {
      if (!this.moov) this.init(_options);
      const options = _options || {};
      options.width = options.width || 320;
      options.height = options.height || 320;
      options.id = options.id || this.moov.mvhd.next_track_id;
      options.type = options.type || "avc1";
      const trak = this.moov.addBox(new trakBox());
      this.moov.mvhd.next_track_id = options.id + 1;
      const tkhd = trak.addBox(new tkhdBox());
      tkhd.flags = 1 | 2 | 4;
      tkhd.creation_time = 0;
      tkhd.modification_time = 0;
      tkhd.track_id = options.id;
      tkhd.duration = options.duration || 0;
      tkhd.layer = options.layer || 0;
      tkhd.alternate_group = 0;
      tkhd.volume = 1;
      tkhd.matrix = [
        65536,
        0,
        0,
        0,
        65536,
        0,
        0,
        0,
        1073741824
      ];
      tkhd.width = options.width << 16;
      tkhd.height = options.height << 16;
      const mdia = trak.addBox(new mdiaBox());
      const mdhd = mdia.addBox(new mdhdBox());
      mdhd.creation_time = 0;
      mdhd.modification_time = 0;
      mdhd.timescale = options.timescale || 1;
      mdhd.duration = options.media_duration || 0;
      mdhd.language = options.language || "und";
      const hdlr = mdia.addBox(new hdlrBox());
      hdlr.handler = options.hdlr || "vide";
      hdlr.name = options.name || "Track created with MP4Box.js";
      const elng = mdia.addBox(new elngBox());
      elng.extended_language = options.language || "fr-FR";
      const minf = mdia.addBox(new minfBox());
      const sampleEntry = BoxRegistry.sampleEntry[options.type];
      if (!sampleEntry) return;
      const sample_description_entry = new sampleEntry();
      sample_description_entry.data_reference_index = 1;
      if (sample_description_entry instanceof VisualSampleEntry) {
        const sde = sample_description_entry;
        const vmhd = minf.addBox(new vmhdBox());
        vmhd.graphicsmode = 0;
        vmhd.opcolor = [
          0,
          0,
          0
        ];
        sde.width = options.width;
        sde.height = options.height;
        sde.horizresolution = 72 << 16;
        sde.vertresolution = 72 << 16;
        sde.frame_count = 1;
        sde.compressorname = options.type + " Compressor";
        sde.depth = 24;
        if (options.avcDecoderConfigRecord) sde.addBox(new avcCBox(options.avcDecoderConfigRecord.byteLength)).parse(new DataStream(options.avcDecoderConfigRecord));
        else if (options.hevcDecoderConfigRecord) sde.addBox(new hvcCBox(options.hevcDecoderConfigRecord.byteLength)).parse(new DataStream(options.hevcDecoderConfigRecord));
      } else if (sample_description_entry instanceof AudioSampleEntry) {
        const sde = sample_description_entry;
        const smhd = minf.addBox(new smhdBox());
        smhd.balance = options.balance || 0;
        sde.channel_count = options.channel_count || 2;
        sde.samplesize = options.samplesize || 16;
        sde.samplerate = options.samplerate || 65536;
      } else if (sample_description_entry instanceof HintSampleEntry) minf.addBox(new hmhdBox());
      else if (sample_description_entry instanceof SubtitleSampleEntry) {
        minf.addBox(new sthdBox());
        if (sample_description_entry instanceof stppSampleEntry) {
          sample_description_entry.namespace = options.namespace || "nonamespace";
          sample_description_entry.schema_location = options.schema_location || "";
          sample_description_entry.auxiliary_mime_types = options.auxiliary_mime_types || "";
        }
      } else if (sample_description_entry instanceof MetadataSampleEntry) minf.addBox(new nmhdBox());
      else if (sample_description_entry instanceof SystemSampleEntry) minf.addBox(new nmhdBox());
      else minf.addBox(new nmhdBox());
      if (options.description) sample_description_entry.addBox.call(sample_description_entry, options.description);
      if (options.description_boxes) options.description_boxes.forEach(function(b) {
        sample_description_entry.addBox.call(sample_description_entry, b);
      });
      const dref = minf.addBox(new dinfBox()).addBox(new drefBox());
      const url = new urlBox();
      url.flags = 1;
      dref.addEntry(url);
      const stbl = minf.addBox(new stblBox());
      stbl.addBox(new stsdBox()).addEntry(sample_description_entry);
      const stts = stbl.addBox(new sttsBox());
      stts.sample_counts = [];
      stts.sample_deltas = [];
      const stsc = stbl.addBox(new stscBox());
      stsc.first_chunk = [];
      stsc.samples_per_chunk = [];
      stsc.sample_description_index = [];
      const stco = stbl.addBox(new stcoBox());
      stco.chunk_offsets = [];
      const stsz = stbl.addBox(new stszBox());
      stsz.sample_sizes = [];
      const trex = this.moov.mvex.addBox(new trexBox());
      trex.track_id = options.id;
      trex.default_sample_description_index = options.default_sample_description_index || 1;
      trex.default_sample_duration = options.default_sample_duration || 0;
      trex.default_sample_size = options.default_sample_size || 0;
      trex.default_sample_flags = options.default_sample_flags || 0;
      this.buildTrakSampleLists(trak);
      return options.id;
    }
    /** @bundle isofile-advanced-creation.js */
    addSample(track_id, data, { sample_description_index, duration = 1, cts = 0, dts = 0, is_sync = false, is_leading = 0, depends_on = 0, is_depended_on = 0, has_redundancy = 0, degradation_priority = 0, subsamples, offset = 0 } = {}) {
      const trak = this.getTrackById(track_id);
      if (trak === void 0) return;
      const descriptionIndex = sample_description_index ? sample_description_index - 1 : 0;
      const sample = {
        number: trak.samples.length,
        track_id: trak.tkhd.track_id,
        timescale: trak.mdia.mdhd.timescale,
        description_index: descriptionIndex,
        description: trak.mdia.minf.stbl.stsd.entries[descriptionIndex],
        data,
        size: data.byteLength,
        alreadyRead: data.byteLength,
        duration,
        cts,
        dts,
        is_sync,
        is_leading,
        depends_on,
        is_depended_on,
        has_redundancy,
        degradation_priority,
        offset,
        subsamples
      };
      trak.samples.push(sample);
      trak.samples_size += sample.size;
      trak.samples_duration += sample.duration;
      if (trak.first_dts === void 0) trak.first_dts = dts;
      this.processSamples();
      const moof = this.addBox(this.createMoof([sample]));
      moof.computeSize();
      moof.trafs[0].truns[0].data_offset = moof.size + 8;
      const mdat = this.addBox(new mdatBox());
      mdat.data = new Uint8Array(data);
      return sample;
    }
    /** @bundle isofile-advanced-creation.js */
    createMoof(samples) {
      if (samples.length === 0) return;
      if (samples.some((s) => s.track_id !== samples[0].track_id)) throw new Error("Cannot create moof for samples from different tracks: " + samples.map((s) => s.track_id).join(", "));
      const trackId = samples[0].track_id;
      const trak = this.getTrackById(trackId);
      if (!trak) throw new Error("Cannot create moof for non-existing track: " + trackId);
      const moof = new moofBox();
      const mfhd = moof.addBox(new mfhdBox());
      mfhd.sequence_number = ++this.nextMoofNumber;
      const traf = moof.addBox(new trafBox());
      const tfhd = traf.addBox(new tfhdBox());
      tfhd.track_id = trackId;
      tfhd.flags = TFHD_FLAG_DEFAULT_BASE_IS_MOOF;
      const tfdt = traf.addBox(new tfdtBox());
      tfdt.baseMediaDecodeTime = samples[0].dts - (trak.first_dts || 0);
      const trun = traf.addBox(new trunBox());
      trun.flags = 1 | 256 | 512 | TRUN_FLAGS_FLAGS | TRUN_FLAGS_CTS_OFFSET;
      trun.data_offset = 0;
      trun.first_sample_flags = 0;
      trun.sample_count = samples.length;
      for (const sample of samples) {
        let sample_flags = 0;
        if (sample.is_sync) sample_flags = 1 << 25;
        else sample_flags = 65536;
        trun.sample_duration.push(sample.duration);
        trun.sample_size.push(sample.size);
        trun.sample_flags.push(sample_flags);
        trun.sample_composition_time_offset.push(sample.cts - sample.dts);
      }
      return moof;
    }
    /** @bundle box-print.js */
    print(output) {
      output.indent = "";
      for (let i = 0; i < this.boxes.length; i++) if (this.boxes[i]) this.boxes[i].print(output);
    }
  };
  function createFile(keepMdatData = false, stream) {
    return new ISOFile(stream, !keepMdatData);
  }
  var emsgBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "EventMessageBox";
    }
    static {
      this.fourcc = "emsg";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.timescale = stream.readUint32();
        this.presentation_time = stream.readUint64();
        this.event_duration = stream.readUint32();
        this.id = stream.readUint32();
        this.scheme_id_uri = stream.readCString();
        this.value = stream.readCString();
      } else {
        this.scheme_id_uri = stream.readCString();
        this.value = stream.readCString();
        this.timescale = stream.readUint32();
        this.presentation_time_delta = stream.readUint32();
        this.event_duration = stream.readUint32();
        this.id = stream.readUint32();
      }
      let message_size = this.size - this.hdr_size - (16 + (this.scheme_id_uri.length + 1) + (this.value.length + 1));
      if (this.version === 1) message_size -= 4;
      this.message_data = stream.readUint8Array(message_size);
    }
    /** @bundle writing/emsg.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 16 + this.message_data.length + (this.scheme_id_uri.length + 1) + (this.value.length + 1);
      this.writeHeader(stream);
      stream.writeCString(this.scheme_id_uri);
      stream.writeCString(this.value);
      stream.writeUint32(this.timescale);
      stream.writeUint32(this.presentation_time_delta);
      stream.writeUint32(this.event_duration);
      stream.writeUint32(this.id);
      stream.writeUint8Array(this.message_data);
    }
  };
  var ssixBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompressedSubsegmentIndexBox";
    }
    static {
      this.fourcc = "ssix";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.subsegments = [];
      const subsegment_count = stream.readUint32();
      for (let i = 0; i < subsegment_count; i++) {
        const subsegment = {};
        this.subsegments.push(subsegment);
        subsegment.ranges = [];
        const range_count = stream.readUint32();
        for (let j = 0; j < range_count; j++) {
          const range = {};
          subsegment.ranges.push(range);
          range.level = stream.readUint8();
          range.range_size = stream.readUint24();
        }
      }
    }
  };
  var stypBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SegmentTypeBox";
    }
    static {
      this.fourcc = "styp";
    }
    parse(stream) {
      let toparse = this.size - this.hdr_size;
      this.major_brand = stream.readString(4);
      this.minor_version = stream.readUint32();
      toparse -= 8;
      this.compatible_brands = [];
      let i = 0;
      while (toparse >= 4) {
        this.compatible_brands[i] = stream.readString(4);
        toparse -= 4;
        i++;
      }
    }
    write(stream) {
      this.size = 8 + 4 * this.compatible_brands.length;
      this.writeHeader(stream);
      stream.writeString(this.major_brand, void 0, 4);
      stream.writeUint32(this.minor_version);
      for (let i = 0; i < this.compatible_brands.length; i++) stream.writeString(this.compatible_brands[i], void 0, 4);
    }
  };

  // node_modules/mp4box/dist/mp4box.all.mjs
  var descriptor_exports = /* @__PURE__ */ __exportAll({
    Descriptor: () => Descriptor,
    ES_Descriptor: () => ES_Descriptor,
    MPEG4DescriptorParser: () => MPEG4DescriptorParser
  });
  var ES_DescrTag = 3;
  var DecoderConfigDescrTag = 4;
  var DecSpecificInfoTag = 5;
  var SLConfigDescrTag = 6;
  var Descriptor = class Descriptor2 {
    constructor(tag, size) {
      this.tag = tag;
      this.size = size;
      this.descs = [];
    }
    parse(stream) {
      this.data = stream.readUint8Array(this.size);
    }
    findDescriptor(tag) {
      for (let i = 0; i < this.descs.length; i++) if (this.descs[i].tag === tag) return this.descs[i];
    }
    parseOneDescriptor(stream) {
      let size = 0;
      const tag = stream.readUint8();
      let byteRead = stream.readUint8();
      while (byteRead & 128) {
        size = (size << 7) + (byteRead & 127);
        byteRead = stream.readUint8();
      }
      size = (size << 7) + (byteRead & 127);
      Log.debug("Descriptor", "Found " + (descTagToName[tag] || "Descriptor " + tag) + ", size " + size + " at position " + stream.getPosition());
      const desc = descTagToName[tag] ? new DESCRIPTOR_CLASSES[descTagToName[tag]](size) : new Descriptor2(size);
      desc.parse(stream);
      return desc;
    }
    parseRemainingDescriptors(stream) {
      const start2 = stream.getPosition();
      while (stream.getPosition() < start2 + this.size) {
        const desc = this.parseOneDescriptor?.(stream);
        this.descs.push(desc);
      }
    }
  };
  var ES_Descriptor = class extends Descriptor {
    constructor(size) {
      super(ES_DescrTag, size);
    }
    parse(stream) {
      this.ES_ID = stream.readUint16();
      this.flags = stream.readUint8();
      this.size -= 3;
      if (this.flags & 128) {
        this.dependsOn_ES_ID = stream.readUint16();
        this.size -= 2;
      } else this.dependsOn_ES_ID = 0;
      if (this.flags & 64) {
        const l = stream.readUint8();
        this.URL = stream.readString(l);
        this.size -= l + 1;
      } else this.URL = "";
      if (this.flags & 32) {
        this.OCR_ES_ID = stream.readUint16();
        this.size -= 2;
      } else this.OCR_ES_ID = 0;
      this.parseRemainingDescriptors(stream);
    }
    getOTI() {
      const dcd = this.findDescriptor(DecoderConfigDescrTag);
      if (dcd) return dcd.oti;
      else return 0;
    }
    getAudioConfig() {
      const dcd = this.findDescriptor(DecoderConfigDescrTag);
      if (!dcd) return;
      const dsi = dcd.findDescriptor(DecSpecificInfoTag);
      if (dsi && dsi.data) {
        let audioObjectType = (dsi.data[0] & 248) >> 3;
        if (audioObjectType === 31 && dsi.data.length >= 2) audioObjectType = 32 + ((dsi.data[0] & 7) << 3) + ((dsi.data[1] & 224) >> 5);
        return audioObjectType;
      }
    }
  };
  var DecoderConfigDescriptor = class extends Descriptor {
    constructor(size) {
      super(DecoderConfigDescrTag, size);
    }
    parse(stream) {
      this.oti = stream.readUint8();
      this.streamType = stream.readUint8();
      this.upStream = (this.streamType >> 1 & 1) !== 0;
      this.streamType = this.streamType >>> 2;
      this.bufferSize = stream.readUint24();
      this.maxBitrate = stream.readUint32();
      this.avgBitrate = stream.readUint32();
      this.size -= 13;
      this.parseRemainingDescriptors(stream);
    }
  };
  var DecoderSpecificInfo = class extends Descriptor {
    constructor(size) {
      super(DecSpecificInfoTag, size);
    }
  };
  var SLConfigDescriptor = class extends Descriptor {
    constructor(size) {
      super(SLConfigDescrTag, size);
    }
  };
  var DESCRIPTOR_CLASSES = {
    Descriptor,
    ES_Descriptor,
    DecoderConfigDescriptor,
    DecoderSpecificInfo,
    SLConfigDescriptor
  };
  var descTagToName = {
    [ES_DescrTag]: "ES_Descriptor",
    [DecoderConfigDescrTag]: "DecoderConfigDescriptor",
    [DecSpecificInfoTag]: "DecoderSpecificInfo",
    [SLConfigDescrTag]: "SLConfigDescriptor"
  };
  var MPEG4DescriptorParser = class {
    constructor() {
      this.parseOneDescriptor = Descriptor.prototype.parseOneDescriptor;
    }
    getDescriptorName(tag) {
      return descTagToName[tag];
    }
  };
  var a1lxBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AV1LayeredImageIndexingProperty";
    }
    static {
      this.fourcc = "a1lx";
    }
    parse(stream) {
      const FieldLength = ((stream.readUint8() & 1) + 1) * 16;
      this.layer_size = [];
      for (let i = 0; i < 3; i++) if (FieldLength === 16) this.layer_size[i] = stream.readUint16();
      else this.layer_size[i] = stream.readUint32();
    }
  };
  var a1opBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "OperatingPointSelectorProperty";
    }
    static {
      this.fourcc = "a1op";
    }
    parse(stream) {
      this.op_index = stream.readUint8();
    }
  };
  var auxCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AuxiliaryTypeProperty";
    }
    static {
      this.fourcc = "auxC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.aux_type = stream.readCString();
      const aux_subtype_length = this.size - this.hdr_size - (this.aux_type.length + 1);
      this.aux_subtype = stream.readUint8Array(aux_subtype_length);
    }
  };
  var btrtBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "BitRateBox";
    }
    static {
      this.fourcc = "btrt";
    }
    parse(stream) {
      this.bufferSizeDB = stream.readUint32();
      this.maxBitrate = stream.readUint32();
      this.avgBitrate = stream.readUint32();
    }
  };
  var ccstBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CodingConstraintsBox";
    }
    static {
      this.fourcc = "ccst";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const flags = stream.readUint8();
      this.all_ref_pics_intra = (flags & 128) === 128;
      this.intra_pred_used = (flags & 64) === 64;
      this.max_ref_per_pic = (flags & 63) >> 2;
      stream.readUint24();
    }
  };
  var cdefBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ComponentDefinitionBox";
    }
    static {
      this.fourcc = "cdef";
    }
    parse(stream) {
      this.channel_count = stream.readUint16();
      this.channel_indexes = [];
      this.channel_types = [];
      this.channel_associations = [];
      for (let i = 0; i < this.channel_count; i++) {
        this.channel_indexes.push(stream.readUint16());
        this.channel_types.push(stream.readUint16());
        this.channel_associations.push(stream.readUint16());
      }
    }
  };
  var clapBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CleanApertureBox";
    }
    static {
      this.fourcc = "clap";
    }
    parse(stream) {
      this.cleanApertureWidthN = stream.readUint32();
      this.cleanApertureWidthD = stream.readUint32();
      this.cleanApertureHeightN = stream.readUint32();
      this.cleanApertureHeightD = stream.readUint32();
      this.horizOffN = stream.readUint32();
      this.horizOffD = stream.readUint32();
      this.vertOffN = stream.readUint32();
      this.vertOffD = stream.readUint32();
    }
  };
  var clliBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ContentLightLevelBox";
    }
    static {
      this.fourcc = "clli";
    }
    parse(stream) {
      this.max_content_light_level = stream.readUint16();
      this.max_pic_average_light_level = stream.readUint16();
    }
  };
  var cmexBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CameraExtrinsicMatrixProperty";
    }
    static {
      this.fourcc = "cmex";
    }
    parse(stream) {
      if (this.flags & 1) this.pos_x = stream.readInt32();
      if (this.flags & 2) this.pos_y = stream.readInt32();
      if (this.flags & 4) this.pos_z = stream.readInt32();
      if (this.flags & 8) {
        if (this.version === 0) if (this.flags & 16) {
          this.quat_x = stream.readInt32();
          this.quat_y = stream.readInt32();
          this.quat_z = stream.readInt32();
        } else {
          this.quat_x = stream.readInt16();
          this.quat_y = stream.readInt16();
          this.quat_z = stream.readInt16();
        }
        else if (this.version === 1) {
        }
      }
      if (this.flags & 32) this.id = stream.readUint32();
    }
  };
  var cminBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CameraIntrinsicMatrixProperty";
    }
    static {
      this.fourcc = "cmin";
    }
    parse(stream) {
      this.focal_length_x = stream.readInt32();
      this.principal_point_x = stream.readInt32();
      this.principal_point_y = stream.readInt32();
      if (this.flags & 1) {
        this.focal_length_y = stream.readInt32();
        this.skew_factor = stream.readInt32();
      }
    }
  };
  var cmpCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompressionConfigurationBox";
    }
    static {
      this.fourcc = "cmpC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.compression_type = stream.readString(4);
      this.compressed_unit_type = stream.readUint8();
    }
  };
  var cmpdBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ComponentDefinitionBox";
    }
    static {
      this.fourcc = "cmpd";
    }
    parse(stream) {
      this.component_count = stream.readUint32();
      this.component_types = [];
      this.component_type_urls = [];
      for (let i = 0; i < this.component_count; i++) {
        const component_type = stream.readUint16();
        this.component_types.push(component_type);
        if (component_type >= 32768) this.component_type_urls.push(stream.readCString());
      }
    }
  };
  var co64Box = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ChunkLargeOffsetBox";
    }
    static {
      this.fourcc = "co64";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.chunk_offsets = [];
      if (this.version === 0) for (let i = 0; i < entry_count; i++) this.chunk_offsets.push(stream.readUint64());
    }
    /** @bundle writing/co64.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 8 * this.chunk_offsets.length;
      this.writeHeader(stream);
      stream.writeUint32(this.chunk_offsets.length);
      for (let i = 0; i < this.chunk_offsets.length; i++) stream.writeUint64(this.chunk_offsets[i]);
    }
  };
  var CoLLBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ContentLightLevelBox";
    }
    static {
      this.fourcc = "CoLL";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.maxCLL = stream.readUint16();
      this.maxFALL = stream.readUint16();
    }
  };
  var SphereRegion = class {
    toString() {
      let s = "centre_azimuth: ";
      s += this.centre_azimuth;
      s += " (";
      s += this.centre_azimuth * 2 ** -16;
      s += "\xB0), centre_elevation: ";
      s += this.centre_elevation;
      s += " (";
      s += this.centre_elevation * 2 ** -16;
      s += "\xB0), centre_tilt: ";
      s += this.centre_tilt;
      s += " (";
      s += this.centre_tilt * 2 ** -16;
      s += "\xB0)";
      if (this.range_included_flag) {
        s += ", azimuth_range: ";
        s += this.azimuth_range;
        s += " (";
        s += this.azimuth_range * 2 ** -16;
        s += "\xB0), elevation_range: ";
        s += this.elevation_range;
        s += " (";
        s += this.elevation_range * 2 ** -16;
        s += "\xB0)";
      }
      if (this.interpolate_included_flag) {
        s += ", interpolate: ";
        s += this.interpolate;
      }
      return s;
    }
  };
  var CoverageSphereRegion = class {
    toString() {
      let s = "";
      if (this.view_idc) {
        s += "view_idc: ";
        s += this.view_idc;
        s += ", ";
      }
      s += "sphere_region: {";
      s += this.sphere_region;
      s += "}";
      return s;
    }
  };
  var coviBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CoverageInformationBox";
    }
    static {
      this.fourcc = "covi";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.coverage_shape_type = stream.readUint8();
      const num_regions = stream.readUint8();
      const f = stream.readInt8();
      const view_idc_presence_flag = f & 128;
      if (view_idc_presence_flag) this.default_view_idc = (f & 96) >> 5;
      this.coverage_regions = new Array();
      for (let i = 0; i < num_regions; i++) {
        const region = new CoverageSphereRegion();
        if (view_idc_presence_flag) region.view_idc = stream.readUint8() >> 6;
        region.sphere_region = this.parseSphereRegion(stream, true, true);
        this.coverage_regions.push(region);
      }
    }
    parseSphereRegion(stream, range_included_flag, interpolate_included_flag) {
      const sphere_region = new SphereRegion();
      sphere_region.centre_azimuth = stream.readInt32();
      sphere_region.centre_elevation = stream.readInt32();
      sphere_region.centre_tilt = stream.readInt32();
      sphere_region.range_included_flag = range_included_flag;
      if (range_included_flag) {
        sphere_region.azimuth_range = stream.readUint32();
        sphere_region.elevation_range = stream.readUint32();
      }
      sphere_region.interpolate_included_flag = interpolate_included_flag;
      if (interpolate_included_flag) sphere_region.interpolate = (stream.readUint8() & 128) === 128;
      return sphere_region;
    }
  };
  var cprtBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CopyrightBox";
    }
    static {
      this.fourcc = "cprt";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.parseLanguage(stream);
      this.notice = stream.readCString();
    }
  };
  var cschBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompatibleSchemeTypeBox";
    }
    static {
      this.fourcc = "csch";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.scheme_type = stream.readString(4);
      this.scheme_version = stream.readUint32();
      if (this.flags & 1) this.scheme_uri = stream.readCString();
    }
  };
  var INT32_MAX = 2147483647;
  var cslgBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompositionToDecodeBox";
    }
    static {
      this.fourcc = "cslg";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 0) {
        this.compositionToDTSShift = stream.readInt32();
        this.leastDecodeToDisplayDelta = stream.readInt32();
        this.greatestDecodeToDisplayDelta = stream.readInt32();
        this.compositionStartTime = stream.readInt32();
        this.compositionEndTime = stream.readInt32();
      } else if (this.version === 1) {
        this.compositionToDTSShift = stream.readInt64();
        this.leastDecodeToDisplayDelta = stream.readInt64();
        this.greatestDecodeToDisplayDelta = stream.readInt64();
        this.compositionStartTime = stream.readInt64();
        this.compositionEndTime = stream.readInt64();
      }
    }
    /** @bundle writing/cslg.js */
    write(stream) {
      this.version = 0;
      if (this.compositionToDTSShift > INT32_MAX || this.leastDecodeToDisplayDelta > INT32_MAX || this.greatestDecodeToDisplayDelta > INT32_MAX || this.compositionStartTime > INT32_MAX || this.compositionEndTime > INT32_MAX) this.version = 1;
      this.flags = 0;
      if (this.version === 0) {
        this.size = 20;
        this.writeHeader(stream);
        stream.writeInt32(this.compositionToDTSShift);
        stream.writeInt32(this.leastDecodeToDisplayDelta);
        stream.writeInt32(this.greatestDecodeToDisplayDelta);
        stream.writeInt32(this.compositionStartTime);
        stream.writeInt32(this.compositionEndTime);
      } else if (this.version === 1) {
        this.size = 40;
        this.writeHeader(stream);
        stream.writeInt64(this.compositionToDTSShift);
        stream.writeInt64(this.leastDecodeToDisplayDelta);
        stream.writeInt64(this.greatestDecodeToDisplayDelta);
        stream.writeInt64(this.compositionStartTime);
        stream.writeInt64(this.compositionEndTime);
      }
    }
  };
  var cttsBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompositionOffsetBox";
    }
    static {
      this.fourcc = "ctts";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.sample_counts = [];
      this.sample_offsets = [];
      if (this.version === 0) for (let i = 0; i < entry_count; i++) {
        this.sample_counts.push(stream.readUint32());
        const value = stream.readInt32();
        if (value < 0) Log.warn("BoxParser", "ctts box uses negative values without using version 1");
        this.sample_offsets.push(value);
      }
      else if (this.version === 1) for (let i = 0; i < entry_count; i++) {
        this.sample_counts.push(stream.readUint32());
        this.sample_offsets.push(stream.readInt32());
      }
    }
    /** @bundle writing/ctts.js */
    write(stream) {
      this.version = this.sample_offsets.some((offset) => offset < 0) ? 1 : 0;
      this.flags = 0;
      this.size = 4 + 8 * this.sample_counts.length;
      this.writeHeader(stream);
      stream.writeUint32(this.sample_counts.length);
      for (let i = 0; i < this.sample_counts.length; i++) {
        stream.writeUint32(this.sample_counts[i]);
        if (this.version === 1) stream.writeInt32(this.sample_offsets[i]);
        else stream.writeUint32(this.sample_offsets[i]);
      }
    }
    /** @bundle box-unpack.js */
    unpack(samples) {
      let k = 0;
      for (let i = 0; i < this.sample_counts.length; i++) for (let j = 0; j < this.sample_counts[i]; j++) {
        samples[k].pts = samples[k].dts + this.sample_offsets[i];
        k++;
      }
    }
  };
  var dac3Box = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "AC3SpecificBox";
    }
    static {
      this.fourcc = "dac3";
    }
    parse(stream) {
      const tmp_byte1 = stream.readUint8();
      const tmp_byte2 = stream.readUint8();
      const tmp_byte3 = stream.readUint8();
      this.fscod = tmp_byte1 >> 6;
      this.bsid = tmp_byte1 >> 1 & 31;
      this.bsmod = (tmp_byte1 & 1) << 2 | tmp_byte2 >> 6 & 3;
      this.acmod = tmp_byte2 >> 3 & 7;
      this.lfeon = tmp_byte2 >> 2 & 1;
      this.bit_rate_code = tmp_byte2 & 3 | tmp_byte3 >> 5 & 7;
    }
  };
  var dec3Box = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "EC3SpecificBox";
    }
    static {
      this.fourcc = "dec3";
    }
    parse(stream) {
      const tmp_16 = stream.readUint16();
      this.data_rate = tmp_16 >> 3;
      this.num_ind_sub = tmp_16 & 7;
      this.ind_subs = [];
      for (let i = 0; i < this.num_ind_sub + 1; i++) {
        const tmp_byte1 = stream.readUint8();
        const tmp_byte2 = stream.readUint8();
        const tmp_byte3 = stream.readUint8();
        const ind_sub = {
          fscod: tmp_byte1 >> 6,
          bsid: tmp_byte1 >> 1 & 31,
          bsmod: (tmp_byte1 & 1) << 4 | tmp_byte2 >> 4 & 15,
          acmod: tmp_byte2 >> 1 & 7,
          lfeon: tmp_byte2 & 1,
          num_dep_sub: tmp_byte3 >> 1 & 15
        };
        this.ind_subs.push(ind_sub);
        if (ind_sub.num_dep_sub > 0) ind_sub.chan_loc = (tmp_byte3 & 1) << 8 | stream.readUint8();
      }
    }
  };
  var dfLaBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "FLACSpecificBox";
    }
    static {
      this.fourcc = "dfLa";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const BLOCKTYPE_MASK = 127;
      const LASTMETADATABLOCKFLAG_MASK = 128;
      const boxesFound = [];
      const knownBlockTypes = [
        "STREAMINFO",
        "PADDING",
        "APPLICATION",
        "SEEKTABLE",
        "VORBIS_COMMENT",
        "CUESHEET",
        "PICTURE",
        "RESERVED"
      ];
      let flagAndType;
      do {
        flagAndType = stream.readUint8();
        const type = Math.min(flagAndType & BLOCKTYPE_MASK, knownBlockTypes.length - 1);
        if (!type) {
          stream.readUint8Array(13);
          this.samplerate = stream.readUint32() >> 12;
          stream.readUint8Array(20);
        } else stream.readUint8Array(stream.readUint24());
        boxesFound.push(knownBlockTypes[type]);
      } while (flagAndType & LASTMETADATABLOCKFLAG_MASK);
      this.numMetadataBlocks = boxesFound.length + " (" + boxesFound.join(", ") + ")";
    }
  };
  var dimmBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintimmediateBytesSent";
    }
    static {
      this.fourcc = "dimm";
    }
    parse(stream) {
      this.bytessent = stream.readUint64();
    }
  };
  var dmax = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintlongestpacket";
    }
    static {
      this.fourcc = "dmax";
    }
    parse(stream) {
      this.time = stream.readUint32();
    }
  };
  var dmedBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintmediaBytesSent";
    }
    static {
      this.fourcc = "dmed";
    }
    parse(stream) {
      this.bytessent = stream.readUint64();
    }
  };
  var dOpsBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "OpusSpecificBox";
    }
    static {
      this.fourcc = "dOps";
    }
    parse(stream) {
      this.Version = stream.readUint8();
      this.OutputChannelCount = stream.readUint8();
      this.PreSkip = stream.readUint16();
      this.InputSampleRate = stream.readUint32();
      this.OutputGain = stream.readInt16();
      this.ChannelMappingFamily = stream.readUint8();
      if (this.ChannelMappingFamily !== 0) {
        this.StreamCount = stream.readUint8();
        this.CoupledCount = stream.readUint8();
        this.ChannelMapping = [];
        for (let i = 0; i < this.OutputChannelCount; i++) this.ChannelMapping[i] = stream.readUint8();
      }
    }
    write(stream) {
      this.size = 11;
      if (this.ChannelMappingFamily !== 0) this.size += 2 + this.OutputChannelCount;
      this.writeHeader(stream);
      stream.writeUint8(this.Version);
      stream.writeUint8(this.OutputChannelCount);
      stream.writeUint16(this.PreSkip);
      stream.writeUint32(this.InputSampleRate);
      stream.writeInt16(this.OutputGain);
      stream.writeUint8(this.ChannelMappingFamily);
      if (this.ChannelMappingFamily !== 0) {
        stream.writeUint8(this.StreamCount);
        stream.writeUint8(this.CoupledCount);
        for (let i = 0; i < this.OutputChannelCount; i++) stream.writeUint8(this.ChannelMapping[i]);
      }
    }
  };
  var drepBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintrepeatedBytesSent";
    }
    static {
      this.fourcc = "drep";
    }
    parse(stream) {
      this.bytessent = stream.readUint64();
    }
  };
  var elstBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "EditListBox";
    }
    static {
      this.fourcc = "elst";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.entries = [];
      const entry_count = stream.readUint32();
      for (let i = 0; i < entry_count; i++) {
        const entry = {
          segment_duration: this.version === 1 ? stream.readUint64() : stream.readUint32(),
          media_time: this.version === 1 ? stream.readInt64() : stream.readInt32(),
          media_rate_integer: stream.readInt16(),
          media_rate_fraction: stream.readInt16()
        };
        this.entries.push(entry);
      }
    }
    /** @bundle writing/elst.js */
    write(stream) {
      const useVersion1 = this.entries.some((entry) => entry.segment_duration > MAX_UINT32 || entry.media_time > MAX_UINT32) || this.version === 1;
      this.version = useVersion1 ? 1 : 0;
      this.size = 4 + 12 * this.entries.length;
      this.size += useVersion1 ? 8 * this.entries.length : 0;
      this.writeHeader(stream);
      stream.writeUint32(this.entries.length);
      for (let i = 0; i < this.entries.length; i++) {
        const entry = this.entries[i];
        if (useVersion1) {
          stream.writeUint64(entry.segment_duration);
          stream.writeInt64(entry.media_time);
        } else {
          stream.writeUint32(entry.segment_duration);
          stream.writeInt32(entry.media_time);
        }
        stream.writeInt16(entry.media_rate_integer);
        stream.writeInt16(entry.media_rate_fraction);
      }
    }
  };
  var EntityToGroup = class extends FullBox {
    parse(stream) {
      this.parseFullHeader(stream);
      this.group_id = stream.readUint32();
      this.num_entities_in_group = stream.readUint32();
      this.entity_ids = [];
      for (let i = 0; i < this.num_entities_in_group; i++) {
        const entity_id = stream.readUint32();
        this.entity_ids.push(entity_id);
      }
    }
  };
  var aebrBox = class extends EntityToGroup {
    constructor(..._args) {
      super(..._args);
      this.box_name = "Auto exposure bracketing";
    }
    static {
      this.fourcc = "aebr";
    }
  };
  var afbrBox = class extends EntityToGroup {
    constructor(..._args2) {
      super(..._args2);
      this.box_name = "Flash exposure information";
    }
    static {
      this.fourcc = "afbr";
    }
  };
  var albcBox = class extends EntityToGroup {
    constructor(..._args3) {
      super(..._args3);
      this.box_name = "Album collection";
    }
    static {
      this.fourcc = "albc";
    }
  };
  var altrBox = class extends EntityToGroup {
    constructor(..._args4) {
      super(..._args4);
      this.box_name = "Alternative entity";
    }
    static {
      this.fourcc = "altr";
    }
  };
  var brstBox = class extends EntityToGroup {
    constructor(..._args5) {
      super(..._args5);
      this.box_name = "Burst image";
    }
    static {
      this.fourcc = "brst";
    }
  };
  var dobrBox = class extends EntityToGroup {
    constructor(..._args6) {
      super(..._args6);
      this.box_name = "Depth of field bracketing";
    }
    static {
      this.fourcc = "dobr";
    }
  };
  var eqivBox = class extends EntityToGroup {
    constructor(..._args7) {
      super(..._args7);
      this.box_name = "Equivalent entity";
    }
    static {
      this.fourcc = "eqiv";
    }
  };
  var favcBox = class extends EntityToGroup {
    constructor(..._args8) {
      super(..._args8);
      this.box_name = "Favorites collection";
    }
    static {
      this.fourcc = "favc";
    }
  };
  var fobrBox = class extends EntityToGroup {
    constructor(..._args9) {
      super(..._args9);
      this.box_name = "Focus bracketing";
    }
    static {
      this.fourcc = "fobr";
    }
  };
  var iaugBox = class extends EntityToGroup {
    constructor(..._args10) {
      super(..._args10);
      this.box_name = "Image item with an audio track";
    }
    static {
      this.fourcc = "iaug";
    }
  };
  var panoBox = class extends EntityToGroup {
    constructor(..._args11) {
      super(..._args11);
      this.box_name = "Panorama";
    }
    static {
      this.fourcc = "pano";
    }
  };
  var slidBox = class extends EntityToGroup {
    constructor(..._args12) {
      super(..._args12);
      this.box_name = "Slideshow";
    }
    static {
      this.fourcc = "slid";
    }
  };
  var sterBox = class extends EntityToGroup {
    constructor(..._args13) {
      super(..._args13);
      this.box_name = "Stereo";
    }
    static {
      this.fourcc = "ster";
    }
  };
  var tsynBox = class extends EntityToGroup {
    constructor(..._args14) {
      super(..._args14);
      this.box_name = "Time-synchronized capture";
    }
    static {
      this.fourcc = "tsyn";
    }
  };
  var wbbrBox = class extends EntityToGroup {
    constructor(..._args15) {
      super(..._args15);
      this.box_name = "White balance bracketing";
    }
    static {
      this.fourcc = "wbbr";
    }
  };
  var prgrBox = class extends EntityToGroup {
    constructor(..._args16) {
      super(..._args16);
      this.box_name = "Progressive rendering";
    }
    static {
      this.fourcc = "prgr";
    }
  };
  var pymdBox = class extends EntityToGroup {
    constructor(..._args17) {
      super(..._args17);
      this.box_name = "Image pyramid";
    }
    static {
      this.fourcc = "pymd";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.group_id = stream.readUint32();
      this.num_entities_in_group = stream.readUint32();
      this.entity_ids = [];
      for (let i = 0; i < this.num_entities_in_group; i++) {
        const entity_id = stream.readUint32();
        this.entity_ids.push(entity_id);
      }
      this.tile_size_x = stream.readUint16();
      this.tile_size_y = stream.readUint16();
      this.layer_binning = [];
      this.tiles_in_layer_column_minus1 = [];
      this.tiles_in_layer_row_minus1 = [];
      for (let i = 0; i < this.num_entities_in_group; i++) {
        this.layer_binning[i] = stream.readUint16();
        this.tiles_in_layer_row_minus1[i] = stream.readUint16();
        this.tiles_in_layer_column_minus1[i] = stream.readUint16();
      }
    }
  };
  var fielBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "FieldHandlingBox";
    }
    static {
      this.fourcc = "fiel";
    }
    parse(stream) {
      this.fieldCount = stream.readUint8();
      this.fieldOrdering = stream.readUint8();
    }
  };
  var frmaBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "OriginalFormatBox";
    }
    static {
      this.fourcc = "frma";
    }
    parse(stream) {
      this.data_format = stream.readString(4);
    }
  };
  var imirBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ImageMirror";
    }
    static {
      this.fourcc = "imir";
    }
    parse(stream) {
      const tmp = stream.readUint8();
      this.reserved = tmp >> 7;
      this.axis = tmp & 1;
    }
  };
  var ipmaBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ItemPropertyAssociationBox";
    }
    static {
      this.fourcc = "ipma";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.associations = [];
      for (let i = 0; i < entry_count; i++) {
        const id = this.version < 1 ? stream.readUint16() : stream.readUint32();
        const props = [];
        const association_count = stream.readUint8();
        for (let j = 0; j < association_count; j++) {
          const tmp = stream.readUint8();
          props.push({
            essential: (tmp & 128) >> 7 === 1,
            property_index: this.flags & 1 ? (tmp & 127) << 8 | stream.readUint8() : tmp & 127
          });
        }
        this.associations.push({
          id,
          props
        });
      }
    }
  };
  var irotBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ImageRotation";
    }
    static {
      this.fourcc = "irot";
    }
    parse(stream) {
      this.angle = stream.readUint8() & 3;
    }
  };
  var ispeBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ImageSpatialExtentsProperty";
    }
    static {
      this.fourcc = "ispe";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.image_width = stream.readUint32();
      this.image_height = stream.readUint32();
    }
  };
  var itaiBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TAITimestampBox";
    }
    static {
      this.fourcc = "itai";
    }
    parse(stream) {
      this.TAI_timestamp = stream.readUint64();
      const status_bits = stream.readUint8();
      this.sychronization_state = status_bits >> 7 & 1;
      this.timestamp_generation_failure = status_bits >> 6 & 1;
      this.timestamp_is_modified = status_bits >> 5 & 1;
    }
  };
  var kindBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "KindBox";
    }
    static {
      this.fourcc = "kind";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.schemeURI = stream.readCString();
      if (!this.isEndOfBox(stream)) this.value = stream.readCString();
    }
    /** @bundle writing/kind.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = this.schemeURI.length + 1 + (this.value ? this.value.length + 1 : 0);
      this.writeHeader(stream);
      stream.writeCString(this.schemeURI);
      if (this.value) stream.writeCString(this.value);
    }
  };
  var levaBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "LevelAssignmentBox";
    }
    static {
      this.fourcc = "leva";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const count = stream.readUint8();
      this.levels = [];
      for (let i = 0; i < count; i++) {
        const level = {};
        this.levels[i] = level;
        level.track_ID = stream.readUint32();
        const tmp_byte = stream.readUint8();
        level.padding_flag = tmp_byte >> 7;
        level.assignment_type = tmp_byte & 127;
        switch (level.assignment_type) {
          case 0:
            level.grouping_type = stream.readString(4);
            break;
          case 1:
            level.grouping_type = stream.readString(4);
            level.grouping_type_parameter = stream.readUint32();
            break;
          case 2:
            break;
          case 3:
            break;
          case 4:
            level.sub_track_id = stream.readUint32();
            break;
          default:
            Log.warn("BoxParser", `Unknown level assignment type: ${level.assignment_type}`);
        }
      }
    }
  };
  var lhvCBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "LHEVCConfigurationBox";
    }
    static {
      this.fourcc = "lhvC";
    }
    parse(stream) {
      this.configurationVersion = stream.readUint8();
      this.min_spatial_segmentation_idc = stream.readUint16() & 4095;
      this.parallelismType = stream.readUint8() & 3;
      let tmp_byte = stream.readUint8();
      this.numTemporalLayers = (tmp_byte & 13) >> 3;
      this.temporalIdNested = (tmp_byte & 4) >> 2;
      this.lengthSizeMinusOne = tmp_byte & 3;
      this.nalu_arrays = [];
      const numOfArrays = stream.readUint8();
      for (let i = 0; i < numOfArrays; i++) {
        const nalu_array = [];
        this.nalu_arrays.push(nalu_array);
        tmp_byte = stream.readUint8();
        nalu_array.completeness = (tmp_byte & 128) >> 7;
        nalu_array.nalu_type = tmp_byte & 63;
        const numNalus = stream.readUint16();
        for (let j = 0; j < numNalus; j++) {
          const length = stream.readUint16();
          nalu_array.push({ data: stream.readUint8Array(length) });
        }
      }
    }
  };
  var lselBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "LayerSelectorProperty";
    }
    static {
      this.fourcc = "lsel";
    }
    parse(stream) {
      this.layer_id = stream.readUint16();
    }
  };
  var maxrBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintmaxrate";
    }
    static {
      this.fourcc = "maxr";
    }
    parse(stream) {
      this.period = stream.readUint32();
      this.bytes = stream.readUint32();
    }
  };
  var ColorPoint = class {
    constructor(x, y) {
      this.x = x;
      this.y = y;
    }
    toString() {
      return "(" + this.x + "," + this.y + ")";
    }
  };
  var mdcvBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MasteringDisplayColourVolumeBox";
    }
    static {
      this.fourcc = "mdcv";
    }
    parse(stream) {
      this.display_primaries = [];
      this.display_primaries[0] = new ColorPoint(stream.readUint16(), stream.readUint16());
      this.display_primaries[1] = new ColorPoint(stream.readUint16(), stream.readUint16());
      this.display_primaries[2] = new ColorPoint(stream.readUint16(), stream.readUint16());
      this.white_point = new ColorPoint(stream.readUint16(), stream.readUint16());
      this.max_display_mastering_luminance = stream.readUint32();
      this.min_display_mastering_luminance = stream.readUint32();
    }
  };
  var mfroBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MovieFragmentRandomAccessOffsetBox";
    }
    static {
      this.fourcc = "mfro";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this._size = stream.readUint32();
    }
  };
  var mskCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "MaskConfigurationProperty";
    }
    static {
      this.fourcc = "mskC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.bits_per_pixel = stream.readUint8();
    }
  };
  var npckBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintPacketsSent";
    }
    static {
      this.fourcc = "npck";
    }
    parse(stream) {
      this.packetssent = stream.readUint32();
    }
  };
  var numpBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintPacketsSent";
    }
    static {
      this.fourcc = "nump";
    }
    parse(stream) {
      this.packetssent = stream.readUint64();
    }
  };
  var PaddingBit = class {
    constructor(pad1, pad2) {
      this.pad1 = pad1;
      this.pad2 = pad2;
    }
  };
  var padbBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "PaddingBitsBox";
    }
    static {
      this.fourcc = "padb";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const sample_count = stream.readUint32();
      this.padbits = [];
      for (let i = 0; i < Math.floor((sample_count + 1) / 2); i++) {
        const bits = stream.readUint8();
        const pad1 = (bits & 112) >> 4;
        const pad2 = bits & 7;
        this.padbits.push(new PaddingBit(pad1, pad2));
      }
    }
  };
  var paspBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "PixelAspectRatioBox";
    }
    static {
      this.fourcc = "pasp";
    }
    parse(stream) {
      this.hSpacing = stream.readUint32();
      this.vSpacing = stream.readUint32();
    }
  };
  var paylBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CuePayloadBox";
    }
    static {
      this.fourcc = "payl";
    }
    parse(stream) {
      this.text = stream.readString(this.size - this.hdr_size);
    }
  };
  var paytBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintpayloadID";
    }
    static {
      this.fourcc = "payt";
    }
    parse(stream) {
      this.payloadID = stream.readUint32();
      const count = stream.readUint8();
      this.rtpmap_string = stream.readString(count);
    }
  };
  var pdinBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ProgressiveDownloadInfoBox";
      this.rate = [];
      this.initial_delay = [];
    }
    static {
      this.fourcc = "pdin";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const count = (this.size - this.hdr_size) / 8;
      for (let i = 0; i < count; i++) {
        this.rate[i] = stream.readUint32();
        this.initial_delay[i] = stream.readUint32();
      }
    }
  };
  var pixiBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "PixelInformationProperty";
    }
    static {
      this.fourcc = "pixi";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.num_channels = stream.readUint8();
      this.bits_per_channels = [];
      for (let i = 0; i < this.num_channels; i++) this.bits_per_channels[i] = stream.readUint8();
    }
  };
  var pmaxBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintlargestpacket";
    }
    static {
      this.fourcc = "pmax";
    }
    parse(stream) {
      this.bytes = stream.readUint32();
    }
  };
  var prdiBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ProgressiveDerivedImageItemInformationProperty";
    }
    static {
      this.fourcc = "prdi";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.step_count = stream.readUint16();
      this.item_count = [];
      if (this.flags & 2) for (let i = 0; i < this.step_count; i++) this.item_count[i] = stream.readUint16();
    }
  };
  var prfrBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ProjectionFormatBox";
    }
    static {
      this.fourcc = "prfr";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.projection_type = stream.readUint8() & 31;
    }
  };
  var prftBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ProducerReferenceTimeBox";
    }
    static {
      this.fourcc = "prft";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.ref_track_id = stream.readUint32();
      this.ntp_timestamp = stream.readUint64();
      if (this.version === 0) this.media_time = stream.readUint32();
      else this.media_time = stream.readUint64();
    }
  };
  var psshBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ProtectionSystemSpecificHeaderBox";
    }
    static {
      this.fourcc = "pssh";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.system_id = parseHex16(stream);
      this.kid = [];
      if (this.version > 0) {
        const count = stream.readUint32();
        for (let i = 0; i < count; i++) this.kid[i] = parseHex16(stream);
      }
      const datasize = stream.readUint32();
      if (datasize > 0) this.protection_data = stream.readUint8Array(datasize);
    }
  };
  var clefBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackCleanApertureDimensionsBox";
    }
    static {
      this.fourcc = "clef";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.width = stream.readUint32();
      this.height = stream.readUint32();
    }
  };
  function parseItifData(type, data) {
    if (type === dataBox.Types.UTF8) return new TextDecoder("utf-8").decode(data);
    const view = new DataView(data.buffer);
    if (type === dataBox.Types.BE_UNSIGNED_INT) if (data.length === 1) return view.getUint8(0);
    else if (data.length === 2) return view.getUint16(0, false);
    else if (data.length === 4) return view.getUint32(0, false);
    else if (data.length === 8) return view.getBigUint64(0, false);
    else throw new Error("Unsupported ITIF_TYPE_BE_UNSIGNED_INT length " + data.length);
    else if (type === dataBox.Types.BE_SIGNED_INT) if (data.length === 1) return view.getInt8(0);
    else if (data.length === 2) return view.getInt16(0, false);
    else if (data.length === 4) return view.getInt32(0, false);
    else if (data.length === 8) return view.getBigInt64(0, false);
    else throw new Error("Unsupported ITIF_TYPE_BE_SIGNED_INT length " + data.length);
    else if (type === dataBox.Types.BE_FLOAT32) return view.getFloat32(0, false);
    Log.warn("DataBox", "Unsupported or unimplemented itif data type: " + type);
  }
  var dataBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "DataBox";
    }
    static {
      this.fourcc = "data";
    }
    static {
      this.Types = {
        RESERVED: 0,
        UTF8: 1,
        UTF16: 2,
        SJIS: 3,
        UTF8_SORT: 4,
        UTF16_SORT: 5,
        JPEG: 13,
        PNG: 14,
        BE_SIGNED_INT: 21,
        BE_UNSIGNED_INT: 22,
        BE_FLOAT32: 23,
        BE_FLOAT64: 24,
        BMP: 27,
        QT_ATOM: 28,
        BE_SIGNED_INT8: 65,
        BE_SIGNED_INT16: 66,
        BE_SIGNED_INT32: 67,
        BE_FLOAT32_POINT: 70,
        BE_FLOAT32_DIMENSIONS: 71,
        BE_FLOAT32_RECT: 72,
        BE_SIGNED_INT64: 74,
        BE_UNSIGNED_INT8: 75,
        BE_UNSIGNED_INT16: 76,
        BE_UNSIGNED_INT32: 77,
        BE_UNSIGNED_INT64: 78,
        BE_FLOAT64_AFFINE_TRANSFORM: 79
      };
    }
    parse(stream) {
      this.valueType = stream.readUint32();
      this.country = stream.readUint16();
      if (this.country > 255) {
        stream.seek(stream.getPosition() - 2);
        this.countryString = stream.readString(2);
      }
      this.language = stream.readUint16();
      if (this.language > 255) {
        stream.seek(stream.getPosition() - 2);
        this.parseLanguage(stream);
      }
      this.raw = stream.readUint8Array(this.size - this.hdr_size - 8);
      this.value = parseItifData(this.valueType, this.raw);
    }
  };
  var enofBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackEncodedPixelsDimensionsBox";
    }
    static {
      this.fourcc = "enof";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.width = stream.readUint32();
      this.height = stream.readUint32();
    }
  };
  var ilstBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "IlstBox";
    }
    static {
      this.fourcc = "ilst";
    }
    parse(stream) {
      this.list = {};
      let total = this.size - this.hdr_size;
      while (total > 0) {
        const size = stream.readUint32();
        const index = stream.readUint32();
        const res = parseOneBox(stream, false, size - 8);
        if (res.code === 1) this.list[index] = res.box;
        total -= size;
      }
    }
  };
  var keysBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "KeysBox";
    }
    static {
      this.fourcc = "keys";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.count = stream.readUint32();
      this.keys = {};
      for (let i = 0; i < this.count; i++) {
        const len = stream.readUint32();
        this.keys[i + 1] = stream.readString(len - 4);
      }
    }
  };
  var profBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackProductionApertureDimensionsBox";
    }
    static {
      this.fourcc = "prof";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.width = stream.readUint32();
      this.height = stream.readUint32();
    }
  };
  var taptBox = class extends ContainerBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackApertureModeDimensionsBox";
      this.clefs = [];
      this.profs = [];
      this.enofs = [];
      this.subBoxNames = [
        "clef",
        "prof",
        "enof"
      ];
    }
    static {
      this.fourcc = "tapt";
    }
  };
  var rtp_Box = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "rtpmoviehintinformation";
    }
    static {
      this.fourcc = "rtp ";
    }
    parse(stream) {
      this.descriptionformat = stream.readString(4);
      this.sdptext = stream.readString(this.size - this.hdr_size - 4);
    }
  };
  var saioBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleAuxiliaryInformationOffsetsBox";
    }
    static {
      this.fourcc = "saio";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.flags & 1) {
        this.aux_info_type = stream.readString(4);
        this.aux_info_type_parameter = stream.readUint32();
      }
      this.entry_count = stream.readUint32();
      this.offset = [];
      for (let i = 0; i < this.entry_count; i++) if (this.version === 0) this.offset[i] = stream.readUint32();
      else this.offset[i] = stream.readUint64();
    }
  };
  var saizBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleAuxiliaryInformationSizesBox";
    }
    static {
      this.fourcc = "saiz";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.flags & 1) {
        this.aux_info_type = stream.readString(4);
        this.aux_info_type_parameter = stream.readUint32();
      }
      this.default_sample_info_size = stream.readUint8();
      this.sample_count = stream.readUint32();
      this.sample_info_size = [];
      if (this.default_sample_info_size === 0) for (let i = 0; i < this.sample_count; i++) this.sample_info_size[i] = stream.readUint8();
    }
  };
  var Pixel = class {
    constructor(bad_pixel_row, bad_pixel_column) {
      this.bad_pixel_row = bad_pixel_row;
      this.bad_pixel_column = bad_pixel_column;
    }
    toString() {
      return "[row: " + this.bad_pixel_row + ", column: " + this.bad_pixel_column + "]";
    }
  };
  var sbpmBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SensorBadPixelsMapBox";
    }
    static {
      this.fourcc = "sbpm";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.component_count = stream.readUint16();
      this.component_index = [];
      for (let i = 0; i < this.component_count; i++) this.component_index.push(stream.readUint16());
      const flags = stream.readUint8();
      this.correction_applied = 128 === (flags & 128);
      this.num_bad_rows = stream.readUint32();
      this.num_bad_cols = stream.readUint32();
      this.num_bad_pixels = stream.readUint32();
      this.bad_rows = [];
      this.bad_columns = [];
      this.bad_pixels = [];
      for (let i = 0; i < this.num_bad_rows; i++) this.bad_rows.push(stream.readUint32());
      for (let i = 0; i < this.num_bad_cols; i++) this.bad_columns.push(stream.readUint32());
      for (let i = 0; i < this.num_bad_pixels; i++) {
        const row = stream.readUint32();
        const col = stream.readUint32();
        this.bad_pixels.push(new Pixel(row, col));
      }
    }
  };
  var schmBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SchemeTypeBox";
    }
    static {
      this.fourcc = "schm";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.scheme_type = stream.readString(4);
      this.scheme_version = stream.readUint32();
      if (this.flags & 1) this.scheme_uri = stream.readString(this.size - this.hdr_size - 8);
    }
  };
  var sdp_Box = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "rtptracksdphintinformation";
    }
    static {
      this.fourcc = "sdp ";
    }
    parse(stream) {
      this.sdptext = stream.readString(this.size - this.hdr_size);
    }
  };
  var sencBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SampleEncryptionBox";
    }
    static {
      this.fourcc = "senc";
    }
  };
  var SmDmBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SMPTE2086MasteringDisplayMetadataBox";
    }
    static {
      this.fourcc = "SmDm";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.primaryRChromaticity_x = stream.readUint16();
      this.primaryRChromaticity_y = stream.readUint16();
      this.primaryGChromaticity_x = stream.readUint16();
      this.primaryGChromaticity_y = stream.readUint16();
      this.primaryBChromaticity_x = stream.readUint16();
      this.primaryBChromaticity_y = stream.readUint16();
      this.whitePointChromaticity_x = stream.readUint16();
      this.whitePointChromaticity_y = stream.readUint16();
      this.luminanceMax = stream.readUint32();
      this.luminanceMin = stream.readUint32();
    }
  };
  var sratBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SamplingRateBox";
    }
    static {
      this.fourcc = "srat";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.sampling_rate = stream.readUint32();
    }
  };
  var stdpBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "DegradationPriorityBox";
    }
    static {
      this.fourcc = "stdp";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const count = (this.size - this.hdr_size) / 2;
      this.priority = [];
      for (let i = 0; i < count; i++) this.priority[i] = stream.readUint16();
    }
  };
  var striBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SubTrackInformationBox";
    }
    static {
      this.fourcc = "stri";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.switch_group = stream.readUint16();
      this.alternate_group = stream.readUint16();
      this.sub_track_id = stream.readUint32();
      const count = (this.size - this.hdr_size - 8) / 4;
      this.attribute_list = [];
      for (let i = 0; i < count; i++) this.attribute_list[i] = stream.readUint32();
    }
  };
  var stsgBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SubTrackSampleGroupBox";
    }
    static {
      this.fourcc = "stsg";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.grouping_type = stream.readUint32();
      const count = stream.readUint16();
      this.group_description_index = [];
      for (let i = 0; i < count; i++) this.group_description_index[i] = stream.readUint32();
    }
  };
  var stshBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "ShadowSyncSampleBox";
    }
    static {
      this.fourcc = "stsh";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.shadowed_sample_numbers = [];
      this.sync_sample_numbers = [];
      if (this.version === 0) for (let i = 0; i < entry_count; i++) {
        this.shadowed_sample_numbers.push(stream.readUint32());
        this.sync_sample_numbers.push(stream.readUint32());
      }
    }
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 8 * this.shadowed_sample_numbers.length;
      this.writeHeader(stream);
      stream.writeUint32(this.shadowed_sample_numbers.length);
      for (let i = 0; i < this.shadowed_sample_numbers.length; i++) {
        stream.writeUint32(this.shadowed_sample_numbers[i]);
        stream.writeUint32(this.sync_sample_numbers[i]);
      }
    }
  };
  var stssBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SyncSampleBox";
    }
    static {
      this.fourcc = "stss";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      if (this.version === 0) {
        this.sample_numbers = [];
        for (let i = 0; i < entry_count; i++) this.sample_numbers.push(stream.readUint32());
      }
    }
    /** @bundle writing/stss.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = 4 + 4 * this.sample_numbers.length;
      this.writeHeader(stream);
      stream.writeUint32(this.sample_numbers.length);
      stream.writeUint32Array(this.sample_numbers);
    }
  };
  var stviBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "StereoVideoBox";
    }
    static {
      this.fourcc = "stvi";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const tmp32 = stream.readUint32();
      this.single_view_allowed = tmp32 & 3;
      this.stereo_scheme = stream.readUint32();
      const length = stream.readUint32();
      this.stereo_indication_type = stream.readString(length);
      this.boxes = [];
      while (stream.getPosition() < this.start + this.size) {
        const ret = parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          const box = ret.box;
          this.boxes.push(box);
          this[box.type] = box;
        } else return;
      }
    }
  };
  var stz2Box = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "CompactSampleSizeBox";
    }
    static {
      this.fourcc = "stz2";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.sample_sizes = [];
      if (this.version === 0) {
        this.reserved = stream.readUint24();
        this.field_size = stream.readUint8();
        const sample_count = stream.readUint32();
        if (this.field_size === 4) for (let i = 0; i < sample_count; i += 2) {
          const tmp = stream.readUint8();
          this.sample_sizes[i] = tmp >> 4 & 15;
          this.sample_sizes[i + 1] = tmp & 15;
        }
        else if (this.field_size === 8) for (let i = 0; i < sample_count; i++) this.sample_sizes[i] = stream.readUint8();
        else if (this.field_size === 16) for (let i = 0; i < sample_count; i++) this.sample_sizes[i] = stream.readUint16();
        else Log.error("BoxParser", "Error in length field in stz2 box", stream.isofile);
      }
    }
  };
  var subsBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "SubSampleInformationBox";
    }
    static {
      this.fourcc = "subs";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const entry_count = stream.readUint32();
      this.entries = [];
      let subsample_count;
      for (let i = 0; i < entry_count; i++) {
        const sampleInfo = {};
        this.entries[i] = sampleInfo;
        sampleInfo.sample_delta = stream.readUint32();
        sampleInfo.subsamples = [];
        subsample_count = stream.readUint16();
        if (subsample_count > 0) for (let j = 0; j < subsample_count; j++) {
          const subsample = {};
          sampleInfo.subsamples.push(subsample);
          if (this.version === 1) subsample.size = stream.readUint32();
          else subsample.size = stream.readUint16();
          subsample.priority = stream.readUint8();
          subsample.discardable = stream.readUint8();
          subsample.codec_specific_parameters = stream.readUint32();
        }
      }
    }
  };
  var taicBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TAIClockInfoBox";
    }
    static {
      this.fourcc = "taic";
    }
    parse(stream) {
      this.time_uncertainty = stream.readUint64();
      this.clock_resolution = stream.readUint32();
      this.clock_drift_rate = stream.readInt32();
      const reserved_byte = stream.readUint8();
      this.clock_type = (reserved_byte & 192) >> 6;
    }
  };
  var tencBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackEncryptionBox";
    }
    static {
      this.fourcc = "tenc";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      stream.readUint8();
      if (this.version === 0) stream.readUint8();
      else {
        const tmp = stream.readUint8();
        this.default_crypt_byte_block = tmp >> 4 & 15;
        this.default_skip_byte_block = tmp & 15;
      }
      this.default_isProtected = stream.readUint8();
      this.default_Per_Sample_IV_Size = stream.readUint8();
      this.default_KID = parseHex16(stream);
      if (this.default_isProtected === 1 && this.default_Per_Sample_IV_Size === 0) {
        this.default_constant_IV_size = stream.readUint8();
        this.default_constant_IV = stream.readUint8Array(this.default_constant_IV_size);
      }
    }
  };
  var TfraEntry = class {
  };
  var tfraBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackFragmentRandomAccessBox";
    }
    static {
      this.fourcc = "tfra";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.track_ID = stream.readUint32();
      stream.readUint24();
      const tmp_byte = stream.readUint8();
      this.length_size_of_traf_num = tmp_byte >> 4 & 3;
      this.length_size_of_trun_num = tmp_byte >> 2 & 3;
      this.length_size_of_sample_num = tmp_byte & 3;
      this.entries = [];
      const number_of_entries = stream.readUint32();
      for (let i = 0; i < number_of_entries; i++) {
        const entry = new TfraEntry();
        if (this.version === 1) {
          entry.time = stream.readUint64();
          entry.moof_offset = stream.readUint64();
        } else {
          entry.time = stream.readUint32();
          entry.moof_offset = stream.readUint32();
        }
        entry.traf_number = stream["readUint" + 8 * (this.length_size_of_traf_num + 1)]();
        entry.trun_number = stream["readUint" + 8 * (this.length_size_of_trun_num + 1)]();
        entry.sample_delta = stream["readUint" + 8 * (this.length_size_of_sample_num + 1)]();
        this.entries.push(entry);
      }
    }
  };
  var tmaxBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintmaxrelativetime";
    }
    static {
      this.fourcc = "tmax";
    }
    parse(stream) {
      this.time = stream.readUint32();
    }
  };
  var tminBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintminrelativetime";
    }
    static {
      this.fourcc = "tmin";
    }
    parse(stream) {
      this.time = stream.readUint32();
    }
  };
  var totlBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintBytesSent";
    }
    static {
      this.fourcc = "totl";
    }
    parse(stream) {
      this.bytessent = stream.readUint32();
    }
  };
  var tpayBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintBytesSent";
    }
    static {
      this.fourcc = "tpay";
    }
    parse(stream) {
      this.bytessent = stream.readUint32();
    }
  };
  var tpylBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintBytesSent";
    }
    static {
      this.fourcc = "tpyl";
    }
    parse(stream) {
      this.bytessent = stream.readUint64();
    }
  };
  var msrcTrackGroupTypeBox = class extends TrackGroupTypeBox {
    static {
      this.fourcc = "msrc";
    }
  };
  var trefBox = class trefBox2 extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackReferenceBox";
      this.references = [];
    }
    static {
      this.fourcc = "tref";
    }
    static {
      this.allowed_types = [
        "hint",
        "cdsc",
        "font",
        "hind",
        "vdep",
        "vplx",
        "subt",
        "thmb",
        "auxl",
        "cdtg",
        "shsc",
        "aest"
      ];
    }
    parse(stream) {
      while (stream.getPosition() < this.start + this.size) {
        const ret = parseOneBox(stream, true, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          if (!trefBox2.allowed_types.includes(ret.type)) Log.warn("BoxParser", `Unknown track reference type: '${ret.type}'`);
          const box = new TrackReferenceTypeBox(ret.type, ret.size, ret.hdr_size, ret.start);
          if (box.write === Box.prototype.write && box.type !== "mdat") {
            Log.info("BoxParser", "TrackReference " + box.type + " box writing not yet implemented, keeping unparsed data in memory for later write");
            box.parseDataAndRewind(stream);
          }
          box.parse(stream);
          this.references.push(box);
        } else return;
      }
    }
  };
  var trepBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackExtensionPropertiesBox";
    }
    static {
      this.fourcc = "trep";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.track_ID = stream.readUint32();
      this.boxes = [];
      while (stream.getPosition() < this.start + this.size) {
        const ret = parseOneBox(stream, false, this.size - (stream.getPosition() - this.start));
        if (ret.code === 1) {
          const box = ret.box;
          this.boxes.push(box);
        } else return;
      }
    }
  };
  var trpyBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "hintBytesSent";
    }
    static {
      this.fourcc = "trpy";
    }
    parse(stream) {
      this.bytessent = stream.readUint64();
    }
  };
  var tselBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TrackSelectionBox";
    }
    static {
      this.fourcc = "tsel";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.switch_group = stream.readUint32();
      const count = (this.size - this.hdr_size - 4) / 4;
      this.attribute_list = [];
      for (let i = 0; i < count; i++) this.attribute_list[i] = stream.readUint32();
    }
  };
  var txtcBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TextConfigBox";
    }
    static {
      this.fourcc = "txtc";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.config = stream.readCString();
    }
  };
  var tycoBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "TypeCombinationBox";
    }
    static {
      this.fourcc = "tyco";
    }
    parse(stream) {
      const count = (this.size - this.hdr_size) / 4;
      this.compatible_brands = [];
      for (let i = 0; i < count; i++) this.compatible_brands[i] = stream.readString(4);
    }
  };
  var udesBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "UserDescriptionProperty";
    }
    static {
      this.fourcc = "udes";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.lang = stream.readCString();
      this.name = stream.readCString();
      this.description = stream.readCString();
      this.tags = stream.readCString();
    }
  };
  var uncCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "UncompressedFrameConfigBox";
    }
    static {
      this.fourcc = "uncC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.profile = stream.readString(4);
      if (this.version === 1) {
      } else if (this.version === 0) {
        this.component_count = stream.readUint32();
        this.component_index = [];
        this.component_bit_depth_minus_one = [];
        this.component_format = [];
        this.component_align_size = [];
        for (let i = 0; i < this.component_count; i++) {
          this.component_index.push(stream.readUint16());
          this.component_bit_depth_minus_one.push(stream.readUint8());
          this.component_format.push(stream.readUint8());
          this.component_align_size.push(stream.readUint8());
        }
        this.sampling_type = stream.readUint8();
        this.interleave_type = stream.readUint8();
        this.block_size = stream.readUint8();
        const flags = stream.readUint8();
        this.component_little_endian = flags >> 7 & 1;
        this.block_pad_lsb = flags >> 6 & 1;
        this.block_little_endian = flags >> 5 & 1;
        this.block_reversed = flags >> 4 & 1;
        this.pad_unknown = flags >> 3 & 1;
        this.pixel_size = stream.readUint32();
        this.row_align_size = stream.readUint32();
        this.tile_align_size = stream.readUint32();
        this.num_tile_cols_minus_one = stream.readUint32();
        this.num_tile_rows_minus_one = stream.readUint32();
      }
    }
  };
  var urnBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "DataEntryUrnBox";
    }
    static {
      this.fourcc = "urn ";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.name = stream.readCString();
      if (this.size - this.hdr_size - this.name.length - 1 > 0) this.location = stream.readCString();
    }
    /** @bundle writing/urn.js */
    write(stream) {
      this.version = 0;
      this.flags = 0;
      this.size = this.name.length + 1 + (this.location ? this.location.length + 1 : 0);
      this.writeHeader(stream);
      stream.writeCString(this.name);
      if (this.location) stream.writeCString(this.location);
    }
  };
  var vttCBox = class extends Box {
    constructor(..._args) {
      super(..._args);
      this.box_name = "WebVTTConfigurationBox";
    }
    static {
      this.fourcc = "vttC";
    }
    parse(stream) {
      this.text = stream.readString(this.size - this.hdr_size);
    }
  };
  var vvnCBox = class extends FullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "VvcNALUConfigBox";
    }
    static {
      this.fourcc = "vvnC";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      const tmp = stream.readUint8();
      this.lengthSizeMinusOne = tmp & 3;
    }
  };
  var alstSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "alst";
    }
    parse(stream) {
      const roll_count = stream.readUint16();
      this.first_output_sample = stream.readUint16();
      this.sample_offset = [];
      for (let i = 0; i < roll_count; i++) this.sample_offset[i] = stream.readUint32();
      const remaining = this.description_length - 4 - 4 * roll_count;
      this.num_output_samples = [];
      this.num_total_samples = [];
      for (let i = 0; i < remaining / 4; i++) {
        this.num_output_samples[i] = stream.readUint16();
        this.num_total_samples[i] = stream.readUint16();
      }
    }
  };
  var avllSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "avll";
    }
    parse(stream) {
      this.layerNumber = stream.readUint8();
      this.accurateStatisticsFlag = stream.readUint8();
      this.avgBitRate = stream.readUint16();
      this.avgFrameRate = stream.readUint16();
    }
  };
  var avssSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "avss";
    }
    parse(stream) {
      this.subSequenceIdentifier = stream.readUint16();
      this.layerNumber = stream.readUint8();
      const tmp_byte = stream.readUint8();
      this.durationFlag = tmp_byte >> 7;
      this.avgRateFlag = tmp_byte >> 6 & 1;
      if (this.durationFlag) this.duration = stream.readUint32();
      if (this.avgRateFlag) {
        this.accurateStatisticsFlag = stream.readUint8();
        this.avgBitRate = stream.readUint16();
        this.avgFrameRate = stream.readUint16();
      }
      this.dependency = [];
      const numReferences = stream.readUint8();
      for (let i = 0; i < numReferences; i++) this.dependency.push({
        subSeqDirectionFlag: stream.readUint8(),
        layerNumber: stream.readUint8(),
        subSequenceIdentifier: stream.readUint16()
      });
    }
  };
  var dtrtSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "dtrt";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var mvifSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "mvif";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var prolSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "prol";
    }
    parse(stream) {
      this.roll_distance = stream.readInt16();
    }
  };
  var rapSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "rap ";
    }
    parse(stream) {
      const tmp_byte = stream.readUint8();
      this.num_leading_samples_known = tmp_byte >> 7;
      this.num_leading_samples = tmp_byte & 127;
    }
  };
  var rashSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "rash";
    }
    parse(stream) {
      this.operation_point_count = stream.readUint16();
      if (this.description_length !== 2 + (this.operation_point_count === 1 ? 2 : this.operation_point_count * 6) + 9) {
        Log.warn("BoxParser", "Mismatch in " + this.grouping_type + " sample group length");
        this.data = stream.readUint8Array(this.description_length - 2);
      } else {
        if (this.operation_point_count === 1) this.target_rate_share = stream.readUint16();
        else {
          this.target_rate_share = [];
          this.available_bitrate = [];
          for (let i = 0; i < this.operation_point_count; i++) {
            this.available_bitrate[i] = stream.readUint32();
            this.target_rate_share[i] = stream.readUint16();
          }
        }
        this.maximum_bitrate = stream.readUint32();
        this.minimum_bitrate = stream.readUint32();
        this.discard_priority = stream.readUint8();
      }
    }
  };
  var rollSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "roll";
    }
    parse(stream) {
      this.roll_distance = stream.readInt16();
    }
  };
  var scifSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "scif";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var scnmSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "scnm";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var seigSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "seig";
    }
    parse(stream) {
      this.reserved = stream.readUint8();
      const tmp = stream.readUint8();
      this.crypt_byte_block = tmp >> 4;
      this.skip_byte_block = tmp & 15;
      this.isProtected = stream.readUint8();
      this.Per_Sample_IV_Size = stream.readUint8();
      this.KID = parseHex16(stream);
      this.constant_IV_size = 0;
      this.constant_IV = 0;
      if (this.isProtected === 1 && this.Per_Sample_IV_Size === 0) {
        this.constant_IV_size = stream.readUint8();
        this.constant_IV = stream.readUint8Array(this.constant_IV_size);
      }
    }
  };
  var stsaSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "stsa";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var syncSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "sync";
    }
    parse(stream) {
      const tmp_byte = stream.readUint8();
      this.NAL_unit_type = tmp_byte & 63;
    }
  };
  var teleSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "tele";
    }
    parse(stream) {
      const tmp_byte = stream.readUint8();
      this.level_independently_decodable = tmp_byte >> 7;
    }
  };
  var tsasSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "tsas";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var tsclSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "tscl";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var viprSampleGroupEntry = class extends SampleGroupEntry {
    static {
      this.grouping_type = "vipr";
    }
    parse(_stream) {
      Log.warn("BoxParser", "Sample Group type: " + this.grouping_type + " not fully parsed");
    }
  };
  var UUIDBox = class extends Box {
    static {
      this.fourcc = "uuid";
    }
  };
  var UUIDFullBox = class extends FullBox {
    static {
      this.fourcc = "uuid";
    }
  };
  var piffLsmBox = class extends UUIDFullBox {
    constructor(..._args) {
      super(..._args);
      this.box_name = "LiveServerManifestBox";
    }
    static {
      this.uuid = "a5d40b30e81411ddba2f0800200c9a66";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.LiveServerManifest = stream.readString(this.size - this.hdr_size).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;");
    }
  };
  var piffPsshBox = class extends UUIDFullBox {
    constructor(..._args2) {
      super(..._args2);
      this.box_name = "PiffProtectionSystemSpecificHeaderBox";
    }
    static {
      this.uuid = "d08a4f1810f34a82b6c832d8aba183d3";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.system_id = parseHex16(stream);
      const datasize = stream.readUint32();
      if (datasize > 0) this.data = stream.readUint8Array(datasize);
    }
  };
  var piffSencBox = class extends UUIDFullBox {
    constructor(..._args3) {
      super(..._args3);
      this.box_name = "PiffSampleEncryptionBox";
    }
    static {
      this.uuid = "a2394f525a9b4f14a2446c427c648df4";
    }
  };
  var piffTencBox = class extends UUIDFullBox {
    constructor(..._args4) {
      super(..._args4);
      this.box_name = "PiffTrackEncryptionBox";
    }
    static {
      this.uuid = "8974dbce7be74c5184f97148f9882554";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.default_AlgorithmID = stream.readUint24();
      this.default_IV_size = stream.readUint8();
      this.default_KID = parseHex16(stream);
    }
  };
  var piffTfrfBox = class extends UUIDFullBox {
    constructor(..._args5) {
      super(..._args5);
      this.box_name = "TfrfBox";
    }
    static {
      this.uuid = "d4807ef2ca3946958e5426cb9e46a79f";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      this.fragment_count = stream.readUint8();
      this.entries = [];
      for (let i = 0; i < this.fragment_count; i++) {
        let absolute_time = 0;
        let absolute_duration = 0;
        if (this.version === 1) {
          absolute_time = stream.readUint64();
          absolute_duration = stream.readUint64();
        } else {
          absolute_time = stream.readUint32();
          absolute_duration = stream.readUint32();
        }
        this.entries.push({
          absolute_time,
          absolute_duration
        });
      }
    }
  };
  var piffTfxdBox = class extends UUIDFullBox {
    constructor(..._args6) {
      super(..._args6);
      this.box_name = "TfxdBox";
    }
    static {
      this.uuid = "6d1d9b0542d544e680e2141daff757b2";
    }
    parse(stream) {
      this.parseFullHeader(stream);
      if (this.version === 1) {
        this.absolute_time = stream.readUint64();
        this.duration = stream.readUint64();
      } else {
        this.absolute_time = stream.readUint32();
        this.duration = stream.readUint32();
      }
    }
  };
  var ItemContentIDPropertyBox = class extends UUIDBox {
    constructor(..._args7) {
      super(..._args7);
      this.box_name = "ItemContentIDProperty";
    }
    static {
      this.uuid = "261ef3741d975bbaacbd9d2c8ea73522";
    }
    parse(stream) {
      this.content_id = stream.readCString();
    }
  };
  var ItemComponentContentIDPropertyBox = class extends UUIDBox {
    constructor(..._args8) {
      super(..._args8);
      this.box_name = "ItemComponentContentIDProperty";
    }
    static {
      this.uuid = "9db9dd6e373c5a4e811021fc83a911fd";
    }
    parse(stream) {
      this.number_of_components = stream.readUint32();
      this.content_ids = [];
      for (let i = 0; i < this.number_of_components; i++) {
        const content_id = stream.readCString();
        this.content_ids.push(content_id);
      }
    }
  };
  var all_boxes_exports = /* @__PURE__ */ __exportAll({
    CoLLBox: () => CoLLBox,
    ItemComponentContentIDPropertyBox: () => ItemComponentContentIDPropertyBox,
    ItemContentIDPropertyBox: () => ItemContentIDPropertyBox,
    OpusSampleEntry: () => OpusSampleEntry,
    SmDmBox: () => SmDmBox,
    a1lxBox: () => a1lxBox,
    a1opBox: () => a1opBox,
    ac_3SampleEntry: () => ac_3SampleEntry,
    ac_4SampleEntry: () => ac_4SampleEntry,
    aebrBox: () => aebrBox,
    afbrBox: () => afbrBox,
    albcBox: () => albcBox,
    alstSampleGroupEntry: () => alstSampleGroupEntry,
    altrBox: () => altrBox,
    auxCBox: () => auxCBox,
    av01SampleEntry: () => av01SampleEntry,
    av1CBox: () => av1CBox,
    avc1SampleEntry: () => avc1SampleEntry,
    avc2SampleEntry: () => avc2SampleEntry,
    avc3SampleEntry: () => avc3SampleEntry,
    avc4SampleEntry: () => avc4SampleEntry,
    avcCBox: () => avcCBox,
    avllSampleGroupEntry: () => avllSampleGroupEntry,
    avs3SampleEntry: () => avs3SampleEntry,
    avssSampleGroupEntry: () => avssSampleGroupEntry,
    brstBox: () => brstBox,
    btrtBox: () => btrtBox,
    bxmlBox: () => bxmlBox,
    ccstBox: () => ccstBox,
    cdefBox: () => cdefBox,
    clapBox: () => clapBox,
    clefBox: () => clefBox,
    clliBox: () => clliBox,
    cmexBox: () => cmexBox,
    cminBox: () => cminBox,
    cmpCBox: () => cmpCBox,
    cmpdBox: () => cmpdBox,
    co64Box: () => co64Box,
    colrBox: () => colrBox,
    coviBox: () => coviBox,
    cprtBox: () => cprtBox,
    cschBox: () => cschBox,
    cslgBox: () => cslgBox,
    cttsBox: () => cttsBox,
    dOpsBox: () => dOpsBox,
    dac3Box: () => dac3Box,
    dataBox: () => dataBox,
    dav1SampleEntry: () => dav1SampleEntry,
    dec3Box: () => dec3Box,
    dfLaBox: () => dfLaBox,
    dimmBox: () => dimmBox,
    dinfBox: () => dinfBox,
    dmax: () => dmax,
    dmedBox: () => dmedBox,
    dobrBox: () => dobrBox,
    drefBox: () => drefBox,
    drepBox: () => drepBox,
    dtrtSampleGroupEntry: () => dtrtSampleGroupEntry,
    dvh1SampleEntry: () => dvh1SampleEntry,
    dvheSampleEntry: () => dvheSampleEntry,
    ec_3SampleEntry: () => ec_3SampleEntry,
    edtsBox: () => edtsBox,
    elngBox: () => elngBox,
    elstBox: () => elstBox,
    emsgBox: () => emsgBox,
    encaSampleEntry: () => encaSampleEntry,
    encmSampleEntry: () => encmSampleEntry,
    encsSampleEntry: () => encsSampleEntry,
    enctSampleEntry: () => enctSampleEntry,
    encuSampleEntry: () => encuSampleEntry,
    encvSampleEntry: () => encvSampleEntry,
    enofBox: () => enofBox,
    eqivBox: () => eqivBox,
    esdsBox: () => esdsBox,
    etypBox: () => etypBox,
    fLaCSampleEntry: () => fLaCSampleEntry,
    favcBox: () => favcBox,
    fielBox: () => fielBox,
    fobrBox: () => fobrBox,
    freeBox: () => freeBox,
    frmaBox: () => frmaBox,
    ftypBox: () => ftypBox,
    grplBox: () => grplBox,
    hdlrBox: () => hdlrBox,
    hev1SampleEntry: () => hev1SampleEntry,
    hev2SampleEntry: () => hev2SampleEntry,
    hinfBox: () => hinfBox,
    hmhdBox: () => hmhdBox,
    hntiBox: () => hntiBox,
    hvc1SampleEntry: () => hvc1SampleEntry,
    hvc2SampleEntry: () => hvc2SampleEntry,
    hvcCBox: () => hvcCBox,
    hvt1SampleEntry: () => hvt1SampleEntry,
    iaugBox: () => iaugBox,
    idatBox: () => idatBox,
    iinfBox: () => iinfBox,
    ilocBox: () => ilocBox,
    ilstBox: () => ilstBox,
    imirBox: () => imirBox,
    infeBox: () => infeBox,
    iodsBox: () => iodsBox,
    ipcoBox: () => ipcoBox,
    ipmaBox: () => ipmaBox,
    iproBox: () => iproBox,
    iprpBox: () => iprpBox,
    irefBox: () => irefBox,
    irotBox: () => irotBox,
    ispeBox: () => ispeBox,
    itaiBox: () => itaiBox,
    j2kHBox: () => j2kHBox,
    j2kiSampleEntry: () => j2kiSampleEntry,
    keysBox: () => keysBox,
    kindBox: () => kindBox,
    levaBox: () => levaBox,
    lhe1SampleEntry: () => lhe1SampleEntry,
    lhv1SampleEntry: () => lhv1SampleEntry,
    lhvCBox: () => lhvCBox,
    lselBox: () => lselBox,
    lvc1SampleEntry: () => lvc1SampleEntry,
    lvcCBox: () => lvcCBox,
    m4aeSampleEntry: () => m4aeSampleEntry,
    maxrBox: () => maxrBox,
    mdatBox: () => mdatBox,
    mdcvBox: () => mdcvBox,
    mdhdBox: () => mdhdBox,
    mdiaBox: () => mdiaBox,
    mecoBox: () => mecoBox,
    mehdBox: () => mehdBox,
    metaBox: () => metaBox,
    mettSampleEntry: () => mettSampleEntry,
    metxSampleEntry: () => metxSampleEntry,
    mfhdBox: () => mfhdBox,
    mfraBox: () => mfraBox,
    mfroBox: () => mfroBox,
    mha1SampleEntry: () => mha1SampleEntry,
    mha2SampleEntry: () => mha2SampleEntry,
    mhm1SampleEntry: () => mhm1SampleEntry,
    mhm2SampleEntry: () => mhm2SampleEntry,
    minfBox: () => minfBox,
    mjp2SampleEntry: () => mjp2SampleEntry,
    mjpgSampleEntry: () => mjpgSampleEntry,
    moofBox: () => moofBox,
    moovBox: () => moovBox,
    mp4aSampleEntry: () => mp4aSampleEntry,
    mp4sSampleEntry: () => mp4sSampleEntry,
    mp4vSampleEntry: () => mp4vSampleEntry,
    mskCBox: () => mskCBox,
    msrcTrackGroupTypeBox: () => msrcTrackGroupTypeBox,
    mvexBox: () => mvexBox,
    mvhdBox: () => mvhdBox,
    mvifSampleGroupEntry: () => mvifSampleGroupEntry,
    nmhdBox: () => nmhdBox,
    npckBox: () => npckBox,
    numpBox: () => numpBox,
    padbBox: () => padbBox,
    panoBox: () => panoBox,
    paspBox: () => paspBox,
    paylBox: () => paylBox,
    paytBox: () => paytBox,
    pdinBox: () => pdinBox,
    piffLsmBox: () => piffLsmBox,
    piffPsshBox: () => piffPsshBox,
    piffSencBox: () => piffSencBox,
    piffTencBox: () => piffTencBox,
    piffTfrfBox: () => piffTfrfBox,
    piffTfxdBox: () => piffTfxdBox,
    pitmBox: () => pitmBox,
    pixiBox: () => pixiBox,
    pmaxBox: () => pmaxBox,
    povdBox: () => povdBox,
    prdiBox: () => prdiBox,
    prfrBox: () => prfrBox,
    prftBox: () => prftBox,
    prgrBox: () => prgrBox,
    profBox: () => profBox,
    prolSampleGroupEntry: () => prolSampleGroupEntry,
    psshBox: () => psshBox,
    pymdBox: () => pymdBox,
    rapSampleGroupEntry: () => rapSampleGroupEntry,
    rashSampleGroupEntry: () => rashSampleGroupEntry,
    resvSampleEntry: () => resvSampleEntry,
    rinfBox: () => rinfBox,
    rollSampleGroupEntry: () => rollSampleGroupEntry,
    rtp_Box: () => rtp_Box,
    saioBox: () => saioBox,
    saizBox: () => saizBox,
    sbgpBox: () => sbgpBox,
    sbpmBox: () => sbpmBox,
    sbttSampleEntry: () => sbttSampleEntry,
    schiBox: () => schiBox,
    schmBox: () => schmBox,
    scifSampleGroupEntry: () => scifSampleGroupEntry,
    scnmSampleGroupEntry: () => scnmSampleGroupEntry,
    sdp_Box: () => sdp_Box,
    sdtpBox: () => sdtpBox,
    seigSampleGroupEntry: () => seigSampleGroupEntry,
    sencBox: () => sencBox,
    sgpdBox: () => sgpdBox,
    sidxBox: () => sidxBox,
    sinfBox: () => sinfBox,
    skipBox: () => skipBox,
    slidBox: () => slidBox,
    smhdBox: () => smhdBox,
    sratBox: () => sratBox,
    ssixBox: () => ssixBox,
    stblBox: () => stblBox,
    stcoBox: () => stcoBox,
    stdpBox: () => stdpBox,
    sterBox: () => sterBox,
    sthdBox: () => sthdBox,
    stppSampleEntry: () => stppSampleEntry,
    strdBox: () => strdBox,
    striBox: () => striBox,
    strkBox: () => strkBox,
    stsaSampleGroupEntry: () => stsaSampleGroupEntry,
    stscBox: () => stscBox,
    stsdBox: () => stsdBox,
    stsgBox: () => stsgBox,
    stshBox: () => stshBox,
    stssBox: () => stssBox,
    stszBox: () => stszBox,
    sttsBox: () => sttsBox,
    stviBox: () => stviBox,
    stxtSampleEntry: () => stxtSampleEntry,
    stypBox: () => stypBox,
    stz2Box: () => stz2Box,
    subsBox: () => subsBox,
    syncSampleGroupEntry: () => syncSampleGroupEntry,
    taicBox: () => taicBox,
    taptBox: () => taptBox,
    teleSampleGroupEntry: () => teleSampleGroupEntry,
    tencBox: () => tencBox,
    tfdtBox: () => tfdtBox,
    tfhdBox: () => tfhdBox,
    tfraBox: () => tfraBox,
    tkhdBox: () => tkhdBox,
    tmaxBox: () => tmaxBox,
    tminBox: () => tminBox,
    totlBox: () => totlBox,
    tpayBox: () => tpayBox,
    tpylBox: () => tpylBox,
    trafBox: () => trafBox,
    trakBox: () => trakBox,
    trefBox: () => trefBox,
    trepBox: () => trepBox,
    trexBox: () => trexBox,
    trgrBox: () => trgrBox,
    trpyBox: () => trpyBox,
    trunBox: () => trunBox,
    tsasSampleGroupEntry: () => tsasSampleGroupEntry,
    tsclSampleGroupEntry: () => tsclSampleGroupEntry,
    tselBox: () => tselBox,
    tsynBox: () => tsynBox,
    tx3gSampleEntry: () => tx3gSampleEntry,
    txtcBox: () => txtcBox,
    tycoBox: () => tycoBox,
    udesBox: () => udesBox,
    udtaBox: () => udtaBox,
    uncCBox: () => uncCBox,
    uncvSampleEntry: () => uncvSampleEntry,
    urlBox: () => urlBox,
    urnBox: () => urnBox,
    viprSampleGroupEntry: () => viprSampleGroupEntry,
    vmhdBox: () => vmhdBox,
    vp08SampleEntry: () => vp08SampleEntry,
    vp09SampleEntry: () => vp09SampleEntry,
    vpcCBox: () => vpcCBox,
    vttCBox: () => vttCBox,
    vttcBox: () => vttcBox,
    vvc1SampleEntry: () => vvc1SampleEntry,
    vvcCBox: () => vvcCBox,
    vvcNSampleEntry: () => vvcNSampleEntry,
    vvi1SampleEntry: () => vvi1SampleEntry,
    vvnCBox: () => vvnCBox,
    vvs1SampleEntry: () => vvs1SampleEntry,
    waveBox: () => waveBox,
    wbbrBox: () => wbbrBox,
    wvttSampleEntry: () => wvttSampleEntry,
    xmlBox: () => xmlBox
  });
  var BoxParser = registerBoxes(all_boxes_exports);
  registerDescriptors(descriptor_exports);

  // js/video.js
  var UPSCALE_THRESH = 1e3;
  var UPSCALE_FACTOR = 2;
  var MAX_WIDTH_RATIO = 0.97;
  var INVALID_VAL = -1;
  var video;
  var loadedFile = null;
  var videoInfo = null;
  var videoSamples = [];
  var isLoaded = false;
  var isMetadataLoaded = false;
  var isMp4BoxLoaded = false;
  var videoFps = INVALID_VAL;
  var frameCount = INVALID_VAL;
  var lastNotifiedFrame = INVALID_VAL;
  var currentFrame = INVALID_VAL;
  var frameTimes = [];
  var videoTimescale = INVALID_VAL;
  var onFrameChangedCallback = null;
  var onLoadedCallback = null;
  var onEndedCallback = null;
  var onLoadStartedCallback = null;
  function init() {
    video = document.getElementById("video");
    video.addEventListener("loadedmetadata", onMetadataLoaded);
    video.addEventListener("timeupdate", onTimeUpdate);
    video.addEventListener("ended", onEnded);
  }
  function loadVideo(file) {
    if (isLoaded) {
      URL.revokeObjectURL(video.src);
    }
    isLoaded = false;
    isMetadataLoaded = false;
    isMp4BoxLoaded = false;
    currentFrame = 0;
    lastNotifiedFrame = INVALID_VAL;
    onLoadStartedCallback?.();
    const url = URL.createObjectURL(file);
    video.src = url;
    video.load();
    loadedFile = file;
    const mp4boxFile = createFile();
    mp4boxFile.onReady = (info) => {
      videoInfo = info;
      const track = info.videoTracks[0];
      const fps = track.nb_samples * track.timescale / track.duration;
      videoTimescale = track.timescale;
      mp4boxFile.setExtractionOptions(track.id, null, { nbSamples: Infinity });
      mp4boxFile.start();
      videoFps = fps;
    };
    mp4boxFile.onSamples = (id, user, samples) => {
      frameTimes.push(0);
      for (const sample of samples) {
        frameTimes.push(sample.cts / videoTimescale);
      }
      videoSamples = [...samples];
      frameTimes.sort((a, b) => a - b);
      frameTimes[frameTimes.length - 1] = video.duration;
      frameCount = frameTimes.length;
      isMp4BoxLoaded = true;
      finishLoadingIfReady();
    };
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target) return;
      const buffer = (
        /** @type {ArrayBuffer & {fileStart: number}} */
        e.target.result
      );
      buffer.fileStart = 0;
      mp4boxFile.appendBuffer(buffer);
      mp4boxFile.flush();
    };
    reader.readAsArrayBuffer(file);
  }
  function onEnded() {
    onEndedCallback?.();
  }
  function onMetadataLoaded() {
    isMetadataLoaded = true;
    finishLoadingIfReady();
  }
  function finishLoadingIfReady() {
    if (!isMetadataLoaded || !isMp4BoxLoaded) return;
    adjustVideoSize();
    isLoaded = true;
    onLoadedCallback?.();
  }
  function notifyFrameChanged() {
    if (!onFrameChangedCallback) return;
    const frame = getCurrentFrame();
    if (frame === lastNotifiedFrame) return;
    lastNotifiedFrame = frame;
    onFrameChangedCallback(frame);
  }
  function onTimeUpdate() {
    notifyFrameChanged();
  }
  function setCurrentFrame(frame) {
    currentFrame = frame;
    video.currentTime = frameToTime(frame);
    notifyFrameChanged();
  }
  function setOnLoaded(callback) {
    onLoadedCallback = callback;
  }
  function setOnEnded(callback) {
    onEndedCallback = callback;
  }
  function setOnLoadStarted(callback) {
    onLoadStartedCallback = callback;
  }
  function setOnFrameChanged(callback) {
    onFrameChangedCallback = callback;
  }
  function frameToTime(frame) {
    return frameTimes[frame];
  }
  function timeToFrame(timeSecs) {
    const EPSILON = 1e-5;
    let frame = 0;
    while (frame + 1 < frameTimes.length && frameTimes[frame + 1] <= timeSecs + EPSILON) frame++;
    return frame;
  }
  function getCurrentFrame() {
    return timeToFrame(video.currentTime);
  }
  function playVideo() {
    if (!isLoaded) return;
    video.play();
  }
  function pauseVideo() {
    if (!isLoaded) return;
    setCurrentFrame(timeToFrame(video.currentTime));
    video.pause();
  }
  function seekToFrame(frame) {
    setCurrentFrame(frame);
  }
  function seekToTime(timeSecs) {
    video.currentTime = timeSecs;
    currentFrame = timeToFrame(timeSecs);
    notifyFrameChanged();
  }
  function nextFrame() {
    if (currentFrame >= frameCount - 1) return false;
    if (!video.paused) pauseVideo();
    setCurrentFrame(currentFrame + 1);
    return true;
  }
  function previousFrame() {
    if (currentFrame <= 0) return false;
    if (!video.paused) pauseVideo();
    setCurrentFrame(currentFrame - 1);
    return true;
  }
  function getFps() {
    if (videoFps === -1) throw new Error("No video loaded");
    return videoFps;
  }
  function adjustVideoSize() {
    let displayWidth = video.videoWidth;
    let displayHeight = video.videoHeight;
    if (displayWidth < UPSCALE_THRESH) {
      displayWidth *= UPSCALE_FACTOR;
      displayHeight *= UPSCALE_FACTOR;
    }
    const maxWidth = window.innerWidth * MAX_WIDTH_RATIO;
    if (displayWidth > maxWidth) {
      const scale = Math.floor(maxWidth / displayWidth * 100) / 100;
      displayWidth *= scale;
      displayHeight *= scale;
    }
    video.style.width = displayWidth + "px";
    video.style.height = displayHeight + "px";
  }
  function getVideoSize() {
    return {
      width: video.clientWidth,
      height: video.clientHeight
    };
  }
  function isVideoLoaded() {
    return isLoaded;
  }
  function isVideoPlaying() {
    return !video.paused;
  }
  function setVolume(volume) {
    video.volume = volume;
  }
  function getFrameCount() {
    return frameCount;
  }
  function getVideoFile() {
    if (!isLoaded) return null;
    return loadedFile;
  }
  function getMp4Info() {
    return videoInfo;
  }
  function getVideoSamples() {
    return videoSamples;
  }
  var video_default = {
    loadVideo,
    getCurrentFrame,
    init,
    setOnEnded,
    setOnLoaded,
    getFps,
    previousFrame,
    nextFrame,
    getVideoSize,
    isVideoLoaded,
    isVideoPlaying,
    playVideo,
    pauseVideo,
    seekToFrame,
    seekToTime,
    setVolume,
    setOnFrameChanged,
    getFrameCount,
    setOnLoadStarted,
    getVideoFile,
    getMp4Info,
    getVideoSamples
  };

  // js/canvas.js
  var canvas;
  var ctx;
  var canDraw = false;
  var drawing = false;
  var currentStroke = null;
  var color = "#000000";
  var canvasWidth = 0;
  var canvasHeight = 0;
  var LINE_WIDTH = 3;
  var LINE_CAP = "round";
  var onDrawingsChangedCallback = null;
  function init2() {
    canvas = document.getElementById("canvas");
    ctx = canvas.getContext("2d");
    applyCanvasStyle();
    canvas.addEventListener("mousedown", startDraw);
    canvas.addEventListener("mouseup", endDraw);
    canvas.addEventListener("mouseout", endDraw);
    canvas.addEventListener("mousemove", draw);
  }
  function pointToPixels(point) {
    return [point[0] * canvasWidth, point[1] * canvasHeight];
  }
  function setOnDrawingsChanged(callback) {
    onDrawingsChangedCallback = callback;
  }
  function onDrawingsChanged() {
    onDrawingsChangedCallback?.();
  }
  function pixelsToPoint(x, y) {
    return [x / canvasWidth, y / canvasHeight];
  }
  function applyCanvasStyle() {
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    ctx.strokeStyle = color;
  }
  function undoStroke() {
    const currentFrame2 = video_default.getCurrentFrame();
    annotations_default.removeLastAnnotation(currentFrame2);
    redrawFrameCanvas(currentFrame2);
  }
  function deleteCanvas() {
    const currentFrame2 = video_default.getCurrentFrame();
    annotations_default.removeFrameAnnotations(currentFrame2);
    redrawFrameCanvas(currentFrame2);
  }
  function redrawFrameCanvas(frame) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const drawings = annotations_default.getFrameAnnotations(frame);
    for (const drawing2 of drawings) {
      switch (drawing2.type) {
        case "stroke":
          drawStroke(drawing2);
          break;
        case "clear":
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          break;
        case "text":
          console.log("text");
          break;
        default:
          break;
      }
    }
    onDrawingsChanged();
    ctx.beginPath();
  }
  function drawStroke(stroke) {
    ctx.strokeStyle = stroke.color;
    ctx.lineWidth = LINE_WIDTH;
    ctx.lineCap = LINE_CAP;
    ctx.beginPath();
    for (let i = 0; i < stroke.points.length; i++) {
      const p = pointToPixels(stroke.points[i]);
      if (i === 0) {
        ctx.moveTo(p[0], p[1]);
      } else {
        ctx.lineTo(p[0], p[1]);
        ctx.stroke();
      }
    }
    applyCanvasStyle();
  }
  function getCanvasPosition(e) {
    const rect = canvas.getBoundingClientRect();
    return [e.clientX - rect.left, e.clientY - rect.top];
  }
  function startDraw(e) {
    if (!canDraw) return;
    drawing = true;
    currentStroke = {
      type: "stroke",
      color,
      points: []
    };
    ctx.beginPath();
    const [x, y] = getCanvasPosition(e);
    ctx.moveTo(x, y);
    draw(e);
  }
  function draw(e) {
    if (!canDraw || !drawing) return;
    const [x, y] = getCanvasPosition(e);
    if (!currentStroke) return;
    currentStroke.points.push(pixelsToPoint(x, y));
    ctx.lineTo(x, y);
    ctx.stroke();
  }
  function endDraw() {
    drawing = false;
    if (currentStroke) {
      const currentFrame2 = video_default.getCurrentFrame();
      annotations_default.addFrameAnnotation(currentFrame2, currentStroke);
    }
    currentStroke = null;
    ctx.closePath();
    onDrawingsChanged();
  }
  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const currentFrame2 = video_default.getCurrentFrame();
    annotations_default.addFrameAnnotation(currentFrame2, { type: "clear" });
  }
  function setCanDraw(value) {
    canDraw = value;
  }
  function setColor(newColor) {
    color = newColor;
    ctx.strokeStyle = color;
  }
  function setCanvasSize(size) {
    canvas.width = size.width;
    canvas.height = size.height;
    canvas.style.width = size.width + "px";
    canvas.style.height = size.height + "px";
    canvasWidth = size.width;
    canvasHeight = size.height;
    applyCanvasStyle();
  }
  var canvas_default = {
    init: init2,
    clearCanvas,
    setColor,
    setCanDraw,
    redrawFrameCanvas,
    setCanvasSize,
    undoStroke,
    setOnDrawingsChanged,
    deleteCanvas
  };

  // js/playbackControls.js
  var VOLUME_SLIDER_MAX = 1e3;
  var VOLUME_STEP = 20;
  var playPauseBtn;
  var seekerSlider;
  var volumeSlider;
  var prevFrameBtn;
  var nextFrameBtn;
  function init3() {
    playPauseBtn = document.getElementById("playPause");
    seekerSlider = document.getElementById("seeker");
    volumeSlider = document.getElementById("volumeSlider");
    prevFrameBtn = document.getElementById("prevFrame");
    nextFrameBtn = document.getElementById("nextFrame");
    seekerSlider.addEventListener("keydown", (e) => {
      if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown"].includes(e.key)) {
        e.preventDefault();
      }
    });
    const preventButtons = [playPauseBtn, prevFrameBtn, nextFrameBtn];
    for (const button of preventButtons) {
      button.addEventListener("keydown", (e) => {
        if (["Space"].includes(e.code)) {
          e.preventDefault();
        }
      });
    }
    prevFrameBtn.addEventListener("click", onPrevBtnClick);
    nextFrameBtn.addEventListener("click", onNextBtnClick);
    playPauseBtn.addEventListener("click", onPlayBtnClick);
    seekerSlider.addEventListener("input", onSeekerSliderInput);
    volumeSlider.addEventListener("input", onVolumeSliderInput);
  }
  function onSeekerSliderInput() {
    if (!video_default.isVideoLoaded()) return;
    video_default.seekToFrame(seekerSlider.valueAsNumber);
  }
  function onVolumeSliderInput() {
    if (!video_default.isVideoLoaded()) return;
    applyVolume();
  }
  function applyVolume() {
    video_default.setVolume(volumeSlider.valueAsNumber / VOLUME_SLIDER_MAX);
  }
  function increaseVolume() {
    volumeSlider.valueAsNumber = Math.min(volumeSlider.valueAsNumber + VOLUME_STEP, VOLUME_SLIDER_MAX);
    applyVolume();
  }
  function decreaseVolume() {
    volumeSlider.valueAsNumber = Math.max(volumeSlider.valueAsNumber - VOLUME_STEP, 0);
    applyVolume();
  }
  function onNextBtnClick() {
    video_default.nextFrame();
  }
  function onPrevBtnClick() {
    video_default.previousFrame();
  }
  function onPlayBtnClick() {
    if (!video_default.isVideoLoaded()) return;
    if (video_default.isVideoPlaying()) {
      video_default.pauseVideo();
      setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
    } else {
      video_default.playVideo();
      setPlayPauseBtnContent(PLAYBACK_BUTTON.PAUSE);
    }
  }
  function setSeekerValue(value) {
    seekerSlider.valueAsNumber = value;
  }
  function setPlayPauseBtnContent(value) {
    playPauseBtn.textContent = value;
  }
  function setSeekerMaximum(value) {
    seekerSlider.max = String(value);
  }
  var playbackControls_default = { init: init3, setSeekerValue, setPlayPauseBtnContent, setSeekerMaximum, increaseVolume, decreaseVolume };

  // js/canvasControls.js
  var colorInput;
  var clearBtn;
  var deleteBtn;
  var brushBtn;
  var textBtn;
  var colorBtn;
  var colorPreview;
  function init4() {
    colorInput = document.getElementById("colorPicker");
    clearBtn = document.getElementById("clearCanvasBtn");
    colorBtn = document.getElementById("colorBtn");
    colorPreview = document.getElementById("colorPreview");
    deleteBtn = document.getElementById("deleteCanvasBtn");
    brushBtn = document.getElementById("brushBtn");
    textBtn = document.getElementById("textBtn");
    colorInput.addEventListener("input", onColorInputChange);
    clearBtn.addEventListener("click", onClearBtnClick);
    colorBtn.addEventListener("click", onColorBtnClick);
    deleteBtn.addEventListener("click", onDeleteBtnClick);
  }
  function onDeleteBtnClick() {
    canvas_default.deleteCanvas();
  }
  function onColorBtnClick() {
    colorInput.click();
  }
  function onClearBtnClick() {
    canvas_default.clearCanvas();
  }
  function onColorInputChange() {
    canvas_default.setColor(colorInput.value);
    colorPreview.style.backgroundColor = colorInput.value;
  }
  var canvasControls_default = { init: init4 };

  // js/project.js
  var import_jszip = __toESM(require_jszip_min());

  // js/constants.js
  var FILE_EXTENSION = ".vsie";

  // js/project.js
  async function saveProject() {
    if (!video_default.isVideoLoaded()) return;
    const zip = new import_jszip.default();
    zip.file("video.mp4", video_default.getVideoFile());
    zip.file("annotations.json", JSON.stringify(annotations_default.exportAnnotations()));
    const blob = await zip.generateAsync({ type: "blob" });
    const url = URL.createObjectURL(blob);
    const handle = await window.showSaveFilePicker({
      suggestedName: "project" + FILE_EXTENSION,
      types: [
        {
          description: "Vestige Project",
          accept: {
            "application/x-myproject": [FILE_EXTENSION]
          }
        }
      ]
    });
    const writable = await handle.createWritable();
    await writable.write(blob);
    await writable.close();
  }
  async function loadProject(file) {
    const zip = await import_jszip.default.loadAsync(file);
    const videoBlob = await zip.file("video.mp4")?.async("blob");
    const annotationsJson = await zip.file("annotations.json")?.async("string");
    if (!videoBlob || !annotationsJson) {
      alert("Invalid project file");
      return;
    }
    ;
    const videoFile = new File(
      [videoBlob],
      "video.mp4",
      { type: "video/mp4" }
    );
    annotations_default.importAnnotations(JSON.parse(annotationsJson));
    video_default.loadVideo(videoFile);
  }
  var project_default = { saveProject, loadProject };

  // js/burning.js
  async function burnVideo() {
    if (!video_default.isVideoLoaded()) return;
    const file = video_default.getVideoFile();
    const videoInfo2 = video_default.getMp4Info();
    if (!file || !videoInfo2) {
      console.log("Video file or info not loaded!");
      return;
    }
    const decoder = new VideoDecoder({
      output: (frame) => {
        console.log(frame);
        frame.close();
      },
      error: (err) => {
        console.error(err);
      }
    });
    const videoTrack = videoInfo2.videoTracks[0];
    decoder.configure({
      codec: videoTrack.codec
    });
    decodeChunks(decoder);
    await decoder.flush();
    decoder.close();
  }
  function decodeChunks(decoder) {
    const samples = video_default.getVideoSamples();
    for (const sample of samples) {
      if (!sample.data) continue;
      let frame = new EncodedVideoChunk({
        type: sample.is_sync ? "key" : "delta",
        timestamp: sample.cts,
        data: sample.data
      });
      decoder.decode(frame);
    }
  }
  var burning_default = { burnVideo };

  // js/fileControls.js
  var fileInput;
  var fileInputBtn;
  var exportBtn;
  var vsieBtn;
  var mp4Btn;
  var fileDropdown;
  var fileOptions;
  var dropdownTimeout = null;
  function init5() {
    fileInput = document.getElementById("videoInput");
    fileInputBtn = document.getElementById("videoInputBtn");
    exportBtn = document.getElementById("exportBtn");
    vsieBtn = document.getElementById("vsieBtn");
    mp4Btn = document.getElementById("mp4Btn");
    fileDropdown = document.getElementById("dropdown");
    fileOptions = document.getElementById("dropdownContent");
    const preventBtns = [vsieBtn, mp4Btn, exportBtn, fileInputBtn];
    for (const button of preventBtns) {
      button.addEventListener("keydown", (e) => {
        if (["Space"].includes(e.code)) {
          e.preventDefault();
        }
      });
    }
    fileInput.addEventListener("change", onFileInput);
    fileInputBtn.addEventListener("click", onFileInputBtnClick);
    vsieBtn.addEventListener("click", onVsieBtnClick);
    mp4Btn.addEventListener("click", onMp4BtnClick);
    fileDropdown.addEventListener("mouseenter", onDropdownEnter);
    fileDropdown.addEventListener("mouseleave", onDropdownLeave);
  }
  function onDropdownEnter() {
    fileOptions.classList.add("open");
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      dropdownTimeout = null;
    }
  }
  function onDropdownLeave() {
    dropdownTimeout = setTimeout(() => {
      fileOptions.classList.remove("open");
    }, 100);
  }
  function onFileInputBtnClick() {
    fileInput.click();
  }
  function onFileInput() {
    if (!fileInput.files) {
      alert("Please select a file");
      return;
    }
    ;
    const file = fileInput.files[0];
    if (!file) return;
    if (file.name.endsWith(FILE_EXTENSION)) {
      project_default.loadProject(file).catch((err) => console.error(err));
    } else {
      video_default.loadVideo(file);
    }
  }
  function onVsieBtnClick() {
    project_default.saveProject().then(() => {
      console.log("Project saved");
    }).catch((err) => console.error(err));
  }
  function onMp4BtnClick() {
    console.log("burn in the video");
    burning_default.burnVideo().then(() => {
      console.log("burned");
    }).catch((err) => console.error(err));
  }
  var fileControls_default = { init: init5 };

  // js/markers.js
  var canvas2;
  var ctx2;
  var LINE_WIDTH2 = 1;
  var LINE_CAP2 = "round";
  function init6() {
    canvas2 = document.getElementById("markers");
    ctx2 = canvas2.getContext("2d");
    applyCanvasStyle2();
  }
  function applyCanvasStyle2() {
    ctx2.lineWidth = LINE_WIDTH2;
    ctx2.lineCap = LINE_CAP2;
    ctx2.strokeStyle = "#FCFF6C";
  }
  function drawMarker(frame, frameCount2) {
    const x = Math.round(frame / (frameCount2 - 1) * canvas2.width);
    ctx2.fillRect(x, 0, 2, canvas2.height);
  }
  function redraw(frames, frameCount2) {
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    for (const frame of frames) {
      const x = Math.round(frame / (frameCount2 - 1) * (canvas2.width - 1));
      ctx2.beginPath();
      ctx2.moveTo(x + 0.5, 0);
      ctx2.lineTo(x + 0.5, canvas2.height);
      ctx2.stroke();
    }
  }
  function setCanvasSize2(size) {
    canvas2.width = size.width;
    applyCanvasStyle2();
  }
  var markers_default = { init: init6, redraw, drawMarker, setCanvasSize: setCanvasSize2 };

  // js/app.js
  init7();
  function init7() {
    video_default.init();
    canvas_default.init();
    playbackControls_default.init();
    canvasControls_default.init();
    fileControls_default.init();
    markers_default.init();
    video_default.setOnLoaded(onVideoLoad);
    video_default.setOnFrameChanged(onFrameChange);
    video_default.setOnEnded(onVideoEnd);
    video_default.setOnLoadStarted(onVideoLoadingStarted);
    document.addEventListener("keydown", onKeyDown);
    canvas_default.setOnDrawingsChanged(onDrawingsChanged2);
  }
  function onKeyDown(event) {
    if (event.code === "ArrowLeft") video_default.previousFrame();
    if (event.code === "ArrowRight") video_default.nextFrame();
    if (event.code === "Space") toggleVideoPlayback();
    if (event.code === "ArrowUp") playbackControls_default.increaseVolume();
    if (event.code === "ArrowDown") playbackControls_default.decreaseVolume();
    if (event.code === "KeyZ" && event.ctrlKey) canvas_default.undoStroke();
  }
  function onDrawingsChanged2() {
    markers_default.redraw(annotations_default.getMarkedFrames(), video_default.getFrameCount());
  }
  function toggleVideoPlayback() {
    if (!video_default.isVideoLoaded()) return;
    if (video_default.isVideoPlaying()) {
      video_default.pauseVideo();
      playbackControls_default.setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
    } else {
      video_default.playVideo();
      playbackControls_default.setPlayPauseBtnContent(PLAYBACK_BUTTON.PAUSE);
    }
  }
  function onVideoLoadingStarted() {
    canvas_default.setCanDraw(false);
  }
  function onVideoLoad() {
    canvas_default.setCanvasSize(video_default.getVideoSize());
    annotations_default.clearAnnotations();
    canvas_default.setCanDraw(true);
    playbackControls_default.setSeekerValue(0);
    playbackControls_default.setSeekerMaximum(video_default.getFrameCount() - 1);
    markers_default.setCanvasSize(video_default.getVideoSize());
    markers_default.redraw(annotations_default.getMarkedFrames(), video_default.getFrameCount());
  }
  function onFrameChange(frame) {
    playbackControls_default.setSeekerValue(frame);
    canvas_default.redrawFrameCanvas(frame);
  }
  function onVideoEnd() {
    playbackControls_default.setPlayPauseBtnContent(PLAYBACK_BUTTON.PLAY);
  }
})();
/*! Bundled license information:

jszip/dist/jszip.min.js:
  (*!
  
  JSZip v3.10.1 - A JavaScript class for generating and reading zip files
  <http://stuartk.com/jszip>
  
  (c) 2009-2016 Stuart Knightley <stuart [at] stuartk.com>
  Dual licenced under the MIT license or GPLv3. See https://raw.github.com/Stuk/jszip/main/LICENSE.markdown.
  
  JSZip uses the library pako released under the MIT license :
  https://github.com/nodeca/pako/blob/main/LICENSE
  *)
*/
