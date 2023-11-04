<?php
/**
 * @file
 * Default simple view template to display a list of rows.
 *
 * - $title: The title of this group of rows.  May be empty.
 * - $rows: An array of row items. Each row is an array of content.
 *   $rows are indexed by row number.
 * - $row_classes: An array of classes to apply to each row, indexed by row
 *   number. This matches the index in $rows.
 *
 * @ingroup views_templates
 */
?>
<?php if (!empty($title)): ?>
  <h3><?php print $title; ?></h3>
<?php endif; ?>

<div class="flex items-center md:flex-row md:justify-between grid md:grid-cols-3 md:gap-x-8 gap-y-4">
<?php foreach ($rows as $row_count => $row): ?>
  <div <?php if (!empty($row_classes[$row_count])) { print 'class="157ddd ' . implode(' ', $row_classes[$row_count]) . '"';  } ?>>
    <?php print $row; ?>
  </div>
<?php endforeach; ?>
</div>