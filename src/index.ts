function noneSecurity(textToCopy: string){
  const textArea: HTMLTextAreaElement = document.createElement('textarea');
  textArea.value = textToCopy;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  textArea.style.left = '-999999px';
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();
  return new Promise<void>((res, rej) => {
    document.execCommand('copy') ? res() : rej();
    textArea.remove();
  });
}
// copy text
export function copyToClipboard(textToCopy: string) {
  if (navigator.clipboard && window.isSecureContext) {
    if (document?.execCommand??'') {
      noneSecurity(textToCopy);
    } else {
      return navigator.clipboard.writeText(textToCopy);
    }
  } else {
    noneSecurity(textToCopy);
  }
}
