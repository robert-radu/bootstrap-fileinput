/*!
 * FileInput Romanian Translations
 *
 * This file must be loaded after 'fileinput.js'. Patterns in braces '{}', or
 * any HTML markup tags in the messages must not be converted or translated.
 *
 * @see http://github.com/kartik-v/bootstrap-fileinput
 * @author Ciprian Voicu <pictoru@autoportret.ro>
 *
 * NOTE: this file must be saved in UTF-8 encoding.
 */
(function ($) {
    "use strict";

    $.fn.fileinputLocales['ro'] = {
        fileSingle: 'fișier',
        filePlural: 'fișiere',
        browseLabel: 'Răsfoiește &hellip;',
        removeLabel: 'Șterge',
        removeTitle: 'Curăță fișierele selectate',
        cancelLabel: 'Renunță',
        cancelTitle: 'Anulează încărcarea curentă',
        uploadLabel: 'Încarcă',
        uploadTitle: 'Încarcă fișierele selectate',
        msgNo: 'Nu',
        msgNoFilesSelected: 'Nu au fost selectate fișiere',
        msgCancelled: 'Anulat',
        msgPlaceholder: 'Selectează {files}...',
        msgTitle: 'Selectează {files}...',
        msgZoomModalHeading: 'Previzualizare detaliată',
        msgFileRequired: 'Trebuie să selectați un fișier pentru încărcare.',
        msgSizeTooSmall: 'Fișierul "{name}" (<b> {size} KB </ b>) este prea mic și trebuie să fie mai mare de <b> {minSize} KB </ b>.',
        msgSizeTooLarge: 'Fișierul "{name}" (<b>{size} KB</b>) depășește limita maximă de încărcare de <b>{maxSize} KB</b>.',
        msgFilesTooLess: 'Trebuie să selectezi cel puțin <b>{n}</b> {files} pentru a încărca.',
        msgFilesTooMany: 'Numărul fișierelor pentru încărcare <b>({n})</b> depășește limita maximă de <b>{m}</b>.',
        msgFileNotFound: 'Fișierul "{name}" nu a fost găsit!',
        msgFileSecured: 'Restricții de securitate previn citirea fișierului "{name}".',
        msgFileNotReadable: 'Fișierul "{name}" nu se poate citi.',
        msgFilePreviewAborted: 'Fișierului "{name}" nu poate fi previzualizat.',
        msgFilePreviewError: 'A intervenit o eroare în încercarea de citire a fișierului "{name}".',
        msgInvalidFileName: 'Caractere invalide sau neacceptate în numele fișierului "{name}".',
        msgInvalidFileType: 'Tip de fișier incorect pentru "{name}". Sunt suportate doar fișiere de tipurile "{types}".',
        msgInvalidFileExtension: 'Extensie incorectă pentru "{name}". Sunt suportate doar extensiile "{extensions}".',
        msgFileTypes: {
            'image': 'imagine',
            'html': 'HTML',
            'text': 'text',
            'video': 'video',
            'audio': 'audio',
            'flash': 'flash',
            'pdf': 'PDF',
            'object': 'obiect'
        },
        msgUploadAborted: 'Încărcarea fișierului a fost anulată',
        msgUploadThreshold: 'Prelucrare...',
        msgUploadBegin: 'Inițializare...',
        msgUploadEnd: 'Efectuat',
        msgUploadEmpty: 'Nu sunt disponibile date valide pentru încărcare.',
        msgUploadError: 'Eroare',
        msgValidationError: 'Eroare de validare',
        msgLoading: 'Se încarcă fișierul {index} din {files} &hellip;',
        msgProgress: 'Se încarcă fișierul {index} din {files} - {name} - {percent}% încărcat.',
        msgSelected: '{n} {files} încărcate',
        msgFoldersNotAllowed: 'Se poate doar trăgând fișierele! Se renunță la {n} dosar(e).',
        msgImageWidthSmall: 'Lățimea de fișier de imagine "{name}" trebuie să fie de cel puțin {size} px.',
        msgImageHeightSmall: 'Înălțimea fișier imagine "{name}" trebuie să fie de cel puțin {size} px.',
        msgImageWidthLarge: 'Lățimea de fișier de imagine "{name}" nu poate depăși {size} px.',
        msgImageHeightLarge: 'Înălțimea fișier imagine "{name}" nu poate depăși {size} px.',
        msgImageResizeError: 'Nu a putut obține dimensiunile imaginii pentru a redimensiona.',
        msgImageResizeException: 'Eroare la redimensionarea imaginii.<pre>{errors}</pre>',
        msgAjaxError: 'S-a intamplat ceva cu operatia {operation}. Vă rugăm să încercați din nou mai târziu!',
        msgAjaxProgressError: '{operation} nu a reușit',
        ajaxOperations: {
            deleteThumb: 'ștergeți fișierul',
            uploadThumb: 'încărcare fișier',
            uploadBatch: 'încărcare lot fișiere',
            uploadExtra: 'încărcare date din formular'
        },
        dropZoneTitle: 'Trage fișierele aici &hellip;',
        dropZoneClickTitle: '<br>(sau faceți clic pentru a selecta {files})',
        fileActionSettings: {
            removeTitle: 'Scoateți fișier',
            uploadTitle: 'Incarcă fisier',
            uploadRetryTitle: 'Reîncercați încărcarea',
            downloadTitle: 'Descărcare fișier',
            zoomTitle: 'Vezi detalii',
            dragTitle: 'Mutați / Rearanjați',
            indicatorNewTitle: 'Nu a fost încărcat încă',
            indicatorSuccessTitle: 'încărcat',
            indicatorErrorTitle: 'Eroare încărcare',
            indicatorLoadingTitle: 'Se încarcă ...'
        },
        previewZoomButtonTitles: {
            prev: 'Vizualizați fișierul anterior',
            next: 'Vizualizați fișierul următor',
            toggleheader: 'Schimbați antetul',
            fullscreen: 'Comutare la ecran complet',
            borderless: 'Comutați modul fără margini',
            close: 'Închideți previzualizarea detaliată'
        }
    };
})(window.jQuery);
