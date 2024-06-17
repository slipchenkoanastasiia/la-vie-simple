<script>
    document.addEventListener('DOMContentLoaded', function() {
        const customSelectLabels = document.querySelectorAll('.custom-select-label');
        
        customSelectLabels.forEach(label => {
            label.addEventListener('click', function() {
                this.nextElementSibling.classList.toggle('open');
            });
        });

        const customOptions = document.querySelectorAll('.custom-options div');
        
        customOptions.forEach(option => {
            option.addEventListener('click', function() {
                const value = this.textContent.trim();
                const select = this.closest('.filter-group').querySelector('select');
                select.value = value;
                this.closest('.custom-options').classList.remove('open');
                const label = this.closest('.filter-group').querySelector('.custom-select-label');
                label.textContent = label.textContent.split(':')[0] + ': ' + value;
            });
        });

        document.addEventListener('click', function(e) {
            if (!e.target.closest('.filter-group')) {
                const openDropdowns = document.querySelectorAll('.custom-options.open');
                openDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('open');
                });
            }
        });
    });
</script>