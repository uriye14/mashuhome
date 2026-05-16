$watcher1 = New-Object System.IO.FileSystemWatcher
$watcher1.Path = 'D:\YCH\AI\mashuhome\菜谱'
$watcher1.Filter = '*.*'
$watcher1.EnableRaisingEvents = $true

$watcher2 = New-Object System.IO.FileSystemWatcher
$watcher2.Path = 'D:\YCH\AI\mashuhome\菜谱图片'
$watcher2.Filter = '*.*'
$watcher2.EnableRaisingEvents = $true

while ($true) {
    $r1 = $watcher1.WaitForChanged('Created', 2000)
    if (-not $r1.TimedOut -and $r1.Name -match '\.(jpg|jpeg|png)$') {
        $processed = Get-Content 'D:\YCH\AI\mashuhome\processed_recipes.txt' -Encoding utf8 | ForEach-Object { $_.Trim().ToLower() }
        if ($r1.Name.ToLower() -notin $processed) {
            Write-Output "菜谱:$($r1.Name)"
        }
    }
    $r2 = $watcher2.WaitForChanged('Created', 2000)
    if (-not $r2.TimedOut -and $r2.Name -match '\.(jpg|jpeg|png|webp)$') {
        $processed = Get-Content 'D:\YCH\AI\mashuhome\processed_recipe_images.txt' -Encoding utf8 | ForEach-Object { $_.Trim().ToLower() }
        if ($r2.Name.ToLower() -notin $processed) {
            Write-Output "菜谱图片:$($r2.Name)"
        }
    }
}
