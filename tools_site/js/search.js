/**
 * Adiminium Tool Search Engine
 * Client-side index and filtering logic.
 */

const TOOLS = [
    // Calculators
    { name: "Simple Calculator", url: "calculators/simple/index.html", tags: ["math", "add", "subtract"] },
    { name: "Scientific Calculator", url: "calculators/scientific/index.html", tags: ["trig", "sin", "cos", "log"] },
    { name: "Percentage Calculator", url: "calculators/percentage/index.html", tags: ["percent", "discount", "tax"] },
    { name: "BMI Calculator", url: "calculators/bmi/index.html", tags: ["health", "weight", "height"] },
    { name: "Age Calculator", url: "calculators/age/index.html", tags: ["birthday", "years", "old"] },
    { name: "Loan Calculator", url: "calculators/loan/index.html", tags: ["emi", "finance", "mortgage"] },
    { name: "Tip Calculator", url: "calculators/tip/index.html", tags: ["bill", "restaurant", "split"] },
    { name: "Date Calculator", url: "calculators/date/index.html", tags: ["days", "duration", "calendar"] },
    { name: "Time Calculator", url: "calculators/time/index.html", tags: ["hours", "minutes", "duration"] },

    // Converters
    { name: "Currency Converter", url: "converters/currency/index.html", tags: ["money", "exchange", "rate"] },
    { name: "Unit Converter", url: "converters/unit/index.html", tags: ["length", "weight", "volume", "temp"] },
    { name: "Number Base Converter", url: "converters/base/index.html", tags: ["binary", "hex", "decimal", "octal"] },
    { name: "Roman Numeral Converter", url: "converters/roman/index.html", tags: ["numbers", "dates", "history"] },
    { name: "Text to Binary", url: "converters/text/index.html", tags: ["encode", "decode", "computer"] },
    { name: "Hex to RGB", url: "converters/color/index.html", tags: ["web", "design", "color"] },
    { name: "ASCII Converter", url: "converters/ascii/index.html", tags: ["code", "char", "decimal"] },
    { name: "Morse Code", url: "converters/morse/index.html", tags: ["dot", "dash", "telegraph"] },

    // Text Tools
    { name: "Word Counter", url: "text_tools/word_counter/index.html", tags: ["seo", "characters", "writing"] },
    { name: "Case Converter", url: "text_tools/case_converter/index.html", tags: ["uppercase", "lowercase", "capital"] },
    { name: "Duplicate Remover", url: "text_tools/duplicate_remover/index.html", tags: ["clean", "list", "unique"] },
    { name: "Text Reverser", url: "text_tools/text_reverser/index.html", tags: ["flip", "backwards"] },
    { name: "Palindrome Checker", url: "text_tools/palindrome_checker/index.html", tags: ["word", "phrase"] },
    { name: "Lorem Ipsum", url: "text_tools/lorem_ipsum/index.html", tags: ["generator", "dummy", "placeholder"] },
    { name: "Emoji Translator", url: "text_tools/emoji_translator/index.html", tags: ["fun", "smile", "icon"] },
    { name: "Password Strength", url: "text_tools/password_strength/index.html", tags: ["security", "hack", "safe"] },

    // Developer Tools
    { name: "JSON Formatter", url: "developer_tools/json_formatter/index.html", tags: ["pretty", "validate", "api"] },
    { name: "Code Formatter", url: "developer_tools/code_formatter/index.html", tags: ["beautify", "indent", "style"] },
    { name: "Base64 Converter", url: "developer_tools/base64_converter/index.html", tags: ["encode", "decode", "string"] },
    { name: "URL Encoder", url: "developer_tools/url_encoder/index.html", tags: ["percent", "escape", "web"] },
    { name: "Regex Tester", url: "developer_tools/regex_tester/index.html", tags: ["match", "pattern", "javascript"] },
    { name: "CSV to JSON", url: "developer_tools/csv_to_json/index.html", tags: ["convert", "data", "table"] },
    { name: "UUID Generator", url: "developer_tools/uuid_generator/index.html", tags: ["guid", "random", "id"] },

    // Randomness
    { name: "Password Generator", url: "randomness/password_generator/index.html", tags: ["secure", "pass", "key"] },
    { name: "Username Generator", url: "randomness/username_generator/index.html", tags: ["name", "handle", "fantasy"] },
    { name: "Fake Data Generator", url: "randomness/fake_data_generator/index.html", tags: ["mock", "user", "json"] },
    { name: "Number Generator", url: "randomness/number_generator/index.html", tags: ["pick", "int", "lottery"] },
    { name: "Dice Roller", url: "randomness/dice_roller/index.html", tags: ["spin", "roll", "cube"] },
    { name: "Wheel Spinner", url: "randomness/wheel_spinner/index.html", tags: ["decision", "choice", "random"] },
    { name: "Coin Flip", url: "randomness/coin_flipper/index.html", tags: ["toss", "heads", "tails"] },
    { name: "IP Generator", url: "randomness/ip_generator/index.html", tags: ["address", "ipv4", "ipv6", "network"] },

    // Color & Design
    { name: "Gradient Generator", url: "color_design/gradient_generator/index.html", tags: ["css", "background", "linear", "radial"] },
    { name: "Palette Generator", url: "color_design/palette_generator/index.html", tags: ["scheme", "colors", "design"] },
    { name: "Contrast Checker", url: "color_design/contrast_checker/index.html", tags: ["accessibility", "wcag", "readability"] },
    { name: "Box Shadow Generator", url: "color_design/box_shadow_generator/index.html", tags: ["css", "shadow", "elevation"] },
    { name: "Border Radius Generator", url: "color_design/border_radius_generator/index.html", tags: ["css", "rounded", "corners"] },
    { name: "Color Picker", url: "color_design/color_picker/index.html", tags: ["hex", "rgb", "hsl", "eyedropper"] },
    { name: "CSS Animation", url: "color_design/css_animation/index.html", tags: ["keyframes", "motion", "transition"] },
    { name: "Text Shadow", url: "color_design/text_shadow/index.html", tags: ["css", "typography", "effect"] },
    { name: "CSS Filter", url: "color_design/css_filter/index.html", tags: ["blur", "brightness", "contrast", "image"] },
    { name: "CSS Transform", url: "color_design/css_transform/index.html", tags: ["scale", "rotate", "skew", "translate"] },
    { name: "Grid Generator", url: "color_design/grid_generator/index.html", tags: ["layout", "columns", "rows"] },
    { name: "Flexbox Generator", url: "color_design/flexbox_generator/index.html", tags: ["layout", "alignment", "responsive"] },

    // Advanced Image Tools
    { name: "Image Format Converter", url: "image_tools/converter/index.html", tags: ["file", "type", "png", "jpg", "webp"] },
    { name: "Image to Base64", url: "image_tools/image_to_base64/index.html", tags: ["code", "embed", "data", "uri"] },
    { name: "Base64 to Image", url: "image_tools/base64_to_image/index.html", tags: ["decode", "preview", "string"] },
    { name: "Image Size Estimator", url: "image_tools/size_estimator/index.html", tags: ["calc", "storage", "quota"] },
    { name: "Lazy Load Tester", url: "image_tools/lazy_load_tester/index.html", tags: ["network", "speed", "simulate"] },
    { name: "Responsive Generator", url: "image_tools/responsive_generator/index.html", tags: ["srcset", "mobile", "html"] },
    { name: "Aspect Ratio Fixer", url: "image_tools/aspect_ratio_fixer/index.html", tags: ["pad", "letterbox", "instagram"] },
    { name: "Thumbnail Generator", url: "image_tools/thumbnail_generator/index.html", tags: ["bulk", "preview", "small"] },
    { name: "Blur Tool", url: "image_tools/blur_tool/index.html", tags: ["focus", "obfuscate", "censor"] },
    { name: "Sharpen Tool", url: "image_tools/sharpen_tool/index.html", tags: ["crisp", "edge", "detail"] },
    { name: "Pixelate Tool", url: "image_tools/pixelate_tool/index.html", tags: ["censor", "mosaic", "8bit"] },

    // Image Tools
    { name: "Image Resizer", url: "image_tools/resizer/index.html", tags: ["dimension", "scale", "width", "height"] },
    { name: "Image Cropper", url: "image_tools/cropper/index.html", tags: ["cut", "trim", "aspect", "ratio"] },
    { name: "Image Rotator", url: "image_tools/rotator/index.html", tags: ["flip", "turn", "orientation"] },
    { name: "Image Compressor", url: "image_tools/compressor/index.html", tags: ["shrink", "optimize", "reduce", "size"] },
    { name: "Quality Reducer", url: "image_tools/quality_reducer/index.html", tags: ["pixelate", "file", "size"] },
    { name: "DPI Changer", url: "image_tools/dpi_changer/index.html", tags: ["print", "resolution", "density", "ppi"] },
    { name: "Metadata Viewer", url: "image_tools/metadata_viewer/index.html", tags: ["exif", "info", "camera", "gps"] },
    { name: "Metadata Remover", url: "image_tools/metadata_remover/index.html", tags: ["privacy", "scrub", "restrip", "exif"] },
    { name: "Bulk Renamer", url: "image_tools/renamer/index.html", tags: ["batch", "organize", "names", "files"] },
    { name: "Image Previewer", url: "image_tools/previewer/index.html", tags: ["view", "zoom", "pan", "inspect"] },

    // Audio Tools
    { name: "Audio Tools", url: "audio_tools/index.html", tags: ["sound", "music", "mp3", "wav"] },
    { name: "Audio Trim Tool", url: "audio_tools/trim/index.html", tags: ["cut", "clip", "shorten"] },
    { name: "Audio Joiner", url: "audio_tools/joiner/index.html", tags: ["merge", "combine", "tracks"] },
    { name: "Audio Converter", url: "audio_tools/converter/index.html", tags: ["format", "mp3", "wav"] },
    { name: "Audio Speed Changer", url: "audio_tools/speed/index.html", tags: ["fast", "slow", "tempo"] },
    { name: "Audio Pitch Changer", url: "audio_tools/pitch/index.html", tags: ["key", "tune", "detune"] },
    { name: "Audio Volume Booster", url: "audio_tools/volume/index.html", tags: ["gain", "louder", "amplify"] },
    { name: "Waveform Viewer", url: "audio_tools/waveform/index.html", tags: ["visualize", "graph", "peaks"] },
    { name: "Audio Metadata Editor", url: "audio_tools/metadata/index.html", tags: ["tags", "id3", "artist"] },
    { name: "Silence Remover", url: "audio_tools/silence_remover/index.html", tags: ["quiet", "gap", "strip"] },
    { name: "Audio to Image", url: "audio_tools/waveform_image/index.html", tags: ["export", "png", "waveform"] }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchWrapper = document.querySelector('.search-wrapper');
    const searchInput = document.getElementById('global-search');
    const resultsContainer = document.getElementById('search-results');

    if (!searchInput || !resultsContainer) return;

    // Filter Logic
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        resultsContainer.innerHTML = '';

        if (query.length < 2) {
            resultsContainer.style.display = 'none';
            return;
        }

        const matches = TOOLS.filter(tool => {
            return tool.name.toLowerCase().includes(query) ||
                tool.tags.some(tag => tag.includes(query));
        }).slice(0, 8); // Limit to 8 results

        if (matches.length > 0) {
            // determine Root Path manually by looking for the search.js script tag
            // This allows the search to work from any sub-directory
            let rootPath = "";
            const scripts = document.getElementsByTagName('script');
            for (let script of scripts) {
                if (script.src.includes('search.js')) {
                    // Get the relative path part from the script src
                    // e.g., if src is "../../js/search.js", we want "../../"
                    // We use getAttribute to get the raw string in HTML, not the resolved absolute URL
                    const rawSrc = script.getAttribute('src');
                    if (rawSrc) {
                        rootPath = rawSrc.replace('js/search.js', '');
                    }
                    break;
                }
            }
            resultsContainer.style.display = 'block';
            matches.forEach(tool => {
                const a = document.createElement('a');
                a.href = rootPath + tool.url;
                a.className = 'search-result-item';
                a.innerHTML = `
                    <div class="result-name">${tool.name}</div>
                `;
                resultsContainer.appendChild(a);
            });
        } else {
            resultsContainer.style.display = 'block';
            resultsContainer.innerHTML = '<div class="no-results">No tools found</div>';
        }
    });

    // Hide on Click Outside
    document.addEventListener('click', (e) => {
        if (!searchWrapper.contains(e.target)) {
            resultsContainer.style.display = 'none';
        }
    });

    // Focus Shortcut (/)
    document.addEventListener('keydown', (e) => {
        if (e.key === '/' && document.activeElement !== searchInput) {
            e.preventDefault();
            searchInput.focus();
        }
    });
});
