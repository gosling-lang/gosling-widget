import * as gosling from "gosling.js";
import { name, version } from "../package.json"

/** @param {typeof import("@jupyter-widgets/base")} base */
export default function(base) {

	class GoslingModel extends base.DOMWidgetModel {
		defaults() {
			return {
				...super.defaults(),

				_model_name: GoslingModel.model_name,
				_model_module: GoslingModel.model_module,
				_model_module_version: GoslingModel.model_module_version,

				_view_name: GoslingView.view_name,
				_view_module: GoslingView.view_module,
				_view_module_version: GoslingView.view_module_version,
			};
		}

		static model_name = 'GoslingModel';
		static model_module = name;
		static model_module_version = version;

		static view_name = 'GoslingView';
		static view_module = name;
		static view_module_version = version;
	}

	class GoslingView extends base.DOMWidgetView {

		async render() {
			let viewconf = JSON.parse(this.model.get("_viewconf"));
			let api = await gosling.embed(this.el, viewconf, {});
			console.log(api);

			this.model.on('msg:custom', msg => {
				msg = JSON.parse(msg);
				console.log(msg);
				try {
					let [fn, ...args] = msg;
					api[fn](...args);
				} catch (e) {
					console.error(e);
				}
			});
		}

	}

	return { GoslingModel, GoslingView };
}
