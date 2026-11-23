Add-Type -AssemblyName System.Drawing

function Crop-Image ($sourcePath, $destPath, $x, $y, $w, $h) {
    $src = [System.Drawing.Image]::FromFile($sourcePath)
    $rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
    $bmp = New-Object System.Drawing.Bitmap($w, $h)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($src, (New-Object System.Drawing.Rectangle(0, 0, $w, $h)), $rect, [System.Drawing.GraphicsUnit]::Pixel)
    $g.Dispose()
    $src.Dispose()
    $bmp.Save($destPath, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    $bmp.Dispose()
    Write-Output "Saved $destPath"
}

$designsDir = "C:\Users\Maricielo\.gemini\antigravity\scratch\guia-pinto-teneria\assets\designs"
$imagesDir  = "C:\Users\Maricielo\.gemini\antigravity\scratch\guia-pinto-teneria\assets\images"

# 1. Torre de Eboli (from page-3-pinto.jpg: 388x1024)
Crop-Image "$designsDir\page-3-pinto.jpg" "$imagesDir\torre-eboli.jpg" 10 110 210 155

# 2. Feria del chocolate (from page-3-pinto.jpg: 388x1024)
Crop-Image "$designsDir\page-3-pinto.jpg" "$imagesDir\chocolates-feria.jpg" 260 307 118 110

# 3. La Teneria I (from page-4-teneria.jpg: 306x1024)
Crop-Image "$designsDir\page-4-teneria.jpg" "$imagesDir\teneria-fase1.jpg" 12 210 133 50

# 4. La Teneria II (from page-4-teneria.jpg: 306x1024)
Crop-Image "$designsDir\page-4-teneria.jpg" "$imagesDir\teneria-fase2.jpg" 162 210 133 50

# 5. Parque Gabriel Celaya (from page-4-teneria.jpg: 306x1024)
Crop-Image "$designsDir\page-4-teneria.jpg" "$imagesDir\parque-gabriel-celaya.jpg" 12 530 156 65

# 6. Senda Arroyo Culebro (from page-4-teneria.jpg: 306x1024)
Crop-Image "$designsDir\page-4-teneria.jpg" "$imagesDir\senda-culebro.jpg" 186 530 108 65

# 7. IES Calderon (from page-5-ies-calderon.jpg: 376x1024)
Crop-Image "$designsDir\page-5-ies-calderon.jpg" "$imagesDir\ies-calderon.jpg" 253 35 114 65

# 8. Huerto Escolar (from page-5-ies-calderon.jpg: 376x1024)
Crop-Image "$designsDir\page-5-ies-calderon.jpg" "$imagesDir\huerto-escolar.jpg" 130 517 110 55

# 9. Parque Juan Carlos I (from page-6-naturaleza.jpg: 419x1024)
Crop-Image "$designsDir\page-6-naturaleza.jpg" "$imagesDir\parque-juan-carlos-1.jpg" 10 180 230 95

# 10. Gabriel Celaya Plano (from page-6-naturaleza.jpg: 419x1024)
Crop-Image "$designsDir\page-6-naturaleza.jpg" "$imagesDir\mapa-gabriel-celaya.jpg" 270 190 120 55

# 11. Ombligos y Dulces (from page-7-gastronomia.jpg: 288x1024)
Crop-Image "$designsDir\page-7-gastronomia.jpg" "$imagesDir\ombligos-pinto.jpg" 170 58 110 82

# 12. Villa del Chocolate (from page-7-gastronomia.jpg: 288x1024)
Crop-Image "$designsDir\page-7-gastronomia.jpg" "$imagesDir\villa-chocolate-1854.jpg" 175 215 100 42

# 13. Terrazas Teneria (from page-7-gastronomia.jpg: 288x1024)
Crop-Image "$designsDir\page-7-gastronomia.jpg" "$imagesDir\terrazas-teneria.jpg" 7 550 135 50
