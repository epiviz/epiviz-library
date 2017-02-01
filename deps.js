// This file was autogenerated by depswriter.py.
// Please do not edit.
goog.addDependency('src/epiviz/caja/caja-standalone.js', ['caja', 'epiviz.caja'], ['epiviz.deferred.Deferred', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/caja/caja.js', ['epiviz.caja.cajole'], ['epiviz.deferred.Deferred', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/config.js', ['epiviz.Config'], ['epiviz.data.WebServerDataProvider', 'epiviz.data.WebsocketDataProvider', 'epiviz.ui.WebArgsManager'], false);
goog.addDependency('src/epiviz/data/cache.js', ['epiviz.data.Cache'], ['epiviz.data.RequestStack', 'epiviz.datatypes.MapGenomicData', 'epiviz.datatypes.MeasurementGenomicDataArrayWrapper', 'epiviz.measurements.MeasurementHashtable', 'epiviz.measurements.MeasurementSet'], false);
goog.addDependency('src/epiviz/data/data-manager.js', ['epiviz.data.DataManager'], ['epiviz.data.Cache', 'epiviz.data.DataProvider', 'epiviz.data.DataProviderFactory', 'epiviz.data.RequestStack', 'epiviz.datatypes.FeatureValueArray', 'epiviz.datatypes.GenomicRangeArray', 'epiviz.datatypes.MeasurementGenomicData', 'epiviz.datatypes.MeasurementGenomicDataWrapper', 'epiviz.events.Event', 'epiviz.events.EventListener', 'epiviz.events.EventResult', 'epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementSet', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/data/data-provider-factory.js', ['epiviz.data.DataProviderFactory'], ['epiviz.data.EmptyResponseDataProvider', 'epiviz.events.Event', 'epiviz.events.EventListener', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/data/data-provider.js', ['epiviz.data.DataProvider'], ['epiviz.data.Response', 'epiviz.events.Event'], false);
goog.addDependency('src/epiviz/data/empty-response-data-provider.js', ['epiviz.data.EmptyResponseDataProvider'], ['epiviz.data.DataProvider', 'epiviz.data.Response'], false);
goog.addDependency('src/epiviz/data/epiviz-api-data-provider.js', ['epiviz.data.EpivizApiDataProvider', 'epiviz.data.EpivizApiDataProvider.Request'], ['epiviz.data.DataProvider', 'epiviz.data.Response', 'epiviz.ui.charts.tree.NodeSelectionType', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/data/message-type.js', ['epiviz.data.MessageType'], [], false);
goog.addDependency('src/epiviz/data/metagenomics-data-provider.js', ['epiviz.data.MetagenomicsDataProvider'], [], false);
goog.addDependency('src/epiviz/data/mock-data-provider.js', ['epiviz.data.MockDataProvider'], [], false);
goog.addDependency('src/epiviz/data/request-stack.js', ['epiviz.data.RequestStack'], [], false);
goog.addDependency('src/epiviz/data/request.js', ['epiviz.data.Request'], ['epiviz.data.MessageType', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/data/response.js', ['epiviz.data.Response'], ['epiviz.data.MessageType'], false);
goog.addDependency('src/epiviz/data/webserver-data-provider.js', ['epiviz.data.WebServerDataProvider'], ['epiviz.Config', 'epiviz.data.DataProvider', 'epiviz.data.Response', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/data/websocket-data-provider.js', ['epiviz.data.WebsocketDataProvider'], ['epiviz.Config', 'epiviz.data.DataProvider', 'epiviz.data.MessageType', 'epiviz.data.Request', 'epiviz.data.Response', 'epiviz.datatypes.GenomicRange', 'epiviz.events.EventResult', 'epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementSet', 'epiviz.ui.WebArgsManager', 'epiviz.ui.charts.ColorPalette', 'epiviz.ui.controls.VisConfigSelection', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/feature-value-array.js', ['epiviz.datatypes.FeatureValueArray'], ['epiviz.datatypes.GenomicArray', 'epiviz.datatypes.GenomicRange', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/genomic-array.js', ['epiviz.datatypes.GenomicArray'], [], false);
goog.addDependency('src/epiviz/datatypes/genomic-data.js', ['epiviz.datatypes.GenomicData', 'epiviz.datatypes.GenomicData.RowItem', 'epiviz.datatypes.GenomicData.ValueItem'], [], false);
goog.addDependency('src/epiviz/datatypes/genomic-range-array.js', ['epiviz.datatypes.GenomicRangeArray', 'epiviz.datatypes.GenomicRangeArray.RowItemWrapper'], ['epiviz.datatypes.GenomicArray', 'epiviz.datatypes.GenomicData.RowItem', 'epiviz.datatypes.GenomicRange', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/genomic-range.js', ['epiviz.datatypes.GenomicRange'], [], false);
goog.addDependency('src/epiviz/datatypes/item-filtered-genomic-data.js', ['epiviz.datatypes.ItemFilteredGenomicData'], ['epiviz.datatypes.MapGenomicData', 'epiviz.datatypes.MeasurementGenomicDataArrayWrapper', 'epiviz.deferred.Deferred', 'epiviz.measurements.MeasurementHashtable', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/map-genomic-data.js', ['epiviz.datatypes.MapGenomicData'], ['epiviz.datatypes.GenomicData', 'epiviz.deferred.Deferred'], false);
goog.addDependency('src/epiviz/datatypes/measurement-aggregated-genomic-data.js', ['epiviz.datatypes.MeasurementAggregatedGenomicData'], ['epiviz.datatypes.GenomicData.ValueItem', 'epiviz.datatypes.MapGenomicData', 'epiviz.datatypes.MeasurementGenomicDataArrayWrapper', 'epiviz.datatypes.RowItemImpl', 'epiviz.deferred.Deferred', 'epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementHashtable', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/measurement-genomic-data-array-wrapper.js', ['epiviz.datatypes.MeasurementGenomicDataArrayWrapper'], ['epiviz.datatypes.MeasurementGenomicData'], false);
goog.addDependency('src/epiviz/datatypes/measurement-genomic-data-wrapper.js', ['epiviz.datatypes.MeasurementGenomicDataWrapper'], ['epiviz.datatypes.GenomicData.ValueItem', 'epiviz.datatypes.MeasurementGenomicData', 'epiviz.measurements.Measurement.Type'], false);
goog.addDependency('src/epiviz/datatypes/measurement-genomic-data.js', ['epiviz.datatypes.MeasurementGenomicData'], [], false);
goog.addDependency('src/epiviz/datatypes/measurement-ordered-genomic-data.js', ['epiviz.datatypes.MeasurementOrderedGenomicData'], ['epiviz.datatypes.MapGenomicData', 'epiviz.deferred.Deferred', 'epiviz.measurements.MeasurementHashtable', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/datatypes/partial-summarized-experiment.js', ['epiviz.datatypes.PartialSummarizedExperiment'], ['epiviz.measurements.Measurement.Type', 'epiviz.measurements.MeasurementHashtable'], false);
goog.addDependency('src/epiviz/datatypes/range.js', ['epiviz.datatypes.Range'], [], false);
goog.addDependency('src/epiviz/datatypes/row-item-impl.js', ['epiviz.datatypes.RowItemImpl'], [], false);
goog.addDependency('src/epiviz/datatypes/seq-info.js', ['epiviz.datatypes.SeqInfo'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/deferred/deferred.js', ['epiviz.deferred.Deferred'], [], false);
goog.addDependency('src/epiviz/deferred/promise.js', ['epiviz.deferred.Promise'], ['epiviz.deferred.Deferred'], false);
goog.addDependency('src/epiviz/epiviz.js', ['epiviz.EpiViz'], ['epiviz.datatypes.GenomicRange', 'epiviz.events.EventListener', 'epiviz.ui.charts.VisualizationType', 'epiviz.ui.controls.MessageDialog', 'epiviz.workspaces.Workspace'], false);
goog.addDependency('src/epiviz/events/event-listener.js', ['epiviz.events.EventListener'], [], false);
goog.addDependency('src/epiviz/events/event-result.js', ['epiviz.events.EventResult'], [], false);
goog.addDependency('src/epiviz/events/event.js', ['epiviz.events.Event'], [], false);
goog.addDependency('src/epiviz/localstorage/local-storage-manager.js', ['epiviz.localstorage.LocalStorageManager'], ['epiviz.workspaces.Workspace'], false);
goog.addDependency('src/epiviz/main.js', ['epiviz.main'], ['epiviz.Config', 'epiviz.EpiViz', 'epiviz.data.DataManager', 'epiviz.data.DataProviderFactory', 'epiviz.localstorage.LocalStorageManager', 'epiviz.measurements.MeasurementsManager', 'epiviz.ui.ControlManager', 'epiviz.ui.LocationManager', 'epiviz.ui.WebArgsManager', 'epiviz.ui.charts.ChartFactory', 'epiviz.ui.charts.ChartManager', 'epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory', 'epiviz.workspaces.UserManager', 'epiviz.workspaces.WorkspaceManager'], false);
goog.addDependency('src/epiviz/measurements/measurement-hashtable.js', ['epiviz.measurements.MeasurementHashtable'], ['epiviz.utils.Iterable', 'epiviz.utils.Iterator'], false);
goog.addDependency('src/epiviz/measurements/measurement-set.js', ['epiviz.measurements.MeasurementSet'], ['epiviz.utils.Iterable', 'epiviz.utils.Iterator'], false);
goog.addDependency('src/epiviz/measurements/measurement.js', ['epiviz.measurements.Measurement', 'epiviz.measurements.Measurement.Type'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/measurements/measurements-manager.js', ['epiviz.measurements.MeasurementsManager'], ['epiviz.events.Event', 'epiviz.measurements.MeasurementSet'], false);
goog.addDependency('src/epiviz/plugins/charts/blocks-track-type.js', ['epiviz.plugins.charts.BlocksTrackType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.BlocksTrack', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.TrackType'], false);
goog.addDependency('src/epiviz/plugins/charts/blocks-track.js', ['epiviz.plugins.charts.BlocksTrack'], ['epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.Track', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/diversity-scatter-plot-type.js', ['epiviz.plugins.charts.DiversityScatterPlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.DiversityScatterPlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/diversity-scatter-plot.js', ['epiviz.plugins.charts.DiversityScatterPlot'], ['epiviz.deferred.Deferred', 'epiviz.measurements.Measurement', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartIndexObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.Visualization', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/genes-track-type.js', ['epiviz.plugins.charts.GenesTrackType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.GenesTrack', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.TrackType'], false);
goog.addDependency('src/epiviz/plugins/charts/genes-track.js', ['epiviz.plugins.charts.GenesTrack'], ['epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.Track', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/heatmap-plot-type.js', ['epiviz.plugins.charts.HeatmapPlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.HeatmapPlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization', 'epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory'], false);
goog.addDependency('src/epiviz/plugins/charts/heatmap-plot.js', ['epiviz.plugins.charts.HeatmapPlot'], ['epiviz.datatypes.MapGenomicData', 'epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementHashtable', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/line-plot-type.js', ['epiviz.plugins.charts.LinePlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.LinePlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/line-plot.js', ['epiviz.plugins.charts.LinePlot'], ['epiviz.measurements.Measurement', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/line-track-custom.js', ['epiviz.plugins.charts.LineTrackCustom'], ['epiviz.datatypes.GenomicRange', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Track', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/line-track-type-custom.js', ['epiviz.plugins.charts.LineTrackTypeCustom'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.LineTrackCustom', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.TrackType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/line-track-type.js', ['epiviz.plugins.charts.LineTrackType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.LineTrack', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.TrackType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/line-track.js', ['epiviz.plugins.charts.LineTrack'], ['epiviz.datatypes.GenomicRange', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Track', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/pca-scatter-plot-type.js', ['epiviz.plugins.charts.CustomScatterPlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.CustomScatterPlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/pca-scatter-plot.js', ['epiviz.plugins.charts.CustomScatterPlot'], ['epiviz.deferred.Deferred', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartIndexObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/scatter-plot-type.js', ['epiviz.plugins.charts.ScatterPlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.ScatterPlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/scatter-plot.js', ['epiviz.plugins.charts.ScatterPlot'], ['epiviz.measurements.Measurement', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/stacked-line-plot-type.js', ['epiviz.plugins.charts.StackedLinePlotType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.StackedLinePlot', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.PlotType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/stacked-line-plot.js', ['epiviz.plugins.charts.StackedLinePlot'], ['epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementHashtable', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Plot', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.markers.VisualizationMarker', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/plugins/charts/stacked-line-track-type.js', ['epiviz.plugins.charts.StackedLineTrackType'], ['epiviz.measurements.Measurement.Type', 'epiviz.plugins.charts.StackedLineTrack', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.TrackType', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/plugins/charts/stacked-line-track.js', ['epiviz.plugins.charts.StackedLineTrack'], ['epiviz.datatypes.GenomicRange', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.Track', 'epiviz.ui.charts.VisEventArgs', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/axis.js', ['epiviz.ui.charts.Axis'], [], false);
goog.addDependency('src/epiviz/ui/charts/chart-factory.js', ['epiviz.ui.charts.ChartFactory'], ['epiviz.plugins.charts.BlocksTrackType', 'epiviz.plugins.charts.CustomScatterPlotType', 'epiviz.plugins.charts.DiversityScatterPlotType', 'epiviz.plugins.charts.GenesTrackType', 'epiviz.plugins.charts.HeatmapPlotType', 'epiviz.plugins.charts.LinePlotType', 'epiviz.plugins.charts.LineTrackType', 'epiviz.plugins.charts.ScatterPlotType', 'epiviz.plugins.charts.StackedLinePlotType', 'epiviz.plugins.charts.StackedLineTrackType', 'epiviz.ui.charts.tree.IcicleType', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/chart-manager.js', ['epiviz.ui.charts.ChartManager'], ['epiviz.events.Event', 'epiviz.events.EventListener', 'epiviz.ui.ControlManager', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.VisualizationProperties', 'epiviz.ui.charts.VisualizationType', 'epiviz.ui.charts.markers.VisualizationMarker', 'epiviz.ui.controls.SaveSvgAsImageDialog', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/chart-object.js', ['epiviz.ui.charts.ChartObject'], ['epiviz.ui.charts.VisObject'], false);
goog.addDependency('src/epiviz/ui/charts/chart-type.js', ['epiviz.ui.charts.ChartType'], ['epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.VisualizationType', 'epiviz.ui.charts.markers.MeasurementAggregator'], false);
goog.addDependency('src/epiviz/ui/charts/chart.js', ['epiviz.ui.charts.Chart'], ['epiviz.datatypes.ItemFilteredGenomicData', 'epiviz.datatypes.MeasurementAggregatedGenomicData', 'epiviz.datatypes.MeasurementOrderedGenomicData', 'epiviz.deferred.Deferred', 'epiviz.measurements.Measurement', 'epiviz.measurements.MeasurementHashtable', 'epiviz.ui.charts.ChartType', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.Visualization', 'epiviz.ui.charts.markers.MeasurementAggregator', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/color-palette.js', ['epiviz.ui.charts.ColorPalette'], ['epiviz.Config', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/custom-charts-index.js', ['epiviz.ui.charts.ChartIndexObject'], ['epiviz.ui.charts.VisObject'], false);
goog.addDependency('src/epiviz/ui/charts/custom-setting.js', ['epiviz.ui.charts.CustomSetting'], [], false);
goog.addDependency('src/epiviz/ui/charts/data-structure-visualization-type.js', ['epiviz.ui.charts.DataStructureVisualizationType'], ['epiviz.ui.charts.VisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/data-structure-visualization.js', ['epiviz.ui.charts.DataStructureVisualization'], ['epiviz.events.Event', 'epiviz.measurements.MeasurementSet', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.Visualization', 'epiviz.ui.charts.VisualizationType', 'epiviz.ui.controls.VisConfigSelection'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-color-by-measurements-code-button.js', ['epiviz.ui.charts.decoration.ChartColorByMeasurementsCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-color-by-row-code-button.js', ['epiviz.ui.charts.decoration.ChartColorByRowCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-colors-button.js', ['epiviz.ui.charts.decoration.ChartColorsButton'], ['epiviz.ui.charts.decoration.ChartOptionButton', 'epiviz.ui.controls.ColorPickerDialog'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-filter-code-button.js', ['epiviz.ui.charts.decoration.ChartFilterCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-group-by-measurements-code-button.js', ['epiviz.ui.charts.decoration.ChartGroupByMeasurementsCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-loader-animation.js', ['epiviz.ui.charts.decoration.ChartLoaderAnimation'], ['epiviz.events.EventListener', 'epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-option-button.js', ['epiviz.ui.charts.decoration.ChartOptionButton'], ['epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-order-by-measurements-code-button.js', ['epiviz.ui.charts.decoration.ChartOrderByMeasurementsCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-resize.js', ['epiviz.ui.charts.decoration.ChartResize'], ['epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/chart-tooltip.js', ['epiviz.ui.charts.decoration.ChartTooltip'], ['epiviz.ui.charts.decoration.ToggleTooltipButton', 'epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/code-button.js', ['epiviz.ui.charts.decoration.CodeButton'], ['epiviz.ui.charts.decoration.ChartOptionButton', 'epiviz.ui.controls.CodeDialog'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/custom-settings-button.js', ['epiviz.ui.charts.decoration.CustomSettingsButton'], ['epiviz.ui.charts.decoration.ChartOptionButton', 'epiviz.ui.controls.CustomSettingsDialog'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/edit-code-button.js', ['epiviz.ui.charts.decoration.EditCodeButton'], ['epiviz.ui.charts.decoration.CodeButton', 'epiviz.ui.controls.EditCodeControl'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/hierarchy-filter-code-button.js', ['epiviz.ui.charts.decoration.HierarchyFilterCodeButton'], ['epiviz.ui.charts.decoration.MarkerCodeButton', 'epiviz.ui.charts.markers.VisualizationMarker'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/marker-code-button.js', ['epiviz.ui.charts.decoration.MarkerCodeButton'], ['epiviz.ui.charts.decoration.CodeButton', 'epiviz.ui.charts.markers.VisualizationMarker', 'epiviz.ui.controls.MarkerCodeControl'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/remove-chart-button.js', ['epiviz.ui.charts.decoration.RemoveChartButton'], ['epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.decoration.ChartOptionButton'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/save-chart-button.js', ['epiviz.ui.charts.decoration.SaveChartButton'], ['epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.decoration.ChartOptionButton'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/toggle-tooltip-button.js', ['epiviz.ui.charts.decoration.ToggleTooltipButton'], ['epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/decoration/visualization-decoration.js', ['epiviz.ui.charts.decoration.VisualizationDecoration'], [], false);
goog.addDependency('src/epiviz/ui/charts/display-type.js', ['epiviz.ui.charts.DisplayType'], [], false);
goog.addDependency('src/epiviz/ui/charts/margins.js', ['epiviz.ui.charts.Margins'], ['epiviz.ui.charts.Axis'], false);
goog.addDependency('src/epiviz/ui/charts/markers/measurement-aggregator.js', ['epiviz.ui.charts.markers.MeasurementAggregator'], [], false);
goog.addDependency('src/epiviz/ui/charts/markers/visualization-marker.js', ['epiviz.ui.charts.markers.VisualizationMarker'], ['epiviz.caja.cajole', 'epiviz.deferred.Deferred', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/plot-type.js', ['epiviz.ui.charts.PlotType'], ['epiviz.ui.charts.ChartType', 'epiviz.ui.charts.VisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/plot.js', ['epiviz.ui.charts.Plot'], ['epiviz.ui.charts.Chart', 'epiviz.ui.charts.VisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/track-type.js', ['epiviz.ui.charts.TrackType'], ['epiviz.ui.charts.ChartType', 'epiviz.ui.charts.VisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/track.js', ['epiviz.ui.charts.Track'], ['epiviz.ui.charts.Axis', 'epiviz.ui.charts.Chart', 'epiviz.ui.charts.ChartObject', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.VisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/agglomerative-clustering.js', ['epiviz.ui.charts.transform.clustering.AgglomerativeClustering'], ['epiviz.ui.charts.transform.clustering.ClusterLeaf', 'epiviz.ui.charts.transform.clustering.ClusterSubtree', 'epiviz.ui.charts.transform.clustering.ClusterTree', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/cluster-leaf.js', ['epiviz.ui.charts.transform.clustering.ClusterLeaf'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/cluster-node.js', ['epiviz.ui.charts.transform.clustering.ClusterNode'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/cluster-subtree.js', ['epiviz.ui.charts.transform.clustering.ClusterSubtree'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/cluster-tree.js', ['epiviz.ui.charts.transform.clustering.ClusterTree'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/clustering-algorithm-factory.js', ['epiviz.ui.charts.transform.clustering.ClusteringAlgorithmFactory'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/clustering-linkage.js', ['epiviz.ui.charts.transform.clustering.ClusteringLinkage'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/clustering-metric.js', ['epiviz.ui.charts.transform.clustering.ClusteringMetric'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/complete-linkage.js', ['epiviz.ui.charts.transform.clustering.CompleteLinkage'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/euclidean-metric.js', ['epiviz.ui.charts.transform.clustering.EuclideanMetric'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/hierarchical-clustering-algorithm.js', ['epiviz.ui.charts.transform.clustering.HierarchicalClusteringAlgorithm'], [], false);
goog.addDependency('src/epiviz/ui/charts/transform/clustering/none-clustering.js', ['epiviz.ui.charts.transform.clustering.NoneClustering'], ['epiviz.ui.charts.transform.clustering.ClusterLeaf', 'epiviz.ui.charts.transform.clustering.ClusterSubtree', 'epiviz.ui.charts.transform.clustering.ClusterTree'], false);
goog.addDependency('src/epiviz/ui/charts/tree/decoration/toggle-propagate-selection-button.js', ['epiviz.ui.charts.tree.decoration.TogglePropagateSelectionButton'], ['epiviz.ui.charts.decoration.VisualizationDecoration'], false);
goog.addDependency('src/epiviz/ui/charts/tree/hierarchy-visualization-type.js', ['epiviz.ui.charts.tree.HierarchyVisualizationType'], ['epiviz.ui.charts.DataStructureVisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/tree/hierarchy-visualization.js', ['epiviz.ui.charts.tree.HierarchyVisualization'], ['epiviz.ui.charts.DataStructureVisualization', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.tree.Node', 'epiviz.ui.charts.tree.NodeSelectionType', 'epiviz.ui.charts.tree.UiNode'], false);
goog.addDependency('src/epiviz/ui/charts/tree/icicle-type.js', ['epiviz.ui.charts.tree.IcicleType'], ['epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.DataStructureVisualizationType'], false);
goog.addDependency('src/epiviz/ui/charts/tree/icicle.js', ['epiviz.ui.charts.tree.Icicle'], ['epiviz.datatypes.GenomicRange', 'epiviz.ui.charts.Axis', 'epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.tree.HierarchyVisualization', 'epiviz.ui.charts.tree.UiNode', 'epiviz.ui.controls.VisConfigSelection'], false);
goog.addDependency('src/epiviz/ui/charts/tree/node-selection-type.js', ['epiviz.ui.charts.tree.NodeSelectionType'], [], false);
goog.addDependency('src/epiviz/ui/charts/tree/node.js', ['epiviz.ui.charts.tree.Node'], ['epiviz.ui.charts.VisObject', 'epiviz.ui.charts.tree.NodeSelectionType'], false);
goog.addDependency('src/epiviz/ui/charts/tree/sunburst.js', ['epiviz.ui.charts.tree.Sunburst'], ['epiviz.ui.charts.VisEventArgs', 'epiviz.ui.charts.Visualization'], false);
goog.addDependency('src/epiviz/ui/charts/tree/ui-node.js', ['epiviz.ui.charts.tree.UiNode'], ['epiviz.ui.charts.tree.Node'], false);
goog.addDependency('src/epiviz/ui/charts/vis-event-args.js', ['epiviz.ui.charts.VisEventArgs'], [], false);
goog.addDependency('src/epiviz/ui/charts/vis-object.js', ['epiviz.ui.charts.VisObject'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/visualization-properties.js', ['epiviz.ui.charts.VisualizationProperties'], ['epiviz.measurements.MeasurementSet', 'epiviz.ui.controls.VisConfigSelection', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/visualization-type.js', ['epiviz.ui.charts.VisualizationType', 'epiviz.ui.charts.VisualizationType.DisplayType'], ['epiviz.Config', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Visualization', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/charts/visualization.js', ['epiviz.ui.charts.Visualization'], ['epiviz.caja', 'epiviz.deferred.Deferred', 'epiviz.events.Event', 'epiviz.ui.charts.ChartType', 'epiviz.ui.charts.CustomSetting', 'epiviz.ui.charts.Margins', 'epiviz.ui.charts.VisEventArgs'], false);
goog.addDependency('src/epiviz/ui/control-manager.js', ['epiviz.ui.ControlManager'], ['epiviz.Config', 'epiviz.datatypes.GenomicRange', 'epiviz.events.Event', 'epiviz.events.EventListener', 'epiviz.ui.PrintManager', 'epiviz.ui.charts.VisualizationType', 'epiviz.ui.controls.ComputedMeasurementsDialog', 'epiviz.ui.controls.DatasourceGroupWizardStep', 'epiviz.ui.controls.MeaurementsWizardStep', 'epiviz.ui.controls.MessageDialog', 'epiviz.ui.controls.VisConfigSelection', 'epiviz.ui.controls.Wizard', 'epiviz.ui.tutorials', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/controls/code-control.js', ['epiviz.ui.controls.CodeControl'], ['epiviz.ui.controls.Control'], false);
goog.addDependency('src/epiviz/ui/controls/code-dialog.js', ['epiviz.ui.controls.CodeDialog'], ['epiviz.ui.controls.Dialog'], false);
goog.addDependency('src/epiviz/ui/controls/color-picker-dialog.js', ['epiviz.ui.controls.ColorPickerDialog'], ['epiviz.ui.charts.ColorPalette', 'epiviz.ui.controls.Dialog'], false);
goog.addDependency('src/epiviz/ui/controls/computed-measurements-dialog.js', ['epiviz.ui.controls.ComputedMeasurementsDialog'], ['epiviz.measurements.Measurement', 'epiviz.ui.controls.Dialog', 'epiviz.ui.controls.MessageDialog', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/controls/control.js', ['epiviz.ui.controls.Control'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/controls/custom-settings-dialog.js', ['epiviz.ui.controls.CustomSettingsDialog'], ['epiviz.ui.charts.CustomSetting', 'epiviz.ui.controls.Dialog', 'epiviz.ui.controls.MessageDialog', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/controls/data-table.js', ['epiviz.ui.controls.DataTable', 'epiviz.ui.controls.DataTable.Column'], ['epiviz.ui.controls.Control'], false);
goog.addDependency('src/epiviz/ui/controls/datasource-group-wizard-step.js', ['epiviz.ui.controls.DatasourceGroupWizardStep'], ['epiviz.ui.controls.DataTable'], false);
goog.addDependency('src/epiviz/ui/controls/dialog.js', ['epiviz.ui.controls.Dialog'], ['epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/controls/edit-code-control.js', ['epiviz.ui.controls.EditCodeControl'], ['epiviz.ui.controls.CodeControl'], false);
goog.addDependency('src/epiviz/ui/controls/marker-code-control.js', ['epiviz.ui.controls.MarkerCodeControl'], ['epiviz.ui.controls.CodeControl'], false);
goog.addDependency('src/epiviz/ui/controls/measurements-wizard-step.js', ['epiviz.ui.controls.MeaurementsWizardStep'], ['epiviz.measurements.MeasurementSet', 'epiviz.ui.controls.DataTable'], false);
goog.addDependency('src/epiviz/ui/controls/message-dialog.js', ['epiviz.ui.controls.MessageDialog'], ['epiviz.ui.controls.Dialog'], false);
goog.addDependency('src/epiviz/ui/controls/save-svg-as-image-dialog.js', ['epiviz.ui.controls.SaveSvgAsImageDialog'], ['epiviz.ui.controls.Dialog'], false);
goog.addDependency('src/epiviz/ui/controls/vis-config-selection.js', ['epiviz.ui.controls.VisConfigSelection'], [], false);
goog.addDependency('src/epiviz/ui/controls/wizard.js', ['epiviz.ui.controls.Wizard', 'epiviz.ui.controls.Wizard.Step'], ['epiviz.ui.controls.Dialog', 'epiviz.ui.controls.MessageDialog', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/ui/location-manager.js', ['epiviz.ui.LocationManager'], ['epiviz.datatypes.GenomicRange', 'epiviz.events.Event'], false);
goog.addDependency('src/epiviz/ui/print-manager.js', ['epiviz.ui.PrintManager'], [], false);
goog.addDependency('src/epiviz/ui/tutorial.js', ['epiviz.ui.tutorials'], [], false);
goog.addDependency('src/epiviz/ui/web-args-manager.js', ['epiviz.ui.WebArgsManager'], ['epiviz.events.EventListener', 'epiviz.utils'], false);
goog.addDependency('src/epiviz/utils/expression-parser.js', ['epiviz.utils.ExpressionParser'], [], false);
goog.addDependency('src/epiviz/utils/iterable-array.js', ['epiviz.utils.IterableArray'], [], false);
goog.addDependency('src/epiviz/utils/iterable.js', ['epiviz.utils.Iterable'], [], false);
goog.addDependency('src/epiviz/utils/iterator.js', ['epiviz.utils.Iterator'], [], false);
goog.addDependency('src/epiviz/utils/utils.js', ['epiviz.utils'], ['epiviz.deferred.Deferred'], false);
goog.addDependency('src/epiviz/workspaces/user-manager.js', ['epiviz.workspaces.UserManager'], [], false);
goog.addDependency('src/epiviz/workspaces/workspace-manager.js', ['epiviz.workspaces.WorkspaceManager'], ['epiviz.datatypes.GenomicRange', 'epiviz.events.Event', 'epiviz.events.EventListener', 'epiviz.ui.WebArgsManager', 'epiviz.workspaces.Workspace'], false);
goog.addDependency('src/epiviz/workspaces/workspace.js', ['epiviz.workspaces.Workspace'], ['epiviz.Config', 'epiviz.datatypes.GenomicRange', 'epiviz.events.Event', 'epiviz.measurements.MeasurementHashtable', 'epiviz.measurements.MeasurementSet', 'epiviz.ui.charts.ColorPalette', 'epiviz.ui.charts.Margins', 'epiviz.ui.charts.Visualization', 'epiviz.ui.charts.VisualizationProperties', 'epiviz.ui.charts.markers.VisualizationMarker', 'epiviz.ui.controls.VisConfigSelection', 'epiviz.utils'], false);